import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { fetchDigestNews } from "@/lib/campaigns/feeds";
import { upcomingForDigest } from "@/lib/campaigns/events";
import { digestHtml, loginNudgeHtml, festivalHtml, customHtml, welcomeHtml, welcomeSubject, SITE, esc, type WelcomeVariant } from "@/lib/campaigns/templates";
import { FESTIVALS } from "@/lib/campaigns/festivals";

export const maxDuration = 60;

// Group people by directory category (stored in `interests`) and, failing that, by what the email/name say.
const ASSOC = ["Associations & Community", "Religious & Spiritual", "Students", "Government & Diplomatic"];
const BIZ = ["Business & Trade", "Business & Services"];
const WEBMAIL = /@(gmail|googlemail|yahoo|ymail|hotmail|outlook|live|msn|icloud|me|gmx|bluewin|sunrise|proton|protonmail|web\.de|t-online|aol)\./i;
const ORG_NAME = /\b(association|assoc|mandal|mandir|temple|sangh|samaj|samiti|society|club|forum|union|committee|council|foundation|trust|church|gurdwara|sabha|parishad|utsav|puja|community|students?|embassy|consulate|chamber|group|network|org)\b/i;
const BIZ_NAME = /\b(gmbh|ag|sa|sarl|ltd|llc|inc|co|company|consulting|solutions|services|shop|store|market|jewel(s|lers|lery)?|studio|salon|school|institute|academy|restaurant|catering|kitchen|bakery|travel|tours|clinic|law|legal|tax|insurance|finance|realty|properties|logistics|tech|digital|software|systems|events|entertainment|concert|organiser|organizer)\b/i;
const ORG_LOCAL = /^(info|contact|office|admin|hello|events|team|enquiries|inquiries|secretary|president|treasurer|learn|support|mail)$/i;
const ORG_DOMAIN = /\.(org|gov|edu)$|\.gov\.|\.ethz\.ch$|\.uzh\.ch$|\.epfl\.ch$|student\./i;

// Substring hints inside the email address itself (domain or mailbox), e.g. kapurjewels.com, hss.zurich@gmail.com
const ORG_ADDR = /(assoc|mandal|mandir|temple|sangh|samaj|samiti|sabha|club|forum|utsav|puja|gurdwara|church|trust|foundation|community|students|embassy|consulate|chamber|bharatiya|keli|telugu|tamil|kannada|marathi|bengali|punjabi|gujarati|malayali|sathyasai|iskcon|svbf|hss)/i;
const BIZ_ADDR = /(jewel|studio|beauty|salon|boutique|shop|store|mart|market|restaurant|kitchen|catering|bakery|sweets|travel|tours|consult|solutions|tech|software|digital|gmbh|clinic|dental|ayurved|yoga|dance|music|school|academy|kids|preschool|events|concert|realty|insurance|legal|law|tax|finance|logistics|cargo|express|trading|exports|imports)/i;

type Group = "associations" | "businesses" | "individuals";
function classify(email: string, name: string, interests: string[] | null): Group {
  const cats = interests ?? [];
  if (cats.some(c => ASSOC.includes(c))) return "associations";
  if (cats.some(c => BIZ.includes(c))) return "businesses";
  const [local, domain = ""] = email.toLowerCase().split("@");
  const personalMail = WEBMAIL.test(email);
  const orgAddress = !personalMail || ORG_LOCAL.test(local);
  if (ORG_NAME.test(name) || ORG_DOMAIN.test(domain) || ORG_ADDR.test(email)) return "associations";
  if (BIZ_NAME.test(name) || BIZ_ADDR.test(email)) return "businesses";
  if (cats.some(c => c === "Arts, Dance & Music" || c === "Education & Language") && orgAddress) return "businesses"; // dance schools, tutoring centres
  if (orgAddress && !personalMail) {
    // Company-style domain with no other signal: treat generic mailboxes as businesses
    return ORG_LOCAL.test(local) ? "businesses" : "individuals";
  }
  return "individuals";
}

type Audience = "not_logged_in" | "members" | "subscribers" | "everyone" | "associations" | "businesses" | "individuals";
type Recipient = { email: string; name: string };

