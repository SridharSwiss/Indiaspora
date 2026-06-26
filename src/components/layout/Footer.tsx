"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const footerLinks = {
  Community: [
    { label: "Indian Associations", href: "#associations" },
    { label: "Temples & Spiritual", href: "#spiritual" },
    { label: "Women's Network", href: "#women" },
    { label: "Student Groups", href: "#students" },
  ],
  "Living Guide": [
    { label: "Welcome to Switzerland", href: "#welcome" },
    { label: "Housing & Rentals", href: "#housing" },
    { label: "Healthcare", href: "#healthcare" },
    { label: "Schools & Education", href: "#education" },
  ],
  "Food & Culture": [
    { label: "Indian Restaurants", href: "#restaurants" },
    { label: "Grocery Stores", href: "#grocery" },
    { label: "Festivals & Events", href: "#festivals" },
    { label: "Arts & Music", href: "#arts" },
  ],
  Business: [
    { label: "Networking", href: "#networking" },
    { label: "Jobs & Careers", href: "#jobs" },
    { label: "Startups", href: "#startups" },
    { label: "Professional Services", href: "#services" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/5 mandala-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
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
                <div className="font-bold text-xl"><span className="gradient-text">India</span><span className="text-white">Swiss</span></div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">Community Hub</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">The premier platform connecting 30,000+ Indians across Switzerland. Your one-stop resource for community, culture, business, and daily life.</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-400"><MapPin className="w-4 h-4 text-orange-500 shrink-0" /><span>Zurich, Switzerland</span></div>
              <div className="flex items-center gap-2 text-sm text-slate-400"><Mail className="w-4 h-4 text-orange-500 shrink-0" /><span>hello@indiaswiss.ch</span></div>
            </div>
            <div className="flex gap-3 mt-6">
              {["F", "I", "L", "W"].map((s) => (
                <button key={s} className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/15 transition-colors text-xs font-bold">{s}</button>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{heading}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}><Link href={link.href} className="text-sm text-slate-400 hover:text-orange-400 transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="glass rounded-2xl p-6 lg:p-8 mb-10">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1">Stay Connected</h3>
              <p className="text-slate-400 text-sm">Weekly newsletter with events, news, and community updates</p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input type="email" placeholder="your@email.com" className="flex-1 lg:w-64 px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-orange-500/50" />
              <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold hover:from-orange-600 hover:to-amber-600 transition-all whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <p className="text-xs text-slate-500">© 2026 IndiaSwiss Community Hub. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Policy", "Advertise"].map((item) => (
              <Link key={item} href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
