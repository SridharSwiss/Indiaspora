"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TravelBanner() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "clamp(260px, 35vw, 480px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background photo with slow Ken-Burns zoom */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-travel.jpg"
        alt="Indiaspora Express — Indians enjoying a panoramic Swiss Alps train journey"
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center 40%",
          animation: "travelZoom 18s ease-in-out infinite alternate",
        }}
      />

      {/* Left-to-right dark gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(100deg, rgba(8,6,3,0.88) 0%, rgba(8,6,3,0.70) 40%, rgba(8,6,3,0.25) 75%, rgba(8,6,3,0.10) 100%)",
      }} aria-hidden />

      {/* Decorative Indian-gold top border */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: 3,
        background: "linear-gradient(90deg, #C9A96E 0%, #E8C97A 50%, rgba(201,169,110,0.2) 100%)",
      }} aria-hidden />

      {/* Content */}
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        style={{ width: "100%" }}
      >
        <div style={{ maxWidth: 560 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 18,
            padding: "5px 14px", borderRadius: 999,
            background: "rgba(201,169,110,0.12)",
            border: "1px solid rgba(201,169,110,0.30)",
            fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
            color: "#CEB07A",
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
          }}>
            🚂 Travel & Journeys
          </div>

          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)",
            fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em",
            color: "rgba(245,237,220,0.96)",
            marginBottom: 14,
          }}>
            Switzerland to India —<br />
            <span style={{ color: "#CEB07A", fontStyle: "italic" }}>and Back</span>
          </h2>

          <p style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontSize: "clamp(0.88rem, 1.5vw, 1rem)",
            color: "rgba(180,162,138,0.90)",
            lineHeight: 1.75, maxWidth: 440, marginBottom: 28,
          }}>
            Flight deals, SBB Swiss Travel Pass tips, Pilatus & Titlis for visiting parents,
            and routes for the family back home. Travel smarter with the Indiaspora community.
          </p>

          <Link
            href="/travel"
            style={{
              display: "inline-flex", alignItems: "center", gap: 9,
              padding: "13px 28px", borderRadius: 999,
              background: "rgba(201,169,110,0.90)",
              color: "#1A1410",
              fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase",
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 24px rgba(201,169,110,0.35)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#E8C97A";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 32px rgba(201,169,110,0.50)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(201,169,110,0.90)";
              el.style.transform = "none";
              el.style.boxShadow = "0 4px 24px rgba(201,169,110,0.35)";
            }}
          >
            Explore Travel Guide
            <ArrowRight style={{ width: 14, height: 14 }} />
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes travelZoom {
          from { transform: scale(1) translateX(0); }
          to   { transform: scale(1.08) translateX(-2%); }
        }
      `}</style>
    </section>
  );
}
