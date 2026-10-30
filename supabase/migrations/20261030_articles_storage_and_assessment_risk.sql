-- Anees: persist assessment risk consistently and support rich article files.
-- Review against the target Supabase project before applying to production.

alter table public.articles add column if not exists content_html text not null default '';
alter table public.articles add column if not exists storage_path text;
alter table public.articles add column if not exists file_url text;
alter table public.articles add column if not exists content_format text not null default 'text';

-- Public articles are intentionally readable, but only trusted server-side jobs should write objects.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('anees-articles', 'anees-articles', true, 52428800,
  array['application/pdf','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.template','application/vnd.google-apps.document','text/html','application/zip'])
on conflict (id) do update set public = true, file_size_limit = 52428800,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists anees_articles_public_read on storage.objects;
create policy anees_articles_public_read on storage.objects
  for select to anon, authenticated using (bucket_id = 'anees-articles');

-- risk_level is a denormalized column used by reports; keep it in sync with the authoritative scorer metadata.
create or replace function public.sync_assessment_risk_level_from_metadata()
returns trigger language plpgsql set search_path = '' as $$
begin
  if jsonb_typeof(coalesce(new.metadata, '{}'::jsonb)) = 'object' then
    new.risk_level := coalesce(
      nullif(new.metadata->>'riskLevel', ''),
      nullif(new.metadata->>'statusClass', ''),
      new.risk_level
    );
  end if;
  return new;
end;
$$;

drop trigger if exists assessments_sync_risk_level_from_metadata on public.assessments;
create trigger assessments_sync_risk_level_from_metadata
before insert or update of metadata, risk_level on public.assessments
for each row execute function public.sync_assessment_risk_level_from_metadata();

update public.assessments
set risk_level = coalesce(nullif(metadata->>'riskLevel',''), nullif(metadata->>'statusClass',''))
where risk_level is null
  and (nullif(metadata->>'riskLevel','') is not null or nullif(metadata->>'statusClass','') is not null);
