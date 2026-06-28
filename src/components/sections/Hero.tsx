"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { STATS } from "@/lib/data";

const HERO_WORDS = ["Community", "Culture", "Cuisine", "Connections", "Commerce"];

const PARTICLES = [
  { w: 5, h: 5, bg: "#f97316", l: 15, t: 20, dur: 6, delay: 0 },
  { w: 3, h: 3, bg: "#3b82f6", l: 75, t: 35, dur: 8, delay: 1 },
  { w: 6, h: 6, bg: "#f97316", l: 40, t: 70, dur: 7, delay: 2 },
  { w: 4, h: 4, bg: "#3b82f6", l: 85, t: 15, dur: 9, delay: 0.5 },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % HERO_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const iconMap: Record<string, string> = {
    Users: "\u{1F465}",
    Building2: "\u{1F3DB}️",
    MapPin: "\u{1F4CD}",
    Briefcase: "\u{1F4BC}",
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: "var(--bg)" }}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-2xl" style={{ background: "rgba(234,88,12,0.08)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full blur-2xl" style={{ background: "rgba(59,130,246,0.08)" }} />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Particles hidden on mobile via CSS */}
      <div className="hero-particles absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{ width: p.w, height: p.h, background: p.bg, left: `${p.l}%`, top: `${p.t}%`, animation: `float ${p.dur}s ease-in-out ${p.delay}s infinite` }}
          />
        ))}
      </div>

      {/* Ashoka Chakra */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-[0.04] hero-particles" aria-hidden>
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="48" stroke="#f97316" strokeWidth="2" />
          <circle cx="50" cy="50" r="20" stroke="#f97316" strokeWidth="2" />
          {[0,15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240,255,270,285,300,315,330,345].map((deg, i) => (
            <line key={i} x1="50" y1="2" x2="50" y2="30" stroke="#f97316" strokeWidth="1.5" transform={`rotate(${deg} 50 50)`} />
          ))}
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-orange-300 mb-8">
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          30,000+ Indians across 26 Swiss Cantons
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight mb-6">
          <span className="text-white">Your Swiss Indian</span>
          <br />
          <span key={wordIndex} className="gradient-text inline-block" style={{ animation: "fadeUp 0.5s ease-out forwards" }}>
            {HERO_WORDS[wordIndex]}
          </span>
          <br />
          <span className="text-white">Hub</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          The definitive platform for Indians living in Switzerland — discover restaurants, associations, events, business networks, temples, and everything you need to thrive.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/community" className="btn btn-primary text-base px-8 py-4 rounded-xl shadow-xl" style={{ boxShadow: "0 10px 40px rgba(249,115,22,0.3)" }}>
            Explore the Community
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="mailto:hello@indiaswiss.ch?subject=List%20My%20Business" className="btn btn-outline text-base px-8 py-4 rounded-xl">
            List Your Business
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {STATS.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-4 lg:p-6 text-center">
              <div className="text-xl lg:text-3xl mb-1">{iconMap[stat.icon]}</div>
              <div className="text-2xl lg:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs lg:text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a href="#categories" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors">
        <span className="text-xs uppercase tracking-widest">Explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
