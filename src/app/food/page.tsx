import type { Metadata } from "next";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Food & Dining",
  description: "Discover the best Indian restaurants, grocery stores, caterers, and home chefs across Switzerland.",
};

const RESTAURANTS = [
  { name: "Bairavi Restaurant", city: "Zurich", desc: "Authentic South Indian cuisine — crispy dosas, fluffy idlis, and fragrant curries in Zurich Langstrasse. One of the oldest and most beloved Indian restaurants in Switzerland.", url: "https://bairavi.ch", type: "South Indian" },
  { name: "Rajasthan Restaurant", city: "Zurich", desc: "North Indian classics done to perfection — dal makhani, butter chicken, tandoori specialities, and fresh naan baked in a clay oven.", url: "https://www.rajasthanrestaurant.ch", type: "North Indian" },
  { name: "Indigo Restaurant", city: "Geneva", desc: "Modern Indian cuisine with a European twist in the heart of Geneva — innovative tasting menus and an impressive wine list.", url: "https://www.indigogeneva.ch", type: "Modern Indian" },
  { name: "India Gate", city: "Zurich", desc: "Family-friendly restaurant with a wide menu spanning North and South India — great for group dinners and special occasions.", url: "https://www.india-gate.ch", type: "Pan-Indian" },
  { name: "Taj Mahal Restaurant", city: "Basel", desc: "Classic North Indian restaurant serving Basel's Indian community for over two decades — curries, biryanis, and tandoor specialities.", url: "https://www.tajmahal-basel.ch", type: "North Indian" },
  { name: "Masala Kitchen", city: "Bern", desc: "Vegetarian-friendly Indian restaurant in the Swiss capital — fresh daily curries, thalis, and a rotating regional menu.", url: "https://www.masalakitchen.ch", type: "Vegetarian" },
  { name: "Kerala Kitchen", city: "Lausanne", desc: "Authentic Kerala cuisine — fish molee, appam with stew, coconut-based dishes, and Malabar prawn curry.", url: "https://www.keralakitchen.ch", type: "South Indian" },
  { name: "Mumbai Street", city: "Zurich", desc: "Mumbai street food inspired menu — pani puri, pav bhaji, vada pav, and chaat that actually tastes like the real thing.", url: "https://www.mumbaistreet.ch", type: "Street Food" },
];

const GROCERY = [
  { name: "Art of Food", city: "Zurich", desc: "Comprehensive Indian grocery store with fresh vegetables, spices, lentils, ready meals, and a deli counter with Indian snacks.", url: "https://artoffood.ch" },
  { name: "Aggarwals Indian Grocery", city: "Zurich", desc: "Popular family-run Indian grocery store — fresh vegetables, Indian sweets, snacks, and an excellent spice selection.", url: "https://www.aggarwals.ch" },
  { name: "India Supermarkt (Online)", city: "Nationwide", desc: "Buy Indian groceries, spices, lentils, chutneys, and specialty products online — delivered anywhere in Switzerland within 2 days.", url: "https://indiasupermarkt.ch" },
  { name: "Salpers Asian Grocery", city: "Zurich", desc: "Large Asian supermarket with a well-stocked Indian section — good for hard-to-find ingredients like fresh curry leaves, methi, and regional specialities.", url: "https://www.salpers.ch" },
  { name: "Südstern", city: "Zurich", desc: "Indian and South Asian grocery store in Zurich West — reliable for staples like basmati rice, atta, besan, and a range of Indian pickles.", url: "#" },
  { name: "Spice Paradise", city: "Geneva", desc: "Indian spices and groceries in the Geneva region — serves the large Indian diplomatic and expat community in Geneva.", url: "#" },
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
              { name: "Tiffin Services Zurich", desc: "Daily home-cooked Indian meals delivered to your door in Zurich — vegetarian and non-vegetarian options, weekly subscriptions available.", contact: "Find via Indians in Zurich Facebook group" },
              { name: "Indian Event Catering", desc: "Full event catering for weddings, pujas, baby showers, and corporate events — North Indian, South Indian, and Gujarati menus available.", contact: "Contact via IAGZ community" },
              { name: "Home Chef Network", desc: "Connect with talented home chefs across Switzerland for authentic regional cooking — Kerala, Punjab, Gujarat, Andhra, and more.", contact: "WhatsApp community groups" },
              { name: "Mithai & Sweets Specialists", desc: "Indian sweets and mithai for Diwali, Holi, weddings, and gifting — ladoos, barfis, halwa, and custom festival boxes.", contact: "Various cities — enquire via community groups" },
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
              Own an Indian restaurant, grocery store, or catering service in Switzerland? Get listed for free and reach 38,000+ Indians.
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
