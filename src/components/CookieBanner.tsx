"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, X, ChevronDown, ChevronUp } from "lucide-react";

const CONSENT_KEY = "indiaspora_cookie_consent";

export type ConsentState = "all" | "necessary" | null;

export function getConsentState(): ConsentState {
  if (typeof window === "undefined") return null;
  try {
    return (localStorage.getItem(CONSENT_KEY) as ConsentState) || null;
  } catch {
    return null;
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = (level: "all" | "necessary") => {
    try { localStorage.setItem(CONSENT_KEY, level); } catch {}
    setClosing(true);
    setTimeout(() => setVisible(false), 350);
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop — blocks interaction with the site */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 9998,
        background: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(2px)",
        animation: closing ? "fadeOut 0.35s ease forwards" : "fadeIn 0.3s ease",
      }} />

      {/* Banner */}
      <div style={{
        position: "fixed", left: "50%", bottom: 24, zIndex: 9999,
        transform: "translateX(-50%)",
        width: "calc(100% - 32px)", maxWidth: 580,
        background: "var(--surface)",
        borderRadius: 20,
        border: "1px solid var(--border)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.1)",
        overflow: "hidden",
        animation: closing ? "slideDown 0.35s ease forwards" : "slideUp 0.3s ease",
      }}>
        {/* Top accent bar */}
        <div style={{ height: 3, background: "linear-gradient(90deg,#F97316,#DC2626,#4F46E5)" }} />

        <div style={{ padding: "24px 24px 20px" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
            <div style={{ padding: 10, borderRadius: 12, background: "rgba(249,115,22,0.1)", flexShrink: 0 }}>
              <Shield size={20} style={{ color: "#F97316", display: "block" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 15, color: "var(--text)", fontFamily: "'Syne',system-ui,sans-serif", marginBottom: 4 }}>
                We value your privacy
              </div>
              <p style={{ margin: 0, fontSize: 13, color: "var(--text-2)", lineHeight: 1.6 }}>
                Indiaspora uses cookies to improve your experience, analyse site traffic, and personalise content.
                By clicking <strong style={{ color: "var(--text)" }}>Accept All</strong>, you agree to our{" "}
                <Link href="/privacy" style={{ color: "#F97316", textDecoration: "none", fontWeight: 600 }}>Privacy Policy</Link>
                {" "}and{" "}
                <Link href="/privacy#cookies" style={{ color: "#F97316", textDecoration: "none", fontWeight: 600 }}>Cookie Policy</Link>.
              </p>
            </div>
          </div>

          {/* Expandable details */}
          <button onClick={() => setExpanded(v => !v)} style={{
            display: "flex", alignItems: "center", gap: 5,
            background: "none", border: "none", cursor: "pointer",
            fontSize: 12, color: "var(--text-3)", fontWeight: 600, padding: "0 0 14px",
          }}>
            {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            {expanded ? "Hide details" : "What cookies do we use?"}
          </button>

          {expanded && (
            <div style={{ marginBottom: 16, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                {
                  name: "Essential cookies",
                  desc: "Required for the site to function — authentication, security, and session management. Always active.",
                  required: true,
                  color: "#059669",
                },
                {
                  name: "Analytics cookies",
                  desc: "Help us understand which pages are visited and how visitors navigate the site. No personal data is sold.",
                  required: false,
                  color: "#4F46E5",
                },
              ].map(({ name, desc, required, color }) => (
                <div key={name} style={{ padding: "12px 14px", borderRadius: 10, background: "var(--surface-2)", border: "1px solid var(--border-2)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{name}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 999, background: `${color}15`, color }}>
                      {required ? "Always on" : "Optional"}
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: 12, color: "var(--text-3)", lineHeight: 1.55 }}>{desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => accept("necessary")} style={{
              flex: 1, padding: "11px", borderRadius: 12,
              border: "1px solid var(--border-2)", background: "var(--surface-2)",
              color: "var(--text-2)", cursor: "pointer", fontSize: 13, fontWeight: 600,
              transition: "background 0.15s",
            }}>
              Necessary only
            </button>
            <button onClick={() => accept("all")} style={{
              flex: 2, padding: "11px", borderRadius: 12, border: "none",
              background: "linear-gradient(135deg,#F97316,#DC2626)",
              color: "#fff", cursor: "pointer", fontSize: 13, fontWeight: 700,
              boxShadow: "0 2px 12px rgba(249,115,22,0.35)",
            }}>
              Accept All Cookies
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn   { from { opacity:0 } to { opacity:1 } }
        @keyframes fadeOut  { from { opacity:1 } to { opacity:0 } }
        @keyframes slideUp  { from { opacity:0; transform:translateX(-50%) translateY(20px) } to { opacity:1; transform:translateX(-50%) translateY(0) } }
        @keyframes slideDown{ from { opacity:1; transform:translateX(-50%) translateY(0) } to { opacity:0; transform:translateX(-50%) translateY(20px) } }
      `}</style>
    </>
  );
}
