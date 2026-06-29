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
    <div className="py-3.5 overflow-hidden" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="flex animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap px-6 text-[13px]" style={{ color: "#475569" }}>
            {item}
            <span className="inline-block w-1 h-1 rounded-full mx-6" style={{ background: "rgba(99,102,241,0.4)" }} />
          </span>
        ))}
      </div>
    </div>
  );
}
