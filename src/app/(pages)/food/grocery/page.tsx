import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indian Grocery Stores in Switzerland",
  description: "Find Indian spices, dals, flours, and groceries near you — physical stores by city and online delivery across Switzerland.",
  openGraph: {
    title: "Indian Grocery Stores in Switzerland | IndiaSwiss",
    description: "Find Indian spices, dals, flours, and groceries near you — physical stores by city and online delivery across Switzerland.",
  },
};

const stores = [
  {
    city: "Zurich",
    name: "Aggarwal",
    area: "Wiedikon",
    note: "One of Switzerland's longest-running Indian grocery chains (est. 1986). Fresh vegetables, spices, lentils, frozen foods, pickles, and Indian household items. Kernstrasse 27, 8004 Zürich.",
    url: "https://aggarwal.ch",
  },
  {
    city: "Zurich",
    name: "Indiasupermarkt.ch",
    area: "Kreis 5 / Josefstrasse",
    note: "Large-format Indian supermarket with one of the widest selections in Zurich — all major brands, fresh curry leaves, Indian vegetables, frozen meals, and cosmetics. Also ships nationwide online. Josefstrasse 91, 8005 Zürich.",
    url: "https://indiasupermarkt.ch",
  },
  {
    city: "Zurich",
    name: "Salpers Asian Grocery",
    area: "Oberglatt / Zurich North",
    note: "Large Asian and Indian grocery warehouse in Oberglatt — bulk quantities of rice, dals, spices, snacks, and specialty items. Also operates an online store with nationwide delivery.",
    url: "https://salpers.ch",
  },
  {
    city: "Basel",
    name: "Aggarwal",
    area: "Grossbasel",
    note: "Basel branch of the Aggarwal chain — Indian spices, fresh produce, lentils, rice, and specialty groceries. Kuchengasse 9, Basel.",
    url: "https://aggarwal.ch",
  },
  {
    city: "Bern",
    name: "Aggarwal",
    area: "Lorraine / Schanzenstrasse",
    note: "Bern branch of the Aggarwal chain, conveniently located near the Lorraine neighbourhood. Schanzenstrasse 4/B, Bern. Phone: +41 31 311 86 55.",
    url: "https://aggarwal.ch",
  },
  {
    city: "Geneva",
    name: "Seelan Market",
    area: "Geneva",
    note: "Geneva favourite for Indian, Sri Lankan, and South Asian groceries. Good range of spices, rice varieties, and ready-to-cook items.",
    url: "https://seelanmarket.ch",
  },
  {
    city: "Lausanne",
    name: "Maison de l'Inde / Asian Epicerie",
    area: "Lausanne",
    note: "Indian and South Asian grocery shop in Lausanne serving the Romandy Indian community. Spices, dals, frozen meals, and specialty items. Search 'épicerie indienne Lausanne' on Google Maps.",
    url: null,
  },
];

const online = [
  {
    name: "indiasupermarkt.ch",
    desc: "Swiss-based Indian online supermarket — ships nationwide with fast delivery. One of the most comprehensive selections of Indian brands in Switzerland.",
    url: "https://indiasupermarkt.ch",
  },
  {
    name: "salpers.ch",
    desc: "Online Asian and Indian grocery store based in Oberglatt (ZH). Wide selection of Indian spices, ready meals, and specialty items delivered across Switzerland.",
    url: "https://salpers.ch",
  },
  {
    name: "dalchinii.ch",
    desc: "Switzerland-based online Indian grocery with curated selection of spices, lentils, flours, and pickles.",
    url: "https://dalchinii.ch",
  },
  {
    name: "Amazon.de (Germany)",
    desc: "Wide range of Indian brands available; ships to Switzerland. Check import duties and delivery costs — usually feasible for branded packaged goods.",
    url: "https://www.amazon.de",
  },
];

export default function GroceryPage() {
  return (
    <div>
      <PageHeader
        title="Indian Grocery Stores"
        subtitle="Find the ingredients you need — from fresh curry leaves to atta flour — at Indian grocery stores across Switzerland."
        badge="Groceries"
        gradient="from-green-500 to-emerald-500"
        breadcrumbs={[
          { label: "Food & Dining", href: "/food" },
          { label: "Grocery Stores" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Physical Stores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stores.map((s) => {
              const Wrapper = s.url ? "a" : "div";
              const props = s.url ? { href: s.url, target: "_blank", rel: "noopener noreferrer" } : {};
              return (
                <Wrapper key={s.name + s.city} {...props} className="glass card-hover rounded-2xl p-5 block group" style={{ textDecoration: "none" }}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base font-semibold group-hover:text-green-400 transition-colors" style={{ color: "var(--text)" }}>{s.name}</h3>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">{s.city}</span>
                      {s.url && <span className="text-xs text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">Visit →</span>}
                    </div>
                  </div>
                  <p className="text-xs mb-2" style={{ color: "var(--text-3)" }}>{s.area}</p>
                  <p className="text-sm" style={{ color: "var(--text-2)" }}>{s.note}</p>
                </Wrapper>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Online Delivery</h2>
          <div className="space-y-3">
            {online.map((o) => {
              const Wrapper = o.url ? "a" : "div";
              const props = o.url ? { href: o.url, target: "_blank", rel: "noopener noreferrer" } : {};
              return (
                <Wrapper key={o.name} {...props} className="glass card-hover rounded-2xl p-5 block group" style={{ textDecoration: "none" }}>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-semibold text-green-400 group-hover:text-green-300 transition-colors">{o.name}</h3>
                    {o.url && <span className="text-xs text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">Shop →</span>}
                  </div>
                  <p className="text-sm" style={{ color: "var(--text-2)" }}>{o.desc}</p>
                </Wrapper>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>What's Available in Swiss Supermarkets</h2>
          <div className="glass rounded-2xl p-6">
            <p className="text-sm mb-4" style={{ color: "var(--text-2)" }}>You don't need to visit a specialist store for everything. Swiss supermarkets now stock more Indian staples than ever:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-semibold mb-2 text-green-400">Migros & Coop — typically stock:</p>
                <ul className="space-y-1" style={{ color: "var(--text-2)" }}>
                  {["Basmati and jasmine rice (2 kg+ bags)", "Red and green lentils (Linsen)", "Chickpeas (canned and dried)", "Coconut milk and coconut cream", "Garam masala, turmeric, cumin, coriander", "Paneer (Migros Select and bio ranges)", "Naan bread (refrigerated section)", "Mango chutney and lime pickle", "Patak's curry pastes"].map(i => <li key={i}>• {i}</li>)}
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-green-400">Go to an Indian store for:</p>
                <ul className="space-y-1" style={{ color: "var(--text-2)" }}>
                  {["Fresh curry leaves, methi, drumsticks", "Atta (chapati flour) and besan", "Indian brands (Aashirvaad, MDH, Everest, Priya)", "Chana dal, toor dal, urad dal, moong dal", "Tamarind paste and raw tamarind", "Indian pickles (Priya, Mother's Recipe)", "Papad, chakli, mixture, and Indian snacks", "Pressure cookers, tawas, kadais"].map(i => <li key={i}>• {i}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
