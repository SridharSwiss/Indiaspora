import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import { Users, MessageSquare, Building2, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Indians in Basel — Community Guide",
  description: "Basel's Indian community — associations, restaurants, groceries, landmarks, pharma employers, Art Basel, and practical tips for Switzerland's tri-national city.",
  openGraph: {
    title: "Indians in Basel — Community Guide | Indiaspora",
    description: "Basel's Indian community — associations, restaurants, groceries, landmarks, pharma employers, Art Basel, and practical tips for Switzerland's tri-national city.",
  },
};

const highlights = [
  { label: "Indian Population", value: "~2,000+", icon: <Users style={{ width: 20, height: 20, color: "var(--sf)" }} /> },
  { label: "Language", value: "Swiss German", icon: <MessageSquare style={{ width: 20, height: 20, color: "var(--sf)" }} /> },
  { label: "Canton", value: "Basel-Stadt", icon: <Building2 style={{ width: 20, height: 20, color: "var(--sf)" }} /> },
  { label: "Key Employers", value: "Novartis, Roche, Lonza", icon: <Briefcase style={{ width: 20, height: 20, color: "var(--sf)" }} /> },
];

const associations = [
  {
    name: "ICAS",
    full: "Indian Cultural Association of Switzerland",
    url: "",
    desc: "One of Switzerland's longest-standing Indian cultural associations. Organises Diwali, Holi, and other cultural events serving the Indian community in the Basel region.",
  },
  {
    name: "InBa — India Basel Festival",
    full: "",
    url: "",
    desc: "Annual festival celebrating Indian culture in Basel — music, dance, food, and art. Brings together the Indian diaspora and Swiss public to showcase Indian heritage.",
  },
  {
    name: "SMA Basel",
    full: "Swiss Music Academy Basel",
    url: "https://smabasel.ch",
    desc: "Indian classical music events and cross-cultural music programming in Basel. Also serves the broader Swiss-Indian artistic community.",
  },
];

const landmarks = [
  { name: "Basel Münster (Cathedral)", url: "https://www.google.com/maps/search/Basel+Münster+Cathedral", note: "Striking Romanesque-Gothic red sandstone cathedral on a bluff above the Rhine. Dating to 1019–1500. Burial place of philosopher Erasmus. Free entry; terrace has panoramic Rhine views." },
  { name: "Kunstmuseum Basel", url: "https://www.google.com/maps/search/Kunstmuseum+Basel", note: "One of the world's oldest and largest public art collections — four buildings including the 2016 Neubau extension. Picasso, Holbein, and a major modern art collection." },
  { name: "Fondation Beyeler", url: "https://www.google.com/maps/search/Fondation+Beyeler+Riehen", note: "World-class modern and contemporary art museum in the suburb of Riehen. Designed by Renzo Piano. Houses Picasso, Monet, Warhol, and Giacometti. One of Switzerland's most visited museums." },
  { name: "Rathaus (Town Hall)", url: "https://www.google.com/maps/search/Basel+Rathaus+Town+Hall", note: "The vibrant red-frescoed 16th-century town hall on Marktplatz. Open for self-guided visits. Basel's most photographed civic building." },
  { name: "Rhine Swimming (Rheinbad)", url: "https://www.google.com/maps/search/Rheinbad+Basel", note: "A beloved Basel summer tradition — swim in the Rhine and let the current carry you downstream. Popular spots: Rheinbad Breite, Rheinbad St. Johann. The Wickelfisch waterproof bag is the local icon." },
  { name: "Barfüsserplatz", url: "https://www.google.com/maps/search/Barfüsserplatz+Basel", note: "Central square and main tram hub. Historical Museum Basel (Barfüsserkirche) is here — a medieval church converted into a world-class history museum." },
  { name: "Vitra Design Museum", url: "https://www.google.com/maps/search/Vitra+Design+Museum+Weil+am+Rhein", note: "Across the border in Weil am Rhein, Germany (10 min from Basel). The world's leading design museum, with iconic buildings by Frank Gehry, Zaha Hadid, and Tadao Ando." },
  { name: "Rhine Ferries (Fähren)", url: "https://www.google.com/maps/search/Rhine+Ferry+Basel+Münsterfähre", note: "Four historic cable ferries cross the Rhine using river current only — no motor. CHF 1.50–2.00 per crossing. A beloved Basel institution. Try the Münsterfähre below the cathedral." },
];

const events = [
  { name: "Art Basel", when: "June", desc: "The world's most prestigious contemporary art fair. Over 90,000 visitors, 280+ galleries from 40+ countries. Entire city transforms — hotel prices surge months in advance." },
  { name: "Basel Carnival (Fasnacht)", when: "February/March (post-Ash Wednesday)", desc: "UNESCO Intangible Cultural Heritage. Three days of masked processions beginning at 4:00 AM Monday (Morgestraich). Unique to Basel among Swiss cities — the rest of Switzerland observes Lent." },
  { name: "Baloise Session", when: "October/November", desc: "Intimate indoor music festival (R&B, soul, pop, jazz) in a converted warehouse. International artists in a club-format venue." },
  { name: "Basel Tattoo", when: "July", desc: "International military music festival with bands from around the world. Open-air courtyard of the Kaserne." },
  { name: "Herbstmesse", when: "October", desc: "One of Switzerland's largest funfairs — a traditional autumn fair with rides, food stalls, and festivities." },
  { name: "Christmas Markets", when: "November–December", desc: "Charming markets at Barfüsserplatz and Münsterplatz; known as some of the most atmospheric in Switzerland." },
];

