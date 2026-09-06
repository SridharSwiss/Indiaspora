"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FEATURED_CATEGORIES } from "@/lib/data";
import AnimateIn from "@/components/ui/AnimateIn";

/* Per-category visual identity */
const CAT_META: Record<string, {
  emoji: string;
  accent: string;
  shadow: string;
  grad: string;     // main gradient
  orb1: string;     // ambient orb top-right
  orb2: string;     // ambient orb bottom-left
  pattern: string;  // subtle SVG pattern as data-URI bg
}> = {
  Community: {
    emoji: "🤝",
    accent: "#CEB07A",
    shadow: "rgba(201,169,110,0.40)",
    grad: "linear-gradient(145deg, #1A1408 0%, #261C0A 55%, #1E1710 100%)",
    orb1: "radial-gradient(ellipse 70% 70% at 90% 5%, rgba(201,169,110,0.28) 0%, transparent 70%)",
    orb2: "radial-gradient(ellipse 60% 60% at 5% 95%, rgba(176,128,80,0.20) 0%, transparent 70%)",
    pattern: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1.2' fill='rgba(201,169,110,0.18)'/%3E%3C/svg%3E")`,
  },
  Living: {
    emoji: "🏠",
    accent: "#70BC92",
    shadow: "rgba(61,122,90,0.40)",
    grad: "linear-gradient(145deg, #091410 0%, #0F2018 55%, #0C1A14 100%)",
    orb1: "radial-gradient(ellipse 70% 70% at 85% 10%, rgba(80,160,110,0.25) 0%, transparent 70%)",
    orb2: "radial-gradient(ellipse 60% 60% at 10% 90%, rgba(61,122,90,0.18) 0%, transparent 70%)",
    pattern: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 16 L16 0 L32 16' stroke='rgba(80,160,110,0.12)' stroke-width='0.8' fill='none'/%3E%3C/svg%3E")`,
  },
  Food: {
    emoji: "🍛",
    accent: "#D4906A",
    shadow: "rgba(200,130,90,0.40)",
    grad: "linear-gradient(145deg, #1A0E08 0%, #2A1608 55%, #1E1008 100%)",
    orb1: "radial-gradient(ellipse 70% 70% at 90% 8%, rgba(220,140,80,0.28) 0%, transparent 70%)",
    orb2: "radial-gradient(ellipse 60% 60% at 8% 92%, rgba(180,100,60,0.20) 0%, transparent 70%)",
    pattern: `url("data:image/svg+xml,%3Csvg width='36' height='36' viewBox='0 0 36 36' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='18,2 34,34 2,34' stroke='rgba(220,140,80,0.12)' stroke-width='0.8' fill='none'/%3E%3C/svg%3E")`,
  },
  Culture: {
    emoji: "🎭",
    accent: "#C090D0",
    shadow: "rgba(160,100,180,0.40)",
    grad: "linear-gradient(145deg, #120A18 0%, #1C1028 55%, #160C1E 100%)",
    orb1: "radial-gradient(ellipse 70% 70% at 88% 8%, rgba(180,110,220,0.25) 0%, transparent 70%)",
    orb2: "radial-gradient(ellipse 60% 60% at 8% 90%, rgba(140,80,180,0.18) 0%, transparent 70%)",
    pattern: `url("data:image/svg+xml,%3Csvg width='44' height='44' viewBox='0 0 44 44' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='22' cy='22' r='10' stroke='rgba(180,110,220,0.12)' stroke-width='0.8' fill='none'/%3E%3Ccircle cx='22' cy='22' r='4' stroke='rgba(180,110,220,0.10)' stroke-width='0.8' fill='none'/%3E%3C/svg%3E")`,
  },
  Business: {
    emoji: "💼",
    accent: "#80B0D8",
    shadow: "rgba(80,120,180,0.40)",
    grad: "linear-gradient(145deg, #080E18 0%, #0E1828 55%, #0A1020 100%)",
    orb1: "radial-gradient(ellipse 70% 70% at 90% 8%, rgba(80,130,200,0.25) 0%, transparent 70%)",
    orb2: "radial-gradient(ellipse 60% 60% at 8% 90%, rgba(60,100,160,0.18) 0%, transparent 70%)",
    pattern: `url("data:image/svg+xml,%3Csvg width='28' height='28' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='4' y='4' width='20' height='20' stroke='rgba(80,130,200,0.12)' stroke-width='0.8' fill='none'/%3E%3C/svg%3E")`,
  },
  Cities: {
    emoji: "🏔️",
    accent: "#A8C4D8",
    shadow: "rgba(100,150,180,0.40)",
    grad: "linear-gradient(145deg, #0A1018 0%, #101820 55%, #0C1418 100%)",
    orb1: "radial-gradient(ellipse 70% 70% at 88% 5%, rgba(140,185,220,0.22) 0%, transparent 70%)",
    orb2: "radial-gradient(ellipse 60% 60% at 5% 90%, rgba(90,140,180,0.16) 0%, transparent 70%)",
    pattern: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 36 L12 20 L24 28 L36 12 L48 24' stroke='rgba(140,185,220,0.14)' stroke-width='0.8' fill='none'/%3E%3C/svg%3E")`,
  },
};

