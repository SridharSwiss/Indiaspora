import EmojiIcon from "@/components/ui/EmojiIcon";
import OrgLogo from "@/components/ui/OrgLogo";
import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";
import type { Metadata } from "next";
import { CITIES, storesIn, type CityKey } from "@/lib/grocery";

export const metadata: Metadata = {
  title: "Indian Food and Indian Grocery in Switzerland",
  description: "Indian restaurants, Indian grocery stores near you, caterers, home chefs and cooking classes in Zurich, Geneva, Basel, Bern and Lausanne.",
  alternates: { canonical: "https://indiaspora.ch/food" },
};

const GROCERY_CITIES: CityKey[] = ["zurich", "geneva", "basel", "bern", "lausanne"];
import { UtensilsCrossed, ShoppingCart, ChefHat, Flame } from "lucide-react";

const restaurants = [
  { name: "Bairavi Restaurant", city: "Zurich", cuisine: "South Indian", address: "Langstrasse 149, 8004 Zürich", note: "Authentic dosas and curries", url: "https://www.google.com/maps/search/?api=1&query=Bairavi+Restaurant+Zurich" },
  { name: "Rajasthan Restaurant", city: "Zurich", cuisine: "North Indian", address: "Stauffacherstr. 50, 8004 Zürich", note: "Popular for thalis and tandoor", url: "https://www.google.com/maps/search/?api=1&query=Rajasthan+Restaurant+Zurich" },
  { name: "Indigo Restaurant", city: "Geneva", cuisine: "Pan-Indian", address: "Rue de Rive 23, 1204 Genève", note: "Upscale Indian fine dining", url: "https://www.google.com/maps/search/?api=1&query=Indigo+Restaurant+Geneva+Indian" },
  { name: "Namaste India", city: "Basel", cuisine: "North Indian", address: "Güterstrasse 99, 4053 Basel", note: "Buffet lunch and dinner", url: "https://www.google.com/maps/search/?api=1&query=Namaste+India+Basel" },
  { name: "Bombay Dreams", city: "Zurich", cuisine: "Street Food", address: "Seefeldstrasse 60, 8008 Zürich", note: "Mumbai street food inspired", url: "https://www.google.com/maps/search/?api=1&query=Bombay+Dreams+Zurich+Indian" },
  { name: "Maharaja Palace", city: "Bern", cuisine: "North Indian", address: "Marktgasse 32, 3011 Bern", note: "Family-friendly, halal options", url: "https://www.google.com/maps/search/?api=1&query=Maharaja+Palace+Bern+Indian" },
  { name: "Chennai Diner", city: "Zurich", cuisine: "South Indian", address: "Langstrasse 200, 8004 Zürich", note: "Idli, vada, filter coffee", url: "https://www.google.com/maps/search/?api=1&query=Chennai+Diner+Zurich" },
  { name: "Spice Route", city: "Lausanne", cuisine: "Pan-Indian", address: "Rue du Midi 22, 1003 Lausanne", note: "Near EPFL community", url: "https://www.google.com/maps/search/?api=1&query=Spice+Route+Lausanne+Indian" },
];


const subCategories = [
  { label: "Restaurants", href: "/food/restaurants", icon: <UtensilsCrossed style={{ width: 28, height: 28, color: "var(--sf)" }} />, desc: "200+ Indian restaurants across Switzerland" },
  { label: "Grocery & Spices", href: "/food/grocery", icon: <ShoppingCart style={{ width: 28, height: 28, color: "var(--sf)" }} />, desc: "Indian grocery stores and online delivery" },
  { label: "Catering & Home Chefs", href: "/food/catering", icon: <ChefHat style={{ width: 28, height: 28, color: "var(--sf)" }} />, desc: "Home chefs, tiffin services, and event catering" },
  { label: "Cooking Classes", href: "/food/cooking", icon: <Flame style={{ width: 28, height: 28, color: "var(--sf)" }} />, desc: "Learn to cook regional Indian cuisines" },
];

