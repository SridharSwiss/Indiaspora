"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { Send, CheckCircle, Megaphone, Users, BarChart2, Globe, Shield } from "lucide-react";

const GOLD = "#CEB07A";
const GOLD_RGB = "201,169,110";

const AD_TYPES = [
  "Homepage Banner / Hero Placement",
  "Section Sponsorship (e.g. Living Guide, Events)",
  "Newsletter Sponsorship",
  "City Guide Sponsorship",
  "Event Listing Promotion",
  "Directory / Business Listing",
  "Content Partnership / Article",
  "Other",
];

const DURATIONS = [
  "1 month",
  "3 months",
  "6 months",
  "12 months",
  "Custom / One-time",
];

const BUDGETS = [
  "< CHF 500",
  "CHF 500–1,000",
  "CHF 1,000–3,000",
  "CHF 3,000–5,000",
  "CHF 5,000+",
  "Open to proposal",
];

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label style={{
      fontSize: 11, fontWeight: 700, color: "var(--text-3)",
      letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 6,
      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
    }}>{children}</label>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "11px 14px", borderRadius: 10,
  background: "var(--surface-2)", border: "1px solid var(--border)",
  color: "var(--text)", fontSize: 13, outline: "none",
  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", boxSizing: "border-box",
};

function useFieldProps() {
  return {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      e.currentTarget.style.borderColor = `rgba(${GOLD_RGB},0.5)`;
      e.currentTarget.style.boxShadow = `0 0 0 3px rgba(${GOLD_RGB},0.10)`;
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      e.currentTarget.style.borderColor = "var(--border)";
      e.currentTarget.style.boxShadow = "none";
    },
  };
}

