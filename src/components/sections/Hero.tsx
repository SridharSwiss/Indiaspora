"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Search, MapPin } from "lucide-react";
import { STATS } from "@/lib/data";

const HERO_WORDS = ["Community", "Culture", "Cuisine", "Connections", "Commerce"];

function Orb({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return <div className={className} style={style} aria-hidden />;
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    const interval = setInterval(() => setWordIndex((p) => (p + 1) % HERO_WORDS.length), 2800);
    return () => { clearTimeout(t); clearInterval(interval); };
  }, []);

  const fade = (delay: number) =>
    `transition-all duration-700 ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }` + ` [transition-delay:${delay}ms]`;

  return (
    <section
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--base)" }}
      aria-label="Hero"
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <Orb
          className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-[100px]"
          style={{ background: "rgba(240,149,12,0.12)", animation: "float 9s ease-in-out infinite" }}
        />
        <Orb
          className="absolute bottom-1/4 right-1/4 w-56 sm:w-80 h-56 sm:h-80 rounded-full blur-[100px]"
          style={{ background: "rgba(24,168,112,0.08)", animation: "float 12s ease-in-out infinite", animationDelay: "3s" }}
        />
        <Orb
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-40"
          style={{ background: "radial-gradient(ellipse, rgba(240,149,12,0.06) 0%, transparent 70%)" }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,210,140,0.9) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Decorative chakra */}
        <div
          className="absolute top-16 right-8 sm:top-20 sm:right-14 w-32 sm:w-48 h-32 sm:h-48 opacity-[0.04]"
          style={{ animation: "float 40s linear infinite" }}
        >
          <svg viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" stroke="#F0950C" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="18" stroke="#F0950C" strokeWidth="1" />
            {Array.from({ length: 24 }).map((_, i) => (
              <line key={i} x1="50" y1="2" x2="50" y2="32" stroke="#F0950C" strokeWidth="1" transform={`rotate(${i * 15} 50 50)`} />
            ))}
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">

        {/* Badge */}
        <div className={`inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-[var(--saffron)] mb-8 border border-[var(--saffron)]/15 ${fade(0)}`}>
          <span className="w-2 h-2 bg-[var(--saffron)] rounded-full" style={{ animation: "pulse-ring 2s ease-out infinite" }} aria-hidden />
          30,000+ Indians across 26 Swiss Cantons
        </div>

        {/* Headline */}
        <h1 className={`text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[1.05] tracking-tight mb-6 ${fade(80)}`}>
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

        {/* Sub */}
        <p className={`text-base sm:text-lg lg:text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed ${fade(160)}`}>
          The definitive platform for Indians living in Switzerland — restaurants, associations, events, business networks, temples, and everything you need to thrive.
        </p>

        {/* Search bar */}
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
                <option value="" className="bg-[#0C1122]">All Switzerland</option>
                <option value="zurich"  className="bg-[#0C1122]">Zurich</option>
                <option value="geneva"  className="bg-[#0C1122]">Geneva</option>
                <option value="basel"   className="bg-[#0C1122]">Basel</option>
                <option value="bern"    className="bg-[#0C1122]">Bern</option>
                <option value="lausanne" className="bg-[#0C1122]">Lausanne</option>
              </select>
            </div>
            <button
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--saffron)] to-[var(--saffron-hi)] text-white text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-[rgba(240,149,12,0.3)] min-h-[44px]"
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
            className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[var(--saffron)] to-[var(--saffron-hi)] text-white font-semibold transition-all shadow-xl shadow-[rgba(240,149,12,0.3)] hover:opacity-90 hover:scale-[1.02] min-h-[52px]"
          >
            Explore the Community
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden />
          </Link>
          <button className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl glass text-white font-semibold hover:bg-white/10 transition-all border border-[var(--border-mid)] hover:border-[var(--border-hi)] min-h-[52px]">
            List Your Business
          </button>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto ${fade(400)}`}>
          {STATS.map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-4 lg:p-6 text-center card-hover border border-[var(--border)]">
              <div className="text-2xl lg:text-3xl font-black gradient-text mb-1 tabular-nums">{stat.value}</div>
              <div className="text-xs lg:text-sm text-[var(--text-muted)] leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#categories"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[var(--text-dim)] hover:text-[var(--text-muted)] transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" aria-hidden />
      </a>
    </section>
  );
}