export default function FoodPage() {
  return (
    <div>
      <PageHeader
        title="Indian Food & Dining in Switzerland"
        subtitle="From authentic South Indian dosas to Punjabi dhabas — find the best Indian food, grocery stores, home chefs, and tiffin services across Switzerland."
        badge="200+ Listings"
        gradient="from-amber-500 to-orange-500"
        heroImage="/hero-food.webp"
        heroImageAlt="Indian food scene in Switzerland"
        heroImagePosition="center 45%"
        breadcrumbs={[{ label: "Food & Dining" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Sub-categories */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {subCategories.map((cat) => (
            <Link key={cat.label} href={cat.href} className="glass rounded-2xl p-5 card-hover group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/images/topics/${cat.href.split("/").pop()}.webp`} alt="" loading="lazy" className="w-full object-cover rounded-xl mb-3" style={{ height: 110 }} />
              <h3 className="font-semibold mb-1 group-hover:text-orange-400 transition-colors" style={{ color: "var(--text)" }}>{cat.label}</h3>
              <p className="text-xs" style={{ color: "var(--text-2)" }}>{cat.desc}</p>
            </Link>
          ))}
        </div>

        {/* Restaurants */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Featured Restaurants</h2>
          <p className="mb-8" style={{ color: "var(--text-2)" }}>Handpicked Indian restaurants across Switzerland — from casual dhabas to fine dining</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {restaurants.map((r) => (
              <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 card-hover block group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/topics/${r.name === "Indigo Restaurant" ? "fine-dining" : r.cuisine.toLowerCase().replace(/\s+/g, "-")}.webp`} alt={`${r.cuisine} cuisine`} loading="lazy" className="w-full object-cover rounded-xl mb-4" style={{ height: 130 }} />
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <OrgLogo name={r.name} />
                    <h3 className="font-semibold group-hover:text-orange-400 transition-colors" style={{ color: "var(--text)" }}>{r.name}</h3>
                    <span className="text-xs text-orange-400">{r.cuisine}</span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ background: "var(--surface)", color: "var(--text-2)" }}>{r.city}</span>
                </div>
                <p className="text-sm mb-2" style={{ color: "var(--text-2)" }}>{r.address}</p>
                <p className="text-xs" style={{ color: "var(--text-3)" }}>{r.note}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Grocery */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Indian Grocery Stores Near You</h2>
          <p className="mb-8" style={{ color: "var(--text-2)" }}>Indian spices, dals, flours, fresh vegetables, frozen foods and pooja items, city by city. <Link href="/food/grocery" style={{ color: "var(--in)", fontWeight: 700 }}>See all Indian grocery stores in Switzerland →</Link></p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {GROCERY_CITIES.map(c => (
              <Link key={c} href={`/food/${c}`} className="glass rounded-2xl p-5 card-hover block" style={{ textDecoration: "none" }}>
                <h3 className="font-semibold" style={{ color: "var(--text)" }}>Indian grocery {CITIES[c].en}</h3>
                <p className="text-xs mt-1" style={{ color: "var(--text-3)" }}>{storesIn(c).length} store{storesIn(c).length > 1 ? "s" : ""} · {storesIn(c).map(x => x.name).slice(0, 2).join(", ")}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs mt-4" style={{ color: "var(--text-3)" }}>Auf Deutsch: <Link href="/de/indischer-laden" style={{ color: "var(--in)" }}>Indischer Laden</Link> · En français : <Link href="/fr/epicerie-indienne" style={{ color: "var(--in)" }}>Épicerie indienne</Link></p>
        </section>

        {/* Tiffin */}
        <section className="mb-16">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text)" }}><span style={{ display: "inline-flex", verticalAlign: "-3px", marginRight: 7 }}><EmojiIcon e="🍱" size={17} /></span>Tiffin & Home Chef Services</h2>
            <p className="mb-6" style={{ color: "var(--text-2)" }}>Enjoy home-cooked Indian meals delivered to your door — perfect for working professionals and students</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-orange-400 mb-3">Zurich Tiffin Services</h3>
                <ul className="space-y-2 text-sm" style={{ color: "var(--text-2)" }}>
                  <li>• Desi Tiffin Zurich — Monthly subscriptions, veg/non-veg</li>
                  <li>• Maa ki Rasoi — Home-style Punjabi meals, Whatsapp orders</li>
                  <li>• South Indian Kitchen Zurich — Thali delivery, vegan options</li>
                  <li>• Gujarat Dabba — Authentic Gujarati thali weekly</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-orange-400 mb-3">Geneva & Basel</h3>
                <ul className="space-y-2 text-sm" style={{ color: "var(--text-2)" }}>
                  <li>• Indian Home Kitchen Geneva — Event catering & daily tiffin</li>
                  <li>• Spice Affairs Basel — Corporate catering and tiffin</li>
                  <li>• Bern Tiffin Network — Community-run meal sharing group</li>
                  <li>• Lausanne Indian Meals — Student-focused affordable tiffin</li>
                </ul>
              </div>
            </div>
            <p className="text-xs mt-6" style={{ color: "var(--text-3)" }}><span style={{ display: "inline-flex", verticalAlign: "-3px", marginRight: 7 }}><EmojiIcon e="💡" size={17} /></span>Find tiffin services via Facebook groups: "Indians in Zurich", "Desi Moms Switzerland", "Indian Community Geneva"</p>
          </div>
        </section>

        {/* CTA */}
        <div className="glass rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>List Your Restaurant or Food Business</h3>
          <p className="mb-6" style={{ color: "var(--text-2)" }}>Reach thousands of Indians in Switzerland — add your restaurant, grocery store, or tiffin service</p>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 font-semibold hover:from-amber-600 hover:to-orange-600 transition-all" style={{ color: "var(--text)" }}>
            Submit Listing
          </button>
        </div>
      </div>
    </div>
  );
}
