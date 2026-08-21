"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); setActiveMenu(null); }, [pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ padding: scrolled ? "10px 16px" : "14px 16px" }}
      aria-label="Main navigation"
    >
      <div
        className="max-w-6xl mx-auto flex items-center justify-between gap-3"
        style={{
          height: 52,
          padding: "0 20px",
          borderRadius: 999,
          background: scrolled ? "rgba(7,16,31,0.72)" : "transparent",
          border: scrolled ? "1px solid rgba(248,220,160,0.12)" : "1px solid transparent",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
          backdropFilter: scrolled ? "blur(24px) saturate(1.4)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(1.4)" : "none",
          transition: "background 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s cubic-bezier(0.16,1,0.3,1), backdrop-filter 0.4s",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="IndiaSwiss home">
          <div
            className="flex items-center justify-center text-lg"
            style={{
              width: 34, height: 34,
              background: "linear-gradient(135deg, #F97316, #FB923C)",
              borderRadius: 10,
              boxShadow: "0 0 20px rgba(249,115,22,0.28)",
            }}
            aria-hidden
          >
            🪔
          </div>
          <div style={{ lineHeight: 1 }}>
            <strong style={{ fontSize: 15, fontWeight: 800, letterSpacing: "-0.03em", display: "block" }}>
              <span className="gradient-text">India</span>
              <span style={{ color: "var(--text)" }}>Swiss</span>
            </strong>
            <span style={{ fontSize: 9, color: "var(--text-3)", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 500 }}>Community Hub</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5" role="list" style={{ listStyle: "none" }}>
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1"
                  style={{
                    position: "relative",
                    padding: "7px 12px",
                    borderRadius: 10,
                    fontSize: 13.5,
                    fontWeight: 600,
                    color: active ? "var(--saffron)" : "var(--text-2)",
                    background: "transparent",
                    transition: "color 0.2s, background 0.2s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "var(--text)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; }}
                  onMouseLeave={(e) => { if (!active) { (e.currentTarget as HTMLElement).style.color = "var(--text-2)"; (e.currentTarget as HTMLElement).style.background = "transparent"; } }}
                >
                  {item.label}
                  {active && (
                    <span
                      aria-hidden
                      style={{
                        position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)",
                        width: 16, height: 2,
                        background: "var(--saffron)", borderRadius: 99,
                      }}
                    />
                  )}
                  {item.children && (
                    <ChevronDown
                      className={`transition-transform duration-200 ${activeMenu === item.label ? "rotate-180" : ""}`}
                      style={{ width: 12, height: 12, opacity: 0.5 }}
                    />
                  )}
                </Link>

                {item.children && activeMenu === item.label && (
                  <div style={{ position: "absolute", top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)", paddingTop: 4, minWidth: 200 }}>
                    <div style={{ background: "rgba(7,16,31,0.92)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", border: "1px solid rgba(248,220,160,0.12)", borderRadius: 16, padding: 6, boxShadow: "0 16px 48px rgba(0,0,0,0.5)" }}>
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 12px", borderRadius: 10, fontSize: 13, fontWeight: 500, color: "var(--text-2)", transition: "color 0.15s, background 0.15s" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-2)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                        >
                          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--saffron)", opacity: 0.5, flexShrink: 0 }} />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-1.5">
          <Link href="/events" className="btn btn-ghost" style={{ fontSize: 13 }}>Events</Link>
          <Link href="/community" className="btn btn-primary btn-sm" style={{ fontSize: 13 }}>
            Join Community
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          style={{ width: 34, height: 34, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-2)", background: "rgba(255,255,255,0.06)" }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X style={{ width: 18, height: 18 }} /> : <Menu style={{ width: 18, height: 18 }} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", marginTop: 8 }}>
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-0.5" style={{ maxHeight: "75vh", overflowY: "auto" }}>
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <div key={item.label}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className="flex-1 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                      style={{ color: active ? "var(--saffron)" : "var(--text-2)" }}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        className="p-2"
                        style={{ color: "var(--text-3)" }}
                        onClick={() => setActiveMenu(activeMenu === item.label ? null : item.label)}
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        <ChevronDown style={{ width: 16, height: 16, transition: "transform 0.2s", transform: activeMenu === item.label ? "rotate(180deg)" : "rotate(0)" }} />
                      </button>
                    )}
                  </div>
                  {item.children && activeMenu === item.label && (
                    <div className="ml-3 mb-1 pl-3 space-y-0.5" style={{ borderLeft: "1px solid var(--border)" }}>
                      {item.children.map((child) => (
                        <Link key={child.label} href={child.href} className="block px-3 py-2 text-[13px] transition-colors" style={{ color: "var(--text-3)" }}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="pt-4 pb-2" style={{ borderTop: "1px solid var(--border)" }}>
              <Link href="/community" className="btn btn-primary w-full justify-center text-sm">Join Community</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