const pharma = [
  { name: "Novartis", url: "https://www.novartis.com", note: "Global HQ in Basel. One of the world's largest pharmaceutical companies. The Novartis Campus is an architectural landmark (buildings by Frank Gehry, Diener & Diener). Major employer of Indian scientists and executives." },
  { name: "Roche (F. Hoffmann-La Roche)", url: "https://www.roche.com", note: "Global HQ in Basel (Grenzacherstrasse). Second-largest pharma/diagnostics company in the world. The Roche Tower (178 m, Switzerland's tallest building, designed by Herzog & de Meuron) is a city landmark." },
  { name: "Lonza", url: "https://www.lonza.com", note: "Pharmaceutical and biotech manufacturing. Significant employer in Basel's life sciences cluster." },
  { name: "Straumann", url: "https://www.straumann.com", note: "Global dental implant and orthodontics company. Headquartered in Basel; R&D and manufacturing centre." },
];

const transport = [
  { mode: "EuroAirport Basel-Mulhouse-Freiburg", detail: "A unique bi-national airport (Switzerland/France) 9 km northwest of Basel, technically in France. Bus 50 connects to Basel SBB (~20 min). Served by easyJet, Swiss, Lufthansa, Wizz Air, and many more." },
  { mode: "Basel SBB (Main Station)", detail: "Major international rail hub. Direct trains to Zurich (~55 min), Geneva (~3 hrs), Paris TGV (~3h15), Frankfurt ICE (~3 hrs). Three railway systems converge: Swiss SBB, German DB, and French SNCF." },
  { mode: "BVB Trams", detail: "Basler Verkehrs-Betriebe operates 8 tram lines. The compact old town is extremely walkable and tram-connected. Tram tickets valid across the tri-national TNW network into Germany and France." },
  { mode: "Cycling", detail: "Basel is very cycling-friendly. The Rhine riverside paths are excellent for cycling. The city is flat on the Kleinbasel side." },
];

const areas = [
  { name: "Grossbasel (Old Town / Altstadt)", url: "https://www.google.com/maps/search/Grossbasel+Basel+Old+Town", note: "Historic core on the left/south bank of the Rhine. Cathedral, Rathaus, Barfüsserplatz, Kunstmuseum. Higher rents; excellent walkability." },
  { name: "Kleinbasel", url: "https://www.google.com/maps/search/Kleinbasel+Basel", note: "The right/north bank of the Rhine. Historically working-class; now increasingly vibrant with restaurants and nightlife. The Matthäus quarter is multicultural with South Asian presence." },
  { name: "St. Johann", url: "https://www.google.com/maps/search/St+Johann+Basel", note: "West of the city; the Novartis campus is here. Popular with young professionals; Rhine riverfront access." },
  { name: "Riehen", url: "https://www.google.com/maps/search/Riehen+Basel", note: "Quiet village suburb within Basel-Stadt canton, home to Fondation Beyeler. Families with children appreciate the calm, green setting." },
];

const restaurants = [
  { name: "Aggarwal Supermarkt & Café, Basel", url: "https://www.google.com/maps/search/Aggarwal+Indian+Basel", note: "The Aggarwal group operates a store in Basel with a food section. A community hub for Indian groceries, spices, and Indian snacks." },
  { name: "Indian Restaurants, Basel City", url: "https://www.google.com/maps/search/Indian+restaurant+Basel+Switzerland", note: "Several Indian restaurants are in and around the city centre, particularly near the main station and in Kleinbasel. Search Google Maps for current options." },
  { name: "Pakistani / South Asian Restaurants", url: "https://www.google.com/maps/search/Pakistani+restaurant+Basel", note: "A number of Pakistani and South Asian restaurants in Basel supplement the Indian dining scene, offering biryanis, halal options, and South Asian home cooking." },
];

const groceries = [
  { name: "Aggarwal Supermarkt Basel", url: "https://www.google.com/maps/search/Aggarwal+Indian+supermarket+Basel", address: "Basel", note: "Branch of the well-known Aggarwal Indian grocery chain with stores across Switzerland. Spices, lentils, fresh produce, dairy, and Indian brands." },
  { name: "Asian & Indian Grocers, Basel", url: "https://www.google.com/maps/search/Asian+Indian+grocery+Basel", address: "Basel", note: "Several Asian supermarkets across the city carry Indian staples. Larger Indian grocery runs are sometimes done in Zurich (55 min by train)." },
];

