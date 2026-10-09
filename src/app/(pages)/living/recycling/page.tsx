import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Waste & Recycling in Zurich — Complete Guide for Indians in Switzerland",
  description: "How garbage collection works in Zurich: Züri-Sack, waste separation, recycling stations, organic waste (Grüngut), e-waste, and bulk item disposal. A practical guide for Indian residents in Switzerland.",
  keywords: [
    "garbage collection Zurich",
    "how does garbage collection work Zurich",
    "Züri-Sack Switzerland",
    "waste separation Switzerland",
    "recycling Zurich Indians",
    "Grüngut Zurich",
    "recycling stations Zurich",
    "how to dispose waste Switzerland",
    "rubbish collection Switzerland",
    "waste guide Indians Switzerland",
  ],
  openGraph: {
    title: "Waste & Recycling in Zurich — Guide for Indians | IndiaSwiss",
    description: "How garbage collection works in Zurich: Züri-Sack, waste separation, recycling stations, and tips for Indian residents.",
  },
};

const sections = [
  {
    id: "zurisack",
    title: "The Züri-Sack — Zurich's Official Waste Bag",
    color: "#3b82f6",
    content: [
      "In Zurich city, all non-recyclable household waste must go into the official Züri-Sack — a blue tax-included rubbish bag. Disposing waste in any other bag on the street is illegal and can result in a fine.",
      "Züri-Säcke are sold at supermarkets (Migros, Coop, Lidl, Aldi) and petrol stations. They come in 17 L, 35 L, 60 L, and 110 L sizes. The cost (CHF 2–14 per bag) includes the waste disposal fee.",
      "Other cantons have their own equivalent bags — for example the Gemeindesack in Basel or the Kehrichtsack in Bern. Always check your commune's rules.",
    ],
    link: { label: "City of Zurich waste info", url: "https://www.stadt-zuerich.ch/entsorgen" },
  },
  {
    id: "separation",
    title: "What to Separate — Swiss Waste Sorting Rules",
    color: "#10b981",
    content: [
      "Switzerland has strict waste separation rules. The key categories: Recyclables (glass, PET, aluminium, cardboard, paper — free drop-off at yellow collection points across the city) | Organic/Food waste (Grüngut — compostable food scraps, vegetable peelings, cooked food, teabags — goes in the green bin or Grüngut bag) | Batteries and electronics (free return at any electronics retailer or Migros/Coop) | Textile and clothing (orange sacks, free collection once a month) | Bulky items (Sperrgut — must be booked for special collection or taken to a Sammelstelle).",
      "In Indian households: used oil and ghee containers should be thoroughly rinsed before recycling. Spice packets (plastic) go in the Züri-Sack. Glass masala jars go in glass recycling (sorted by colour — white, green, brown).",
      "Indian food packaging tip: tetrapak cartons (like chaas/lassi packs from Indian stores) go in the special Tetrapack collection bin, not glass recycling.",
    ],
    link: { label: "Zurich recycling map (ERZ)", url: "https://www.stadt-zuerich.ch/erz/de/index/entsorgung/recycling.html" },
  },
  {
    id: "schedule",
    title: "Collection Schedule & Recycling Stations",
    color: "#f59e0b",
    content: [
      "Household waste (Züri-Sack) is collected weekly — the day varies by street. Check your street's collection day on the ERZ website or the ZüriInfo app (free, available on iOS and Android).",
      "Recycling points (Sammelstellen) are located across every neighbourhood — look for the yellow collection containers for glass, PET, aluminium, and cardboard. Most are open 7 am to 8 pm, closed Sundays.",
      "Recycling centres (Entsorgungsstationen / Recyclinghöfe) accept bulky items, furniture, appliances, and larger quantities. The largest in Zurich city is at Hagenholzstrasse 110 (ERZ Recyclinghof), open Mon–Fri 7:30 am–5 pm, Sat 8 am–4 pm.",
    ],
    link: { label: "ZüriInfo app & schedule", url: "https://www.stadt-zuerich.ch/erz/de/index/entsorgung/kehrichtabfuhr.html" },
  },
  {
    id: "food",
    title: "Organic Waste (Grüngut) — Especially Relevant for Indian Kitchens",
    color: "#84cc16",
    content: [
      "Indian cooking generates significant organic waste — vegetable peelings, herb stems, leftover sabzi, chapati scraps, eggshells. All of this goes into the Grüngut (organic waste) collection — NOT the Züri-Sack.",
      "Most residential buildings have a green bin (Grüngut-Container). If yours doesn't, you can buy brown Grüngut bags and use the free drop-off containers nearby.",
      "Cooked food, rice, meat, dairy, and even small amounts of oil are accepted in Grüngut. Coconut shells, banana skins, mango skins — all fine. Do NOT put plastic bags, foil, or packaging in the Grüngut.",
    ],
    link: { label: "Grüngut collection info", url: "https://www.stadt-zuerich.ch/erz/de/index/entsorgung/gruengut.html" },
  },
  {
    id: "ewaste",
    title: "E-Waste & Special Items",
    color: "#8b5cf6",
    content: [
      "Switzerland has a free take-back system for all electronics. Return old phones, laptops, kitchen appliances, and cables to any retailer that sells similar items — Mediamarkt, Interdiscount, Migros, Coop, or directly to an ERZ recycling centre. No charge.",
      "Indian-specific items: old pressure cookers, blenders, mixer-grinders — all free e-waste return. Broken steel dabbas go in metal recycling (aluminium/tin collection).",
      "Medicines: return unused or expired medicines to any pharmacy (Apotheke) — free of charge, no questions asked.",
      "Cooking oil: large quantities of used oil (from deep frying) can be returned at ERZ recycling centres. Do not pour oil down drains.",
    ],
    link: { label: "SENS foundation e-waste", url: "https://www.sens.ch" },
  },
  {
    id: "fines",
    title: "Rules & Fines — What to Know",
    color: "#ef4444",
    content: [
      "Waste disposal rules in Switzerland are enforced strictly. Common violations and their fines: Using non-official bags for street disposal: CHF 100–200 | Illegal dumping: CHF 200–1,000+ | Leaving recycling at wrong locations: warning to CHF 100.",
      "Zurich has \"waste detectives\" (Abfalldetektive) who open illegally dumped bags to trace the owner. Always include a Züri-Sack for any street-placed rubbish.",
      "In apartment buildings, check your building's house rules (Hausordnung). Most have specific bins and collection points — your building manager (Hauswart) can explain the local system.",
    ],
    link: null,
  },
];

