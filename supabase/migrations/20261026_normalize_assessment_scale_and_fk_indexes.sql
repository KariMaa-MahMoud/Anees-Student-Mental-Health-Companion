-- Normalize persisted assessment percentages to the platform's 84-point scale.
update public.assessments
set metadata =
  jsonb_set(
    jsonb_set(coalesce(metadata, '{}'::jsonb), '{totalPossible}', '84'::jsonb, true),
    '{totalPercent}',
    to_jsonb(round((coalesce(total_score, 0)::numeric / 84) * 100)::integer),
    true
  )
where coalesce(metadata->>'totalPossible', '') <> '84'
   or coalesce(metadata->>'totalPercent', '') <> to_jsonb(round((coalesce(total_score, 0)::numeric / 84) * 100)::integer)::text;

create index if not exists students_class_id_idx on public.students(class_id);
create index if not exists notifications_student_id_idx on public.notifications(student_id);
create index if not exists notifications_assessment_id_idx on public.notifications(assessment_id);
create index if not exists notifications_recipient_user_id_idx on public.notifications(recipient_user_id);
create index if not exists ai_analyses_reviewed_by_idx on public.ai_analyses(reviewed_by);
create index if not exists class_sheet_integrations_created_by_idx on public.class_sheet_integrations(created_by);