const practical = [
  { title: "Tri-national Location", detail: "Basel sits at the meeting point of Switzerland, Germany, and France. Many residents shop in France for cheaper groceries and petrol, or visit German supermarkets in Weil am Rhein." },
  { title: "Pharma Career Opportunities", detail: "Basel is the global capital of the pharmaceutical industry. Novartis and Roche alone employ thousands. Opportunities exist for Indian scientists, researchers, regulatory affairs specialists, and business professionals." },
  { title: "Health Insurance", detail: "Mandatory from day 1. Canton Basel-Stadt has moderate premium costs. Compare at priminfo.ch. Register within 3 months of arrival." },
  { title: "Residence Registration", detail: "Register at the Einwohnerdienste within 14 days of arrival. Bring passport, rental contract, and employment/study letter. Non-EU nationals need a work permit before arriving." },
  { title: "University of Basel", detail: "Founded 1460, Switzerland's oldest university. Approx. 13,000 students. Strong medicine, law, and natural sciences faculties. Notable alumni include Erasmus and Paracelsus." },
  { title: "Consulate Access", detail: "For Indian consular matters (OCI, passport renewal), the nearest Consulate General is in Geneva. The Embassy of India is in Berne (~55 min by train)." },
];

export default function BaselPage() {
  return (
    <div>
      <PageHeader
        title="Indians in Basel"
        subtitle="Basel is Switzerland's cultural and pharmaceutical capital — home to Novartis, Roche, Art Basel, the world's most important art fair, and a growing Indian professional community."
        badge="City Guide"
        gradient="from-orange-500 to-amber-600"
        breadcrumbs={[
          { label: "Cities", href: "/cities" },
          { label: "Basel" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div style={{ marginBottom: -32 }}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Basel_-_Mittlere_Bruecke1.jpg/1280px-Basel_-_Mittlere_Bruecke1.jpg"
            alt="Basel Mittlere Brücke over the Rhine"
            width={1200}
            height={400}
            unoptimized
            className="w-full rounded-2xl object-cover"
            style={{ height: 280, objectFit: "cover" }}
          />
        </div>

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <div key={h.label} className="glass rounded-2xl p-4 text-center">
              <div className="flex justify-center mb-1">{h.icon}</div>
              <p className="text-base font-bold" style={{ color: "var(--text)" }}>{h.value}</p>
              <p className="text-xs/50" style={{ color: "var(--text)" }}>{h.label}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Indian Associations</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Source: Embassy of India, Berne — Indian Associations directory</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {associations.map((a) => {
              const href = a.url || `https://www.google.com/search?q=${encodeURIComponent(a.name + " Basel Indian association")}`;
              return (
                <a key={a.name} href={href} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                  <h3 className="text-base font-semibold mb-0.5 group-hover:text-orange-400 transition-colors" style={{ color: "var(--text)" }}>{a.name}</h3>
                  {a.full && <p className="text-xs mb-2" style={{ color: "var(--text-3)" }}>{a.full}</p>}
                  <p className="text-sm" style={{ color: "var(--text-2)" }}>{a.desc}</p>
                </a>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Neighbourhoods Popular with Indians</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((n) => (
              <a key={n.name} href={n.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold text-orange-400 mb-1 group-hover:text-orange-300 transition-colors">{n.name}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{n.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Landmarks & Attractions</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Basel has more museums per capita than almost any city in the world</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {landmarks.map((l) => (
              <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold mb-2 group-hover:text-orange-400 transition-colors" style={{ color: "var(--text)" }}>{l.name}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{l.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Annual Events & Festivals</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Art Basel alone draws the world's art elite every June — book accommodation months ahead</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((e) => (
              <div key={e.name} className="glass rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>{e.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(249,115,22,0.15)", color: "#fb923c" }}>{e.when}</span>
                </div>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Pharma & Life Sciences Employers</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Basel is the global capital of the pharmaceutical industry — a major draw for Indian scientists and professionals</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pharma.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold mb-2 group-hover:text-orange-400 transition-colors" style={{ color: "var(--text)" }}>{p.name}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{p.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Getting Around</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Compact and walkable — Basel's trams connect the whole city and cross into Germany and France</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {transport.map((t) => (
              <div key={t.mode} className="glass rounded-2xl p-5">
                <h3 className="text-base font-semibold mb-2" style={{ color: "var(--text)" }}>{t.mode}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{t.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Indian Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {restaurants.map((r) => (
              <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold mb-1 group-hover:text-orange-400 transition-colors" style={{ color: "var(--text)" }}>{r.name}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{r.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Indian Grocery Stores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {groceries.map((g) => (
              <a key={g.name} href={g.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold mb-0.5 group-hover:text-orange-400 transition-colors" style={{ color: "var(--text)" }}>{g.name}</h3>
                <p className="text-xs mb-2" style={{ color: "var(--text-3)" }}>{g.address}</p>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{g.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Practical Tips for Indians</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Essentials for settling into Basel</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {practical.map((p) => (
              <div key={p.title} className="glass rounded-2xl p-5">
                <h3 className="text-base font-semibold mb-2" style={{ color: "var(--text)" }}>{p.title}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
