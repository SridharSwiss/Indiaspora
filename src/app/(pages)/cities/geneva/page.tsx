import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import { Users, MessageSquare, Building2, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Indians in Geneva — Community Guide",
  description: "Geneva's Indian community — associations, restaurants, groceries, landmarks, international organisations, transport, and practical tips for Switzerland's diplomatic capital.",
  openGraph: {
    title: "Indians in Geneva — Community Guide | Indiaspora",
    description: "Geneva's Indian community — associations, restaurants, groceries, landmarks, international organisations, transport, and practical tips for Switzerland's diplomatic capital.",
  },
};

const highlights = [
  { label: "Indian Population", value: "~4,000+", icon: <Users style={{ width: 20, height: 20, color: "var(--sf)" }} /> },
  { label: "Language", value: "French", icon: <MessageSquare style={{ width: 20, height: 20, color: "var(--sf)" }} /> },
  { label: "Canton", value: "Geneva (GE)", icon: <Building2 style={{ width: 20, height: 20, color: "var(--sf)" }} /> },
  { label: "Int'l Orgs", value: "UN, WHO, ICRC, WTO", icon: <Globe style={{ width: 20, height: 20, color: "var(--sf)" }} /> },
];

const associations = [
  {
    name: "Indian Association Geneva",
    full: "",
    url: "https://www.indianassociationgeneva.com",
    desc: "One of the oldest Indian associations in Europe, founded 1947. Organises major cultural and social events throughout the year for the Geneva Indian community.",
  },
  {
    name: "Permanent Mission of India to the UN",
    full: "",
    url: "https://www.pmindiaun.org",
    desc: "India's diplomatic presence at the United Nations in Geneva. Handles matters relating to the UN Human Rights Council, WTO, WHO, and other Geneva-based multilateral bodies.",
  },
  {
    name: "Indian Women's Association Geneva",
    full: "",
    url: "",
    desc: "Networking and social support group for Indian women in the greater Geneva area. Organises cultural events, outings, and community support activities.",
  },
];

const landmarks = [
  { name: "Jet d'Eau", url: "https://www.google.com/maps/search/Jet+d'Eau+Geneva", note: "Geneva's iconic 140 m water jet on the lake — one of the world's tallest fountains. Best viewed from the Pont du Mont-Blanc or on a lake boat." },
  { name: "St. Peter's Cathedral", url: "https://www.google.com/maps/search/Cathedrale+Saint-Pierre+Geneva", note: "12th-century Gothic/Romanesque cathedral in the Old Town where John Calvin preached. Climb the north tower for panoramic views. Free entry to the nave." },
  { name: "Palais des Nations (UN)", url: "https://www.google.com/maps/search/Palais+des+Nations+Geneva", note: "European headquarters of the United Nations. Guided tours available (book in advance). Free entry to the Ariana Park surroundings." },
  { name: "CERN", url: "https://www.google.com/maps/search/CERN+Geneva+Switzerland", note: "European Organization for Nuclear Research — world's largest particle physics laboratory and birthplace of the World Wide Web. Free guided tours (advance booking required online)." },
  { name: "Old Town (Vieille-Ville)", url: "https://www.google.com/maps/search/Vieille-Ville+Geneva", note: "Cobblestone lanes, Place du Bourg-de-Four (Geneva's oldest square), Maison Tavel, antique shops, and the Reformation Wall in Parc des Bastions." },
  { name: "Bains des Pâquis", url: "https://www.google.com/maps/search/Bains+des+Paquis+Geneva", note: "A public lake bathing pier open year-round. Swimming in summer, sauna and fondue in winter. Beloved Genevan institution in the Pâquis neighbourhood." },
  { name: "Carouge", url: "https://www.google.com/maps/search/Carouge+Geneva", note: "Bohemian district with Sardinian/Italian architectural heritage, artisan workshops, cafés, and a vibrant Saturday market. Called 'Geneva's village'." },
  { name: "Flower Clock (L'Horloge Fleurie)", url: "https://www.google.com/maps/search/Flower+Clock+Geneva+English+Garden", note: "In the Jardin Anglais on the lakeside — 6,500 flowers planted in the shape of a clock face, symbolising Geneva's watchmaking heritage." },
];

const intlOrgs = [
  { name: "United Nations Geneva (UNOG)", note: "Second-largest UN office globally. Hosts the Human Rights Council, Conference on Disarmament, and many treaty bodies." },
  { name: "World Health Organization (WHO)", note: "Global HQ for public health. A major employer of Indian professionals in health policy and research." },
  { name: "ICRC", note: "International Committee of the Red Cross. Humanitarian law and operations centre." },
  { name: "World Trade Organization (WTO)", note: "Global trade body. India plays an active role in WTO negotiations conducted from Geneva." },
  { name: "UNHCR", note: "UN Refugee Agency. Coordinates international refugee protection from its Geneva HQ." },
  { name: "WIPO", note: "World Intellectual Property Organization. Important for Indian technology and pharmaceutical IP matters." },
];

