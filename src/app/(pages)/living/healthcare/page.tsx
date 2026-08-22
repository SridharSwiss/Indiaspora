import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Healthcare in Switzerland for Indians",
  description: "Swiss health insurance explained — choose the right insurer, model, and franchise. Emergency numbers and tips.",
  openGraph: {
    title: "Healthcare in Switzerland for Indians | IndiaSwiss",
    description: "Swiss health insurance explained — choose the right insurer, model, and franchise. Emergency numbers and tips.",
  },
};

const insurers = [
  { name: "CSS", note: "Largest Swiss insurer; good English support." },
  { name: "Helsana", note: "Wide network; strong supplementary plans." },
  { name: "Swica", note: "Highly rated for customer service." },
  { name: "Sanitas", note: "Good digital app and online tools." },
  { name: "Assura", note: "Lowest premiums but limited network." },
  { name: "Concordia", note: "Cooperative model; good for families." },
];

const models = [
  { name: "Standard", desc: "Free choice of any doctor or specialist. Highest premium." },
  { name: "HMO", desc: "Must use a specific group practice as gatekeeper. Lower premium." },
  { name: "Telmed", desc: "Call a medical hotline first before seeing a doctor. Moderate savings." },
  { name: "Family Doctor (Hausarzt)", desc: "Register with a GP who refers you to specialists. Good savings." },
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
          <h2 className="text-2xl font-bold text-white mb-4">How Swiss Health Insurance Works</h2>
          <div className="glass rounded-2xl p-6 mb-6">
            <p className="text-white/70 text-sm leading-relaxed">Health insurance (Grundversicherung / assurance de base) is <strong className="text-white">mandatory</strong> for all residents. You must enrol within 3 months of arrival — it is backdated to your arrival date. The government sets the minimum coverage; all insurers must cover the same basic benefits. You choose your insurer, model, and annual deductible (franchise).</p>
          </div>
          <h3 className="text-lg font-semibold text-white mb-4">Choose Your Deductible (Franchise)</h3>
          <div className="glass rounded-2xl p-6">
            <p className="text-sm text-white/70 mb-3">The franchise ranges from <strong className="text-white">CHF 300 to CHF 2,500/year</strong>. Higher franchise = lower monthly premium, but you pay more out-of-pocket when you need care. Healthy adults who rarely visit doctors benefit from a high franchise. Families with children should consider a lower franchise.</p>
            <p className="text-sm text-white/50">Compare all insurers and models at <span className="text-red-400">priminfo.admin.ch</span> (official government comparator).</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Major Insurers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {insurers.map((ins) => (
              <div key={ins.name} className="glass card-hover rounded-2xl p-4">
                <h3 className="text-base font-semibold text-white mb-1">{ins.name}</h3>
                <p className="text-xs text-white/50">{ins.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Insurance Models</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {models.map((m) => (
              <div key={m.name} className="glass card-hover rounded-2xl p-5">
                <h3 className="text-base font-semibold text-red-400 mb-2">{m.name}</h3>
                <p className="text-sm text-white/60">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="glass rounded-2xl p-6 border border-red-500/20">
          <h3 className="text-base font-semibold text-red-400 mb-3">Emergency Numbers</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[{n:"112",l:"General Emergency"},{n:"144",l:"Ambulance"},{n:"117",l:"Police"},{n:"145",l:"Poisoning"}].map(e=>(
              <div key={e.n}><p className="text-2xl font-bold text-white">{e.n}</p><p className="text-xs text-white/50">{e.l}</p></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
