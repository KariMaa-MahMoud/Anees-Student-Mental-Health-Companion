-- The website and n8n use save_assessment_answers_atomic. Disable the older public SECURITY DEFINER writer.
revoke all on function public.save_assessment_answers(jsonb) from public, anon, authenticated;
