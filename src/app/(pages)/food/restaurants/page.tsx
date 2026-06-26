import PageHeader from "@/components/ui/PageHeader";

const cities = [
  {
    name: "Zurich",
    restaurants: [
      { name: "Bairavi Restaurant", cuisine: "South Indian", address: "Langstrasse 149, 8004 Zurich", specialty: "Dosas, idli, sambar, filter coffee", price: "CHF 15–30" },
      { name: "Rajasthan Restaurant", cuisine: "North Indian", address: "Stauffacherstr. 50, 8004 Zurich", specialty: "Thali, tandoor, butter chicken", price: "CHF 20–40" },
      { name: "Bombay Dreams", cuisine: "Mumbai Street Food", address: "Seefeldstrasse 60, 8008 Zurich", specialty: "Pav bhaji, vada pav, chaat", price: "CHF 12–25" },
      { name: "Chennai Diner", cuisine: "South Indian", address: "Langstrasse 200, 8004 Zurich", specialty: "Filter coffee, idli, vada, biryani", price: "CHF 15–28" },
      { name: "Maharani", cuisine: "Pan-Indian", address: "Niederdorfstrasse 14, 8001 Zurich", specialty: "Curry selection, great vegetarian options", price: "CHF 22–45" },
    ],
  },
  {
    name: "Geneva",
    restaurants: [
      { name: "Indigo Restaurant", cuisine: "Fine Dining Indian", address: "Rue de Rive 23, 1204 Geneva", specialty: "Upscale Indian cuisine, wine pairing", price: "CHF 40–80" },
      { name: "Namaste India Geneva", cuisine: "North Indian", address: "Rue de Zurich 40, 1201 Geneva", specialty: "Tandoor, curry, popular with UN staff", price: "CHF 22–42" },
      { name: "Taj Mahal Geneva", cuisine: "North Indian", address: "Rue Chantepoulet 15, 1201 Geneva", specialty: "Classic curries, near Old Town", price: "CHF 25–45" },
    ],
  },
  {
    name: "Basel",
    restaurants: [
      { name: "Namaste India Basel", cuisine: "North Indian", address: "Gueterstrasse 99, 4053 Basel", specialty: "Buffet lunch and dinner, halal options", price: "CHF 18–35" },
      { name: "Malabar Basel", cuisine: "South Indian / Kerala", address: "Basel city centre", specialty: "Kerala fish curry, appam, puttu", price: "CHF 18–32" },
    ],
  },
  {
    name: "Bern",
    restaurants: [
      { name: "Maharaja Palace", cuisine: "North Indian", address: "Marktgasse 32, 3011 Bern", specialty: "Family-friendly, halal options, tandoor", price: "CHF 20–38" },
      { name: "India Gate Bern", cuisine: "North Indian", address: "Bern city centre", specialty: "Biryani, curries, naan", price: "CHF 18–32" },
    ],
  },
  {
    name: "Lausanne",
    restaurants: [
      { name: "Spice Route", cuisine: "Pan-Indian", address: "Rue du Midi 22, 1003 Lausanne", specialty: "Popular with EPFL community", price: "CHF 18–35" },
      { name: "Indian Palace Lausanne", cuisine: "North Indian", address: "Near Lausanne train station", specialty: "Classic curries, biryani", price: "CHF 20–38" },
    ],
  },
];

export default function RestaurantsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Indian Restaurants in Switzerland"
        subtitle="From South Indian dosas to Punjabi dhabas — discover the best Indian restaurants across all Swiss cities."
        badge="100+ Restaurants"
        gradient="from-amber-500 to-orange-500"
        breadcrumbs={[{ label: "Food & Dining", href: "/food" }, { label: "Restaurants" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {cities.map((city) => (
          <section key={city.name} className="mb-14">
            <h2 className="text-2xl font-bold text-white mb-6">{city.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {city.restaurants.map((r) => (
                <div key={r.name} className="glass rounded-2xl p-5 card-hover">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-white">{r.name}</h3>
                    <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full ml-2 shrink-0">{r.price}</span>
                  </div>
                  <p className="text-xs text-orange-400 mb-2">{r.cuisine}</p>
                  <p className="text-sm text-slate-400 mb-1">{r.address}</p>
                  <p className="text-xs text-slate-500">{r.specialty}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="glass rounded-2xl p-6">
          <h3 className="font-semibold text-white mb-3">Find More Restaurants</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Search Google Maps for <span className="text-orange-400">"Indian restaurant [city name]"</span></li>
            <li>Check TripAdvisor Switzerland Indian restaurant listings</li>
            <li>Ask in Facebook group <span className="text-orange-400">"Indians in Zurich"</span> or <span className="text-orange-400">"Indian Community Geneva"</span></li>
            <li>Many restaurants offer lunch deals (CHF 15–22) not listed on menus — always ask</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
