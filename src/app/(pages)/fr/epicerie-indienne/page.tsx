import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { CITIES, ONLINE, type CityKey } from "@/lib/grocery";
import { CityStores, UpdatedNote, GroceryJsonLd } from "@/components/food/GroceryDirectory";

const ORDER: CityKey[] = ["geneva", "lausanne", "bern", "basel", "zurich"];

export const metadata: Metadata = {
  title: "Épicerie indienne en Suisse : Genève, Lausanne, Berne, Zurich",
  description: "Trouvez une épicerie indienne près de chez vous à Genève, Lausanne, Berne, Bâle et Zurich : adresse, téléphone, lien Google Maps et produits. Plus les boutiques en ligne qui livrent dans toute la Suisse.",
  keywords: ["épicerie indienne", "épicerie indienne genève", "épicerie indienne lausanne", "magasin indien suisse", "produits indiens suisse"],
  alternates: {
    canonical: "https://indiaspora.ch/fr/epicerie-indienne",
    languages: { en: "https://indiaspora.ch/food/grocery", "de-CH": "https://indiaspora.ch/de/indischer-laden", "fr-CH": "https://indiaspora.ch/fr/epicerie-indienne", "x-default": "https://indiaspora.ch/food/grocery" },
  },
  openGraph: { locale: "fr_CH", title: "Épicerie indienne en Suisse | Indiaspora", description: "Épiceries indiennes par ville, avec adresses et liens Maps." },
};

export default function EpicerieIndienne() {
  return (
    <div lang="fr-CH">
      <PageHeader
        title="Épicerie indienne en Suisse"
        subtitle="Épices, dals, riz et légumes indiens : les épiceries indiennes de Genève, Lausanne, Berne, Bâle et Zurich."
        badge="Épicerie"
        breadcrumbs={[{ label: "Food & Dining", href: "/food" }, { label: "Épicerie indienne" }]}
      />
      <GroceryJsonLd cities={ORDER} url="https://indiaspora.ch/fr/epicerie-indienne" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-sm space-y-3" style={{ color: "var(--text-2)" }}>
        <p>
          Vous cherchez une épicerie indienne près de chez vous ? Voici les magasins indiens de Suisse romande et alémanique,
          avec adresse, lien Google Maps et produits : feuilles de curry fraîches, paneer, farine atta, dals et épices MDH ou Everest.
          Plusieurs boutiques livrent aussi dans toute la Suisse.
        </p>
        <p className="text-xs">In English: <Link href="/food/grocery" style={{ color: "var(--in)" }}>Indian grocery stores in Switzerland</Link> · Auf Deutsch: <Link href="/de/indischer-laden" style={{ color: "var(--in)" }}>Indischer Laden</Link></p>
        <UpdatedNote lang="fr" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {ORDER.map(c => <CityStores key={c} city={c} lang="fr" />)}
        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>Commander des produits indiens en ligne</h2>
          <ul className="text-sm space-y-2" style={{ color: "var(--text-2)" }}>
            {ONLINE.map(o => <li key={o.name}><a href={o.url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)", fontWeight: 700 }}>{o.name}</a></li>)}
          </ul>
        </section>
        <section className="text-sm" style={{ color: "var(--text-2)" }}>
          <p>Choisissez votre ville : {ORDER.map((c, i) => <span key={c}>{i > 0 && " · "}<Link href={`/food/${c}`} style={{ color: "var(--in)" }}>{CITIES[c].fr}</Link></span>)}.</p>
        </section>
      </div>
    </div>
  );
}