export default function AdvertisePage() {
  const fp = useFieldProps();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", website: "",
    ad_type: AD_TYPES[0], target_audience: "", duration: DURATIONS[0], budget: BUDGETS[0], message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [consent, setConsent] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiries/advertise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <PageHeader
        title="Advertise With Us"
        subtitle="Reach the Indian community across Switzerland — a highly engaged, educated audience of professionals, families, and students."
        badge="Partnerships"
        gradient="from-amber-500 to-yellow-400"
        breadcrumbs={[{ label: "Advertise With Us" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Why advertise */}
        <section>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "var(--text)", marginBottom: 8, marginTop: 0 }}>
            Why Advertise on <em className="gradient-text" style={{ fontStyle: "italic" }}>Indiaspora</em>?
          </h2>
          <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.7, maxWidth: 600, marginBottom: 32, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            Indiaspora is Switzerland&apos;s leading directory for Indians — covering living guides, events, food, community, and business. Your brand reaches a niche, high-intent audience that trusts our content.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { icon: <Users size={22} />, title: "~24,500 Indians", desc: "across Switzerland actively seeking community resources." },
              { icon: <Globe size={22} />, title: "5 City Guides", desc: "Zurich, Geneva, Basel, Bern, Lausanne — high local intent." },
              { icon: <BarChart2 size={22} />, title: "Engaged Audience", desc: "Professionals, families, students — high purchasing power." },
              { icon: <Megaphone size={22} />, title: "Multiple Formats", desc: "Banners, newsletters, sponsored content, event listings." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ padding: "22px 24px", border: `1px solid rgba(${GOLD_RGB},0.18)` }}>
                <div style={{ color: GOLD, marginBottom: 12 }}>{icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 6, fontFamily: "'Playfair Display', Georgia, serif" }}>{title}</div>
                <div style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Form */}
        <section>
          <div className="card" style={{ padding: "36px 40px", borderRadius: 24, border: `1px solid rgba(${GOLD_RGB},0.18)` }}>
            <div style={{ marginBottom: 28 }}>
              <span className="tag" style={{ marginBottom: 12, display: "inline-flex" }}>Get in Touch</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--text)", margin: 0 }}>
                Tell Us About Your Campaign
              </h2>
            </div>

            {status === "done" ? (
              <div style={{
                textAlign: "center", padding: "48px 24px",
                background: `rgba(${GOLD_RGB},0.06)`, borderRadius: 20,
                border: `1px solid rgba(${GOLD_RGB},0.20)`,
              }}>
                <CheckCircle size={44} style={{ color: GOLD, marginBottom: 16 }} />
                <div style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 8, fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Thank you for your enquiry!
                </div>
                <p style={{ fontSize: 13, color: "var(--text-2)", margin: 0, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                  We&apos;ll review your submission and get back to you within 2 business days with a media kit and proposal.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                {/* Contact info */}
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: GOLD, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                    Your Contact Details
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="adv-grid">
                    <div>
                      <FieldLabel>Full Name *</FieldLabel>
                      <input style={inputStyle} {...fp} type="text" placeholder="Your name" required value={form.name} onChange={set("name")} />
                    </div>
                    <div>
                      <FieldLabel>Email Address *</FieldLabel>
                      <input style={inputStyle} {...fp} type="email" placeholder="you@company.com" required value={form.email} onChange={set("email")} />
                    </div>
                    <div>
                      <FieldLabel>Phone (optional)</FieldLabel>
                      <input style={inputStyle} {...fp} type="tel" placeholder="+41 79 …" value={form.phone} onChange={set("phone")} />
                    </div>
                    <div>
                      <FieldLabel>Company / Brand</FieldLabel>
                      <input style={inputStyle} {...fp} type="text" placeholder="Your company name" value={form.company} onChange={set("company")} />
                    </div>
                    <div style={{ gridColumn: "1 / -1" }}>
                      <FieldLabel>Website</FieldLabel>
                      <input style={inputStyle} {...fp} type="url" placeholder="https://…" value={form.website} onChange={set("website")} />
                    </div>
                  </div>
                </div>

                {/* Campaign details */}
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: GOLD, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                    Campaign Details
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="adv-grid">
                    <div style={{ gridColumn: "1 / -1" }}>
                      <FieldLabel>What would you like to advertise? *</FieldLabel>
                      <select style={inputStyle} {...fp} required value={form.ad_type} onChange={set("ad_type")}>
                        {AD_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <FieldLabel>Preferred Duration</FieldLabel>
                      <select style={inputStyle} {...fp} value={form.duration} onChange={set("duration")}>
                        {DURATIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                    <div>
                      <FieldLabel>Approximate Budget (CHF)</FieldLabel>
                      <select style={inputStyle} {...fp} value={form.budget} onChange={set("budget")}>
                        {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                    <div style={{ gridColumn: "1 / -1" }}>
                      <FieldLabel>Target Audience / Community</FieldLabel>
                      <input style={inputStyle} {...fp} type="text" placeholder="e.g. Indian professionals in Zurich, Indian families, students…" value={form.target_audience} onChange={set("target_audience")} />
                    </div>
                    <div style={{ gridColumn: "1 / -1" }}>
                      <FieldLabel>Additional Message</FieldLabel>
                      <textarea
                        style={{ ...inputStyle, resize: "vertical", minHeight: 110 }}
                        {...fp as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
                        rows={4}
                        placeholder="Tell us more about your campaign goals, specific dates, or any questions…"
                        value={form.message}
                        onChange={set("message")}
                      />
                    </div>
                  </div>
                </div>

                {/* Consent */}
                <div style={{
                  padding: "14px 16px", borderRadius: 12,
                  background: `rgba(${GOLD_RGB},0.04)`, border: `1px solid rgba(${GOLD_RGB},0.15)`,
                }}>
                  <label style={{ display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      style={{ marginTop: 2, accentColor: GOLD, width: 16, height: 16, flexShrink: 0, cursor: "pointer" }}
                    />
                    <span style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                      I agree to the{" "}
                      <Link href="/privacy" style={{ color: GOLD, textDecoration: "underline" }}>Privacy Policy</Link>
                      {" "}and{" "}
                      <Link href="/terms" style={{ color: GOLD, textDecoration: "underline" }}>Terms of Use</Link>.
                      I consent to Indiaspora storing and processing my contact details and campaign information to prepare a proposal.
                      My data will not be sold to third parties. I may request deletion at any time by contacting{" "}
                      <a href="mailto:hello@indiaspora.ch" style={{ color: GOLD }}>hello@indiaspora.ch</a>.
                    </span>
                  </label>
                </div>

                <div style={{ padding: "10px 14px", borderRadius: 10, background: "rgba(100,100,120,0.06)", border: "1px solid var(--border)", display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <Shield size={14} style={{ color: "var(--text-3)", marginTop: 1, flexShrink: 0 }} />
                  <p style={{ fontSize: 11, color: "var(--text-3)", margin: 0, lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                    Data is stored securely and processed in compliance with Swiss data protection law (nDSG) and EU GDPR principles.
                    Indiaspora is operated from Switzerland.
                  </p>
                </div>

                {status === "error" && (
                  <div style={{ fontSize: 12, color: "#C87880", padding: "10px 14px", borderRadius: 10, background: "rgba(200,120,128,0.08)", border: "1px solid rgba(200,120,128,0.24)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                    Something went wrong — please try again or email hello@indiaspora.ch.
                  </div>
                )}

                <button type="submit" disabled={status === "sending" || !consent} className="btn btn-primary" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 8, opacity: (status === "sending" || !consent) ? 0.6 : 1 }}>
                  {status === "sending" ? "Sending…" : <><Send size={14} /> Submit Enquiry</>}
                </button>
              </form>
            )}
          </div>
        </section>
      </div>

      <style>{`@media (max-width: 640px) { .adv-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
