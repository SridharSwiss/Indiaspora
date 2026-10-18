"use client";

import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown, Sun, Moon, User, LogOut, Settings, UserPlus, Search, HelpCircle, Users, Home, UtensilsCrossed, Briefcase, Palette, MapPin, Plane, CalendarDays, Newspaper } from "lucide-react";
import SearchOverlay from "@/components/ui/SearchOverlay";
import { NAV_ITEMS } from "@/lib/data";
import { createClient } from "@/lib/supabase/client";
import JoinModal from "@/components/JoinModal";

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
  const [joinOpen, setJoinOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const userMenuTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Stable supabase client — never re-created
  const supabase = useMemo(() => createClient(), []);

  // Auth state
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUserEmail(user?.email ?? null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUserEmail(session?.user?.email ?? null);
    });
    return () => subscription.unsubscribe();
  }, [supabase]);

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
  useEffect(() => { setIsOpen(false); setActiveMenu(null); setMobileOpen(null); setUserMenuOpen(false); }, [pathname]);

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setIsOpen(false); setActiveMenu(null); setUserMenuOpen(false); setSearchOpen(false); }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setSearchOpen(true); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Click outside — close user menu
  useEffect(() => {
    if (!userMenuOpen) return;
    const handler = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [userMenuOpen]);

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

  // Nav dropdown helpers — delay close so mouse can travel diagonally
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

  // User menu — delayed close so hovering over it doesn't flicker
  const openUserMenu = useCallback(() => {
    if (userMenuTimer.current) clearTimeout(userMenuTimer.current);
    setUserMenuOpen(true);
  }, []);

  const scheduleUserMenuClose = useCallback(() => {
    userMenuTimer.current = setTimeout(() => setUserMenuOpen(false), 200);
  }, []);

  const cancelUserMenuClose = useCallback(() => {
    if (userMenuTimer.current) clearTimeout(userMenuTimer.current);
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setUserMenuOpen(false);
    setIsOpen(false);
    router.refresh();
  }, [supabase, router]);

  const isAdmin = userEmail === process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  const NAV_ICONS: Record<string, React.ReactNode> = {
    Community: <Users size={16} />,
    Living:    <Home size={16} />,
    Food:      <UtensilsCrossed size={16} />,
    Business:  <Briefcase size={16} />,
    Culture:   <Palette size={16} />,
    Cities:    <MapPin size={16} />,
    Travel:    <Plane size={16} />,
    Events:    <CalendarDays size={16} />,
    News:      <Newspaper size={16} />,
  };
  const dark = isDarkMode(theme);

  // Admin pages have their own chrome — hide the public nav
  if (pathname.startsWith("/admin")) return null;
  // On the home page with transparent nav, text must be LIGHT (dark hero behind)
  const lightNav = pathname === "/" && !scrolled;

  return (
    <>
      <style>{`
        .nav-dropdown {
          animation: dropIn 0.18s cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes dropIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .nav-child-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 14px;
          border-radius: 2px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          color: var(--text-2);
          text-decoration: none;
          transition: color 0.12s;
          white-space: nowrap;
        }
        .nav-child-link:hover, .nav-child-link.active {
          color: var(--text);
        }

        .nav-icon-btn:hover {
          color: var(--text) !important;
        }
        .user-menu-item:hover {
          background: var(--surface-2) !important;
          color: var(--text) !important;
        }
        .mobile-link:hover {
          color: var(--sf) !important;
        }
      `}</style>

      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          background: scrolled ? "var(--glass-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.3)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.3)" : "none",
          transition: "background 0.4s ease, border-color 0.4s ease",
        }}
        aria-label="Main navigation"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-0"
          style={{ height: 64 }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 z-10 flex items-center gap-2"
            aria-label="Indiaspora home"
            style={{ textDecoration: "none" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="/logo.svg"
              alt="Indiaspora"
              width={36}
              height={36}
              style={{
                height: 36, width: "auto",
                filter: lightNav ? "brightness(0) invert(1)" : "none",
                transition: "filter 0.3s",
              }}
            />
            <span style={{
              fontSize: 18, fontWeight: 700,
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: "-0.01em",
              color: lightNav ? "rgba(245,237,224,0.95)" : "var(--text)",
              transition: "color 0.3s",
            }}>
              India<span style={{ color: lightNav ? "#C9A96E" : "var(--in)" }}>spora</span>
            </span>
          </Link>

          {/* Desktop nav — left-aligned after logo */}
          <ul
            className="hidden lg:flex items-center gap-0"
            role="list"
            style={{
              listStyle: "none", margin: 0, padding: 0,
              marginLeft: 8, flex: 1,
            }}
          >
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
                      position: "relative", padding: "8px 10px",
                      fontSize: 11, fontWeight: active ? 700 : 600,
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      color: active
                        ? (lightNav ? "rgba(245,237,224,0.95)" : "var(--text)")
                        : (lightNav ? "rgba(245,237,224,0.55)" : "var(--text-3)"),
                      transition: "color 0.3s",
                      whiteSpace: "nowrap", textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = lightNav ? "rgba(245,237,224,0.95)" : "var(--text)";
                    }}
                    onMouseLeave={(e) => {
                      if (!active) (e.currentTarget as HTMLElement).style.color = lightNav ? "rgba(245,237,224,0.55)" : "var(--text-3)";
                    }}
                  >
                    {item.label}
                    {active && (
                      <span aria-hidden style={{
                        position: "absolute", bottom: 2, left: 10, right: 10,
                        height: 1, background: "var(--in)",
                      }} />
                    )}
                    {item.children && (
                      <ChevronDown style={{
                        width: 10, height: 10, opacity: 0.4, flexShrink: 0,
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
                        top: "calc(100% + 4px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        minWidth: 200,
                        zIndex: 60,
                        paddingTop: 8,
                      }}
                    >
                      <div style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border-2)",
                        borderRadius: 2, padding: 8,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                      }}>
                        {item.children.map((child) => {
                          const childActive = pathname === child.href || pathname.startsWith(child.href + "/");
                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={`nav-child-link${childActive ? " active" : ""}`}
                            >
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

          {/* Right actions — icon-only Maison style */}
          <div className="flex items-center gap-3 z-10">
            {/* Search icon */}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search (⌘K)"
              title="Search (⌘K)"
              className="nav-icon-btn"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 32, height: 32,
                color: lightNav ? "rgba(245,237,224,0.55)" : "var(--text-3)",
                background: "transparent",
                border: "none", cursor: "pointer",
                transition: "color 0.3s",
              }}
            >
              <Search style={{ width: 17, height: 17 }} />
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              className="nav-icon-btn"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 32, height: 32,
                color: lightNav ? "rgba(245,237,224,0.55)" : "var(--text-3)",
                background: "transparent",
                border: "none", cursor: "pointer",
                transition: "color 0.3s",
              }}
            >
              {dark ? <Sun style={{ width: 16, height: 16 }} /> : <Moon style={{ width: 16, height: 16 }} />}
            </button>

            {/* Seek Advice — icon only to save space */}
            <Link
              href="/advice"
              aria-label="Seek Advice"
              title="Seek Advice"
              className="hidden lg:inline-flex nav-icon-btn"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 32, height: 32,
                color: lightNav ? "rgba(245,237,224,0.55)" : "var(--text-3)",
                background: "transparent", border: "none",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = lightNav ? "rgba(245,237,224,1)" : "var(--text)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = lightNav ? "rgba(245,237,224,0.55)" : "var(--text-3)"; }}
            >
              <HelpCircle style={{ width: 17, height: 17 }} />
            </Link>

            {/* Advertise — gold accent CTA */}
            <Link
              href="/advertise"
              className="hidden xl:inline-flex items-center"
              style={{
                padding: "0 14px", height: 32,
                fontSize: 10, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                color: "#1A1410",
                background: "#CEB07A",
                textDecoration: "none", whiteSpace: "nowrap",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#B89860"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#CEB07A"; }}
            >
              Advertise
            </Link>

            {/* Auth */}
            {userEmail ? (
              <div ref={userMenuRef} style={{ position: "relative" }} className="hidden lg:block">
                <button
                  onClick={() => setUserMenuOpen(v => !v)}
                  onMouseEnter={openUserMenu}
                  onMouseLeave={scheduleUserMenuClose}
                  aria-expanded={userMenuOpen}
                  aria-haspopup="menu"
                  className="nav-icon-btn"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: 32, height: 32,
                    borderRadius: "50%",
                    background: "var(--sf)",
                    color: "#fff", fontSize: 12, fontWeight: 800,
                    border: "none", cursor: "pointer",
                  }}
                >
                  {userEmail.charAt(0).toUpperCase()}
                </button>

                {userMenuOpen && (
                  <div
                    role="menu"
                    onMouseEnter={cancelUserMenuClose}
                    onMouseLeave={scheduleUserMenuClose}
                    style={{
                      position: "absolute", top: "calc(100% + 10px)", right: 0,
                      background: "var(--surface)", border: "1px solid var(--border-2)",
                      borderRadius: 2, padding: 6, minWidth: 200,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                      zIndex: 70,
                      animation: "userMenuIn 0.15s cubic-bezier(0.16,1,0.3,1) both",
                    }}
                  >
                    <style>{`@keyframes userMenuIn { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:none; } }`}</style>
                    <div style={{ padding: "10px 14px 12px", borderBottom: "1px solid var(--border)", marginBottom: 4 }}>
                      <div style={{ fontSize: 9, color: "var(--text-3)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 3 }}>Signed in as</div>
                      <div style={{ fontSize: 13, color: "var(--text)", fontWeight: 600, wordBreak: "break-all" }}>{userEmail}</div>
                    </div>
                    {isAdmin && (
                      <Link
                        href="/admin"
                        role="menuitem"
                        onClick={() => setUserMenuOpen(false)}
                        className="user-menu-item"
                        style={{ display: "flex", alignItems: "center", gap: 9, padding: "9px 14px", borderRadius: 2, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--sf)", fontWeight: 700, textDecoration: "none", transition: "background 0.12s" }}
                      >
                        <Settings size={14} style={{ flexShrink: 0 }} /> Admin
                      </Link>
                    )}
                    <button
                      role="menuitem"
                      onClick={signOut}
                      className="user-menu-item"
                      style={{ display: "flex", alignItems: "center", gap: 9, padding: "9px 14px", borderRadius: 2, fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-2)", fontWeight: 600, width: "100%", border: "none", background: "none", cursor: "pointer", textAlign: "left", transition: "background 0.12s" }}
                    >
                      <LogOut size={14} style={{ flexShrink: 0 }} /> Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="hidden lg:inline-flex items-center gap-1.5 nav-icon-btn"
                  style={{
                    padding: "0 14px", height: 32,
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    color: lightNav ? "rgba(245,237,224,0.7)" : "var(--text-2)",
                    background: "transparent",
                    border: lightNav ? "1px solid rgba(245,237,224,0.3)" : "1px solid var(--border-hi)",
                    textDecoration: "none",
                    transition: "color 0.3s, border-color 0.3s",
                    display: "inline-flex", alignItems: "center",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = lightNav ? "rgba(245,237,224,1)" : "var(--text)"; (e.currentTarget as HTMLElement).style.borderColor = lightNav ? "rgba(245,237,224,0.7)" : "var(--text)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = lightNav ? "rgba(245,237,224,0.7)" : "var(--text-2)"; (e.currentTarget as HTMLElement).style.borderColor = lightNav ? "rgba(245,237,224,0.3)" : "var(--border-hi)"; }}
                >
                  Sign in
                </Link>
                <Link
                  href="/join"
                  className="hidden lg:inline-flex items-center"
                  style={{
                    padding: "0 14px", height: 32,
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase",
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    color: "#1A1410",
                    background: lightNav ? "rgba(206,176,122,0.9)" : "#CEB07A",
                    textDecoration: "none", whiteSpace: "nowrap",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#B89860"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = lightNav ? "rgba(206,176,122,0.9)" : "#CEB07A"; }}
                >
                  <UserPlus style={{ width: 11, height: 11, marginRight: 5 }} />
                  Join
                </Link>
              </>
            )}

            {/* Mobile hamburger — labeled "Menu" per NNG guidance */}
            <button
              className="lg:hidden nav-icon-btn"
              style={{
                display: "flex", alignItems: "center", gap: 5,
                padding: "0 10px", height: 36, borderRadius: 10,
                color: lightNav ? "rgba(245,237,224,0.8)" : "var(--text-2)",
                background: lightNav ? "rgba(255,255,255,0.08)" : "var(--surface-2)",
                border: lightNav ? "1px solid rgba(245,237,224,0.2)" : "1px solid var(--border)",
                cursor: "pointer",
                fontSize: 12, fontWeight: 600,
                transition: "color 0.3s, background 0.3s, border-color 0.3s",
              }}
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-nav-drawer"
            >
              <Menu style={{ width: 16, height: 16, flexShrink: 0 }} />
              <span>Menu</span>
            </button>
          </div>
        </div>
      </nav>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile dropdown — compact panel from top-right */}
      {isOpen && (
        <div
          id="mobile-nav-drawer"
          style={{ position: "fixed", inset: 0, zIndex: 200 }}
          role="dialog" aria-modal aria-label="Navigation menu"
        >
          <style>{`
            @keyframes mnDrop { from { opacity:0; transform:scale(0.96) translateY(-6px); transform-origin:top right; } to { opacity:1; transform:none; } }
            .mn-sub-grid { display:grid; grid-template-columns:1fr 1fr; gap:2px; }
            .mn-sub-link { padding:6px 8px; border-radius:8px; font-size:11.5px; text-decoration:none; display:block; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; transition:background 0.12s; }
            .mn-sub-link:hover { background:var(--surface-2); }
          `}</style>
          {/* Backdrop */}
          <div onClick={() => setIsOpen(false)} style={{ position: "absolute", inset: 0 }} />

          {/* Panel */}
          <div style={{
            position: "absolute", top: 68, right: 8,
            width: "min(300px, calc(100vw - 16px))",
            maxHeight: "calc(100svh - 84px)",
            overflowY: "auto",
            background: "var(--surface)",
            border: "1px solid var(--border-2)",
            borderRadius: 18,
            boxShadow: "0 12px 48px rgba(0,0,0,0.22)",
            animation: "mnDrop 0.22s cubic-bezier(0.16,1,0.3,1) both",
          }}>

            {/* Search shortcut row */}
            <button
              onClick={() => { setIsOpen(false); setSearchOpen(true); }}
              style={{
                width: "100%", display: "flex", alignItems: "center", gap: 8,
                padding: "10px 12px",
                borderBottom: "1px solid var(--border)",
                background: "transparent", cursor: "pointer",
              }}
            >
              <Search size={13} style={{ color: "var(--text-3)", flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: "var(--text-3)", flex: 1, textAlign: "left" }}>Search indiaspora…</span>
              <kbd style={{ fontSize: 9, padding: "1px 5px", borderRadius: 4, border: "1px solid var(--border)", color: "var(--text-3)", fontFamily: "monospace" }}>⌘K</kbd>
            </button>

            {/* Nav items */}
            <div style={{ padding: "6px 6px 4px" }}>
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + "/");
                const expanded = mobileOpen === item.label;
                return (
                  <div key={item.label} style={{ marginBottom: 1 }}>
                    <div style={{
                      display: "flex", alignItems: "center",
                      borderRadius: 11,
                      background: active ? "var(--sf-bg)" : "transparent",
                    }}>
                      <Link
                        href={item.href}
                        onClick={() => { if (!item.children) setIsOpen(false); }}
                        className="mobile-link"
                        style={{
                          flex: 1, padding: "7px 9px",
                          display: "flex", alignItems: "center", gap: 9,
                          fontSize: 13.5, fontWeight: active ? 700 : 500,
                          color: active ? "var(--sf-hi)" : "var(--text)",
                          textDecoration: "none",
                        }}
                      >
                        {NAV_ICONS[item.label] && (
                          <span style={{
                            display: "flex", alignItems: "center", justifyContent: "center",
                            width: 26, height: 26, borderRadius: 7, flexShrink: 0,
                            background: active ? "rgba(184,154,98,0.20)" : "var(--surface-2)",
                            color: active ? "var(--sf-hi)" : "var(--text-3)",
                          }}>
                            {NAV_ICONS[item.label]}
                          </span>
                        )}
                        {item.label}
                      </Link>
                      {item.children && (
                        <button
                          onClick={() => setMobileOpen(expanded ? null : item.label)}
                          aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label}`}
                          style={{
                            width: 32, height: 34, flexShrink: 0,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: expanded ? "var(--sf-hi)" : "var(--text-3)",
                            background: "transparent", border: "none", cursor: "pointer",
                          }}
                        >
                          <ChevronDown style={{
                            width: 12, height: 12,
                            transition: "transform 0.18s",
                            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                          }} />
                        </button>
                      )}
                    </div>

                    {/* Sub-items — 2-column grid to reduce height */}
                    {item.children && expanded && (
                      <div style={{
                        margin: "2px 4px 6px 12px",
                        padding: "6px 8px 4px",
                        borderLeft: "2px solid rgba(184,154,98,0.25)",
                        paddingLeft: 10,
                      }}>
                        <div className="mn-sub-grid">
                          {item.children.map((child) => {
                            const childActive = pathname === child.href || pathname.startsWith(child.href + "/");
                            return (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className="mn-sub-link"
                                style={{
                                  fontWeight: childActive ? 600 : 400,
                                  color: childActive ? "var(--sf-hi)" : "var(--text-2)",
                                  background: childActive ? "var(--sf-bg)" : "transparent",
                                }}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Divider + utility actions */}
            <div style={{ borderTop: "1px solid var(--border)", padding: "6px 6px 4px", display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/advice" onClick={() => setIsOpen(false)} className="mobile-link"
                style={{ padding: "7px 10px", borderRadius: 11, fontSize: 13, fontWeight: 500, color: "var(--text)", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
                <HelpCircle size={14} style={{ flexShrink: 0, color: "var(--text-3)" }} /> Seek Advice
              </Link>
              {userEmail ? (
                <button onClick={signOut} style={{ padding: "7px 10px", borderRadius: 11, fontSize: 13, fontWeight: 500, color: "var(--text-2)", background: "none", border: "none", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 8 }}>
                  <LogOut size={14} style={{ flexShrink: 0, color: "var(--text-3)" }} /> Sign out ({userEmail.split("@")[0]})
                </button>
              ) : (
                <div style={{ display: "flex", gap: 6, padding: "4px 2px 6px" }}>
                  <Link href="/login" onClick={() => setIsOpen(false)}
                    style={{ flex: 1, padding: "8px 0", borderRadius: 10, fontSize: 12, fontWeight: 600, color: "var(--text-2)", textDecoration: "none", textAlign: "center", border: "1px solid var(--border-hi)", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                    <User size={13} /> Sign in
                  </Link>
                  <Link href="/join" onClick={() => setIsOpen(false)}
                    style={{ flex: 1, padding: "8px 0", borderRadius: 10, fontSize: 12, fontWeight: 700, color: "#1A1410", background: "#CEB07A", textDecoration: "none", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                    <UserPlus size={13} /> Join Free
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <JoinModal open={joinOpen} onClose={() => setJoinOpen(false)} />
    </>
  );
}
