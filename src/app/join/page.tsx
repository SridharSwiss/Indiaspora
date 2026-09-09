"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Mail, Lock, User, Eye, EyeOff, Loader2, CheckCircle2 } from "lucide-react";

const SWISS_CITIES = ["Zurich", "Geneva", "Basel", "Bern", "Lausanne", "Lucerne", "St. Gallen", "Winterthur", "Zug", "Other"];

function JoinForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const [step, setStep] = useState<"account" | "profile" | "done">("account");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [city, setCity] = useState("");
  const [profession, setProfession] = useState("");
  const [newsletter, setNewsletter] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const supabase = createClient();

  const signUpWithGoogle = async () => {
    setError(""); setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: `${location.origin}/api/auth/callback?next=${redirect}` },
      });
      if (error) throw error;
    } catch (e: unknown) {
      setError((e as { message?: string })?.message || "Google sign-up failed");
      setLoading(false);
    }
  };

  const handleAccountStep = async () => {
    if (!fullName.trim()) { setError("Please enter your name."); return; }
    if (!email.trim()) { setError("Please enter your email."); return; }
    if (password.length < 8) { setError("Password must be at least 8 characters."); return; }
    setError(""); setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName },
          emailRedirectTo: `${location.origin}/api/auth/callback?next=/`,
        },
      });
      if (error) throw error;
      setStep("profile");
    } catch (e: unknown) {
      const msg = (e as { message?: string })?.message || String(e);
      setError(msg.includes("already") ? "This email is already registered. Try signing in." : msg);
    } finally {
      setLoading(false);
    }
  };

  const handleProfileStep = async () => {
    setError(""); setLoading(true);
    try {
      // Register in the members table
      await fetch("/api/members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ full_name: fullName, email, city, profession, newsletter }),
      });
      setStep("done");
    } catch {
      setError("Profile saved — check your email to confirm your account.");
      setStep("done");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 14px 12px 40px", borderRadius: 12,
    border: "1px solid var(--border-2)", background: "var(--surface-2)",
    color: "var(--text)", fontSize: 14, outline: "none", boxSizing: "border-box",
  };

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "var(--base)", padding: 20,
    }}>
      <div style={{
        width: "100%", maxWidth: 440,
        background: "var(--surface)", borderRadius: 24,
        boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
        overflow: "hidden",
      }}>
        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg,#B08D57,#d4a853)",
          padding: "36px 36px 28px", textAlign: "center",
        }}>
          <Link href="/" style={{ fontSize: 32, textDecoration: "none" }}>🪔</Link>
          <h1 style={{ margin: "12px 0 4px", color: "#1A1410", fontSize: 22, fontWeight: 800, fontFamily: "'Syne',system-ui,sans-serif" }}>
            Join Indiaspora
          </h1>
          <p style={{ margin: 0, color: "rgba(26,20,16,0.7)", fontSize: 13 }}>
            Switzerland&apos;s Swiss-Indian community hub · 24,500+ members
          </p>
        </div>

        <div style={{ padding: "28px 32px 24px" }}>

          {step === "account" && (
            <>
              {/* Google Sign-Up */}
              <button
                onClick={signUpWithGoogle}
                disabled={loading}
                style={{
                  width: "100%", padding: "12px 16px", borderRadius: 12, marginBottom: 20,
                  border: "1px solid var(--border-2)", background: "var(--surface-2)",
                  color: "var(--text)", fontSize: 14, fontWeight: 600, cursor: loading ? "default" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                  <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                  <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                  <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ flex: 1, height: 1, background: "var(--border-2)" }} />
                <span style={{ fontSize: 12, color: "var(--text-3)" }}>or sign up with email</span>
                <div style={{ flex: 1, height: 1, background: "var(--border-2)" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {/* Full name */}
                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>Full Name</span>
                  <div style={{ position: "relative" }}>
                    <User size={15} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text-3)" }} />
                    <input type="text" value={fullName} onChange={e => setFullName(e.target.value)}
                      placeholder="Your full name" style={inputStyle} />
                  </div>
                </label>

                {/* Email */}
                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>Email</span>
                  <div style={{ position: "relative" }}>
                    <Mail size={15} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text-3)" }} />
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                      placeholder="you@example.com" style={inputStyle} />
                  </div>
                </label>

                {/* Password */}
                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>Password</span>
                  <div style={{ position: "relative" }}>
                    <Lock size={15} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text-3)" }} />
                    <input type={showPw ? "text" : "password"} value={password}
                      onChange={e => setPassword(e.target.value)} placeholder="Min. 8 characters"
                      style={{ ...inputStyle, paddingRight: 40 }} />
                    <button type="button" onClick={() => setShowPw(v => !v)}
                      style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--text-3)" }}>
                      {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </label>

                {error && (
                  <div style={{ padding: "10px 14px", borderRadius: 10, background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.2)", fontSize: 13, color: "#DC2626" }}>
                    {error}
                  </div>
                )}

                <button onClick={handleAccountStep} disabled={loading} style={{
                  padding: "13px", borderRadius: 12, border: "none", cursor: loading ? "default" : "pointer",
                  background: loading ? "var(--surface-2)" : "linear-gradient(135deg,#B08D57,#d4a853)",
                  color: loading ? "var(--text-3)" : "#1A1410",
                  fontSize: 15, fontWeight: 700,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                }}>
                  {loading && <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />}
                  {loading ? "Creating account…" : "Create Account"}
                </button>
              </div>
            </>
          )}

          {step === "profile" && (
            <>
              <p style={{ margin: "0 0 20px", fontSize: 13, color: "var(--text-2)", textAlign: "center" }}>
                Almost there! Tell us a bit about yourself. <span style={{ color: "var(--text-3)" }}>(optional)</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {/* City */}
                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>City in Switzerland</span>
                  <select value={city} onChange={e => setCity(e.target.value)} style={{
                    padding: "12px 14px", borderRadius: 12, fontSize: 13,
                    border: "1px solid var(--border-2)", background: "var(--surface-2)",
                    color: city ? "var(--text)" : "var(--text-3)", outline: "none",
                  }}>
                    <option value="">Select your city…</option>
                    {SWISS_CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </label>

                {/* Profession */}
                <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>Profession</span>
                  <input type="text" value={profession} onChange={e => setProfession(e.target.value)}
                    placeholder="e.g. Software Engineer, Doctor, Student…"
                    style={{ ...inputStyle, paddingLeft: 14 }} />
                </label>

                {/* Newsletter */}
                <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer" }}>
                  <input type="checkbox" checked={newsletter} onChange={e => setNewsletter(e.target.checked)}
                    style={{ marginTop: 3, accentColor: "#B08D57", flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.5 }}>
                    Subscribe to the weekly Indiaspora newsletter — events, community news and more across Switzerland.
                  </span>
                </label>

                {error && (
                  <div style={{ padding: "10px 14px", borderRadius: 10, background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.2)", fontSize: 13, color: "#DC2626" }}>
                    {error}
                  </div>
                )}

                <button onClick={handleProfileStep} disabled={loading} style={{
                  padding: "13px", borderRadius: 12, border: "none", cursor: loading ? "default" : "pointer",
                  background: loading ? "var(--surface-2)" : "linear-gradient(135deg,#B08D57,#d4a853)",
                  color: loading ? "var(--text-3)" : "#1A1410",
                  fontSize: 15, fontWeight: 700,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                }}>
                  {loading && <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />}
                  {loading ? "Saving…" : "Complete Sign-Up"}
                </button>
                <button onClick={() => setStep("done")} style={{
                  padding: "10px", borderRadius: 12, border: "none", cursor: "pointer",
                  background: "none", color: "var(--text-3)", fontSize: 13,
                }}>
                  Skip for now
                </button>
              </div>
            </>
          )}

          {step === "done" && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "16px 0", textAlign: "center" }}>
              <CheckCircle2 size={48} style={{ color: "#B08D57" }} />
              <div>
                <p style={{ margin: "0 0 6px", fontWeight: 800, fontSize: 18, color: "var(--text)", fontFamily: "'Playfair Display',Georgia,serif" }}>
                  Welcome to Indiaspora!
                </p>
                <p style={{ margin: 0, fontSize: 13, color: "var(--text-3)", lineHeight: 1.6 }}>
                  Check your inbox — we&apos;ve sent a confirmation link to <strong>{email}</strong>.
                  Click it to activate your account.
                </p>
              </div>
              <Link href="/" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "12px 28px", borderRadius: 12,
                background: "linear-gradient(135deg,#B08D57,#d4a853)",
                color: "#1A1410", fontWeight: 700, fontSize: 14, textDecoration: "none",
              }}>
                Explore Indiaspora →
              </Link>
            </div>
          )}

        </div>

        {step === "account" && (
          <div style={{ padding: "0 32px 28px", textAlign: "center" }}>
            <p style={{ margin: 0, fontSize: 13, color: "var(--text-3)" }}>
              Already have an account?{" "}
              <Link href="/login" style={{ color: "#B08D57", fontWeight: 700, textDecoration: "none" }}>
                Sign in
              </Link>
            </p>
          </div>
        )}
      </div>
      <style>{`@keyframes spin { to { transform:rotate(360deg) } }`}</style>
    </div>
  );
}

export default function JoinPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--base)" }} />}>
      <JoinForm />
    </Suspense>
  );
}
