import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import { Users, MessageSquare, Building2, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Indians in Bern — Community Guide",
  description: "Bern's Indian community — associations, Embassy of India, restaurants, landmarks, the UNESCO Old Town, and practical tips for Switzerland's federal capital.",
  openGraph: {
    title: "Indians in Bern — Community Guide | Indiaspora",
    description: "Bern's Indian community — associations, Embassy of India, restaurants, landmarks, the UNESCO Old Town, and practical tips for Switzerland's federal capital.",
  },
};

const highlights = [
  { label: "Indian Population", value: "~1,500+", icon: <Users style={{ width: 20, height: 20, color: "var(--sf)" }} /> },
  { label: "Language", value: "Swiss German", icon: <MessageSquare style={{ width: 20, height: 20, color: "var(--sf)" }} /> },
  { label: "Status", value: "Federal Capital", icon: <Globe style={{ width: 20, height: 20, color: "var(--sf)" }} /> },
  { label: "Key Employers", value: "Swiss Post, SBB, Federal Govt", icon: <Building2 style={{ width: 20, height: 20, color: "var(--sf)" }} /> },
];

const associations = [
  {
    name: "Embassy of India, Berne",
    full: "",
    url: "https://www.indembassybern.gov.in",
    desc: "The Embassy of India at Kirchenfeldstrasse 28, 3005 Bern (+41 31 350 11 30) is the primary diplomatic mission for Indians in Switzerland. Handles OCI, passport renewal, visa, attestation, and emergency services for all of Switzerland.",
  },
  {
    name: "IAB — Indian Association Berne",
    full: "",
    url: "",
    desc: "Cultural and social association for Indians in the Bern region. Organises Indian festivals, social gatherings, and cultural events throughout the year.",
  },
  {
    name: "BAB — Bharatiya Association Bern",
    full: "",
    url: "",
    desc: "Community organisation serving Indians and people of Indian origin in the Berne area. Focus on cultural preservation and community support.",
  },
];

const landmarks = [
  { name: "Zytglogge (Clock Tower)", url: "https://www.google.com/maps/search/Zytglogge+Bern+Clock+Tower", note: "Bern's iconic medieval clock tower dating to 1191. An astronomical clock mechanism (installed ~1530) performs animated figures 4 minutes before each hour. Guided tower tours available." },
  { name: "Bundeshaus (Federal Palace)", url: "https://www.google.com/maps/search/Bundeshaus+Bern+Parliament", note: "Seat of the Swiss Federal Parliament and Federal Council. Built 1894–1902 in Florentine Renaissance style with an iconic green dome. Free guided tours when Parliament is not in session." },
  { name: "Bear Park (BärenPark)", url: "https://www.google.com/maps/search/BärenPark+Bern", note: "Bern's bears are the city's symbol (the name 'Bern' is linked etymologically to bears). The large outdoor BärenPark opened in 2009 on the Aare riverbank. Free entry; open year-round." },
  { name: "Rosengarten (Rose Garden)", url: "https://www.google.com/maps/search/Rosengarten+Bern", note: "Elevated park with over 200 varieties of roses and a breathtaking panoramic view over the UNESCO Old Town and the Aare river. Free entry. Best May–October. Café on site." },
  { name: "Einstein House (Einsteinhaus)", url: "https://www.google.com/maps/search/Einstein+House+Bern+Kramgasse", note: "Albert Einstein lived at Kramgasse 49 from 1902–1909, developing the Special Theory of Relativity here (1905). Museum with period furnishings; also see the large Einstein Museum inside the Historisches Museum Bern." },
  { name: "UNESCO Old Town (Altstadt)", url: "https://www.google.com/maps/search/Bern+Altstadt+Old+Town", note: "One of the best-preserved medieval cities in Europe; inscribed on the UNESCO World Heritage List since 1983. Six kilometres of sandstone arcaded walkways (Lauben). Eleven ornate Renaissance fountains." },
  { name: "Gurten (Local Mountain)", url: "https://www.google.com/maps/search/Gurten+Bern+funicular", note: "Bern's local hill (858 m), reached by the Gurtenbahn funicular. Panoramic views including the Bernese Alps (Eiger, Mönch, Jungfrau on clear days). Annual Gurtenfestival music event in July." },
  { name: "Aare River Swimming (Marzili)", url: "https://www.google.com/maps/search/Marzilibad+Bern", note: "Outdoor Aare river swimming is a beloved Bern summer tradition. The Marzilibad (free) is right below the Bundeshaus. Let the current carry you — the Aare is clean, fast (~18°C in summer), and exhilarating." },
];

