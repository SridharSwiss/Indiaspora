import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Food & Dining",
  description: "Discover the best Indian restaurants, grocery stores, caterers, and home chefs across Switzerland.",
};

const RESTAURANTS = [
  { name: "Bairavi Restaurant", city: "Zurich", desc: "Authentic South Indian cuisine — dosas, idlis, and curries in Zurich city centre.", url: "https://bairavi.ch", type: "South Indian" },
  { name: "Rajasthan Restaurant", city: "Zurich", desc: "North Indian classics — dal makhani, butter chicken, and tandoor specialities.", url: "#", type: "North Indian" },
  { name: "Indigo Restaurant", city: "Geneva", desc: "Modern Indian cuisine in the heart of Geneva with an impressive wine list.", url: "#", type: "Modern Indian" },
  { name: "India Gate", city: "Zurich", desc: "Family-friendly restaurant with a wide menu spanning all regions of India.", url: "#", type: "Pan-Indian" },
  { name: "Taj Mahal Restaurant", city: "Basel", desc: "Classic North Indian restaurant serving Basel's Indian community for over 20 years.", url: "#", type: "North Indian" },
  { name: "Masala Kitchen", city: "Bern", desc: "Vegetarian-friendly Indian restaurant in the Swiss capital.", url: "#", type: "Vegetarian" },
  { name: "Kerala Kitchen", city: "Lausanne", desc: "Authentic Kerala cuisine — fish curry, appam, and coconut-based dishes.", url: "#", type: "South Indian" },
  { name: "Mumbai Street", city: "Zurich", desc: "Street food inspired menu — chaat, pav bhaji, and Mumbai favourites.", url: "#", type: "Street Food" },
];

const GROCERY = [
  { name: "Art of Food", city: "Zurich", desc: "Wide selection of Indian spices, lentils, rice, and ready meals.", url: "https://artoffood.ch" },
  { name: "Aggarwals Indian Grocery", city: "Zurich", desc: "Popular Indian grocery store with fresh vegetables, sweets, and snacks.", url: "#" },
  { name: "India Supermarkt (Online)", city: "Nationwide", desc: "Buy Indian groceries, spices, and products online — delivered anywhere in Switzerland.", url: "https://indiasupermarkt.ch" },
  { name: "Salpers Asian Grocery", city: "Zurich", desc: "Asian grocery with a large Indian section — good for hard-to-find ingredients.", url: "#" },
  { name: "Südstern", city: "Zurich", desc: "Indian and South Asian grocery store in Zurich West.", url: "#" },
  { name: "Spice Paradise", city: "Geneva", desc: "Indian spices and groceries in the Geneva region.", url: "#" },
];

export default function FoodPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag mb-6">Food & Dining</div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 mt-3">
            Taste of <span className="gradient-text">India in Switzerland</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            The best Indian restaurants, grocery stores, caterers, and home chefs — all across Switzerland.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <a href="#restaurants" className="btn btn-primary">
              Find Restaurants <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#grocery" className="btn btn-outline">Indian Groceries</a>
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Restaurants */}
      <section id="restaurants" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="tag">Restaurants</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-3">Indian Restaurants</h2>
            <p className="text-slate-400 text-lg">The finest Indian dining experiences across Switzerland.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {RESTAURANTS.map((r) => (
              <a
                key={r.name}
                href={r.url === "#" ? undefined : r.url}
                target={r.url !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="card p-6 group block"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-amber-300" style={{ background: "rgba(245,158,11,0.12)" }}>
                    {r.type}
                  </span>
                </div>
                <h3 className="font-bold text-white text-lg group-hover:text-indigo-400 transition-colors mb-2">{r.name}</h3>
                <p className="text-sm text-slate-400 mb-3">{r.desc}</p>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="w-3 h-3 text-indigo-400" />
                  {r.city}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Grocery */}
      <section id="grocery" className="py-20 pattern-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="tag">Grocery & Spices</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-3">Indian Grocery Stores</h2>
            <p className="text-slate-400 text-lg">Find spices, lentils, rice, snacks, and everything Indian in Switzerland.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {GROCERY.map((g) => (
              <a
                key={g.name}
                href={g.url === "#" ? undefined : g.url}
                target={g.url !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="card p-6 group block"
              >
                <div className="text-2xl mb-3">🛒</div>
                <h3 className="font-bold text-white group-hover:text-indigo-400 transition-colors mb-2">{g.name}</h3>
                <p className="text-sm text-slate-400 mb-3">{g.desc}</p>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="w-3 h-3 text-indigo-400" />
                  {g.city}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Catering */}
      <section id="catering" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="tag">Catering & Home Chefs</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-3">Catering & Tiffin Services</h2>
            <p className="text-slate-400 text-lg">Home-cooked Indian food, tiffin services, and event catering across Switzerland.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Tiffin Service Zurich", desc: "Daily home-cooked Indian meals delivered to your door in Zurich — contact via community Facebook groups.", contact: "Facebook: Indians in Zurich" },
              { name: "Indian Event Catering Switzerland", desc: "Full event catering for weddings, pujas, and corporate events — North and South Indian menus available.", contact: "Contact via IAGZ" },
              { name: "Home Chef Network", desc: "Connect with talented home chefs in your city for authentic regional Indian cooking.", contact: "Whatsapp Community Groups" },
              { name: "Sweet & Mithai Specialists", desc: "Indian sweets (mithai) for festivals, weddings, and gifting — custom orders welcome.", contact: "Various cities" },
            ].map((c) => (
              <div key={c.name} className="card p-6">
                <div className="text-2xl mb-3">👨‍🍳</div>
                <h3 className="font-bold text-white mb-2">{c.name}</h3>
                <p className="text-sm text-slate-400 mb-3">{c.desc}</p>
                <span className="text-xs text-indigo-400 font-medium">{c.contact}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="card p-10" style={{ borderColor: "rgba(249,115,22,0.2)" }}>
            <div className="text-4xl mb-4">🍛</div>
            <h2 className="text-3xl font-bold text-white mb-4">List Your Restaurant or Store</h2>
            <p className="text-slate-400 mb-8">
              Own an Indian restaurant, grocery store, or catering service in Switzerland? Get listed for free.
            </p>
            <a href="mailto:hello@indiaswiss.ch?subject=List%20My%20Food%20Business" className="btn btn-primary">
              Submit Your Listing <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
