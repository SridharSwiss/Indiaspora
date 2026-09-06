"use client";

import { useState, useEffect, useMemo } from "react";
import { X, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const STORAGE_KEY = "nl_banner_dismissed";

export default function NewsletterBanner() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const supabase = useMemo(() => createClient(), []);

  useEffect(() => {
    let cancelled = false;

    const maybeShow = async () => {
      // Never show if already dismissed this browser session
      try {
        if (localStorage.getItem(STORAGE_KEY)) return;
      } catch { /* storage blocked */ }

      // Check if signed-in user already has an active subscription
      const { data: { user } } = await supabase.auth.getUser();
      if (cancelled) return;

      if (user?.email) {
        // Pre-fill email for convenience
        setEmail(user.email);

        // Check subscription status via the newsletter API list endpoint
        // We do a lightweight HEAD-style check by fetching the subscriber list
        // and checking for the user's email. Use the public status check approach:
        const res = await fetch(`/api/newsletter/status?email=${encodeURIComponent(user.email)}`);
        if (cancelled) return;
        if (res.ok) {
          const json = await res.json();
          if (json.active) return; // already subscribed — suppress banner
        }
      }

      // Show banner after 8 seconds
      const t = setTimeout(() => { if (!cancelled) setVisible(true); }, 8000);
      return () => clearTimeout(t);
    };

    const cleanup = maybeShow();
    return () => {
      cancelled = true;
      cleanup?.then(fn => fn?.());
    };
  }, [supabase]);

  const dismiss = () => {
    setVisible(false);
    try { localStorage.setItem(STORAGE_KEY, "1"); } catch { /* noop */ }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) { setErrorMsg("Please tick the consent box to continue."); return; }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent }),
      });
      const json = await res.json();
      if (!res.ok) { setStatus("error"); setErrorMsg(json.error || "Something went wrong."); return; }
      setStatus("success");
      setTimeout(dismiss, 3000);
    } catch {
      setStatus("error");
      setErrorMsg("Network error — please try again.");
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Newsletter subscription"
      style={{
        position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)",
        zIndex: 9999, width: "min(560px, calc(100vw - 32px))",
        background: "var(--surface, #1c1917)",
        border: "1px solid rgba(176,141,87,0.25)",
        borderRadius: 20,
        boxShadow: "0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(176,141,87,0.08)",
        padding: "22px 24px 20px",
        animation: "nlSlideUp 0.35s cubic-bezier(.22,1,.36,1) both",
      }}
    >
      <style>{`
        @keyframes nlSlideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(24px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>

      {/* Close */}
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        style={{
          position: "absolute", top: 14, right: 14,
          background: "none", border: "none", cursor: "pointer",
          color: "var(--text-3, rgba(200,185,165,0.5))", padding: 4, borderRadius: 6,
          lineHeight: 1,
        }}
      >
        <X size={16} />
      </button>

      {status === "success" ? (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "8px 0", textAlign: "center" }}>
          <CheckCircle2 size={36} style={{ color: "#10b981" }} />
          <p style={{ margin: 0, fontWeight: 700, fontSize: 15, color: "var(--text, #f5ede0)" }}>You're subscribed!</p>
          <p style={{ margin: 0, fontSize: 13, color: "var(--text-3, rgba(200,185,165,0.7))" }}>Weekly digest of Indian community events and news in Switzerland.</p>
        </div>
      ) : (
        <>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10, flexShrink: 0,
              background: "linear-gradient(135deg,#B08D57,#d4a853)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Mail size={18} style={{ color: "#1A1410" }} />
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 800, fontSize: 15, color: "var(--text, #f5ede0)", fontFamily: "'Playfair Display',Georgia,serif" }}>
                Stay in the loop
              </p>
              <p style={{ margin: 0, fontSize: 12, color: "var(--text-3, rgba(200,185,165,0.65))", marginTop: 1 }}>
                Weekly digest — events, community news &amp; more across Switzerland
              </p>
            </div>
          </div>

          <form onSubmit={submit}>
            <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  flex: 1, padding: "10px 14px", borderRadius: 10, fontSize: 13,
                  border: "1px solid rgba(176,141,87,0.25)",
                  background: "rgba(255,255,255,0.04)",
                  color: "var(--text, #f5ede0)", outline: "none",
                }}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  padding: "10px 20px", borderRadius: 10, border: "none", cursor: "pointer",
                  background: "#B08D57", color: "#1A1410",
                  fontWeight: 700, fontSize: 13, whiteSpace: "nowrap",
                  display: "flex", alignItems: "center", gap: 6,
                  opacity: status === "loading" ? 0.7 : 1,
                }}
              >
                {status === "loading" ? <Loader2 size={14} style={{ animation: "spin 1s linear infinite" }} /> : null}
                Subscribe
              </button>
            </div>

            {/* Consent */}
            <label style={{ display: "flex", alignItems: "flex-start", gap: 8, cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={consent}
                onChange={e => setConsent(e.target.checked)}
                style={{ marginTop: 2, accentColor: "#B08D57", flexShrink: 0 }}
              />
              <span style={{ fontSize: 11, color: "var(--text-3, rgba(200,185,165,0.6))", lineHeight: 1.5 }}>
                I agree to receive the weekly Indiaspora newsletter. I can unsubscribe at any time. No spam — we only send what matters to the Swiss-Indian community.
              </span>
            </label>

            {errorMsg && (
              <p style={{ margin: "8px 0 0", fontSize: 11, color: "#f87171" }}>{errorMsg}</p>
            )}
          </form>
        </>
      )}

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