const events = [
  { name: "L'Escalade", when: "December 11–12", desc: "Geneva's most beloved local festival commemorating the repulsion of a 1602 Savoyard attack. Torchlight processions, marmite chocolatière (chocolate cauldron filled with marzipan vegetables, broken open by the youngest and oldest), and historical parades." },
  { name: "Geneva Motor Show", when: "March", desc: "Salon International de l'Auto — one of the world's premier automobile exhibitions. Palexpo convention centre. Global debut of new models." },
  { name: "Fêtes de Genève", when: "Late July / early August", desc: "Geneva's summer festival with open-air concerts, funfair, and a spectacular international fireworks display over Lake Geneva." },
  { name: "Montreux Jazz Festival", when: "July", desc: "World-famous jazz and music festival 80 km from Geneva. Easy day trip by train along the scenic lake. Free outdoor concerts every evening." },
  { name: "Geneva International Film Festival (GIFF)", when: "November", desc: "Growing prestige film festival with international and Swiss selections. Screenings at cinemas across the city." },
  { name: "Jeûne Genevois", when: "September (Thursday)", desc: "Public holiday unique to Canton Geneva. Traditionally a day of fasting; marked by family gatherings and tarte aux pruneaux (Geneva plum tart)." },
];

const transport = [
  { mode: "Geneva Airport (GVA)", detail: "One of Switzerland's three major airports, just 3 km from the city centre. Train to Geneva Cornavin station in 6 minutes (free with hotel card or any Swiss train ticket). Direct flights to Mumbai, Delhi, and many major hubs." },
  { mode: "TPG Trams & Buses", detail: "Transports Publics Genevois operates an extensive tram and bus network across the city and into France. Hotel guests ride free (Tout Genève card). Unireso integrated tickets cover all modes across the canton." },
  { mode: "LÉMAN EXPRESS (RER)", detail: "Cross-border regional rail network connecting Geneva with French Haute-Savoie (Annemasse, Evian, Annecy). Transformative for cross-border commuters living in France." },
  { mode: "Lake Boats (CGN)", detail: "Compagnie Générale de Navigation operates steamers connecting Geneva to Lausanne, Montreux, Évian, and Nyon. Swiss Travel Pass valid on most routes." },
  { mode: "SBB Trains", detail: "From Geneva Cornavin: Lausanne (33 min), Bern (1h40), Zurich (2h45), Basel (3h). TGV to Paris in 3h20." },
];

const areas = [
  { name: "Pâquis (Right Bank)", url: "https://www.google.com/maps/search/Paquis+Geneva", note: "Cosmopolitan neighbourhood near the lake and train station. The most diverse area in Geneva — Indian restaurants, South Asian grocery stores, international markets, and vibrant nightlife." },
  { name: "Eaux-Vives", url: "https://www.google.com/maps/search/Eaux-Vives+Geneva", note: "Residential lakeside neighbourhood on the Left Bank. Several Indian restaurants, Geneva Plage, and the large Parc La Grange with 200+ varieties of roses." },
  { name: "Grand-Saconnex", url: "https://www.google.com/maps/search/Grand-Saconnex+Geneva", note: "Near the airport; popular with diplomats, international civil servants, and expat families. Many international schools nearby." },
  { name: "Carouge", url: "https://www.google.com/maps/search/Carouge+Geneva", note: "Charming bohemian village within the city. More affordable than the centre; great for families who enjoy an artsy, village-like atmosphere." },
];

const restaurants = [
  { name: "Taj Mahal Restaurant Geneva", url: "https://www.google.com/maps/search/Taj+Mahal+Restaurant+Geneva", note: "Long-established Indian restaurant in central Geneva. Classic North Indian curries, tandoori dishes, and biryanis." },
  { name: "Indian Restaurants in Pâquis", url: "https://www.google.com/maps/search/Indian+restaurants+Paquis+Geneva", note: "Several Indian and South Asian restaurants are concentrated in the Pâquis neighbourhood. The area's diversity makes it the hub for Indian, Pakistani, and Sri Lankan cuisine in Geneva." },
  { name: "Woodlands Geneva", url: "https://www.google.com/maps/search/Woodlands+vegetarian+restaurant+Geneva", note: "South Indian vegetarian restaurant. Known for dosas, thalis, and South Indian meals in Geneva." },
];

