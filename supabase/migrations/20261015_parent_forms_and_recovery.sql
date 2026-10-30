-- Parent form tokens and cross-browser submissions for Anees.
create table if not exists public.parent_form_links (
  id uuid primary key default gen_random_uuid(), token_hash text not null unique,
  student_external_id text not null, student_name text,
  created_by uuid not null references auth.users(id) on delete cascade,
  enabled boolean not null default true, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
alter table public.parent_form_links enable row level security;
revoke all on public.parent_form_links from anon;
grant select, insert, update, delete on public.parent_form_links to authenticated;
drop policy if exists parent_form_links_owner_select on public.parent_form_links;
drop policy if exists parent_form_links_owner_insert on public.parent_form_links;
drop policy if exists parent_form_links_owner_update on public.parent_form_links;
drop policy if exists parent_form_links_owner_delete on public.parent_form_links;
create policy parent_form_links_owner_select on public.parent_form_links for select to authenticated using (created_by = (select auth.uid()));
create policy parent_form_links_owner_insert on public.parent_form_links for insert to authenticated with check (created_by = (select auth.uid()));
create policy parent_form_links_owner_update on public.parent_form_links for update to authenticated using (created_by = (select auth.uid())) with check (created_by = (select auth.uid()));
create policy parent_form_links_owner_delete on public.parent_form_links for delete to authenticated using (created_by = (select auth.uid()));
create index if not exists parent_form_links_created_by_idx on public.parent_form_links(created_by);

create table if not exists public.parent_form_submissions (
  id uuid primary key default gen_random_uuid(), submission_external_id text not null,
  link_id uuid not null references public.parent_form_links(id) on delete cascade,
  created_by uuid not null references auth.users(id) on delete cascade,
  student_external_id text not null, submission jsonb not null,
  submitted_at timestamptz not null default now(), unique (created_by, submission_external_id)
);
alter table public.parent_form_submissions enable row level security;
revoke all on public.parent_form_submissions from anon;
grant select, insert, update, delete on public.parent_form_submissions to authenticated;
drop policy if exists parent_form_submissions_owner_select on public.parent_form_submissions;
drop policy if exists parent_form_submissions_owner_insert on public.parent_form_submissions;
drop policy if exists parent_form_submissions_owner_update on public.parent_form_submissions;
drop policy if exists parent_form_submissions_owner_delete on public.parent_form_submissions;
create policy parent_form_submissions_owner_select on public.parent_form_submissions for select to authenticated using (created_by = (select auth.uid()));
create policy parent_form_submissions_owner_insert on public.parent_form_submissions for insert to authenticated with check (created_by = (select auth.uid()));
create policy parent_form_submissions_owner_update on public.parent_form_submissions for update to authenticated using (created_by = (select auth.uid())) with check (created_by = (select auth.uid()));
create policy parent_form_submissions_owner_delete on public.parent_form_submissions for delete to authenticated using (created_by = (select auth.uid()));
create index if not exists parent_form_submissions_link_id_idx on public.parent_form_submissions(link_id);
create index if not exists parent_form_submissions_owner_date_idx on public.parent_form_submissions(created_by, submitted_at desc);

create or replace function public.submit_parent_form_by_token(p_token_hash text, p_submission_external_id text, p_submission jsonb)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare v_link public.parent_form_links%rowtype; v_id uuid; v_answer record; v_score numeric; v_answer_count integer;
begin
  if p_token_hash is null or length(p_token_hash) <> 64 or p_submission_external_id is null or length(p_submission_external_id) > 120 or p_submission is null or jsonb_typeof(p_submission) <> 'object' then raise exception 'Invalid submission'; end if;
  if jsonb_typeof(p_submission->'answers') <> 'object' then raise exception 'Answers are required'; end if;
  select count(*) into v_answer_count from jsonb_each(p_submission->'answers');
  if v_answer_count < 1 or v_answer_count > 100 then raise exception 'Invalid answer count'; end if;
  for v_answer in select key, value from jsonb_each(p_submission->'answers') loop
    if jsonb_typeof(v_answer.value) <> 'number' then raise exception 'Answer scores must be numeric'; end if;
    v_score := (v_answer.value #>> '{}')::numeric;
    if v_score < 0 or v_score > 4 or v_score <> trunc(v_score) then raise exception 'Answer scores must be integers from 0 to 4'; end if;
  end loop;
  select * into v_link from public.parent_form_links where token_hash = p_token_hash and enabled = true;
  if not found then raise exception 'Invalid or expired parent link'; end if;
  insert into public.parent_form_submissions(submission_external_id,link_id,created_by,student_external_id,submission)
  values(p_submission_external_id,v_link.id,v_link.created_by,v_link.student_external_id,(p_submission - 'parent' - 'phone' - 'email') || jsonb_build_object('studentId',v_link.student_external_id,'child',coalesce(v_link.student_name,p_submission->>'child'),'submittedAt',now()))
  on conflict(created_by,submission_external_id) do update set submission = excluded.submission returning id into v_id;
  return jsonb_build_object('ok',true,'submissionId',v_id,'studentId',v_link.student_external_id,'studentName',v_link.student_name);
end; $$;
revoke all on function public.submit_parent_form_by_token(text,text,jsonb) from public;
grant execute on function public.submit_parent_form_by_token(text,text,jsonb) to anon, authenticated;
