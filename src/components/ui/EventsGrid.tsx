"use client";

import { useState, useEffect, useCallback } from "react";

export type EventItem = {
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  organiser?: string;
  color: string;
  url: string;
  image: string;
};

function EventCard({
  event,
  muted,
  onOpen,
}: {
  event: EventItem;
  muted?: boolean;
  onOpen: (e: EventItem) => void;
}) {
  return (
    <button
      onClick={() => onOpen(event)}
      className={`glass rounded-2xl overflow-hidden card-hover block group text-left w-full${muted ? " opacity-55" : ""}`}
      style={{ textDecoration: "none", border: "none", padding: 0, cursor: "pointer" }}
    >
      {event.image && (
        <div className="relative h-44 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span
              className="text-xs px-2 py-1 rounded-full font-medium text-white"
              style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
            >
              {event.category}
            </span>
          </div>
        </div>
      )}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="font-bold text-base leading-snug group-hover:text-violet-400 transition-colors" style={{ color: "var(--text)" }}>
          {event.title}
        </h3>
        {event.date && (
          <div className="flex items-center gap-2">
            <span className="rounded-full shrink-0" style={{ width: 3, minHeight: "2rem", background: "var(--accent, #a855f7)" }} />
            <p className="text-sm font-semibold" style={{ color: "var(--accent, #a855f7)" }}>📅 {event.date}</p>
          </div>
        )}
        {event.location && (
          <p className="text-xs" style={{ color: "var(--text-2)" }}>📍 {event.location}</p>
        )}
        {event.description && (
          <p className="text-xs leading-relaxed line-clamp-3" style={{ color: "var(--text-2)" }}>{event.description}</p>
        )}
        <div className="flex items-center justify-between pt-1 border-t" style={{ borderColor: "var(--border, rgba(255,255,255,0.08))" }}>
          {event.organiser
            ? <span className="text-xs font-medium" style={{ color: "var(--text-2)" }}>by {event.organiser}</span>
            : <span />}
          <span className="text-xs font-semibold text-violet-400 group-hover:text-violet-300 transition-colors">
            View details ↗
          </span>
        </div>
      </div>
    </button>
  );
}

function EventLightbox({ event, onClose }: { event: EventItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal
      aria-label={event.title}
      style={{
        position: "fixed", inset: 0, zIndex: 500,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "absolute", inset: 0,
          background: "rgba(0,0,0,0.78)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      />

      {/* Panel */}
      <div
        style={{
          position: "relative", zIndex: 1,
          display: "flex", flexDirection: "column",
          background: "var(--surface)",
          borderRadius: 20,
          border: "1px solid var(--border-2)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
          maxWidth: 900, width: "100%",
          maxHeight: "92vh",
          overflow: "hidden",
          animation: "lbIn 0.22s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        <style>{`@keyframes lbIn { from { opacity:0; transform:scale(0.93) translateY(12px); } to { opacity:1; transform:none; } }`}</style>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute", top: 14, right: 14, zIndex: 10,
            width: 36, height: 36, borderRadius: "50%",
            background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#fff", fontSize: 18, lineHeight: 1,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
          }}
        >
          ×
        </button>

        {/* Content: image left + details right on md+, stacked on mobile */}
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", flex: 1, overflow: "hidden" }}>
          {/* Image pane */}
          {event.image ? (
            <div style={{ flex: "0 0 45%", minWidth: 220, maxWidth: "45%", position: "relative", overflow: "hidden" }}>
              <img
                src={event.image}
                alt={event.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 240, display: "block" }}
              />
              {/* Category badge */}
              <span
                style={{
                  position: "absolute", top: 14, left: 14,
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                  padding: "4px 10px", borderRadius: 999,
                  background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)",
                  color: "#fff",
                }}
              >
                {event.category}
              </span>
            </div>
          ) : null}

          {/* Text pane */}
          <div
            style={{
              flex: 1, minWidth: 260,
              padding: "32px 28px 28px",
              overflowY: "auto",
              display: "flex", flexDirection: "column", gap: 16,
            }}
          >
            <h2
              style={{
                margin: 0, fontSize: 22, fontWeight: 800, lineHeight: 1.2,
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "var(--text)",
              }}
            >
              {event.title}
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {event.date && (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 16 }}>📅</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--accent, #a855f7)" }}>{event.date}</span>
                </div>
              )}
              {event.location && (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 16 }}>📍</span>
                  <span style={{ fontSize: 14, color: "var(--text-2)" }}>{event.location}</span>
                </div>
              )}
              {event.organiser && (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 16 }}>🏛️</span>
                  <span style={{ fontSize: 13, color: "var(--text-2)" }}>by {event.organiser}</span>
                </div>
              )}
            </div>

            {event.description && (
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "var(--text-2)" }}>
                {event.description}
              </p>
            )}

            {event.url && (
              <div style={{ marginTop: "auto", paddingTop: 8, borderTop: "1px solid var(--border-2)" }}>
                <p style={{ margin: "0 0 10px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-3)" }}>
                  Official event page
                </p>
                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "13px 20px", borderRadius: 12,
                    background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                    color: "#fff", fontSize: 14, fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 4px 18px rgba(124,58,237,0.35)",
                    transition: "opacity 0.15s, transform 0.15s",
                    wordBreak: "break-all",
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.opacity = "0.88"; el.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.opacity = "1"; el.style.transform = "none"; }}
                >
                  <span style={{ fontSize: 18, flexShrink: 0 }}>🔗</span>
                  <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {event.url.replace(/^https?:\/\//, "")}
                  </span>
                  <span style={{ flexShrink: 0 }}>↗</span>
                </a>
              </div>
            )}

            <p style={{ margin: "4px 0 0", fontSize: 11, color: "var(--text-3)" }}>
              Press <kbd style={{ padding: "1px 5px", borderRadius: 4, border: "1px solid var(--border-2)", fontSize: 10, fontFamily: "monospace" }}>Esc</kbd> or tap outside to close
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const BANNER_DURATION = 4500;

