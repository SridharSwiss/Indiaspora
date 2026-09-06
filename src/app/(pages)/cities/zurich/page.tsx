import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import { Users, MessageSquare, Building2, Briefcase, Train, Cloud, GraduationCap, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Indians in Zurich — Community Guide",
  description: "Zurich's Indian community — associations, neighbourhoods, restaurants, grocery stores, landmarks, transport, and official resources for Switzerland's financial capital.",
  openGraph: {
    title: "Indians in Zurich — Community Guide | Indiaspora",
    description: "Zurich's Indian community — associations, neighbourhoods, restaurants, grocery stores, landmarks, transport, and official resources for Switzerland's financial capital.",
  },
};

const highlights = [
  { label: "Indian Population", value: "~10,000+", icon: <Users style={{ width: 20, height: 20, color: "var(--sf)" }} /> },
  { label: "Language", value: "Swiss German", icon: <MessageSquare style={{ width: 20, height: 20, color: "var(--sf)" }} /> },
  { label: "Canton", value: "Zürich", icon: <Building2 style={{ width: 20, height: 20, color: "var(--sf)" }} /> },
  { label: "Key Employers", value: "UBS, Google, IBM, ETH", icon: <Briefcase style={{ width: 20, height: 20, color: "var(--sf)" }} /> },
];

const associations = [
  {
    name: "IAGZ",
    full: "Indian Association of Greater Zurich",
    url: "https://iagz.ch",
    desc: "Founded 2010, IAGZ is the primary Indian social association in the Greater Zurich area with 100+ member families. Organises Holi, Dandiya, Diwali, family picnics, and community meetups across age groups and regions of India.",
  },
  {
    name: "InSAZ",
    full: "Indian Students Association of Zurich",
    url: "https://blogs.ethz.ch/insaz/",
    desc: "Student association for Indians at ETH Zurich and the University of Zurich. Organises cultural events, academic networking, and orientation support for new Indian students.",
  },
  {
    name: "TASC",
    full: "Tamil Association of Switzerland",
    url: "https://tasc.ch",
    desc: "Active Tamil cultural and social association serving the Tamil community across Switzerland, with a strong presence in the Zurich region.",
  },
  {
    name: "Gujarati Samaj Zurich",
    full: "",
    url: "",
    desc: "Cultural events and networking for the Gujarati-speaking community in the Zurich region.",
  },
];

const neighbourhoods = [
  { name: "Oerlikon (District 11)", url: "https://www.google.com/maps/search/Oerlikon+Zurich", note: "Popular with tech and finance professionals. Well-connected by tram and S-Bahn; home to Saravanaa Bhavan South Indian restaurant. Google and ABB offices nearby." },
  { name: "Schlieren & Dietikon", url: "https://www.google.com/maps/search/Schlieren+Zurich", note: "Western suburbs with more affordable rents, good Indian grocery access, and a growing Indian family community. Easy S-Bahn links into the city." },
  { name: "Districts 3, 4 & 5 (Zürich West)", url: "https://www.google.com/maps/search/District+4+Zurich+Langstrasse", note: "Central city districts; vibrant and walkable, higher rents but home to several Indian restaurants and the Aggarwal grocery store on Kernstrasse." },
  { name: "Winterthur", url: "https://www.google.com/maps/search/Winterthur+Switzerland", note: "30 minutes by S-Bahn; a growing Indian community, noticeably more affordable than Zurich city proper. Good schools and parks for families." },
];

const landmarks = [
  { name: "Grossmünster", url: "https://www.google.com/maps/search/Grossmünster+Zurich", note: "Zurich's iconic twin-towered Romanesque cathedral dating to the 12th century. Climb the Karlsturm tower for panoramic views of the old town and Lake Zurich." },
  { name: "Fraumünster", url: "https://www.google.com/maps/search/Fraumünster+Zurich", note: "Abbey church on the west bank of the Limmat, celebrated for its five stunning stained-glass windows by Marc Chagall (1970) and Giacometti (1945)." },
  { name: "Lake Zurich (Zürichsee)", url: "https://www.google.com/maps/search/Lake+Zurich", note: "The centrepiece of the city. In summer, swim at Seebad Enge or Strandbad Mythenquai. Sunset lake cruises are popular with families and visitors." },
  { name: "Uetliberg", url: "https://www.google.com/maps/search/Uetliberg+Zurich", note: "Zurich's local mountain (871 m). Reachable in 20 min by train from HB. Hiking trails, an observation tower, and the famous Planetenweg (Planet Trail). Spectacular city views." },
  { name: "Kunsthaus Zürich", url: "https://www.google.com/maps/search/Kunsthaus+Zurich", note: "Switzerland's largest art museum, expanded in 2021. Houses Giacometti sculptures, Monet, Picasso, Munch, and a major Impressionist collection." },
  { name: "Bahnhofstrasse", url: "https://www.google.com/maps/search/Bahnhofstrasse+Zurich", note: "One of the world's most exclusive shopping streets, 1.4 km from Hauptbahnhof to the lake. Sprüngli chocolates, Swiss watch boutiques, and department stores." },
  { name: "Niederdorf (Old Town)", url: "https://www.google.com/maps/search/Niederdorf+Zurich+Altstadt", note: "Medieval old town on the east bank of the Limmat. Cobblestone lanes, guild houses, independent boutiques, cafés, and the Sunday flea market at Bürkliplatz." },
  { name: "Zurich Zoo", url: "https://www.google.com/maps/search/Zoo+Zurich", note: "One of Europe's finest zoos, home to Masoala Rainforest Hall — the largest tropical hall of any zoo in Europe. Excellent for families with children." },
];

