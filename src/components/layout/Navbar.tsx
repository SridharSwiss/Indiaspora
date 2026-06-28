"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#05081a]/95 border-b border-white/[0.06] shadow-2xl shadow-black/40"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-9 h-9">
              <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
                <circle cx="20" cy="20" r="18" stroke="url(#navLogoGrad)" strokeWidth="2" />
                <circle cx="20" cy="20" r="8" fill="url(#navLogoGrad)" opacity="0.9" />
                {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
                  <line
                    key={i}
                    x1="20" y1="12" x2="20" y2="4"
                    stroke="url(#navLogoGrad)" strokeWidth="1.5" strokeLinecap="round"
                    transform={`rotate(${deg} 20 20)`}
                  />
                ))}
                <defs>
                  <linearGradient id="navLogoGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <div className="font-bold text-lg leading-tight tracking-wide">
                <span className="gradient-text">India</span>
                <span className="text-white">Swiss</span>
              </div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest leading-tight hidden sm:block">
                Community Hub
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive
                        ? "text-orange-400 bg-orange-500/10"
                        : "text-slate-300 hover:text-white hover:bg-white/8"
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          activeMenu === item.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {item.children && activeMenu === item.label && (
                    <div className="absolute top-full left-0 pt-2 min-w-[220px]">
                      <div
                        className="rounded-xl p-2 shadow-2xl shadow-black/60 border border-white/[0.08]"
                        style={{ background: "#0b1225" }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/8 transition-colors"
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

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2">
            <button className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/8 transition-colors" aria-label="Search">
              <Search className="w-4 h-4" />
            </button>
            <Link
              href="/community"
              className="ml-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-px"
              style={{ background: "linear-gradient(135deg, #f97316, #f59e0b)" }}
            >
              Join Community
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/8 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden border-t border-white/[0.06]"
          style={{ background: "#05081a" }}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <div key={item.label}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                        isActive ? "text-orange-400" : "text-slate-300 hover:text-white hover:bg-white/8"
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        className="p-2 text-slate-400 hover:text-white"
                        onClick={() => setActiveMenu(activeMenu === item.label ? null : item.label)}
                        aria-label="Toggle submenu"
                      >
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform",
                            activeMenu === item.label && "rotate-180"
                          )}
                        />
                      </button>
                    )}
                  </div>
                  {item.children && activeMenu === item.label && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/8 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="pt-4 border-t border-white/[0.06]">
              <Link
                href="/community"
                className="block w-full text-center px-4 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #f97316, #f59e0b)" }}
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
