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
    <footer className="relative" style={{ background: "#1A1410", borderTop: "1px solid rgba(176,141,87,0.15)" }}>
      {/* Thin gold accent line */}
      <div
        aria-hidden
        style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: "40%", height: 1,
          background: "linear-gradient(90deg, transparent, rgba(176,141,87,0.6), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-8 lg:gap-6 mb-12">
          {/* Brand — spans 2 cols on large screens */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <img src="/logo.svg" alt="Indiaspora" style={{ height: 40, width: "auto", filter: "brightness(0) invert(1)" }} />
              <span style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 20, fontWeight: 700,
                color: "rgba(245,237,224,0.95)",
              }}>
                India<span style={{ color: "#B08D57" }}>spora</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(200,185,165,0.7)" }}>
              Connecting 24,500+ Indians across Switzerland. Your one-stop resource for community, culture, business, and daily life.
            </p>
            <div className="space-y-2 mb-5">
              <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(200,185,165,0.7)" }}>
                <MapPin className="w-4 h-4 shrink-0" style={{ color: "#B08D57" }} />
                <span>Zurich, Switzerland</span>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(200,185,165,0.7)" }}>
                <Mail className="w-4 h-4 shrink-0" style={{ color: "#B08D57" }} />
                <a href="mailto:hello@indiaspora.ch" style={{ color: "rgba(200,185,165,0.7)", transition: "color 0.15s" }}
                   onMouseEnter={(e) => (e.currentTarget.style.color = "#B08D57")}
                   onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(200,185,165,0.7)")}>
                  hello@indiaspora.ch
                </a>
              </div>
            </div>

            {/* Social icons — LinkedIn only */}
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/company/swiss-indiaspora/?viewAsMember=true"
                title="LinkedIn"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 36, height: 36,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(200,185,165,0.5)",
                  border: "1px solid rgba(176,141,87,0.2)",
                  borderRadius: 8,
                  transition: "color 0.15s, border-color 0.15s, background 0.15s",
                  flexShrink: 0, textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#0A66C2";
                  (e.currentTarget as HTMLElement).style.borderColor = "#0A66C2";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(200,185,165,0.5)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(176,141,87,0.2)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation sections */}
          {footerSections.map((section) => (
            <nav key={section.heading} aria-label={`${section.heading} links`} className="lg:col-span-1">
              <h3
                className="text-xs font-bold mb-4 uppercase"
                style={{ color: "rgba(245,237,224,0.6)", letterSpacing: "0.12em", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
              >
                {section.heading}
              </h3>
              <ul className="space-y-2.5" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors"
                      style={{ color: "rgba(200,185,165,0.6)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(245,237,224,0.9)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(200,185,165,0.6)")}
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
        <div className="p-6 lg:p-8 mb-10" style={{ border: "1px solid rgba(176,141,87,0.15)", background: "rgba(255,255,255,0.03)" }}>
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1" style={{ color: "rgba(245,237,224,0.9)", fontFamily: "'Playfair Display', Georgia, serif" }}>Stay Connected</h3>
              <p className="text-sm" style={{ color: "rgba(200,185,165,0.65)" }}>Weekly digest — events, news, and community updates across Switzerland</p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email address for newsletter"
                className="flex-1 lg:w-64 px-4 py-2.5 text-sm focus:outline-none"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(176,141,87,0.25)",
                  color: "rgba(245,237,224,0.9)",
                }}
              />
              <button style={{
                padding: "10px 20px", background: "#B08D57", color: "#1A1410",
                fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                border: "none", cursor: "pointer", whiteSpace: "nowrap",
              }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6" style={{ borderTop: "1px solid rgba(176,141,87,0.1)" }}>
          <p className="text-xs" style={{ color: "rgba(200,185,165,0.4)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            © 2026 Indiaspora Community Hub. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(200,185,165,0.4)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            Built for the Swiss-Indian community 🇮🇳🇨🇭
          </p>
        </div>
      </div>
    </footer>
  );
}
