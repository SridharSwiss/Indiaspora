"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { usePathname } from "next/navigation";
import { X, Mail, Loader2, CheckCircle2, LogIn, UserPlus } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

const SUPPRESSED_PATHS = ["/login", "/join", "/signup", "/register", "/reset-password", "/admin"];

const STORAGE_SIGNIN   = "signin_banner_dismissed";
const STORAGE_NL       = "nl_banner_dismissed";
const STORAGE_CONSENT  = "indiaspora_cookie_consent"; // written by CookieBanner

function hasConsent(): boolean {
  try { return !!localStorage.getItem(STORAGE_CONSENT); } catch { return false; }
}

type ActiveBanner = "signin" | "newsletter" | null;

export default function BannerManager() {
  const pathname = usePathname();
  const [active, setActive]     = useState<ActiveBanner>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); // null = unknown

  // Newsletter form state
  const [email, setEmail]       = useState("");
  const [consent, setConsent]   = useState(false);
  const [nlStatus, setNlStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [nlError, setNlError]   = useState("");

  // Track whether signed-in user is an active subscriber (for dismissSignin logic)
  const isActiveSubscriberRef = useRef<boolean>(false);

  const supabase = useMemo(() => createClient(), []);

  useEffect(() => {
    // 8s fallback — generous enough for Supabase auth to resolve on slow connections
    const timeout = setTimeout(() => setIsLoggedIn(prev => prev === null ? false : prev), 8000);
    supabase.auth.getUser().then(({ data: { user } }) => {
      clearTimeout(timeout);
      setIsLoggedIn(!!user);
    }).catch(() => {
      clearTimeout(timeout);
      setIsLoggedIn(false);
    });
    return () => clearTimeout(timeout);
  }, [supabase]);

  useEffect(() => {
    if (isLoggedIn === null) return; // still loading auth

    let cancelled = false;

    const start = async () => {
      if (cancelled) return;
      if (SUPPRESSED_PATHS.some(p => pathname.startsWith(p))) return;

      const sigDismissed = (() => { try { return !!localStorage.getItem(STORAGE_SIGNIN); } catch { return false; } })();

      if (isLoggedIn) {
        // Signed-in path: check DB subscription status
        const { data: { user } } = await supabase.auth.getUser();
        if (cancelled) return;
        if (user?.email) {
          setEmail(user.email);
          const { data: row } = await supabase
            .from("newsletter_subscribers")
            .select("active")
            .eq("email", user.email)
            .maybeSingle();
          if (cancelled) return;
          if (row?.active === true) {
            // Active subscriber — never show any banner
            isActiveSubscriberRef.current = true;
            return;
          }
        }
        // Signed in but not subscribed — show newsletter banner (pre-filled email)
        setTimeout(() => { if (!cancelled) setActive("newsletter"); }, 8000);
        return;
      }

      // Not logged in — show sign-in banner only (no newsletter for anonymous users)
      if (!sigDismissed) {
        setTimeout(() => { if (!cancelled) setActive("signin"); }, 3000);
      }
    };

    if (hasConsent()) {
      start();
    } else {
      const interval = setInterval(() => {
        if (hasConsent()) { clearInterval(interval); start(); }
      }, 500);
      return () => { cancelled = true; clearInterval(interval); };
    }

    return () => { cancelled = true; };
  }, [isLoggedIn, supabase]);

  const dismissSignin = () => {
    setActive(null);
    try { localStorage.setItem(STORAGE_SIGNIN, "1"); } catch { /* noop */ }
  };

  const dismissNewsletter = () => {
    setActive(null);
    try { localStorage.setItem(STORAGE_NL, "1"); } catch { /* noop */ }
  };

  const submitNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) { setNlError("Please tick the consent box to continue."); return; }
    setNlStatus("loading");
    setNlError("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent }),
      });
      const json = await res.json();
      if (!res.ok) { setNlStatus("error"); setNlError(json.error || "Something went wrong."); return; }
      setNlStatus("success");
      setTimeout(dismissNewsletter, 3000);
    } catch {
      setNlStatus("error");
      setNlError("Network error — please try again.");
    }
  };

  if (!active) return null;
  if (SUPPRESSED_PATHS.some(p => pathname.startsWith(p))) return null;

  const bannerStyle: React.CSSProperties = {
    position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)",
    zIndex: 9999, width: "min(520px, calc(100vw - 32px))",
    background: "var(--surface, #1c1917)",
    border: "1px solid rgba(176,141,87,0.25)",
    borderRadius: 20,
    boxShadow: "0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(176,141,87,0.08)",
    padding: "22px 24px 20px",
    animation: "bmSlideUp 0.35s cubic-bezier(.22,1,.36,1) both",
  };

  return (
    <>
      <style>{`
        @keyframes bmSlideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(24px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes bmSpin { to { transform: rotate(360deg); } }
      `}</style>

      {/* ── SIGN-IN BANNER ── */}
      {active === "signin" && (
        <div role="dialog" aria-label="Sign in to Indiaspora" style={bannerStyle}>
          <button onClick={dismissSignin} aria-label="Dismiss" style={{
            position: "absolute", top: 14, right: 14,
            background: "none", border: "none", cursor: "pointer",
            color: "var(--text-3, rgba(200,185,165,0.5))", padding: 4, borderRadius: 6, lineHeight: 1,
          }}>
            <X size={16} />
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10, flexShrink: 0,
              background: "linear-gradient(135deg,#B08D57,#d4a853)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ fontSize: 20 }}>🪔</span>
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 800, fontSize: 15, color: "var(--text, #f5ede0)", fontFamily: "'Playfair Display',Georgia,serif" }}>
                Join the Swiss-Indian community
              </p>
              <p style={{ margin: 0, fontSize: 12, color: "var(--text-3, rgba(200,185,165,0.65))", marginTop: 2 }}>
                Sign in to access member benefits, events, and more
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <Link href="/login" onClick={dismissSignin} style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
              padding: "10px 16px", borderRadius: 12,
              background: "#B08D57", color: "#1A1410",
              fontWeight: 700, fontSize: 13, textDecoration: "none",
            }}>
              <LogIn size={14} /> Sign In
            </Link>
            <Link href="/join" onClick={dismissSignin} style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
              padding: "10px 16px", borderRadius: 12,
              border: "1px solid rgba(176,141,87,0.35)",
              background: "rgba(176,141,87,0.07)", color: "var(--text, #f5ede0)",
              fontWeight: 700, fontSize: 13, textDecoration: "none",
            }}>
              <UserPlus size={14} /> Create Account
            </Link>
          </div>

          <p style={{ margin: "12px 0 0", fontSize: 11, color: "var(--text-3, rgba(200,185,165,0.45))", textAlign: "center" }}>
            Free to join · 24,500+ Indians across Switzerland
          </p>
        </div>
      )}

      {/* ── NEWSLETTER BANNER ── */}
      {active === "newsletter" && (
        <div role="dialog" aria-label="Newsletter subscription" style={bannerStyle}>
          <button onClick={dismissNewsletter} aria-label="Dismiss" style={{
            position: "absolute", top: 14, right: 14,
            background: "none", border: "none", cursor: "pointer",
            color: "var(--text-3, rgba(200,185,165,0.5))", padding: 4, borderRadius: 6, lineHeight: 1,
          }}>
            <X size={16} />
          </button>

          {nlStatus === "success" ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "8px 0", textAlign: "center" }}>
              <CheckCircle2 size={36} style={{ color: "#10b981" }} />
              <p style={{ margin: 0, fontWeight: 700, fontSize: 15, color: "var(--text, #f5ede0)" }}>You&apos;re subscribed!</p>
              <p style={{ margin: 0, fontSize: 13, color: "var(--text-3, rgba(200,185,165,0.7))" }}>Weekly digest of Indian community events and news in Switzerland.</p>
            </div>
          ) : (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
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

              <form onSubmit={submitNewsletter}>
                <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                  <input
                    type="email" required placeholder="your@email.com"
                    value={email} onChange={e => setEmail(e.target.value)}
                    style={{
                      flex: 1, padding: "10px 14px", borderRadius: 10, fontSize: 13,
                      border: "1px solid rgba(176,141,87,0.25)",
                      background: "rgba(255,255,255,0.04)",
                      color: "var(--text, #f5ede0)", outline: "none",
                    }}
                  />
                  <button type="submit" disabled={nlStatus === "loading"} style={{
                    padding: "10px 20px", borderRadius: 10, border: "none", cursor: "pointer",
                    background: "#B08D57", color: "#1A1410",
                    fontWeight: 700, fontSize: 13, whiteSpace: "nowrap",
                    display: "flex", alignItems: "center", gap: 6,
                    opacity: nlStatus === "loading" ? 0.7 : 1,
                  }}>
                    {nlStatus === "loading" && <Loader2 size={14} style={{ animation: "bmSpin 1s linear infinite" }} />}
                    Subscribe
                  </button>
                </div>
                <label style={{ display: "flex", alignItems: "flex-start", gap: 8, cursor: "pointer" }}>
                  <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)}
                    style={{ marginTop: 2, accentColor: "#B08D57", flexShrink: 0 }} />
                  <span style={{ fontSize: 11, color: "var(--text-3, rgba(200,185,165,0.6))", lineHeight: 1.5 }}>
                    I agree to receive the weekly Indiaspora newsletter. I can unsubscribe at any time.
                  </span>
                </label>
                {nlError && <p style={{ margin: "8px 0 0", fontSize: 11, color: "#f87171" }}>{nlError}</p>}
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
