-- Atomically delete a teacher-owned assessment and its answers.
create or replace function public.delete_assessment_with_related_data(p_external_id text)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user_id uuid := auth.uid();
  v_assessment_id uuid;
  v_deleted_count integer := 0;
begin
  if v_user_id is null then
    raise exception 'Authentication required' using errcode = '42501';
  end if;
  if p_external_id is null or length(p_external_id) < 1 or length(p_external_id) > 200 then
    raise exception 'Invalid assessment id' using errcode = '22023';
  end if;

  select a.id into v_assessment_id
  from public.assessments a
  where a.created_by = v_user_id and a.external_id = p_external_id
  for update;

  if v_assessment_id is null then
    return jsonb_build_object('deleted', false, 'reason', 'not_found');
  end if;

  delete from public.assessment_answers aa where aa.assessment_id = v_assessment_id;
  delete from public.assessments a where a.id = v_assessment_id and a.created_by = v_user_id;
  get diagnostics v_deleted_count = row_count;
  return jsonb_build_object('deleted', v_deleted_count = 1, 'assessment_id', p_external_id);
end;
$$;

revoke all on function public.delete_assessment_with_related_data(text) from public, anon;
grant execute on function public.delete_assessment_with_related_data(text) to authenticated;
