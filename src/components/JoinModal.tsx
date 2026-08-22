"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronRight, CheckCircle2, Loader2, User, Mail, MapPin, Briefcase, ChevronDown } from "lucide-react";

const SWISS_CITIES = ["Zurich", "Geneva", "Basel", "Bern", "Lausanne", "Lugano", "Winterthur", "St. Gallen", "Other"];
const INTERESTS = [
  "Festivals & Culture", "Food & Dining", "Business Networking",
  "Community Events", "Spiritual Groups", "Language & Education",
  "Sports & Recreation", "Women's Network", "Students",
];
const TIERS = [
  {
    id: "Community",
    label: "Community",
    price: "Free",
    desc: "Access to directory, events and community news",
    features: ["Full directory access", "Event notifications", "Community newsletter"],
    color: "#059669",
  },
  {
    id: "Member",
    label: "Member",
    price: "CHF 50/yr",
    desc: "Everything in Community plus priority features",
    features: ["All Community benefits", "Business listing", "Early event access", "Member badge"],
    color: "#F97316",
    popular: true,
  },
  {
    id: "Supporter",
    label: "Supporter",
    price: "CHF 150/yr",
    desc: "Support the community and get premium access",
    features: ["All Member benefits", "Featured profile", "Sponsor badge", "Annual report"],
    color: "#4F46E5",
  },
];

const EMPTY_FORM = {
  full_name: "", email: "", city: "", profession: "",
  interests: [] as string[], newsletter: true,
};

interface Props {
  open: boolean;
  onClose: () => void;
}

type Step = "tier" | "details" | "success";

