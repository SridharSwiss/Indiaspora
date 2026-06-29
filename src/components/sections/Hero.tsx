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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Ambient glow — subtle, no animation */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute rounded-full"
          style={{ width: 700, height: 700, top: "-20%", left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)" }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: 400, height: 400, bottom: "10%", right: "5%", background: "radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)" }}
        />
        {/* Fine grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">

        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-[13px] font-medium" style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", color: "#a5b4fc" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Switzerland&apos;s #1 Indian Community Platform
        </div>

        {/* Main headline */}
        <h1 className="font-bold leading-[1.05] tracking-tight mb-6" style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}>
          <span className="text-white">Your Swiss Indian</span>
          <br />
          <span
            key={wordIndex}
            className="gradient-text"
            style={{ animation: "fadeUp 0.45s ease-out forwards", display: "inline-block" }}
          >
            {HERO_WORDS[wordIndex]}
          </span>
          <br />
          <span style={{ color: "#94a3b8", fontWeight: 500, fontSize: "0.62em", letterSpacing: "-0.01em" }}>
            Hub
          </span>
        </h1>

        {/* Sub-copy */}
        <p className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "#64748b" }}>
          The definitive platform for 30,000+ Indians living in Switzerland — restaurants, associations, events, careers, temples, and everything in between.
        </p>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20">
          <Link href="/community" className="btn btn-primary" style={{ padding: "13px 28px", fontSize: "15px" }}>
            Explore the Community
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/events" className="btn btn-outline" style={{ padding: "13px 24px", fontSize: "15px" }}>
            Upcoming Events
          </Link>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-5 text-center"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div className="text-xl mb-1">{icons[s.icon]}</div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight mb-0.5" style={{ color: "#f1f5f9" }}>
                {s.value}
              </div>
              <div className="text-[11px] uppercase tracking-wide font-medium" style={{ color: "#475569" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#categories"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-colors"
        style={{ color: "#334155" }}
      >
        <span className="text-[10px] uppercase tracking-widest">Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
