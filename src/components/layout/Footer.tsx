"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const footerLinks = {
  Community: [
    { label: "Associations & Clubs", href: "/community/associations" },
    { label: "Temples & Spiritual", href: "/community/spiritual" },
    { label: "Women's Network", href: "/community/women" },
    { label: "Student Groups", href: "/community/students" },
  ],
  "Living Guide": [
    { label: "Welcome to Switzerland", href: "/living/welcome" },
    { label: "Housing & Rentals", href: "/living/housing" },
    { label: "Healthcare", href: "/living/healthcare" },
    { label: "Banking & Finance", href: "/living/banking" },
  ],
  "Food & Culture": [
    { label: "Indian Restaurants", href: "/food/restaurants" },
    { label: "Grocery Stores", href: "/food/grocery" },
    { label: "Festivals & Events", href: "/culture/festivals" },
    { label: "Arts & Dance", href: "/culture/arts" },
  ],
  Business: [
    { label: "Networking", href: "/business/networking" },
    { label: "Jobs & Careers", href: "/business/jobs" },
    { label: "Startups", href: "/business/startups" },
    { label: "Professional Services", href: "/business/services" },
  ],
};

const socials = [
  { id: "facebook",  label: "Facebook",  char: "f" },
  { id: "instagram", label: "Instagram", char: "in" },
  { id: "linkedin",  label: "LinkedIn",  char: "li" },
  { id: "whatsapp",  label: "WhatsApp",  char: "w" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] mandala-bg" style={{ background: "var(--base)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">

        {/* Main grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9" aria-hidden="true">
                <circle cx="20" cy="20" r="18" stroke="url(#fLg)" strokeWidth="1.5" />
                <circle cx="20" cy="20" r="8" fill="url(#fLg)" opacity="0.9" />
                {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
                  <line key={i} x1="20" y1="12" x2="20" y2="5" stroke="url(#fLg)" strokeWidth="1.5" strokeLinecap="round" transform={`rotate(${deg} 20 20)`} />
                ))}
                <defs>
                  <linearGradient id="fLg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#F0950C" />
                    <stop offset="100%" stopColor="#FBBA1E" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="leading-none">
                <div className="font-black text-[17px]">
                  <span className="gradient-text">India</span>
                  <span className="text-white">Swiss</span>
                </div>
                <div className="text-[9px] text-[var(--text-dim)] uppercase tracking-[0.25em] mt-0.5">Community Hub</div>
              </div>
            </div>

            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5 max-w-xs">
              The premier platform connecting 30,000+ Indians across Switzerland — community, culture, business, and daily life.
            </p>

            <div className="space-y-2.5 mb-6">
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <MapPin className="w-4 h-4 text-[var(--saffron)] shrink-0" aria-hidden />
                <span>Zurich, Switzerland</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <Mail className="w-4 h-4 text-[var(--saffron)] shrink-0" aria-hidden />
                <a href="mailto:hello@indiaswiss.ch" className="hover:text-white transition-colors">hello@indiaswiss.ch</a>
              </div>
            </div>

            <div className="flex gap-2">
              {socials.map((s) => (
                <button
                  key={s.id}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:bg-white/12 hover:border-[var(--border-mid)] transition-all text-[10px] font-bold uppercase"
                >
                  {s.char}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs font-semibold text-white mb-4 uppercase tracking-[0.15em]">{heading}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-muted)] hover:text-[var(--saffron)] transition-colors leading-snug"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="glass rounded-2xl p-6 lg:p-8 mb-10 border border-[var(--border-mid)]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-8">
            <div className="flex-1">
              <h3 className="text-base font-semibold text-white mb-1">Stay Connected</h3>
              <p className="text-[var(--text-muted)] text-sm">Weekly newsletter with events, news, and community updates</p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="your@email.com"
                className="flex-1 lg:w-64 px-4 py-3 rounded-xl bg-white/6 border border-[var(--border)] text-white placeholder:text-[var(--text-dim)] text-sm focus:outline-none focus:border-[var(--saffron)] transition-colors"
              />
              <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--saffron)] to-[var(--saffron-hi)] text-white text-sm font-semibold hover:opacity-90 transition-all whitespace-nowrap shadow-lg shadow-[rgba(240,149,12,0.2)]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--text-dim)] text-center sm:text-left">
            &copy; 2026 IndiaSwiss Community Hub. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {["Privacy Policy", "Terms of Use", "Cookie Policy", "Advertise"].map((item) => (
              <Link key={item} href="#" className="text-xs text-[var(--text-dim)] hover:text-[var(--text-muted)] transition-colors">
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
