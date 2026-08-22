"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Mail, Lock, Loader2, Eye, EyeOff } from "lucide-react";
const LockIcon = Lock;

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const isGated = !!searchParams.get("redirect") && searchParams.get("redirect") !== "/";
  const [mode, setMode] = useState<"login" | "magic">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const supabase = createClient();

  const handle = async () => {
    setError(""); setSuccess(""); setLoading(true);
    try {
      if (mode === "magic") {
        const { error } = await supabase.auth.signInWithOtp({
          email,
          options: { emailRedirectTo: `${location.origin}/api/auth/callback?next=${redirect}` },
        });
        if (error) throw error;
        setSuccess("Check your email — we sent a magic link!");
        return;
      }
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      router.push(redirect);
      router.refresh();
    } catch (e: unknown) {
      const msg = (e as { message?: string })?.message || String(e);
      console.error("Auth error:", e);
      if (msg.includes("fetch") || msg.includes("network") || msg.includes("Failed")) {
        setError("Cannot connect to authentication service. Please check that Supabase env vars are set in Vercel and redeploy.");
      } else {
        setError(msg || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "var(--base)", padding: 20,
    }}>
      <div style={{
        width: "100%", maxWidth: 420,
        background: "var(--surface)", borderRadius: 24,
        boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
        overflow: "hidden",
      }}>
        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg,#F97316,#DC2626)",
          padding: "36px 36px 32px", textAlign: "center",
        }}>
          <Link href="/" style={{ fontSize: 32, textDecoration: "none" }}>🪔</Link>
          <h1 style={{ margin: "12px 0 4px", color: "#fff", fontSize: 22, fontWeight: 800, fontFamily: "'Syne',system-ui,sans-serif" }}>
            {isGated ? "Members only" : mode === "login" ? "Welcome back" : "Magic link"}
          </h1>
          <p style={{ margin: 0, color: "rgba(255,255,255,0.8)", fontSize: 13 }}>
            {isGated ? "Sign in to access the full Indiaspora platform" : "Indiaspora · Switzerland's Indian Community Hub"}
          </p>
        </div>

        {/* Gated prompt */}
        {isGated && (
          <div style={{ margin: "20px 24px 0", padding: "12px 16px", borderRadius: 12, background: "rgba(249,115,22,0.07)", border: "1px solid rgba(249,115,22,0.2)", display: "flex", alignItems: "center", gap: 10 }}>
            <LockIcon size={14} style={{ color: "#F97316", flexShrink: 0 }} />
            <p style={{ margin: 0, fontSize: 13, color: "var(--text-2)", lineHeight: 1.5 }}>
              This page is available to Indiaspora members. Sign in or use a magic link to continue.
              Don&apos;t have an account? <Link href="/" style={{ color: "#F97316", fontWeight: 600, textDecoration: "none" }}>Join the community →</Link>
            </p>
          </div>
        )}

        <div style={{ padding: "32px 32px 28px" }}>
          {/* Mode switcher */}
          <div style={{ display: "flex", gap: 4, background: "var(--surface-2)", borderRadius: 12, padding: 4, marginBottom: 24 }}>
            {(["login", "magic"] as const).map(m => (
              <button
                key={m}
                onClick={() => { setMode(m); setError(""); setSuccess(""); }}
                style={{
                  flex: 1, padding: "8px 4px", borderRadius: 9, border: "none", cursor: "pointer",
                  fontSize: 12, fontWeight: 700, transition: "all 0.2s",
                  background: mode === m ? "var(--surface)" : "transparent",
                  color: mode === m ? "var(--text)" : "var(--text-3)",
                  boxShadow: mode === m ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                }}
              >
                {m === "login" ? "Sign In" : "Magic Link"}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {/* Email */}
            <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>Email</span>
              <div style={{ position: "relative" }}>
                <Mail size={15} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text-3)" }} />
                <input
                  type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  onKeyDown={e => e.key === "Enter" && handle()}
                  style={{
                    width: "100%", padding: "12px 14px 12px 40px", borderRadius: 12,
                    border: "1px solid var(--border-2)", background: "var(--surface-2)",
                    color: "var(--text)", fontSize: 14, outline: "none", boxSizing: "border-box",
                  }}
                />
              </div>
            </label>

            {/* Password (not for magic link) */}
            {mode !== "magic" && (
              <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>Password</span>
                <div style={{ position: "relative" }}>
                  <Lock size={15} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text-3)" }} />
                  <input
                    type={showPw ? "text" : "password"} value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    onKeyDown={e => e.key === "Enter" && handle()}
                    style={{
                      width: "100%", padding: "12px 40px 12px 40px", borderRadius: 12,
                      border: "1px solid var(--border-2)", background: "var(--surface-2)",
                      color: "var(--text)", fontSize: 14, outline: "none", boxSizing: "border-box",
                    }}
                  />
                  <button
                    type="button" onClick={() => setShowPw(v => !v)}
                    style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--text-3)" }}
                  >
                    {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </label>
            )}

            {error && (
              <div style={{ padding: "10px 14px", borderRadius: 10, background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.2)", fontSize: 13, color: "#DC2626" }}>
                {error}
              </div>
            )}
            {success && (
              <div style={{ padding: "10px 14px", borderRadius: 10, background: "rgba(5,150,105,0.08)", border: "1px solid rgba(5,150,105,0.2)", fontSize: 13, color: "#059669" }}>
                {success}
              </div>
            )}

            <button
              onClick={handle}
              disabled={loading}
              style={{
                padding: "13px", borderRadius: 12, border: "none", cursor: loading ? "default" : "pointer",
                background: loading ? "var(--surface-2)" : "linear-gradient(135deg,#F97316,#FB923C)",
                color: loading ? "var(--text-3)" : "#fff",
                fontSize: 15, fontWeight: 700,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              }}
            >
              {loading && <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />}
              {loading ? "Please wait…" : mode === "login" ? "Sign In" : "Send Magic Link"}
            </button>
          </div>
        </div>

        <div style={{ padding: "0 32px 28px", textAlign: "center" }}>
          <Link href="/" style={{ fontSize: 13, color: "var(--text-3)", textDecoration: "none" }}>
            ← Back to Indiaspora
          </Link>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform:rotate(360deg) } }`}</style>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--base)" }} />}>
      <LoginForm />
    </Suspense>
  );
}
