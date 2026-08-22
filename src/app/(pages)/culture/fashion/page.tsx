import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indian Fashion & Boutiques in Switzerland",
  description: "Find Indian sarees, lehengas, designer wear, and jewellery in Switzerland — physical boutiques and online options.",
  openGraph: {
    title: "Indian Fashion & Boutiques in Switzerland | IndiaSwiss",
    description: "Find Indian sarees, lehengas, designer wear, and jewellery in Switzerland — physical boutiques and online options.",
  },
};

const boutiques = [
  {
    name: "Manjari Sarees",
    city: "Zurich",
    address: "Hohlstrasse 480, 8048 Zürich",
    phone: "+41 44 558 63 63",
    url: "http://www.manjarisarees.com/",
    speciality: "Sarees, Salwar Kameez & Lehengas",
    desc: "One of the most established Indian fashion stores in Zurich. Stocks north and south Indian women's and children's fashion — sarees, salwar kameez, lehengas, and blouse pieces. In-house alterations and custom stitching. Open Tue–Sun 2–8 pm. Source: manjarisarees.com"
  },
  {
    name: "Rukkumani",
    city: "Near Basel",
    address: "Showroom near Basel (online + in-person)",
    phone: null,
    url: "https://rukkumani.ch/",
    speciality: "Tamil Ethnic Wear — Sarees, Salwars, Lehengas & Vetti",
    desc: "Switzerland's premier destination for traditional Tamil Indian attire. Specialises in sarees, lehengas, salwars, and vetti. Partners with artisans from Sri Lanka and India with 20+ years of expertise. Ships free across Switzerland. Custom saree stitching available. Source: rukkumani.ch"
  },
  {
    name: "SKT Nathan",
    city: "Zurich",
    address: "Josefstrasse 137, 8005 Zürich",
    phone: null,
    url: null,
    speciality: "Indian Clothing & Gold Jewellery",
    desc: "Zurich store in the Langstrasse neighbourhood offering Indian clothing alongside gold jewellery. Popular with the Tamil and South Indian community in Zurich."
  },
  {
    name: "Sareeka — Online Shop (Ships to Switzerland)",
    city: "Online",
    address: null,
    phone: null,
    url: "https://www.sareeka.com/indian-clothes-in-switzerland",
    speciality: "Sarees, Salwars & Indian Outfits",
    desc: "Dedicated online Indian fashion retailer with a Switzerland-specific page. Wide range of sarees, salwar kameez, and Indian outfits delivered to Switzerland. Source: sareeka.com"
  },
];

const online = [
  { name: "Utsav Fashion", url: "https://www.utsavfashion.com", desc: "Designer ethnic wear with international shipping — sarees, lehengas, and salwars. Popular with the Indian diaspora in Europe." },
  { name: "Craftsvilla", url: "https://www.craftsvilla.com", desc: "Authentic Indian handicrafts and ethnic wear. Handloom sarees, block print fabric, and artisan products shipped internationally." },
  { name: "Myntra (India)", url: "https://www.myntra.com", desc: "India's largest fashion platform. Ships internationally; check Swiss customs duties before ordering. Good for designer and fast-fashion ethnic wear." },
  { name: "BAZG Swiss Customs", url: "https://www.bazg.admin.ch/bazg/en/home.html", desc: "Check Swiss customs duties before ordering from India — clothing imports above CHF 300 may attract duty and VAT. Always declare on arrival." },
];

const community = [
  { channel: "SwissDesi — Indian Clothing Guide", desc: "SwissDesi (swissdesi.ch) maintains a curated list of Indian clothing, home decor, and jewellery options in Switzerland. Updated regularly by the community." },
  { channel: "Facebook: Indian Wardrobe Switzerland", desc: "Buy, sell, and swap pre-loved Indian outfits. Active community with regular posts from home boutique owners and personal sellers." },
  { channel: "Instagram: #IndianFashionZurich", desc: "Follow the hashtag for boutique announcements, outfit inspiration, and sale events from the Zurich Indian fashion community." },
  { channel: "WhatsApp Community Groups", desc: "Many home boutique owners take orders via WhatsApp. Ask for recommendations in IAGZ member groups or local Indian WhatsApp networks." },
];

