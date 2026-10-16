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
  heroImage?: string;
  heroImageAlt?: string;
  heroImagePosition?: string;
}

export default function PageHeader({
  title,
  subtitle,
  badge,
  breadcrumbs,
  heroImage,
  heroImageAlt = "",
  heroImagePosition = "center 35%",
}: PageHeaderProps) {
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

  // ── WITH hero image: sticky parallax banner, text on the image ──
  if (heroImage) {
    return (
      <>
        {breadcrumbSchema && (
          <Script
            id={`breadcrumb-${title.replace(/\s+/g, "-").toLowerCase()}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
        )}

        {/*
          Outer wrapper: height 100svh so normal document flow reserves
          the space. The inner sticky div peeks out at top:0 while the
          wrapper scrolls, giving a "pinned background" effect.
        */}
        <div style={{ position: "relative", height: "100svh" }}>

        {/* Sticky image — stays at top:0 while content scrolls over it */}
        <div
          style={{
            position: "sticky",
            top: 0,
            width: "100%",
            height: "100svh",
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          {/* Sharp, full-screen image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImage}
            alt={heroImageAlt}
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
              objectPosition: heroImagePosition,
              animation: "phZoom 18s ease-in-out infinite alternate",
            }}
          />

          {/* Light tint — lets the image breathe while staying legible */}
          <div style={{
            position: "absolute", inset: 0,
            background: "rgba(4,3,2,0.18)",
          }} aria-hidden />
          {/* Gradient concentrated at bottom so title/subtitle pop */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.02) 40%, rgba(0,0,0,0.35) 72%, rgba(0,0,0,0.75) 100%)",
          }} aria-hidden />

          {/* Text — absolutely pinned to the bottom of the image */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            padding: "clamp(24px,4vw,56px) clamp(16px,5vw,80px) clamp(28px,4vw,52px)",
            zIndex: 2,
          }}>
            {/* Breadcrumbs */}
            {breadcrumbs && (
              <nav
                aria-label="Breadcrumb"
                style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 6, marginBottom: 14 }}
              >
                <Link
                  href="/"
                  style={{
                    color: "rgba(255,255,255,0.65)", fontSize: 12, fontWeight: 500,
                    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                    textDecoration: "none",
                    textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,1)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"; }}
                >
                  Home
                </Link>
                {breadcrumbs.map((crumb, i) => (
                  <span key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <ChevronRight style={{ width: 12, height: 12, color: "rgba(255,255,255,0.40)", flexShrink: 0 }} aria-hidden />
                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        style={{
                          color: "rgba(255,255,255,0.65)", fontSize: 12, fontWeight: 500,
                          fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                          textDecoration: "none",
                          textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,1)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"; }}
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span style={{
                        color: "rgba(255,255,255,0.90)", fontSize: 12, fontWeight: 600,
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                      }}>
                        {crumb.label}
                      </span>
                    )}
                  </span>
                ))}
              </nav>
            )}

            {/* Badge */}
            {badge && (
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 7, marginBottom: 14,
                padding: "5px 14px", borderRadius: 999,
                background: "rgba(0,0,0,0.45)",
                border: "1px solid rgba(201,169,110,0.45)",
                backdropFilter: "blur(12px)",
                fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase",
                color: "#CEB07A",
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "#CEB07A",
                  flexShrink: 0,
                }} aria-hidden />
                {badge}
              </div>
            )}

            {/* Title */}
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.8rem)",
              fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.02em",
              color: "#FFFFFF",
              textShadow: "0 2px 16px rgba(0,0,0,0.90), 0 1px 4px rgba(0,0,0,0.70)",
              margin: "0 0 12px",
            }}>
              {title}
            </h1>

            {/* Subtitle */}
            <p style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "clamp(0.88rem, 1.6vw, 1.05rem)",
              color: "rgba(255,255,255,0.88)",
              textShadow: "0 1px 8px rgba(0,0,0,0.85)",
              lineHeight: 1.65, maxWidth: 620, margin: 0,
              fontWeight: 400,
            }}>
              {subtitle}
            </p>
          </div>
        </div>
        </div>{/* /outer height-reserving wrapper */}

        <style>{`
          @keyframes phZoom {
            from { transform: scale(1.10); }
            to   { transform: scale(1.17); }
          }
        `}</style>
      </>
    );
  }

  // ── WITHOUT hero image: original text-only header ──
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
        <div style={{
          position: "absolute", top: 0, right: "15%",
          width: "40%", height: "80%",
          background: "radial-gradient(circle, rgba(176,141,87,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: "10%",
          width: "30%", height: "50%",
          background: "radial-gradient(circle, rgba(160,97,74,0.05) 0%, transparent 70%)",
          filter: "blur(50px)",
        }} />
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
            <Link href="/" className="transition-colors" style={{ color: "var(--text-3)" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--sf)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-3)"}>
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 shrink-0" style={{ color: "var(--text-3)" }} aria-hidden />
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors" style={{ color: "var(--text-3)" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--sf)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-3)"}>
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
          <div className="inline-flex items-center gap-2 mb-5" style={{
            padding: "4px 14px", borderRadius: 999,
            fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
            background: "var(--sf-bg)",
            border: "1px solid rgba(184,154,98,0.25)",
            color: "var(--sf-hi)",
            backdropFilter: "blur(10px)",
          }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--aurora-grad)" }} aria-hidden />
            {badge}
          </div>
        )}

        <div aria-hidden className="mb-4" style={{
          width: 48, height: 3, borderRadius: 99, background: "var(--aurora-grad)",
        }} />

        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 leading-[1.1] tracking-tight"
          style={{ color: "var(--text)" }}>
          {title}
        </h1>

        <p className="text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed" style={{ color: "var(--text-2)" }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
