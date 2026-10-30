-- Anees production hardening: atomic owner-scoped deletes.
-- Apply this migration in Supabase before deploying the matching frontend.
create or replace function public.delete_student_with_related_data(p_external_id text)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user_id uuid := auth.uid();
  v_student_id uuid;
  v_assessment_ids uuid[];
  v_deleted_count integer := 0;
begin
  if v_user_id is null then
    raise exception 'Authentication required' using errcode = '42501';
  end if;
  if p_external_id is null or length(p_external_id) < 1 or length(p_external_id) > 200 then
    raise exception 'Invalid student id' using errcode = '22023';
  end if;

  select s.id into v_student_id
  from public.students s
  where s.created_by = v_user_id and s.external_id = p_external_id
  for update;

  if v_student_id is null then
    return jsonb_build_object('deleted', false, 'reason', 'not_found');
  end if;

  select coalesce(array_agg(a.id), array[]::uuid[]) into v_assessment_ids
  from public.assessments a
  where a.created_by = v_user_id and a.student_id = v_student_id;

  if cardinality(v_assessment_ids) > 0 then
    delete from public.assessment_answers aa where aa.assessment_id = any(v_assessment_ids);
    delete from public.assessments a where a.id = any(v_assessment_ids) and a.created_by = v_user_id;
  end if;

  update public.parent_form_links pfl
  set enabled = false, updated_at = now()
  where pfl.created_by = v_user_id and pfl.student_external_id = p_external_id;

  delete from public.students s where s.id = v_student_id and s.created_by = v_user_id;
  get diagnostics v_deleted_count = row_count;
  return jsonb_build_object('deleted', v_deleted_count = 1, 'student_id', p_external_id);
end;
$$;

create or replace function public.delete_class_with_related_data(p_external_id text)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user_id uuid := auth.uid();
  v_class_id uuid;
  v_student_ids uuid[];
  v_student_external_ids text[];
  v_assessment_ids uuid[];
  v_deleted_count integer := 0;
begin
  if v_user_id is null then
    raise exception 'Authentication required' using errcode = '42501';
  end if;
  if p_external_id is null or length(p_external_id) < 1 or length(p_external_id) > 200 then
    raise exception 'Invalid class id' using errcode = '22023';
  end if;

  select c.id into v_class_id
  from public.classes c
  where c.created_by = v_user_id and c.external_id = p_external_id
  for update;

  if v_class_id is null then
    return jsonb_build_object('deleted', false, 'reason', 'not_found');
  end if;

  select coalesce(array_agg(s.id), array[]::uuid[]),
         coalesce(array_agg(s.external_id), array[]::text[])
    into v_student_ids, v_student_external_ids
  from public.students s
  where s.created_by = v_user_id and s.class_id = v_class_id;

  select coalesce(array_agg(a.id), array[]::uuid[]) into v_assessment_ids
  from public.assessments a
  where a.created_by = v_user_id and a.student_id = any(v_student_ids);

  if cardinality(v_assessment_ids) > 0 then
    delete from public.assessment_answers aa where aa.assessment_id = any(v_assessment_ids);
    delete from public.assessments a where a.id = any(v_assessment_ids) and a.created_by = v_user_id;
  end if;

  if cardinality(v_student_external_ids) > 0 then
    update public.parent_form_links pfl
    set enabled = false, updated_at = now()
    where pfl.created_by = v_user_id and pfl.student_external_id = any(v_student_external_ids);
  end if;

  if cardinality(v_student_ids) > 0 then
    delete from public.students s where s.id = any(v_student_ids) and s.created_by = v_user_id;
  end if;

  delete from public.classes c where c.id = v_class_id and c.created_by = v_user_id;
  get diagnostics v_deleted_count = row_count;
  return jsonb_build_object('deleted', v_deleted_count = 1, 'class_id', p_external_id,
                            'students_deleted', cardinality(v_student_ids));
end;
$$;

revoke all on function public.delete_student_with_related_data(text) from public, anon;
revoke all on function public.delete_class_with_related_data(text) from public, anon;
grant execute on function public.delete_student_with_related_data(text) to authenticated;
grant execute on function public.delete_class_with_related_data(text) to authenticated;


-- Atomic answer replacement used by the n8n assessment workflow.
-- Kept under a new name so an unknown existing function signature is not overwritten.
create or replace function public.save_assessment_answers_atomic(p_answers jsonb)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_assessment_id uuid;
  v_item jsonb;
  v_question_key text;
  v_score integer;
  v_domain text;
  v_count integer := 0;
  v_allowed text[] := array[
    's1','s2','s3','s4','m1','m2','m3','m4','c1','c2','c3','c4',
    'f1','f2','f3','f4','t1','t2','t3','t4'
  ];
