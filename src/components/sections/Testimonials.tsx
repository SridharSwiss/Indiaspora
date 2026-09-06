"use client";

import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import AnimateIn from "@/components/ui/AnimateIn";

const CARD_ACCENT = [
  { accent: "rgba(201,169,110,0.14)", border: "rgba(201,169,110,0.22)", quote: "rgba(201,169,110,0.35)" },
  { accent: "rgba(176,128,112,0.14)", border: "rgba(176,128,112,0.22)", quote: "rgba(176,128,112,0.35)" },
  { accent: "rgba(90,158,120,0.12)",  border: "rgba(90,158,120,0.22)",  quote: "rgba(90,158,120,0.30)"  },
];

export default function Testimonials() {
  return (
    <section
      style={{
        padding: "96px 0",
        background: "var(--base)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient warm orb */}
      <div aria-hidden style={{
        position: "absolute", top: "10%", right: "-10%",
        width: "50vw", height: "50vw",
        background: "radial-gradient(ellipse, rgba(201,169,110,0.07) 0%, transparent 65%)",
        pointerEvents: "none", filter: "blur(60px)",
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative" }}>

        {/* Header */}
        <div className="text-center" style={{ marginBottom: 64 }}>
          <AnimateIn from="up">
            <span className="tag" style={{ marginBottom: 20, display: "inline-flex" }}>Community Voices</span>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700, lineHeight: 1.1,
              color: "var(--text)", margin: "0 0 16px",
            }}>
              Indians Thriving in{" "}
              <em className="gradient-text" style={{ fontStyle: "italic" }}>Switzerland</em>
            </h2>
          </AnimateIn>
          <AnimateIn from="up" delay={80}>
            <p style={{
              fontSize: 15, color: "var(--text-2)", lineHeight: 1.7,
              maxWidth: 480, margin: "0 auto",
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            }}>
              Real stories from community members who&apos;ve built their lives in Switzerland
            </p>
          </AnimateIn>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => {
            const c = CARD_ACCENT[i % CARD_ACCENT.length];
            return (
              <AnimateIn
                key={t.role + i}
                from={i === 0 ? "left" : i === 2 ? "right" : "up"}
                delay={i * 100}
                threshold={0.1}
              >
                <div style={{
                  background: "var(--surface)",
                  border: `1px solid ${c.border}`,
                  borderRadius: 20,
                  padding: "32px 28px",
                  display: "flex", flexDirection: "column",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s",
                }}
                  className="testimonial-card"
                >
                  {/* Subtle corner glow */}
                  <div aria-hidden style={{
                    position: "absolute", top: 0, right: 0,
                    width: "55%", height: "55%",
                    background: `radial-gradient(ellipse at top right, ${c.accent}, transparent 70%)`,
                    pointerEvents: "none",
                  }} />

                  {/* Quote icon */}
                  <Quote
                    style={{
                      width: 28, height: 28, marginBottom: 20, flexShrink: 0,
                      color: c.quote, position: "relative",
                    }}
                    strokeWidth={2}
                  />

                  {/* Quote text */}
                  <p style={{
                    fontSize: 14.5, lineHeight: 1.75, flex: 1, marginBottom: 28,
                    color: "var(--text-2)",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    fontStyle: "italic",
                    position: "relative",
                  }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: 14,
                    paddingTop: 20,
                    borderTop: "1px solid var(--border)",
                    position: "relative",
                  }}>
                    <div style={{
                      width: 42, height: 42, borderRadius: "50%", flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 20,
                      background: "var(--surface-2)",
                      border: `1px solid ${c.border}`,
                    }}>
                      {t.avatar}
                    </div>
                    <div>
                      <div style={{
                        fontSize: 13, fontWeight: 700,
                        color: "var(--text)",
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        marginBottom: 3,
                      }}>
                        {t.name}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                        {t.role}
                      </div>
                      <div style={{ fontSize: 10, color: "var(--text-3)", marginTop: 1, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", opacity: 0.7 }}>
                        {t.origin} · {t.years}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>

      <style>{`
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.08), 0 4px 16px rgba(201,169,110,0.12);
        }
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .testimonial-card:hover {
            box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 4px 16px rgba(201,169,110,0.14);
          }
        }
        :root[data-theme="dark"] .testimonial-card:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 4px 16px rgba(201,169,110,0.14);
        }
        @media (max-width: 768px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
