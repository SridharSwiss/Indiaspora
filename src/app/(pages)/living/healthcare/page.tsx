import PageHeader from "@/components/ui/PageHeader";
import { ExternalLink } from "lucide-react";

const insurers = [
  { name: "CSS", url: "https://www.css.ch/en/", desc: "Switzerland's largest insurer. Excellent app, good HMO/Telmed options, competitive premiums." },
  { name: "Helsana", url: "https://www.helsana.ch/en/", desc: "Comprehensive coverage. Strong supplementary plans. Good for families." },
  { name: "SWICA", url: "https://www.swica.ch/en/", desc: "Known for wellness focus. Good complementary medicine coverage. Strong in German Switzerland." },
  { name: "Sanitas", url: "https://www.sanitas.com/en/", desc: "Good digital services. Competitive for young adults and families." },
  { name: "Concordia", url: "https://www.concordia.ch/en/", desc: "Cooperative model. Often cheaper for families. Strong in rural areas." },
  { name: "KPT", url: "https://www.kpt.ch/en/", desc: "Often has the lowest basic premiums. Worth comparing for price-conscious families." },
];

const models = [
  { name: "Standard Model", saving: "Base price", desc: "Choose any doctor in Switzerland as your first point of contact. Most freedom, highest premium." },
  { name: "HMO Model", saving: "Save 15–20%", desc: "Always see the GP in your HMO network first. Large network, good quality. Very popular with Indians." },
  { name: "Telmed Model", saving: "Save 10–15%", desc: "Call a medical hotline first before visiting a doctor. Convenient for minor issues." },
  { name: "GP Model", saving: "Save 8–12%", desc: "Register a specific GP as your gatekeeper. Builds a long-term relationship with one doctor." },
];

const emergencies = [
  { service: "Emergency (All)", number: "112", note: "EU standard. Works across Switzerland" },
  { service: "Police (Polizei/Police)", number: "117", note: "" },
  { service: "Fire Brigade (Feuerwehr)", number: "118", note: "" },
  { service: "Ambulance (Sanität/SMUR)", number: "144", note: "" },
  { service: "Toxicology Poisoning", number: "145", note: "24h poison helpline" },
  { service: "Medical on-call (medphone)", number: "0800 33 66 55", note: "Refer to GP. Free call" },
];

export default function HealthcarePage() {
  return (
    <div className="bg-slate-950 text-white">
      <PageHeader
        title="Healthcare in Switzerland"
        subtitle="Mandatory health insurance, choosing the right insurer, finding doctors, and navigating the Swiss healthcare system."
        badge="🏥 Health & Insurance Guide"
        gradient="from-rose-500 to-pink-600"
        breadcrumbs={[{ label: "Living in Switzerland", href: "/living" }, { label: "Healthcare" }]}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-14">
        <div className="glass rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white mb-4">How the Swiss Health System Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-orange-400 font-semibold mb-1">Basic Insurance (KVG/LAMal)</div>
              <p className="text-slate-400 text-xs leading-relaxed">Mandatory for every resident. Covers GP visits, hospital stays, medications on the Spezialitätenliste list, maternity care, and preventive care. Same benefits at every approved insurer.</p>
            </div>
            <div>
              <div className="text-orange-400 font-semibold mb-1">Supplementary Insurance (VVG)</div>
              <p className="text-slate-400 text-xs leading-relaxed">Optional. Covers private hospital rooms, dental care, vision, alternative medicine (Komplementärmedizin), and treatments abroad. Varies greatly by insurer.</p>
            </div>
            <div>
              <div className="text-orange-400 font-semibold mb-1">Franchise (Deductible)</div>
              <p className="text-slate-400 text-xs leading-relaxed">You choose an annual deductible: CHF 300–2,500. Higher deductible = lower monthly premium. If healthy, choose CHF 2,500. Families often choose CHF 300 for children (free for under-18s in some cantons).</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="https://priminfo.admin.ch" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium hover:bg-orange-500/20 transition-colors">
              Official Premium Comparison (priminfo.admin.ch) <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://www.comparis.ch" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium hover:bg-blue-500/20 transition-colors">
              Comparis.ch Comparison <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://www.bag.admin.ch/bag/en/home/versicherungen/krankenversicherung.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium hover:bg-teal-500/20 transition-colors">
              FOPH Health Insurance Guide <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-white mb-2">Insurance Models</h2>
          <p className="text-slate-400 text-sm mb-6">Choose a model to reduce your premium by up to 25%</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {models.map((m) => (
              <div key={m.name} className="glass rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white text-sm">{m.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-teal-500/15 text-teal-400 border border-teal-500/20">{m.saving}</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-white mb-2">Major Health Insurers</h2>
          <p className="text-slate-400 text-sm mb-6">Approved basic insurers popular with Indian residents</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {insurers.map((ins) => (
              <a key={ins.name} href={ins.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover group block">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-base group-hover:text-rose-400 transition-colors">{ins.name}</h3>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{ins.desc}</p>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-white mb-6">Emergency Numbers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {emergencies.map((e) => (
              <div key={e.service} className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-rose-400 mb-1">{e.number}</div>
                <div className="text-white text-xs font-medium">{e.service}</div>
                {e.note && <div className="text-slate-500 text-xs mt-1">{e.note}</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-5 sm:p-6 border border-rose-500/20">
          <h3 className="font-bold text-rose-400 text-sm mb-3">💡 Community Tip</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Many Indian families use the HMO model at CSS or Helsana. Finding a GP who speaks English (and sometimes Hindi/Gujarati) is possible in Zurich and Geneva. Ask the IAGZ community WhatsApp group for doctor recommendations near your neighbourhood.</p>
        </div>
      </section>
    </div>
  );
}
