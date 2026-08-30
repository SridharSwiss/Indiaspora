import Link from "next/link";
import { Calendar, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { UPCOMING_EVENTS } from "@/lib/data";

export default function Events() {
  const shown = UPCOMING_EVENTS.slice(0, 3);

  return (
    <section id="events" style={{ background: "var(--surface-2)", padding: "96px 0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, gap: 24, flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{ width: 32, height: 1, background: "var(--mg)", display: "inline-block" }} aria-hidden />
              <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--mg)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                What&apos;s On
              </span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1, color: "var(--text)", margin: 0 }}>
              Upcoming <em style={{ fontStyle: "italic" }}>Events</em>
            </h2>
          </div>
          <Link href="/events" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "11px 22px",
            fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            color: "var(--text-2)", border: "1px solid var(--border-2)",
            background: "transparent", textDecoration: "none",
            whiteSpace: "nowrap",
          }}>
            Full Calendar <ArrowRight style={{ width: 12, height: 12 }} />
          </Link>
        </div>

        {/* Event cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
          className="events-grid">
          {shown.map((event) => {
            const Inner = (
              <>
                {/* Image */}
                {event.image && (
                  <div style={{ height: 160, overflow: "hidden", position: "relative" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={event.image}
                      alt={event.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)" }}
                      className="event-img"
                    />
                    {/* Category badge */}
                    <span style={{
                      position: "absolute", top: 12, left: 12,
                      padding: "3px 10px",
                      fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      background: "rgba(16,12,8,0.75)",
                      backdropFilter: "blur(8px)",
                      color: "var(--in-hi)",
                      border: "1px solid rgba(176,141,87,0.35)",
                    }}>
                      {event.category}
                    </span>
                  </div>
                )}

                {/* Body */}
                <div style={{ padding: "20px 20px 18px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8, marginBottom: 8 }}>
                    <h3 style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "1rem", fontWeight: 700, lineHeight: 1.3,
                      color: "var(--text)", flex: 1,
                    }}>
                      {event.title}
                    </h3>
                    {event.url && <ExternalLink style={{ width: 12, height: 12, color: "var(--text-3)", flexShrink: 0, marginTop: 3 }} />}
                  </div>
                  <p style={{ fontSize: 12, color: "var(--text-2)", lineHeight: 1.65, marginBottom: 14, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {event.description}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Calendar style={{ width: 11, height: 11, color: "var(--in)", flexShrink: 0 }} />
                      <span style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{event.date}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <MapPin style={{ width: 11, height: 11, color: "var(--mg)", flexShrink: 0 }} />
                      <span style={{ fontSize: 11, color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }} className="truncate">{event.location}</span>
                    </div>
                  </div>
                </div>
              </>
            );

            return event.url ? (
              <a
                key={event.title}
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover"
                style={{
                  display: "block", overflow: "hidden",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  textDecoration: "none",
                }}
              >
                <style>{`.event-img { } a:hover .event-img { transform: scale(1.04); }`}</style>
                {Inner}
              </a>
            ) : (
              <div key={event.title} style={{ display: "block", overflow: "hidden", background: "var(--surface)", border: "1px solid var(--border)" }}>
                {Inner}
              </div>
            );
          })}
        </div>

        {/* Submit CTA */}
        <div style={{ marginTop: 24, padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, background: "var(--surface)", border: "1px solid var(--border)", flexWrap: "wrap" }}>
          <div>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>
              Organising a community event?
            </p>
            <p style={{ fontSize: 12, color: "var(--text-2)" }}>
              Submit it to reach 30,000+ Indians across Switzerland
            </p>
          </div>
          <Link
            href="/events/submit"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 24px",
              fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              background: "var(--in)", color: "#1A1410",
              textDecoration: "none", flexShrink: 0,
              transition: "background 0.2s",
            }}
          >
            Submit an Event <ArrowRight style={{ width: 12, height: 12 }} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .events-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .events-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
