import type { Metadata } from "next";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Food & Dining",
  description: "Discover the best Indian restaurants, grocery stores, caterers, and home chefs across Switzerland.",
};

const RESTAURANTS = [
  { name: "Restaurant Vulkan", city: "Zurich", desc: "A Zurich landmark for Indian cuisine near the main station — authentic clay-oven tandoor, rich curries, and fresh naan. Often described as ‘Little India in the heart of Zurich’.", url: "https://restaurant-vulkan.ch", type: "North Indian" },
  { name: "Taj Mahal Zurich", city: "Zurich", desc: "Halal North Indian cuisine with a popular CHF 19.90 lunch buffet (6 mains, salads, dessert) and 40+ à la carte dishes in the evening.", url: "https://tajmahal-zurich.ch", type: "North Indian" },
  { name: "Tamarind Garden", city: "Zurich", desc: "Authentic Indian flavours with carefully described spice profiles — known for its warm atmosphere and attention to detail on regional recipes.", url: "https://tamarindgarden.ch", type: "Pan-Indian" },
  { name: "Café Gandhi", city: "Geneva", desc: "Rated 9.3/10 on TheFork — Geneva’s most celebrated Indian restaurant, dedicated to the Thali tradition with exceptional quality and service.", url: "#", type: "Pan-Indian" },
  { name: "Indian Tandoori Palace", city: "Basel", desc: "Family-owned restaurant with fresh local ingredients, authentic clay-oven cooking, and thoughtful options for vegetarians and gluten-free diners.", url: "https://indiantandooripalacerestaurant.ch", type: "North Indian" },
  { name: "Royal Palace Basel", city: "Basel", desc: "Fresh Indian food in a relaxed atmosphere at Spalenring 160 — clay oven tandoori, butter chicken, and a wide vegetarian selection.", url: "https://royal-palace.ch", type: "North Indian" },
  { name: "Kailash Parbat", city: "Zurich", desc: "Mumbai street food in Zurich — chaats, pani puri, gravies, and snacks with a strong following from the Indian community.", url: "#", type: "Street Food" },
  { name: "Indian Bites", city: "Geneva", desc: "Popular Indian restaurant in Geneva serving a wide range of North and South Indian dishes for the city’s diverse international community.", url: "https://indianbites.ch", type: "Pan-Indian" },
];

const GROCERY = [
  { name: "Aggarwal AG", city: "Zurich / Basel / Bern / Baden", desc: "India’s most established grocery chain in Switzerland since 1986 — 4 stores across Switzerland with fresh vegetables, spices, Patanjali products, pickles, and fish.", url: "https://aggarwal.ch" },
  { name: "India Supermarkt", city: "Zurich + Online", desc: "20+ years of service — physical store in Zurich plus online ordering with Switzerland-wide delivery for Indian groceries, spices, and specialty products.", url: "https://indiasupermarkt.ch" },
  { name: "Seelan Market", city: "Geneva", desc: "Geneva’s leading South Asian supermarket — Indian, Sri Lankan, Pakistani, and Bengali groceries for the city’s diverse Asian community.", url: "https://seelanmarket.ch" },
  { name: "Dalchinii", city: "Nationwide (Online)", desc: "Online Indian grocery shop with a wide range of spices, lentils, rice, flours, and hard-to-find Indian brands delivered across Switzerland.", url: "https://dalchinii.ch" },
  { name: "Salpers", city: "Nationwide (Online)", desc: "Online Asian and Indian grocery shop — spices, lentils, dry fruits, rice, atta, and specialty items delivered across Switzerland.", url: "https://salpers.ch" },
  { name: "Art of Food", city: "Zurich", desc: "Comprehensive Indian grocery store in Zurich with fresh vegetables, spices, lentils, ready meals, and a deli counter with Indian snacks.", url: "https://artoffood.ch" },
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
                href={g.url}
                target="_blank"
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
              Own an Indian restaurant, grocery store, or catering service in Switzerland? Get listed for free and reach 25,000+ Indians.
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