// Test sends go to the logged-in admin plus Sridhar's address (override with CAMPAIGN_TEST_EMAILS, comma-separated).
const testRecipients = (adminEmail: string): Recipient[] => {
  const extra = (process.env.CAMPAIGN_TEST_EMAILS || "sridhar.gande@gmail.com").split(",").map(e => e.trim().toLowerCase()).filter(Boolean);
  return [...new Set([adminEmail.toLowerCase(), ...extra])].map(email => ({ email, name: "Sridhar" }));
};

async function requireAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return user?.email && user.email === process.env.ADMIN_EMAIL ? user : null;
}

async function loadAudiences(includeUnopted = false) {
  const db = createAdminClient();
  const [{ data: members }, { data: subs }, usersRes] = await Promise.all([
    db.from("members").select("full_name,email,newsletter,status,user_id,interests").eq("status", "approved"),
    db.from("newsletter_subscribers").select("email,active,consent").eq("active", true).eq("consent", true),
    db.auth.admin.listUsers({ page: 1, perPage: 1000 }),
  ]);
  const signedIn = new Set((usersRes.data?.users ?? []).filter(u => u.last_sign_in_at).map(u => u.id));
  const norm = (e: string) => e.trim().toLowerCase();
  const first = (n?: string | null) => (n ?? "").trim().split(/\s+/)[0] || "there";

  type Person = Recipient & { group: Group; optedIn: boolean; isMember: boolean; isSub: boolean; loggedIn: boolean };
  const people = new Map<string, Person>();
  for (const m of (members ?? []).filter(m => m.email)) {
    const email = norm(m.email);
    people.set(email, {
      email, name: first(m.full_name), group: classify(email, m.full_name ?? "", m.interests),
      optedIn: m.newsletter !== false, isMember: true, isSub: false, loggedIn: !!m.user_id && signedIn.has(m.user_id),
    });
  }
  for (const s of subs ?? []) {
    const email = norm(s.email);
    const ex = people.get(email);
    if (ex) { ex.isSub = true; ex.optedIn = true; }
    else people.set(email, { email, name: "there", group: classify(email, "", null), optedIn: true, isMember: false, isSub: true, loggedIn: false });
  }

  const all = [...people.values()];
  const pool = all.filter(p => includeUnopted || p.optedIn);
  const out = (list: Person[]): Recipient[] => list.map(p => ({ email: p.email, name: p.name }));
  const aud: Record<Audience, Recipient[]> = {
    associations: out(pool.filter(p => p.group === "associations")),
    businesses: out(pool.filter(p => p.group === "businesses")),
    individuals: out(pool.filter(p => p.group === "individuals")),
    everyone: out(pool),
    members: out(pool.filter(p => p.isMember)),
    subscribers: out(pool.filter(p => p.isSub)),
    not_logged_in: out(pool.filter(p => p.isMember && !p.loggedIn)),
  };
  return aud;
}

export async function GET() {
  const adminUser = await requireAdmin();
  if (!adminUser) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const db = createAdminClient();
  const admin = adminUser;
  const [aud, audAll, { data: history }] = await Promise.all([
    loadAudiences(false),
    loadAudiences(true),
    db.from("email_campaigns").select("id,type,subject,audience,status,recipients,failed,ai_model,created_at,sent_at").order("created_at", { ascending: false }).limit(20),
  ]);
  return NextResponse.json({
    counts: Object.fromEntries(Object.entries(aud).map(([k, v]) => [k, v.length])),
    testRecipients: testRecipients(admin!.email!).map(r => r.email),
    countsAll: Object.fromEntries(Object.entries(audAll).map(([k, v]) => [k, v.length])),
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

async function send(body: { type: string; subject: string; html: string; audience: Audience; testOnly?: boolean; includeUnopted?: boolean; aiModel?: string | null }, adminEmail: string) {
  const { type, subject, html, audience } = body;
  if (!subject?.trim() || !html?.includes("{{UNSUB}}")) return NextResponse.json({ error: "Subject and a template with an unsubscribe link are required" }, { status: 400 });
  if (!process.env.RESEND_API_KEY) return NextResponse.json({ error: "RESEND_API_KEY is not set" }, { status: 500 });

  const list: Recipient[] = body.testOnly ? testRecipients(adminEmail) : (await loadAudiences(!!body.includeUnopted))[audience] ?? [];
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
