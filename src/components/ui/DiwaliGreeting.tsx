"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Share2, Download, X } from "lucide-react";

// Diwali 2026 falls on Sunday 8 November. The full-screen splash covers up to Sunday night; this small card carries the wishes through the festival days that follow.
const SHOW_FROM = new Date("2026-11-09T00:00:00+01:00").getTime();
const SHOW_UNTIL = new Date("2026-11-12T00:00:00+01:00").getTime();
const KEY = "diwali2026_greeting_closed";
const HIDDEN_PATHS = ["/login", "/join", "/signup", "/reset-password", "/admin"];
const SHARE_TEXT = "Shubh Deepavali! Happy Diwali from the Swiss Indian community. 🪔";

export default function DiwaliGreeting() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const now = Date.now();
    if (now < SHOW_FROM || now >= SHOW_UNTIL) return;
    try { if (sessionStorage.getItem(KEY)) return; } catch { /* ignore */ }
    const show = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(show);
  }, []);

  // Auto-fold after a while so it never nags.
  useEffect(() => {
    if (!open) return;
    const hide = setTimeout(() => setOpen(false), 30000);
    return () => clearTimeout(hide);
  }, [open]);

  if (!open || HIDDEN_PATHS.some((p) => pathname?.startsWith(p))) return null;

  const close = () => {
    setOpen(false);
    try { sessionStorage.setItem(KEY, "1"); } catch { /* ignore */ }
  };

  async function share() {
    const url = "https://indiaspora.ch";
    try {
      if (navigator.share) { await navigator.share({ title: "Shubh Deepavali", text: SHARE_TEXT, url }); return; }
      await navigator.clipboard.writeText(`${SHARE_TEXT} ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch { /* user cancelled */ }
  }

  return (
    <aside
      role="status"
      aria-label="Diwali greeting"
      className="diwali-greeting"
      style={{
        position: "fixed", top: 76, right: 16, zIndex: 60,
        width: "min(340px, calc(100vw - 32px))",
        borderRadius: 18, overflow: "hidden",
        background: "#141009", color: "#F6EEDD",
        border: "1px solid rgba(206,176,122,0.35)",
        boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
      }}
    >
      <div style={{ position: "relative", height: 110 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/events/diwali.webp" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }} />
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(20,16,9,0.15), rgba(20,16,9,0.95))" }} />
        <button
          type="button" onClick={close} aria-label="Close greeting"
          style={{ position: "absolute", top: 8, right: 8, width: 28, height: 28, borderRadius: 999, border: "none", cursor: "pointer", background: "rgba(0,0,0,0.5)", color: "#F6EEDD", display: "grid", placeItems: "center" }}
        >
          <X size={15} />
        </button>
        <div style={{ position: "absolute", left: 16, bottom: 8, fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 600, fontSize: 26, color: "#E3C58B", lineHeight: 1.1 }}>
          Shubh Deepavali
        </div>
      </div>
      <div style={{ padding: "12px 16px 16px" }}>
        <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Happy Diwali · Frohe Diwali · Joyeuse Diwali</div>
        <p style={{ fontSize: 13, lineHeight: 1.55, color: "rgba(246,238,221,0.86)", margin: "0 0 12px" }}>
          May the lights of Diwali bring warmth to your home, sweetness to your table and fresh beginnings to your year. From the Indiaspora community to you and your family.
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button type="button" onClick={share} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 12px", borderRadius: 999, border: "none", cursor: "pointer", background: "#CEB07A", color: "#1A1410", fontSize: 12, fontWeight: 700 }}>
            <Share2 size={14} /> {copied ? "Link copied" : "Share the wishes"}
          </button>
          <a href="/images/diwali/diwali-2026-square.jpg" download style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 12px", borderRadius: 999, border: "1px solid rgba(206,176,122,0.5)", color: "#E3C58B", fontSize: 12, fontWeight: 600, textDecoration: "none" }}>
            <Download size={14} /> Get the card
          </a>
        </div>
      </div>
      <style>{`
        .diwali-greeting { animation: dg-in .5s cubic-bezier(.16,1,.3,1) both; }
        @keyframes dg-in { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) { .diwali-greeting { animation: none; } }
      `}</style>
    </aside>
  );
}
