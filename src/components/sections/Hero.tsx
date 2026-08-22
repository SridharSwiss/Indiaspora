"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { STATS } from "@/lib/data";
import JoinModal from "@/components/JoinModal";
import StatNumber from "@/components/ui/StatNumber";

const FEATURED_WORDS = ["Community", "Culture", "Cuisine", "Connections", "Commerce"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [joinOpen, setJoinOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setWordIndex((p) => (p + 1) % FEATURED_WORDS.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "100svh", background: "#1A1410" }}
    >
      {/* Full-bleed background — rich mosaic evoking Swiss-Indian life */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0,
          background: `
            linear-gradient(160deg,
              #2C1F1A 0%,
              #1A1210 30%,
              #221810 55%,
              #2A1F18 75%,
              #181210 100%
            )
          `,
        }}
      />

      {/* Warm texture pattern */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0,
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(176,141,87,0.04) 0, rgba(176,141,87,0.04) 1px, transparent 0, transparent 50%),
            repeating-linear-gradient(-45deg, rgba(176,141,87,0.04) 0, rgba(176,141,87,0.04) 1px, transparent 0, transparent 50%)
          `,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle gold ambient glow — upper right */}
      <div
        aria-hidden
        style={{
          position: "absolute", top: "-10%", right: "-5%",
          width: "50%", height: "70%",
          background: "radial-gradient(ellipse, rgba(176,141,87,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      {/* Lower-left warm glow */}
      <div
        aria-hidden
        style={{
          position: "absolute", bottom: "0", left: "0",
          width: "40%", height: "50%",
          background: "radial-gradient(ellipse, rgba(160,97,74,0.10) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative chakra — center-right at large screens */}
      <div
        aria-hidden
        style={{
          position: "absolute", right: "8%", top: "50%",
          transform: "translateY(-50%)",
          width: "clamp(200px, 30vw, 420px)",
          aspectRatio: "1",
          opacity: 0.06,
          pointerEvents: "none",
        }}
      >
        <div style={{
          width: "100%", height: "100%",
          borderRadius: "50%",
          border: "1px solid rgba(176,141,87,1)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div className="animate-chakra" style={{
            width: "68%", height: "68%",
            borderRadius: "50%",
            border: "1px solid rgba(176,141,87,1)",
            position: "relative",
          }}>
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute", top: "50%", left: "50%",
                  width: 1, height: "48%",
                  background: "rgba(176,141,87,1)",
                  transformOrigin: "top center",
                  transform: `rotate(${i * 15}deg) translateX(-50%)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Content — left-aligned, vertically centered ── */}
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "clamp(100px, 14vw, 140px)",
          paddingBottom: "clamp(80px, 10vw, 120px)",
        }}
      >
        <div style={{ maxWidth: 680, animation: "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}>

          {/* Eyebrow */}
          <div
            style={{
              display: "flex", alignItems: "center", gap: 12, marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 40, height: 1,
                background: "var(--in)",
                display: "inline-block", flexShrink: 0,
              }}
              aria-hidden
            />
            <span
              style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "0.22em",
                textTransform: "uppercase", color: "var(--in)",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              Switzerland&apos;s Indian Community Hub
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: "-0.01em",
              color: "rgba(245,237,224,0.95)",
              marginBottom: 0,
            }}
          >
            Your Swiss Indian
          </h1>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 700,
              lineHeight: 1.06,
              letterSpacing: "-0.01em",
              fontStyle: "italic",
              marginBottom: 28,
              color: "rgba(245,237,224,0.95)",
            }}
          >
            <span
              key={wordIndex}
              style={{
                display: "inline-block",
                color: "var(--in-hi)",
                animation: "word-in 0.45s cubic-bezier(0.16,1,0.3,1) both",
              }}
            >
              {FEATURED_WORDS[wordIndex]}
            </span>
            {" "}Hub
          </h1>

          {/* Body */}
          <p
            style={{
              fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
              color: "rgba(220,205,185,0.8)",
              lineHeight: 1.8,
              maxWidth: 500,
              marginBottom: 40,
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontWeight: 400,
            }}
          >
            The definitive platform for Indians living in Switzerland — restaurants,
            associations, events, business networks, temples, and everything you need to thrive.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 60 }}>
            <button
              onClick={() => setJoinOpen(true)}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 28px",
                background: "var(--in)",
                color: "#1A1410",
                fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                border: "none", cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--in-hi)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--in)")}
            >
              Join the Community
              <ArrowRight style={{ width: 14, height: 14 }} />
            </button>
            <Link
              href="/events"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 28px",
                background: "transparent",
                color: "rgba(220,205,185,0.9)",
                fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                border: "1px solid rgba(176,141,87,0.45)",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(176,141,87,0.9)"; (e.currentTarget as HTMLElement).style.color = "rgba(245,237,224,1)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(176,141,87,0.45)"; (e.currentTarget as HTMLElement).style.color = "rgba(220,205,185,0.9)"; }}
            >
              Upcoming Events
            </Link>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, auto)",
              gap: "0",
              paddingTop: 28,
              borderTop: "1px solid rgba(176,141,87,0.2)",
              width: "fit-content",
            }}
          >
            {STATS.map((s, i) => (
              <div key={s.label} style={{ paddingRight: 36, paddingLeft: i === 0 ? 0 : 0 }}>
                <StatNumber
                  value={s.value}
                  style={{
                    display: "block",
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
                    fontWeight: 700,
                    color: "rgba(245,237,224,0.9)",
                    lineHeight: 1,
                    marginBottom: 5,
                  }}
                />
                <div
                  style={{
                    fontSize: 9, fontWeight: 700, letterSpacing: "0.14em",
                    textTransform: "uppercase", color: "rgba(176,141,87,0.7)",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#categories"
        aria-label="Scroll to explore"
        style={{
          position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          color: "rgba(176,141,87,0.6)",
          fontSize: 8, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase",
          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          animation: "fadeUp 1.2s 1.6s both",
          textDecoration: "none",
        }}
      >
        <span>Explore</span>
        <ChevronDown className="animate-bob" style={{ width: 16, height: 16 }} />
      </a>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:none; } }
        @keyframes word-in { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
        @media (max-width: 640px) {
          .hero-stats { grid-template-columns: repeat(2, auto) !important; gap: 24px !important; }
        }
      `}</style>

      <JoinModal open={joinOpen} onClose={() => setJoinOpen(false)} />
    </section>
  );
}
