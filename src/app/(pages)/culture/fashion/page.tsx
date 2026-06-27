import PageHeader from "@/components/ui/PageHeader";

const boutiques = [
  { name: "Rang De", city: "Zurich", desc: "Sarees, salwar kameez, designer wear, and Indian accessories. Bridal consultations available.", type: "Physical" },
  { name: "Desi Closet", city: "Geneva", desc: "Bridal and party wear, lehengas, sherwanis for men. Popular for Diwali and Navratri season.", type: "Physical" },
  { name: "Lehenga House Zurich", city: "Zurich", desc: "Specialises in bridal lehengas and wedding wear. In-house alterations and blouse stitching.", type: "Physical" },
  { name: "Silk India Basel", city: "Basel", desc: "Pure silk sarees imported directly from Kanchipuram, Varanasi, and Mysore.", type: "Physical" },
];

const onlineOptions = [
  { name: "WhatsApp Boutiques", desc: "Many Indian women run curated ethnic wear boutiques via WhatsApp. Find via Facebook group \"Desi Moms Switzerland\"" },
  { name: "Pre-loved Indian Wear", desc: "Buy and sell gently used Indian wear via \"Indian Wardrobe Switzerland\" Facebook group. Great for one-time event wear." },
  { name: "Custom Tailoring", desc: "Several community members offer custom stitching and blouse work. Post requests in community Facebook groups." },
  { name: "Order from India via DHL", desc: "DHL Express delivers from India in 3–5 working days. Customs duties apply above CHF 300 declared value." },
];

const occasions = [
  { occasion: "Diwali & Navratri", wear: "Lehenga choli, chaniya choli, silk sarees, anarkali suits" },
  { occasion: "Weddings", wear: "Bridal lehenga, sarees, sherwanis, Indo-western fusion" },
  { occasion: "Office Parties & Events", wear: "Salwar kameez, kurta sets, lighter silk blouses" },
  { occasion: "Puja at Home", wear: "Cotton sarees, silk dupattas, simple kurtas" },
  { occasion: "Garba Night", wear: "Chaniya choli, mirror-work blouses, ghagra skirts" },
  { occasion: "Summer Outings", wear: "Cotton kurtis, palazzo sets, printed dupattas" },
];

export default function FashionPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Indian Fashion & Boutiques in Switzerland"
        subtitle="Find sarees, lehengas, kurtas, and jewellery — for Diwali, weddings, or everyday Indian ethnic wear. Physical boutiques and online options across Switzerland."
        badge="Ethnic Wear"
        gradient="from-rose-500 to-pink-600"
        breadcrumbs={[{ label: "Culture & Arts", href: "/culture" }, { label: "Fashion & Boutiques" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Physical Boutiques</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {boutiques.map((b) => (
              <div key={b.name} className="glass rounded-2xl p-5 card-hover">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white">{b.name}</h3>
                  <span className="text-xs bg-white/10 text-slate-300 px-2 py-1 rounded-full ml-2">{b.city}</span>
                </div>
                <p className="text-sm text-slate-400">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Online & Community Options</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {onlineOptions.map((o) => (
              <div key={o.name} className="glass rounded-2xl p-5">
                <h3 className="font-semibold text-rose-400 mb-2">{o.name}</h3>
                <p className="text-sm text-slate-400">{o.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">What to Wear</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {occasions.map((o) => (
              <div key={o.occasion} className="glass rounded-2xl p-4">
                <h3 className="font-semibold text-pink-400 mb-2 text-sm">{o.occasion}</h3>
                <p className="text-xs text-slate-400">{o.wear}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass rounded-2xl p-6">
          <h3 className="font-semibold text-white mb-4">Importing Indian Wear from India</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>&#8226; <strong className="text-white">Courier:</strong> DHL Express delivers from India in 3–5 working days</li>
            <li>&#8226; <strong className="text-white">Customs duty:</strong> Goods above CHF 300 declared value attract Swiss customs duties. Check <a href="https://www.bazg.admin.ch/bazg/en/home/information-individuals/private-travel/importation-into-switzerland.html" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-300">bazg.admin.ch</a></li>
            <li>&#8226; <strong className="text-white">VAT:</strong> Swiss VAT (8.1%) is charged on imports above CHF 65</li>
            <li>&#8226; <strong className="text-white">Care:</strong> Swiss dry cleaners handle silk and embroidery well. Use Persil Color for cotton Indian wear</li>
            <li>&#8226; <strong className="text-white">Packing tip:</strong> When travelling back from India, distribute across checked bags to stay within duty-free allowance</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