const jewellery = [
  { name: "Gold in Switzerland", note: "22K gold jewellery is harder to find in Switzerland than in India. SKT Nathan (Josefstrasse 137, Zurich) and some shops in the city centre carry Indian-style gold. Families often bring gold on trips to India." },
  { name: "Rukkumani — Jewellery Section", note: "Rukkumani (rukkumani.ch) stocks Indian jewellery alongside ethnic wear, including temple jewellery and traditional pieces for weddings and festivals." },
  { name: "Tanishq (India Duty-Free)", note: "Many Indians purchase Tanishq jewellery at Indian airports and bring it to Switzerland duty-free within the personal allowance limits (currently up to CHF 300 for goods from non-EU countries)." },
];

export default function FashionPage() {
  return (
    <div>
      <PageHeader
        title="Indian Fashion & Boutiques"
        subtitle="Find Indian ethnic wear in Switzerland — from Kanjivaram silk sarees to bridal lehengas — through boutiques, community networks, and online orders."
        badge="Fashion Guide"
        gradient="from-rose-500 to-pink-600"
        breadcrumbs={[
          { label: "Culture & Arts", href: "/culture" },
          { label: "Fashion & Boutiques" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Physical Boutiques & Stores</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {boutiques.map((b) => (
              b.url ? (
                <a key={b.name} href={b.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold group-hover:text-rose-400 transition-colors" style={{ color: "var(--text)" }}>{b.name}</h3>
                    <span className="text-xs bg-rose-500/20 text-rose-400 px-2 py-1 rounded-full ml-2 shrink-0">{b.city}</span>
                  </div>
                  <p className="text-xs mb-1" style={{ color: "var(--text-3)" }}>{b.speciality}</p>
                  {b.address && <p className="text-xs mb-2" style={{ color: "var(--text-3)" }}>{b.address}{b.phone ? ` · ${b.phone}` : ""}</p>}
                  <p className="text-sm" style={{ color: "var(--text-2)" }}>{b.desc}</p>
                </a>
              ) : (
                <div key={b.name} className="glass card-hover rounded-2xl p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold" style={{ color: "var(--text)" }}>{b.name}</h3>
                    <span className="text-xs bg-rose-500/20 text-rose-400 px-2 py-1 rounded-full ml-2 shrink-0">{b.city}</span>
                  </div>
                  <p className="text-xs mb-1" style={{ color: "var(--text-3)" }}>{b.speciality}</p>
                  {b.address && <p className="text-xs mb-2" style={{ color: "var(--text-3)" }}>{b.address}</p>}
                  <p className="text-sm" style={{ color: "var(--text-2)" }}>{b.desc}</p>
                </div>
              )
            ))}
          </div>
          <p className="text-xs mt-4" style={{ color: "var(--text-3)" }}>Note: boutique availability and hours change. Verify on Google Maps or call ahead before visiting.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Online Shopping & Imports</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {online.map((o) => (
              <a key={o.name} href={o.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 card-hover block group">
                <h3 className="font-semibold text-sm mb-2 group-hover:text-rose-400 transition-colors" style={{ color: "var(--text)" }}>{o.name}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{o.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Community Channels</h2>
          <div className="glass rounded-2xl p-6">
            <ul className="space-y-4">
              {community.map((c) => (
                <li key={c.channel} className="pb-4 last:pb-0" style={{ borderBottom: "1px solid var(--border)" }}>
                  <p className="font-medium text-sm mb-1" style={{ color: "var(--text)" }}>{c.channel}</p>
                  <p className="text-sm" style={{ color: "var(--text-2)" }}>{c.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Gold & Jewellery</h2>
          <div className="space-y-3">
            {jewellery.map((j) => (
              <div key={j.name} className="glass rounded-2xl p-5">
                <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--text)" }}>{j.name}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{j.note}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