const fallback = {
  emoji: "✨", accent: "#818CF8", shadow: "rgba(99,102,241,0.30)",
  grad: "linear-gradient(145deg, #0a0a18 0%, #12123a 100%)",
  orb1: "radial-gradient(ellipse 60% 60% at 80% 10%, rgba(99,102,241,0.25) 0%, transparent 70%)",
  orb2: "radial-gradient(ellipse 50% 50% at 10% 90%, rgba(99,102,241,0.15) 0%, transparent 70%)",
  pattern: "",
};

function cardBg(m: typeof fallback) {
  return [m.orb1, m.orb2, m.pattern, m.grad].filter(Boolean).join(", ");
}

export default function Categories() {
  const cats = FEATURED_CATEGORIES.slice(0, 6);

  return (
    <section id="categories" style={{ background: "var(--bg)", padding: "96px 0 80px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, gap: 24, flexWrap: "wrap" }}>
          <AnimateIn from="left">
            <span className="tag" style={{ marginBottom: 14, display: "inline-flex" }}>What We Cover</span>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.08,
              color: "var(--text)", margin: 0,
            }}>
              Everything for<br />
              <em className="gradient-text" style={{ fontStyle: "italic" }}>Swiss Indians</em>
            </h2>
          </AnimateIn>
          <AnimateIn from="right">
            <Link href="/events" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "11px 22px", borderRadius: 10,
              fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              color: "rgba(206,176,122,0.80)", border: "1px solid rgba(201,169,110,0.25)",
              background: "transparent", textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}>
              Browse All <ArrowRight style={{ width: 12, height: 12 }} />
            </Link>
          </AnimateIn>
        </div>

        {/* ── Bento grid ─────────────────────────────────────────── */}
        <div className="bento-grid">

          {/* Cell 1 — Hero card (Community) */}
          {cats[0] && (() => {
            const m = CAT_META[cats[0].title] ?? fallback;
            return (
              <AnimateIn from="left" threshold={0.08} className="bento-hero">
                <Link href={cats[0].href} className="bento-card bento-card-hover" style={{ background: cardBg(m), "--card-shadow": m.shadow } as React.CSSProperties}>
                  <div className="bento-orb-anim" style={{ background: m.orb1 }} />
                  <span className="bento-emoji" aria-hidden>{m.emoji}</span>
                  <div className="bento-count" style={{ color: m.accent }}>{cats[0].count}</div>
                  <h3 className="bento-title">{cats[0].title}</h3>
                  <p className="bento-desc">{cats[0].description}</p>
                  <div className="bento-cta" style={{ color: m.accent }}>
                    Explore <ArrowRight className="bento-arrow" style={{ width: 13, height: 13 }} />
                  </div>
                  <div className="bento-border-glow" style={{ "--glow": m.accent } as React.CSSProperties} />
                </Link>
              </AnimateIn>
            );
          })()}

          {/* Cell 2 — Food */}
          {cats[2] && (() => {
            const m = CAT_META[cats[2].title] ?? fallback;
            return (
              <AnimateIn from="up" delay={80} threshold={0.08} className="bento-wide">
                <Link href={cats[2].href} className="bento-card bento-card-hover" style={{ background: cardBg(m), "--card-shadow": m.shadow } as React.CSSProperties}>
                  <div className="bento-orb-anim" style={{ background: m.orb1 }} />
                  <span className="bento-emoji bento-emoji-sm" aria-hidden>{m.emoji}</span>
                  <div className="bento-count" style={{ color: m.accent }}>{cats[2].count}</div>
                  <h3 className="bento-title">{cats[2].title}</h3>
                  <p className="bento-desc">{cats[2].description}</p>
                  <div className="bento-cta" style={{ color: m.accent }}>
                    Explore <ArrowRight className="bento-arrow" style={{ width: 12, height: 12 }} />
                  </div>
                  <div className="bento-border-glow" style={{ "--glow": m.accent } as React.CSSProperties} />
                </Link>
              </AnimateIn>
            );
          })()}

          {/* Cell 3 — Culture */}
          {cats[3] && (() => {
            const m = CAT_META[cats[3].title] ?? fallback;
            return (
              <AnimateIn from="up" delay={120} threshold={0.08} className="bento-sm">
                <Link href={cats[3].href} className="bento-card bento-card-hover" style={{ background: cardBg(m), "--card-shadow": m.shadow } as React.CSSProperties}>
                  <div className="bento-orb-anim" style={{ background: m.orb1 }} />
                  <span className="bento-emoji bento-emoji-sm" aria-hidden>{m.emoji}</span>
                  <div className="bento-count" style={{ color: m.accent }}>{cats[3].count}</div>
                  <h3 className="bento-title">{cats[3].title}</h3>
                  <p className="bento-desc bento-desc-clip">{cats[3].description}</p>
                  <div className="bento-border-glow" style={{ "--glow": m.accent } as React.CSSProperties} />
                </Link>
              </AnimateIn>
            );
          })()}

          {/* Cell 4 — Living */}
          {cats[1] && (() => {
            const m = CAT_META[cats[1].title] ?? fallback;
            return (
              <AnimateIn from="up" delay={100} threshold={0.08} className="bento-sm">
                <Link href={cats[1].href} className="bento-card bento-card-hover" style={{ background: cardBg(m), "--card-shadow": m.shadow } as React.CSSProperties}>
                  <div className="bento-orb-anim" style={{ background: m.orb1 }} />
                  <span className="bento-emoji bento-emoji-sm" aria-hidden>{m.emoji}</span>
                  <div className="bento-count" style={{ color: m.accent }}>{cats[1].count}</div>
                  <h3 className="bento-title">{cats[1].title}</h3>
                  <p className="bento-desc bento-desc-clip">{cats[1].description}</p>
                  <div className="bento-border-glow" style={{ "--glow": m.accent } as React.CSSProperties} />
                </Link>
              </AnimateIn>
            );
          })()}

          {/* Cell 5 — Business */}
          {cats[4] && (() => {
            const m = CAT_META[cats[4].title] ?? fallback;
            return (
              <AnimateIn from="right" delay={140} threshold={0.08} className="bento-strip">
                <Link href={cats[4].href} className="bento-card bento-card-hover bento-card-horizontal" style={{ background: cardBg(m), "--card-shadow": m.shadow } as React.CSSProperties}>
                  <div className="bento-orb-anim" style={{ background: m.orb1 }} />
                  <span className="bento-emoji bento-emoji-lg" aria-hidden>{m.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div className="bento-count" style={{ color: m.accent }}>{cats[4].count}</div>
                    <h3 className="bento-title">{cats[4].title}</h3>
                    <p className="bento-desc">{cats[4].description}</p>
                  </div>
                  <div className="bento-cta bento-cta-pill" style={{ color: m.accent, border: `1px solid ${m.accent}55` }}>
                    Explore <ArrowRight className="bento-arrow" style={{ width: 12, height: 12 }} />
                  </div>
                  <div className="bento-border-glow" style={{ "--glow": m.accent } as React.CSSProperties} />
                </Link>
              </AnimateIn>
            );
          })()}

          {/* Cell 6 — Cities */}
          {cats[5] && (() => {
            const m = CAT_META[cats[5].title] ?? fallback;
            return (
              <AnimateIn from="right" delay={160} threshold={0.08} className="bento-sm">
                <Link href={cats[5].href} className="bento-card bento-card-hover" style={{ background: cardBg(m), "--card-shadow": m.shadow } as React.CSSProperties}>
                  <div className="bento-orb-anim" style={{ background: m.orb1 }} />
                  <span className="bento-emoji bento-emoji-sm" aria-hidden>{m.emoji}</span>
                  <div className="bento-count" style={{ color: m.accent }}>{cats[5].count}</div>
                  <h3 className="bento-title">{cats[5].title}</h3>
                  <p className="bento-desc bento-desc-clip">{cats[5].description}</p>
                  <div className="bento-border-glow" style={{ "--glow": m.accent } as React.CSSProperties} />
                </Link>
              </AnimateIn>
            );
          })()}

        </div>
      </div>

      <style>{`
        /* ── Bento grid layout ─────────────────────────────── */
        .bento-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: 260px 260px;
          gap: 12px;
        }
        .bento-hero  { grid-column: 1 / 2; grid-row: 1 / 3; }
        .bento-wide  { grid-column: 2 / 4; grid-row: 1 / 2; }
        .bento-sm    { grid-column: span 1; grid-row: span 1; }
        .bento-strip { grid-column: 2 / 4; grid-row: 2 / 3; }

        /* ── Base card ─────────────────────────────────────── */
        .bento-card {
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 24px; width: 100%; height: 100%;
          position: relative; overflow: hidden;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          transition: border-color 0.28s, transform 0.28s cubic-bezier(0.16,1,0.3,1), box-shadow 0.28s;
          background-size: 40px 40px, 36px 36px, cover;
        }
        .bento-card-horizontal {
          flex-direction: row; align-items: center; gap: 20px; justify-content: flex-start;
        }

        /* ── Hover — neobrutalism lift ─────────────────────── */
        .bento-card-hover:hover {
          border-color: var(--card-shadow, rgba(201,169,110,0.4));
          transform: translate(-3px, -3px);
          box-shadow: 5px 5px 0 var(--card-shadow, rgba(201,169,110,0.35));
        }
        .bento-card:active { transform: translate(0,0) !important; box-shadow: none !important; }

        /* ── Animated ambient orb (breathes slowly) ────────── */
        .bento-orb-anim {
          position: absolute; inset: 0; pointer-events: none; border-radius: 20px;
          opacity: 0.9;
          animation: orb-breathe 6s ease-in-out infinite;
        }
        @keyframes orb-breathe {
          0%,100% { opacity: 0.8; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.06); }
        }

        /* ── Glow border overlay ───────────────────────────── */
        .bento-border-glow {
          position: absolute; inset: 0; border-radius: 20px; pointer-events: none;
          box-shadow: inset 0 0 0 1px var(--glow, transparent);
          opacity: 0; transition: opacity 0.28s;
        }
        .bento-card:hover .bento-border-glow { opacity: 0.6; }

        /* ── Emoji ─────────────────────────────────────────── */
        .bento-emoji {
          font-size: 3.2rem; line-height: 1; margin-bottom: 10px;
          display: block;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
          position: relative; z-index: 1;
          filter: drop-shadow(0 2px 12px rgba(0,0,0,0.5));
        }
        .bento-emoji-sm { font-size: 2.2rem; margin-bottom: 8px; }
        .bento-emoji-lg { font-size: 2.8rem; flex-shrink: 0; }
        .bento-card:hover .bento-emoji { transform: scale(1.14) rotate(-5deg) translateY(-2px); }

        /* ── Text ──────────────────────────────────────────── */
        .bento-count {
          font-size: 9px; font-weight: 700; letter-spacing: 0.20em;
          text-transform: uppercase; font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          margin-bottom: 6px; position: relative; z-index: 1;
          opacity: 0.9;
        }
        .bento-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.25rem; font-weight: 700; line-height: 1.2;
          margin-bottom: 8px; position: relative; z-index: 1;
          color: rgba(240,235,224,0.95);
          text-shadow: 0 1px 8px rgba(0,0,0,0.6);
        }
        .bento-hero .bento-title { font-size: clamp(1.5rem, 2.2vw, 2rem); }
        .bento-desc {
          font-size: 12px; color: rgba(200,190,172,0.78); line-height: 1.65;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          margin-bottom: 16px; position: relative; z-index: 1;
        }
        .bento-desc-clip {
          display: -webkit-box; -webkit-line-clamp: 2;
          -webkit-box-orient: vertical; overflow: hidden;
        }

        /* ── CTA ───────────────────────────────────────────── */
        .bento-cta {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          position: relative; z-index: 1;
        }
        .bento-cta-pill {
          padding: 8px 18px; border-radius: 999px; flex-shrink: 0;
          font-size: 11px; white-space: nowrap; background: transparent;
          transition: background 0.2s;
          backdrop-filter: blur(6px);
        }
        .bento-card:hover .bento-cta-pill { background: rgba(255,255,255,0.07); }
        .bento-arrow { transition: transform 0.22s; }
        .bento-card:hover .bento-arrow { transform: translateX(4px); }

        /* ── Mobile ────────────────────────────────────────── */
        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
          }
          .bento-hero  { grid-column: 1 / -1; grid-row: auto; min-height: 240px; }
          .bento-wide  { grid-column: 1 / -1; grid-row: auto; min-height: 180px; }
          .bento-strip { grid-column: 1 / -1; grid-row: auto; min-height: 140px; }
          .bento-sm    { grid-column: span 1; min-height: 180px; }
        }
        @media (max-width: 480px) {
          .bento-grid { grid-template-columns: 1fr; }
          .bento-sm   { grid-column: 1 / -1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .bento-orb-anim { animation: none; }
        }
      `}</style>
    </section>
  );
}