function FeaturedEventBanner({ event, onClose }: { event: EventItem; onClose: () => void }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.max(0, 100 - (elapsed / BANNER_DURATION) * 100);
      setProgress(pct);
      if (pct === 0) clearInterval(tick);
    }, 50);
    const timer = setTimeout(onClose, BANNER_DURATION);
    return () => { clearInterval(tick); clearTimeout(timer); };
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 500,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
        animation: "lbIn 0.3s cubic-bezier(0.16,1,0.3,1) both",
      }}
    >
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.72)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }} />
      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", flexDirection: "column",
        background: "var(--surface)",
        borderRadius: 20,
        border: "1px solid var(--border-2)",
        boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
        maxWidth: 860, width: "100%",
        maxHeight: "88vh",
        overflow: "hidden",
        animation: "lbIn 0.28s cubic-bezier(0.16,1,0.3,1) both",
      }}>
        {/* Featured badge */}
        <div style={{
          position: "absolute", top: 14, left: event.image ? "calc(45% + 14px)" : 14, zIndex: 10,
          display: "flex", alignItems: "center", gap: 6,
          padding: "4px 10px", borderRadius: 999,
          background: "linear-gradient(135deg,#7c3aed,#a855f7)",
          color: "#fff", fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase",
        }}>
          ✦ Featured Event
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute", top: 14, right: 14, zIndex: 10,
            width: 36, height: 36, borderRadius: "50%",
            background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#fff", fontSize: 18, lineHeight: 1,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
          }}
        >×</button>

        {/* Body */}
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", flex: 1, overflow: "hidden" }}>
          {event.image && (
            <div style={{ flex: "0 0 45%", minWidth: 200, maxWidth: "45%", position: "relative", overflow: "hidden" }}>
              <img src={event.image} alt={event.title} style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 220, display: "block" }} />
              <span style={{
                position: "absolute", top: 14, left: 14,
                fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "4px 10px", borderRadius: 999,
                background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)", color: "#fff",
              }}>{event.category}</span>
            </div>
          )}
          <div style={{ flex: 1, minWidth: 240, padding: "36px 26px 22px", overflowY: "auto", display: "flex", flexDirection: "column", gap: 14 }}>
            <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, lineHeight: 1.2, fontFamily: "'Playfair Display', Georgia, serif", color: "var(--text)" }}>
              {event.title}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {event.date && (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 15 }}>📅</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--accent, #a855f7)" }}>{event.date}</span>
                </div>
              )}
              {event.location && (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 15 }}>📍</span>
                  <span style={{ fontSize: 13, color: "var(--text-2)" }}>{event.location}</span>
                </div>
              )}
              {event.organiser && (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 15 }}>🏛️</span>
                  <span style={{ fontSize: 12, color: "var(--text-2)" }}>by {event.organiser}</span>
                </div>
              )}
            </div>
            {event.description && (
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7, color: "var(--text-2)" }}>{event.description}</p>
            )}
            {event.url && (
              <div style={{ marginTop: "auto", paddingTop: 8, borderTop: "1px solid var(--border-2)" }}>
                <a href={event.url} target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", gap: 8,
                  padding: "11px 18px", borderRadius: 10,
                  background: "linear-gradient(135deg,#7c3aed,#a855f7)",
                  color: "#fff", fontSize: 13, fontWeight: 700,
                  textDecoration: "none", boxShadow: "0 4px 18px rgba(124,58,237,0.35)",
                }}>
                  <span>🔗</span>
                  <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {event.url.replace(/^https?:\/\//, "")}
                  </span>
                  <span>↗</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ height: 3, background: "var(--border-2, rgba(255,255,255,0.08))" }}>
          <div style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg,#7c3aed,#a855f7)",
            transition: "width 0.05s linear",
          }} />
        </div>
      </div>
    </div>
  );
}

export function EventsGrid({ events, muted, featured }: { events: EventItem[]; muted?: boolean; featured?: EventItem }) {
  const [selected, setSelected] = useState<EventItem | null>(null);
  const [showFeatured, setShowFeatured] = useState(!!featured);

  const openEvent = useCallback((event: EventItem) => {
    setSelected(event);
    history.pushState({ eventLightbox: true }, "");
  }, []);

  const closeEvent = useCallback(() => {
    setSelected(null);
  }, []);

  const closeFeatured = useCallback(() => {
    setShowFeatured(false);
  }, []);

  // Handle browser back button
  useEffect(() => {
    const onPop = () => setSelected(null);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((event) => (
          <EventCard key={event.title + event.date} event={event} muted={muted} onOpen={openEvent} />
        ))}
        {events.length === 0 && (
          <p className="col-span-3 text-sm" style={{ color: "var(--text-2)" }}>
            No upcoming events listed yet. Check back soon.
          </p>
        )}
      </div>
      {selected && <EventLightbox event={selected} onClose={closeEvent} />}
      {showFeatured && featured && !selected && <FeaturedEventBanner event={featured} onClose={closeFeatured} />}
    </>
  );
}