const groceries = [
  { name: "Indian & South Asian Groceries, Pâquis", url: "https://www.google.com/maps/search/Indian+grocery+store+Geneva+Paquis", address: "Pâquis neighbourhood, Geneva", note: "Multiple South Asian grocery stores in the Pâquis area carry Indian spices, lentils, rice varieties, frozen foods, and Indian brands." },
  { name: "Asian Supermarkets, Geneva Centre", url: "https://www.google.com/maps/search/Asian+supermarket+Geneva", address: "Central Geneva", note: "Several Asian supermarkets throughout the city carry a broad range of Indian ingredients including fresh produce, dairy, and ready-to-cook items." },
];

const practical = [
  { title: "Consulate General of India", detail: "Located at Chemin du Champ-d'Anier 17, 1209 Geneva. Handles OCI, passport, visa, and emergency consular services for Indians in the French-speaking part of Switzerland." },
  { title: "Residence Registration", detail: "Register at the Office cantonal de la population et des migrations (OCPM) within 8 days of arrival. Required for all residents including EU nationals." },
  { title: "Health Insurance", detail: "Mandatory under the LAMal system from day 1. Apply within 3 months (coverage backdates). Geneva has higher premiums than most Swiss cantons. Compare at priminfo.ch or comparis.ch." },
  { title: "Language", detail: "French is essential for daily life and integration. English is widely spoken in the international sector but not for administration, healthcare, or schools. Free French courses are offered by several Geneva communes." },
  { title: "Cross-border Living", detail: "Many Indian families live in France (Annemasse, Ferney-Voltaire, Saint-Julien-en-Genevois) for significantly lower housing costs and commute into Geneva. Requires a frontalier work permit and different tax treatment." },
  { title: "Cost of Living", detail: "Geneva is consistently among the world's three most expensive cities. Cross-border shopping in France (Annemasse is 10 min by tram) can reduce grocery and daily costs by 20–40%." },
];

export default function GenevaPage() {
  return (
    <div>
      <PageHeader
        title="Indians in Geneva"
        subtitle="Geneva is Switzerland's international capital — home to the UN, WHO, ICRC, and over 40 international organisations, with a thriving Indian diplomatic, professional, and student community."
        badge="City Guide"
        gradient="from-red-500 to-rose-600"
        breadcrumbs={[
          { label: "Cities", href: "/cities" },
          { label: "Geneva" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div style={{ marginBottom: -32 }}>
          <Image
            src="https://images.unsplash.com/photo-1574895366504-6b79022a3c72?w=1200&q=80&auto=format&fit=crop"
            alt="Geneva lakeside with the Jet d'Eau fountain"
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
              const href = a.url || `https://www.google.com/search?q=${encodeURIComponent(a.name + " Geneva")}`;
              return (
                <a key={a.name} href={href} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                  <h3 className="text-base font-semibold mb-0.5 group-hover:text-red-400 transition-colors" style={{ color: "var(--text)" }}>{a.name}</h3>
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
                <h3 className="text-base font-semibold text-red-400 mb-1 group-hover:text-red-300 transition-colors">{n.name}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{n.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Landmarks & Attractions</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Must-see places in Geneva — from the iconic lake to world diplomacy</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {landmarks.map((l) => (
              <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-base font-semibold mb-2 group-hover:text-red-400 transition-colors" style={{ color: "var(--text)" }}>{l.name}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{l.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>International Organisations</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Geneva hosts more international organisations than any other city in the world</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {intlOrgs.map((o) => (
              <div key={o.name} className="glass rounded-2xl p-5">
                <h3 className="text-base font-semibold mb-2" style={{ color: "var(--text)" }}>{o.name}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{o.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Annual Events & Festivals</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Geneva's calendar — plan ahead especially for December and July</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((e) => (
              <div key={e.name} className="glass rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>{e.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(239,68,68,0.15)", color: "#f87171" }}>{e.when}</span>
                </div>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Getting Around</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Hotel guests ride public transport free — Geneva's Tout Genève card covers all trams and buses</p>
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
                <h3 className="text-base font-semibold mb-1 group-hover:text-red-400 transition-colors" style={{ color: "var(--text)" }}>{r.name}</h3>
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
                <h3 className="text-base font-semibold mb-0.5 group-hover:text-red-400 transition-colors" style={{ color: "var(--text)" }}>{g.name}</h3>
                <p className="text-xs mb-2" style={{ color: "var(--text-3)" }}>{g.address}</p>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{g.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Practical Tips for Indians</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Essentials for settling into Geneva</p>
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
