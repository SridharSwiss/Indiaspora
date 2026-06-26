import PageHeader from "@/components/ui/PageHeader";
import { ExternalLink } from "lucide-react";

const networks = [
  { name: "Indian Moms Zurich Network", type: "WhatsApp Group", desc: "Active group for Indian mothers in Zurich. Playdates, school tips, neighbourhood advice and emotional support.", contact: "Via IAGZ" },
  { name: "Indian Professional Women Switzerland", type: "LinkedIn Group", desc: "Career networking, mentorship, job referrals and events for Indian women professionals.", contact: "LinkedIn" },
  { name: "Indian Women in Basel", type: "WhatsApp Group", desc: "Community for Indian women in the Basel-Stadt and Basel-Landschaft region.", contact: "Via ICAS" },
  { name: "Desi Moms Geneva", type: "Facebook Group", desc: "Parenting group for Indian mothers in the Geneva and Lake Leman region.", contact: "Facebook" },
  { name: "South Asian Women Switzerland", type: "Community Group", desc: "Inclusive network for women from India, Pakistan, Sri Lanka and Bangladesh.", contact: "Via events" },
];

const resources = [
  { name: "Femmes-Relais (Intercultural Mediators)", url: "https://www.femmes-relais.ch", desc: "Swiss intercultural health mediators helping migrant women navigate healthcare and social services." },
  { name: "LAVI – Victim Support Switzerland", url: "https://www.lavi.ch", desc: "Free and confidential support for victims of violence in Switzerland. Available in multiple languages." },
  { name: "SOS-Femmes (Domestic Violence Support)", url: "https://www.sos-femmes.ch", desc: "Geneva-based shelter and support for women and children fleeing domestic violence." },
  { name: "Frauenhaus Zurich (Women's Shelter)", url: "https://www.frauenhaus-zuerich.ch", desc: "Emergency shelter and counselling for women experiencing domestic violence in Zurich." },
  { name: "Swiss Embassy Emergency Helpline", url: "https://www.eoibern.gov.in", desc: "Indian Embassy Bern provides consular protection and emergency assistance to Indian nationals." },
];

const events = [
  "International Women's Day Networking Breakfast — March 8",
  "Diwali Ladies Night — October (Zurich & Geneva)",
  "Indian Craft & Bazaar Fair — December (Zurich)",
  "Bollywood Fitness Workshops — Monthly (Various Cities)",
  "Indian Cooking & Culture Exchange — Quarterly",
  "Mental Health & Wellbeing Workshop for Expat Women — Bi-annual",
];

export default function WomenPage() {
  return (
    <div className="bg-slate-950 text-white">
      <PageHeader
        title="Indian Women's Network"
        subtitle="Support networks, professional communities, and resources for Indian women building their lives in Switzerland."
        badge="👩 Community & Support"
        gradient="from-rose-500 to-pink-600"
        breadcrumbs={[{ label: "Community", href: "/community" }, { label: "Women's Network" }]}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-14">
        <div>
          <h2 className="text-2xl font-black text-white mb-2">Community Networks</h2>
          <p className="text-slate-400 text-sm mb-6">Active groups and networks for Indian women across Switzerland</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {networks.map((n) => (
              <div key={n.name} className="glass rounded-xl p-5 card-hover">
                <span className="text-xs px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-400 border border-rose-500/20 mb-2 inline-block">{n.type}</span>
                <h3 className="font-semibold text-white text-sm mb-2 leading-snug">{n.name}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-2">{n.desc}</p>
                <p className="text-xs text-slate-500">Access: {n.contact}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-white mb-2">Support Resources</h2>
          <p className="text-slate-400 text-sm mb-6">Official Swiss support services available to Indian women</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resources.map((r) => (
              <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover block group">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-white text-sm group-hover:text-rose-400 transition-colors leading-snug">{r.name}</h3>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{r.desc}</p>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-white mb-5">Upcoming Events for Women</h2>
          <div className="space-y-3">
            {events.map((e, i) => (
              <div key={i} className="glass rounded-xl px-5 py-4 flex items-center gap-4">
                <span className="w-7 h-7 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-white text-xs font-bold shrink-0">{i+1}</span>
                <span className="text-slate-300 text-sm">{e}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
