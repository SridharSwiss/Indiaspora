import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { CONTACT_TOPICS, CONTACT_ROLES, CONTACT_CITIES, CONTACT_METHODS } from "@/lib/contact";

// Where contact messages are emailed. Override with CONTACT_TO_EMAIL in Vercel if it ever changes.
const TO = process.env.CONTACT_TO_EMAIL || "Indiaspora.ch@proton.me";
const FROM = "Indiaspora <hello@indiaspora.ch>";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const pick = (v: unknown, list: readonly string[]) => (typeof v === "string" && list.includes(v) ? v : "");

export async function POST(req: NextRequest) {
  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }

  // Honeypot: real visitors never fill this hidden field. Pretend success so bots learn nothing.
  if (clean(b.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(b.name, 120), email = clean(b.email, 200).toLowerCase();
  const message = clean(b.message, 5000);
  const topic = pick(b.topic, CONTACT_TOPICS);
  if (!name) return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  if (!topic) return NextResponse.json({ error: "Please choose a topic." }, { status: 400 });
  if (message.length < 10) return NextResponse.json({ error: "Please write a message of at least 10 characters." }, { status: 400 });
  if (b.consent !== true) return NextResponse.json({ error: "Please tick the consent box so we can reply to you." }, { status: 400 });

  const row = {
    name, email,
    phone: clean(b.phone, 40) || null,
    city: pick(b.city, CONTACT_CITIES) || clean(b.city, 60) || null,
    role: pick(b.role, CONTACT_ROLES) || null,
    topic,
    subject: clean(b.subject, 200) || null,
    message,
    preferred_contact: pick(b.preferred_contact, CONTACT_METHODS) || null,
    best_time: clean(b.best_time, 80) || null,
    page_url: clean(b.page_url, 300) || null,
    referrer: clean(b.referrer, 300) || null,
    user_agent: (req.headers.get("user-agent") || "").slice(0, 300) || null,
    consent: true,
  };

  const db = createAdminClient();

  // Simple abuse guard: one message per email address per minute.
  const since = new Date(Date.now() - 60_000).toISOString();
  const { count } = await db.from("contact_messages").select("id", { count: "exact", head: true }).eq("email", email).gte("created_at", since);
  if ((count ?? 0) > 0) return NextResponse.json({ error: "We have just received a message from you. Please wait a minute before sending another." }, { status: 429 });

  const { data: saved, error: dbErr } = await db.from("contact_messages").insert(row).select("id").single();
  if (dbErr || !saved) {
    console.error("contact insert failed:", dbErr?.message);
    return NextResponse.json({ error: "Something went wrong on our side. Please try again in a moment." }, { status: 500 });
  }

  // Email the team (reply goes straight to the sender) and send the sender a short acknowledgement.
  let emailStatus = "sent", emailError: string | null = null;
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    emailStatus = "not_configured";
  } else {
    try {
      const resend = new Resend(key);
      const line = (k: string, v: string | null) => v ? `<tr><td style="padding:6px 12px 6px 0;color:#71717A;font-size:13px;vertical-align:top;white-space:nowrap">${k}</td><td style="padding:6px 0;font-size:14px;color:#18181B">${esc(v)}</td></tr>` : "";
      const html = `<div style="font-family:system-ui,sans-serif;max-width:640px;margin:0 auto;padding:24px">
        <h2 style="margin:0 0 4px;font-size:20px;color:#18181B">New contact message</h2>
        <p style="margin:0 0 18px;color:#71717A;font-size:13px">Reply to this email to answer ${esc(name)} directly.</p>
        <table style="border-collapse:collapse;margin-bottom:18px">
          ${line("Name", name)}${line("Email", email)}${line("Phone", row.phone)}${line("City", row.city)}${line("I am", row.role)}
          ${line("Topic", topic)}${line("Subject", row.subject)}${line("Preferred contact", row.preferred_contact)}${line("Best time", row.best_time)}
          ${line("Sent from page", row.page_url)}${line("Referrer", row.referrer)}${line("Received", new Date().toLocaleString("en-GB", { timeZone: "Europe/Zurich" }) + " (Zurich)")}
        </table>
        <div style="background:#FAF7F2;border-radius:12px;padding:16px 18px;white-space:pre-wrap;font-size:15px;line-height:1.65;color:#27272A">${esc(message)}</div>
        <p style="margin:18px 0 0;color:#A1A1AA;font-size:12px">Message ID ${saved.id}. Stored in the contact_messages table. The sender consented to being contacted.</p></div>`;
      const team = await resend.emails.send({ from: FROM, to: TO, replyTo: email, subject: `[Indiaspora contact] ${topic}: ${row.subject || name}`, html });
      if (team.error) throw new Error(team.error.message);

      const first = esc(name.split(" ")[0]);
      await resend.emails.send({
        from: FROM, to: email, replyTo: TO,
        subject: "We received your message | Indiaspora",
        html: `<div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;padding:28px;color:#27272A">
          <p style="font-size:16px">Namaste ${first},</p>
          <p style="font-size:15px;line-height:1.7">Thank you for writing to Indiaspora. We have received your message about <strong>${esc(topic)}</strong> and a member of the team will reply by email, usually within two working days.</p>
          <p style="font-size:14px;line-height:1.7;color:#52525B;border-left:3px solid #CEB07A;padding-left:12px;white-space:pre-wrap">${esc(message.length > 400 ? message.slice(0, 400) + "…" : message)}</p>
          <p style="font-size:15px;line-height:1.7">Warm regards,<br><strong>Swiss Indiaspora Team</strong><br><a href="https://indiaspora.ch" style="color:#C2410C">indiaspora.ch</a></p></div>`,
      }).catch(() => undefined); // the acknowledgement is a courtesy; never fail the request over it
    } catch (e) {
      emailStatus = "failed"; emailError = e instanceof Error ? e.message.slice(0, 300) : "unknown";
      console.error("contact email failed:", emailError);
    }
  }
  await db.from("contact_messages").update({ email_status: emailStatus, email_error: emailError }).eq("id", saved.id);

  return NextResponse.json({ ok: true });
}

// Admin-only: list received messages (newest first).
export async function GET() {
  const auth = await createClient();
  const { data: { user } } = await auth.auth.getUser();
  if (!user?.email || user.email !== process.env.ADMIN_EMAIL) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { data, error } = await createAdminClient().from("contact_messages").select("*").order("created_at", { ascending: false }).limit(500);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ messages: data });
}
