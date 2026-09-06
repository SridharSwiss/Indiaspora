const ITEMS = [
  "🪔 Diwali Mela Zurich · Oct 2026",
  "🎨 Holi Festival Basel · Mar 2026",
  "💃 Navratri Garba Nights",
  "🍛 Indian Food Festival Basel",
  "🎵 Carnatic Music Concert Geneva",
  "🏏 Cricket League Switzerland",
  "👗 Indian Fashion Show Zurich",
  "🎭 Bollywood Night Lausanne",
  "📚 Vedic Knowledge Series Bern",
  "🤝 Swiss India Business Forum",
  "🧘 Yoga & Wellness Retreat",
  "🎬 Indian Film Festival Switzerland",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div
      className="overflow-hidden"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "12px 0",
        position: "relative",
      }}
    >
      {/* Fade edges */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        background: "linear-gradient(90deg, var(--surface) 0%, transparent 8%, transparent 92%, var(--surface) 100%)",
      }} />
      <div className="flex animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap"
            style={{
              padding: "0 28px",
              fontSize: 12, fontWeight: 600,
              color: "var(--text-2)",
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            {item}
            <span
              aria-hidden
              style={{
                display: "inline-block",
                width: 4, height: 4, borderRadius: "50%",
                marginLeft: 28,
                background: "var(--in)",
                opacity: 0.5,
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
