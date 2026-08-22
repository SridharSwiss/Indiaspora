"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";

type Theme = "light" | "dark" | "system";

function getStoredTheme(): Theme {
  try { return (localStorage.getItem("is-theme") as Theme) ?? "system"; } catch { return "system"; }
}
function applyTheme(t: Theme) {
  const html = document.documentElement;
  html.classList.add("theme-transitioning");
  setTimeout(() => html.classList.remove("theme-transitioning"), 350);
  if (t === "dark") html.setAttribute("data-theme", "dark");
  else if (t === "light") html.setAttribute("data-theme", "light");
  else html.removeAttribute("data-theme");
  try { localStorage.setItem("is-theme", t); } catch {}
}
function isDarkMode(t: Theme): boolean {
  if (t === "dark") return true;
  if (t === "light") return false;
  if (typeof window !== "undefined")
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  return false;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [theme, setTheme] = useState<Theme>("system");
  const pathname = usePathname();

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Theme init
  useEffect(() => {
    const stored = getStoredTheme();
    setTheme(stored);
    applyTheme(stored);
  }, []);

  // Close on route change
  useEffect(() => { setIsOpen(false); setActiveMenu(null); }, [pathname]);

  // Close mobile on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const toggleTheme = useCallback(() => {
    const next: Theme = isDarkMode(theme) ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  }, [theme]);

  const dark = isDarkMode(theme);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{ padding: scrolled ? "10px 16px" : "16px 16px",
                 transition: "padding 0.4s cubic-bezier(0.16,1,0.3,1)" }}
        aria-label="Main navigation"
      >
        <div
          className="max-w-6xl mx-auto flex items-center justify-between gap-3"
          style={{
            height: 52,
            padding: "0 18px",
            borderRadius: 999,
            background: scrolled ? "var(--glass-bg)" : "transparent",
            border: scrolled ? "1px solid var(--glass-border)" : "1px solid transparent",
            boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.05)" : "none",
            backdropFilter: scrolled ? "blur(20px) saturate(1.5)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.5)" : "none",
            transition: "background 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="IndiaSwiss home">
            <div
              className="flex items-center justify-center text-base"
              style={{ width: 32, height: 32, borderRadius: 9,
                       background: "linear-gradient(135deg, var(--sf), var(--sf-hi))",
                       boxShadow: "0 2px 12px var(--sf-glow)", flexShrink: 0 }}
              aria-hidden
            >
              🪔
            </div>
            <div style={{ lineHeight: 1 }}>
              <strong style={{ fontSize: 15, fontWeight: 800, letterSpacing: "-0.03em", display: "block",
                               fontFamily: "'Syne', system-ui, sans-serif" }}>
                <span className="gradient-text">India</span>
                <span style={{ color: "var(--text)" }}>Swiss</span>
              </strong>
              <span style={{ fontSize: 9, color: "var(--text-3)", letterSpacing: "0.18em",
                             textTransform: "uppercase", fontWeight: 500 }}>
                Community Hub
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0" role="list" style={{ listStyle: "none" }}>
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
                      padding: "6px 11px",
                      borderRadius: 10,
                      fontSize: 13.5,
                      fontWeight: 600,
                      color: active ? "var(--sf)" : "var(--text-2)",
                      transition: "color 0.15s, background 0.15s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        (e.currentTarget as HTMLElement).style.color = "var(--text)";
                        (e.currentTarget as HTMLElement).style.background = "var(--surface-2)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        (e.currentTarget as HTMLElement).style.color = "var(--text-2)";
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                      }
                    }}
                  >
                    {item.label}
                    {/* Sliding underline */}
                    {active && (
                      <span
                        aria-hidden
                        style={{
                          position: "absolute", bottom: 3, left: 11, right: 11,
                          height: 1.5, background: "var(--sf)", borderRadius: 99,
                        }}
                      />
                    )}
                    {item.children && (
                      <ChevronDown
                        style={{ width: 11, height: 11, opacity: 0.45,
                                 transition: "transform 0.2s",
                                 transform: activeMenu === item.label ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && activeMenu === item.label && (
                    <div
                      style={{
                        position: "absolute", top: "calc(100% + 10px)",
                        left: "50%", transform: "translateX(-50%)",
                        minWidth: 210, paddingTop: 4,
                      }}
                    >
                      <div
                        style={{
                          background: "var(--surface)",
                          border: "1px solid var(--border-2)",
                          borderRadius: 14, padding: 5,
                          boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
                        }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            style={{
                              display: "flex", alignItems: "center", gap: 8,
                              padding: "8px 12px", borderRadius: 9,
                              fontSize: 13, fontWeight: 500,
                              color: "var(--text-2)",
                              transition: "color 0.12s, background 0.12s",
                            }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.color = "var(--text)";
                              (e.currentTarget as HTMLElement).style.background = "var(--surface-2)";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.color = "var(--text-2)";
                              (e.currentTarget as HTMLElement).style.background = "transparent";
                            }}
                          >
                            <span style={{ width: 5, height: 5, borderRadius: "50%",
                                          background: "var(--sf)", opacity: 0.4, flexShrink: 0 }} />
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
          <div className="flex items-center gap-1">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              style={{
                width: 34, height: 34, borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--text-2)",
                transition: "color 0.15s, background 0.15s",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text)";
                (e.currentTarget as HTMLElement).style.background = "var(--surface-2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-2)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {dark
                ? <Sun style={{ width: 16, height: 16 }} />
                : <Moon style={{ width: 16, height: 16 }} />}
            </button>

            <Link
              href="/community"
              className="hidden lg:inline-flex items-center gap-1.5"
              style={{
                padding: "7px 16px", borderRadius: 999,
                fontSize: 13, fontWeight: 700, color: "#fff",
                background: "linear-gradient(135deg, var(--sf), var(--sf-hi))",
                boxShadow: "0 3px 14px var(--sf-glow)",
                transition: "opacity 0.15s, transform 0.15s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.9";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Join Community
            </Link>

            {/* Mobile burger */}
            <button
              className="lg:hidden"
              style={{ width: 34, height: 34, borderRadius: 10,
                       display: "flex", alignItems: "center", justifyContent: "center",
                       color: "var(--text-2)", background: "var(--surface-2)" }}
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              aria-expanded={isOpen}
            >
              <Menu style={{ width: 18, height: 18 }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isOpen && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 200 }}
          role="dialog"
          aria-modal
          aria-label="Navigation menu"
        >
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            style={{ position: "absolute", inset: 0,
                     background: "rgba(0,0,0,0.45)",
                     backdropFilter: "blur(4px)",
                     WebkitBackdropFilter: "blur(4px)" }}
          />

          {/* Panel */}
          <div
            style={{
              position: "absolute", top: 0, right: 0, bottom: 0,
              width: "min(360px, 90vw)",
              background: "var(--surface)",
              borderLeft: "1px solid var(--border-2)",
              display: "flex", flexDirection: "column",
              padding: 20, gap: 6,
              overflowY: "auto",
            }}
          >
            {/* Top row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
                <div style={{ width: 30, height: 30, borderRadius: 8,
                              background: "linear-gradient(135deg, var(--sf), var(--sf-hi))",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              fontSize: 14 }}>🪔</div>
                <strong style={{ fontFamily: "'Syne', system-ui, sans-serif", fontSize: 15, fontWeight: 800, letterSpacing: "-0.03em" }}>
                  <span className="gradient-text">India</span>
                  <span style={{ color: "var(--text)" }}>Swiss</span>
                </strong>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                style={{ width: 34, height: 34, borderRadius: 10,
                         display: "flex", alignItems: "center", justifyContent: "center",
                         color: "var(--text-2)", background: "var(--surface-2)" }}
              >
                <X style={{ width: 18, height: 18 }} />
              </button>
            </div>

            {/* Links */}
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <div key={item.label}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      style={{
                        flex: 1, padding: "10px 14px", borderRadius: 12,
                        fontSize: 14.5, fontWeight: 600,
                        color: active ? "var(--sf)" : "var(--text-2)",
                        background: active ? "var(--sf-bg)" : "transparent",
                        transition: "color 0.15s, background 0.15s",
                      }}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => setActiveMenu(activeMenu === item.label ? null : item.label)}
                        style={{ padding: 8, color: "var(--text-3)" }}
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        <ChevronDown style={{ width: 16, height: 16, transition: "transform 0.2s",
                                             transform: activeMenu === item.label ? "rotate(180deg)" : "rotate(0deg)" }} />
                      </button>
                    )}
                  </div>
                  {item.children && activeMenu === item.label && (
                    <div style={{ marginLeft: 10, marginBottom: 4, paddingLeft: 12,
                                  borderLeft: "2px solid var(--border-2)" }}>
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          style={{ display: "block", padding: "7px 0",
                                   fontSize: 13, fontWeight: 500, color: "var(--text-3)",
                                   transition: "color 0.15s" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--sf)"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-3)"; }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Bottom CTA */}
            <div style={{ marginTop: "auto", paddingTop: 16,
                          borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: 8 }}>
              <Link
                href="/community"
                onClick={() => setIsOpen(false)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "13px 24px", borderRadius: 999,
                  fontSize: 14, fontWeight: 700, color: "#fff",
                  background: "linear-gradient(135deg, var(--sf), var(--sf-hi))",
                  boxShadow: "0 4px 20px var(--sf-glow)",
                }}
              >
                Join Community →
              </Link>
              <Link
                href="/business"
                onClick={() => setIsOpen(false)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "13px 24px", borderRadius: 999,
                  fontSize: 14, fontWeight: 700,
                  color: "var(--text)",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border-2)",
                }}
              >
                List Your Business
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
