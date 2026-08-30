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
    name: "Spiceitupp — Personal Indian Chef",
    location: "Basel / Zurich / Bern area",
    format: "In-home personal chef & classes",
    note: "Certified personal chef who comes to your home and cooks authentic Indian food. Also offers hands-on Indian cooking classes. From CHF 65/hour for up to 4 adults. Covers Basel, Bern, Zurich, and Zug.",
    url: "https://spiceitupp.com",
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
  { name: "Hebbars Kitchen", focus: "Quick South Indian & North Indian recipes", url: "https://www.youtube.com/@HebbarsKitchen" },
  { name: "Kunal Kapur", focus: "Professional chef techniques and regional recipes", url: "https://www.youtube.com/@KunalKapur" },
  { name: "Ranveer Brar", focus: "Restaurant-style cooking and food history", url: "https://www.youtube.com/@RanveerBrar" },
  { name: "Nisha Madhulika", focus: "Hindi vegetarian recipes for home cooks", url: "https://www.youtube.com/@nishamadhulika" },
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
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Classes & Instructors in Switzerland</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {classProviders.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold mb-0.5 group-hover:text-amber-400 transition-colors" style={{ color: "var(--text)" }}>{p.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs/40" style={{ color: "var(--text)" }}>{p.location}</span>
                  <span className="text-white/20">·</span>
                  <span className="text-xs text-amber-400">{p.format}</span>
                </div>
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{p.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>Regional Cuisines You Can Learn</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {cuisines.map((c) => (
              <div key={c.name} className="glass rounded-2xl p-5">
                <h3 className="text-base font-semibold text-amber-400 mb-1">{c.name}</h3>
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{c.dishes}</p>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>Popular Workshop Topics</h2>
          <div className="glass rounded-2xl p-6">
            <ul className="space-y-2">
              {learnTopics.map((topic) => (
                <li key={topic} className="flex items-start gap-2/70 text-sm" style={{ color: "var(--text)" }}>
                  <span className="text-amber-400 mt-0.5">•</span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Online Resources: YouTube Channels</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {youtubeChannels.map((ch) => (
              <a key={ch.name} href={ch.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold mb-1 group-hover:text-amber-400 transition-colors" style={{ color: "var(--text)" }}>{ch.name}</h3>
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{ch.focus}</p>
              </a>
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
