"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, ArrowRight, Users } from "lucide-react";
import { CITIES } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Cities() {
  const [activeCity, setActiveCity] = useState(0);
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

  const city = CITIES[activeCity];

  return (
    <section id="cities" ref={sectionRef} className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-indigo-400 mb-4 block font-medium">
            City Guides
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Indians Across{" "}
            <span className="gradient-text">Switzerland</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Tailored guides for each Swiss city where the Indian community thrives
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* City selector */}
          <div className="reveal space-y-3">
            {CITIES.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setActiveCity(i)}
                className={cn(
                  "w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left",
                  activeCity === i
                    ? "glass-strong border border-indigo-500/25 shadow-lg shadow-indigo-500/10"
                    : "glass border border-white/5 hover:border-white/15"
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center shrink-0",
                    c.color
                  )}
                >
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className={cn("font-semibold", activeCity === i ? "text-white" : "text-slate-300")}>
                    {c.name}
                  </div>
                  <div className="text-xs text-slate-500">{c.population}</div>
                </div>
                {activeCity === i && (
                  <div className="ml-auto w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* City detail */}
          <div className="lg:col-span-2 reveal">
            <div className="glass rounded-2xl overflow-hidden h-full border border-white/5">
              {/* Header */}
              <div className={`relative p-8 bg-gradient-to-br ${city.color} bg-opacity-30`}>
                <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white/20 to-transparent" />
                <div className="relative">
                  <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    Switzerland
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">{city.name}</h3>
                  <p className="text-white/80 max-w-md">{city.description}</p>
                  <div className="flex items-center gap-2 mt-4 text-white/60 text-sm">
                    <Users className="w-4 h-4" />
                    {city.population}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Community Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {city.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-indigo-500/15 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      </span>
                      {h}
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-semibold hover:from-indigo-600 hover:to-violet-600 transition-all">
                    {city.name} Guide
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass text-white text-sm font-medium hover:bg-white/10 transition-all border border-white/10">
                    Events in {city.name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
