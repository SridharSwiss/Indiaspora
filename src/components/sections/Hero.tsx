"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Search, MapPin } from "lucide-react";
import { STATS } from "@/lib/data";

const HERO_WORDS = ["Community", "Culture", "Cuisine", "Connections", "Commerce"];

/** Ashoka Chakra SVG — the 24-spoked wheel from the Indian flag */
function AshokaChakra({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} style={style} aria-hidden>
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="50" r="5" fill="currentColor" />
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1="50" y1="50" x2="50" y2="6"
          stroke="currentColor" strokeWidth="1.4"
          transform={`rotate(${i * 15} 50 50)`}
        />
      ))}
    </svg>
  );
}

/** Swiss cross */
function SwissCross({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} style={style} aria-hidden>
      <rect width="100" height="100" rx="12" fill="currentColor" opacity="0.15" />
      <rect x="40" y="15" width="20" height="70" fill="currentColor" />
      <rect x="15" y="40" width="70" height="20" fill="currentColor" />
    </svg>
  );
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    const iv = setInterval(() => setWordIndex((p) => (p + 1) % HERO_WORDS.length), 2800);
    return () => { clearTimeout(t); clearInterval(iv); };
  }, []);

  const fade = (delay: number) =>
    `transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} [transition-delay:${delay}ms]`;

  return (
    <section
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--base)" }}
      aria-label="Hero"
    >
      {/* ─ Ambient background ─ */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Saffron orb top-left */}
        <div
          className="absolute top-1/4 left-1/5 w-56 sm:w-96 h-56 sm:h-96 rounded-full blur-[100px]"
          style={{ background: "rgba(255,153,51,0.13)", animation: "float 9s ease-in-out infinite" }}
        />
        {/* Green orb bottom-right */}
        <div
          className="absolute bottom-1/4 right-1/5 w-48 sm:w-80 h-48 sm:h-80 rounded-full blur-[100px]"
          style={{ background: "rgba(19,136,8,0.08)", animation: "float 12s ease-in-out infinite", animationDelay: "3s" }}
        />
        {/* Swiss red pinprick top-right */}
        <div
          className="absolute top-16 right-16 sm:top-24 sm:right-24 w-24 sm:w-40 h-24 sm:h-40 rounded-full blur-[60px]"
          style={{ background: "rgba(213,43,30,0.07)", animation: "float 15s ease-in-out infinite", animationDelay: "6s" }}
        />
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-100" />
      </div>

      {/* ─ Decorative: Ashoka Chakra top-right ─ */}
      <div
        className="absolute top-12 right-4 sm:top-16 sm:right-12 w-28 sm:w-44 h-28 sm:h-44 opacity-[0.06] pointer-events-none"
        style={{ color: "#003580", animation: "chakra-spin 30s linear infinite" }}
        aria-hidden
      >
        <AshokaChakra />
      </div>

      {/* ─ Decorative: Swiss cross bottom-left ─ */}
      <div
        className="absolute bottom-16 left-4 sm:bottom-20 sm:left-12 w-14 sm:w-20 h-14 sm:h-20 opacity-[0.08] pointer-events-none"
        style={{ color: "var(--swiss-red)" }}
        aria-hidden
      >
        <SwissCross />
      </div>

      {/* ─ Tricolor stripe — top of hero ─ */}
      <div className="absolute top-0 left-0 right-0 h-[3px] tricolor-bar" aria-hidden />

      {/* ─ Content ─ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">

        {/* Pill badge */}
        <div className={`inline-flex items-center gap-2.5 glass px-4 py-2 rounded-full text-sm mb-8 border border-[var(--saffron)]/20 ${fade(0)}`}>
          {/* Mini Indian flag tricolor dot */}
          <span className="flex gap-px h-2.5 overflow-hidden rounded-sm" aria-hidden>
            <span className="w-1.5 bg-[var(--saffron)]" />
            <span className="w-1.5 bg-white" />
            <span className="w-1.5 bg-[var(--india-green)]" />
          </span>
          <span className="text-[var(--saffron)] font-medium">30,000+ Indians across 26 Swiss Cantons</span>
          {/* Mini Swiss cross */}
          <span className="relative w-3.5 h-3.5" aria-hidden>
            <span className="absolute inset-0 rounded-sm" style={{ background: "var(--swiss-red)" }} />
            <span className="absolute top-[20%] left-[40%] w-[20%] h-[60%] bg-white" />
            <span className="absolute top-[40%] left-[20%] w-[60%] h-[20%] bg-white" />
          </span>
        </div>

        {/* Headline */}
        <h1 className={`text-[clamp(2.4rem,8vw,5.5rem)] font-black leading-[1.05] tracking-tight mb-6 ${fade(80)}`}>
          <span className="text-white">Your Swiss Indian</span>
          <br />
          <span
            key={wordIndex}
            className="gradient-text inline-block"
            style={{ animation: "fadeUp 0.45s cubic-bezier(0.16,1,0.3,1) forwards" }}
            aria-live="polite"
            aria-atomic="true"
          >
            {HERO_WORDS[wordIndex]}
          </span>
          <br />
          <span className="text-white">Hub</span>
        </h1>

        {/* Subheading */}
        <p className={`text-base sm:text-lg lg:text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed ${fade(160)}`}>
          The definitive platform for Indians living in Switzerland — restaurants, associations, events, business networks, temples, and everything you need to thrive.
        </p>

        {/* Search */}
        <div className={`max-w-2xl mx-auto mb-10 ${fade(240)}`}>
          <div className="flex gap-2 glass-strong rounded-2xl p-1.5 border border-[var(--border-mid)]">
            <label htmlFor="hero-search" className="sr-only">Search</label>
            <div className="flex items-center gap-2 flex-1 px-3">
              <Search className="w-4 h-4 text-[var(--text-dim)] shrink-0" aria-hidden />
              <input
                id="hero-search"
                type="search"
                placeholder="Restaurants, events, associations…"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-[var(--text-dim)] focus:outline-none min-w-0"
                style={{ fontSize: "16px" }}
              />
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 border-l border-[var(--border)]">
              <MapPin className="w-4 h-4 text-[var(--text-dim)] shrink-0" aria-hidden />
              <label htmlFor="hero-city" className="sr-only">City</label>
              <select
                id="hero-city"
                className="bg-transparent text-sm text-[var(--text-muted)] focus:outline-none cursor-pointer"
                style={{ fontSize: "16px" }}
              >
                <option value="" className="bg-[#080D18]">All Switzerland</option>
                <option value="zurich"   className="bg-[#080D18]">Zurich</option>
                <option value="geneva"   className="bg-[#080D18]">Geneva</option>
                <option value="basel"    className="bg-[#080D18]">Basel</option>
                <option value="bern"     className="bg-[#080D18]">Bern</option>
                <option value="lausanne" className="bg-[#080D18]">Lausanne</option>
              </select>
            </div>
            <button
              className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold min-h-[44px] transition-all hover:opacity-90 hover:scale-[1.02] shadow-lg"
              style={{ background: "linear-gradient(135deg, var(--saffron), var(--saffron-hi))", boxShadow: "var(--glow-saffron)" }}
              aria-label="Search"
            >
              Search
            </button>
          </div>
        </div>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-3 justify-center mb-16 ${fade(320)}`}>
          <Link
            href="/community"
            className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-white font-semibold min-h-[52px] transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, var(--saffron), var(--saffron-hi))", boxShadow: "var(--glow-saffron)" }}
          >
            Explore the Community
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden />
          </Link>
          <button
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-white font-semibold min-h-[52px] transition-all hover:bg-white/10 border"
            style={{ background: "rgba(213,43,30,0.08)", borderColor: "rgba(213,43,30,0.3)" }}
          >
            <span
              className="relative w-4 h-4 rounded-sm shrink-0"
              style={{ background: "var(--swiss-red)" }}
              aria-hidden
            >
              <span className="absolute top-[22%] left-[38%] w-[24%] h-[56%] bg-white" />
              <span className="absolute top-[38%] left-[22%] w-[56%] h-[24%] bg-white" />
            </span>
            List Your Business
          </button>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto ${fade(400)}`}>
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-4 lg:p-6 text-center card-hover border border-[var(--border)]"
            >
              <div className="text-2xl lg:text-3xl font-black mb-1 tabular-nums gradient-text">{stat.value}</div>
              <div className="text-xs lg:text-sm text-[var(--text-muted)] leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tricolor bottom stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] tricolor-bar" aria-hidden />

      {/* Scroll cue */}
      <a
        href="#categories"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[var(--text-dim)] hover:text-[var(--text-muted)] transition-colors"
        aria-label="Scroll down to explore"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" aria-hidden />
      </a>
    </section>
  );
}
