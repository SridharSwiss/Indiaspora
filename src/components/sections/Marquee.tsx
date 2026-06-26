"use client";

const MARQUEE_ITEMS = [
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
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="py-4 bg-gradient-to-r from-orange-600/10 via-orange-500/5 to-orange-600/10 border-y border-orange-500/10 overflow-hidden">
      <div className="flex" style={{ animation: "marquee 40s linear infinite" }}>
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-2 whitespace-nowrap px-8 text-sm text-slate-400">
            {item}
            <span className="w-1 h-1 rounded-full bg-orange-500/40 ml-4" />
          </span>
        ))}
      </div>
    </div>
  );
}