begin
  if coalesce(auth.role(), '') <> 'service_role' then
    raise exception 'Service role required' using errcode = '42501';
  end if;
  if p_answers is null or jsonb_typeof(p_answers) <> 'array' or jsonb_array_length(p_answers) <> 20 then
    raise exception 'Exactly 20 assessment answers are required' using errcode = '22023';
  end if;

  for v_item in select value from jsonb_array_elements(p_answers) loop
    if v_item->>'assessment_id' is null then
      raise exception 'assessment_id is required' using errcode = '22023';
    end if;
    if v_assessment_id is null then
      v_assessment_id := (v_item->>'assessment_id')::uuid;
    elsif v_assessment_id <> (v_item->>'assessment_id')::uuid then
      raise exception 'All answers must belong to the same assessment' using errcode = '22023';
    end if;

    v_question_key := v_item->>'question_key';
    if v_question_key is null or not (v_question_key = any(v_allowed)) then
      raise exception 'Unsupported question key: %', v_question_key using errcode = '22023';
    end if;
    if jsonb_typeof(v_item->'score') <> 'number' then
      raise exception 'Answer score must be numeric' using errcode = '22023';
    end if;
    v_score := (v_item->>'score')::integer;
    if v_score < 0 or v_score > 4 or (v_item->>'score')::numeric <> v_score then
      raise exception 'Answer score must be an integer from 0 to 4' using errcode = '22023';
    end if;
    v_domain := v_item->>'domain';
    if v_domain is null or v_domain not in ('activity','mood','social','attention','stress') then
      raise exception 'Unsupported answer domain' using errcode = '22023';
    end if;
    v_count := v_count + 1;
  end loop;

  if v_assessment_id is null or not exists (
    select 1 from public.assessments a where a.id = v_assessment_id
  ) then
    raise exception 'Assessment not found' using errcode = 'P0002';
  end if;

  if (select count(distinct item->>'question_key') from jsonb_array_elements(p_answers) as x(item)) <> 20 then
    raise exception 'Duplicate question keys are not allowed' using errcode = '22023';
  end if;

  delete from public.assessment_answers aa where aa.assessment_id = v_assessment_id;
  insert into public.assessment_answers (assessment_id, question_key, domain, score)
  select
    (item->>'assessment_id')::uuid,
    item->>'question_key',
    item->>'domain',
    (item->>'score')::integer
  from jsonb_array_elements(p_answers) as x(item);

  return jsonb_build_object('saved', true, 'assessment_id', v_assessment_id, 'answer_count', v_count);
end;
$$;

revoke all on function public.save_assessment_answers_atomic(jsonb) from public, anon, authenticated;
grant execute on function public.save_assessment_answers_atomic(jsonb) to service_role;


-- Persist the complete analysis result while preserving unrelated assessment metadata.
create or replace function public.save_assessment_result_atomic(
  p_assessment_id uuid,
  p_total_score integer,
  p_notes text,
  p_status text,
  p_submitted_at timestamptz,
  p_metadata jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_row public.assessments%rowtype;
begin
  if coalesce(auth.role(), '') <> 'service_role' then
    raise exception 'Service role required' using errcode = '42501';
  end if;
  if p_assessment_id is null or p_total_score is null or p_total_score < 0 or p_total_score > 84 then
    raise exception 'Invalid assessment result' using errcode = '22023';
  end if;
  if p_metadata is null or jsonb_typeof(p_metadata) <> 'object' then
    raise exception 'Metadata must be a JSON object' using errcode = '22023';
  end if;

  update public.assessments a
  set total_score = p_total_score,
      notes = nullif(left(coalesce(p_notes, ''), 10000), ''),
      status = left(coalesce(p_status, 'processed'), 80),
      submitted_at = coalesce(p_submitted_at, now()),
      metadata = coalesce(a.metadata, '{}'::jsonb) || p_metadata
  where a.id = p_assessment_id
  returning a.* into v_row;

  if not found then
    raise exception 'Assessment not found' using errcode = 'P0002';
  end if;

  return jsonb_build_object(
    'persisted', true,
    'assessment_id', v_row.id,
    'total_score', v_row.total_score,
    'status', v_row.status,
    'submitted_at', v_row.submitted_at,
    'metadata', v_row.metadata
  );
end;
$$;

revoke all on function public.save_assessment_result_atomic(uuid, integer, text, text, timestamptz, jsonb) from public, anon, authenticated;
grant execute on function public.save_assessment_result_atomic(uuid, integer, text, text, timestamptz, jsonb) to service_role;
