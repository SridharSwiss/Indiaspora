"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const footerLinks = {
  Community: [
    { label: "Indian Associations", href: "/community/associations" },
    { label: "Temples & Spiritual", href: "/community/spiritual" },
    { label: "Women's Network", href: "/community/women" },
    { label: "Student Groups", href: "/community/students" },
  ],
  "Living Guide": [
    { label: "Welcome to Switzerland", href: "/living/welcome" },
    { label: "Housing & Rentals", href: "/living/housing" },
    { label: "Healthcare", href: "/living/healthcare" },
    { label: "Schools & Education", href: "/living/education" },
    { label: "Banking & Finance", href: "/living/banking" },
    { label: "Legal & Immigration", href: "/living/legal" },
  ],
  "Food & Culture": [
    { label: "Indian Restaurants", href: "/food/restaurants" },
    { label: "Grocery Stores", href: "/food/grocery" },
    { label: "Festivals & Events", href: "/culture/festivals" },
    { label: "Music & Dance", href: "/culture/arts" },
  ],
  Business: [
    { label: "Networking", href: "/business/networking" },
    { label: "Jobs & Careers", href: "/business/jobs" },
    { label: "Startups", href: "/business/startups" },
    { label: "Professional Services", href: "/business/services" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/5 mandala-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 safe-bottom">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 shrink-0">
                <circle cx="20" cy="20" r="18" stroke="url(#footerLogoGrad)" strokeWidth="2" />
                <circle cx="20" cy="20" r="8" fill="url(#footerLogoGrad)" opacity="0.9" />
                {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
                  <line key={i} x1="20" y1="12" x2="20" y2="4" stroke="url(#footerLogoGrad)" strokeWidth="1.5" strokeLinecap="round" transform={`rotate(${deg} 20 20)`} />
                ))}
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <div className="font-bold text-xl">
                  <span className="gradient-text">India</span>
                  <span className="text-white">Swiss</span>
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">Community Hub</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              The premier platform connecting 30,000+ Indians across Switzerland. Your one-stop resource for community, culture, business, and daily life.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Zurich, Switzerland</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="mailto:hello@indiaswiss.ch" className="hover:text-orange-400 transition-colors">hello@indiaswiss.ch</a>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              {["F", "I", "L", "W"].map((s, i) => (
                <button key={i} className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/15 transition-colors text-xs font-bold" aria-label={["Facebook","Instagram","LinkedIn","WhatsApp"][i]}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4 uppercase tracking-wider">{heading}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs sm:text-sm text-slate-400 hover:text-orange-400 transition-colors leading-relaxed">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="glass rounded-2xl p-5 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Stay Connected</h3>
              <p className="text-slate-400 text-sm">Weekly newsletter with events, news, and community updates</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input type="email" placeholder="your@email.com" className="flex-1 sm:w-56 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-orange-500/50 min-h-[44px]" />
              <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold hover:from-orange-600 hover:to-amber-600 transition-all whitespace-nowrap min-h-[44px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/5">
          <p className="text-xs text-slate-500">© 2026 IndiaSwiss Community Hub. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Policy", "Advertise"].map((item) => (
              <Link key={item} href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
