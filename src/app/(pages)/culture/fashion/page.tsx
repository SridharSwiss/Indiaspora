import PageHeader from "@/components/ui/PageHeader";

const boutiques = [
  { name: "Rang De Zurich", city: "Zurich", description: "Sarees, salwar kameez, and designer wear. Custom orders available.", specialty: "Sarees & Salwars" },
  { name: "Desi Closet Geneva", city: "Geneva", description: "Bridal and party wear, lehengas, and designer Indian outfits for weddings and festivities.", specialty: "Bridal & Party Wear" },
  { name: "Lehenga House Zurich", city: "Zurich", description: "Wedding lehenga collection with in-house alteration services for a perfect fit.", specialty: "Wedding Lehengas" },
  { name: "Silk India Basel", city: "Basel", description: "Curated collection of pure silk sarees — Kanjivaram, Banarasi, and Mysore silk.", specialty: "Pure Silk Sarees" },
];

export default function FashionPage() {
  return (
    <div>
      <PageHeader
        title="Indian Fashion & Boutiques in Switzerland"
        subtitle="Find sarees, lehengas, kurtas, and jewellery — whether for Diwali, weddings, or everyday Indian ethnic wear in Switzerland."
        badge="Ethnic Wear"
        gradient="from-rose-500 to-pink-600"
        breadcrumbs={[
          { label: "Culture & Arts", href: "/culture" },
          { label: "Fashion & Boutiques" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Physical Boutiques */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Physical Boutiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {boutiques.map((boutique) => (
              <div key={boutique.name} className="glass card-hover rounded-2xl p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">{boutique.name}</h3>
                  <span className="text-xs text-white/40 ml-2 shrink-0">{boutique.city}</span>
                </div>
                <span className="text-sm text-rose-400 font-medium">{boutique.specialty}</span>
                <p className="text-sm text-white/60 mt-2">{boutique.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Online Options */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Online & Community Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass card-hover rounded-2xl p-6">
              <h3 className="text-base font-semibold text-white mb-2">WhatsApp Boutiques</h3>
              <p className="text-sm text-white/60">Many Indian women run boutique businesses through WhatsApp, offering sarees, suits, and accessories. Join <strong className="text-white">"Desi Moms Switzerland"</strong> on Facebook to connect with these sellers.</p>
            </div>
            <div className="glass card-hover rounded-2xl p-6">
              <h3 className="text-base font-semibold text-white mb-2">Custom Tailoring</h3>
              <p className="text-sm text-white/60">Order fabric from India and have it tailored locally, or use community tailors who specialise in blouse stitching, salwar alterations, and lehenga fitting.</p>
            </div>
            <div className="glass card-hover rounded-2xl p-6">
              <h3 className="text-base font-semibold text-white mb-2">Pre-Loved Indian Wear</h3>
              <p className="text-sm text-white/60">Join the <strong className="text-white">"Indian Wardrobe Switzerland"</strong> Facebook group to buy and sell pre-loved sarees, lehengas, and ethnic wear within the community.</p>
            </div>
          </div>
        </section>

        {/* Importing from India */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Importing from India</h2>
          <div className="glass rounded-2xl p-8 text-sm text-white/70 space-y-3">
            <p><strong className="text-white">DHL Express</strong> delivers from India to Switzerland in 3–5 business days. Ideal for sarees, suits, and jewellery.</p>
            <p><strong className="text-white">Customs duties</strong> apply on imports above CHF 300. For personal-use clothing, duty is typically 8.5% + Swiss VAT (8.1%). Check current rules at <a href="https://www.bazg.admin.ch/en" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-300 underline">bazg.admin.ch</a> (Swiss Federal Office for Customs and Border Security).</p>
            <p>Keep the commercial invoice and airway bill — customs may request documentation for higher-value packages.</p>
          </div>
        </section>

        {/* Care Tips */}
        <div className="glass rounded-2xl p-6 border border-rose-500/20">
          <h3 className="text-base font-semibold text-rose-400 mb-3">Care Tips for Indian Ethnic Wear in Switzerland</h3>
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="flex items-start gap-2"><span className="text-rose-400">•</span>Swiss dry cleaners handle silk sarees and embroidered lehengas — ask for <em>Seide</em> (silk) or <em>Stickerei</em> (embroidery) care.</li>
            <li className="flex items-start gap-2"><span className="text-rose-400">•</span>Use <strong className="text-white">Persil Color</strong> for washing cotton Indian wear — gentle on colours and widely available in Coop and Migros.</li>
            <li className="flex items-start gap-2"><span className="text-rose-400">•</span>Store silk sarees folded in muslin cloth or tissue paper in a cool, dry wardrobe to prevent damage from Swiss humidity.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
