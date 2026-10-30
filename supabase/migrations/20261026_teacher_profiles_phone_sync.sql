-- Anees: keep teacher contact details synchronized with Supabase Auth.
-- Apply in Supabase SQL Editor before deploying the matching frontend.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  email text,
  phone text,
  role text not null default 'teacher',
  experience_years integer not null default 0,
  specialty text,
  school text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles add column if not exists email text;
alter table public.profiles add column if not exists phone text;
alter table public.profiles add column if not exists experience_years integer not null default 0;
alter table public.profiles add column if not exists specialty text;
alter table public.profiles add column if not exists school text;
alter table public.profiles add column if not exists avatar_url text;
alter table public.profiles add column if not exists updated_at timestamptz not null default now();

-- Backfill from Auth so existing accounts get a consistent profile row.
insert into public.profiles (id, full_name, email, phone, role, experience_years, specialty, school, avatar_url, updated_at)
select
  u.id,
  coalesce(u.raw_user_meta_data->>'full_name', u.raw_user_meta_data->>'name', ''),
  u.email,
  nullif(u.raw_user_meta_data->>'phone', ''),
  coalesce(u.raw_user_meta_data->>'role', 'teacher'),
  case when coalesce(u.raw_user_meta_data->>'experience_years', '') ~ '^[0-9]+$' then (u.raw_user_meta_data->>'experience_years')::integer else 0 end,
  nullif(u.raw_user_meta_data->>'specialty', ''),
  nullif(u.raw_user_meta_data->>'school', ''),
  nullif(u.raw_user_meta_data->>'avatar_url', ''),
  now()
from auth.users u
on conflict (id) do update set
  full_name = coalesce(nullif(excluded.full_name, ''), public.profiles.full_name),
  email = excluded.email,
  phone = coalesce(excluded.phone, public.profiles.phone),
  experience_years = excluded.experience_years,
  specialty = coalesce(excluded.specialty, public.profiles.specialty),
  school = coalesce(excluded.school, public.profiles.school),
  avatar_url = coalesce(excluded.avatar_url, public.profiles.avatar_url),
  updated_at = now();

alter table public.profiles enable row level security;
drop policy if exists "Teachers can read own profile" on public.profiles;
create policy "Teachers can read own profile" on public.profiles
  for select to authenticated using (auth.uid() = id);
drop policy if exists "Teachers can insert own profile" on public.profiles;
create policy "Teachers can insert own profile" on public.profiles
  for insert to authenticated with check (auth.uid() = id);
drop policy if exists "Teachers can update own profile" on public.profiles;
create policy "Teachers can update own profile" on public.profiles
  for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);

create or replace function public.sync_anees_auth_profile()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, email, phone, role, experience_years, specialty, school, avatar_url, updated_at)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', ''),
    new.email,
    nullif(new.raw_user_meta_data->>'phone', ''),
    coalesce(new.raw_user_meta_data->>'role', 'teacher'),
    case when coalesce(new.raw_user_meta_data->>'experience_years', '') ~ '^[0-9]+$' then (new.raw_user_meta_data->>'experience_years')::integer else 0 end,
    nullif(new.raw_user_meta_data->>'specialty', ''),
    nullif(new.raw_user_meta_data->>'school', ''),
    nullif(new.raw_user_meta_data->>'avatar_url', ''),
    now()
  )
  on conflict (id) do update set
    full_name = coalesce(nullif(excluded.full_name, ''), public.profiles.full_name),
    email = excluded.email,
    phone = coalesce(excluded.phone, public.profiles.phone),
    role = coalesce(excluded.role, public.profiles.role),
    experience_years = excluded.experience_years,
    specialty = coalesce(excluded.specialty, public.profiles.specialty),
    school = coalesce(excluded.school, public.profiles.school),
    avatar_url = coalesce(excluded.avatar_url, public.profiles.avatar_url),
    updated_at = now();
  return new;
end;
$$;

drop trigger if exists anees_sync_auth_profile on auth.users;
create trigger anees_sync_auth_profile
after insert or update of email, raw_user_meta_data on auth.users
for each row execute function public.sync_anees_auth_profile();
