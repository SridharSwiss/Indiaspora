import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import SwissTourismExplorer from "@/components/tourism/SwissTourismExplorer";
import PassCalculator from "@/components/tourism/PassCalculator";

export const metadata: Metadata = {
  title: "Swiss Travel Guide for Indians — Day Trips, Alpine Excursions & Pass Advice",
  description:
    "Curated Switzerland travel itineraries for Indians and visiting parents: Jungfraujoch, Mt. Titlis, Rhine Falls, Glacier 3000, Rigi, Stoos — with senior mobility notes, Indian vegetarian food stops, and Swiss Travel Pass vs Halbtax guidance. Departing from Zurich, Basel, Geneva, Lausanne, Bern, and Zug.",
  keywords: [
    "Switzerland day trips for Indians",
    "Jungfraujoch from Zurich Indian guide",
    "Swiss Travel Pass vs Half Fare Card",
    "senior friendly Switzerland Alps",
    "Indian vegetarian food Switzerland mountains",
    "Mt Titlis Indian food",
    "Bollywood filming locations Switzerland",
    "parents visiting Switzerland day trips",
    "Rhine Falls from Zurich",
    "Glacier 3000 Geneva",
    "Stoos funicular Zug",
    "Rigi mountain Switzerland",
    "Switzerland travel pass calculator",
    "DDLJ filming locations Gstaad Switzerland",
    "Swiss rail pass Indians",
    "Lindt Home of Chocolate tour",
  ],
  openGraph: {
    title: "Switzerland Travel Guide for Indians | Indiaspora",
    description:
      "Curated day trips and Alpine excursions from all Swiss hub cities — with senior mobility notes, Indian food stops, and official pass advice.",
  },
};

const travelSchema = {
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  name: "Switzerland — Indian Diaspora Travel Guide",
  description:
    "Comprehensive travel guide for Indians visiting or living in Switzerland, covering Alpine excursions, Swiss Travel Pass advice, senior-friendly routes, and Indian dining near mountain destinations.",
  url: "https://indiaspora.ch/travel",
  touristType: ["Family", "Indian diaspora", "Senior travellers", "First-time visitors"],
  includesAttraction: [
    {
      "@type": "TouristAttraction",
      name: "Jungfraujoch — Top of Europe",
      url: "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/",
    },
    {
      "@type": "TouristAttraction",
      name: "Mt. Titlis (3,020m) Engelberg",
      url: "https://www.titlis.ch/en",
    },
    {
      "@type": "TouristAttraction",
      name: "Mt. Rigi — Queen of the Mountains",
      url: "https://www.rigi.ch/en",
    },
    {
      "@type": "TouristAttraction",
      name: "Rhine Falls — Europe's Largest Waterfall",
      url: "https://rheinfall.ch/en/",
    },
    {
      "@type": "TouristAttraction",
      name: "Glacier 3000 Peak Walk",
      url: "https://www.glacier3000.ch/en",
    },
    {
      "@type": "TouristAttraction",
      name: "Stoosbahnen — World's Steepest Funicular",
      url: "https://www.stoos.ch/en",
    },
  ],
};

const GOLDEN_RULES = [
  {
    number: "01",
    title: "Check the Summit Webcam Before Buying Any Mountain Ticket",
    body: "Never buy non-refundable Jungfraujoch, Titlis, or Matterhorn tickets days in advance. Check MeteoSwiss or the mountain's live webcam at 7:00 AM on travel day — if the summit is in cloud, swap to a lake boat or chocolate factory day.",
    link: { label: "MeteoSwiss Live Webcams", url: "https://www.meteoswiss.admin.ch/" },
  },
  {
    number: "02",
    title: "Download the 3 Essential Swiss Apps Before You Arrive",
    body: "SBB Mobile (real-time platform numbers + EasyRide swipe-to-board ticketing), MeteoSwiss (postcode-level rain radar and alpine wind warnings), and Swisstopo (official federal offline hiking maps with elevation profiles). All free.",
    link: {
      label: "SBB Mobile App",
      url: "https://www.sbb.ch/en/travel-information/apps/sbb-mobile.html",
    },
  },
  {
    number: "03",
    title: "Never Pay for Bottled Water",
    body: "Every public fountain in Switzerland (unless marked 'Kein Trinkwasser / Pas eau potable') supplies pure glacial drinking water. Carry a reusable 1L bottle — you will drink it on Alpine hikes and it saves CHF 3–5 per bottle.",
    link: null,
  },
  {
    number: "04",
    title: "For Visiting Parents: Book the Electric Shuttle at Oeschinensee",
    body: "Many Swiss mountain areas now have electric shuttle carts for seniors. Oeschinensee (near Kandersteg) runs an electric cart from the gondola station directly to the lake every 30 mins — no walking needed. Always call ahead to confirm seasonal availability.",
    link: {
      label: "Oeschinensee Electric Shuttle Info",
      url: "https://www.oeschinensee.ch/en/",
    },
  },
  {
    number: "05",
    title: "Indian Food at the Summit? Bollywood Restaurant at Jungfraujoch",
    body: "The Bollywood Restaurant at Jungfraujoch (3,454m) serves a full Indian buffet at the highest railway station in Europe. Also: hot Indian vegetarian buffet at Titlis Panorama Restaurant (3,020m). Both are real — both are remarkable.",
    link: {
      label: "Jungfraujoch Official",
      url: "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/",
    },
  },
];

export default function TravelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelSchema) }}
      />
      <div>
        <PageHeader
          title="Explore Switzerland"
          subtitle="Curated day trips and Alpine excursions from every Swiss hub city — with senior/parents mobility notes, Indian vegetarian food stops, and official pass guidance."
          badge="🏔️ Travel Guide"
          gradient="from-teal-500 to-blue-600"
        heroImage="/hero-travel.jpg"
        heroImageAlt="Indiaspora Express — Indians travel Switzerland"
        heroImagePosition="center 40%"
          breadcrumbs={[{ label: "Travel & Excursions" }]}
        />

        <SwissTourismExplorer />

        {/* Golden Rules + Pass Calculator */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="border-t pt-12" style={{ borderColor: "var(--border)" }}>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>
              5 Golden Rules — Save Hundreds of Francs & Ruined Days
            </h2>
            <p className="text-sm mb-8" style={{ color: "var(--text-2)" }}>
              Lessons learned by the Swiss-Indian community over years of hosting visiting family.
            </p>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {GOLDEN_RULES.map((rule) => (
                <div key={rule.number} className="glass rounded-xl p-5">
                  <div className="text-3xl font-black text-orange-500/30 mb-2">{rule.number}</div>
                  <h3 className="font-semibold mb-2 text-sm" style={{ color: "var(--text)" }}>
                    {rule.title}
                  </h3>
                  <p className="text-xs mb-3" style={{ color: "var(--text-2)" }}>
                    {rule.body}
                  </p>
                  {rule.link && (
                    <a
                      href={rule.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-orange-400 hover:text-orange-300 underline"
                    >
                      {rule.link.label} ↗
                    </a>
                  )}
                </div>
              ))}
            </div>

            <PassCalculator />
          </div>
        </div>
      </div>
    </>
  );
}
