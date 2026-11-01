import { CITY_TOP10 } from "@/lib/city-top10";

export default function CityTop10({ slug, name }: { slug: string; name: string }) {
  const items = CITY_TOP10[slug];
  if (!items?.length) return null;
  return (
    <section style={{ marginBottom: 56 }} aria-label={`Top 10 things to do in ${name}`}>
      <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>
        Top 10 things to do in {name}
      </h2>
      <p style={{ fontSize: 12, color: "var(--text-3)", marginBottom: 16 }}>
        Curated from official tourism sites. Each item links to its official page.
      </p>
      <ol style={{ display: "grid", gap: 10, padding: 0, margin: 0, listStyle: "none" }}>
        {items.map((it) => (
          <li key={it.rank} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 14, padding: "14px 16px" }}>
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: "var(--accent, #CEB07A)", minWidth: 28 }}>{it.rank}</span>
            <span style={{ flex: 1 }}>
              <a href={it.url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700, color: "var(--text)", textDecoration: "none" }}>
                {it.name} ↗
              </a>
              <span style={{ display: "block", fontSize: 13, color: "var(--text-2)", lineHeight: 1.55, marginTop: 2 }}>{it.blurb}</span>
              <span style={{ display: "block", fontSize: 11, color: "var(--text-3)", marginTop: 4 }}>{it.area} · {it.sourceNote}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
