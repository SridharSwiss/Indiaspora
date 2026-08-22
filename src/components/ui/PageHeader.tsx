"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Script from "next/script";

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
  // JSON-LD breadcrumb schema for Google rich results (principle #5)
  const breadcrumbSchema = breadcrumbs && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://indiaspora.ch" },
      ...breadcrumbs.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: crumb.label,
        ...(crumb.href ? { item: `https://indiaspora.ch${crumb.href}` } : {}),
      })),
    ],
  };

  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden"
      style={{ background: "var(--base)" }}>
      {breadcrumbSchema && (
        <Script
          id={`breadcrumb-${title.replace(/\s+/g, "-").toLowerCase()}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {/* Warm ambient glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          style={{
            position: "absolute", top: 0, right: "15%",
            width: "40%", height: "80%",
            background: "radial-gradient(circle, rgba(176,141,87,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute", bottom: 0, left: "10%",
            width: "30%", height: "50%",
            background: "radial-gradient(circle, rgba(160,97,74,0.05) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/* Subtle warm grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none pattern-grid"
        style={{
          maskImage: "radial-gradient(ellipse 80% 100% at 50% 0%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 100% at 50% 0%, black 30%, transparent 100%)",
          opacity: 0.4,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 mb-5 text-xs sm:text-sm">
            <Link href="/" className="transition-colors hover:text-amber-600" style={{ color: "var(--text-3)" }}>
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 shrink-0" style={{ color: "var(--text-3)" }} aria-hidden />
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-amber-600" style={{ color: "var(--text-3)" }}>
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