const events = [
  { name: "Zibelemärit (Onion Market)", when: "4th Monday of November", desc: "A 500-year-old Bern tradition. Tonnes of onions and braided onion strings sold in the old town. Famous for confetti battles across the city." },
  { name: "Gurtenfestival", when: "July", desc: "Major open-air music festival on Gurten hill. International and Swiss artists across multiple stages. One of Switzerland's best-loved summer music events." },
  { name: "Buskers Bern", when: "August", desc: "International street music festival in the UNESCO Old Town. Musicians from around the world perform in the arcades and squares." },
  { name: "Museumsnacht", when: "March", desc: "Night of Museums — all Bern museums open late with a single ticket. Live music, events, and special exhibitions." },
  { name: "Christmas Markets", when: "November–December", desc: "Traditional markets at Bundesplatz, Waisenhausplatz, and Münsterplatz. The Bundesplatz market backdrop is the illuminated Parliament building." },
  { name: "Bern Jazz Festival", when: "April/May", desc: "City-wide jazz festival with international and Swiss artists performing across various Bern venues." },
];

const transport = [
  { mode: "BERNMOBIL Trams & Buses", detail: "Bern's tram and trolleybus network covers the city and surrounding areas. Compact and highly walkable old town — most landmarks are within 15 minutes on foot. Reliable, punctual service." },
  { mode: "Bern Hauptbahnhof (HB)", detail: "Major intercity rail hub directly beneath the old town. Direct trains: Zurich (~57 min), Basel (~55 min), Geneva (~1h40), Lausanne (~65 min), Interlaken (~50 min for Bernese Oberland / Jungfrau region)." },
  { mode: "Day Trips", detail: "Bern is the perfect base for Bernese Oberland day trips: Grindelwald, Lauterbrunnen, Interlaken, and the Jungfraujoch (3,454 m, 'Top of Europe') are all accessible within 2 hours by train." },
  { mode: "Cycling", detail: "The Aare riverside cycling paths are excellent. PubliBike rental available across the city. The old town is walkable but has hills — cycling is easiest in the lower areas along the river." },
];

const universities = [
  { name: "University of Bern (Universität Bern)", url: "https://www.unibe.ch/index_eng.html", note: "Founded 1834. ~20,000 students. Strong medicine, law, veterinary medicine, natural sciences, and economics faculties. Located in the Länggasse student quarter." },
  { name: "Bern University of Applied Sciences (BFH)", url: "https://www.bfh.ch/en/", note: "University of Applied Sciences across multiple Bern campuses. Engineering, business, health sciences, architecture, and arts (including a music conservatory). ~6,000 students." },
];

const foodAndGrocery: { name: string; url: string; address?: string; note: string }[] = [
  { name: "Indian Restaurants Bern", url: "https://www.google.com/maps/search/Indian+restaurant+Bern+Switzerland", note: "Several Indian restaurants operate in Bern city centre and surrounding areas. North Indian curries, tandoori, and biryani are commonly available. Search Google Maps for current options." },
  { name: "Pakistani / South Asian Bern", url: "https://www.google.com/maps/search/Pakistani+restaurant+Bern", note: "Pakistani and South Asian restaurants in Bern provide additional South Asian dining options, including halal cuisine and biryanis." },
  { name: "Aggarwal Supermarkt Bern", url: "https://www.google.com/maps/search/Aggarwal+Indian+grocery+Bern", address: "Bern", note: "Branch of the well-known Swiss-Indian grocery chain. Indian spices, lentils, fresh produce, dairy, and packaged goods." },
  { name: "Asian Grocery Stores, Bern", url: "https://www.google.com/maps/search/Asian+supermarket+Bern", address: "Bern city centre", note: "Several Asian supermarkets in Bern carry Indian staples. Larger Indian grocery runs are sometimes made to Zurich (55 min by train) for better selection." },
];

