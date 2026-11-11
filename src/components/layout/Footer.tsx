"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";

const NAV_COLS = [
  {
    heading: "Community",
    links: [
      { label: "Associations & Clubs", href: "/community/associations" },
      { label: "Temples & Spiritual", href: "/community/spiritual" },
      { label: "Women's Network", href: "/community/women" },
      { label: "Student Groups", href: "/community/students" },
      { label: "Daily Life Hub", href: "/community/hub" },
    ],
  },
  {
    heading: "Living",
    links: [
      { label: "Welcome Guide", href: "/living/welcome" },
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
      { label: "Supermarket Decoder", href: "/food/supermarket" },
      { label: "Festivals & Events", href: "/culture/festivals" },
      { label: "Music & Dance", href: "/culture/arts" },
    ],
  },
  {
    heading: "Business & Cities",
    links: [
      { label: "Networking & Chambers", href: "/business/networking" },
      { label: "Startups", href: "/business/startups" },
      { label: "Professional Services", href: "/business/services" },
      { label: "Zurich", href: "/cities/zurich" },
      { label: "Geneva", href: "/cities/geneva" },
      { label: "Basel · Bern · Lausanne", href: "/cities/basel" },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <footer className="relative" style={{ background: "#1A1410", borderTop: "1px solid rgba(176,141,87,0.15)" }}>
      {/* Gold accent line */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "40%", height: 1,
        background: "linear-gradient(90deg, transparent, rgba(176,141,87,0.6), transparent)",
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">

        {/* ── Main grid ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">

          {/* Brand column — 2 cols on lg */}
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-4 flex items-center gap-2.5">
              <img src="/logo.png" alt="Indiaspora" style={{ height: 34, width: "auto" }} />
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, fontWeight: 700, color: "rgba(245,237,224,0.95)" }}>
                India<span style={{ color: "#B08D57" }}>spora</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(200,185,165,0.9)" }}>
              Connecting 24,500+ Indians across Switzerland — community, culture, business, and daily life.
            </p>
            <div className="space-y-1.5 mb-4">
              <div className="flex items-center gap-2 text-xs" style={{ color: "rgba(200,185,165,0.9)" }}>
                <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: "#B08D57" }} />
                <span>Zurich, Switzerland</span>
              </div>
              <div className="flex items-center gap-2 text-xs" style={{ color: "rgba(200,185,165,0.9)" }}>
                <Mail className="w-3.5 h-3.5 shrink-0" style={{ color: "#B08D57" }} />
                <a href="mailto:hello@indiaspora.ch"
                  style={{ color: "rgba(200,185,165,0.9)", transition: "color 0.15s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#B08D57")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(200,185,165,0.9)")}>
                  hello@indiaspora.ch
                </a>
              </div>
            </div>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/swiss-indiaspora/?viewAsMember=true"
              title="LinkedIn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 32, height: 32,
                color: "rgba(200,185,165,0.5)",
                border: "1px solid rgba(176,141,87,0.2)",
                borderRadius: 7, transition: "color 0.15s, border-color 0.15s, background 0.15s",
                textDecoration: "none",
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
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/indiaspora.ch"
              title="Instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 32, height: 32,
                color: "rgba(200,185,165,0.5)",
                border: "1px solid rgba(176,141,87,0.2)",
                borderRadius: 7, marginLeft: 8, transition: "color 0.15s, border-color 0.15s, background 0.15s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#E4405F";
                (e.currentTarget as HTMLElement).style.borderColor = "#E4405F";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(200,185,165,0.5)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(176,141,87,0.2)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>

          {/* Nav columns — each 1 col on lg */}
          {NAV_COLS.map((section) => (
            <nav key={section.heading} aria-label={`${section.heading} links`}>
              <h3 className="text-xs font-bold mb-3 uppercase"
                style={{ color: "rgba(245,237,224,0.55)", letterSpacing: "0.10em", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                {section.heading}
              </h3>
              <ul className="space-y-2" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs transition-colors"
                      style={{ color: "rgba(200,185,165,0.55)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(245,237,224,0.9)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(200,185,165,0.55)")}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* ── Advertise + Newsletter — combined compact strip ────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Advertise */}
          <div className="flex items-center justify-between gap-4 px-5 py-4"
            style={{ border: "1px solid rgba(176,141,87,0.22)", background: "linear-gradient(135deg, rgba(176,141,87,0.07) 0%, rgba(176,141,87,0.02) 100%)", borderRadius: 2 }}>
            <div>
              <p className="text-xs font-bold uppercase mb-0.5" style={{ color: "#B08D57", letterSpacing: "0.10em", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                Reach 24,500+ Indians
              </p>
              <p className="text-xs" style={{ color: "rgba(200,185,165,0.6)" }}>Banners, newsletter &amp; city guide features</p>
            </div>
            <Link href="/advertise"
              style={{
                display: "inline-flex", alignItems: "center",
                padding: "7px 16px", background: "#B08D57", color: "#1A1410",
                fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0,
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#CEB07A")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#B08D57")}>
              Advertise →
            </Link>
          </div>

          {/* Newsletter */}
          <div className="flex items-center gap-4 px-5 py-4"
            style={{ border: "1px solid rgba(176,141,87,0.15)", background: "rgba(255,255,255,0.02)", borderRadius: 2 }}>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold uppercase mb-0.5" style={{ color: "rgba(245,237,224,0.7)", letterSpacing: "0.10em", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                Weekly digest
              </p>
              <p className="text-xs" style={{ color: "rgba(200,185,165,0.55)" }}>Events, news &amp; community updates</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <input type="email" placeholder="your@email.com" aria-label="Email for newsletter"
                className="px-3 py-2 text-xs w-36 focus:outline-none"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(176,141,87,0.22)",
                  color: "rgba(245,237,224,0.9)",
                }} />
              <button style={{
                padding: "7px 14px", background: "#B08D57", color: "#1A1410",
                fontSize: 10, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                border: "none", cursor: "pointer", whiteSpace: "nowrap",
              }}>
                Go
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5"
          style={{ borderTop: "1px solid rgba(176,141,87,0.1)" }}>
          <p className="text-xs" style={{ color: "rgba(200,185,165,0.72)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            © 2026 Indiaspora Community Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Image credits", href: "/credits" },
              { label: "Terms", href: "/terms" },
              { label: "Cookies", href: "/privacy#cookies" },
              { label: "Unsubscribe", href: "/unsubscribe" },
              { label: "Seek Advice", href: "/advice" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-xs transition-colors"
                style={{ color: "rgba(200,185,165,0.7)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(200,185,165,0.6)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(200,185,165,0.7)")}>
                {l.label}
              </Link>
            ))}
            <span className="text-xs" style={{ color: "rgba(200,185,165,0.72)" }}>🇮🇳🇨🇭</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
