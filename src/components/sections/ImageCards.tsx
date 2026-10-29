"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARDS = [
  {
    img: "/hero-community.jpg",
    label: "Community",
    title: "Your People, Your Roots",
    sub: "Associations, spiritual centres, student groups and women's networks across Switzerland.",
    href: "/community",
    accent: "#C9A96E",
  },
  {
    img: "/hero-food.jpg",
    label: "Food & Dining",
    title: "Taste of Home",
    sub: "60+ Indian restaurants, grocery stores, caterers and home-chef kitchens.",
    href: "/food",
    accent: "#E07040",
  },
  {
    img: "/hero-business.jpg",
    label: "Business",
    title: "Build & Connect",
    sub: "Networking chambers, Indian-founded startups and professional services in Switzerland.",
    href: "/business",
    accent: "#5ABFAB",
  },
  {
    img: "/hero-culture.jpg",
    label: "Culture & Arts",
    title: "Bridging Two Worlds",
    sub: "Bharatanatyam, Bollywood dance, Carnatic music, festivals and cinema.",
    href: "/culture",
    accent: "#D4608A",
  },
  {
    img: "/hero-zurich.jpg",
    label: "Zürich",
    title: "Switzerland's Largest City",
    sub: "IAGZ community, Indian restaurants near Bahnhofstrasse, Diwali events.",
    href: "/cities/zurich",
    accent: "#F0A030",
  },
  {
    img: "/hero-geneva.jpg",
    label: "Geneva",
    title: "The International Hub",
    sub: "UN, WHO diplomats and a thriving Indian expat community by Lac Léman.",
    href: "/cities/geneva",
    accent: "#4090D0",
  },
  {
    img: "/hero-travel.jpg",
    label: "Travel",
    title: "Switzerland to India",
    sub: "Swiss Travel Pass, Pilatus for parents, flight deals and India journeys.",
    href: "/travel",
    accent: "#8B6FD4",
  },
  {
    img: "/hero-events.jpg",
    label: "Events",
    title: "Never Miss a Beat",
    sub: "Garba nights, Diwali galas, business summits and cultural festivals.",
    href: "/events",
    accent: "#60B870",
  },
];

