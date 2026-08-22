"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Users, Building2, MapPin, Briefcase } from "lucide-react";
import { STATS } from "@/lib/data";
import JoinModal from "@/components/JoinModal";

const HERO_WORDS = ["Community", "Culture", "Cuisine", "Connections", "Commerce"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [joinOpen, setJoinOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setWordIndex((p) => (p + 1) % HERO_WORDS.length), 2800);
    return () => clearInterval(t);
  }, []);

  const ICON_MAP: Record<string, React.ReactNode> = {
    Users: <Users style={{ width: 22, height: 22 }} className="aurora-icon" />,
    Building2: <Building2 style={{ width: 22, height: 22 }} className="aurora-icon" />,
    MapPin: <MapPin style={{ width: 22, height: 22 }} className="aurora-icon" />,
    Briefcase: <Briefcase style={{ width: 22, height: 22 }} className="aurora-icon" />,
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center"
      style={{ background: "var(--base)", padding: "130px 20px 80px" }}
    >
      {/* Aurora animated banner at top */}
      <div
        aria-hidden
        className="aurora-banner"
        style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3 }}
      />

      {/* Aurora glow orbs — vivid cyan, violet, magenta */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="aurora-orb aurora-1" />
        <div className="aurora-orb aurora-2" />
        <div className="aurora-orb aurora-3" />
        <div className="aurora-orb aurora-4" />
      </div>

      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none pattern-grid"
        style={{
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)",
          opacity: 0.35,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto">

        {/* Badge */}
        <div
          role="note"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "5px 14px", borderRadius: 999,
            fontSize: 12, fontWeight: 600,
            color: "var(--sf-hi)",
            background: "var(--sf-bg)",
            border: "1px solid rgba(139,92,246,0.25)",
            marginBottom: 28,
            animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both",
            backdropFilter: "blur(10px)",
          }}
        >
          <span aria-hidden style={{
            width: 6, height: 6, borderRadius: "50%",
            background: "var(--aurora-grad)",
            animation: "pulse-dot 2s ease-in-out infinite",
            flexShrink: 0,
          }} />
          Switzerland&apos;s Indian Community Hub
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Syne', system-ui, sans-serif",
            fontSize: "clamp(2.8rem, 9vw, 6.2rem)",
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            textWrap: "balance" as React.CSSProperties["textWrap"],
            marginBottom: 24,
            color: "var(--text)",
            animation: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both",
          }}
        >
          <span>Your Swiss Indian</span>
          <br />
          <span
            key={wordIndex}
            className="gradient-text"
            style={{ display: "inline-block", animation: "word-in 0.4s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            {HERO_WORDS[wordIndex]}
          </span>
          <br />
          <span>Hub</span>
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "var(--text-2)",
            maxWidth: 560, margin: "0 auto 40px",
            lineHeight: 1.75, fontWeight: 400,
            animation: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s both",
          }}
        >
          The definitive platform for Indians living in Switzerland — restaurants, associations,
          events, business networks, temples, and everything you need to thrive.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex", gap: 10, justifyContent: "center",
            flexWrap: "wrap", marginBottom: 60,
            animation: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s both",
          }}
        >
          <button
            onClick={() => setJoinOpen(true)}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 26px", borderRadius: 999,
              fontSize: 14, fontWeight: 700, color: "#fff",
              background: "var(--aurora-grad)",
              boxShadow: "0 4px 24px var(--sf-glow), 0 0 40px rgba(6,182,212,0.15)",
              transition: "opacity 0.15s, transform 0.2s, box-shadow 0.2s",
              border: "none", cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.92";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 36px var(--sf-glow), 0 0 60px rgba(6,182,212,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px var(--sf-glow), 0 0 40px rgba(6,182,212,0.15)";
            }}
          >
            Join the Community
            <ArrowRight style={{ width: 16, height: 16 }} />
          </button>
          <Link
            href="/events"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 24px", borderRadius: 999,
              fontSize: 14, fontWeight: 700,
              color: "var(--text)",
              background: "var(--glass-bg)",
              border: "1px solid var(--border-2)",
              backdropFilter: "blur(16px)",
              transition: "background 0.15s, transform 0.2s, border-color 0.15s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--surface-2)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hi)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--glass-bg)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border-2)";
            }}
          >
            Upcoming Events
          </Link>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
          style={{ animation: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.55s both" }}
        >
          {STATS.map((s, i) => {
            const iconColors = ["#22D3EE", "#A78BFA", "#F472B6", "#34D399"];
            return (
              <div
                key={s.label}
                style={{
                  padding: "18px 14px",
                  borderRadius: 16,
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                  backdropFilter: "blur(16px)",
                  textAlign: "center",
                  transition: "background 0.25s, border-color 0.25s, transform 0.3s, box-shadow 0.3s",
                  position: "relative", overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--sf-bg)";
                  el.style.borderColor = "var(--border-hi)";
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = "0 8px 32px var(--sf-glow)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--glass-bg)";
                  el.style.borderColor = "var(--glass-border)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <div style={{ marginBottom: 4, color: iconColors[i % 4] }}>
                  {ICON_MAP[s.icon]}
                </div>
                <div
                  className="gradient-text"
                  style={{
                    fontFamily: "'Syne', system-ui, sans-serif",
                    fontSize: "1.65rem", fontWeight: 800,
                    letterSpacing: "-0.04em", marginBottom: 3,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: 10.5, color: "var(--text-3)", fontWeight: 600,
                              textTransform: "uppercase", letterSpacing: "0.06em", lineHeight: 1.4 }}>
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#categories"
        aria-label="Scroll to explore"
        style={{
          position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 5,
          color: "var(--text-3)",
          fontSize: 9.5, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase",
          animation: "fadeUp 1.2s 1.4s both",
        }}
      >
        <span>Explore</span>
        <ChevronDown className="animate-bob" style={{ width: 20, height: 20 }} />
      </a>

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:none; } }
        @keyframes word-in { from { opacity:0; filter:blur(4px); transform:translateY(10px); } to { opacity:1; filter:none; transform:none; } }
        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.75)} }
        .aurora-icon { color: currentColor; }
      `}</style>

      <JoinModal open={joinOpen} onClose={() => setJoinOpen(false)} />
    </section>
  );
}