const events = [
  { name: "Street Parade", when: "August", desc: "Europe's largest techno music parade along the lake. Over 1 million participants. Book accommodation many months in advance." },
  { name: "Zürifäscht", when: "Every 3 years (July)", desc: "Zurich's largest free public festival with a massive fireworks display over the lake. Next in 2026." },
  { name: "Sechseläuten", when: "April", desc: "Traditional spring festival where guild members in historical dress parade through the city and burn a cotton snowman (Böögg) at 6 pm to predict summer weather." },
  { name: "Zurich Film Festival", when: "September/October", desc: "One of Europe's leading film festivals, held across several cinemas in the city. Red-carpet premieres and international directors." },
  { name: "Christmas Markets", when: "December", desc: "Markets at Bellevue, Hauptbahnhof (inside the station), and Wienachtsdorf on Sechseläutenplatz. The HB market features a giant Christmas tree." },
  { name: "Zurich Jazz Festival", when: "June", desc: "Free outdoor concerts on Münsterhof and other city squares. International and Swiss jazz artists." },
];

const transport = [
  { mode: "ZVV Trams & Buses", detail: "Zurich's ZVV network covers the city and canton. Zone 110 covers the city; Zone 121 extends to Winterthur. Day passes (Tageskarte) offer unlimited travel. A half-fare card (Halbtax) is worth buying for any frequent traveller." },
  { mode: "S-Bahn (Suburban Rail)", detail: "Runs from Hauptbahnhof (HB) to suburbs every 15–30 min. Key lines: S3/S9 to Uster, S8 to Airport, S1/S16 to Winterthur, S2/S10 to Dietikon/Schlieren." },
  { mode: "ZRH Airport", detail: "Zurich Airport is 10 min from HB by Airport Train (every 10 min). It is Switzerland's largest international hub with direct flights to Mumbai, Delhi, and other Indian metros." },
  { mode: "Cycling", detail: "Zurich has an extensive cycle network. Züri Velo (public bike rental) stations are across the city. The lake and Limmat riverside cycle routes are excellent." },
];

const universities = [
  { name: "ETH Zurich", url: "https://ethz.ch", note: "Ranked consistently in the world's top 10 universities. Strong in engineering, computer science, and natural sciences. Hosts many Indian PhD students and researchers." },
  { name: "University of Zurich (UZH)", url: "https://www.uzh.ch/en.html", note: "Switzerland's largest university with 28,000 students. Strong medicine, law, and social science faculties." },
  { name: "ZHAW", url: "https://www.zhaw.ch/en/", note: "Zurich University of Applied Sciences. Popular for engineering, business, and applied science programmes. Campuses in Winterthur and Wädenswil." },
];

const restaurants = [
  { name: "Tadka", url: "https://www.google.com/maps/search/Tadka+restaurant+Zurich", note: "North Indian curries, tandoori, and Thali meals in District 5 (Zürich West). Known for Kerala-style preparations. Casual and community-loved." },
  { name: "Malabar", url: "https://www.google.com/maps/search/Malabar+restaurant+Zurich+South+Indian", note: "Elegant South Indian restaurant, praised for its traditional recipes and quality of ingredients." },
  { name: "Bombay Karachi", url: "https://www.google.com/maps/search/Bombay+Karachi+Zurich", note: "Indian and Pakistani cuisine in central Zurich. Reliable halal options and Karachi-style biryani." },
  { name: "New Bombay", url: "https://www.google.com/maps/search/New+Bombay+restaurant+Zurich", note: "One of Zurich's longest-running Indian restaurants. Menu spans North and South Indian classics." },
  { name: "Saravanaa Bhavan", url: "https://www.saravanabhavan.com", note: "Legendary Chennai-based vegetarian chain with a Zurich branch in Oerlikon. South Indian thalis, dosas, and filter coffee." },
];

