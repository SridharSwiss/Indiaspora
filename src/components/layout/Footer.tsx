"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const footerLinks = {
  Community: [
    { label: "Associations & Clubs", href: "/community/associations" },
    { label: "Temples & Spiritual",  href: "/community/spiritual" },
    { label: "Women's Network",      href: "/community/women" },
    { label: "Student Groups",       href: "/community/students" },
  ],
  "Living Guide": [
    { label: "Welcome to Switzerland", href: "/living/welcome" },
    { label: "Housing & Rentals",     href: "/living/housing" },
    { label: "Healthcare",            href: "/living/healthcare" },
    { label: "Banking & Finance",     href: "/living/banking" },
  ],
  "Food & Culture": [
    { label: "Indian Restaurants",   href: "/food/restaurants" },
    { label: "Grocery Stores",       href: "/food/grocery" },
    { label: "Festivals & Events",   href: "/culture/festivals" },
    { label: "Arts & Dance",         href: "/culture/arts" },
  ],
  Business: [
    { label: "Networking",           href: "/business/networking" },
    { label: "Jobs & Careers",       href: "/business/jobs" },
    { label: "Startups",             href: "/business/startups" },
    { label: "Professional Services", href: "/business/services" },
  ],
};

const socialLinks = [
  { id: "fb", label: "Facebook", c: "f", href: "https://www.facebook.com/groups/indian.association.of.greater.zurich/" },
  { id: "ig", label: "Instagram", c: "in", href: "https://www.instagram.com/indian_association_of_geneva/" },
  { id: "li", label: "LinkedIn", c: "li", href: "https://www.linkedin.com/search/results/groups/?keywords=Indian%20professionals%20Switzerland" },
  { id: "wa", label: "WhatsApp", c: "w", href: "https://wa.me/?text=IndiaSwiss%20Community%20Hub%20-%20https%3A%2F%2Findiaswiss.ch" },
];

function IndianFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 60" className={className} aria-label="Indian flag" role="img">
      <rect width="90" height="20" fill="#FF9933" />
      <rect y="20" width="90" height="20" fill="#ffffff" />
      <rect y="40" width="90" height="20" fill="#138808" />
      {/* Ashoka Chakra */}
      <circle cx="45" cy="30" r="8" stroke="#000080" strokeWidth="1.2" fill="none" />
      <circle cx="45" cy="30" r="1.5" fill="#000080" />
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1="45" y1="30" x2="45" y2="22.5"
          stroke="#000080" strokeWidth="0.6"
          transform={`rotate(${i * 15} 45 30)`}
        />
      ))}
    </svg>
  );
}

function SwissFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-label="Swiss flag" role="img">
      <rect width="60" height="60" rx="4" fill="#D52B1E" />
      <rect x="24" y="10" width="12" height="40" fill="white" />
      <rect x="10" y="24" width="40" height="12" fill="white" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative border-t border-[var(--border)] mandala-bg"
      style={{ background: "var(--base)" }}
    >
      {/* Tricolor top stripe */}
      <div className="tricolor-bar h-[2px] w-full" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            {/* Flags */}
            <div className="flex items-center gap-3 mb-5">
              <IndianFlag className="h-5 w-auto rounded-sm shadow-sm" />
              <span className="text-[var(--text-dim)] text-xs">&times;</span>
              <SwissFlag className="h-5 w-5 rounded-sm shadow-sm" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9 shrink-0" aria-hidden>
                <circle cx="20" cy="20" r="18" stroke="url(#fG2)" strokeWidth="1.5" />
                <circle cx="20" cy="20" r="8"  fill="url(#fG2)" opacity="0.9" />
                {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
                  <line key={i} x1="20" y1="12" x2="20" y2="5" stroke="url(#fG2)" strokeWidth="1.5" strokeLinecap="round" transform={`rotate(${deg} 20 20)`} />
                ))}
                <defs>
                  <linearGradient id="fG2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%"   stopColor="#FF9933" />
                    <stop offset="100%" stopColor="#FFB347" />
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
              {socialLinks.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-[var(--border-mid)] transition-all text-[10px] font-bold uppercase min-h-[44px]"
                >
                  {s.c}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-[10px] font-semibold text-white mb-4 uppercase tracking-[0.18em]">{heading}</h3>
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
        <div className="rounded-2xl p-6 lg:p-8 mb-10 border border-[var(--border-mid)]" style={{ background: "var(--surface-2)" }}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-8">
            <div className="flex-1">
              <h3 className="text-base font-semibold text-white mb-1">Stay Connected</h3>
              <p className="text-[var(--text-muted)] text-sm">Weekly newsletter — events, news, and community updates</p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="your@email.com"
                className="flex-1 lg:w-64 px-4 py-3 rounded-xl border border-[var(--border)] text-white placeholder:text-[var(--text-dim)] text-sm focus:outline-none focus:border-[var(--saffron)] transition-colors"
                style={{ background: "rgba(255,230,180,0.04)", fontSize: "16px" }}
              />
              <button
                className="px-5 py-3 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-all whitespace-nowrap shadow-lg min-h-[48px]"
                style={{ background: "linear-gradient(135deg, var(--saffron), var(--saffron-hi))", boxShadow: "var(--glow-saffron)" }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--border)]">
          <div className="flex items-center gap-3">
            <IndianFlag className="h-3.5 w-auto rounded-[1px] opacity-60" />
            <span className="text-[var(--text-dim)] text-[10px]">+</span>
            <SwissFlag className="h-3.5 w-3.5 rounded-[1px] opacity-60" />
            <p className="text-xs text-[var(--text-dim)]">&copy; 2026 IndiaSwiss Community Hub.</p>
          </div>
          <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            <Link href="/privacy" className="text-xs text-[var(--text-dim)] hover:text-[var(--text-muted)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-[var(--text-dim)] hover:text-[var(--text-muted)] transition-colors">Terms of Use</Link>
            <Link href="/privacy#cookies" className="text-xs text-[var(--text-dim)] hover:text-[var(--text-muted)] transition-colors">Cookie Policy</Link>
            <a href="mailto:hello@indiaswiss.ch?subject=Advertising%20Enquiry" className="text-xs text-[var(--text-dim)] hover:text-[var(--text-muted)] transition-colors">Advertise</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
