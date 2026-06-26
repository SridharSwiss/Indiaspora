"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Search, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass-strong shadow-2xl shadow-black/30"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                <circle cx="20" cy="20" r="18" stroke="url(#logoGrad)" strokeWidth="2" />
                <circle cx="20" cy="20" r="8" fill="url(#logoGrad)" opacity="0.9" />
                {[0,30,60,90,120,150,180,210,240,270,300,330,360].map((deg, i) => (
                  <line
                    key={i}
                    x1="20"
                    y1="12"
                    x2="20"
                    y2="4"
                    stroke="url(#logoGrad)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    transform={`rotate(${deg} 20 20)`}
                  />
                ))}
                <defs>
                  <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
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
              <div className="text-[10px] text-slate-400 uppercase tracking-widest leading-tight">
                Community Hub
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    "text-slate-300 hover:text-white hover:bg-white/10"
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
                </button>

                {item.children && activeMenu === item.label && (
                  <div className="absolute top-full left-0 pt-2 min-w-[220px]">
                    <div className="glass-strong rounded-xl p-2 shadow-2xl shadow-black/50">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
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

          <div className="hidden lg:flex items-center gap-2">
            <button className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
              <Bell className="w-4 h-4" />
            </button>
            <button className="ml-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40">
              Join Community
            </button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden glass-strong border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <button
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  onClick={() =>
                    setActiveMenu(activeMenu === item.label ? null : item.label)
                  }
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        activeMenu === item.label && "rotate-180"
                      )}
                    />
                  )}
                </button>
                {item.children && activeMenu === item.label && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-white/10">
              <button className="w-full px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                Join Community
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
