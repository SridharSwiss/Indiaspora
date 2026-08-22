"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  gradient?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHeader({
  title,
  subtitle,
  badge,
  gradient = "from-violet-500 to-cyan-500",
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden">
      {/* Aurora background orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className={`absolute top-0 left-1/3 w-72 sm:w-[480px] h-72 sm:h-[480px] rounded-full`}
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(139,92,246,0.08) 50%, transparent 75%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-48 sm:w-80 h-48 sm:h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute top-1/2 left-0 w-48 h-48 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none pattern-grid"
        style={{
          maskImage: "radial-gradient(ellipse 80% 100% at 50% 0%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 100% at 50% 0%, black 30%, transparent 100%)",
          opacity: 0.3,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 mb-5 text-xs sm:text-sm">
            <Link href="/" className="transition-colors hover:text-violet-400" style={{ color: "var(--text-3)" }}>
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 shrink-0" style={{ color: "var(--text-3)" }} aria-hidden />
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-violet-400" style={{ color: "var(--text-3)" }}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ color: "var(--text-2)" }}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {badge && (
          <div
            className="inline-flex items-center gap-2 mb-5"
            style={{
              padding: "4px 14px", borderRadius: 999,
              fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              background: "var(--sf-bg)",
              border: "1px solid rgba(139,92,246,0.25)",
              color: "var(--sf-hi)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--aurora-grad)" }} aria-hidden />
            {badge}
          </div>
        )}

        {/* Aurora-line accent above title */}
        <div
          aria-hidden
          className="mb-4"
          style={{
            width: 48, height: 3, borderRadius: 99,
            background: "var(--aurora-grad)",
          }}
        />

        <h1
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 leading-[1.1] tracking-tight"
          style={{ color: "var(--text)" }}
        >
          {title}
        </h1>

        <p className="text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed" style={{ color: "var(--text-2)" }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
