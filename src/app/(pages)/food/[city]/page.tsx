import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import { CITIES, ONLINE, storesIn, type CityKey } from "@/lib/grocery";
import { CityStores, UpdatedNote, GroceryJsonLd } from "@/components/food/GroceryDirectory";

const KEYS = Object.keys(CITIES) as CityKey[];
export const dynamicParams = false;
export function generateStaticParams() { return KEYS.map(city => ({ city })); }

type Props = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  if (!KEYS.includes(city as CityKey)) return {};
  const c = CITIES[city as CityKey];
  const n = storesIn(city as CityKey).length;
  return {
    title: `Indian Grocery in ${c.en}: ${n} Indian Grocery Store${n > 1 ? "s" : ""} Near You`,
    description: `Indian grocery stores in ${c.region}: addresses, phone numbers, Google Maps links and what each shop sells (spices, dals, atta, fresh vegetables, frozen food). Indischer Laden ${c.de} · Épicerie indienne ${c.fr}.`,
    alternates: { canonical: `https://indiaspora.ch/food/${city}` },
    keywords: [`indian grocery ${c.en.toLowerCase()}`, `indian grocery near me ${c.en.toLowerCase()}`, `indischer laden ${c.de.toLowerCase()}`, `épicerie indienne ${c.fr.toLowerCase()}`, "indian grocery near me"],
  };
}

export default async function CityGroceryPage({ params }: Props) {
  const { city } = await params;
  if (!KEYS.includes(city as CityKey)) notFound();
  const key = city as CityKey;
  const c = CITIES[key];
  const others = KEYS.filter(k => k !== key);
  return (
    <div>
      <PageHeader
        title={`Indian Grocery Stores in ${c.en}`}
        subtitle={`Indian grocery shops in ${c.region}, with addresses, Maps links and what they sell.`}
        badge="Groceries"
        breadcrumbs={[{ label: "Food & Dining", href: "/food" }, { label: "Grocery Stores", href: "/food/grocery" }, { label: c.en }]}
      />
      <GroceryJsonLd cities={[key]} url={`https://indiaspora.ch/food/${key}`} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-sm space-y-3" style={{ color: "var(--text-2)" }}>
        <p>
          Looking for an Indian grocery near you in {c.en}? These shops stock Indian spices and masalas, dals, rice, atta,
          snacks and, at most of them, fresh Indian vegetables. Tap Google Maps for directions and current opening hours.
        </p>
        <UpdatedNote />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <CityStores city={key} />
        <section>
          <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>Indian groceries delivered in {c.en}</h2>
          <ul className="text-sm space-y-2" style={{ color: "var(--text-2)" }}>
            {ONLINE.map(o => <li key={o.name}><a href={o.url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)", fontWeight: 700 }}>{o.name}</a>: {o.desc}</li>)}
          </ul>
        </section>
        <section className="text-sm" style={{ color: "var(--text-2)" }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>Other cities</h2>
          <p className="flex flex-wrap gap-2">
            {others.map(o => <Link key={o} href={`/food/${o}`} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ border: "1px solid var(--border-2)", color: "var(--text)" }}>Indian grocery {CITIES[o].en}</Link>)}
            <Link href="/food/grocery" className="px-3 py-1 rounded-full text-xs font-semibold" style={{ border: "1px solid var(--border-2)", color: "var(--text)" }}>All of Switzerland</Link>
          </p>
          {key === "zurich" && <p className="mt-4">New in Zurich? See our <Link href="/cities/zurich" style={{ color: "var(--in)", fontWeight: 700 }}>guide for Indians in Zurich</Link>.</p>}
          <p className="mt-4">Missing a shop or spotted an error? <Link href="/get-verified" style={{ color: "var(--in)", fontWeight: 700 }}>Tell us</Link>.</p>
        </section>
      </div>
    </div>
  );
}
