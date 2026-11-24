import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { CITIES, ONLINE, type CityKey } from "@/lib/grocery";
import { CityStores, UpdatedNote, GroceryJsonLd } from "@/components/food/GroceryDirectory";

const ORDER: CityKey[] = ["zurich", "basel", "bern", "geneva", "lausanne"];

export const metadata: Metadata = {
  title: "Indischer Laden in der Schweiz: Indische Lebensmittel in Zürich, Basel, Bern",
  description: "Indischer Laden in Ihrer Nähe: indische Lebensmittelgeschäfte in Zürich, Winterthur, Basel, Bern, Genf und Lausanne mit Adresse, Telefon, Google-Maps-Link und Sortiment. Dazu Online-Shops mit Lieferung in die ganze Schweiz.",
  keywords: ["indischer laden", "indischer laden zürich", "indischer laden basel", "indischer laden bern", "indische lebensmittel schweiz", "indischer supermarkt"],
  alternates: {
    canonical: "https://indiaspora.ch/de/indischer-laden",
    languages: { en: "https://indiaspora.ch/food/grocery", "de-CH": "https://indiaspora.ch/de/indischer-laden", "fr-CH": "https://indiaspora.ch/fr/epicerie-indienne", "x-default": "https://indiaspora.ch/food/grocery" },
  },
  openGraph: { locale: "de_CH", title: "Indischer Laden in der Schweiz | Indiaspora", description: "Indische Lebensmittelgeschäfte nach Stadt, mit Adressen und Maps-Links." },
};

export default function IndischerLaden() {
  return (
    <div lang="de-CH">
      <PageHeader
        title="Indischer Laden in der Schweiz"
        subtitle="Indische Lebensmittel, Gewürze und frisches Gemüse: Läden in Zürich, Basel, Bern, Genf und Lausanne."
        badge="Lebensmittel"
        breadcrumbs={[{ label: "Food & Dining", href: "/food" }, { label: "Indischer Laden" }]}
      />
      <GroceryJsonLd cities={ORDER} url="https://indiaspora.ch/de/indischer-laden" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-sm space-y-3" style={{ color: "var(--text-2)" }}>
        <p>
          Sie suchen einen indischen Laden in Ihrer Nähe? Hier finden Sie indische Lebensmittelgeschäfte in der ganzen Schweiz,
          mit Adresse, Google-Maps-Link und Sortiment: von frischen Curryblättern und Paneer bis zu Atta-Mehl, Dal und Masala-Gewürzen von MDH oder Everest.
          Mehrere Läden liefern auch in die ganze Schweiz.
        </p>
        <p className="text-xs">In English: <Link href="/food/grocery" style={{ color: "var(--in)" }}>Indian grocery stores in Switzerland</Link> · En français : <Link href="/fr/epicerie-indienne" style={{ color: "var(--in)" }}>Épicerie indienne en Suisse</Link></p>
        <UpdatedNote lang="de" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {ORDER.map(c => <CityStores key={c} city={c} lang="de" />)}
        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>Indische Lebensmittel online bestellen</h2>
          <ul className="text-sm space-y-2" style={{ color: "var(--text-2)" }}>
            {ONLINE.map(o => <li key={o.name}><a href={o.url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)", fontWeight: 700 }}>{o.name}</a></li>)}
          </ul>
        </section>
        <section className="text-sm" style={{ color: "var(--text-2)" }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>Häufige Fragen</h2>
          <p><strong>Was gibt es im indischen Laden, aber nicht bei Migros oder Coop?</strong> Frische Curryblätter, Methi und Drumsticks, Atta (Chapati-Mehl) und Besan, Chana-, Toor-, Urad- und Moong-Dal, Tamarinde, indische Pickles, Papad und Snacks sowie Marken wie MDH, Everest und Aashirvaad.</p>
          <p className="mt-3"><strong>Welcher Laden ist bei mir in der Nähe?</strong> Wählen Sie Ihre Stadt: {ORDER.map((c, i) => <span key={c}>{i > 0 && " · "}<Link href={`/food/${c}`} style={{ color: "var(--in)" }}>{CITIES[c].de}</Link></span>)}.</p>
        </section>
      </div>
    </div>
  );
}
