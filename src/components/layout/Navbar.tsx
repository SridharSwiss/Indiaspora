"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const [theme, setTheme] = useState<Theme>("system");
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
  useEffect(() => { setIsOpen(false); setActiveMenu(null); setMobileOpen(null); }, [pathname]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setIsOpen(false); setActiveMenu(null); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when mobile drawer open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const toggleTheme = useCallback(() => {
    const next: Theme = isDarkMode(theme) ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  }, [theme]);

  // Smooth dropdown helpers — delay close so mouse can travel to dropdown panel
  const openMenu = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 180);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const dark = isDarkMode(theme);

  return (
    <>
      <style>{`
        .nav-dropdown {
          animation: dropIn 0.18s cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes dropIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .nav-child-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 14px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-2);
          transition: color 0.12s, background 0.12s;
          white-space: nowrap;
        }
        .nav-child-link:hover, .nav-child-link.active {
          color: var(--sf);
          background: var(--sf-bg);
        }
        .nav-child-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--sf); opacity: 0.5; flex-shrink: 0;
          transition: opacity 0.12s;
        }
        .nav-child-link:hover .nav-child-dot,
        .nav-child-link.active .nav-child-dot { opacity: 1; }
      `}</style>

      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{ padding: scrolled ? "10px 16px" : "16px 16px",
                 transition: "padding 0.4s cubic-bezier(0.16,1,0.3,1)" }}
        aria-label="Main navigation"
      >
        <div
          className="max-w-6xl mx-auto flex items-center justify-between gap-3"
          style={{
            height: 52, padding: "0 18px", borderRadius: 999,
            background: scrolled ? "var(--glass-bg)" : "transparent",
            border: scrolled ? "1px solid var(--glass-border)" : "1px solid transparent",
            boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.05)" : "none",
            backdropFilter: scrolled ? "blur(20px) saturate(1.5)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.5)" : "none",
            transition: "background 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.4s, box-shadow 0.4s",
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

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-0" role="list" style={{ listStyle: "none" }}>
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              const open = activeMenu === item.label;
              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && openMenu(item.label)}
                  onMouseLeave={() => item.children && scheduleClose()}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1"
                    style={{
                      position: "relative", padding: "8px 11px", borderRadius: 10,
                      fontSize: 13.5, fontWeight: 600,
                      color: active ? "var(--sf)" : open ? "var(--text)" : "var(--text-2)",
                      background: open && !active ? "var(--surface-2)" : "transparent",
                      transition: "color 0.15s, background 0.15s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) (e.currentTarget as HTMLElement).style.color = "var(--text)";
                      if (!active) (e.currentTarget as HTMLElement).style.background = "var(--surface-2)";
                    }}
                    onMouseLeave={(e) => {
                      if (!active && !open) {
                        (e.currentTarget as HTMLElement).style.color = "var(--text-2)";
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                      }
                    }}
                  >
                    {item.label}
                    {active && (
                      <span aria-hidden style={{
                        position: "absolute", bottom: 3, left: 11, right: 11,
                        height: 1.5, background: "var(--sf)", borderRadius: 99,
                      }} />
                    )}
                    {item.children && (
                      <ChevronDown style={{
                        width: 12, height: 12, opacity: 0.5, flexShrink: 0,
                        transition: "transform 0.2s",
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                      }} />
                    )}
                  </Link>

                  {/* Dropdown panel */}
                  {item.children && open && (
                    <div
                      className="nav-dropdown"
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                      style={{
                        position: "absolute",
                        top: "calc(100% + 4px)", /* tighter gap — 4px instead of 10px */
                        left: "50%",
                        transform: "translateX(-50%)",
                        minWidth: 220,
                        zIndex: 60,
                        /* invisible top padding acts as bridge over the gap */
                        paddingTop: 8,
                      }}
                    >
                      <div style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border-2)",
                        borderRadius: 16, padding: 6,
                        boxShadow: "0 12px 40px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.06)",
                      }}>
                        {item.children.map((child) => {
                          const childActive = pathname === child.href || pathname.startsWith(child.href + "/");
                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={`nav-child-link${childActive ? " active" : ""}`}
                            >
                              <span className="nav-child-dot" />
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            <button
              onClick={toggleTheme}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              style={{
                width: 34, height: 34, borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--text-2)", background: "transparent",
                transition: "color 0.15s, background 0.15s",
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
              {dark ? <Sun style={{ width: 16, height: 16 }} /> : <Moon style={{ width: 16, height: 16 }} />}
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
          role="dialog" aria-modal aria-label="Navigation menu"
        >
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            style={{ position: "absolute", inset: 0,
                     background: "rgba(0,0,0,0.45)",
                     backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
          />

          {/* Panel */}
          <div
            style={{
              position: "absolute", top: 0, right: 0, bottom: 0,
              width: "min(360px, 90vw)",
              background: "var(--surface)",
              borderLeft: "1px solid var(--border-2)",
              display: "flex", flexDirection: "column",
              padding: "20px 16px", gap: 4, overflowY: "auto",
              animation: "slideIn 0.25s cubic-bezier(0.16,1,0.3,1) both",
            }}
          >
            <style>{`
              @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
            `}</style>

            {/* Top row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
                <div style={{ width: 30, height: 30, borderRadius: 8,
                              background: "linear-gradient(135deg, var(--sf), var(--sf-hi))",
                              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🪔</div>
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

            {/* Mobile nav links */}
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              const expanded = mobileOpen === item.label;
              return (
                <div key={item.label}>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Link
                      href={item.href}
                      onClick={() => { if (!item.children) setIsOpen(false); }}
                      style={{
                        flex: 1, padding: "11px 14px", borderRadius: 12,
                        fontSize: 15, fontWeight: 600,
                        color: active ? "var(--sf)" : "var(--text)",
                        background: active ? "var(--sf-bg)" : "transparent",
                        transition: "color 0.15s, background 0.15s",
                      }}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => setMobileOpen(expanded ? null : item.label)}
                        aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label}`}
                        style={{
                          width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: expanded ? "var(--sf)" : "var(--text-3)",
                          background: expanded ? "var(--sf-bg)" : "var(--surface-2)",
                          transition: "color 0.15s, background 0.15s",
                        }}
                      >
                        <ChevronDown style={{ width: 16, height: 16,
                                             transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1)",
                                             transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }} />
                      </button>
                    )}
                  </div>

                  {/* Sub-items */}
                  {item.children && expanded && (
                    <div style={{
                      marginTop: 2, marginBottom: 4,
                      marginLeft: 8, paddingLeft: 14,
                      borderLeft: "2px solid var(--sf-bg)",
                    }}>
                      {item.children.map((child) => {
                        const childActive = pathname === child.href || pathname.startsWith(child.href + "/");
                        return (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            style={{
                              display: "flex", alignItems: "center", gap: 8,
                              padding: "9px 10px", borderRadius: 10, marginBottom: 2,
                              fontSize: 13.5, fontWeight: 500,
                              color: childActive ? "var(--sf)" : "var(--text-2)",
                              background: childActive ? "var(--sf-bg)" : "transparent",
                              transition: "color 0.12s, background 0.12s",
                            }}
                          >
                            <span style={{
                              width: 6, height: 6, borderRadius: "50%", flexShrink: 0,
                              background: childActive ? "var(--sf)" : "var(--border-2)",
                              transition: "background 0.12s",
                            }} />
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Bottom CTAs */}
            <div style={{ marginTop: "auto", paddingTop: 20,
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
                  color: "var(--text)", background: "var(--surface-2)",
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
