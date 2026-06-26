"use client";

export default function Marquee() {
  const items = [
    "IAGZ – Indian Association Zurich",
    "Diwali Mela • Zurich",
    "Navratri Garba Night",
    "Swiss Indian Chamber of Commerce",
    "ISKCON Krishna Temple",
    "Holi Festival Basel",
    "TiE Switzerland",
    "Bharatanatyam Classes",
    "Indian Food Festival Basel",
    "Hindi School Zurich",
    "Tamil Sangam Switzerland",
    "Bollywood Dance Studio",
    "India Independence Day • Bern",
    "Gujarati Samaj Switzerland",
  ];

  const doubled = [...items, ...items];

  return (
    <div
      className="relative py-4 overflow-hidden border-y border-[var(--border)]"
      style={{ background: "rgba(240,149,12,0.03)" }}
      aria-hidden="true"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-16 sm:w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--base), transparent)" }} />
      <div className="absolute right-0 top-0 h-full w-16 sm:w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--base), transparent)" }} />

      <div className="flex gap-0 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-5">
            <span className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--saffron)] transition-colors">
              {item}
            </span>
            <span className="text-[var(--saffron)] opacity-40 text-lg" aria-hidden>•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
