"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Search, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  const isActive = (href: string) => pathname.startsWith(href) && href !== "/";

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
        scrolled ? "glass-strong shadow-2xl shadow-black/40" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0" aria-label="IndiaSwiss Home">
            <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
              <circle cx="20" cy="20" r="18" stroke="url(#ng)" strokeWidth="1.5" />
              <circle cx="20" cy="20" r="8" fill="url(#ng)" opacity="0.9" />
              {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
                <line key={i} x1="20" y1="12" x2="20" y2="5" stroke="url(#ng)" strokeWidth="1.5" strokeLinecap="round" transform={`rotate(${deg} 20 20)`} />
              ))}
              <defs>
                <linearGradient id="ng" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F0950C" />
                  <stop offset="100%" stopColor="#FBBA1E" />
                </linearGradient>
              </defs>
            </svg>
            <div className="leading-none">
              <div className="font-black text-[17px] tracking-tight">
                <span className="gradient-text">India</span>
                <span className="text-white">Swiss</span>
              </div>
              <div className="text-[9px] text-[var(--text-dim)] uppercase tracking-[0.25em] mt-0.5">Community Hub</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {item.children ? (
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive(item.href)
                        ? "text-[var(--saffron)] bg-[rgba(240,149,12,0.08)]"
                        : "text-[var(--text-muted)] hover:text-white hover:bg-white/8"
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn("w-3 h-3 transition-transform duration-200", activeMenu === item.label && "rotate-180")} />
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 block",
                      isActive(item.href)
                        ? "text-[var(--saffron)] bg-[rgba(240,149,12,0.08)]"
                        : "text-[var(--text-muted)] hover:text-white hover:bg-white/8"
                    )}
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && activeMenu === item.label && (
                  <div className="absolute top-full left-0 pt-2 min-w-[220px] z-50">
                    <div className="glass-strong rounded-2xl p-2 shadow-2xl shadow-black/60 border border-[var(--border-mid)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={cn(
                            "block px-3 py-2.5 rounded-xl text-sm transition-colors",
                            pathname === child.href
                              ? "text-[var(--saffron)] bg-[rgba(240,149,12,0.1)]"
                              : "text-[var(--text-muted)] hover:text-white hover:bg-white/8"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-1.5">
            <button
              aria-label="Search"
              className="p-2.5 rounded-xl text-[var(--text-muted)] hover:text-white hover:bg-white/8 transition-colors"
            >
              <Search className="w-4 h-4" aria-hidden />
            </button>
            <button
              aria-label="Notifications"
              className="p-2.5 rounded-xl text-[var(--text-muted)] hover:text-white hover:bg-white/8 transition-colors"
            >
              <Bell className="w-4 h-4" aria-hidden />
            </button>
            <Link
              href="/community"
              className="ml-1 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-[var(--saffron)] to-[var(--saffron-hi)] text-white hover:opacity-90 transition-all shadow-lg shadow-[rgba(240,149,12,0.25)] hover:shadow-[rgba(240,149,12,0.4)] hover:scale-[1.02]"
            >
              Join Community
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2.5 rounded-xl text-[var(--text-muted)] hover:text-white hover:bg-white/8 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-5 h-5" aria-hidden /> : <Menu className="w-5 h-5" aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "lg:hidden border-t border-[var(--border)] glass-strong transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-[80dvh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 space-y-0.5 overflow-y-auto max-h-[75dvh] safe-bottom">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-colors min-h-[48px]",
                      isActive(item.href)
                        ? "text-[var(--saffron)] bg-[rgba(240,149,12,0.08)]"
                        : "text-[var(--text-muted)] hover:text-white hover:bg-white/8"
                    )}
                    onClick={() => setActiveMenu(activeMenu === item.label ? null : item.label)}
                    aria-expanded={activeMenu === item.label}
                  >
                    {item.label}
                    <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", activeMenu === item.label && "rotate-180")} aria-hidden />
                  </button>
                  {activeMenu === item.label && (
                    <div className="ml-4 mt-0.5 mb-1 space-y-0.5">
                      <Link
                        href={item.href}
                        className="block px-4 py-3 rounded-xl text-sm text-[var(--saffron)] font-medium min-h-[44px] flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        View all {item.label} →
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-3 rounded-xl text-sm text-[var(--text-muted)] hover:text-white hover:bg-white/8 transition-colors min-h-[44px] flex items-center"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "block px-4 py-3.5 rounded-xl text-sm font-medium transition-colors min-h-[48px] flex items-center",
                    isActive(item.href)
                      ? "text-[var(--saffron)] bg-[rgba(240,149,12,0.08)]"
                      : "text-[var(--text-muted)] hover:text-white hover:bg-white/8"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-3 pb-2 border-t border-[var(--border)] mt-2">
            <Link
              href="/community"
              className="block w-full px-4 py-3.5 rounded-xl text-sm font-semibold text-center bg-gradient-to-r from-[var(--saffron)] to-[var(--saffron-hi)] text-white min-h-[48px] flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
