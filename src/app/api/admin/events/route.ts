import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

const CATEGORY_COLORS: Record<string, string> = {
  Cultural:   "bg-yellow-500",
  Festival:   "bg-orange-500",
  Networking: "bg-blue-500",
  Business:   "bg-indigo-500",
  Food:       "bg-green-500",
  Arts:       "bg-purple-500",
  Sports:     "bg-red-500",
  Spiritual:  "bg-pink-500",
  Education:  "bg-teal-500",
  Other:      "bg-gray-500",
};

// Keywords → category
const CATEGORY_KEYWORDS: [string, string[]][] = [
  ["Spiritual",  ["puja", "aarti", "temple", "iskcon", "mandir", "prayer", "bhajan", "kirtan", "yoga", "meditation", "navratri garba", "ram navami", "hanuman", "janmashtami", "guru purnima", "diwali puja", "ganesh", "durga"]],
  ["Festival",   ["diwali", "holi", "navratri", "garba", "dandiya", "pongal", "onam", "baisakhi", "eid", "christmas", "festival", "utsav", "utsav", "celebration", "mela"]],
  ["Networking", ["networking", "mixer", "chamber", "summit", "forum", "sicc", "iagz", "business forum", "meet"]],
  ["Business",   ["business", "startup", "investment", "trade", "entrepreneur", "conference", "seminar", "panel", "workshop"]],
  ["Food",       ["food", "restaurant", "cooking", "chef", "cuisine", "thali", "biryani", "spice", "bazaar food", "tasting"]],
  ["Arts",       ["music", "dance", "bollywood", "classical", "carnatic", "bharatnatyam", "art", "film", "cinema", "theatre", "cultural evening", "concert", "performance"]],
  ["Sports",     ["cricket", "badminton", "kabaddi", "sport", "tournament", "match", "fitness"]],
  ["Cultural",   ["cultural", "community", "indian", "association", "independence day", "republic day", "celebration", "gathering"]],
  ["Education",  ["education", "study", "school", "university", "student", "scholarship", "epfl", "eth", "seminar", "lecture"]],
];

function detectCategory(text: string): string {
  const lower = text.toLowerCase();
  for (const [category, keywords] of CATEGORY_KEYWORDS) {
    if (keywords.some(k => lower.includes(k))) return category;
  }
  return "Other";
}

// Swiss city names to look for
const SWISS_CITIES = ["zurich", "zürich", "geneva", "genève", "genf", "basel", "bern", "berne", "lausanne", "lugano", "winterthur", "st. gallen", "st gallen", "zug", "lucerne", "luzern"];

function extractLocation(text: string): string {
  const lower = text.toLowerCase();
  for (const city of SWISS_CITIES) {
    if (lower.includes(city)) {
      // Try to find a venue on the same line
      const lines = text.split(/\n/);
      for (const line of lines) {
        if (line.toLowerCase().includes(city)) {
          // Return the line trimmed, capped at 80 chars
          const trimmed = line.replace(/^[-•*]\s*/, "").trim();
          if (trimmed.length < 80) return trimmed;
        }
      }
      // Fallback: just return the capitalised city name
      const display = city.charAt(0).toUpperCase() + city.slice(1);
      return `${display}, Switzerland`;
    }
  }
  return "Switzerland";
}

