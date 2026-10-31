create table if not exists public.email_campaigns (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('digest','login_nudge','festival','custom')),
  subject text not null,
  html text not null,
  audience text not null,
  status text not null default 'draft' check (status in ('draft','test_sent','sent')),
  recipients integer not null default 0,
  failed integer not null default 0,
  ai_model text,
  created_at timestamptz not null default now(),
  sent_at timestamptz
);
alter table public.email_campaigns enable row level security;
