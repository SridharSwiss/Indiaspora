import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { fetchDigestNews } from "@/lib/campaigns/feeds";
import { upcomingForDigest } from "@/lib/campaigns/events";
import { digestHtml, loginNudgeHtml, festivalHtml, customHtml, welcomeHtml, welcomeSubject, SITE, esc, type WelcomeVariant } from "@/lib/campaigns/templates";
import { FESTIVALS } from "@/lib/campaigns/festivals";

export const maxDuration = 60;

type Audience = "not_logged_in" | "members" | "subscribers" | "everyone" | "associations" | "businesses" | "individuals";

// Group members by the directory category stored in `interests`.
const ASSOC = ["Associations & Community", "Religious & Spiritual", "Students", "Government & Diplomatic"];
const BIZ = ["Business & Trade", "Business & Services"];
type Recipient = { email: string; name: string };

async function requireAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user?.email && user.email === process.env.ADMIN_EMAIL ? user : null;
}

async function loadAudiences() {
  const db = createAdminClient();
  const [{ data: members }, { data: subs }, usersRes] = await Promise.all([
    db.from("members").select("full_name,email,newsletter,status,user_id,interests").eq("status", "approved"),
    db.from("newsletter_subscribers").select("email,active,consent").eq("active", true).eq("consent", true),
    db.auth.admin.listUsers({ page: 1, perPage: 1000 }),
  ]);
  const signedIn = new Set((usersRes.data?.users ?? []).filter(u => u.last_sign_in_at).map(u => u.id));
  const norm = (e: string) => e.trim().toLowerCase();
  const first = (n?: string | null) => (n ?? "").trim().split(/\s+/)[0] || "there";

  const memberList = (members ?? []).filter(m => m.email);
  const aud: Record<Audience, Recipient[]> = {
    not_logged_in: memberList.filter(m => m.newsletter !== false && (!m.user_id || !signedIn.has(m.user_id))).map(m => ({ email: norm(m.email), name: first(m.full_name) })),
    members: memberList.filter(m => m.newsletter !== false).map(m => ({ email: norm(m.email), name: first(m.full_name) })),
    subscribers: (subs ?? []).map(s => ({ email: norm(s.email), name: "there" })),
    everyone: [],
    associations: [], businesses: [], individuals: [],
  };
  const optedIn = memberList.filter(m => m.newsletter !== false);
  const to = (m: (typeof memberList)[number]) => ({ email: norm(m.email), name: first(m.full_name) });
  const has = (m: (typeof memberList)[number], cats: string[]) => (m.interests ?? []).some((i: string) => cats.includes(i));
  aud.associations = optedIn.filter(m => has(m, ASSOC)).map(to);
  aud.businesses = optedIn.filter(m => has(m, BIZ)).map(to);
  aud.individuals = optedIn.filter(m => !has(m, ASSOC) && !has(m, BIZ)).map(to);
  const all = new Map<string, Recipient>();
  for (const r of [...aud.subscribers, ...aud.members]) all.set(r.email, r);
  aud.everyone = [...all.values()];
  return aud;
}

export async function GET() {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const db = createAdminClient();
  const [aud, { data: history }] = await Promise.all([
    loadAudiences(),
    db.from("email_campaigns").select("id,type,subject,audience,status,recipients,failed,ai_model,created_at,sent_at").order("created_at", { ascending: false }).limit(20),
  ]);
  return NextResponse.json({
    counts: Object.fromEntries(Object.entries(aud).map(([k, v]) => [k, v.length])),
    history: history ?? [],
    festivals: FESTIVALS.map(f => ({ id: f.id, name: f.name, emoji: f.emoji, fixed: f.fixed ?? null })),
  });
}

export async function POST(req: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json().catch(() => null);
  if (!body?.action) return NextResponse.json({ error: "Bad request" }, { status: 400 });

  if (body.action === "generate") return generate(body);
  if (body.action === "send") return send(body, admin.email!);
  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}

function socialKit(topic: string, lines: string[]) {
  const tags = "#Indiaspora #IndiansInSwitzerland #SwissIndian";
  const top = lines.slice(0, 3).map(l => `• ${l}`).join("\n");
  return {
    whatsapp: `🪔 ${topic}\n\n${top}\n\nAll details: ${SITE}`,
    linkedin: `${topic}\n\n${top}\n\nFind everything for the Indian community in Switzerland on ${SITE}\n\n${tags}`,
    instagram: `🪔 ${topic}\n\n${top}\n\nLink in bio.\n\n${tags} #Diaspora`,
  };
}

const pickGreeting = (n: number) => ["Namaste!", "Namaste, everyone!", "Hello from the Swiss Indiaspora Team!"][n % 3];

