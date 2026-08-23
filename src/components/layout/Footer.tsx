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

            {/* Social icons */}
            <div className="flex gap-2">
              {[
                {
                  title: "Facebook",
                  href: "https://www.facebook.com/groups/indian.association.of.greater.zurich/",
                  hoverColor: "#1877F2",
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                    </svg>
                  ),
                },
                {
                  title: "Instagram",
                  href: "https://www.instagram.com/namasteswitzerland.ch/",
                  hoverColor: "#E1306C",
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  ),
                },
                {
                  title: "LinkedIn",
                  href: "https://www.linkedin.com/company/swiss-indiaspora/?viewAsMember=true",
                  hoverColor: "#0A66C2",
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                },
                {
                  title: "WhatsApp",
                  href: "https://wa.me/?text=Indiaspora%20Community%20Hub%20-%20https%3A%2F%2Findiaspora.ch",
                  hoverColor: "#25D366",
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  title={s.title}
                  aria-label={s.title}
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
                    (e.currentTarget as HTMLElement).style.color = s.hoverColor;
                    (e.currentTarget as HTMLElement).style.borderColor = s.hoverColor;
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(200,185,165,0.5)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(176,141,87,0.2)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  {s.icon}
                </a>
              ))}
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
