"use client";

import { useState } from "react";
import { Send, CheckCircle, Shield } from "lucide-react";
import Link from "next/link";

const GOLD = "#CEB07A";

const TOPICS = [
  "Pension / Retirement",
  "Education & Schools",
  "Banking & Finance",
  "Healthcare",
  "Immigration & Permits",
  "Housing",
  "Tax & Accounting",
  "Business & Startups",
  "Insurance",
  "Legal Advice",
  "Other",
];

interface Props {
  defaultTopic?: string;
  accent?: string;
  accentRgb?: string;
  compact?: boolean;
}

export default function SeekAdviceForm({ defaultTopic, accent = GOLD, accentRgb = "201,169,110", compact = false }: Props) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", location: "", topic: defaultTopic ?? TOPICS[0], query: "",
  });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const field = (id: string) => ({
    style: {
      width: "100%", padding: "11px 14px", borderRadius: 10,
      background: "var(--surface-2)", border: "1px solid var(--border)",
      color: "var(--text)", fontSize: 13,
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      outline: "none", boxSizing: "border-box" as const,
    },
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      e.currentTarget.style.borderColor = `rgba(${accentRgb},0.5)`;
      e.currentTarget.style.boxShadow = `0 0 0 3px rgba(${accentRgb},0.10)`;
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      e.currentTarget.style.borderColor = "var(--border)";
      e.currentTarget.style.boxShadow = "none";
    },
    id,
  });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiries/advice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div style={{
        textAlign: "center", padding: "40px 24px",
        background: `rgba(${accentRgb},0.06)`, borderRadius: 20,
        border: `1px solid rgba(${accentRgb},0.20)`,
      }}>
        <CheckCircle size={40} style={{ color: accent, marginBottom: 12 }} />
        <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text)", marginBottom: 8, fontFamily: "'Playfair Display', Georgia, serif" }}>
          Enquiry Received!
        </div>
        <p style={{ fontSize: 13, color: "var(--text-2)", margin: 0, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
          Thank you — a member of our community or one of our trusted advisors will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "grid", gridTemplateColumns: compact ? "1fr" : "1fr 1fr", gap: 14 }} className="advice-form-grid">
        <div>
          <label htmlFor="adv-name" style={{ fontSize: 11, fontWeight: 700, color: "var(--text-3)", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>Full Name *</label>
          <input {...field("adv-name")} type="text" placeholder="Your name" required
            value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
        </div>
        <div>
          <label htmlFor="adv-email" style={{ fontSize: 11, fontWeight: 700, color: "var(--text-3)", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>Email Address *</label>
          <input {...field("adv-email")} type="email" placeholder="you@example.com" required
            value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
        </div>
        <div>
          <label htmlFor="adv-phone" style={{ fontSize: 11, fontWeight: 700, color: "var(--text-3)", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>Phone (optional)</label>
          <input {...field("adv-phone")} type="tel" placeholder="+41 79 …"
            value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} />
        </div>
        <div>
          <label htmlFor="adv-location" style={{ fontSize: 11, fontWeight: 700, color: "var(--text-3)", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>City / Canton</label>
          <input {...field("adv-location")} type="text" placeholder="e.g. Zurich, Basel…"
            value={form.location} onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))} />
        </div>
      </div>

      <div>
        <label htmlFor="adv-topic" style={{ fontSize: 11, fontWeight: 700, color: "var(--text-3)", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>Topic</label>
        <select {...field("adv-topic")} value={form.topic}
          onChange={(e) => setForm((f) => ({ ...f, topic: e.target.value }))}>
          {TOPICS.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="adv-query" style={{ fontSize: 11, fontWeight: 700, color: "var(--text-3)", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>Your Question *</label>
        <textarea
          {...field("adv-query") as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
          rows={compact ? 3 : 5} placeholder="Describe your question or situation in as much detail as you're comfortable sharing…" required
          value={form.query} onChange={(e) => setForm((f) => ({ ...f, query: e.target.value }))}
          style={{ ...field("adv-query").style, resize: "vertical", minHeight: compact ? 80 : 110 }}
        />
      </div>

      {/* Consent & disclaimer */}
      <div style={{
        padding: "14px 16px", borderRadius: 12,
        background: "rgba(201,169,110,0.04)", border: "1px solid rgba(201,169,110,0.15)",
      }}>
        <label style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer" }}>
          <input
            type="checkbox"
            required
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            style={{ marginTop: 2, accentColor: accent, width: 16, height: 16, flexShrink: 0, cursor: "pointer" }}
          />
          <span style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            I agree to the{" "}
            <Link href="/privacy" style={{ color: accent, textDecoration: "underline" }}>Privacy Policy</Link>
            {" "}and{" "}
            <Link href="/terms" style={{ color: accent, textDecoration: "underline" }}>Terms of Use</Link>.
            I consent to Indiaspora processing my personal data (name, email, phone, location) to respond to my enquiry.
            My data will not be sold to third parties and I may request deletion at any time by emailing{" "}
            <a href="mailto:hello@indiaspora.ch" style={{ color: accent }}>hello@indiaspora.ch</a>.
            {" "}This service is operated from Switzerland and data is stored securely in the EU/EEA.
          </span>
        </label>
      </div>

      <div style={{ padding: "10px 14px", borderRadius: 10, background: "rgba(100,100,120,0.06)", border: "1px solid var(--border)", display: "flex", gap: 10, alignItems: "flex-start" }}>
        <Shield size={14} style={{ color: "var(--text-3)", marginTop: 1, flexShrink: 0 }} />
        <p style={{ fontSize: 11, color: "var(--text-3)", margin: 0, lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
          <strong style={{ color: "var(--text-2)" }}>Disclaimer:</strong> Indiaspora provides community guidance only — not professional legal, financial, medical, or immigration advice. Always consult a licensed professional for important decisions.
        </p>
      </div>

      {status === "error" && (
        <div style={{ fontSize: 12, color: "#C87880", padding: "10px 14px", borderRadius: 10, background: "rgba(200,120,128,0.08)", border: "1px solid rgba(200,120,128,0.24)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
          Something went wrong — please try again or email us directly.
        </div>
      )}

      <button type="submit" disabled={status === "sending" || !consent} className="btn btn-primary" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 8, opacity: (status === "sending" || !consent) ? 0.6 : 1 }}>
        {status === "sending" ? "Sending…" : <><Send size={14} /> Send Enquiry</>}
      </button>

      <style>{`@media (max-width: 600px) { .advice-form-grid { grid-template-columns: 1fr !important; } }`}</style>
    </form>
  );
}
