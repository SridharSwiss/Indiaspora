-- Contact form submissions (written by /api/contact with the service role; no public policies).
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  city text,
  role text,
  topic text not null,
  subject text,
  message text not null,
  preferred_contact text,
  best_time text,
  page_url text,
  referrer text,
  user_agent text,
  consent boolean not null default false,
  status text not null default 'new',
  email_status text not null default 'pending',
  email_error text
);
create index if not exists contact_messages_created_idx on public.contact_messages (created_at desc);
create index if not exists contact_messages_email_idx on public.contact_messages (lower(email), created_at desc);
alter table public.contact_messages enable row level security;
