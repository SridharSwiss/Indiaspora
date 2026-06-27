"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { UPCOMING_EVENTS } from "@/lib/data";

const colorMap: Record<string, string> = {
  "bg-orange-500": "var(--saffron)",
  "bg-blue-500":   "#4A90D9",
  "bg-purple-500": "#8B5CF6",
  "bg-amber-500":  "var(--saffron-hi)",
  "bg-rose-500":   "#F43F5E",
  "bg-teal-500":   "var(--india-green)",
};

export default function Events() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 70);
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
    <section ref={ref} className="py-20 sm:py-28" style={{ background: "var(--base)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 reveal">
          <div>
            <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-[var(--saffron)] mb-3 font-semibold">
              Community Calendar
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Upcoming <span className="gradient-text">Events</span>
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--saffron)] hover:text-[var(--saffron-hi)] transition-colors font-medium shrink-0"
          >
            View all events <ArrowRight className="w-3.5 h-3.5" aria-hidden />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {UPCOMING_EVENTS.map((event, i) => {
            const accentColor = colorMap[event.color] ?? "var(--saffron)";
            return (
              <article
                key={event.title}
                className="reveal glass-card rounded-2xl p-5 border border-[var(--border)] hover:border-[var(--border-mid)] group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="w-3 h-3 rounded-full mt-1 shrink-0"
                    style={{ background: accentColor, boxShadow: `0 0 0 4px ${accentColor}20` }}
                    aria-hidden
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-sm leading-snug group-hover:text-[var(--saffron)] transition-colors">
                      {event.title}
                    </h3>
                  </div>
                  <span
                    className="text-[10px] font-semibold px-2 py-1 rounded-full shrink-0"
                    style={{ background: `${accentColor}18`, color: accentColor }}
                  >
                    {event.category}
                  </span>
                </div>

                <p className="text-sm text-[var(--text-muted)] mb-4 leading-relaxed">{event.description}</p>

                <div className="pt-3 border-t border-[var(--border)] space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-dim)]">
                    <Calendar className="w-3 h-3" aria-hidden /> {event.date}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-dim)]">
                    <MapPin className="w-3 h-3" aria-hidden /> {event.location}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
