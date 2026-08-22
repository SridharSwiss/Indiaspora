"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

// Footer structured as semantic sections so users can scan by intent (Baymard/NNG principle)
const footerSections = [
  {
    heading: "Community",
    links: [
      { label: "Associations & Clubs", href: "/community/associations" },
      { label: "Temples & Spiritual", href: "/community/spiritual" },
      { label: "Women's Network", href: "/community/women" },
      { label: "Student Groups", href: "/community/students" },
    ],
  },
  {
    heading: "Living Guide",
    links: [
      { label: "Welcome to Switzerland", href: "/living/welcome" },
      { label: "Housing & Rentals", href: "/living/housing" },
      { label: "Healthcare", href: "/living/healthcare" },
      { label: "Banking & Finance", href: "/living/banking" },
      { label: "Legal & Immigration", href: "/living/legal" },
    ],
  },
  {
    heading: "Food & Culture",
    links: [
      { label: "Indian Restaurants", href: "/food/restaurants" },
      { label: "Grocery & Spices", href: "/food/grocery" },
      { label: "Festivals & Events", href: "/culture/festivals" },
      { label: "Music & Dance", href: "/culture/arts" },
      { label: "Events Calendar", href: "/events" },
    ],
  },
  {
    heading: "Business",
    links: [
      { label: "Networking & Chambers", href: "/business/networking" },
      { label: "Jobs & Recruitment", href: "/business/jobs" },
      { label: "Startups", href: "/business/startups" },
      { label: "Professional Services", href: "/business/services" },
    ],
  },
  {
    heading: "City Guides",
    links: [
      { label: "Zurich", href: "/cities/zurich" },
      { label: "Geneva", href: "/cities/geneva" },
      { label: "Basel", href: "/cities/basel" },
      { label: "Bern", href: "/cities/bern" },
      { label: "Lausanne", href: "/cities/lausanne" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "All Resources", href: "/resources" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Cookie Policy", href: "/privacy#cookies" },
      { label: "Advertise With Us", href: "mailto:hello@indiaspora.ch?subject=Advertising%20Enquiry" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t" style={{ background: "var(--bg)", borderColor: "var(--border)" }}>
      {/* Subtle aurora glow at top */}
      <div
        aria-hidden
        style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: "60%", height: 1,
          background: "var(--aurora-grad)",
          opacity: 0.6,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-8 lg:gap-6 mb-12">
          {/* Brand — spans 2 cols on large screens */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--aurora-grad)" }}>
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <circle cx="12" cy="12" r="4" fill="white" opacity="0.95" />
                  {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
                    <line key={i} x1="12" y1="7" x2="12" y2="3" stroke="white" strokeWidth="1.5" strokeLinecap="round" transform={`rotate(${deg} 12 12)`} />
                  ))}
                </svg>
              </div>
              <div>
                <div className="font-bold text-xl">
                  <span className="gradient-text">India</span>
                  <span style={{ color: "var(--text)" }}>spora</span>
                </div>
                <div className="text-xs uppercase tracking-widest" style={{ color: "var(--text-3)" }}>Community Hub</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-2)" }}>
              Connecting 24,500+ Indians across Switzerland. Your one-stop resource for community, culture, business, and daily life.
            </p>
            <div className="space-y-2 mb-5">
              <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-2)" }}>
                <MapPin className="w-4 h-4 shrink-0" style={{ color: "var(--sf-hi)" }} />
                <span>Zurich, Switzerland</span>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-2)" }}>
                <Mail className="w-4 h-4 shrink-0" style={{ color: "var(--sf-hi)" }} />
                <a href="mailto:hello@indiaspora.ch" className="transition-colors" style={{ color: "var(--text-2)" }}
                   onMouseEnter={(e) => (e.currentTarget.style.color = "var(--sf-hi)")}
                   onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}>
                  hello@indiaspora.ch
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-2">
              {[
                { label: "FB", title: "Facebook", href: "https://www.facebook.com/groups/indian.association.of.greater.zurich/" },
                { label: "IG", title: "Instagram", href: "https://www.instagram.com/namasteswitzerland.ch/" },
                { label: "LI", title: "LinkedIn", href: "https://www.linkedin.com/company/swiss-indiaspora/" },
                { label: "WA", title: "WhatsApp", href: "https://wa.me/?text=Indiaspora%20Community%20Hub%20-%20https%3A%2F%2Findiaspora.ch" },
              ].map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  title={s.title}
                  aria-label={s.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass"
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, fontWeight: 700, color: "var(--text-3)",
                    transition: "color 0.15s, border-color 0.15s",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--sf-hi)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation sections */}
          {footerSections.map((section) => (
            <nav key={section.heading} aria-label={`${section.heading} links`} className="lg:col-span-1">
              <h3
                className="text-xs font-bold mb-3 uppercase tracking-wider"
                style={{ color: "var(--text)", letterSpacing: "0.1em" }}
              >
                {section.heading}
              </h3>
              <ul className="space-y-2" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors"
                      style={{ color: "var(--text-2)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--sf-hi)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Newsletter */}
        <div className="glass rounded-2xl p-6 lg:p-8 mb-10" style={{ borderColor: "var(--border-2)" }}>
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1" style={{ color: "var(--text)" }}>Stay Connected</h3>
              <p className="text-sm" style={{ color: "var(--text-2)" }}>Weekly digest — events, news, and community updates across Switzerland</p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email address for newsletter"
                className="flex-1 lg:w-64 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-2)",
                  color: "var(--text)",
                  // @ts-expect-error CSS custom property
                  "--tw-ring-color": "var(--sf)",
                }}
              />
              <button className="btn btn-primary btn-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-xs" style={{ color: "var(--text-3)" }}>
            © 2026 Indiaspora Community Hub. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--text-3)" }}>
            Built for the Swiss-Indian community 🇮🇳🇨🇭
          </p>
        </div>
      </div>
    </footer>
  );
}
