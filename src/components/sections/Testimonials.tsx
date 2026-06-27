"use client";

import { useEffect, useRef } from "react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 sm:py-28" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-[var(--jade)] mb-4 font-semibold">
            Community Voices
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            What Indians in{" "}
            <span className="gradient-text-jade">Switzerland Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="reveal glass-card rounded-2xl p-6 border border-[var(--border)] flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s} className="text-[var(--saffron)] text-sm" aria-hidden>&#9733;</span>
                ))}
              </div>

              <blockquote className="flex-1">
                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white shrink-0"
                  style={{ background: "linear-gradient(135deg, var(--saffron), var(--saffron-hi))" }}
                  aria-hidden
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-[var(--text-dim)]">{t.role}</p>
                  <p className="text-xs text-[var(--jade)] mt-0.5">{t.years}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
