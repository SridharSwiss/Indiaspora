import { UPCOMING_EVENTS } from "@/lib/data";
import { createAdminClient } from "@/lib/supabase/admin";
import { parseEventDate } from "@/lib/campaigns/events";

export type HomeEvent = {
  title: string; date: string; location: string; category: string; description: string;
  organiser?: string; url?: string; image?: string; city: string; start: Date; end: Date;
};

const CITIES: [string, RegExp][] = [
  ["Zurich", /z(ü|u|ue)rich|langnau|dietikon|schlieren|affoltern|winterthur|wetzikon|oerlikon/i],
  ["Geneva", /gen(e|è)va|gen(e|è)ve|geneve/i],
  ["Basel", /basel|pratteln|muttenz/i],
  ["Bern", /\bbern(e)?\b/i],
  ["Lausanne", /lausanne|epfl/i],
  ["Lucerne", /lucerne|luzern/i],
  ["Lugano", /lugano|ticino/i],
  ["St. Gallen", /st\.? ?gallen/i],
  ["Zug", /\bzug\b/i],
];
export const cityOf = (loc: string) => CITIES.find(([, re]) => re.test(loc))?.[0] ?? (loc.split(",").pop() ?? loc).trim();

// End of event: handles ranges like "Oct 16–21, 2026"; otherwise same day as start.
function endOf(date: string, start: Date): Date {
  const r = date.match(/\b(\d{1,2})\s*[–-]\s*(\d{1,2})\b/);
  const d = new Date(start);
  if (r && +r[2] >= +r[1]) d.setUTCDate(+r[2]);
  return d;
}

export async function getHomeEvents(count = 3): Promise<HomeEvent[]> {
  let db: Record<string, string>[] = [];
  try {
    const { data } = await createAdminClient().from("events").select("*").eq("event_status", "approved");
    db = (data ?? []) as Record<string, string>[];
  } catch { /* fall back to curated list */ }

  const raw = [
    ...UPCOMING_EVENTS.map(e => ({ ...e, image: (e as { image?: string }).image })),
    ...db.map(e => ({ title: e.title, date: e.date, location: e.location ?? "", category: e.category ?? "Community", description: e.description ?? "", organiser: e.organiser, url: e.url, image: e.image_url ?? e.image })),
  ];
  const today = new Date(); today.setUTCHours(0, 0, 0, 0);
  const seen = new Set<string>();
  const upcoming: HomeEvent[] = [];
  for (const e of raw) {
    if (!e.title || !e.date || /to be confirmed|tbc/i.test(e.date)) continue;
    const start = parseEventDate(e.date);
    if (!start) continue;
    const end = endOf(e.date, start);
    if (end.getTime() < today.getTime()) continue;
    const key = e.title.trim().toLowerCase();
    if (seen.has(key)) continue; seen.add(key);
    upcoming.push({ ...e, image: e.image || "/images/events/kalamela.webp", city: cityOf(e.location), start, end });
  }
  upcoming.sort((a, b) => a.start.getTime() - b.start.getTime());

  // Mix: soonest event per different city first, then fill any gaps with the next soonest.
  const picked: HomeEvent[] = [];
  const cities = new Set<string>();
  for (const e of upcoming) if (picked.length < count && !cities.has(e.city)) { picked.push(e); cities.add(e.city); }
  for (const e of upcoming) if (picked.length < count && !picked.includes(e)) picked.push(e);
  return picked.sort((a, b) => a.start.getTime() - b.start.getTime());
}
