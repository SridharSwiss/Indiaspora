import PageHeader from "@/components/ui/PageHeader";

export default function BernPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Indians in Bern"
        subtitle="Switzerland's federal capital hosts the Embassy of India and a tight-knit community of ~2,000 Indians — diplomats, academics, and professionals."
        badge="~2,000 Indians"
        gradient="from-teal-600 to-cyan-700"
        breadcrumbs={[{ label: "City Guides", href: "/cities" }, { label: "Bern" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Community & Associations</h2>
              <ul className="space-y-3">
                {[
                  { name: "Indian Association Berne (IAB)", desc: "Main community body — cultural events, India Day, Diwali celebrations" },
                  { name: "Bharatiya Association Berne", desc: "Cultural and social events for the broader Indian community" },
                  { name: "University of Bern Indian Students", desc: "Student association, academic networking" },
                  { name: "Embassy of India, Berne", url: "https://www.indembassybern.gov.in", desc: "Consular services: OCI, passport renewal, attestation, diaspora events" },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-teal-400 mt-2 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-white">{item.name}</p>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Embassy of India, Berne</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-teal-400 mb-2">Consular Services</h3>
                  <ul className="space-y-1 text-sm text-slate-300">
                    <li>• Passport renewal and fresh applications</li>
                    <li>• OCI (Overseas Citizen of India) cards</li>
                    <li>• Document attestation / apostille</li>
                    <li>• Emergency travel documents</li>
                    <li>• Visa for third-country nationals</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-400 mb-2">Contact</h3>
                  <ul className="space-y-1 text-xs text-slate-300">
                    <li>📍 Thunstrasse 5, 3005 Bern</li>
                    <li>📞 +41 31 350 11 10</li>
                    <li>🌐 <a href="https://www.indembassybern.gov.in" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300">indembassybern.gov.in</a></li>
                    <li>⏰ Mon–Fri, 9:00–13:00 (consular hours)</li>
                    <li>⚠️ Appointment required for most services</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="glass rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Indian Food in Bern</h2>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>🍽️ <strong>Maharaja Palace</strong> (Marktgasse 32) — Family-friendly, North Indian, halal options</li>
                <li>🍽️ <strong>India Gate Bern</strong> — Tandoor and curry house</li>
                <li>🛒 <strong>Asian Deli Bern</strong> — Indian spices and groceries</li>
                <li>🍱 <strong>Tiffin Network Bern</strong> — Community-run meal sharing (Facebook group)</li>
              </ul>
            </section>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-4">Official Links</h3>
              <ul className="space-y-2">
                {[
                  { label: "Stadt Bern (City Website)", url: "https://www.bern.ch/en" },
                  { label: "Bernmobil (Public Transport)", url: "https://www.bernmobil.ch" },
                  { label: "Canton Bern Migration Office", url: "https://www.be.ch/migration" },
                  { label: "University of Bern", url: "https://www.unibe.ch/en" },
                  { label: "Embassy of India, Berne", url: "https://www.indembassybern.gov.in" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.url} target="_blank" rel="noopener noreferrer" className="text-xs text-teal-400 hover:text-teal-300">{l.label} →</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
