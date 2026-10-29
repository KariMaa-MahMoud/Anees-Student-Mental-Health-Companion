-- Anees browser-storage removal support and score hardening.
-- Supabase Auth's own persisted session remains enabled; application data is never stored by app code in Web Storage.

alter table public.assessments
  drop constraint if exists assessments_total_score_check;
alter table public.assessments
  add constraint assessments_total_score_check check (total_score >= 0 and total_score <= 84);

-- Storage upsert needs SELECT as well as INSERT and UPDATE on the user's own avatar object.
drop policy if exists "Users can read their own Anees avatar" on storage.objects;
create policy "Users can read their own Anees avatar"
  on storage.objects
  for select
  to authenticated
  using (
    bucket_id = 'anees-avatars'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

-- This integration table is unused by the app and was explicitly marked for removal.
drop table if exists public.class_sheet_student_links;
