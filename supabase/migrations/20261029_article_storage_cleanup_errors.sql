-- Retry/audit ledger for article storage cleanup failures.
create table if not exists public.article_storage_cleanup_errors (
  drive_file_id text primary key,
  storage_path text not null,
  last_error text not null,
  attempts integer not null default 1,
  first_failed_at timestamptz not null default now(),
  last_failed_at timestamptz not null default now()
);
alter table public.article_storage_cleanup_errors enable row level security;
revoke all on table public.article_storage_cleanup_errors from anon, authenticated;
