import PageHeader from "@/components/ui/PageHeader";

const restaurantsByCity = [
  {
    city: "Zurich",
    restaurants: [
      { name: "Bairavi", cuisine: "South Indian", address: "Langstrasse 149, 8004 Zürich", specialty: "Dosa & Idli", price: "CHF 15–25" },
      { name: "Rajasthan", cuisine: "North Indian", address: "Stauffacherstr 50, 8004 Zürich", specialty: "Dal Baati Churma", price: "CHF 20–35" },
      { name: "Bombay Dreams", cuisine: "Indian Fusion", address: "Seefeldstrasse 60, 8008 Zürich", specialty: "Pav Bhaji & Vada Pav", price: "CHF 18–30" },
      { name: "Chennai Diner", cuisine: "Tamil", address: "Langstrasse 200, 8005 Zürich", specialty: "Chettinad Chicken", price: "CHF 16–28" },
    ],
  },
  {
    city: "Geneva",
    restaurants: [
      { name: "Indigo", cuisine: "Indian Contemporary", address: "Rue de Rive 23, 1204 Genève", specialty: "Butter Chicken", price: "CHF 22–40" },
      { name: "Namaste India Geneva", cuisine: "North Indian", address: "Geneva Centre", specialty: "Biryani & Kebabs", price: "CHF 20–35" },
      { name: "Taj Mahal", cuisine: "Pan Indian", address: "Rue de Chantepoulet, 1201 Genève", specialty: "Tandoori Platter", price: "CHF 18–32" },
    ],
  },
  {
    city: "Basel",
    restaurants: [
      { name: "Namaste India Basel", cuisine: "North Indian", address: "Güterstrasse 99, 4053 Basel", specialty: "Rogan Josh", price: "CHF 18–30" },
      { name: "Malabar Basel", cuisine: "Kerala / South Indian", address: "Basel", specialty: "Fish Curry & Appam", price: "CHF 16–28" },
    ],
  },
  {
    city: "Bern",
    restaurants: [
      { name: "Maharaja Palace", cuisine: "North Indian", address: "Marktgasse 32, 3011 Bern", specialty: "Paneer Tikka Masala", price: "CHF 20–35" },
      { name: "India Gate", cuisine: "Pan Indian", address: "Bern Centre", specialty: "Mixed Grill Platter", price: "CHF 18–30" },
    ],
  },
  {
    city: "Lausanne",
    restaurants: [
      { name: "Spice Route", cuisine: "Pan Indian", address: "Rue du Midi 22, 1003 Lausanne", specialty: "Lamb Biryani", price: "CHF 20–35" },
      { name: "Indian Palace", cuisine: "North Indian", address: "Lausanne", specialty: "Chicken Tikka", price: "CHF 18–28" },
    ],
  },
];

export default function RestaurantsPage() {
  return (
    <div>
      <PageHeader
        title="Indian Restaurants in Switzerland"
        subtitle="From South Indian dosas to Punjabi dhabas — discover the best Indian restaurants across all Swiss cities."
        badge="100+ Restaurants"
        gradient="from-amber-500 to-orange-500"
        breadcrumbs={[
          { label: "Food & Dining", href: "/food" },
          { label: "Restaurants" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {restaurantsByCity.map((group) => (
            <section key={group.city}>
              <h2 className="text-2xl font-bold text-white mb-6">{group.city}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.restaurants.map((restaurant) => (
                  <div key={restaurant.name} className="glass card-hover rounded-2xl p-6 flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-white">{restaurant.name}</h3>
                    <span className="text-sm text-amber-400 font-medium">{restaurant.cuisine}</span>
                    <p className="text-sm text-white/70">{restaurant.address}</p>
                    <p className="text-sm text-white/60"><span className="font-medium text-white/80">Specialty:</span> {restaurant.specialty}</p>
                    <p className="text-sm text-white/60"><span className="font-medium text-white/80">Price:</span> {restaurant.price}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 glass rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">How to Find More Restaurants</h2>
          <ul className="space-y-2 text-white/70">
            <li>🔍 Search Google Maps for <span className="text-white font-medium">'Indian restaurant [city]'</span> to discover newest openings.</li>
            <li>📱 Browse <span className="text-white font-medium">Zomato</span> and <span className="text-white font-medium">TripAdvisor</span> for ratings and reviews.</li>
            <li>💬 Ask in Facebook groups like <span className="text-white font-medium">'Indians in Zurich'</span> or <span className="text-white font-medium">'Indian Community Switzerland'</span> for trusted recommendations.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
