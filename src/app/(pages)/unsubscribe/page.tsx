"use client";

import { useState } from "react";
import { Mail, CheckCircle2, AlertCircle } from "lucide-react";

export default function UnsubscribePage() {
  const [email, setEmail]   = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "notfound">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res  = await fetch("/api/newsletter/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      if (!res.ok) { setStatus("error"); return; }
      setStatus(json.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 16px" }}>
      <div style={{
        width: "100%", maxWidth: 420,
        background: "var(--surface)", border: "1px solid var(--border)",
        borderRadius: 20, padding: "40px 36px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
      }}>
        {status === "success" ? (
          <div style={{ textAlign: "center" }}>
            <CheckCircle2 size={44} style={{ color: "#10b981", margin: "0 auto 16px" }} />
            <h1 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 800, color: "var(--text)", fontFamily: "'Playfair Display',Georgia,serif" }}>
              You&apos;re unsubscribed
            </h1>
            <p style={{ margin: 0, fontSize: 13, color: "var(--text-3)", lineHeight: 1.6 }}>
              {email} has been removed from the Indiaspora weekly digest. You won&apos;t receive any further emails.
            </p>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(176,141,87,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Mail size={18} style={{ color: "#B08D57" }} />
              </div>
              <div>
                <h1 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: "var(--text)", fontFamily: "'Playfair Display',Georgia,serif" }}>Unsubscribe</h1>
                <p style={{ margin: 0, fontSize: 12, color: "var(--text-3)", marginTop: 2 }}>Remove your email from our weekly newsletter</p>
              </div>
            </div>

            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <input
                type="email" required
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  padding: "11px 14px", borderRadius: 10, fontSize: 13,
                  border: "1px solid var(--border-2)",
                  background: "var(--surface-2)", color: "var(--text)", outline: "none",
                }}
              />
              {status === "error" && (
                <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: "#f87171" }}>
                  <AlertCircle size={13} /> Something went wrong — please try again.
                </div>
              )}
              <button type="submit" disabled={status === "loading"} style={{
                padding: "11px", borderRadius: 10, border: "1px solid var(--border-2)",
                background: "var(--surface-2)", color: "var(--text-2)",
                fontWeight: 600, fontSize: 13, cursor: "pointer",
                opacity: status === "loading" ? 0.6 : 1,
              }}>
                {status === "loading" ? "Processing…" : "Unsubscribe"}
              </button>
            </form>

            <p style={{ margin: "20px 0 0", fontSize: 11, color: "var(--text-3)", lineHeight: 1.6, textAlign: "center" }}>
              Changed your mind? You can always re-subscribe from our homepage.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
