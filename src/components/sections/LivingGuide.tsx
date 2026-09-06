"use client";

import { useState } from "react";
import { Plane, Heart, Home, GraduationCap, ArrowRight, ExternalLink } from "lucide-react";
import { LIVING_GUIDE } from "@/lib/data";
import AnimateIn from "@/components/ui/AnimateIn";

const ICON_MAP: Record<string, React.ReactNode> = {
  Plane:        <Plane className="w-5 h-5" />,
  Heart:        <Heart className="w-5 h-5" />,
  Home:         <Home className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
};

const TAB_ACCENT = [
  { light: "#A07840", glow: "rgba(160,120,64,0.18)" },
  { light: "#70BC92", glow: "rgba(80,158,120,0.18)" },
  { light: "#B08070", glow: "rgba(176,128,112,0.18)" },
  { light: "#80A8C8", glow: "rgba(120,160,200,0.18)" },
];

const QUICK_LINKS = [
  { label: "Residence Permits", icon: "📋", href: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/eu_efta.html" },
  { label: "Health Insurance",  icon: "🏥", href: "https://www.bag.admin.ch/bag/en/home/versicherungen/krankenversicherung.html" },
  { label: "Swiss Banking",     icon: "🏦", href: "https://www.comparis.ch/bank/kontokorrent/info/konto-eroeffnen" },
  { label: "Schools & Kita",    icon: "🏫", href: "https://www.edk.ch/en/education-system/cantonal-school-structures" },
  { label: "Language Courses",  icon: "🗣️", href: "https://www.ch.ch/en/education/language-courses-in-switzerland/" },
  { label: "Tax Returns",       icon: "📊", href: "https://www.estv.admin.ch/estv/en/home/direct-federal-tax/individuals.html" },
  { label: "Driving Licence",   icon: "🚗", href: "https://www.astra.admin.ch/astra/en/home/themen/fuehrerausweise-und-fahrzeugausweis/fuehrerausweis.html" },
  { label: "Emergency Numbers", icon: "🆘", href: "https://www.ch.ch/en/safety-and-justice/police/emergency-numbers/" },
];

export default function LivingGuide() {
  const [activeTab, setActiveTab] = useState(0);
  const acc = TAB_ACCENT[activeTab % TAB_ACCENT.length];

  return (
    <section
      id="living"
      style={{ background: "var(--surface-2)", padding: "96px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Background orb */}
      <div aria-hidden style={{
        position: "absolute", bottom: "-15%", left: "-8%",
        width: "55vw", height: "55vw",
        background: "radial-gradient(ellipse, rgba(201,169,110,0.06) 0%, transparent 65%)",
        pointerEvents: "none", filter: "blur(70px)",
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <AnimateIn from="up">
            <span className="tag" style={{ marginBottom: 20, display: "inline-flex" }}>Settle In</span>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700, lineHeight: 1.1,
              color: "var(--text)", margin: "0 0 16px",
            }}>
              Living in{" "}
              <em className="gradient-text" style={{ fontStyle: "italic" }}>Switzerland</em>
            </h2>
          </AnimateIn>
          <AnimateIn from="up" delay={80}>
            <p style={{
              fontSize: 15, color: "var(--text-2)", lineHeight: 1.7,
              maxWidth: 500, margin: "0 auto",
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            }}>
              Your comprehensive guide to settling into Swiss life — from day one to feeling at home
            </p>
          </AnimateIn>
        </div>

        {/* Quick links */}
        <AnimateIn from="up" delay={100}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(8,1fr)",
            gap: 10, marginBottom: 56,
          }} className="quick-links-grid">
            {QUICK_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-link-card"
                style={{
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                  padding: "14px 6px", borderRadius: 16,
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  textDecoration: "none",
                  transition: "border-color 0.22s, transform 0.22s cubic-bezier(0.16,1,0.3,1), box-shadow 0.22s",
                }}
              >
                <span style={{ fontSize: 22 }}>{link.icon}</span>
                <span style={{
                  fontSize: 10, textAlign: "center", lineHeight: 1.3, fontWeight: 600,
                  color: "var(--text-3)",
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  letterSpacing: "0.02em",
                }}>
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </AnimateIn>

        {/* Two-column: tabs + detail */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }} className="living-grid">

          {/* Left — tab list */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
              {LIVING_GUIDE.map((guide, i) => {
                const isActive = activeTab === i;
                const a = TAB_ACCENT[i % TAB_ACCENT.length];
                return (
                  <button
                    key={guide.title}
                    onClick={() => setActiveTab(i)}
                    style={{
                      display: "flex", alignItems: "center", gap: 16,
                      padding: "16px 18px", borderRadius: 16,
                      border: isActive ? `1px solid ${a.light}44` : "1px solid var(--border)",
                      background: isActive ? `${a.light}14` : "var(--surface)",
                      cursor: "pointer", textAlign: "left",
                      transition: "background 0.22s, border-color 0.22s, box-shadow 0.22s",
                      boxShadow: isActive ? `0 4px 24px ${a.glow}` : "none",
                    }}
                  >
                    <div style={{
                      width: 42, height: 42, borderRadius: 12, flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: isActive ? a.light : "var(--surface-2)",
                      color: isActive ? "#fff" : "var(--text-3)",
                      transition: "background 0.22s, color 0.22s",
                    }}>
                      {ICON_MAP[guide.icon]}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: 14, fontWeight: 700,
                        color: isActive ? "var(--text)" : "var(--text-2)",
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        marginBottom: 2,
                        transition: "color 0.22s",
                      }}>
                        {guide.title}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                        {guide.steps.length} key steps
                      </div>
                    </div>
                    {isActive && (
                      <div style={{
                        width: 6, height: 6, borderRadius: "50%",
                        background: a.light, flexShrink: 0,
                      }} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Pro tip */}
            <div style={{
              padding: "20px 22px", borderRadius: 16,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              display: "flex", alignItems: "flex-start", gap: 14,
            }}>
              <span style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>💡</span>
              <div>
                <div style={{
                  fontSize: 12, fontWeight: 700, marginBottom: 6,
                  color: "var(--text)",
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  textTransform: "uppercase", letterSpacing: "0.08em",
                }}>
                  Pro Tip
                </div>
                <p style={{
                  fontSize: 13, color: "var(--text-2)", lineHeight: 1.65, margin: 0,
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                }}>
                  Join the Indian expat Facebook groups for Zurich, Geneva, and Basel immediately upon arrival. Community members are incredibly helpful and can guide you through Swiss bureaucracy.
                </p>
              </div>
            </div>
          </div>

          {/* Right — step detail */}
          <div style={{
            background: "var(--surface)",
            border: `1px solid ${acc.light}33`,
            borderRadius: 20,
            padding: "32px 28px",
            position: "sticky", top: 88,
            boxShadow: `0 8px 40px ${acc.glow}`,
            transition: "border-color 0.3s, box-shadow 0.3s",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: acc.light, color: "#fff", flexShrink: 0,
                transition: "background 0.3s",
              }}>
                {ICON_MAP[LIVING_GUIDE[activeTab].icon]}
              </div>
              <div>
                <h3 style={{
                  fontSize: 18, fontWeight: 700, margin: "0 0 4px",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: "var(--text)",
                }}>
                  {LIVING_GUIDE[activeTab].title}
                </h3>
                <p style={{ fontSize: 12, color: "var(--text-3)", margin: 0, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                  Step-by-step guide
                </p>
              </div>
            </div>

            <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16, margin: 0, padding: 0 }}>
              {LIVING_GUIDE[activeTab].steps.map((step, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{
                    width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, fontWeight: 800,
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    color: acc.light,
                    background: `${acc.light}18`,
                    border: `1px solid ${acc.light}33`,
                    marginTop: 1,
                  }}>
                    {i + 1}
                  </div>
                  <p style={{
                    fontSize: 13.5, lineHeight: 1.65, margin: 0,
                    color: "var(--text-2)",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  }}>
                    {step}
                  </p>
                </li>
              ))}
            </ol>

            <button
              style={{
                marginTop: 28, display: "inline-flex", alignItems: "center", gap: 8,
                fontSize: 11, fontWeight: 700, color: acc.light,
                background: "transparent", border: "none", cursor: "pointer",
                padding: 0, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                letterSpacing: "0.08em", textTransform: "uppercase",
                transition: "opacity 0.2s",
              }}
            >
              Read Full Guide <ArrowRight style={{ width: 13, height: 13 }} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .quick-link-card:hover {
          border-color: var(--border-2);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        }
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) .quick-link-card:hover {
            box-shadow: 0 8px 24px rgba(0,0,0,0.3);
          }
        }
        :root[data-theme="dark"] .quick-link-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
        @media (max-width: 900px) {
          .living-grid { grid-template-columns: 1fr !important; }
          .quick-links-grid { grid-template-columns: repeat(4,1fr) !important; }
        }
        @media (max-width: 480px) {
          .quick-links-grid { grid-template-columns: repeat(4,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
