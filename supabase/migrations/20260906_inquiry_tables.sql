-- Seek Advice enquiries
create table if not exists advice_inquiries (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  phone       text,
  location    text,
  topic       text,
  query       text not null,
  status      text not null default 'new',
  created_at  timestamptz not null default now()
);

alter table advice_inquiries enable row level security;

-- Only admin service role can read; anyone can insert (public form)
create policy "public_insert_advice" on advice_inquiries
  for insert with check (true);

create policy "admin_select_advice" on advice_inquiries
  for select using (false); -- blocked via RLS; admin uses service role key


-- Advertise With Us enquiries
create table if not exists ad_inquiries (
  id               uuid primary key default gen_random_uuid(),
  name             text not null,
  email            text not null,
  phone            text,
  company          text,
  website          text,
  ad_type          text not null,
  target_audience  text,
  duration         text,
  budget           text,
  message          text,
  status           text not null default 'new',
  created_at       timestamptz not null default now()
);

alter table ad_inquiries enable row level security;

create policy "public_insert_ad" on ad_inquiries
  for insert with check (true);

create policy "admin_select_ad" on ad_inquiries
  for select using (false); -- admin uses service role key (bypasses RLS)
