-- Anees phase 1: normalized classes, students, assessments and assessment answers.
-- This migration has already been applied to the connected Supabase project.
create table if not exists public.classes (
 id uuid primary key default gen_random_uuid(),
 external_id text not null,
 created_by uuid not null references public.profiles(id) on delete cascade,
 name text not null,
 school_name text,
 age_stage text,
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now(),
 unique (created_by, external_id)
);
alter table public.classes enable row level security;
grant select, insert, update, delete on public.classes to authenticated;
revoke all on public.classes from anon;
drop policy if exists classes_read_owner on public.classes;
drop policy if exists classes_insert_owner on public.classes;
drop policy if exists classes_update_owner on public.classes;
drop policy if exists classes_delete_owner on public.classes;
create policy classes_read_owner on public.classes for select to authenticated using (created_by = (select auth.uid()));
create policy classes_insert_owner on public.classes for insert to authenticated with check (created_by = (select auth.uid()));
create policy classes_update_owner on public.classes for update to authenticated using (created_by = (select auth.uid())) with check (created_by = (select auth.uid()));
create policy classes_delete_owner on public.classes for delete to authenticated using (created_by = (select auth.uid()));

alter table public.students add column if not exists external_id text;
alter table public.students add column if not exists class_id uuid references public.classes(id) on delete set null;
alter table public.students add column if not exists parent_name text;
alter table public.students add column if not exists parent_phone text;
alter table public.students add column if not exists parent_email text;
drop index if exists public.students_created_by_external_id_uidx;
create unique index if not exists students_created_by_external_id_uidx on public.students(created_by, external_id);

alter table public.assessments add column if not exists external_id text;
alter table public.assessments add column if not exists metadata jsonb not null default '{}'::jsonb;
drop index if exists public.assessments_created_by_external_id_uidx;
create unique index if not exists assessments_created_by_external_id_uidx on public.assessments(created_by, external_id);

drop policy if exists students_insert_staff on public.students;
drop policy if exists students_update_staff on public.students;
drop policy if exists students_insert_owner on public.students;
drop policy if exists students_update_owner on public.students;
create policy students_insert_owner on public.students for insert to authenticated with check (created_by = (select auth.uid()));
create policy students_update_owner on public.students for update to authenticated using (created_by = (select auth.uid())) with check (created_by = (select auth.uid()));
drop policy if exists assessments_insert_staff on public.assessments;
drop policy if exists assessments_update_staff on public.assessments;
drop policy if exists assessments_insert_owner on public.assessments;
drop policy if exists assessments_update_owner on public.assessments;
create policy assessments_insert_owner on public.assessments for insert to authenticated with check (created_by = (select auth.uid()));
create policy assessments_update_owner on public.assessments for update to authenticated using (created_by = (select auth.uid())) with check (created_by = (select auth.uid()));
drop policy if exists answers_write_staff on public.assessment_answers;
drop policy if exists answers_insert_owner on public.assessment_answers;
drop policy if exists answers_update_owner on public.assessment_answers;
drop policy if exists answers_delete_owner on public.assessment_answers;
create policy answers_insert_owner on public.assessment_answers for insert to authenticated with check (exists (select 1 from public.assessments a where a.id = assessment_id and a.created_by = (select auth.uid())));
create policy answers_update_owner on public.assessment_answers for update to authenticated using (exists (select 1 from public.assessments a where a.id = assessment_id and a.created_by = (select auth.uid()))) with check (exists (select 1 from public.assessments a where a.id = assessment_id and a.created_by = (select auth.uid())));
create policy answers_delete_owner on public.assessment_answers for delete to authenticated using (exists (select 1 from public.assessments a where a.id = assessment_id and a.created_by = (select auth.uid())));

-- Keep the public anon role from directly reading student and assessment tables.
revoke all on table public.classes, public.students, public.assessments, public.assessment_answers, public.profiles, public.ai_analyses, public.notifications, public.anees_user_state from anon;
grant select, insert, update, delete on table public.classes, public.students, public.assessments, public.assessment_answers to authenticated;
grant select on table public.profiles to authenticated;
grant select, insert, update, delete on table public.anees_user_state to authenticated;
