-- Event submissions table
create table if not exists public.event_submissions (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  organiser text not null,
  date text not null,
  location text not null,
  category text not null check (category in ('Festival','Networking','Cultural','Food','Arts','Sports','Religious','Other')),
  description text not null,
  url text,
  contact_email text,
  contact_name text,
  image_url text,
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  review_notes text,
  reviewed_at timestamptz,
  created_at timestamptz default now()
);

-- Only allow reads for admins; writes are open (public submissions)
alter table public.event_submissions enable row level security;

create policy "Anyone can submit events"
  on public.event_submissions for insert
  with check (true);

create policy "Admins can read all submissions"
  on public.event_submissions for select
  using (auth.jwt() ->> 'email' = current_setting('app.admin_email', true));

create policy "Admins can update submissions"
  on public.event_submissions for update
  using (auth.jwt() ->> 'email' = current_setting('app.admin_email', true));

-- Approved events table (what the site displays)
create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  organiser text,
  date text not null,
  location text not null,
  category text not null,
  description text not null,
  color text default 'bg-violet-500',
  url text,
  image text,
  source text default 'submission',
  submission_id uuid references public.event_submissions(id),
  active boolean default true,
  created_at timestamptz default now()
);

alter table public.events enable row level security;

create policy "Public can read active events"
  on public.events for select
  using (active = true);

create policy "Admins can manage events"
  on public.events for all
  using (auth.jwt() ->> 'email' = current_setting('app.admin_email', true));
