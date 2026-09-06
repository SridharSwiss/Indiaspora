-- Add user_id and session_id to page_views for logged-in user tracking
alter table public.page_views
  add column if not exists user_id uuid references auth.users(id) on delete set null,
  add column if not exists session_id text,
  add column if not exists duration_seconds integer;

create index if not exists page_views_user_id_idx on public.page_views(user_id);
create index if not exists page_views_session_id_idx on public.page_views(session_id);