// Date patterns: look for common formats
const DATE_PATTERNS = [
  // "15 October 2026", "15 Oct 2026"
  /\b(\d{1,2})\s+(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+(\d{4})\b/i,
  // "October 15, 2026"
  /\b(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+(\d{1,2}),?\s+(\d{4})\b/i,
  // "15/10/2026" or "15.10.2026"
  /\b(\d{1,2})[.\/](\d{1,2})[.\/](20\d{2})\b/,
  // "2026-10-15"
  /\b(20\d{2})[-](\d{2})[-](\d{2})\b/,
  // Just month + year: "October 2026"
  /\b(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+(20\d{2})\b/i,
];

function extractDate(text: string): string {
  for (const pattern of DATE_PATTERNS) {
    const m = text.match(pattern);
    if (m) return m[0];
  }
  return "";
}

function formatIsoDate(raw: string): string {
  const iso = raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) {
    const d = new Date(+iso[1], +iso[2] - 1, +iso[3]);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }
  return raw;
}

function extractUrl(text: string): string {
  const m = text.match(/https?:\/\/[^\s,)"'\]]+/i);
  return m ? m[0] : "";
}

function extractTitle(text: string): string {
  // Use the first non-empty line that looks like a title (not a URL, not a date line)
  const lines = text.split(/\n/).map(l => l.trim()).filter(Boolean);
  for (const line of lines) {
    if (line.startsWith("http")) continue;
    if (line.length > 4 && line.length < 120) return line.replace(/^[-•*#]+\s*/, "");
  }
  return lines[0]?.slice(0, 80) ?? "Community Event";
}

function extractOrganiser(text: string): string {
  // Known orgs
  const orgs = [
    ["IAGZ", "Indian Association Greater Zurich (IAGZ)"],
    ["TASC", "Tamil Association of Switzerland (TASC)"],
    ["SICC", "Swiss Indian Chamber of Commerce (SICC)"],
    ["SwissPuja", "SwissPuja"],
    ["TeluguSwiss", "TeluguSwiss Association"],
    ["Keliswiss", "Keliswiss"],
    ["ISKCON", "ISKCON Zurich"],
    ["ISSC", "ISSC"],
    ["InBa", "InBa India Basel"],
    ["SMA Basel", "SMA Basel"],
    ["YUVA", "YUVA EPFL"],
    ["Embassy of India", "Embassy of India, Berne"],
    ["Consulate", "Indian Consulate"],
    ["STNRI", "Swiss Telugu NRI Forum (STNRI)"],
    ["SwissTeluguNRI", "Swiss Telugu NRI Forum (STNRI)"],
  ];
  const lower = text.toLowerCase();
  for (const [key, label] of orgs) {
    if (lower.includes(key.toLowerCase())) return label;
  }
  // Try to find "by <org>" or "organised by <org>"
  const m = text.match(/(?:by|organis(?:ed|er)|organiz(?:ed|er)|host(?:ed)? by)[:\s]+([^\n,.(]{3,60})/i);
  if (m) return m[1].trim();
  return "";
}

function buildDescription(text: string, title: string): string {
  // Take lines that aren't title/date/URL/location, compose into a description
  const lines = text.split(/\n/).map(l => l.trim()).filter(Boolean);
  const skip = new Set([title]);
  const usable = lines.filter(l => {
    if (skip.has(l)) return false;
    if (l.startsWith("http")) return false;
    if (/^\d{1,2}[\/.]\d{1,2}[\/.]\d{2,4}$/.test(l)) return false;
    return l.length > 15;
  });
  const desc = usable.slice(0, 3).join(" ").replace(/\s+/g, " ").trim();
  return desc.length > 20 ? desc : `Join us for ${title} — a wonderful event for the Swiss-Indian community.`;
}

// ── GET — list all events for admin ──────────────────────────────────────────
export async function GET(req: NextRequest) {
  const supabase = createAdminClient();
  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status") ?? "all";

  let query = supabase
    .from("events")
    .select("id,title,date,location,category,description,organiser,url,image_url,color,event_status,ai_summary,submitted_by,created_at,approved_at")
    .order("created_at", { ascending: false });

  if (status !== "all") query = query.eq("event_status", status);

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  return NextResponse.json({ data: data ?? [] });
}

// ── POST — create event with smart text parsing ───────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { rawText, imageUrl, submittedBy } = body;

    if (!rawText?.trim()) {
      return NextResponse.json({ error: "Event description is required" }, { status: 400 });
    }

    const title       = extractTitle(rawText);
    const date        = extractDate(rawText);
    const location    = extractLocation(rawText);
    const category    = detectCategory(rawText);
    const organiser   = extractOrganiser(rawText);
    const url         = extractUrl(rawText);
    const description = buildDescription(rawText, title);
    const color       = CATEGORY_COLORS[category] ?? "bg-gray-500";
    const ai_summary  = `${category} event${organiser ? ` by ${organiser}` : ""}${date ? ` on ${date}` : ""}${location !== "Switzerland" ? ` in ${location}` : " in Switzerland"}.`;

    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("events")
      .insert({
        title,
        date,
        location,
        category,
        color,
        description,
        organiser,
        url,
        image_url:    imageUrl ?? "",
        event_status: "pending",
        ai_summary,
        raw_input:    rawText,
        submitted_by: submittedBy ?? null,
      })
      .select("*")
      .single();

    if (error) throw error;
    return NextResponse.json({ ok: true, event: data });
  } catch (err) {
    console.error("Admin event create error:", err);
    return NextResponse.json({ error: "Failed to create event" }, { status: 500 });
  }
}

// ── PATCH — approve or reject ─────────────────────────────────────────────────
export async function PATCH(req: NextRequest) {
  try {
    const { id, action } = await req.json();
    if (!id || !["approve", "reject"].includes(action)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const supabase = createAdminClient();
    const { error } = await supabase
      .from("events")
      .update({
        event_status: action === "approve" ? "approved" : "rejected",
        approved_at:  action === "approve" ? new Date().toISOString() : null,
        active:       action === "approve",
      })
      .eq("id", id);

    if (error) throw error;
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Admin event update error:", err);
    return NextResponse.json({ error: "Failed to update event" }, { status: 500 });
  }
}
