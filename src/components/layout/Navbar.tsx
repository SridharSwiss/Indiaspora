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
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); setActiveMenu(null); }, [pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? { background: "rgba(7,8,15,0.92)", borderBottom: "1px solid rgba(255,255,255,0.06)" }
          : { background: "transparent" }
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #f97316, #d97706)" }}>
              <svg viewBox="0 0 24 24" fill="none" className="w-4.5 h-4.5">
                <circle cx="12" cy="12" r="4" fill="white" opacity="0.95" />
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
                  <line key={i} x1="12" y1="7" x2="12" y2="3" stroke="white" strokeWidth="1.5" strokeLinecap="round" transform={`rotate(${deg} 12 12)`} />
                ))}
              </svg>
            </div>
            <span className="font-semibold text-[15px] tracking-tight">
              <span className="gradient-text">India</span>
              <span className="text-white">Swiss</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors"
                    style={{
                      color: active ? "#a5b4fc" : "#94a3b8",
                      background: active ? "rgba(99,102,241,0.1)" : "transparent",
                    }}
                    onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "#f1f5f9"; }}
                    onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeMenu === item.label ? "rotate-180" : ""}`} />
                    )}
                  </Link>

                  {item.children && activeMenu === item.label && (
                    <div className="absolute top-full left-0 pt-2 w-52">
                      <div className="rounded-xl py-1.5 shadow-2xl" style={{ background: "#0c0f1e", border: "1px solid rgba(255,255,255,0.08)" }}>
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-[13px] text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Link href="/events" className="btn btn-ghost text-[13px]">Events</Link>
            <Link
              href="/community"
              className="btn btn-primary btn-sm text-[13px]"
            >
              Join Community
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.05)" }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div style={{ background: "#07080f", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-0.5 max-h-[75vh] overflow-y-auto">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <div key={item.label}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                      style={{ color: active ? "#a5b4fc" : "#94a3b8" }}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        className="p-2 text-slate-500 hover:text-white"
                        onClick={() => setActiveMenu(activeMenu === item.label ? null : item.label)}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === item.label ? "rotate-180" : ""}`} />
                      </button>
                    )}
                  </div>
                  {item.children && activeMenu === item.label && (
                    <div className="ml-3 mb-1 space-y-0.5 pl-3" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
                      {item.children.map((child) => (
                        <Link key={child.label} href={child.href} className="block px-3 py-2 text-[13px] text-slate-500 hover:text-slate-300 transition-colors">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="pt-4 pb-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <Link href="/community" className="btn btn-primary w-full justify-center text-sm">
                Join Community
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
