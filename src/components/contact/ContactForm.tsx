"use client";

import { useEffect, useState } from "react";
import { Send, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { CONTACT_TOPICS, CONTACT_ROLES, CONTACT_CITIES, CONTACT_METHODS } from "@/lib/contact";

const TOPIC_PRESETS: Record<string, string> = {
  takedown: "Takedown request (image or logo)",
  advertise: "Advertising and partnerships",
  events: "Events and listings",
  membership: "Membership and payments",
  listing: "Add or correct a listing",
  press: "Press and media",
  feedback: "Report a problem or give feedback",
};

const field: React.CSSProperties = {
  width: "100%", padding: "12px 14px", borderRadius: 12, fontSize: 15, fontFamily: "inherit",
  background: "var(--surface-2)", border: "1px solid var(--border-2)", color: "var(--text)",
};
const label: React.CSSProperties = { display: "block", fontSize: 12, fontWeight: 700, letterSpacing: "0.04em", color: "var(--text-2)", marginBottom: 6 };

export default function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", phone: "", city: "", role: "", topic: "", subject: "", message: "", preferred_contact: "Email", best_time: "", website: "" });
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [err, setErr] = useState("");
  const [meta, setMeta] = useState({ page_url: "", referrer: "" });

  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search).get("topic");
      if (p && TOPIC_PRESETS[p]) setF((x) => ({ ...x, topic: TOPIC_PRESETS[p] }));
      setMeta({ page_url: window.location.pathname + window.location.search, referrer: document.referrer.slice(0, 300) });
    } catch { /* ignore */ }
  }, []);

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF((x) => ({ ...x, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    if (!consent) { setErr("Please tick the consent box so we can reply to you."); return; }
    setState("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...f, consent, ...meta }) });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) { setErr(j.error || "Something went wrong. Please try again."); setState("idle"); return; }
      setState("done");
    } catch { setErr("Network error. Please check your connection and try again."); setState("idle"); }
  }

  if (state === "done") {
    return (
      <div role="status" className="glass rounded-2xl p-8 text-center">
        <CheckCircle2 size={44} style={{ color: "var(--acc-green)", margin: "0 auto 12px" }} />
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>Thank you, {f.name.split(" ")[0]}</h2>
        <p style={{ color: "var(--text-2)", lineHeight: 1.7, maxWidth: 440, margin: "0 auto 18px" }}>
          Your message has reached the Indiaspora team. We will reply to <strong>{f.email}</strong>, usually within two working days. A confirmation is on its way to your inbox.
        </p>
        <button type="button" onClick={() => { setF({ name: "", email: "", phone: "", city: "", role: "", topic: "", subject: "", message: "", preferred_contact: "Email", best_time: "", website: "" }); setConsent(false); setState("idle"); }}
          style={{ padding: "10px 22px", borderRadius: 999, border: "1px solid var(--border-2)", background: "transparent", color: "var(--text)", fontWeight: 600, cursor: "pointer" }}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="glass rounded-2xl p-6 sm:p-8" noValidate aria-describedby="contact-note">
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="c-name" style={label}>Your name *</label><input id="c-name" required autoComplete="name" value={f.name} onChange={set("name")} style={field} maxLength={120} /></div>
        <div><label htmlFor="c-email" style={label}>Email address *</label><input id="c-email" type="email" required autoComplete="email" value={f.email} onChange={set("email")} style={field} maxLength={200} /></div>
        <div><label htmlFor="c-phone" style={label}>Phone (optional)</label><input id="c-phone" type="tel" autoComplete="tel" value={f.phone} onChange={set("phone")} style={field} maxLength={40} placeholder="+41 …" /></div>
        <div><label htmlFor="c-city" style={label}>Where are you based?</label>
          <select id="c-city" value={f.city} onChange={set("city")} style={field}><option value="">Select…</option>{CONTACT_CITIES.map((c) => <option key={c}>{c}</option>)}</select></div>
        <div><label htmlFor="c-role" style={label}>I am writing as</label>
          <select id="c-role" value={f.role} onChange={set("role")} style={field}><option value="">Select…</option>{CONTACT_ROLES.map((c) => <option key={c}>{c}</option>)}</select></div>
        <div><label htmlFor="c-topic" style={label}>What is it about? *</label>
          <select id="c-topic" required value={f.topic} onChange={set("topic")} style={field}><option value="">Choose a topic…</option>{CONTACT_TOPICS.map((c) => <option key={c}>{c}</option>)}</select></div>
        <div className="sm:col-span-2"><label htmlFor="c-subject" style={label}>Subject (optional)</label><input id="c-subject" value={f.subject} onChange={set("subject")} style={field} maxLength={200} /></div>
        <div className="sm:col-span-2"><label htmlFor="c-message" style={label}>Your message *</label>
          <textarea id="c-message" required rows={7} value={f.message} onChange={set("message")} style={{ ...field, resize: "vertical", lineHeight: 1.6 }} maxLength={5000}
            placeholder="Tell us how we can help. For a takedown request, include the page address and a short description." />
          <div style={{ fontSize: 11, color: "var(--text-3)", textAlign: "right", marginTop: 4 }}>{f.message.length}/5000</div></div>
        <div><label htmlFor="c-pref" style={label}>Best way to reach you</label>
          <select id="c-pref" value={f.preferred_contact} onChange={set("preferred_contact")} style={field}>{CONTACT_METHODS.map((c) => <option key={c}>{c}</option>)}</select></div>
        <div><label htmlFor="c-time" style={label}>Best time (optional)</label><input id="c-time" value={f.best_time} onChange={set("best_time")} style={field} maxLength={80} placeholder="e.g. weekday evenings" /></div>
      </div>

      {/* Honeypot: hidden from people, visible to bots */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="c-website">Website</label><input id="c-website" tabIndex={-1} autoComplete="off" value={f.website} onChange={set("website")} />
      </div>

      <label style={{ display: "flex", gap: 10, alignItems: "flex-start", margin: "22px 0 6px", fontSize: 13, lineHeight: 1.6, color: "var(--text-2)", cursor: "pointer" }}>
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} style={{ marginTop: 4, width: 16, height: 16 }} />
        <span>I agree that Indiaspora stores my details and uses them to reply to this message. See the <a href="/privacy" style={{ textDecoration: "underline" }}>Privacy Policy</a>. *</span>
      </label>
      <p id="contact-note" style={{ fontSize: 12, color: "var(--text-3)", display: "flex", gap: 6, alignItems: "center", margin: "0 0 18px" }}>
        <ShieldCheck size={14} /> Stored securely in Switzerland-operated systems. We never sell your data.
      </p>

      {err && <p role="alert" style={{ color: "var(--acc-red)", fontSize: 14, margin: "0 0 14px" }}>{err}</p>}
      <button type="submit" disabled={state === "sending"} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 999, border: "none", background: "var(--sf)", color: "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer", opacity: state === "sending" ? 0.7 : 1 }}>
        {state === "sending" ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : <><Send size={16} /> Send message</>}
      </button>
    </form>
  );
}
