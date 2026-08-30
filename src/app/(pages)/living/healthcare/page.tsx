import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Healthcare in Switzerland for Indians",
  description: "Swiss health insurance explained — choose the right insurer, model, and franchise. Emergency numbers and tips for Indian residents.",
  openGraph: {
    title: "Healthcare in Switzerland for Indians | IndiaSwiss",
    description: "Swiss health insurance explained — choose the right insurer, model, and franchise. Emergency numbers and tips for Indian residents.",
  },
};

const insurers = [
  { name: "CSS", url: "https://www.css.ch/en/private-customers.html", note: "One of the largest insurers; good English support and online tools." },
  { name: "Helsana", url: "https://www.helsana.ch/en/private-customers.html", note: "Wide network; strong supplementary (Zusatzversicherung) plans." },
  { name: "Swica", url: "https://www.swica.ch/en", note: "Consistently highly rated for customer service and digital experience." },
  { name: "Sanitas", url: "https://www.sanitas.com/en/private-customers.html", note: "Good digital app; popular among younger expats." },
  { name: "Assura", url: "https://www.assura.ch/en", note: "Often the lowest premiums; more limited network. Good for healthy adults." },
  { name: "Concordia", url: "https://www.concordia.ch/en/private-individuals.html", note: "Cooperative model; good value for families with children." },
];

const models = [
  { name: "Standard", desc: "Free choice of any doctor or specialist in Switzerland. Highest premium but maximum flexibility." },
  { name: "HMO", desc: "Must use a specific group practice as your first point of contact (gatekeeper). Lower premium — savings of 15–25%." },
  { name: "Telmed", desc: "Call a medical advice hotline first before seeing a doctor. Moderate savings of 10–20%." },
  { name: "Family Doctor (Hausarzt)", desc: "Register with a GP who coordinates your care and refers you to specialists. Good savings and continuity of care." },
];

export default function HealthcarePage() {
  return (
    <div>
      <PageHeader
        title="Healthcare in Switzerland"
        subtitle="Switzerland has one of the world's best healthcare systems. Here's how to navigate it as an Indian resident."
        badge="Health Guide"
        gradient="from-red-500 to-pink-500"
        breadcrumbs={[
          { label: "Living in Switzerland", href: "/living" },
          { label: "Healthcare" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>How Swiss Health Insurance Works</h2>
          <div className="glass rounded-2xl p-6 mb-6">
            <p className="text-white/70 text-sm leading-relaxed">Health insurance (Grundversicherung / assurance de base / LAMal-KVG) is <strong style={{ color: "var(--text)" }}>mandatory</strong> for all residents. You must enrol within <strong style={{ color: "var(--text)" }}>3 months of arrival</strong> — it is backdated to your arrival date. The Federal government sets the minimum coverage; all approved insurers must cover the same basic benefits. You choose your insurer, model, and annual deductible (franchise). Compare all options at the official government tool: <span className="text-red-400">priminfo.admin.ch</span> (Federal Office of Public Health), or at <span className="text-red-400">comparis.ch</span> or <span className="text-red-400">moneyland.ch</span> for side-by-side premium comparisons.</p>
          </div>
          <h3 className="text-lg font-semibold mb-4" style={{ color: "var(--text)" }}>Choose Your Deductible (Franchise)</h3>
          <div className="glass rounded-2xl p-6">
            <p className="text-sm/70 mb-3" style={{ color: "var(--text)" }}>The franchise ranges from <strong style={{ color: "var(--text)" }}>CHF 300 to CHF 2,500/year</strong>. Higher franchise = lower monthly premium, but you pay more out-of-pocket when you need care. As a rough guide, typical monthly premiums for a standard adult plan range from <strong style={{ color: "var(--text)" }}>CHF 350–700/month</strong> depending on canton (lowest in Appenzell Innerrhoden, highest in Geneva and Basel-Stadt). After your deductible is met, you also pay a 10% co-payment (Selbstbehalt) up to a maximum of CHF 700/year.</p>
            <p className="text-sm/50" style={{ color: "var(--text)" }}>Children's premiums are significantly lower and the franchise is capped at CHF 600.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Major Insurers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {insurers.map((ins) => (
              <a key={ins.name} href={ins.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-4 block group">
                <h3 className="text-base font-semibold mb-1 group-hover:text-red-400 transition-colors" style={{ color: "var(--text)" }}>{ins.name}</h3>
                <p className="text-xs/50" style={{ color: "var(--text)" }}>{ins.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Insurance Models</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {models.map((m) => (
              <div key={m.name} className="glass card-hover rounded-2xl p-5">
                <h3 className="text-base font-semibold text-red-400 mb-2">{m.name}</h3>
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>What's Not Covered — Dental & Supplements</h2>
          <div className="glass rounded-2xl p-6 space-y-3 text-sm" style={{ color: "var(--text)" }}>
            <p><strong style={{ color: "var(--text)" }}>Dental care</strong> is <strong style={{ color: "var(--text)" }}>not covered</strong> by basic insurance (Grundversicherung) for adults. Budget CHF 200–800/year for routine check-ups and cleaning. Consider supplementary dental insurance (Zahnversicherung) — available from most insurers for CHF 20–60/month.</p>
            <p><strong style={{ color: "var(--text)" }}>Supplementary insurance (Zusatzversicherung / LCA)</strong> covers extras like private hospital rooms, alternative medicine (Komplementärmedizin), glasses, and dental. It is issued separately from the basic policy and requires underwriting — apply while healthy.</p>
            <p><strong style={{ color: "var(--text)" }}>Maternity care</strong> is fully covered by basic insurance from the 13th week of pregnancy. The insurer waives your deductible entirely for childbirth and the 8-week postnatal period.</p>
            <p><strong style={{ color: "var(--text)" }}>Finding an English-speaking GP:</strong> Search the <a href="https://www.healthinfo.ch" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">healthinfo.ch</a> directory or ask at your insurer's helpline. Cantonal medical directories (e.g., aerztefinden.ch for Zurich) also allow filtering by language.</p>
            <p><strong style={{ color: "var(--text)" }}>Pharmacies (Apotheke / Pharmacie):</strong> Open Mon–Fri 8 am–6:30 pm, Saturdays 8 am–4 pm. Each city has 24/7 duty pharmacies (Notfallapotheke) — find them at <a href="https://www.health.ch/notfall" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300">health.ch</a> or via the SBB app.</p>
          </div>
        </section>

        <div className="glass rounded-2xl p-6 border border-red-500/20">
          <h3 className="text-base font-semibold text-red-400 mb-3">Emergency Numbers</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[{n:"112",l:"General Emergency"},{n:"144",l:"Ambulance"},{n:"117",l:"Police"},{n:"145",l:"Poisoning (Tox)"}].map(e=>(
              <div key={e.n}><p className="text-2xl font-bold" style={{ color: "var(--text)" }}>{e.n}</p><p className="text-xs/50" style={{ color: "var(--text)" }}>{e.l}</p></div>
            ))}
          </div>
          <p className="text-xs/40 mt-4" style={{ color: "var(--text)" }}>After hours GP service: call your insurer's Telmed line (number on your insurance card) or dial 0800 33 66 55 (Mediphone, free, 24/7).</p>
        </div>
      </div>
    </div>
  );
}
