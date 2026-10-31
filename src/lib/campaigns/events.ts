import { UPCOMING_EVENTS } from "@/lib/data";
import type { DigestEvent } from "./templates";

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

// Handles "14 Nov 2026", "Nov 14, 2026", "Oct 16–21, 2026"; returns null if unsure.
export function parseEventDate(s: string): Date | null {
  const year = s.match(/\b(20\d{2})\b/)?.[1];
  const mon = s.toLowerCase().match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*/)?.[1];
  const day = s.match(/\b(\d{1,2})\b(?!\d)/)?.[1];
  if (!year || !mon || !day) return null;
  const d = new Date(Date.UTC(+year, MONTHS.indexOf(mon), +day));
  return isNaN(d.getTime()) ? null : d;
}

export function upcomingForDigest(extra: DigestEvent[] = [], windowDays = 45): DigestEvent[] {
  const now = Date.now(), end = now + windowDays * 86400000;
  return [...UPCOMING_EVENTS.map(e => ({ title: e.title, date: e.date, location: e.location, organiser: e.organiser, url: e.url })), ...extra]
    .map(e => ({ e, d: parseEventDate(e.date) }))
    .filter(x => x.d && x.d.getTime() >= now - 86400000 && x.d.getTime() <= end)
    .sort((a, b) => a.d!.getTime() - b.d!.getTime())
    .map(x => ({ ...x.e, day: String(x.d!.getUTCDate()), mon: x.d!.toLocaleString("en-GB", { month: "short", timeZone: "UTC" }).toUpperCase() })).slice(0, 8);
}
