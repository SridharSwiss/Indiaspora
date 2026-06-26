"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Search, MapPin } from "lucide-react";
import { STATS } from "@/lib/data";

const HERO_WORDS = ["Community", "Culture", "Cuisine", "Connections", "Commerce"];

function Particles() {
  const particleCount = 20;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: particleCount }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${(i % 3) * 2 + 2}px`,
            height: `${(i % 3) * 2 + 2}px`,
            background: i % 2 === 0 ? "#f97316" : "#3b82f6",
            left: `${(i * 13 + 7) % 100}%`,
            top: `${(i * 17 + 11) % 100}%`,
            animation: `float ${4 + (i % 3) * 2}s ease-in-out infinite`,
            animationDelay: `${(i % 4) * 0.8}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % HERO_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl" style={{ animation: "float 8s ease-in-out infinite" }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" style={{ animation: "float 10s ease-in-out infinite", animationDelay: "2s" }} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Particles />

      <div className="absolute top-20 right-10 w-48 h-48 opacity-5" style={{ animation: "float 30s linear infinite" }}>
        <svg viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="48" stroke="#f97316" strokeWidth="2" />
          <circle cx="50" cy="50" r="20" stroke="#f97316" strokeWidth="2" />
          {Array.from({ length: 24 }).map((_, i) => (
            <line key={i} x1="50" y1="2" x2="50" y2="30" stroke="#f97316" strokeWidth="1.5" transform={`rotate(${i * 15} 50 50)`} />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <div
          className={`inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-orange-300 mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="w-2 h-2 bg-orange-400 rounded-full" style={{ animation: "float 2s ease-in-out infinite" }} />
          30,000+ Indians across 26 Swiss Cantons
        </div>

        <h1
          className={`text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="text-white">Your Swiss Indian</span>
          <br />
          <span
            key={wordIndex}
            className="gradient-text inline-block"
            style={{ animation: "fadeUp 0.5s ease-out forwards" }}
          >
            {HERO_WORDS[wordIndex]}
          </span>
          <br />
          <span className="text-white">Hub</span>
        </h1>

        <p
          className={`text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          The definitive platform for Indians living in Switzerland — discover restaurants, associations, events, business networks, temples, and everything you need to thrive.
        </p>

        <div
          className={`max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="flex gap-2 glass-strong rounded-2xl p-2">
            <div className="flex items-center gap-2 flex-1 px-4">
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Search restaurants, events, associations..."
                className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2 px-4 border-l border-white/10">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
              <select className="bg-transparent text-sm text-slate-300 focus:outline-none cursor-pointer">
                <option value="" className="bg-slate-900">All Switzerland</option>
                <option value="zurich" className="bg-slate-900">Zurich</option>
                <option value="geneva" className="bg-slate-900">Geneva</option>
                <option value="basel" className="bg-slate-900">Basel</option>
                <option value="bern" className="bg-slate-900">Bern</option>
                <option value="lausanne" className="bg-slate-900">Lausanne</option>
              </select>
            </div>
            <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/30">
              Search
            </button>
          </div>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:from-orange-600 hover:to-amber-600 transition-all shadow-xl shadow-orange-500/30">
            Explore the Community
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass text-white font-semibold hover:bg-white/15 transition-all border border-white/10">
            List Your Business
          </button>
        </div>

        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-4 lg:p-6 text-center card-hover">
              <div className="text-2xl lg:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs lg:text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#categories"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