const groceries = [
  { name: "Aggarwal", url: "https://www.google.com/maps/search/Aggarwal+Indian+Grocery+Kernstrasse+Zurich", address: "Kernstrasse 27, 8004 Zürich", note: "Fresh Indian produce, spices, pickles, dairy, and household products. Also has branches in Bern, Basel, and Baden. Mon–Fri 9am–8pm, Sat 9am–7pm." },
  { name: "Indiasupermarkt.ch", url: "https://indiasupermarkt.ch", address: "Josefstrasse 91, 8005 Zürich", note: "Wide selection of Indian and Asian groceries, spices, and cosmetics. Also ships across Switzerland." },
  { name: "Namastey India", url: "https://www.google.com/maps/search/Namastey+India+grocery+Zurich", address: "Zürich", note: "Well-stocked Indian grocery with fresh produce, masalas, and ready-to-eat items." },
];

const practical = [
  { title: "Residence Registration", detail: "Register at your local Kreisbüro (district office) within 14 days of arrival. Bring passport, rental contract, and employment/university letter." },
  { title: "Health Insurance", detail: "Mandatory from day 1. Apply within 3 months of arrival — coverage backdates. Compare premiums at priminfo.admin.ch. Popular basic insurers: Helsana, CSS, Swica." },
  { title: "Banking", detail: "UBS and Credit Suisse (now merged with UBS) are traditional choices. Neon and Zak offer free digital accounts suitable for new arrivals. Many require a residence permit." },
  { title: "Tax Filing", detail: "Residents file annual Steuererklärung (tax return) in March. Employees on Quellensteuer (withholding tax) may not need to file unless income exceeds CHF 120,000." },
  { title: "Indian Consulate", detail: "The Consulate General of India is in Geneva. The Embassy of India is in Berne (Kirchenfeldstrasse 28). For Zurich-area OCI, passport, and emergency services, use the Geneva Consulate." },
  { title: "Hindi / Indian Communities", detail: "IAGZ WhatsApp groups, Facebook groups (Indians in Zurich, Indian Expats Switzerland), and the Meetup platform have active Indian community events." },
];

export default function ZurichPage() {
  return (
    <div>
      <PageHeader
        title="Indians in Zurich"
        subtitle="Zurich is home to Switzerland's largest Indian community — a thriving diaspora of IT professionals, bankers, researchers, and families centred around the financial capital."
        badge="City Guide"
        gradient="from-blue-600 to-indigo-600"
        breadcrumbs={[
          { label: "Cities", href: "/cities" },
          { label: "Zurich" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div style={{ marginBottom: -32 }}>
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80&auto=format&fit=crop"
            alt="Zurich lakeside view with the city skyline"
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
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Source: Embassy of India, Berne — Indian Associations directory; iagz.ch</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {associations.map((a) => {
              const href = a.url || `https://www.google.com/search?q=${encodeURIComponent(a.name + " Zurich Indian association")}`;
              return (
                <a key={a.name} href={href} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                  <h3 className="text-base font-semibold mb-0.5 group-hover:text-blue-400 transition-colors" style={{ color: "var(--text)" }}>{a.name}</h3>
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
            {neighbourhoods.map((n) => (
              <a key={n.name} href={n.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold text-blue-400 mb-1 group-hover:text-blue-300 transition-colors">{n.name}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{n.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Landmarks & Attractions</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Must-see places in and around Zurich</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {landmarks.map((l) => (
              <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold mb-2 group-hover:text-blue-400 transition-colors" style={{ color: "var(--text)" }}>{l.name}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{l.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Annual Events & Festivals</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Zurich's calendar of events — plan ahead, especially for summer</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((e) => (
              <div key={e.name} className="glass rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>{e.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8" }}>{e.when}</span>
                </div>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Getting Around</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Zurich has one of the world's most reliable public transport systems</p>
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
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Universities & Research</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Zurich is a world-class academic hub — a major draw for Indian students and researchers</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {universities.map((u) => (
              <a key={u.name} href={u.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold mb-2 group-hover:text-blue-400 transition-colors" style={{ color: "var(--text)" }}>{u.name}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{u.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Indian Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {restaurants.map((r) => (
              <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold mb-1 group-hover:text-blue-400 transition-colors" style={{ color: "var(--text)" }}>{r.name}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{r.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Indian Grocery Stores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {groceries.map((g) => (
              <a key={g.name} href={g.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold mb-0.5 group-hover:text-blue-400 transition-colors" style={{ color: "var(--text)" }}>{g.name}</h3>
                <p className="text-xs mb-2" style={{ color: "var(--text-3)" }}>{g.address}</p>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{g.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Practical Tips for Indians</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Essentials for settling into Zurich</p>
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
