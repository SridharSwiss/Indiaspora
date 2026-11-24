import { CITIES, GROCERY_UPDATED, mapsLink, storesIn, type CityKey, type Store } from "@/lib/grocery";

type Lang = "en" | "de" | "fr";
const L = {
  en: { website: "Website", maps: "Google Maps", updated: "Store details last checked", call: "Phone", stores: (c: string) => `Indian grocery stores in ${c}` },
  de: { website: "Website", maps: "Google Maps", updated: "Angaben zuletzt geprüft", call: "Telefon", stores: (c: string) => `Indische Läden in ${c}` },
  fr: { website: "Site web", maps: "Google Maps", updated: "Informations vérifiées en", call: "Téléphone", stores: (c: string) => `Épiceries indiennes à ${c}` },
};
const UPDATED: Record<Lang, string> = { en: GROCERY_UPDATED, de: "November 2026", fr: "novembre 2026" };

function StoreCard({ s, lang }: { s: Store; lang: Lang }) {
  const t = L[lang];
  const note = lang === "de" ? s.noteDe ?? s.note : lang === "fr" ? s.noteFr ?? s.note : s.note;
  return (
    <article className="glass rounded-2xl p-5" itemScope itemType="https://schema.org/GroceryStore">
      <h3 className="text-base font-semibold" style={{ color: "var(--text)" }} itemProp="name">{s.name}</h3>
      <p className="text-xs mt-1" style={{ color: "var(--text-3)" }}>
        {s.address ? <span itemProp="address">{s.address}</span> : s.area}
      </p>
      <p className="text-sm mt-2" style={{ color: "var(--text-2)" }} itemProp="description">{note}</p>
      {s.phone && <p className="text-xs mt-2" style={{ color: "var(--text-3)" }}>{t.call}: <span itemProp="telephone">{s.phone}</span></p>}
      <div className="flex gap-3 mt-3 text-xs font-semibold">
        {s.url && <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)" }} itemProp="url">{t.website} →</a>}
        <a href={mapsLink(s)} target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)" }}>{t.maps} →</a>
      </div>
    </article>
  );
}

export function CityStores({ city, lang = "en" }: { city: CityKey; lang?: Lang }) {
  const name = CITIES[city][lang];
  return (
    <section id={city} aria-labelledby={`h-${city}`}>
      <h2 id={`h-${city}`} className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>{L[lang].stores(name)}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {storesIn(city).map(s => <StoreCard key={s.name + s.city} s={s} lang={lang} />)}
      </div>
    </section>
  );
}

export function UpdatedNote({ lang = "en" }: { lang?: Lang }) {
  return <p className="text-xs" style={{ color: "var(--text-3)" }}>{L[lang].updated}: {UPDATED[lang]}</p>;
}

/** JSON-LD ItemList of stores for a set of cities */
export function GroceryJsonLd({ cities, url }: { cities: CityKey[]; url: string }) {
  const items = cities.flatMap(c => storesIn(c)).map((s, i) => ({
    "@type": "ListItem", position: i + 1,
    item: { "@type": "GroceryStore", name: s.name, ...(s.address ? { address: s.address } : {}), ...(s.phone ? { telephone: s.phone } : {}), ...(s.url ? { url: s.url } : {}) },
  }));
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "ItemList", url, itemListElement: items }) }} />;
}