async function generate(body: { type: string; festivalId?: string; notes?: string; variant?: WelcomeVariant }) {
  const notes = (body.notes ?? "").slice(0, 2000);
  const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const aiUsed = false;

  if (body.type === "digest") {
    const [news, { data: dbEvents }] = await Promise.all([
      fetchDigestNews(),
      createAdminClient().from("events").select("title,date,location,organiser,url").eq("event_status", "approved").eq("active", true).limit(60),
    ]);
    const events = upcomingForDigest((dbEvents ?? []).map(e => ({ title: e.title, date: e.date, location: e.location, organiser: e.organiser ?? undefined, url: e.url ?? undefined })));
    const first = events[0];
    const parts = [
      `${pickGreeting(new Date().getDate())} Here is your weekly round-up from the Indian community in Switzerland.`,
      events.length
        ? `${events.length} event${events.length > 1 ? "s are" : " is"} coming up, starting with ${first.title} on ${first.date} (${first.location}).`
        : "No new community events are listed right now, so check the events page for updates.",
      news.diaspora.length ? `We also collected ${news.diaspora.length} stories on the Indian diaspora in Switzerland and Europe, and a few reads from the big newsrooms.` : "",
    ].filter(Boolean);
    const intro = parts.join(" ");
    const lines = events.map(e => `${e.title}, ${e.date}, ${e.location}`);
    return NextResponse.json({
      subject: `Indiaspora Weekly · ${today}`,
      html: digestHtml({ intro, events, ...news, changes: notes }),
      social: socialKit(`This week in the Indian community in Switzerland (${today})`, lines.length ? lines : news.diaspora.map(i => i.title)),
      aiUsed, model: null,
      stats: { events: events.length, diaspora: news.diaspora.length, newsrooms: news.newsrooms.length },
    });
  }

  if (body.type === "login_nudge") {
    const message = `Namaste {{NAME}},\n\nThank you for joining Indiaspora! We noticed you haven't logged in yet. Your account gives you the full community: the events calendar, Indian restaurants and grocery stores, associations across all cantons and our living guide for housing, healthcare and banking.${notes.trim() ? `\n\n${notes.trim()}` : ""}\n\nIt takes ten seconds. We'd love to see you there.`;
    return NextResponse.json({ subject: "Your Indiaspora community is waiting for you", html: loginNudgeHtml({ message }), aiUsed, model: null });
  }

  if (body.type === "festival") {
    const f = FESTIVALS.find(x => x.id === body.festivalId);
    if (!f) return NextResponse.json({ error: "Choose a festival" }, { status: 400 });
    const message = `Namaste {{NAME}},\n\n${f.blurb}${notes.trim() ? `\n\n${notes.trim()}` : ""}\n\nWith warm wishes from all of us at Indiaspora.`;
    return NextResponse.json({ subject: `${f.emoji} ${f.greeting} from Indiaspora`, html: festivalHtml(f, { message }), social: socialKit(`${f.greeting}! Warm ${f.name} wishes from the Swiss Indiaspora Team`, [f.blurb]), aiUsed, model: null });
  }

  if (body.type === "welcome") {
    const v: WelcomeVariant = body.variant && ["associations", "businesses", "individuals"].includes(body.variant) ? body.variant : "individuals";
    const topic = { associations: "Welcome, associations: submit your events to Indiaspora", businesses: "Welcome, businesses: reach the Indian community in Switzerland", individuals: "Welcome to Indiaspora, the community hub for Indians in Switzerland" }[v];
    return NextResponse.json({ subject: welcomeSubject(v), html: welcomeHtml(v), social: socialKit(topic, ["Events calendar and event submissions", "Seek advice from the community", "Food, business and living guides"]), aiUsed: false, model: null });
  }

  if (body.type === "custom") {
    if (!notes.trim()) return NextResponse.json({ error: "Write your message in the notes box" }, { status: 400 });
    return NextResponse.json({ subject: "A note from Indiaspora", html: customHtml({ title: "A note from Indiaspora", message: `Namaste {{NAME}},\n\n${notes}` }), aiUsed: false, model: null });
  }
  return NextResponse.json({ error: "Unknown type" }, { status: 400 });
}

async function send(body: { type: string; subject: string; html: string; audience: Audience; testOnly?: boolean; aiModel?: string | null }, adminEmail: string) {
  const { type, subject, html, audience } = body;
  if (!subject?.trim() || !html?.includes("{{UNSUB}}")) return NextResponse.json({ error: "Subject and a template with an unsubscribe link are required" }, { status: 400 });
  if (!process.env.RESEND_API_KEY) return NextResponse.json({ error: "RESEND_API_KEY is not set" }, { status: 500 });

  const list: Recipient[] = body.testOnly ? [{ email: adminEmail, name: "Admin" }] : (await loadAudiences())[audience] ?? [];
  if (!list.length) return NextResponse.json({ error: "No recipients in this audience" }, { status: 400 });

  const resend = new Resend(process.env.RESEND_API_KEY);
  let sent = 0, failed = 0;
  for (let i = 0; i < list.length; i += 100) {
    const chunk = list.slice(i, i + 100).map(r => {
      const unsub = `${SITE}/unsubscribe?email=${encodeURIComponent(r.email)}`;
      return {
        from: "Indiaspora <hello@indiaspora.ch>", to: r.email,
        subject: body.testOnly ? `[TEST] ${subject}` : subject,
        html: html.replace(/\{\{UNSUB\}\}/g, unsub).replace(/\{\{NAME\}\}/g, esc(r.name)),
        headers: { "List-Unsubscribe": `<${unsub}>` },
      };
    });
    try {
      const res = await resend.batch.send(chunk);
      if (res.error) failed += chunk.length; else sent += chunk.length;
    } catch { failed += chunk.length; }
  }

  if (!body.testOnly) {
    await createAdminClient().from("email_campaigns").insert({
      type, subject, html, audience, status: "sent", recipients: sent, failed, ai_model: body.aiModel ?? null, sent_at: new Date().toISOString(),
    });
  }
  return NextResponse.json({ ok: failed === 0, sent, failed, test: !!body.testOnly });
}
