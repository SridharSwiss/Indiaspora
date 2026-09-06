"use client";

import { useState } from "react";
import { MapPin, ArrowRight, Users } from "lucide-react";
import { CITIES } from "@/lib/data";
import AnimateIn from "@/components/ui/AnimateIn";

const CITY_PALETTE = [
  { bg: "rgba(201,169,110,0.14)", accent: "#CEB07A", dot: "#C9A96E", header: "rgba(40,28,10,0.95)" },
  { bg: "rgba(80,120,180,0.14)",  accent: "#80A8D0", dot: "#7AAAD0", header: "rgba(10,18,34,0.95)" },
  { bg: "rgba(200,140,80,0.14)",  accent: "#D4906A", dot: "#C88860", header: "rgba(36,18,8,0.95)"  },
  { bg: "rgba(140,90,170,0.14)",  accent: "#B880C8", dot: "#A870C0", header: "rgba(22,10,28,0.95)" },
  { bg: "rgba(80,150,110,0.14)",  accent: "#70BC92", dot: "#60AE82", header: "rgba(10,22,14,0.95)" },
  { bg: "rgba(190,90,100,0.14)",  accent: "#C87880", dot: "#B86870", header: "rgba(26,8,10,0.95)"  },
];

export default function Cities() {
  const [activeCity, setActiveCity] = useState(0);
  const city = CITIES[activeCity];
  const pal = CITY_PALETTE[activeCity % CITY_PALETTE.length];

  return (
    <section
      id="cities"
      style={{ background: "var(--surface)", padding: "96px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Ambient orb */}
      <div aria-hidden style={{
        position: "absolute", top: "10%", right: "-5%",
        width: "45vw", height: "45vw",
        background: `radial-gradient(ellipse, ${pal.bg.replace("0.14", "0.08")} 0%, transparent 65%)`,
        pointerEvents: "none", filter: "blur(80px)",
        transition: "background 0.5s",
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <AnimateIn from="up">
            <span className="tag" style={{ marginBottom: 20, display: "inline-flex" }}>City Guides</span>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700, lineHeight: 1.1,
              color: "var(--text)", margin: "0 0 16px",
            }}>
              Indians Across{" "}
              <em className="gradient-text" style={{ fontStyle: "italic" }}>Switzerland</em>
            </h2>
          </AnimateIn>
          <AnimateIn from="up" delay={80}>
            <p style={{
              fontSize: 15, color: "var(--text-2)", lineHeight: 1.7,
              maxWidth: 480, margin: "0 auto",
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            }}>
              Tailored guides for each Swiss city where the Indian community thrives
            </p>
          </AnimateIn>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 20, alignItems: "start" }} className="cities-grid">

          {/* City selector */}
          <AnimateIn from="left" threshold={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {CITIES.map((c, i) => {
                const p = CITY_PALETTE[i % CITY_PALETTE.length];
                const isActive = activeCity === i;
                return (
                  <button
                    key={c.name}
                    onClick={() => setActiveCity(i)}
                    style={{
                      display: "flex", alignItems: "center", gap: 14,
                      padding: "14px 18px", borderRadius: 16,
                      border: isActive ? `1px solid ${p.accent}44` : "1px solid var(--border)",
                      background: isActive ? p.bg : "var(--surface-2)",
                      cursor: "pointer", textAlign: "left",
                      transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
                      boxShadow: isActive ? `0 4px 20px ${p.bg}` : "none",
                    }}
                  >
                    <div style={{
                      width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: isActive ? p.accent : "var(--surface-3)",
                      color: isActive ? "#fff" : "var(--text-3)",
                      transition: "all 0.25s",
                    }}>
                      <MapPin style={{ width: 16, height: 16 }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: 14, fontWeight: 700,
                        color: isActive ? "var(--text)" : "var(--text-2)",
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        marginBottom: 2, transition: "color 0.25s",
                      }}>
                        {c.name}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                        {c.population}
                      </div>
                    </div>
                    {isActive && (
                      <div style={{
                        width: 8, height: 8, borderRadius: "50%",
                        background: p.accent, flexShrink: 0,
                        boxShadow: `0 0 0 3px ${p.bg}`,
                        animation: "city-pulse 2s ease-in-out infinite",
                      }} />
                    )}
                  </button>
                );
              })}
            </div>
          </AnimateIn>

          {/* City detail */}
          <AnimateIn from="right" threshold={0.1}>
            <div style={{
              background: "var(--surface)",
              border: `1px solid ${pal.accent}33`,
              borderRadius: 20, overflow: "hidden",
              boxShadow: `0 8px 40px ${pal.bg}`,
              transition: "border-color 0.35s, box-shadow 0.35s",
            }}>
              {/* Hero header */}
              <div style={{
                padding: "36px 32px",
                background: pal.bg,
                borderBottom: `1px solid ${pal.accent}22`,
                position: "relative", overflow: "hidden",
              }}>
                <div aria-hidden style={{
                  position: "absolute", top: "-30%", right: "-10%",
                  width: "60%", height: "160%",
                  background: `radial-gradient(ellipse, ${pal.accent}22 0%, transparent 65%)`,
                  pointerEvents: "none",
                }} />
                <div style={{ position: "relative" }}>
                  <div style={{
                    display: "flex", alignItems: "center", gap: 6, marginBottom: 12,
                    fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: pal.accent, opacity: 0.8,
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  }}>
                    <MapPin style={{ width: 12, height: 12 }} />
                    Switzerland
                  </div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                    fontWeight: 700, color: "var(--text)", marginBottom: 10,
                  }}>
                    {city.name}
                  </h3>
                  <p style={{
                    fontSize: 14, color: "var(--text-2)", lineHeight: 1.65, maxWidth: 420,
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", marginBottom: 16,
                  }}>
                    {city.description}
                  </p>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "5px 12px", borderRadius: 999,
                    background: `${pal.accent}18`, border: `1px solid ${pal.accent}33`,
                    fontSize: 11, fontWeight: 700, color: pal.accent,
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  }}>
                    <Users style={{ width: 11, height: 11 }} />
                    {city.population}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div style={{ padding: "28px 32px" }}>
                <div style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "var(--text-3)", marginBottom: 18,
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                }}>
                  Community Highlights
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }} className="city-highlights-grid">
                  {city.highlights.map((h) => (
                    <div key={h} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13 }}>
                      <span style={{
                        width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: `${pal.accent}18`, marginTop: 1,
                      }}>
                        <span style={{
                          width: 6, height: 6, borderRadius: "50%",
                          background: pal.accent, display: "block",
                        }} />
                      </span>
                      <span style={{ color: "var(--text-2)", lineHeight: 1.55, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                        {h}
                      </span>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 10 }}>
                  <button style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "11px 22px", borderRadius: 12,
                    background: pal.accent, color: "#fff",
                    fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    border: "none", cursor: "pointer",
                    transition: "opacity 0.2s, transform 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                  >
                    {city.name} Guide <ArrowRight style={{ width: 12, height: 12 }} />
                  </button>
                  <button style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "11px 22px", borderRadius: 12,
                    background: "var(--surface-2)",
                    color: "var(--text-2)",
                    fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    border: "1px solid var(--border-2)", cursor: "pointer",
                    transition: "border-color 0.2s, color 0.2s",
                  }}>
                    Events in {city.name}
                  </button>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      <style>{`
        @keyframes city-pulse {
          0%,100% { box-shadow: 0 0 0 3px transparent; }
          50%      { box-shadow: 0 0 0 5px rgba(201,169,110,0.15); }
        }
        @media (max-width: 900px) {
          .cities-grid { grid-template-columns: 1fr !important; }
          .city-highlights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
