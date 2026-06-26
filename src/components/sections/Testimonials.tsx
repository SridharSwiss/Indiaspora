"use client";

import { useEffect, useRef } from "react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
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

  const avatarColors = ["from-orange-500 to-red-500", "from-blue-500 to-indigo-600", "from-teal-500 to-cyan-600"];

  return (
    <section ref={sectionRef} className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-orange-400 mb-4 block font-medium">Community Voices</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Indians Thriving in <span className="gradient-text">Switzerland</span></h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">Real stories from community members who&apos;ve built their lives in Switzerland</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className="reveal glass rounded-2xl p-6 card-hover border border-white/5 hover:border-white/15 flex flex-col">
              <Quote className="w-8 h-8 text-orange-500/30 mb-4 shrink-0" />
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[i]} flex items-center justify-center text-white text-sm font-bold shrink-0`}>{t.avatar}</div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{t.origin} · {t.years}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
