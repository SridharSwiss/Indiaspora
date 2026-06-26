"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Users, Home, UtensilsCrossed, Sparkles, TrendingUp, Music } from "lucide-react";
import { FEATURED_CATEGORIES } from "@/lib/data";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ReactNode> = {
  Users: <Users className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Music: <Music className="w-6 h-6" />,
};

export default function Categories() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="categories" ref={sectionRef} className="py-24 bg-slate-900/50 mandala-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-orange-400 mb-4 font-medium">What We Cover</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Everything for <span className="gradient-text">Swiss Indians</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">From landing in Switzerland to building a life here — we cover every aspect of the Indian experience in the Swiss Confederation</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_CATEGORIES.map((cat, index) => (
            <div key={cat.id} className="reveal glass rounded-2xl overflow-hidden card-hover group cursor-pointer border border-white/5 hover:border-white/15 transition-all duration-300" style={{ transitionDelay: `${index * 60}ms` }}>
              <div className={`relative p-6 bg-gradient-to-br ${cat.color} bg-opacity-20`}>
                <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/20 to-transparent" />
                <div className="relative flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-lg`}>{ICON_MAP[cat.icon]}</div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/70 backdrop-blur-sm">{cat.count}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{cat.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{cat.description}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {cat.items.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 opacity-60" />{item}
                    </li>
                  ))}
                  {cat.items.length > 4 && <li className="text-sm text-slate-500 pl-3.5">+{cat.items.length - 4} more...</li>}
                </ul>
                <button className="mt-5 flex items-center gap-1.5 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors group/btn">
                  View All <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 reveal">
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass text-white font-semibold hover:bg-white/10 transition-all border border-white/10 hover:border-white/20">
            Browse All 20+ Categories <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
