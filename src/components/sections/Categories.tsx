"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Users, Home, UtensilsCrossed, Sparkles, TrendingUp, Music } from "lucide-react";
import { FEATURED_CATEGORIES } from "@/lib/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  Users: <Users className="w-5 h-5" aria-hidden />,
  Home: <Home className="w-5 h-5" aria-hidden />,
  UtensilsCrossed: <UtensilsCrossed className="w-5 h-5" aria-hidden />,
  Sparkles: <Sparkles className="w-5 h-5" aria-hidden />,
  TrendingUp: <TrendingUp className="w-5 h-5" aria-hidden />,
  Music: <Music className="w-5 h-5" aria-hidden />,
};

export default function Categories() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="categories" ref={ref} className="py-20 sm:py-28 mandala-bg" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-[var(--saffron)] mb-4 font-semibold">
            What We Cover
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            Everything for{" "}
            <span className="gradient-text">Swiss Indians</span>
          </h2>
          <p className="text-[var(--text-muted)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From landing in Switzerland to building a life here — every aspect of the Indian experience covered
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {FEATURED_CATEGORIES.map((cat, index) => (
            <Link
              key={cat.id}
              href={cat.href ?? `/${cat.id}`}
              className="reveal glass-card rounded-2xl overflow-hidden group border border-[var(--border)] hover:border-[var(--border-mid)]"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Color band */}
              <div className={`relative p-5 sm:p-6 bg-gradient-to-br ${cat.color}`} style={{ background: undefined }}>
                <div className="absolute inset-0 opacity-[0.15] bg-gradient-to-br from-white/30 to-transparent" aria-hidden />
                <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 100%)` }} aria-hidden />
                <div className="relative flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-lg`}>
                    {ICON_MAP[cat.icon]}
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-black/25 text-white/75 backdrop-blur-sm border border-white/10">
                    {cat.count}
                  </span>
                </div>
                <h3 className="relative text-lg font-bold text-white mb-1.5">{cat.title}</h3>
                <p className="relative text-sm text-white/65 leading-relaxed">{cat.description}</p>
              </div>

              {/* List */}
              <div className="p-5 sm:p-6">
                <ul className="space-y-2 mb-5">
                  {cat.items.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors">
                      <span className="w-1 h-1 rounded-full bg-[var(--saffron)] shrink-0 mt-2 opacity-70" aria-hidden />
                      {item}
                    </li>
                  ))}
                  {cat.items.length > 4 && (
                    <li className="text-sm text-[var(--text-dim)] pl-3.5">+{cat.items.length - 4} more…</li>
                  )}
                </ul>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--saffron)] group-hover:gap-2.5 transition-all">
                  View All <ArrowRight className="w-3.5 h-3.5" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass text-white font-semibold hover:bg-white/10 transition-all border border-[var(--border-mid)] hover:border-[var(--border-hi)] text-sm"
          >
            Browse All Resources <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