const practical = [
  { title: "Embassy of India", detail: "Kirchenfeldstrasse 28, 3005 Bern. Tel: +41 31 350 11 30. Open Monday–Friday. Handles passport renewal, OCI, visas, and emergency consular services for all Indians in Switzerland. Visit indembassybern.gov.in for appointments." },
  { title: "Federal Employment", detail: "Bern is the seat of Switzerland's federal government. Indians with backgrounds in law, economics, public health, and international relations may find opportunities in federal departments, the Swiss National Bank, Swiss Post, and SBB headquarters." },
  { title: "Health Insurance", detail: "Mandatory from day 1. Apply within 3 months of arrival. Compare at priminfo.ch or comparis.ch. Canton Bern has moderate premium costs." },
  { title: "University Quarter (Länggasse)", detail: "The Länggasse neighbourhood near the University of Bern has a student and international atmosphere with affordable dining options, cafés, and a lively community feel." },
  { title: "Day Trips from Bern", detail: "Bern's central location makes it ideal for exploring Switzerland: Zurich (57 min), Basel (55 min), Geneva (1h40), and the Jungfrau region for mountain experiences (from 50 min to Interlaken)." },
  { title: "Language", detail: "Swiss German (Berndeutsch) is the local dialect. High German used in formal settings. English widely spoken in federal institutions and universities. French starts ~40 km west; Biel/Bienne is bilingual." },
];

export default function BernPage() {
  return (
    <div>
      <PageHeader
        title="Indians in Bern"
        subtitle="Switzerland's federal capital and UNESCO World Heritage city — home to the Embassy of India, the Parliament, and a community of Indian diplomats, civil servants, and professionals."
        badge="City Guide"
        gradient="from-green-600 to-emerald-600"
        breadcrumbs={[
          { label: "Cities", href: "/cities" },
          { label: "Bern" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div style={{ marginBottom: -32 }}>
          <Image
            src="https://images.unsplash.com/photo-1574226516831-e1dff420e562?w=1200&q=80&auto=format&fit=crop"
            alt="Bern Old Town and Aare river panorama"
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
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Indian Associations & Embassy</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>The Embassy of India in Berne serves all Indians in Switzerland</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {associations.map((a) => {
              const href = a.url || `https://www.google.com/search?q=${encodeURIComponent(a.name + " Bern")}`;
              return (
                <a key={a.name} href={href} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                  <h3 className="text-base font-semibold mb-0.5 group-hover:text-green-400 transition-colors" style={{ color: "var(--text)" }}>{a.name}</h3>
                  {a.full && <p className="text-xs mb-2" style={{ color: "var(--text-3)" }}>{a.full}</p>}
                  <p className="text-sm" style={{ color: "var(--text-2)" }}>{a.desc}</p>
                </a>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Landmarks & Attractions</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>The UNESCO Old Town is one of Europe's most intact medieval city centres</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {landmarks.map((l) => (
              <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold mb-2 group-hover:text-green-400 transition-colors" style={{ color: "var(--text)" }}>{l.name}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{l.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Annual Events & Festivals</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Bern's calendar — the Zibelemärit onion market is a uniquely Bernese experience</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((e) => (
              <div key={e.name} className="glass rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>{e.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(34,197,94,0.15)", color: "#4ade80" }}>{e.when}</span>
                </div>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Getting Around</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>The compact old town is highly walkable — Bern HB connects the country</p>
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
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Universities</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Bern's research institutions attract Indian students and academics</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {universities.map((u) => (
              <a key={u.name} href={u.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold mb-2 group-hover:text-green-400 transition-colors" style={{ color: "var(--text)" }}>{u.name}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{u.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Indian Restaurants & Grocery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {foodAndGrocery.map((r) => (
              <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold mb-1 group-hover:text-green-400 transition-colors" style={{ color: "var(--text)" }}>{r.name}</h3>
                {r.address && <p className="text-xs mb-2" style={{ color: "var(--text-3)" }}>{r.address}</p>}
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{r.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Practical Tips for Indians</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Essentials for settling into Bern</p>
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
