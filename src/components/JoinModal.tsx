"use client";

import { useState, useEffect } from "react";
import { X, ChevronRight, CheckCircle2, Loader2, User, Mail, MapPin, Briefcase } from "lucide-react";

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

interface Props {
  open: boolean;
  onClose: () => void;
}

type Step = "tier" | "details" | "success";

export default function JoinModal({ open, onClose }: Props) {
  const [step, setStep] = useState<Step>("tier");
  const [tier, setTier] = useState("Community");
  const [form, setForm] = useState({
    full_name: "", email: "", city: "", profession: "",
    interests: [] as string[], newsletter: true,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) { setTimeout(() => { setStep("tier"); setError(""); }, 300); }
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const toggleInterest = (i: string) => {
    setForm(f => ({
      ...f,
      interests: f.interests.includes(i)
        ? f.interests.filter(x => x !== i)
        : [...f.interests, i],
    }));
  };

  const submit = async () => {
    if (!form.full_name.trim() || !form.email.trim()) {
      setError("Please fill in your name and email.");
      return;
    }
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
      if (!res.ok) { setError(json.error || "Something went wrong."); return; }
      setStep("success");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog" aria-modal="true" aria-label="Join Indiaspora Community"
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(6px)",
        animation: "fadeIn 0.2s ease",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{
          width: "100%", maxWidth: step === "tier" ? 720 : 520,
          maxHeight: "90vh", overflowY: "auto",
          background: "var(--surface)",
          borderRadius: 24,
          boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
          animation: "slideUp 0.3s cubic-bezier(0.16,1,0.3,1)",
          position: "relative",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute", top: 16, right: 16, zIndex: 10,
            width: 36, height: 36, borderRadius: "50%",
            background: "var(--surface-2)", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--text-2)",
          }}
        >
          <X size={18} />
        </button>

        {/* Header */}
        {step !== "success" && (
          <div style={{ padding: "32px 32px 0" }}>
            <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
              {(["tier", "details"] as Step[]).map((s, i) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%",
                    background: step === s || (i === 0 && step === "details")
                      ? "linear-gradient(135deg,var(--sf),var(--sf-hi))" : "var(--surface-2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 12, fontWeight: 700,
                    color: step === s || (i === 0 && step === "details") ? "#fff" : "var(--text-3)",
                    transition: "all 0.2s",
                  }}>
                    {i === 0 && step === "details" ? "✓" : i + 1}
                  </div>
                  <span style={{ fontSize: 13, color: step === s ? "var(--text)" : "var(--text-3)", fontWeight: 600 }}>
                    {s === "tier" ? "Choose Plan" : "Your Details"}
                  </span>
                  {i === 0 && <ChevronRight size={14} style={{ color: "var(--text-3)" }} />}
                </div>
              ))}
            </div>
            <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 800, color: "var(--text)", fontFamily: "'Syne',system-ui,sans-serif" }}>
              {step === "tier" ? "Join the Community" : "Tell us about yourself"}
            </h2>
            <p style={{ margin: "0 0 24px", fontSize: 14, color: "var(--text-2)" }}>
              {step === "tier"
                ? "Select a membership level to get started — upgrade anytime."
                : "Just a few details so we can personalise your experience."}
            </p>
          </div>
        )}

        {/* Step: Tier selection */}
        {step === "tier" && (
          <div style={{ padding: "0 32px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14 }}>
            {TIERS.map(t => (
              <button
                key={t.id}
                onClick={() => setTier(t.id)}
                style={{
                  position: "relative", textAlign: "left",
                  padding: 20, borderRadius: 16, cursor: "pointer",
                  border: `2px solid ${tier === t.id ? t.color : "var(--border-2)"}`,
                  background: tier === t.id ? `${t.color}0f` : "var(--surface)",
                  transition: "all 0.2s",
                  outline: "none",
                }}
              >
                {t.popular && (
                  <div style={{
                    position: "absolute", top: -10, right: 14,
                    background: "linear-gradient(135deg,var(--sf),var(--sf-hi))",
                    color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 10px",
                    borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.08em",
                  }}>Popular</div>
                )}
                <div style={{ fontSize: 20, fontWeight: 800, color: t.color, marginBottom: 2 }}>{t.label}</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: "var(--text)", marginBottom: 6 }}>{t.price}</div>
                <div style={{ fontSize: 12, color: "var(--text-2)", marginBottom: 14 }}>{t.desc}</div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                  {t.features.map(f => (
                    <li key={f} style={{ display: "flex", gap: 6, alignItems: "flex-start", fontSize: 12, color: "var(--text-2)" }}>
                      <CheckCircle2 size={13} style={{ color: t.color, flexShrink: 0, marginTop: 1 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </button>
            ))}
            <div style={{ gridColumn: "1/-1", display: "flex", justifyContent: "flex-end", paddingTop: 8 }}>
              <button
                onClick={() => setStep("details")}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "13px 28px", borderRadius: 999,
                  background: "linear-gradient(135deg,var(--sf),var(--sf-hi))",
                  color: "#fff", border: "none", cursor: "pointer",
                  fontSize: 14, fontWeight: 700,
                }}
              >
                Continue <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step: Details form */}
        {step === "details" && (
          <div style={{ padding: "0 32px 32px", display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { icon: User, label: "Full Name *", key: "full_name", placeholder: "Priya Sharma", type: "text" },
              { icon: Mail, label: "Email Address *", key: "email", placeholder: "priya@example.com", type: "email" },
              { icon: Briefcase, label: "Profession", key: "profession", placeholder: "Software Engineer", type: "text" },
            ].map(({ icon: Icon, label, key, placeholder, type }) => (
              <label key={key} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{label}</span>
                <div style={{ position: "relative" }}>
                  <Icon size={15} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text-3)" }} />
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={form[key as keyof typeof form] as string}
                    onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                    style={{
                      width: "100%", padding: "11px 14px 11px 38px",
                      borderRadius: 12, border: "1px solid var(--border-2)",
                      background: "var(--surface-2)", color: "var(--text)",
                      fontSize: 14, outline: "none", boxSizing: "border-box",
                    }}
                  />
                </div>
              </label>
            ))}

            {/* City select */}
            <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>City in Switzerland</span>
              <div style={{ position: "relative" }}>
                <MapPin size={15} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text-3)" }} />
                <select
                  value={form.city}
                  onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
                  style={{
                    width: "100%", padding: "11px 14px 11px 38px",
                    borderRadius: 12, border: "1px solid var(--border-2)",
                    background: "var(--surface-2)", color: "var(--text)",
                    fontSize: 14, outline: "none", appearance: "none",
                  }}
                >
                  <option value="">Select your city</option>
                  {SWISS_CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </label>

            {/* Interests */}
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 8 }}>Your Interests</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {INTERESTS.map(i => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => toggleInterest(i)}
                    style={{
                      padding: "6px 14px", borderRadius: 999,
                      fontSize: 12, fontWeight: 600, cursor: "pointer",
                      border: `1.5px solid ${form.interests.includes(i) ? "var(--sf)" : "var(--border-2)"}`,
                      background: form.interests.includes(i) ? "var(--sf-bg)" : "transparent",
                      color: form.interests.includes(i) ? "var(--sf)" : "var(--text-2)",
                      transition: "all 0.15s",
                    }}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <label style={{ display: "flex", gap: 10, alignItems: "center", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={form.newsletter}
                onChange={e => setForm(f => ({ ...f, newsletter: e.target.checked }))}
                style={{ width: 16, height: 16, accentColor: "var(--sf)", cursor: "pointer" }}
              />
              <span style={{ fontSize: 13, color: "var(--text-2)" }}>
                Send me the monthly Indiaspora newsletter with events and community news
              </span>
            </label>

            {error && (
              <div style={{ padding: "10px 14px", borderRadius: 10, background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.2)", fontSize: 13, color: "#DC2626" }}>
                {error}
              </div>
            )}

            <div style={{ display: "flex", gap: 10, justifyContent: "space-between" }}>
              <button
                onClick={() => setStep("tier")}
                style={{ padding: "12px 20px", borderRadius: 999, background: "var(--surface-2)", border: "1px solid var(--border-2)", color: "var(--text-2)", fontSize: 14, fontWeight: 600, cursor: "pointer" }}
              >
                ← Back
              </button>
              <button
                onClick={submit}
                disabled={loading}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "13px 28px", borderRadius: 999,
                  background: loading ? "var(--surface-2)" : "linear-gradient(135deg,var(--sf),var(--sf-hi))",
                  color: loading ? "var(--text-3)" : "#fff",
                  border: "none", cursor: loading ? "default" : "pointer",
                  fontSize: 14, fontWeight: 700,
                }}
              >
                {loading && <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />}
                {loading ? "Joining…" : "Join the Community 🪔"}
              </button>
            </div>
          </div>
        )}

        {/* Step: Success */}
        {step === "success" && (
          <div style={{ padding: 48, textAlign: "center" }}>
            <div style={{
              width: 80, height: 80, borderRadius: "50%",
              background: "linear-gradient(135deg,#059669,#10B981)",
              margin: "0 auto 24px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 36,
              animation: "bounceIn 0.5s cubic-bezier(0.16,1,0.3,1)",
            }}>🪔</div>
            <h2 style={{ margin: "0 0 8px", fontSize: 24, fontWeight: 800, color: "var(--text)", fontFamily: "'Syne',system-ui,sans-serif" }}>
              Welcome to Indiaspora!
            </h2>
            <p style={{ margin: "0 0 8px", fontSize: 15, color: "var(--text-2)", lineHeight: 1.7 }}>
              You&apos;re now part of Switzerland&apos;s Indian community hub.
            </p>
            <p style={{ margin: "0 0 32px", fontSize: 13, color: "var(--text-3)" }}>
              A welcome email has been sent to {form.email}
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <button
                onClick={onClose}
                style={{
                  padding: "12px 28px", borderRadius: 999,
                  background: "linear-gradient(135deg,var(--sf),var(--sf-hi))",
                  color: "#fff", border: "none", cursor: "pointer",
                  fontSize: 14, fontWeight: 700,
                }}
              >
                Start Exploring →
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:none } }
        @keyframes bounceIn { 0%{transform:scale(0.5);opacity:0} 70%{transform:scale(1.1)} 100%{transform:scale(1);opacity:1} }
        @keyframes spin { to { transform:rotate(360deg) } }
      `}</style>
    </div>
  );
}
