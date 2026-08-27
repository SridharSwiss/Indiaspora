"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, CalendarDays, UtensilsCrossed, Users, Globe } from "lucide-react";

const TABS = [
  { label: "Home",      href: "/",          icon: Home },
  { label: "Events",    href: "/events",     icon: CalendarDays },
  { label: "Food",      href: "/food",       icon: UtensilsCrossed },
  { label: "Community", href: "/community",  icon: Users },
  { label: "Explore",   href: "/cities",     icon: Globe },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <>
      {/* spacer so content isn't hidden behind bar */}
      <div className="lg:hidden" style={{ height: 72 }} aria-hidden />

      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50"
        aria-label="Main mobile navigation"
        style={{
          background: "var(--glass-bg)",
          borderTop: "1px solid var(--glass-border)",
          backdropFilter: "blur(24px) saturate(1.4)",
          WebkitBackdropFilter: "blur(24px) saturate(1.4)",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}
      >
        <ul
          role="list"
          style={{
            display: "flex", listStyle: "none", margin: 0, padding: "6px 4px 4px",
          }}
        >
          {TABS.map(({ label, href, icon: Icon }) => {
            const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href} style={{ flex: 1 }}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
                    padding: "6px 4px",
                    borderRadius: 10,
                    textDecoration: "none",
                    color: active ? "var(--in)" : "var(--text-3)",
                    transition: "color 0.15s",
                  }}
                >
                  <span
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      width: 36, height: 28, borderRadius: 8,
                      background: active ? "var(--in-bg)" : "transparent",
                      transition: "background 0.15s",
                    }}
                  >
                    <Icon style={{ width: 18, height: 18 }} strokeWidth={active ? 2.2 : 1.8} />
                  </span>
                  <span
                    style={{
                      fontSize: 9, fontWeight: active ? 700 : 500,
                      letterSpacing: "0.04em",
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    }}
                  >
                    {label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