export default function RecyclingPage() {
  return (
    <div>
      <PageHeader
        title="Waste & Recycling in Switzerland"
        subtitle="How garbage collection works — Züri-Sack, waste separation, Grüngut, recycling stations, and what happens if you get it wrong. A plain-language guide for Indian residents."
        badge="♻️ Living Guide"
        breadcrumbs={[{ label: "Living", href: "/living" }, { label: "Waste & Recycling" }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass rounded-2xl p-5 mb-10 border border-yellow-500/20">
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
            <strong style={{ color: "var(--text)" }}>New to Switzerland?</strong> Waste separation is taken very seriously here — more so than in most countries. Getting it wrong means fines, not just dirty looks. This guide explains the system step by step, with notes on common situations that come up in Indian households.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 rounded-full flex-shrink-0" style={{ background: s.color }} />
                <h2 className="text-lg font-bold" style={{ color: "var(--text)" }}>{s.title}</h2>
              </div>
              <div className="space-y-3">
                {s.content.map((para, i) => (
                  <p key={i} className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{para}</p>
                ))}
              </div>
              {s.link && (
                <a
                  href={s.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 text-xs font-medium hover:underline"
                  style={{ color: s.color }}
                >
                  {s.link.label} →
                </a>
              )}
            </section>
          ))}
        </div>

        <div className="glass rounded-2xl p-6 mt-8 border border-green-500/20">
          <h2 className="text-lg font-bold mb-3" style={{ color: "var(--text)" }}>Quick Reference — Waste by Type</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm" style={{ color: "var(--text-2)" }}>
            {[
              ["Züri-Sack (blue bag)", "Non-recyclable household waste, plastic packaging, food residue"],
              ["Glass recycling", "Bottles, jars (sorted by colour — white/green/brown)"],
              ["PET / plastic bottles", "Yellow PET collection cage at supermarkets"],
              ["Cardboard / paper", "Free collection or yellow paper containers"],
              ["Aluminium / cans", "Aluminium collection bin (often next to glass)"],
              ["Organic / Grüngut", "Food scraps, peelings, cooked food, garden waste"],
              ["Electronics / e-waste", "Free return at any electronics retailer"],
              ["Medicines", "Return to any pharmacy — free"],
              ["Bulky items (Sperrgut)", "Book a special collection or bring to Recyclinghof"],
              ["Textiles / clothing", "Orange bag collection or donation containers"],
            ].map(([type, what]) => (
              <div key={type} className="flex gap-2">
                <span className="font-semibold shrink-0" style={{ color: "var(--text)" }}>{type}:</span>
                <span>{what}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs mt-6 text-center" style={{ color: "var(--text-2)" }}>
          Rules vary by canton and commune. Always check with your local municipality (Gemeinde) or building management for exact collection days and local rules.{" "}
          <a href="https://www.stadt-zuerich.ch/erz" target="_blank" rel="noopener noreferrer" className="underline">ERZ Zurich (stadt-zuerich.ch/erz)</a>
        </p>
      </div>
    </div>
  );
}
