-- Align page_views with the tracking code and add per-visitor / login tables.
alter table public.page_views alter column pathname drop not null;
alter table public.page_views
  add column if not exists path text,
  add column if not exists user_agent text,
  add column if not exists user_id uuid references auth.users(id) on delete set null,
  add column if not exists session_id text,
  add column if not exists visitor_id text,
  add column if not exists duration_seconds integer,
  add column if not exists browser text,
  add column if not exists os text;
create index if not exists page_views_created_idx on public.page_views(created_at desc);
create index if not exists page_views_user_id_idx on public.page_views(user_id);
create index if not exists page_views_session_id_idx on public.page_views(session_id);
create index if not exists page_views_visitor_id_idx on public.page_views(visitor_id);

-- One row per browser (visitor_id), linked to the account once they log in.
create table if not exists public.site_visitors (
  visitor_id    text primary key,
  user_id       uuid references auth.users(id) on delete set null,
  email         text,
  full_name     text,
  first_seen    timestamptz not null default now(),
  last_seen     timestamptz not null default now(),
  visit_count   integer not null default 1,
  page_count    integer not null default 1,
  country       text,
  device        text,
  browser       text,
  os            text,
  first_referrer text,
  last_path     text
);
create index if not exists site_visitors_user_id_idx on public.site_visitors(user_id);
create index if not exists site_visitors_last_seen_idx on public.site_visitors(last_seen desc);

-- One row per successful login.
create table if not exists public.user_logins (
  id         bigint generated always as identity primary key,
  user_id    uuid references auth.users(id) on delete cascade,
  email      text,
  provider   text,
  country    text,
  device     text,
  browser    text,
  os         text,
  created_at timestamptz not null default now()
);
create index if not exists user_logins_user_id_idx on public.user_logins(user_id, created_at desc);

-- Service-role access only (admin API); no public policies.
alter table public.site_visitors enable row level security;
alter table public.user_logins enable row level security;
