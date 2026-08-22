-- ============================================================
-- Indiaspora — Supabase Schema
-- Run this in the Supabase SQL editor
-- ============================================================

-- Members table
create table if not exists public.members (
  id           uuid primary key default gen_random_uuid(),
  full_name    text not null,
  email        text unique not null,
  city         text,
  profession   text,
  interests    text[] default '{}',
  newsletter   boolean default true,
  tier         text default 'Community' check (tier in ('Community', 'Member', 'Supporter')),
  status       text default 'pending' check (status in ('pending', 'approved', 'rejected')),
  admin_note   text,
  reviewed_at  timestamptz,
  user_id      uuid references auth.users(id) on delete set null,
  created_at   timestamptz default now()
);

-- Migration: add approval columns to existing members table (run if table already exists)
-- alter table public.members add column if not exists status text default 'pending' check (status in ('pending', 'approved', 'rejected'));
-- alter table public.members add column if not exists admin_note text;
-- alter table public.members add column if not exists reviewed_at timestamptz;

-- Enable RLS
alter table public.members enable row level security;

-- Only admin (service role) can read all members; users can read their own
create policy "admin can read all members"
  on public.members for select
  using (auth.role() = 'service_role');

create policy "users can read own record"
  on public.members for select
  using (auth.uid() = user_id);

-- Anyone can insert (public join form)
create policy "anyone can join"
  on public.members for insert
  with check (true);

-- Page views analytics table
create table if not exists public.page_views (
  id         uuid primary key default gen_random_uuid(),
  path       text not null,
  referrer   text,
  country    text,
  user_agent text,
  created_at timestamptz default now()
);

alter table public.page_views enable row level security;

-- Allow service role to read (admin API uses service role via server component)
create policy "service role can read analytics"
  on public.page_views for select
  using (auth.role() = 'service_role');

-- Allow anon inserts for tracking
create policy "anyone can insert page views"
  on public.page_views for insert
  with check (true);

-- Indexes for performance
create index if not exists members_created_at_idx on public.members (created_at desc);
create index if not exists page_views_created_at_idx on public.page_views (created_at desc);
create index if not exists page_views_path_idx on public.page_views (path);
