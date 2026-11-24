import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";
import { CITIES, ONLINE, type CityKey } from "@/lib/grocery";
import { CityStores, UpdatedNote, GroceryJsonLd } from "@/components/food/GroceryDirectory";

export const metadata: Metadata = {
  title: "Indian Grocery Stores in Switzerland: Find an Indian Grocery Near You",
  description: "Indian grocery stores near you in Zurich, Geneva, Basel, Bern, Lausanne and Winterthur: addresses, phone numbers, Google Maps links and what each shop sells, plus online Indian grocery delivery across Switzerland.",
  keywords: ["indian grocery near me", "indian grocery", "indian grocery switzerland", "indischer laden", "épicerie indienne", "indian grocery zurich", "indian grocery geneva", "indian grocery basel", "indian grocery bern", "indian grocery lausanne"],
  alternates: {
    canonical: "https://indiaspora.ch/food/grocery",
    languages: { en: "https://indiaspora.ch/food/grocery", "de-CH": "https://indiaspora.ch/de/indischer-laden", "fr-CH": "https://indiaspora.ch/fr/epicerie-indienne", "x-default": "https://indiaspora.ch/food/grocery" },
  },
  openGraph: {
    title: "Indian Grocery Stores in Switzerland | Indiaspora",
    description: "Indian grocery shops by city with addresses, Maps links and online delivery options.",
  },
};

const CITY_ORDER: CityKey[] = ["zurich", "geneva", "basel", "bern", "lausanne"];

export default function GroceryPage() {
  return (
    <div>
      <PageHeader
        title="Indian Grocery Stores in Switzerland"
        subtitle="Find the ingredients you need — from fresh curry leaves to atta flour — at Indian grocery stores across Switzerland."
        badge="Groceries"
        gradient="from-green-500 to-emerald-500"
        heroImage="/images/heroes/food-grocery.webp"
        heroImageAlt="Indian food and grocery in Switzerland"
        heroImagePosition="center 40%"
        breadcrumbs={[
          { label: "Food & Dining", href: "/food" },
          { label: "Grocery Stores" },
        ]}
      />

      <GroceryJsonLd cities={CITY_ORDER} url="https://indiaspora.ch/food/grocery" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-sm space-y-3" style={{ color: "var(--text-2)" }}>
        <p>
          Looking for an Indian grocery near you? Below are Indian grocery stores in Zurich, Geneva, Basel, Bern, Lausanne and Winterthur,
          with addresses, Google Maps links and what each shop sells, from fresh curry leaves and paneer to atta, dals and MDH or Everest masalas.
          Prefer delivery? Several Swiss shops ship Indian groceries nationwide.
        </p>
        <p className="flex flex-wrap gap-2 items-center">
          <span>Jump to your city:</span>
          {CITY_ORDER.map(c => <Link key={c} href={`/food/${c}`} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ border: "1px solid var(--border-2)", color: "var(--text)" }}>{CITIES[c].en}</Link>)}
        </p>
        <p className="text-xs">
          Auf Deutsch: <Link href="/de/indischer-laden" style={{ color: "var(--in)" }}>Indischer Laden in der Schweiz</Link> · En français : <Link href="/fr/epicerie-indienne" style={{ color: "var(--in)" }}>Épicerie indienne en Suisse</Link>
        </p>
        <UpdatedNote />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {CITY_ORDER.map(c => <CityStores key={c} city={c} />)}

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Order Indian groceries online in Switzerland</h2>
          <div className="space-y-3">
            {ONLINE.map(o => (
              <a key={o.name} href={o.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block" style={{ textDecoration: "none" }}>
                <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>{o.name}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{o.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--text)" }}>Run an Indian grocery store?</h2>
          <p className="text-sm" style={{ color: "var(--text-2)" }}>Get your shop listed or corrected and receive a &ldquo;Listed on Indiaspora&rdquo; badge for your website. <Link href="/get-verified" style={{ color: "var(--in)", fontWeight: 700 }}>Get your listing verified →</Link></p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>What's Available in Swiss Supermarkets</h2>
          <div className="glass rounded-2xl p-6">
            <p className="text-sm mb-4" style={{ color: "var(--text-2)" }}>You don't need to visit a specialist store for everything. Swiss supermarkets now stock more Indian staples than ever:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-semibold mb-2 text-green-400">Migros & Coop — typically stock:</p>
                <ul className="space-y-1" style={{ color: "var(--text-2)" }}>
                  {["Basmati and jasmine rice (2 kg+ bags)", "Red and green lentils (Linsen)", "Chickpeas (canned and dried)", "Coconut milk and coconut cream", "Garam masala, turmeric, cumin, coriander", "Paneer (Migros Select and bio ranges)", "Naan bread (refrigerated section)", "Mango chutney and lime pickle", "Patak's curry pastes"].map(i => <li key={i}>• {i}</li>)}
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-green-400">Go to an Indian store for:</p>
                <ul className="space-y-1" style={{ color: "var(--text-2)" }}>
                  {["Fresh curry leaves, methi, drumsticks", "Atta (chapati flour) and besan", "Indian brands (Aashirvaad, MDH, Everest, Priya)", "Chana dal, toor dal, urad dal, moong dal", "Tamarind paste and raw tamarind", "Indian pickles (Priya, Mother's Recipe)", "Papad, chakli, mixture, and Indian snacks", "Pressure cookers, tawas, kadais"].map(i => <li key={i}>• {i}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
