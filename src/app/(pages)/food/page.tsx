import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Indian Food & Dining in Switzerland",
  description: "Find the best Indian restaurants, grocery stores, catering services, and cooking classes across Switzerland.",
  openGraph: {
    title: "Indian Food & Dining in Switzerland | IndiaSwiss",
    description: "Find the best Indian restaurants, grocery stores, catering services, and cooking classes across Switzerland.",
  },
};

const restaurants = [
  { name: "Bairavi Restaurant", city: "Zurich", cuisine: "South Indian", address: "Langstrasse 149, 8004 Zürich", note: "Authentic dosas and curries" },
  { name: "Rajasthan Restaurant", city: "Zurich", cuisine: "North Indian", address: "Stauffacherstr. 50, 8004 Zürich", note: "Popular for thalis and tandoor" },
  { name: "Indigo Restaurant", city: "Geneva", cuisine: "Pan-Indian", address: "Rue de Rive 23, 1204 Genève", note: "Upscale Indian fine dining" },
  { name: "Namaste India", city: "Basel", cuisine: "North Indian", address: "Güterstrasse 99, 4053 Basel", note: "Buffet lunch and dinner" },
  { name: "Bombay Dreams", city: "Zurich", cuisine: "Street Food", address: "Seefeldstrasse 60, 8008 Zürich", note: "Mumbai street food inspired" },
  { name: "Maharaja Palace", city: "Bern", cuisine: "North Indian", address: "Marktgasse 32, 3011 Bern", note: "Family-friendly, halal options" },
  { name: "Chennai Diner", city: "Zurich", cuisine: "South Indian", address: "Langstrasse 200, 8004 Zürich", note: "Idli, vada, filter coffee" },
  { name: "Spice Route", city: "Lausanne", cuisine: "Pan-Indian", address: "Rue du Midi 22, 1003 Lausanne", note: "Near EPFL community" },
];

const groceries = [
  { name: "India Supermarkt (Online)", url: "https://indiasupermarkt.ch", desc: "Widest range of Indian groceries delivered across Switzerland", cities: "All Switzerland" },
  { name: "Art of Food", url: "#", desc: "Fresh Indian vegetables, spices, and ready-to-eat items", cities: "Zurich" },
  { name: "Aggarwals Indian Grocery", url: "#", desc: "Pulses, flours, pickles, frozen foods, pooja items", cities: "Zurich" },
  { name: "Salpers Asian Grocery", url: "#", desc: "Pan-Asian with good Indian section", cities: "Zurich, Geneva" },
  { name: "Asian Food Store", url: "#", desc: "Indian spices, lentils, basmati rice", cities: "Basel" },
  { name: "Epicentre", url: "#", desc: "Indian and Asian groceries", cities: "Geneva" },
];

const subCategories = [
  { label: "Restaurants", href: "/food/restaurants", icon: "🍽️", desc: "200+ Indian restaurants across Switzerland" },
  { label: "Grocery & Spices", href: "/food/grocery", icon: "🛒", desc: "Indian grocery stores and online delivery" },
  { label: "Catering & Home Chefs", href: "/food/catering", icon: "👨‍🍳", desc: "Home chefs, tiffin services, and event catering" },
  { label: "Cooking Classes", href: "/food/cooking", icon: "🍳", desc: "Learn to cook regional Indian cuisines" },
];

export default function FoodPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Indian Food & Dining in Switzerland"
        subtitle="From authentic South Indian dosas to Punjabi dhabas — find the best Indian food, grocery stores, home chefs, and tiffin services across Switzerland."
        badge="200+ Listings"
        gradient="from-amber-500 to-orange-500"
        breadcrumbs={[{ label: "Food & Dining" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {subCategories.map((cat) => (
            <Link key={cat.label} href={cat.href} className="glass rounded-2xl p-5 card-hover group">
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="font-semibold text-white mb-1 group-hover:text-orange-400 transition-colors">{cat.label}</h3>
              <p className="text-xs text-slate-400">{cat.desc}</p>
            </Link>
          ))}
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2">Featured Restaurants</h2>
          <p className="text-slate-400 mb-8">Handpicked Indian restaurants across Switzerland — from casual dhabas to fine dining</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {restaurants.map((r) => (
              <div key={r.name} className="glass rounded-2xl p-5 card-hover">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-white">{r.name}</h3>
                    <span className="text-xs text-orange-400">{r.cuisine}</span>
                  </div>
                  <span className="text-xs bg-white/10 text-slate-300 px-2 py-1 rounded-full">{r.city}</span>
                </div>
                <p className="text-sm text-slate-400 mb-2">{r.address}</p>
                <p className="text-xs text-slate-500">{r.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2">Indian Grocery Stores</h2>
          <p className="text-slate-400 mb-8">Find Indian spices, dals, flours, frozen foods, and pooja items near you</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {groceries.map((g) => (
              <div key={g.name} className="glass rounded-2xl p-5 card-hover">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-white">{g.name}</h3>
                  <span className="text-xs bg-white/10 text-slate-300 px-2 py-1 rounded-full">{g.cities}</span>
                </div>
                <p className="text-sm text-slate-400 mb-3">{g.desc}</p>
                {g.url !== "#" && (
                  <a href={g.url} target="_blank" rel="noopener noreferrer" className="text-xs text-orange-400 hover:text-orange-300">
                    Visit website →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">🍱 Tiffin & Home Chef Services</h2>
            <p className="text-slate-400 mb-6">Enjoy home-cooked Indian meals delivered to your door — perfect for working professionals and students</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-orange-400 mb-3">Zurich Tiffin Services</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Desi Tiffin Zurich — Monthly subscriptions, veg/non-veg</li>
                  <li>• Maa ki Rasoi — Home-style Punjabi meals, Whatsapp orders</li>
                  <li>• South Indian Kitchen Zurich — Thali delivery, vegan options</li>
                  <li>• Gujarat Dabba — Authentic Gujarati thali weekly</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-orange-400 mb-3">Geneva & Basel</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Indian Home Kitchen Geneva — Event catering & daily tiffin</li>
                  <li>• Spice Affairs Basel — Corporate catering and tiffin</li>
                  <li>• Bern Tiffin Network — Community-run meal sharing group</li>
                  <li>• Lausanne Indian Meals — Student-focused affordable tiffin</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-6">💡 Find tiffin services via Facebook groups: "Indians in Zurich", "Desi Moms Switzerland", "Indian Community Geneva"</p>
          </div>
        </section>

        <div className="glass rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">List Your Restaurant or Food Business</h3>
          <p className="text-slate-400 mb-6">Reach thousands of Indians in Switzerland — add your restaurant, grocery store, or tiffin service</p>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:from-amber-600 hover:to-orange-600 transition-all">
            Submit Listing
          </button>
        </div>
      </div>
    </div>
  );
}
