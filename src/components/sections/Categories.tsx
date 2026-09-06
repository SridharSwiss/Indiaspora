"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FEATURED_CATEGORIES } from "@/lib/data";
import AnimateIn from "@/components/ui/AnimateIn";

/* Per-category visual identity — classic jewel tones + Unsplash imagery (Unsplash License) */
const CAT_META: Record<string, { emoji: string; bg: string; accent: string; shadow: string; img: string; overlay: string }> = {
  Community: {
    emoji: "🤝", accent: "#CEB07A", shadow: "rgba(201,169,110,0.35)",
    img: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&w=900&q=75",
    bg: "rgba(14,12,9,0.55)", overlay: "linear-gradient(160deg, rgba(14,12,9,0.72) 0%, rgba(40,28,10,0.60) 100%)",
  },
  Living: {
    emoji: "🏠", accent: "#70BC92", shadow: "rgba(61,122,90,0.35)",
    img: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=900&q=75",
    bg: "rgba(10,22,14,0.55)", overlay: "linear-gradient(160deg, rgba(10,22,14,0.72) 0%, rgba(20,40,28,0.60) 100%)",
  },
  Food: {
    emoji: "🍛", accent: "#C89880", shadow: "rgba(176,128,112,0.35)",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=75",
    bg: "rgba(22,12,8,0.55)", overlay: "linear-gradient(160deg, rgba(22,12,8,0.72) 0%, rgba(44,22,14,0.60) 100%)",
  },
  Culture: {
    emoji: "🎭", accent: "#B87EC0", shadow: "rgba(130,90,140,0.35)",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=900&q=75",
    bg: "rgba(18,10,22,0.55)", overlay: "linear-gradient(160deg, rgba(18,10,22,0.72) 0%, rgba(36,18,44,0.60) 100%)",
  },
  Business: {
    emoji: "💼", accent: "#7AAAD0", shadow: "rgba(60,100,140,0.35)",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=75",
    bg: "rgba(8,14,22,0.55)", overlay: "linear-gradient(160deg, rgba(8,14,22,0.72) 0%, rgba(16,28,44,0.60) 100%)",
  },
  Cities: {
    emoji: "🏔️", accent: "#C89090", shadow: "rgba(140,80,80,0.35)",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=75",
    bg: "rgba(18,10,10,0.55)", overlay: "linear-gradient(160deg, rgba(18,10,10,0.72) 0%, rgba(36,18,18,0.60) 100%)",
  },
};

