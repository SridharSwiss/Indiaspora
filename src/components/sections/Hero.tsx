"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { STATS } from "@/lib/data";
import JoinModal from "@/components/JoinModal";
import StatNumber from "@/components/ui/StatNumber";

const FEATURED_WORDS = ["Community", "Culture", "Cuisine", "Connections", "Commerce"];

const AVATARS = ["🇮🇳", "🙂", "👨‍💼", "👩‍🎓", "🧑‍🍳"];

const FLOAT_CARDS = [
  { emoji: "📍", label: "5 Cities", sub: "covered across Switzerland", rotate: "-4deg", top: "18%", right: "-6%" },
  { emoji: "🤝", label: "150+ Groups", sub: "community associations", rotate: "3deg", bottom: "28%", right: "-8%" },
];

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
      style={{ minHeight: "100svh", background: "#0E0C09" }}
    >
      {/* Full-bleed background — deep obsidian */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0,
          background: `
            linear-gradient(160deg,
              #161008 0%,
              #0E0C09 30%,
              #120E08 55%,
              #181210 75%,
              #0E0C09 100%
            )
          `,
        }}
      />

      {/* Subtle woven texture */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0,
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(201,169,110,0.03) 0, rgba(201,169,110,0.03) 1px, transparent 0, transparent 50%),
            repeating-linear-gradient(-45deg, rgba(201,169,110,0.03) 0, rgba(201,169,110,0.03) 1px, transparent 0, transparent 50%)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Organic blob — Bloom-style, upper right */}
      <svg
        aria-hidden
        viewBox="0 0 900 700"
        style={{
          position: "absolute", top: "-5%", right: "-8%",
          width: "clamp(480px, 58vw, 820px)",
          height: "auto",
          pointerEvents: "none",
          opacity: 1,
        }}
      >
        <defs>
          <radialGradient id="blob-g" cx="55%" cy="45%" r="55%">
            <stop offset="0%"   stopColor="rgba(201,169,110,0.13)" />
            <stop offset="50%"  stopColor="rgba(176,128,112,0.07)" />
            <stop offset="100%" stopColor="rgba(14,12,9,0)" />
          </radialGradient>
          <filter id="blob-blur">
            <feGaussianBlur stdDeviation="28" />
          </filter>
        </defs>
        <path
          d="M480,60 C620,30 820,120 800,300 C780,480 620,580 440,560
             C260,540 80,440 70,270 C60,100 200,40 340,50 C380,52 430,65 480,60Z"
          fill="url(#blob-g)"
          filter="url(#blob-blur)"
        />
        {/* Second, subtler blob */}
        <path
          d="M500,90 C630,65 790,160 770,330 C750,500 590,590 410,565
             C230,540 90,425 100,260 C110,95 230,50 370,60 C420,63 460,100 500,90Z"
          fill="rgba(201,169,110,0.05)"
          filter="url(#blob-blur)"
        />
      </svg>

      {/* Copper-rose glow — lower left */}
      <div
        aria-hidden
        style={{
          position: "absolute", bottom: "0", left: "0",
          width: "45%", height: "55%",
          background: "radial-gradient(ellipse, rgba(176,128,112,0.12) 0%, rgba(155,107,90,0.03) 50%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(50px)",
        }}
      />

      {/* ── Content — two-column on large screens ── */}
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          minHeight: "100svh",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          gap: "clamp(32px, 5vw, 80px)",
          paddingTop: "clamp(100px, 14vw, 140px)",
          paddingBottom: "clamp(80px, 10vw, 120px)",
        }}
      >
        {/* Left: text content */}
        <div style={{ maxWidth: 680, animation: "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}>

          {/* Eyebrow — live pill */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              padding: "6px 16px", borderRadius: 999,
              background: "rgba(201,169,110,0.10)",
              border: "1px solid rgba(201,169,110,0.28)",
              fontSize: 11, fontWeight: 700, color: "#CEB07A",
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              letterSpacing: "0.08em",
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#70BC92",
                boxShadow: "0 0 0 3px rgba(90,158,120,0.25)",
                animation: "pulse-dot 2s ease-in-out infinite",
                flexShrink: 0,
              }} aria-hidden />
              30,000+ Indians across Switzerland
            </span>
          </div>

          {/* Headline — larger, Bloom editorial scale */}
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(3.2rem, 8vw, 6.2rem)",
              fontWeight: 700,
              lineHeight: 0.97,
              letterSpacing: "-0.02em",
              color: "rgba(240,235,224,0.95)",
              marginBottom: 0,
            }}
          >
            Your Swiss Indian
          </h1>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(3.2rem, 8vw, 6.2rem)",
              fontWeight: 700,
              lineHeight: 0.97,
              letterSpacing: "-0.02em",
              fontStyle: "italic",
              marginBottom: 32,
              color: "rgba(240,235,224,0.95)",
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
              color: "rgba(154,142,124,0.9)",
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

          {/* CTAs — pill-shaped */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
            <button
              onClick={() => setJoinOpen(true)}
              style={{
                display: "inline-flex", alignItems: "center", gap: 9,
                padding: "15px 32px", borderRadius: 999,
                background: "var(--in)",
                color: "#1A1410",
                fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                border: "none", cursor: "pointer",
                transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 4px 28px rgba(201,169,110,0.30)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--in-hi)";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 8px 36px rgba(201,169,110,0.45)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--in)";
                el.style.transform = "none";
                el.style.boxShadow = "0 4px 28px rgba(201,169,110,0.30)";
              }}
            >
              Join the Community
              <ArrowRight style={{ width: 14, height: 14 }} />
            </button>
            <Link
              href="/events"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 30px", borderRadius: 999,
                background: "rgba(201,169,110,0.07)",
                color: "rgba(206,176,122,0.90)",
                fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                border: "1px solid rgba(201,169,110,0.28)",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s, background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(206,176,122,0.60)";
                el.style.color = "rgba(240,235,224,1)";
                el.style.background = "rgba(201,169,110,0.14)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201,169,110,0.28)";
                el.style.color = "rgba(206,176,122,0.90)";
                el.style.background = "rgba(201,169,110,0.07)";
                el.style.transform = "none";
              }}
            >
              Upcoming Events
            </Link>
          </div>

          {/* Avatar stack + social proof — Bloom pattern */}
          <div style={{
            display: "flex", alignItems: "center", gap: 14, marginBottom: 48,
            animation: "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s both",
          }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {AVATARS.map((av, i) => (
                <div key={i} style={{
                  width: 34, height: 34, borderRadius: "50%",
                  background: "rgba(201,169,110,0.12)",
                  border: "2px solid rgba(14,12,9,0.9)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, marginLeft: i === 0 ? 0 : -10,
                  boxShadow: "0 0 0 1px rgba(201,169,110,0.18)",
                  zIndex: AVATARS.length - i,
                  position: "relative",
                }}>
                  {av}
                </div>
              ))}
            </div>
            <div>
              <div style={{
                fontSize: 13, fontWeight: 700, color: "rgba(240,235,224,0.90)",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                lineHeight: 1.3,
              }}>
                ~24,500 Indians in Switzerland
              </div>
              <div style={{
                fontSize: 11, color: "rgba(154,142,124,0.75)",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              }}>
                Across 26 cantons — join your community
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, auto)",
              gap: "0",
              paddingTop: 28,
              borderTop: "1px solid rgba(201,169,110,0.14)",
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
                    textTransform: "uppercase", color: "rgba(201,169,110,0.65)",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: community photo with floating stat cards */}
        <div
          className="hero-img-wrap"
          style={{
            animation: "slideInRight 1.1s cubic-bezier(0.16,1,0.3,1) 0.35s both",
            alignSelf: "center",
            flexShrink: 0,
            position: "relative",
          }}
        >
          {/* Floating stat cards — Bloom pattern */}
          {FLOAT_CARDS.map((fc) => (
            <div
              key={fc.label}
              aria-hidden
              style={{
                position: "absolute",
                top: fc.top, bottom: fc.bottom,
                right: fc.right,
                transform: `rotate(${fc.rotate})`,
                background: "rgba(22,19,16,0.92)",
                border: "1px solid rgba(201,169,110,0.28)",
                borderRadius: 20,
                padding: "14px 18px",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                display: "flex", alignItems: "center", gap: 12,
                boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,169,110,0.10)",
                zIndex: 10,
                animation: "float-card 4s ease-in-out infinite",
                animationDelay: fc.top ? "0s" : "2s",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontSize: 22 }}>{fc.emoji}</span>
              <div>
                <div style={{
                  fontSize: 13, fontWeight: 800, color: "rgba(240,235,224,0.95)",
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  lineHeight: 1.2,
                }}>
                  {fc.label}
                </div>
                <div style={{
                  fontSize: 10, color: "rgba(201,169,110,0.70)",
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                }}>
                  {fc.sub}
                </div>
              </div>
            </div>
          ))}

          {/* Outer glow ring */}
          <div style={{
            width: "clamp(320px, 32vw, 540px)",
            aspectRatio: "1",
            borderRadius: "50%",
            padding: "5px",
            background: "linear-gradient(135deg, rgba(201,169,110,0.65) 0%, rgba(206,176,122,0.20) 50%, rgba(176,128,112,0.50) 100%)",
            boxShadow: "0 0 80px rgba(201,169,110,0.18), 0 0 200px rgba(201,169,110,0.07)",
            position: "relative",
          }}>
            {/* Inner circle clipping frame */}
            <div style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid rgba(201,169,110,0.22)",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hub-community.jpg"
                alt="Swiss Indian community gathering"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
            {/* Subtle inner vignette to blend edges */}
            <div style={{
              position: "absolute",
              inset: 5,
              borderRadius: "50%",
              boxShadow: "inset 0 0 60px rgba(6,9,15,0.55)",
              pointerEvents: "none",
            }} />
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
          color: "rgba(201,169,110,0.55)",
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
        @keyframes word-in { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:none; } }
        @keyframes slideInRight { from { opacity:0; transform:translateX(80px) scale(0.92); } to { opacity:1; transform:translateX(0) scale(1); } }
        @keyframes pulse-dot { 0%,100% { box-shadow: 0 0 0 3px rgba(52,211,153,0.25); } 50% { box-shadow: 0 0 0 6px rgba(52,211,153,0.10); } }
        @keyframes float-card {
          0%,100% { transform: rotate(var(--fc-rot, -4deg)) translateY(0px); }
          50%      { transform: rotate(var(--fc-rot, -4deg)) translateY(-8px); }
        }
        @media (max-width: 900px) {
          .hero-img-wrap { display: none !important; }
          .relative.max-w-7xl { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .hero-stats { grid-template-columns: repeat(2, auto) !important; gap: 24px !important; }
        }
      `}</style>

      <JoinModal open={joinOpen} onClose={() => setJoinOpen(false)} />
    </section>
  );
}