export default function JoinModal({ open, onClose }: Props) {
  const [step, setStep] = useState<Step>("tier");
  const [tier, setTier] = useState("Community");
  const [form, setForm] = useState({ ...EMPTY_FORM });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successEmail, setSuccessEmail] = useState("");

  // Reset form fully when modal closes
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setStep("tier");
        setTier("Community");
        setForm({ ...EMPTY_FORM });
        setError("");
        setSuccessEmail("");
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Lock body scroll
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const toggleInterest = useCallback((i: string) => {
    setForm(f => ({
      ...f,
      interests: f.interests.includes(i)
        ? f.interests.filter(x => x !== i)
        : [...f.interests, i],
    }));
  }, []);

  const submit = async () => {
    if (!form.full_name.trim()) { setError("Please enter your full name."); return; }
    if (!form.email.trim()) { setError("Please enter your email address."); return; }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(form.email)) { setError("Please enter a valid email address."); return; }

    setLoading(true); setError("");
    try {
      const res = await fetch("/api/members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, tier }),
      });
      const json = await res.json();
      if (!res.ok) { setError(json.error || "Something went wrong. Please try again."); return; }
      setSuccessEmail(form.email);
      setStep("success");
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Join Indiaspora Community"
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(8px)",
        animation: "jmFadeIn 0.2s ease",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          width: "100%", maxWidth: step === "tier" ? 740 : 520,
          maxHeight: "92vh", overflowY: "auto",
          background: "var(--surface)",
          borderRadius: 24,
          boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
          animation: "jmSlideUp 0.3s cubic-bezier(0.16,1,0.3,1)",
          position: "relative",
          transition: "max-width 0.3s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute", top: 16, right: 16, zIndex: 10,
            width: 34, height: 34, borderRadius: "50%",
            background: "var(--surface-2)", border: "1px solid var(--border)",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--text-2)", transition: "background 0.15s, color 0.15s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--surface-3)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--surface-2)"; (e.currentTarget as HTMLElement).style.color = "var(--text-2)"; }}
        >
          <X size={16} />
        </button>

        {/* Progress header */}
        {step !== "success" && (
          <div style={{ padding: "28px 32px 0" }}>
            {/* Step indicators */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              {(["tier", "details"] as Step[]).map((s, i) => {
                const done = i === 0 && step === "details";
                const current = step === s;
                return (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{
                      width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 11, fontWeight: 800,
                      background: done ? "#059669" : current ? "linear-gradient(135deg,var(--sf),var(--sf-hi))" : "var(--surface-2)",
                      color: (done || current) ? "#fff" : "var(--text-3)",
                      transition: "all 0.2s",
                    }}>
                      {done ? "✓" : i + 1}
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 700, color: current ? "var(--text)" : done ? "#059669" : "var(--text-3)" }}>
                      {s === "tier" ? "Choose Plan" : "Your Details"}
                    </span>
                    {i === 0 && (
                      <ChevronRight size={14} style={{ color: "var(--text-3)", flexShrink: 0 }} />
                    )}
                  </div>
                );
              })}
            </div>

            <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 800, color: "var(--text)", fontFamily: "'Syne',system-ui,sans-serif", letterSpacing: "-0.03em" }}>
              {step === "tier" ? "Join Indiaspora" : "Tell us about yourself"}
            </h2>
            <p style={{ margin: "0 0 24px", fontSize: 14, color: "var(--text-2)", lineHeight: 1.6 }}>
              {step === "tier"
                ? "Choose your membership level — you can upgrade anytime."
                : "A few quick details to personalise your experience."}
            </p>
          </div>
        )}

        {/* ── Step 1: Tier selection ── */}
        {step === "tier" && (
          <div style={{ padding: "0 28px 28px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(198px,1fr))", gap: 12, marginBottom: 20 }}>
              {TIERS.map(t => (
                <button
                  key={t.id}
                  onClick={() => setTier(t.id)}
                  style={{
                    position: "relative", textAlign: "left",
                    padding: "20px 18px", borderRadius: 18, cursor: "pointer",
                    border: `2px solid ${tier === t.id ? t.color : "var(--border-2)"}`,
                    background: tier === t.id ? `${t.color}10` : "var(--surface)",
                    transition: "border-color 0.2s, background 0.2s, transform 0.15s, box-shadow 0.2s",
                    boxShadow: tier === t.id ? `0 4px 20px ${t.color}25` : "none",
                    transform: tier === t.id ? "translateY(-2px)" : "none",
                  }}
                  onMouseEnter={e => { if (tier !== t.id) { (e.currentTarget as HTMLElement).style.borderColor = `${t.color}60`; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; } }}
                  onMouseLeave={e => { if (tier !== t.id) { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-2)"; (e.currentTarget as HTMLElement).style.transform = "none"; } }}
                >
                  {t.popular && (
                    <div style={{
                      position: "absolute", top: -10, right: 14,
                      background: "linear-gradient(135deg,var(--sf),var(--sf-hi))",
                      color: "#fff", fontSize: 9.5, fontWeight: 800, padding: "3px 10px",
                      borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.1em",
                    }}>Most Popular</div>
                  )}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <div style={{ fontSize: 16, fontWeight: 800, color: t.color }}>{t.label}</div>
                    {tier === t.id && (
                      <CheckCircle2 size={18} style={{ color: t.color, flexShrink: 0 }} />
                    )}
                  </div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "var(--text)", letterSpacing: "-0.04em", marginBottom: 4 }}>{t.price}</div>
                  <div style={{ fontSize: 12, color: "var(--text-2)", marginBottom: 14, lineHeight: 1.5 }}>{t.desc}</div>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                    {t.features.map(f => (
                      <li key={f} style={{ display: "flex", gap: 7, alignItems: "flex-start", fontSize: 12, color: "var(--text-2)" }}>
                        <CheckCircle2 size={13} style={{ color: t.color, flexShrink: 0, marginTop: 1 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={() => setStep("details")}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "12px 28px", borderRadius: 999,
                  background: "linear-gradient(135deg,var(--sf),var(--sf-hi))",
                  color: "#fff", border: "none", cursor: "pointer",
                  fontSize: 14, fontWeight: 700,
                  boxShadow: "0 4px 16px var(--sf-glow)",
                  transition: "opacity 0.15s, transform 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.9"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
              >
                Continue <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* ── Step 2: Details form ── */}
        {step === "details" && (
          <div style={{ padding: "0 32px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
            <style>{`
              .jm-input { width:100%; border-radius:12px; border:1.5px solid var(--border-2); background:var(--surface-2); color:var(--text); font-size:14px; outline:none; box-sizing:border-box; transition:border-color 0.15s, background 0.15s; }
              .jm-input:focus { border-color:var(--sf); background:var(--surface); }
              .jm-interest { padding:6px 14px; border-radius:999px; font-size:12px; font-weight:600; cursor:pointer; border:1.5px solid var(--border-2); background:transparent; color:var(--text-2); transition:all 0.15s; }
              .jm-interest:hover { border-color:var(--sf); color:var(--sf); background:var(--sf-bg); }
              .jm-interest.active { border-color:var(--sf); color:var(--sf); background:var(--sf-bg); }
            `}</style>

            {/* Name */}
            <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>Full Name <span style={{ color: "var(--sf)" }}>*</span></span>
              <div style={{ position: "relative" }}>
                <User size={14} style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: "var(--text-3)", pointerEvents: "none" }} />
                <input
                  type="text"
                  placeholder="Priya Sharma"
                  value={form.full_name}
                  onChange={e => setForm(f => ({ ...f, full_name: e.target.value }))}
                  onKeyDown={e => e.key === "Enter" && submit()}
                  className="jm-input"
                  style={{ padding: "11px 13px 11px 36px" }}
                  autoFocus
                />
              </div>
            </label>

            {/* Email */}
            <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>Email Address <span style={{ color: "var(--sf)" }}>*</span></span>
              <div style={{ position: "relative" }}>
                <Mail size={14} style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: "var(--text-3)", pointerEvents: "none" }} />
                <input
                  type="email"
                  placeholder="priya@example.com"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  onKeyDown={e => e.key === "Enter" && submit()}
                  className="jm-input"
                  style={{ padding: "11px 13px 11px 36px" }}
                />
              </div>
            </label>

            {/* City + Profession side by side on wider screens */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>City</span>
                <div style={{ position: "relative" }}>
                  <MapPin size={14} style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: "var(--text-3)", pointerEvents: "none", zIndex: 1 }} />
                  <select
                    value={form.city}
                    onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
                    className="jm-input"
                    style={{ padding: "11px 36px 11px 36px", appearance: "none", WebkitAppearance: "none" }}
                  >
                    <option value="">Select city…</option>
                    {SWISS_CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <ChevronDown size={14} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "var(--text-3)", pointerEvents: "none" }} />
                </div>
              </label>

              <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>Profession</span>
                <div style={{ position: "relative" }}>
                  <Briefcase size={14} style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: "var(--text-3)", pointerEvents: "none" }} />
                  <input
                    type="text"
                    placeholder="Software Engineer"
                    value={form.profession}
                    onChange={e => setForm(f => ({ ...f, profession: e.target.value }))}
                    className="jm-input"
                    style={{ padding: "11px 13px 11px 36px" }}
                  />
                </div>
              </label>
            </div>

            {/* Interests */}
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 10 }}>Your Interests</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {INTERESTS.map(i => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => toggleInterest(i)}
                    className={`jm-interest${form.interests.includes(i) ? " active" : ""}`}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <label style={{ display: "flex", gap: 10, alignItems: "flex-start", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={form.newsletter}
                onChange={e => setForm(f => ({ ...f, newsletter: e.target.checked }))}
                style={{ width: 16, height: 16, accentColor: "var(--sf)", cursor: "pointer", marginTop: 2, flexShrink: 0 }}
              />
              <span style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.55 }}>
                Send me the monthly Indiaspora newsletter with events, news and community highlights.
              </span>
            </label>

            {/* Error */}
            {error && (
              <div role="alert" style={{ padding: "10px 14px", borderRadius: 10, background: "rgba(220,38,38,0.07)", border: "1px solid rgba(220,38,38,0.2)", fontSize: 13, color: "#DC2626", lineHeight: 1.5 }}>
                {error}
              </div>
            )}

            {/* Actions */}
            <div style={{ display: "flex", gap: 10, justifyContent: "space-between", alignItems: "center" }}>
              <button
                onClick={() => { setStep("tier"); setError(""); }}
                style={{ padding: "11px 20px", borderRadius: 999, background: "var(--surface-2)", border: "1px solid var(--border-2)", color: "var(--text-2)", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "background 0.15s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "var(--surface-3)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "var(--surface-2)"}
              >
                ← Back
              </button>
              <button
                onClick={submit}
                disabled={loading}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "12px 28px", borderRadius: 999,
                  background: loading ? "var(--surface-2)" : "linear-gradient(135deg,var(--sf),var(--sf-hi))",
                  color: loading ? "var(--text-3)" : "#fff",
                  border: "none", cursor: loading ? "not-allowed" : "pointer",
                  fontSize: 14, fontWeight: 700,
                  boxShadow: loading ? "none" : "0 4px 16px var(--sf-glow)",
                  transition: "all 0.2s",
                }}
              >
                {loading && <Loader2 size={15} style={{ animation: "jmSpin 1s linear infinite" }} />}
                {loading ? "Joining…" : "Join the Community 🪔"}
              </button>
            </div>
          </div>
        )}

        {/* ── Step 3: Success ── */}
        {step === "success" && (
          <div style={{ padding: "52px 40px 48px", textAlign: "center" }}>
            <div style={{
              width: 80, height: 80, borderRadius: "50%",
              background: "linear-gradient(135deg,#059669,#10B981)",
              margin: "0 auto 24px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 36,
              animation: "jmBounce 0.5s cubic-bezier(0.16,1,0.3,1)",
              boxShadow: "0 8px 28px rgba(5,150,105,0.3)",
            }}>🪔</div>
            <h2 style={{ margin: "0 0 8px", fontSize: 26, fontWeight: 800, color: "var(--text)", fontFamily: "'Syne',system-ui,sans-serif", letterSpacing: "-0.03em" }}>
              Welcome to Indiaspora!
            </h2>
            <p style={{ margin: "0 0 8px", fontSize: 15, color: "var(--text-2)", lineHeight: 1.7 }}>
              You&apos;re now part of Switzerland&apos;s Indian community hub.
            </p>
            {successEmail && (
              <p style={{ margin: "0 0 32px", fontSize: 13, color: "var(--text-3)" }}>
                A welcome email has been sent to <strong style={{ color: "var(--text-2)" }}>{successEmail}</strong>
              </p>
            )}
            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={onClose}
                style={{
                  padding: "12px 28px", borderRadius: 999,
                  background: "linear-gradient(135deg,var(--sf),var(--sf-hi))",
                  color: "#fff", border: "none", cursor: "pointer",
                  fontSize: 14, fontWeight: 700,
                  boxShadow: "0 4px 16px var(--sf-glow)",
                  transition: "opacity 0.15s, transform 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.9"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
              >
                Start Exploring →
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes jmFadeIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes jmSlideUp { from { opacity:0; transform:translateY(20px) scale(0.98) } to { opacity:1; transform:none } }
        @keyframes jmBounce  { 0%{transform:scale(0.5);opacity:0} 70%{transform:scale(1.08)} 100%{transform:scale(1);opacity:1} }
        @keyframes jmSpin    { to { transform:rotate(360deg) } }
      `}</style>
    </div>
  );
}
