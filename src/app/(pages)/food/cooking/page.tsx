import PageHeader from "@/components/ui/PageHeader";

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
        {/* Classes */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Where to Find Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass card-hover rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Community Classes</h3>
              <p className="text-sm text-white/70">IAGZ (Indian Association of the Canton of Zurich) and other diaspora groups regularly organise community cooking workshops for all skill levels.</p>
            </div>
            <div className="glass card-hover rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Private Home Chef Classes</h3>
              <p className="text-sm text-white/70">Many experienced home chefs offer private one-on-one or small group cooking lessons in their kitchens. Find them through Facebook groups like "Desi Moms Switzerland".</p>
            </div>
            <div className="glass card-hover rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Online Classes</h3>
              <p className="text-sm text-white/70">Live Zoom cooking classes by Indian chefs cater to diaspora learners. Look for announcements on Indian community WhatsApp groups and Facebook events.</p>
            </div>
          </div>
        </section>

        {/* What You Can Learn */}
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

        {/* YouTube */}
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

        {/* Cookware Note */}
        <div className="glass rounded-2xl p-6 border border-amber-500/20">
          <p className="text-white/80 text-sm">
            <span className="font-semibold text-amber-400">Cookware note:</span> Indian cookware like pressure cookers (Hawkins/Prestige), tawas, and kadais are not readily available in Swiss supermarkets. Order online from <strong>indiasupermarkt.ch</strong> or import from India via DHL. Swiss induction hobs work with flat-bottomed kadais and tawas.
          </p>
        </div>
      </div>
    </div>
  );
}
