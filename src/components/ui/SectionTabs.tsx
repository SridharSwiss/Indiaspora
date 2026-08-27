"use client";

import { useEffect, useRef, useState } from "react";

interface Tab {
  id: string;
  label: string;
}

export default function SectionTabs({ tabs, accentColor = "var(--in)" }: { tabs: Tab[]; accentColor?: string }) {
  const [active, setActive] = useState(tabs[0]?.id);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = tabs.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [tabs]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 120;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div
      ref={barRef}
      style={{
        position: "sticky", top: 64, zIndex: 30,
        background: "var(--glass-bg)",
        borderBottom: "1px solid var(--glass-border)",
        backdropFilter: "blur(20px) saturate(1.3)",
        WebkitBackdropFilter: "blur(20px) saturate(1.3)",
        overflowX: "auto",
        scrollbarWidth: "none",
      }}
    >
      <style>{`.section-tabs-bar::-webkit-scrollbar { display: none; }`}</style>
      <div
        className="section-tabs-bar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ display: "flex", gap: 0, overflowX: "auto", scrollbarWidth: "none" }}
      >
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              style={{
                flexShrink: 0,
                padding: "14px 18px",
                fontSize: 11, fontWeight: isActive ? 700 : 500,
                letterSpacing: "0.08em", textTransform: "uppercase",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                color: isActive ? accentColor : "var(--text-3)",
                background: "transparent",
                border: "none", borderBottom: isActive ? `2px solid ${accentColor}` : "2px solid transparent",
                cursor: "pointer",
                transition: "color 0.15s, border-color 0.15s",
                whiteSpace: "nowrap",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
