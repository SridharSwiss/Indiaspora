-- Harden Row Level Security before the Android app uses the public (anon) key.
-- All website server code uses the service-role key, which bypasses RLS, so nothing on the site changes.

-- events: the public sees only approved AND active events (previously "active" alone exposed pending events)
drop policy if exists "Public can read active events" on public.events;
drop policy if exists "Public read approved events" on public.events;
create policy "Public read approved events" on public.events
  for select to anon, authenticated
  using (event_status = 'approved' and coalesce(active, true));

-- enquiries, page_views: the old policies were USING (true) for ALL roles, i.e. anyone could read, edit or delete
drop policy if exists "service role access enquiries" on public.enquiries;
drop policy if exists "service role access page_views" on public.page_views;

-- No client role needs TRUNCATE / TRIGGER / REFERENCES on any table
revoke truncate, trigger, references on all tables in schema public from anon, authenticated;
