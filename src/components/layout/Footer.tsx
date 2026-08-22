import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const footerLinks = {
  Community: [
    { label: "Indian Associations", href: "/community#associations" },
    { label: "Temples & Spiritual", href: "/community#spiritual" },
    { label: "Women's Network", href: "/community#women" },
    { label: "Student Groups", href: "/community#students" },
  ],
  "Living Guide": [
    { label: "Welcome to Switzerland", href: "/living#welcome" },
    { label: "Housing & Rentals", href: "/living#housing" },
    { label: "Healthcare", href: "/living#healthcare" },
    { label: "Schools & Education", href: "/living#education" },
  ],
  "Food & Culture": [
    { label: "Indian Restaurants", href: "/food#restaurants" },
    { label: "Grocery Stores", href: "/food#grocery" },
    { label: "Festivals & Events", href: "/culture#festivals" },
    { label: "Arts & Music", href: "/culture#arts" },
  ],
  Business: [
    { label: "Networking", href: "/business#networking" },
    { label: "Jobs & Careers", href: "/business#jobs" },
    { label: "Startups", href: "/business#startups" },
    { label: "Professional Services", href: "/business#services" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t" style={{ background: "var(--bg)", borderColor: "var(--border)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #f97316, #d97706)" }}>
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
                  <span className="text-white">Swiss</span>
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">Community Hub</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              The premier platform connecting 30,000+ Indians across Switzerland. Your one-stop resource for community, culture, business, and daily life.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 shrink-0" style={{ color: "var(--primary)" }} />
                <span>Zurich, Switzerland</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Mail className="w-4 h-4 shrink-0" style={{ color: "var(--primary)" }} />
                <a href="mailto:hello@indiaswiss.ch" className="hover:text-white transition-colors">hello@indiaswiss.ch</a>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { label: "F", title: "Facebook", href: "https://www.facebook.com/groups/indian.association.of.greater.zurich/" },
                { label: "In", title: "Instagram", href: "https://www.instagram.com/namasteswitzerland.ch/" },
                { label: "Li", title: "LinkedIn", href: "https://www.linkedin.com/search/results/groups/?keywords=Indian%20professionals%20Switzerland" },
                { label: "W", title: "WhatsApp", href: "https://wa.me/?text=IndiaSwiss%20Community%20Hub%20-%20https%3A%2F%2Findiaswiss.ch" },
              ].map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  title={s.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/15 transition-colors text-xs font-bold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{heading}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
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
        <div className="glass rounded-2xl p-6 lg:p-8 mb-10">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1">Stay Connected</h3>
              <p className="text-slate-400 text-sm">Weekly newsletter with events, news, and community updates</p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 lg:w-64 px-4 py-2.5 rounded-xl text-white placeholder:text-slate-500 text-sm focus:outline-none border"
                style={{ background: "rgba(255,255,255,0.05)", borderColor: "var(--border)" }}
              />
              <button
                className="btn btn-primary btn-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-xs text-slate-500">
            © 2026 IndiaSwiss Community Hub. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms of Use</Link>
            <Link href="/privacy#cookies" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Cookie Policy</Link>
            <a href="mailto:hello@indiaswiss.ch?subject=Advertising%20Enquiry" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Advertise</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
