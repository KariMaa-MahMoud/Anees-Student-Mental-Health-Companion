-- Anees articles synchronized from a dedicated Google Drive folder by a NEW n8n workflow.
-- This migration does not alter existing assessment, student, profile, or parent-form tables.
create table if not exists public.articles (
  drive_file_id text primary key,
  title text not null,
  excerpt text not null default '',
  content text not null default '',
  mime_type text not null default 'application/vnd.google-apps.document',
  web_view_link text,
  modified_time timestamptz,
  published boolean not null default true,
  synced_at timestamptz not null default now()
);

create index if not exists articles_published_modified_idx
  on public.articles (published, modified_time desc nulls last);

alter table public.articles enable row level security;
revoke all on public.articles from anon, authenticated;
grant select on public.articles to anon, authenticated;

drop policy if exists articles_public_read_published on public.articles;
create policy articles_public_read_published
  on public.articles for select to anon, authenticated
  using (published = true);

-- Only service_role (used by the dedicated n8n sync workflow) can write/delete articles.
-- Do not grant INSERT/UPDATE/DELETE to anon or authenticated.

do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'articles'
  ) then
    alter publication supabase_realtime add table public.articles;
  end if;
exception when undefined_object then
  raise notice 'supabase_realtime publication is unavailable; articles still load on page navigation/refresh.';
end $$;
