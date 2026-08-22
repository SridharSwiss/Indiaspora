import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indian Cooking Classes in Switzerland",
  description: "Learn regional Indian cooking — classes, workshops, community events, and YouTube resources.",
  openGraph: {
    title: "Indian Cooking Classes in Switzerland | IndiaSwiss",
    description: "Learn regional Indian cooking — classes, workshops, community events, and YouTube resources.",
  },
};

const classProviders = [
  {
    name: "Urban Rasoi Zurich",
    location: "Meilen / Zurich",
    format: "Group & private in-home classes",
    note: "Run by Reena, a trained Indian chef. Offers group street food workshops, private one-on-one sessions, and bespoke cooking events for friends or corporate groups. Home visits within 5 km of Zurich city or 15 km of Meilen.",
    url: "https://www.urbanrasoizurich.com",
  },
  {
    name: "Smriti Chhabra — Creative Switzerland",
    location: "Zurich",
    format: "Workshop / pop-up class",
    note: "Indian chef teaching authentic Indian cooking using locally sourced Swiss organic ingredients combined with Indian spices. Bookable through the Creative Switzerland platform.",
    url: "https://creativeswitzerland.com/creative-shop/cooking-class-where-indian-food-meets-switzerland-by-smriti-chhabra/",
  },
  {
    name: "Indian Moms Zurich / Swiss Desi",
    location: "Zurich area",
    format: "Community & home chef classes",
    note: "Community of home cooks offering cooking lessons for Indian meals from start to finish. Good for learning regional recipes in a friendly informal setting.",
    url: "https://swissdesi.ch",
  },
  {
    name: "IAGZ Community Workshops",
    location: "Zurich (various venues)",
    format: "Community events",
    note: "The Indian Association of the Canton of Zurich (IAGZ) and other diaspora groups organise cooking workshops tied to festivals and cultural events throughout the year.",
    url: "https://www.iagz.ch",
  },
];

const cuisines = [
  { name: "Punjabi", dishes: "Butter chicken, Dal makhani, Sarson da saag" },
  { name: "South Indian", dishes: "Sambar, Rasam, Chutneys, Avial" },
  { name: "Gujarati", dishes: "Thepla, Dhokla, Undhiyu, Gujarati dal" },
  { name: "Bengali", dishes: "Macher jhol, Kosha mangsho, Mishti doi" },
  { name: "Rajasthani", dishes: "Dal baati churma, Ker sangri, Ghewar" },
];

const learnTopics = [
  "Biryani masterclass — Hyderabadi dum, Lucknowi, and Kolkata styles",
  "Indian breads — roti, paratha, naan, puri, and bhatura",
  "Indian sweets and mithai — gulab jamun, barfi, halwa, kheer",
  "Pickles and preserves — mango achaar, lemon pickle, mixed vegetable",
  "Indian street food — pani puri, bhel puri, vada pav, pav bhaji",
];

const youtubeChannels = [
  { name: "Hebbars Kitchen", focus: "Quick South Indian & North Indian recipes" },
  { name: "Kunal Kapur", focus: "Professional chef techniques and regional recipes" },
  { name: "Ranveer Brar", focus: "Restaurant-style cooking and food history" },
  { name: "Nisha Madhulika", focus: "Hindi vegetarian recipes for home cooks" },
];

export default function CookingPage() {
  return (
    <div>
      <PageHeader
        title="Indian Cooking Classes in Switzerland"
        subtitle="Learn to cook authentic regional Indian cuisines — from Kerala fish curry to Rajasthani dal baati — with expert instructors."
        badge="Classes & Workshops"
        gradient="from-amber-500 to-orange-500"
        breadcrumbs={[
          { label: "Food & Dining", href: "/food" },
          { label: "Cooking Classes" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Classes & Instructors in Switzerland</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {classProviders.map((p) => (
              <div key={p.name} className="glass card-hover rounded-2xl p-5">
                <h3 className="text-base font-semibold text-white mb-0.5">
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                      {p.name}
                    </a>
                  ) : p.name}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-white/40">{p.location}</span>
                  <span className="text-white/20">·</span>
                  <span className="text-xs text-amber-400">{p.format}</span>
                </div>
                <p className="text-sm text-white/60">{p.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Regional Cuisines You Can Learn</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {cuisines.map((c) => (
              <div key={c.name} className="glass rounded-2xl p-5">
                <h3 className="text-base font-semibold text-amber-400 mb-1">{c.name}</h3>
                <p className="text-sm text-white/60">{c.dishes}</p>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Popular Workshop Topics</h2>
          <div className="glass rounded-2xl p-6">
            <ul className="space-y-2">
              {learnTopics.map((topic) => (
                <li key={topic} className="flex items-start gap-2 text-white/70 text-sm">
                  <span className="text-amber-400 mt-0.5">•</span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Online Resources: YouTube Channels</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {youtubeChannels.map((ch) => (
              <div key={ch.name} className="glass card-hover rounded-2xl p-5">
                <h3 className="text-base font-semibold text-white mb-1">{ch.name}</h3>
                <p className="text-sm text-white/60">{ch.focus}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="glass rounded-2xl p-6 border border-amber-500/20">
          <p className="text-white/80 text-sm">
            <span className="font-semibold text-amber-400">Cookware note:</span> Indian cookware like pressure cookers (Hawkins/Prestige), tawas, and kadais are not readily available in Swiss supermarkets. Order online from <strong>indiasupermarkt.ch</strong> or import from India via DHL. Swiss induction hobs work with flat-bottomed kadais and tawas.
          </p>
        </div>
      </div>
    </div>
  );
}
