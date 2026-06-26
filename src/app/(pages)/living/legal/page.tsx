import PageHeader from "@/components/ui/PageHeader";
import { ExternalLink } from "lucide-react";

const permits = [
  { type: "L Permit", full: "Short-Term Residence", duration: "Up to 1 year (renewable)", who: "Employment contracts under 1 year. Student placements. Restricted activities.", url: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/eu_efta/ausweis_l_eu_efta.html" },
  { type: "B Permit", full: "Residence Permit", duration: "1 year (annual renewal)", who: "Standard permit for employees with 1+ year contracts. Tied to specific employer initially.", url: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/nicht-eu_efta/ausweis_b.html" },
  { type: "C Permit", full: "Settlement Permit", duration: "Unlimited (5-year renewal)", who: "After 5 or 10 years of legal residence (varies by nationality and canton). Unrestricted work.", url: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/nicht-eu_efta/ausweis_c.html" },
  { type: "G Permit", full: "Cross-Border Commuter", duration: "5 years (for long-term work)", who: "For those working in Switzerland but residing in EU border region (France, Germany, Italy, Austria).", url: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/eu_efta/ausweis_g_eu_efta.html" },
  { type: "Ci Permit", full: "Spouse of Official", duration: "Tied to spouse's stay", who: "Spouses of international officials (UN, diplomatic staff) who wish to work in Switzerland.", url: "https://www.sem.admin.ch/en/" },
];

const indianDocs = [
  {
    title: "OCI Card (Overseas Citizen of India)",
    desc: "Lifelong visa to visit India. Multiple entry, no time limit. Apply online at ociservices.gov.in, submit biometrics at Indian Consulate. No work rights in India (except IT special provisions).",
    url: "https://ociservices.gov.in",
    time: "6–10 weeks processing",
  },
  {
    title: "Indian Passport Renewal",
    desc: "Apply online at passportindia.gov.in (Passport Seva). Book appointment at Consulate General Zurich or Geneva. Bring current passport, proof of Swiss residence, and photos. ePassport issued in India.",
    url: "https://www.passportindia.gov.in",
    time: "4–8 weeks",
  },
  {
    title: "PAN Card for NRIs",
    desc: "Required for financial transactions in India, filing Indian tax returns, and investing in India. Apply at incometaxindia.gov.in or via NSDL/UTI portal.",
    url: "https://www.incometaxindia.gov.in",
    time: "2–3 weeks",
  },
  {
    title: "Renouncing Indian Citizenship",
    desc: "India does not permit dual citizenship. If you naturalise as Swiss, you must renounce Indian citizenship within 3 years. Apply at Indian Consulate. OCI card can be obtained after renunciation.",
    url: "https://www.mha.gov.in/en/renunciation",
    time: "3–6 months",
  },
  {
    title: "Power of Attorney (PoA) for India",
    desc: "For property transactions, legal matters or banking in India. Get PoA notarised at the Indian Consulate or by a Swiss notary with Apostille (from Swiss cantonal chancery).",
    url: "https://www.eoibern.gov.in",
    time: "Same day at Consulate",
  },
  {
    title: "Affidavits & Document Attestation",
    desc: "Birth certificates, marriage certificates, educational degrees for use in India. Can be attested/apostilled at the Indian Consulate or Swiss cantonal Staatskanzlei.",
    url: "https://www.eoibern.gov.in",
    time: "1–3 days",
  },
];

export default function LegalPage() {
  return (
    <div className="bg-slate-950 text-white">
      <PageHeader
        title="Legal & Immigration"
        subtitle="Swiss residence permits, OCI cards, Indian passport renewal, naturalization, and everything in between — with official links."
        badge="⚖️ Legal & Permits Guide"
        gradient="from-amber-500 to-orange-600"
        breadcrumbs={[{ label: "Living in Switzerland", href: "/living" }, { label: "Legal & Immigration" }]}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-14">
        <div>
          <h2 className="text-2xl font-black text-white mb-2">Swiss Residence Permits</h2>
          <p className="text-slate-400 text-sm mb-2">Your permit type depends on your nationality, employment status, and length of stay.</p>
          <a href="https://www.sem.admin.ch/sem/en/home/themen/aufenthalt.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 mb-6 transition-colors">
            State Secretariat for Migration (SEM) — Official Source <ExternalLink className="w-3 h-3" />
          </a>
          <div className="space-y-3">
            {permits.map((p) => (
              <div key={p.type} className="glass rounded-xl p-5">
                <div className="flex items-start gap-4 flex-wrap">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-black text-sm shrink-0">{p.type}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 flex-wrap mb-1">
                      <h3 className="font-semibold text-white text-sm">{p.full}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/20">{p.duration}</span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed mb-2">{p.who}</p>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 transition-colors">
                      SEM official info <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-white mb-2">Indian Government Documents</h2>
          <p className="text-slate-400 text-sm mb-6">Indian consular services available in Switzerland — with official portals</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {indianDocs.map((d) => (
              <div key={d.title} className="glass rounded-xl p-5">
                <h3 className="font-semibold text-white text-sm mb-1">{d.title}</h3>
                <span className="text-xs text-orange-400 block mb-2">⏱ {d.time}</span>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">{d.desc}</p>
                <a href={d.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 transition-colors">
                  Official portal <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-5 sm:p-6 border border-amber-500/20">
          <h3 className="font-bold text-amber-400 text-sm mb-3">🇨🇭 Swiss Naturalization</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-2">Indians can apply for Swiss citizenship after <strong className="text-white">10 years of legal residence</strong> (years spent in Switzerland aged 8–18 count double). Requirements: integration, language proficiency (B1 spoken, A2 written), knowledge of Swiss society and no criminal record.</p>
          <p className="text-slate-400 text-sm leading-relaxed mb-3">Naturalisation is at cantonal/municipal level. Each canton has different requirements and processing times. Contact your Gemeinde for the naturalisation application.</p>
          <a href="https://www.sem.admin.ch/sem/en/home/themen/buergerrecht.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 transition-colors">
            Swiss Citizenship Guide (SEM) <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </section>
    </div>
  );
}
