import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Users } from "lucide-react";
import { CITIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "City Guides",
  description: "Indian community guides for Zurich, Geneva, Basel, Bern, Lausanne, and other Swiss cities.",
};

const CITY_DETAILS: Record<string, { restaurants: string[]; associations: string[]; temples: string[]; tips: string[] }> = {
  Zurich: {
    restaurants: ["Bairavi (South Indian)", "Rajasthan Restaurant", "Mumbai Street", "India Gate"],
    associations: ["IAGZ – Indian Association of Greater Zurich", "Hindu Swayamsevak Sangh", "Gujarati Samaj Switzerland"],
    temples: ["ISKCON Krishna Temple", "Glatbrugg Siva Temple", "Arya Samaj Switzerland"],
    tips: ["ZVV day passes are great value for exploring the city", "Langstrasse area has Indian grocery stores", "ETH area is popular with Indian students"],
  },
  Geneva: {
    restaurants: ["Indigo Restaurant", "Maharaja Geneva", "New India Restaurant"],
    associations: ["Indian Association Geneva (IAG)", "Indian Women Connect Geneva"],
    temples: ["Chinmaya Mission Switzerland (Geneva branch)"],
    tips: ["Strong UN/diplomat community — very cosmopolitan", "Carouge has a great Indian restaurant scene", "Geneva is bilingual — French is essential here"],
  },
  Basel: {
    restaurants: ["Taj Mahal Basel", "Namaste Basel", "Passage Indian Restaurant"],
    associations: ["ICAS – Indian Cultural Association Switzerland", "Indian Students Basel University"],
    temples: ["Sri Durga Temple Basel"],
    tips: ["Pharma companies (Novartis, Roche) are major employers of Indians", "Holi Festival Basel is a highlight every March", "Basel borders Germany and France — very convenient"],
  },
  Bern: {
    restaurants: ["Masala Kitchen", "New Delhi Restaurant", "Bollywood Spice"],
    associations: ["Indian Association Berne (IAB)", "Bharatiya Association Berne"],
    temples: ["Art of Living Berne", "ISKCON Berne"],
    tips: ["Embassy of India is in Bern — convenient for consular services", "Compact city — everything is within walking distance", "University of Bern has a good Indian student community"],
  },
  Lausanne: {
    restaurants: ["Kerala Kitchen", "Bollywood Lausanne", "Spice of India"],
    associations: ["EPFL Indian Student Association", "Indian Association Lausanne"],
    temples: ["Art of Living Lausanne", "Brahma Kumaris Lausanne"],
    tips: ["EPFL has hundreds of Indian students and researchers", "Lake Geneva views are spectacular — weekend boat trips", "French is the primary language — learning it helps a lot"],
  },
};

export default function CitiesPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-40" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag mb-6">City Guides</div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 mt-3">
            Indians Across <span className="gradient-text">26 Swiss Cantons</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            City-by-city guides to Indian restaurants, associations, temples, and community resources across Switzerland.
          </p>
        </div>
      </section>

      <div className="divider-warm" />

      {/* City Overview Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            {CITIES.map((city) => (
              <a
                key={city.name}
                href={`#${city.slug}`}
                className="card group block overflow-hidden"
              >
                <div className={`bg-gradient-to-br ${city.color} p-6`}>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-white/80" />
                    <span className="text-white/80 text-sm">{city.population}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-white/90 transition-colors">{city.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm text-slate-400 mb-4">{city.description}</p>
                  <ul className="space-y-1.5">
                    {city.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 opacity-60" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center gap-1 text-sm text-orange-400 font-medium">
                    View Guide <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Detailed City Sections */}
      {CITIES.map((city) => {
        const details = CITY_DETAILS[city.name];
        return (
          <section key={city.name} id={city.slug} className="py-20 pattern-dots">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-4 mb-12">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${city.color} flex items-center justify-center`}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">{city.name}</h2>
                  <div className="flex items-center gap-1.5 text-slate-400 mt-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{city.population}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="card p-5">
                  <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">🍛 Restaurants</h4>
                  <ul className="space-y-2">
                    {details?.restaurants.map((r) => (
                      <li key={r} className="text-sm text-slate-400">{r}</li>
                    ))}
                  </ul>
                </div>
                <div className="card p-5">
                  <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">👥 Associations</h4>
                  <ul className="space-y-2">
                    {details?.associations.map((a) => (
                      <li key={a} className="text-sm text-slate-400">{a}</li>
                    ))}
                  </ul>
                </div>
                <div className="card p-5">
                  <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">🛕 Temples</h4>
                  <ul className="space-y-2">
                    {details?.temples.map((t) => (
                      <li key={t} className="text-sm text-slate-400">{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="card p-5">
                  <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">💡 Local Tips</h4>
                  <ul className="space-y-2">
                    {details?.tips.map((t) => (
                      <li key={t} className="text-xs text-slate-400 leading-relaxed">{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="card p-10" style={{ borderColor: "rgba(249,115,22,0.2)" }}>
            <div className="text-4xl mb-4">🗺️</div>
            <h2 className="text-3xl font-bold text-white mb-4">Know Your City?</h2>
            <p className="text-slate-400 mb-8">
              Help fellow Indians discover hidden gems in your Swiss city — restaurants, associations, events.
            </p>
            <a href="mailto:hello@indiaswiss.ch?subject=City%20Guide%20Contribution" className="btn btn-primary">
              Contribute to City Guide <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