const fallback = { emoji: "✨", accent: "#818CF8", shadow: "rgba(99,102,241,0.30)", img: "", bg: "rgba(99,102,241,0.08)", overlay: "rgba(99,102,241,0.08)" };

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
              color: "var(--text-2)", border: "1px solid var(--border-2)",
              background: "transparent", textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}>
              Browse All <ArrowRight style={{ width: 12, height: 12 }} />
            </Link>
          </AnimateIn>
        </div>

        {/* ── Bento grid ─────────────────────────────────────────── */}
        <div className="bento-grid">

          {/* Cell 1 — Hero card (Community) — tall left */}
          {cats[0] && (() => {
            const m = CAT_META[cats[0].title] ?? fallback;
            return (
              <AnimateIn from="left" threshold={0.08} className="bento-hero">
                <Link href={cats[0].href} className="bento-card bento-card-hover" style={{ background: m.bg, backgroundImage: m.img ? `${m.overlay}, url(${m.img})` : undefined, backgroundSize: "cover", backgroundPosition: "center", "--card-shadow": m.shadow } as React.CSSProperties}>
                  <span className="bento-emoji" aria-hidden>{m.emoji}</span>
                  <div className="bento-count" style={{ color: m.accent }}>{cats[0].count}</div>
                  <h3 className="bento-title" style={{ color: "var(--text)" }}>{cats[0].title}</h3>
                  <p className="bento-desc">{cats[0].description}</p>
                  <div className="bento-cta" style={{ color: m.accent }}>
                    Explore <ArrowRight className="bento-arrow" style={{ width: 13, height: 13 }} />
                  </div>
                  <div className="bento-border-glow" style={{ "--glow": m.accent } as React.CSSProperties} />
                </Link>
              </AnimateIn>
            );
          })()}

          {/* Cell 2 — Food — top-right wide */}
          {cats[2] && (() => {
            const m = CAT_META[cats[2].title] ?? fallback;
            return (
              <AnimateIn from="up" delay={80} threshold={0.08} className="bento-wide">
                <Link href={cats[2].href} className="bento-card bento-card-hover" style={{ background: m.bg, backgroundImage: m.img ? `${m.overlay}, url(${m.img})` : undefined, backgroundSize: "cover", backgroundPosition: "center", "--card-shadow": m.shadow } as React.CSSProperties}>
                  <span className="bento-emoji bento-emoji-sm" aria-hidden>{m.emoji}</span>
                  <div className="bento-count" style={{ color: m.accent }}>{cats[2].count}</div>
                  <h3 className="bento-title" style={{ color: "var(--text)" }}>{cats[2].title}</h3>
                  <p className="bento-desc">{cats[2].description}</p>
                  <div className="bento-cta" style={{ color: m.accent }}>
                    Explore <ArrowRight className="bento-arrow" style={{ width: 12, height: 12 }} />
                  </div>
                  <div className="bento-border-glow" style={{ "--glow": m.accent } as React.CSSProperties} />
                </Link>
              </AnimateIn>
            );
          })()}

          {/* Cell 3 — Culture — top-right small */}
          {cats[3] && (() => {
            const m = CAT_META[cats[3].title] ?? fallback;
            return (
              <AnimateIn from="up" delay={120} threshold={0.08} className="bento-sm">
                <Link href={cats[3].href} className="bento-card bento-card-hover" style={{ background: m.bg, backgroundImage: m.img ? `${m.overlay}, url(${m.img})` : undefined, backgroundSize: "cover", backgroundPosition: "center", "--card-shadow": m.shadow } as React.CSSProperties}>
                  <span className="bento-emoji bento-emoji-sm" aria-hidden>{m.emoji}</span>
                  <div className="bento-count" style={{ color: m.accent }}>{cats[3].count}</div>
                  <h3 className="bento-title" style={{ color: "var(--text)" }}>{cats[3].title}</h3>
                  <p className="bento-desc bento-desc-clip">{cats[3].description}</p>
                  <div className="bento-border-glow" style={{ "--glow": m.accent } as React.CSSProperties} />
                </Link>
              </AnimateIn>
            );
          })()}

          {/* Cell 4 — Living — bottom-middle */}
          {cats[1] && (() => {
            const m = CAT_META[cats[1].title] ?? fallback;
            return (
              <AnimateIn from="up" delay={100} threshold={0.08} className="bento-sm">
                <Link href={cats[1].href} className="bento-card bento-card-hover" style={{ background: m.bg, backgroundImage: m.img ? `${m.overlay}, url(${m.img})` : undefined, backgroundSize: "cover", backgroundPosition: "center", "--card-shadow": m.shadow } as React.CSSProperties}>
                  <span className="bento-emoji bento-emoji-sm" aria-hidden>{m.emoji}</span>
                  <div className="bento-count" style={{ color: m.accent }}>{cats[1].count}</div>
                  <h3 className="bento-title" style={{ color: "var(--text)" }}>{cats[1].title}</h3>
                  <p className="bento-desc bento-desc-clip">{cats[1].description}</p>
                  <div className="bento-border-glow" style={{ "--glow": m.accent } as React.CSSProperties} />
                </Link>
              </AnimateIn>
            );
          })()}

          {/* Cell 5 — Business — bottom strip wide */}
          {cats[4] && (() => {
            const m = CAT_META[cats[4].title] ?? fallback;
            return (
              <AnimateIn from="right" delay={140} threshold={0.08} className="bento-strip">
                <Link href={cats[4].href} className="bento-card bento-card-hover bento-card-horizontal" style={{ background: m.bg, backgroundImage: m.img ? `${m.overlay}, url(${m.img})` : undefined, backgroundSize: "cover", backgroundPosition: "center", "--card-shadow": m.shadow } as React.CSSProperties}>
                  <span className="bento-emoji bento-emoji-lg" aria-hidden>{m.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div className="bento-count" style={{ color: m.accent }}>{cats[4].count}</div>
                    <h3 className="bento-title" style={{ color: "var(--text)" }}>{cats[4].title}</h3>
                    <p className="bento-desc">{cats[4].description}</p>
                  </div>
                  <div className="bento-cta bento-cta-pill" style={{ color: m.accent, border: `1px solid ${m.accent}` }}>
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
                <Link href={cats[5].href} className="bento-card bento-card-hover" style={{ background: m.bg, backgroundImage: m.img ? `${m.overlay}, url(${m.img})` : undefined, backgroundSize: "cover", backgroundPosition: "center", "--card-shadow": m.shadow } as React.CSSProperties}>
                  <span className="bento-emoji bento-emoji-sm" aria-hidden>{m.emoji}</span>
                  <div className="bento-count" style={{ color: m.accent }}>{cats[5].count}</div>
                  <h3 className="bento-title" style={{ color: "var(--text)" }}>{cats[5].title}</h3>
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
          border: 1.5px solid rgba(184,154,98,0.18);
          border-radius: 20px;
          transition: border-color 0.22s, transform 0.22s cubic-bezier(0.16,1,0.3,1), box-shadow 0.22s;
        }
        .bento-card-horizontal {
          flex-direction: row; align-items: center; gap: 20px; justify-content: flex-start;
        }
        .bento-card-hover:hover {
          border-color: var(--card-shadow, rgba(99,102,241,0.5));
          transform: translate(-3px, -3px);
          box-shadow: 5px 5px 0 var(--card-shadow, rgba(99,102,241,0.4));
        }
        .bento-card:active { transform: translate(0, 0) !important; box-shadow: none !important; }

        /* ── Glow border overlay ───────────────────────────── */
        .bento-border-glow {
          position: absolute; inset: 0; border-radius: 20px; pointer-events: none;
          box-shadow: inset 0 0 0 1.5px var(--glow, transparent);
          opacity: 0; transition: opacity 0.22s;
        }
        .bento-card:hover .bento-border-glow { opacity: 0.5; }

        /* ── Emoji ─────────────────────────────────────────── */
        .bento-emoji {
          font-size: 4rem; line-height: 1; margin-bottom: 12px;
          display: block;
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .bento-emoji-sm { font-size: 2.4rem; margin-bottom: 8px; }
        .bento-emoji-lg { font-size: 3rem; flex-shrink: 0; }
        .bento-card:hover .bento-emoji { transform: scale(1.12) rotate(-4deg); }

        /* ── Text ──────────────────────────────────────────── */
        .bento-count {
          font-size: 9px; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          margin-bottom: 5px;
        }
        .bento-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.25rem; font-weight: 700; line-height: 1.2;
          margin-bottom: 8px; color: rgba(240,235,224,0.95) !important;
        }
        .bento-hero .bento-title { font-size: clamp(1.5rem, 2.2vw, 2rem); }
        .bento-desc {
          font-size: 12px; color: rgba(210,200,185,0.80); line-height: 1.65;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          margin-bottom: 16px;
        }
        .bento-desc-clip { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

        /* ── CTA ───────────────────────────────────────────── */
        .bento-cta {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }
        .bento-cta-pill {
          padding: 8px 16px; border-radius: 999px; flex-shrink: 0;
          font-size: 11px; white-space: nowrap;
          background: transparent;
          transition: background 0.2s;
        }
        .bento-card:hover .bento-cta-pill { background: rgba(255,255,255,0.06); }
        .bento-arrow { transition: transform 0.2s; }
        .bento-card:hover .bento-arrow { transform: translateX(3px); }

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
      `}</style>
    </section>
  );
}