export default function ImageCards() {
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setActive((p) => (p + 1) % CARDS.length);
    }, 4500);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const prev = () => { setActive((p) => (p - 1 + CARDS.length) % CARDS.length); resetTimer(); };
  const next = () => { setActive((p) => (p + 1) % CARDS.length); resetTimer(); };

  const card = CARDS[active];

  return (
    <section style={{ background: "var(--base)", padding: "clamp(48px,6vw,96px) 0", overflow: "hidden" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div style={{ marginBottom: "clamp(24px,4vw,48px)" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12,
            padding: "4px 14px", borderRadius: 999,
            background: "var(--sf-bg)",
            border: "1px solid rgba(184,154,98,0.25)",
            fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
            color: "var(--sf-hi)",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: card.accent, flexShrink: 0, transition: "background 0.5s" }} aria-hidden />
            Explore Indiaspora
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)",
            fontWeight: 700, lineHeight: 1.15,
            color: "var(--text)", margin: 0,
          }}>
            Everything the Swiss-Indian community needs
          </h2>
        </div>

        {/* Main card + side thumbnails */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "clamp(16px,3vw,40px)", alignItems: "stretch" }}>

          {/* FEATURED CARD */}
          <div
            style={{ position: "relative", borderRadius: 20, overflow: "hidden", cursor: "pointer" }}
            onMouseDown={(e) => { setIsDragging(true); dragStart.current = e.clientX; }}
            onMouseUp={(e) => {
              if (!isDragging) return;
              setIsDragging(false);
              const delta = e.clientX - dragStart.current;
              if (delta < -40) next();
              else if (delta > 40) prev();
            }}
            onTouchStart={(e) => { dragStart.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              const delta = e.changedTouches[0].clientX - dragStart.current;
              if (delta < -40) next();
              else if (delta > 40) prev();
            }}
          >
            {/* Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={active}
              src={card.img}
              alt={card.label}
              style={{
                width: "100%",
                aspectRatio: "16/9",
                objectFit: "cover",
                objectPosition: "center 35%",
                display: "block",
                animation: "cardFadeIn 0.55s cubic-bezier(0.16,1,0.3,1) both",
              }}
            />
            {/* Dark gradient */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.30) 50%, rgba(0,0,0,0.05) 100%)",
            }} />

            {/* Accent color bar */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 4,
              background: card.accent,
              transition: "background 0.5s",
            }} />

            {/* Text content */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "clamp(20px,4vw,40px)",
              animation: "cardFadeIn 0.55s cubic-bezier(0.16,1,0.3,1) 0.1s both",
            }}>
              <span style={{
                display: "inline-block", padding: "3px 12px", borderRadius: 999,
                background: card.accent, color: "#111",
                fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase",
                marginBottom: 10,
              }}>{card.label}</span>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)",
                fontWeight: 700, color: "#fff", lineHeight: 1.1,
                margin: "0 0 10px",
              }}>{card.title}</h3>
              <p style={{
                color: "rgba(255,255,255,0.75)", fontSize: "clamp(0.82rem,1.4vw,0.95rem)",
                margin: "0 0 20px", maxWidth: 480, lineHeight: 1.6,
              }}>{card.sub}</p>
              <Link
                href={card.href}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "10px 22px", borderRadius: 999,
                  background: card.accent, color: "#111",
                  fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase",
                  textDecoration: "none", transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              >
                Explore →
              </Link>
            </div>

            {/* Prev/Next controls */}
            <button
              onClick={prev}
              aria-label="Previous"
              style={{
                position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)",
                width: 40, height: 40, borderRadius: "50%",
                background: "rgba(0,0,0,0.50)", border: "1px solid rgba(255,255,255,0.20)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "#fff", transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.75)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.50)"; }}
            >
              <ChevronLeft style={{ width: 18, height: 18 }} />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              style={{
                position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
                width: 40, height: 40, borderRadius: "50%",
                background: "rgba(0,0,0,0.50)", border: "1px solid rgba(255,255,255,0.20)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "#fff", transition: "background 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.75)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.50)"; }}
            >
              <ChevronRight style={{ width: 18, height: 18 }} />
            </button>

            {/* Dot progress */}
            <div style={{
              position: "absolute", bottom: 16, right: 20,
              display: "flex", gap: 6, alignItems: "center",
            }}>
              {CARDS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); resetTimer(); }}
                  aria-label={`Slide ${i + 1}`}
                  style={{
                    width: i === active ? 22 : 6, height: 6, borderRadius: 99,
                    background: i === active ? card.accent : "rgba(255,255,255,0.35)",
                    border: "none", cursor: "pointer", padding: 0,
                    transition: "width 0.3s, background 0.3s",
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Thumbnail stack */}
          <div style={{
            position: "relative",
            width: "clamp(140px, 18vw, 220px)",
          }} className="thumbnails-col">
          <div className="thumbnails-scroll" style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column", gap: 10,
            overflowY: "auto", padding: 4, scrollbarWidth: "thin",
          }}>
            {CARDS.map((c, i) => (
              <button
                key={i}
                onClick={() => { setActive(i); resetTimer(); }}
                style={{
                  position: "relative",
                  borderRadius: 12, overflow: "hidden",
                  border: `2px solid ${i === active ? c.accent : "transparent"}`,
                  transition: "border-color 0.3s, transform 0.2s, box-shadow 0.3s",
                  transform: i === active ? "scale(1.03)" : "scale(1)",
                  boxShadow: i === active ? `0 4px 20px ${c.accent}44` : "none",
                  cursor: "pointer", padding: 0, background: "none",
                  flexShrink: 0,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.img}
                  alt={c.label}
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    objectPosition: "center 35%",
                    display: "block",
                    opacity: i === active ? 1 : 0.55,
                    transition: "opacity 0.3s",
                  }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)",
                }} />
                <span style={{
                  position: "absolute", bottom: 6, left: 8,
                  fontSize: 9, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase",
                  color: i === active ? c.accent : "rgba(255,255,255,0.75)",
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  transition: "color 0.3s",
                }}>
                  {c.label}
                </span>
              </button>
            ))}
          </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cardFadeIn {
          from { opacity: 0; transform: scale(1.02); }
          to   { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 640px) {
          .thumbnails-col { display: none !important; }
        }
      `}</style>
    </section>
  );
}
