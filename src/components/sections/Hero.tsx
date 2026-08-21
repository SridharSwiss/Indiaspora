"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { STATS } from "@/lib/data";

const HERO_WORDS = ["Community", "Culture", "Cuisine", "Connections", "Commerce"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWordIndex((p) => (p + 1) % HERO_WORDS.length), 2800);
    return () => clearInterval(t);
  }, []);

  const icons: Record<string, string> = {
    Users: "👥", Building2: "🏛️", MapPin: "📍", Briefcase: "💼",
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center"
      style={{ background: "var(--base)", padding: "120px 16px 80px" }}
    >
      {/* India tricolor top bar */}
      <div
        aria-hidden
        style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 3,
          background: "linear-gradient(90deg, #F97316 0% 33.3%, rgba(255,255,255,0.7) 33.3% 66.6%, #10B981 66.6% 100%)",
        }}
      />

      {/* Aurora mesh */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="aurora-orb aurora-1" />
        <div className="aurora-orb aurora-2" />
        <div className="aurora-orb aurora-3" />
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none pattern-grid"
        style={{
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto">

        {/* Badge */}
        <div
          role="note"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 14px", borderRadius: 999,
            fontSize: 12.5, fontWeight: 600,
            color: "var(--saffron)",
            background: "rgba(249,115,22,0.1)",
            border: "1px solid rgba(249,115,22,0.25)",
            marginBottom: 32,
            animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both",
          }}
        >
          {/* Mini Indian flag */}
          <span aria-hidden style={{ display: "flex", gap: 2, height: 10, overflow: "hidden", borderRadius: 2 }}>
            <span style={{ width: 5, background: "#F97316" }} />
            <span style={{ width: 5, background: "rgba(255,255,255,0.8)" }} />
            <span style={{ width: 5, background: "#10B981" }} />
          </span>
          25,000+ Indians across 26 Swiss Cantons
          {/* Mini Swiss cross */}
          <span aria-hidden style={{ position: "relative", width: 12, height: 12, borderRadius: 2, background: "#DC2626", flexShrink: 0, display: "inline-block" }}>
            <span style={{ position: "absolute", top: "22%", left: "39%", width: "22%", height: "56%", background: "#fff" }} />
            <span style={{ position: "absolute", top: "39%", left: "22%", width: "56%", height: "22%", background: "#fff" }} />
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(2.6rem, 8.5vw, 5.8rem)",
            fontWeight: 800,
            lineHeight: 1.04,
            letterSpacing: "-0.04em",
            textWrap: "balance" as React.CSSProperties["textWrap"],
            marginBottom: 24,
            animation: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both",
          }}
        >
          <span style={{ color: "var(--text)" }}>Your Swiss Indian</span>
          <br />
          <span
            key={wordIndex}
            className="gradient-text"
            style={{ display: "inline-block", animation: "word-in 0.45s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            {HERO_WORDS[wordIndex]}
          </span>
          <br />
          <span style={{ color: "var(--text)" }}>Hub</span>
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: "clamp(1rem, 2.2vw, 1.18rem)",
            color: "var(--text-2)",
            maxWidth: 580,
            margin: "0 auto 40px",
            lineHeight: 1.7,
            fontWeight: 400,
            animation: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s both",
          }}
        >
          The definitive platform for Indians living in Switzerland — restaurants, associations, events, business networks, temples, and everything you need to thrive.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex", gap: 12, justifyContent: "center",
            flexWrap: "wrap", marginBottom: 64,
            animation: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s both",
          }}
        >
          <Link href="/community" className="btn btn-primary" style={{ padding: "14px 28px", fontSize: 14.5 }}>
            Explore Community
            <ArrowRight style={{ width: 16, height: 16, transition: "transform 0.2s" }} />
          </Link>
          <Link href="/events" className="btn btn-outline" style={{ padding: "14px 24px", fontSize: 14.5 }}>
            Upcoming Events
          </Link>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
          style={{ animation: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.55s both" }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              style={{
                padding: "20px 14px",
                borderRadius: 18,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--border)",
                textAlign: "center",
                transition: "background 0.25s, border-color 0.25s, transform 0.3s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(249,115,22,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(249,115,22,0.2)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: "1.6rem", marginBottom: 2 }}>{icons[s.icon]}</div>
              <div
                className="gradient-text"
                style={{ fontSize: "1.7rem", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 4 }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: 11, color: "var(--text-3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", lineHeight: 1.4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#categories"
        aria-label="Scroll to explore"
        style={{
          position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          color: "var(--text-3)",
          fontSize: 10, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase",
        }}
      >
        <span>Explore</span>
        <ChevronDown className="animate-bob" style={{ width: 20, height: 20 }} />
      </a>
    </section>
  );
}
