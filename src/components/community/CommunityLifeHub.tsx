"use client";

import React, { useState, useMemo } from "react";

type Canton =
  | "ALL" | "ZH" | "BS" | "GE" | "VD" | "ZG" | "BE" | "AG" | "LU"
  | "SG" | "TI" | "NE" | "FR" | "SO" | "SH" | "GR" | "VS" | "BL"
  | "AR" | "AI" | "GL" | "NW" | "OW" | "SZ" | "UR" | "TG" | "JU";

type LanguagePillar = "ALL" | "Hindi" | "Tamil" | "Telugu" | "Gujarati" | "Marathi" | "Bengali" | "Kannada" | "Malayalam" | "Punjabi";

type LifeStage = "ALL" | "New Arrival (0–12m)" | "Settled (1–8y)" | "Parents Visiting" | "Student";

interface ErrandItem {
  id: string;
  emoji: string;
  title: string;
  summary: string;
  cantons: Canton[];
  lifeStages: LifeStage[];
  languages?: LanguagePillar[];
  deadline?: string;
  microTip?: string;
  officialLink?: { label: string; url: string };
}


interface CantonInfo {
  code: string;
  name: string;
  region: "DE" | "FR" | "IT" | "RM";
  gemeinde?: string;
  strassenverkehrsamt?: string;
  kantonalbank?: string;
}

const CANTONS: CantonInfo[] = [
  { code: "ZH", name: "Zurich", region: "DE", gemeinde: "stadtentwicklung.ch/kreisbuero", strassenverkehrsamt: "strassenverkehrsamt.zh.ch", kantonalbank: "zkb.ch" },
  { code: "BE", name: "Bern", region: "DE", gemeinde: "bern.ch/anmeldung", strassenverkehrsamt: "be.ch/mofis", kantonalbank: "bekb.ch" },
  { code: "LU", name: "Luzern", region: "DE", strassenverkehrsamt: "strassenverkehr.lu.ch", kantonalbank: "lukb.ch" },
  { code: "UR", name: "Uri", region: "DE", strassenverkehrsamt: "ur.ch/svamt" },
  { code: "SZ", name: "Schwyz", region: "DE", strassenverkehrsamt: "sz.ch/mfa" },
  { code: "OW", name: "Obwalden", region: "DE" },
  { code: "NW", name: "Nidwalden", region: "DE" },
  { code: "GL", name: "Glarus", region: "DE" },
  { code: "ZG", name: "Zug", region: "DE", gemeinde: "zug.ch/anmeldung", strassenverkehrsamt: "mfa.zg.ch", kantonalbank: "zugerkb.ch" },
  { code: "FR", name: "Fribourg", region: "FR", strassenverkehrsamt: "fr.ch/saesfr", kantonalbank: "bcf.ch" },
  { code: "SO", name: "Solothurn", region: "DE", strassenverkehrsamt: "so.ch/amt-fuer-motorfahrzeuge" },
  { code: "BS", name: "Basel-Stadt", region: "DE", gemeinde: "bs.ch/anmeldung", strassenverkehrsamt: "mfp.bs.ch", kantonalbank: "bkbs.ch" },
  { code: "BL", name: "Basel-Landschaft", region: "DE", strassenverkehrsamt: "bl.ch/motorfahrzeuge" },
  { code: "SH", name: "Schaffhausen", region: "DE", strassenverkehrsamt: "sh.ch/mfkpruefwesen" },
  { code: "AR", name: "Appenzell Ausserrhoden", region: "DE" },
  { code: "AI", name: "Appenzell Innerrhoden", region: "DE" },
  { code: "SG", name: "St. Gallen", region: "DE", strassenverkehrsamt: "sg.ch/strassenverkehr", kantonalbank: "sgkb.ch" },
  { code: "GR", name: "Graubünden", region: "RM", strassenverkehrsamt: "gr.ch/mfa" },
  { code: "AG", name: "Aargau", region: "DE", strassenverkehrsamt: "ag.ch/motorfahrzeuge", kantonalbank: "akb.ch" },
  { code: "TG", name: "Thurgau", region: "DE", strassenverkehrsamt: "tg.ch/mfk" },
  { code: "TI", name: "Ticino", region: "IT", strassenverkehrsamt: "ti.ch/udc", kantonalbank: "bancastato.ch" },
  { code: "VD", name: "Vaud", region: "FR", gemeinde: "vd.ch/themes/population/etat-civil", strassenverkehrsamt: "vd.ch/sev", kantonalbank: "bcv.ch" },
  { code: "VS", name: "Valais", region: "FR", strassenverkehrsamt: "vs.ch/web/scfa" },
  { code: "NE", name: "Neuchâtel", region: "FR", strassenverkehrsamt: "ne.ch/sdca", kantonalbank: "bcn.ch" },
  { code: "GE", name: "Geneva", region: "FR", gemeinde: "ge.ch/ctpe/annoncer-arrivee", strassenverkehrsamt: "ge.ch/ocpm", kantonalbank: "bcge.ch" },
  { code: "JU", name: "Jura", region: "FR" },
];

const ERRANDS_DATA: ErrandItem[] = [
  {
    id: "gemeinde",
    emoji: "🏛️",
    title: "Gemeinde Registration (Anmeldung)",
    summary: "Register within 14 days of arrival. Bring employment contract, rental agreement (mailbox name must match), passport, and apostilled marriage/birth certificates.",
    cantons: ["ALL", "ZH", "BS", "GE", "VD", "ZG", "BE", "LU", "AG", "SG", "TI"],
    lifeStages: ["New Arrival (0–12m)"],
    deadline: "14 days from arrival",
    microTip: "In Zurich, register at the Kreisbüro for your district (not the central city hall). Book online — walk-ins often have 2-hour waits.",
    officialLink: { label: "Zurich Kreisbüro", url: "https://www.stadt-zuerich.ch/pd/de/index/bevoelkerungsamt/einwohnerkontrolle.html" },
  },
  {
    id: "krankenkasse",
    emoji: "🏥",
    title: "Krankenkasse (Health Insurance) Selection",
    summary: "Mandatory within 3 months of arrival — retroactive to arrival date. Choose your annual deductible (Franchise: CHF 300–2,500) and Tiers payant vs. Tiers garant model. Higher franchise = lower premium, but you pay the first CHF 2,500 out-of-pocket.",
    cantons: ["ALL", "ZH", "BS", "GE", "VD", "ZG", "BE", "LU", "AG", "SG"],
    lifeStages: ["New Arrival (0–12m)", "Settled (1–8y)"],
    microTip: "Use comparis.ch to compare premiums by PLZ. Tiers payant (Geneva/Vaud standard) means the insurer pays the doctor directly — preferred for frequent doctor visits. Tiers garant means you pay, then claim back.",
    officialLink: { label: "Federal Health Insurance Guide", url: "https://www.bag.admin.ch/bag/en/home/versicherungen/krankenversicherung.html" },
  },
  {
    id: "grocery-decoder",
    emoji: "🛒",
    title: "Swiss Supermarket Decoder",
    summary: "Decode Swiss supermarket labels, dairy, flour, spices and vegetables. Full guide with 80+ mappings — Migros, Coop, Denner, Aldi, Lidl chain tips, loyalty cards, ghee from butter, and what needs an Indian store.",
    cantons: ["ALL", "ZH", "BS", "GE", "VD", "ZG", "BE", "LU", "AG", "SG", "TI"],
    lifeStages: ["New Arrival (0–12m)", "Parents Visiting"],
    officialLink: { label: "Open Full Supermarket Decoder →", url: "/food/supermarket" },
  },
  {
    id: "zurisack",
    emoji: "🗑️",
    title: "Zürisack & Waste Rules by Canton",
    summary: "In Zurich, all household waste requires official Zürisack bags (35L ≈ CHF 2.15), sold at Migros/Coop. Glass separated by colour. Each canton has its own system — Basel, Geneva, and Vaud have different waste brands.",
    cantons: ["ZH", "BS", "GE", "VD", "ZG", "BE"],
    lifeStages: ["New Arrival (0–12m)"],
    microTip: "Basel uses 'Müllsack Basel' (orange). Geneva/Vaud use 'Sacs poubelles officiels' (grey). Never use regular plastic bags — they will be left uncollected with a notice.",
    officialLink: { label: "Zurich Waste Guide", url: "https://www.stadt-zuerich.ch/gudv/de/index/entsorgung_recycling.html" },
  },
  {
    id: "kontrollfahrt",
    emoji: "🚗",
    title: "Indian Driving License → Swiss (Kontrollfahrt)",
    summary: "You have exactly 12 months from Swiss arrival to pass the Kontrollfahrt (practical test). One attempt only. Apply at your canton's Strassenverkehrsamt with your Indian license + official translation.",
    cantons: ["ALL", "ZH", "BS", "GE", "VD", "ZG", "BE", "LU", "AG", "SG"],
    lifeStages: ["New Arrival (0–12m)", "Settled (1–8y)"],
    deadline: "12 months from arrival — HARD DEADLINE",
    microTip: "Take 5–8 lessons with an instructor who knows your specific Strassenverkehrsamt test route. Examiners look for mirror-checks at exact Swiss intervals, not Indian style.",
    officialLink: { label: "ASTRA Official Guide", url: "https://www.astra.admin.ch/astra/en/home/topics/drivers--vehicles/fahrzeugfuehrerausweise/auslaendische-ausweise.html" },
  },
  {
    id: "permit-transitions",
    emoji: "📄",
    title: "Permit Transitions: L → B → C",
    summary: "Permit L (short-stay, <1yr). Permit B (residence, renewable annually). Permit C (settlement, permanent after 5–10 years). C permits are canton-dependent — ZH/ZG grant C after 5 years for EU nationals, 10 years for non-EU (Indians).",
    cantons: ["ALL", "ZH", "BS", "GE", "VD", "ZG", "BE", "LU", "AG", "SG"],
    lifeStages: ["Settled (1–8y)", "New Arrival (0–12m)"],
    microTip: "Your B permit is tied to your employer for the first 12 months. After that, you can switch jobs freely. Notify the Ausländeramt within 14 days of any employer change.",
    officialLink: { label: "SEM Permits Guide", url: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/nicht_eu_efta.html" },
  },
  {
    id: "waschkueche",
    emoji: "🧺",
    title: "Waschküche (Shared Laundry) Booking",
    summary: "Most Swiss apartment buildings have a shared laundry room (Waschküche). You book a 3-hour slot on a physical wall calendar. Unwritten rule: arrive on time or your neighbours will remove your laundry.",
    cantons: ["ALL", "ZH", "BS", "GE", "VD", "ZG", "BE", "LU", "AG", "SG", "TI"],
    lifeStages: ["New Arrival (0–12m)"],
    microTip: "Wash curry-scented items at 60°C minimum. Swiss neighbours notice. Add a fabric softener to neutralise strong food odours — it's an unspoken social expectation.",
  },
  {
    id: "parents-visiting",
    emoji: "👴👵",
    title: "Parents Visiting — Schengen Visa Checklist",
    summary: "Submit a Verpflichtungserklärung (financial guarantee, notarised at your Gemeinde), proof of accommodation, travel insurance (min. €30,000), your Swiss permit copy, and your parents' bank statements. Apply via VFS Global 3+ months ahead.",
    cantons: ["ALL", "ZH", "BS", "GE", "VD", "ZG", "BE", "LU", "AG", "SG"],
    lifeStages: ["Parents Visiting", "Settled (1–8y)"],
    microTip: "Parents staying 90 days can be covered on your Swiss health insurance as 'Zusatzversicherung'. Check with your insurer — it's often cheaper than standalone travel insurance for 3 months.",
    officialLink: { label: "VFS Global Switzerland", url: "https://visa.vfsglobal.com/ind/en/che/" },
  },
  {
    id: "kita-schooling",
    emoji: "🏫",
    title: "Kita Subsidies & Swiss School System",
    summary: "Kita (daycare) subsidies are canton and income-dependent. ZH subsidises heavily; GE has the most generous system. Gymnasium (Gymi) entry exam at age 11–12 is the key Swiss educational sorting moment — prep early.",
    cantons: ["ALL", "ZH", "BS", "GE", "VD", "ZG", "BE", "LU", "AG", "SG"],
    lifeStages: ["Settled (1–8y)", "New Arrival (0–12m)"],
    microTip: "Indian parents: the Gymiprüfung (Gymnasium exam) is at Grade 5/6. Swiss maths at this level is weaker than Indian curriculum — your child will likely excel. German language and essay-writing are the gap to close.",
    officialLink: { label: "Zurich Kita Subsidies", url: "https://www.stadt-zuerich.ch/sd/de/index/kinderbetreuung/kitanet.html" },
  },
  {
    id: "taxes",
    emoji: "🧾",
    title: "Taxes: Quellensteuer, DTAA & NRE/NRO",
    summary: "On Permit B: Quellensteuer (withholding tax) is deducted automatically by your employer. If gross income > CHF 120,000, file a full Steuererklärung. DTAA between India and Switzerland prevents double taxation — file Form 10F and a Tax Residency Certificate from Swiss tax authority.",
    cantons: ["ALL", "ZH", "BS", "GE", "VD", "ZG", "BE", "LU", "AG", "SG"],
    lifeStages: ["Settled (1–8y)", "New Arrival (0–12m)"],
    microTip: "Declare Indian NRE/NRO bank accounts on your Swiss tax return (Schedule E1). Failure to declare foreign assets is a criminal offence in Switzerland, not a civil one. NRE interest is tax-free in India but taxable in Switzerland.",
    officialLink: { label: "Swiss Federal Tax Administration", url: "https://www.estv.admin.ch/estv/en/home.html" },
  },
  {
    id: "pillar3a",
    emoji: "💰",
    title: "Pillar 3a — Tax-Efficient Retirement Savings",
    summary: "Contribute up to CHF 7,056/year (employed, 2025) into Pillar 3a and deduct the full amount from taxable income. VIAC and Finpension invest in global equities — better returns than bank accounts. Withdraw within 3 years of C permit or Swiss citizenship.",
    cantons: ["ALL", "ZH", "BS", "GE", "VD", "ZG", "BE", "LU", "AG", "SG"],
    lifeStages: ["Settled (1–8y)", "New Arrival (0–12m)"],
    microTip: "On Quellensteuer (B permit), submit a Nachtragsformular (Form DA-1) to your canton tax office to claim the Pillar 3a deduction retroactively — employers don't do this automatically.",
    officialLink: { label: "VIAC (Pillar 3a App)", url: "https://viac.ch/en/" },
  },
  {
    id: "pet-import",
    emoji: "🐾",
    title: "Bringing Your Pet from India to Switzerland",
    summary: "India is classified as a 'non-listed country' by Switzerland. Requirements: microchip, rabies vaccination, rabies antibody titer test (wait 3 months after titer before travel), tapeworm treatment 24–120h before entry. Minimum 210 days from titer test to entry into Switzerland.",
    cantons: ["ALL"],
    lifeStages: ["New Arrival (0–12m)", "Settled (1–8y)"],
    deadline: "210 days minimum lead time from rabies titer test",
    microTip: "Use a IATA-certified pet relocation service (PetAir, IPATA members). Swiss customs at Zurich airport has a dedicated animal import desk — book an appointment via BLV (Federal Food Safety and Veterinary Office) at least 2 weeks before travel.",
    officialLink: { label: "BLV Pet Import Guide", url: "https://www.blv.admin.ch/blv/en/home/tiere/reisen-mit-tieren/aus-drittlaendern.html" },
  },
  {
    id: "oci-renewal",
    emoji: "🛂",
    title: "OCI Card Renewal & Indian Passport Services",
    summary: "OCI must be re-stamped when: Indian passport renewed, child turns 20, any change in personal details. Do this via VFS Global (Zurich/Geneva) — not the Indian Embassy directly. OCI exempts you from Indian visa requirements for life.",
    cantons: ["ALL", "ZH", "BS", "GE", "VD", "ZG", "BE"],
    lifeStages: ["Settled (1–8y)", "New Arrival (0–12m)"],
    microTip: "Book VFS appointment 6–8 weeks ahead. OCI re-stamping currently takes 6–10 weeks. Travel to India with both old and new passports until the OCI is re-stamped — Indian immigration accepts the combination.",
    officialLink: { label: "VFS Global OCI Services", url: "https://visa.vfsglobal.com/ind/en/che/attend-centre/oci" },
  },
  {
    id: "student-permit",
    emoji: "🎓",
    title: "Student Permit (Permit B Student) — ETH / EPFL / UZH / UNIGE",
    summary: "Student Permit B requires university acceptance letter, proof of sufficient funds (CHF 21,000/year recommended), and health insurance. You may work max 15 hours/week during term. Transition to Permit B (employment) after graduation requires a new employer sponsorship.",
    cantons: ["ZH", "VD", "GE", "BS", "BE"],
    lifeStages: ["Student"],
    microTip: "ETH Zurich and EPFL both have dedicated international student offices. Swiss student permits cannot be changed to work permits without leaving Switzerland and re-applying — plan the employment transition 6 months ahead.",
    officialLink: { label: "SEM Student Permit", url: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/nicht_eu_efta/ausweis-b--jahresaufenthaltsbewilligung-.html" },
  },
  {
    id: "mother-tongue",
    emoji: "🗣️",
    title: "Mother-Tongue Classes & Language Communities",
    summary: "Mana Badi (Telugu weekend school), Hindi Shala, Tamil Sangam classes run across major Swiss cities. IAGZ, TASC, and TeluguSwiss run regular cultural events. Saturday language schools for children maintain heritage languages.",
    cantons: ["ALL", "ZH", "BS", "GE", "VD", "ZG", "BE"],
    lifeStages: ["Settled (1–8y)", "Parents Visiting", "New Arrival (0–12m)"],
    languages: ["Hindi", "Tamil", "Telugu", "Gujarati", "Marathi", "Bengali", "Kannada", "Malayalam", "Punjabi"],
    microTip: "Join your language community's WhatsApp group first — this is where 80% of peer knowledge-sharing happens. IAGZ (iagz.ch) maintains the most comprehensive directory of Hindi/Gujarati/Marathi groups in ZH.",
    officialLink: { label: "IAGZ Community", url: "https://www.iagz.ch" },
  },
];


const LANGUAGE_COMMUNITIES: Record<LanguagePillar, { association: string; url: string; cities: string } | null> = {
  ALL: null,
  Hindi: { association: "IAGZ — Indian Association Greater Zurich", url: "https://www.iagz.ch", cities: "Zurich, Bern, Basel" },
  Tamil: { association: "TASC — Tamil Association of Switzerland", url: "https://www.tasc.ch", cities: "Zurich, Geneva, Basel" },
  Telugu: { association: "TeluguSwiss Association", url: "https://www.teluguswiss.ch", cities: "Zurich, Basel, Zug" },
  Gujarati: { association: "Gujarati Samaj Switzerland", url: "https://www.iagz.ch", cities: "Zurich, Basel" },
  Marathi: { association: "Marathi Mandal Switzerland", url: "https://www.iagz.ch", cities: "Zurich, Bern" },
  Bengali: { association: "Bengali Association Switzerland", url: "https://www.iagz.ch", cities: "Zurich, Geneva" },
  Kannada: { association: "Kannada Koota Switzerland", url: "https://www.iagz.ch", cities: "Zurich, Basel" },
  Malayalam: { association: "Kerala Association Switzerland", url: "https://www.iagz.ch", cities: "Zurich, Geneva, Basel" },
  Punjabi: { association: "Punjabi Association Switzerland", url: "https://www.iagz.ch", cities: "Zurich" },
};

const STAGE_COLORS: Record<string, string> = {
  "New Arrival (0–12m)": "bg-amber-500/15 text-amber-400",
  "Settled (1–8y)": "bg-blue-500/15 text-blue-400",
  "Parents Visiting": "bg-emerald-500/15 text-emerald-400",
  "Student": "bg-purple-500/15 text-purple-400",
};

export default function CommunityLifeHub() {
  const [selectedCanton, setSelectedCanton] = useState<Canton>("ZH");
  const [selectedLanguage, setSelectedLanguage] = useState<LanguagePillar>("ALL");
  const [selectedStage, setSelectedStage] = useState<LifeStage>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllCantons, setShowAllCantons] = useState(false);

  const commonCantons: Canton[] = ["ZH", "BS", "GE", "VD", "ZG", "BE", "LU", "AG", "SG", "TI"];

  const filteredErrands = useMemo(() => {
    return ERRANDS_DATA.filter((item) => {
      const cantonMatch = item.cantons.includes("ALL") || item.cantons.includes(selectedCanton);
      const stageMatch = selectedStage === "ALL" || item.lifeStages.includes(selectedStage);
      const languageMatch =
        selectedLanguage === "ALL" ||
        !item.languages ||
        item.languages.includes(selectedLanguage);
      const searchMatch =
        !searchQuery ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return cantonMatch && stageMatch && languageMatch && searchMatch;
    });
  }, [selectedCanton, selectedStage, selectedLanguage, searchQuery]);

  const activeCantonInfo = CANTONS.find((c) => c.code === selectedCanton);
  const languageCommunity = selectedLanguage !== "ALL" ? LANGUAGE_COMMUNITIES[selectedLanguage] : null;
  const displayedCantons = showAllCantons ? CANTONS : CANTONS.filter((c) => commonCantons.includes(c.code as Canton));

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">

      {/* ── Header ── */}
      <div className="mb-8 glass rounded-2xl p-6 md:p-8 border border-orange-500/20">
        <span className="inline-block rounded-full bg-orange-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-400 mb-3">
          Swiss-Indian Daily Life Engine
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl mb-2" style={{ color: "var(--text)" }}>
          Your Interactive Life Planner
        </h2>
        <p className="text-sm max-w-3xl mb-5" style={{ color: "var(--text-2)" }}>
          Every errand, deadline, and community resource — filtered to your canton, life stage, and language community. From Day 1 Gemeinde registration to Pillar 3a optimisation.
        </p>
        {/* Search */}
        <div className="relative max-w-md">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--text-3)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search: Krankenkasse, permit, Gymi, taxes…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border pl-9 pr-4 py-2.5 text-sm"
            style={{ background: "var(--surface)", color: "var(--text)", borderColor: "var(--border)" }}
          />
        </div>
      </div>

      {/* ── Filters row ── */}
      <div className="grid gap-5 md:grid-cols-3 mb-8">

        {/* Canton */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-3)" }}>
            1. Your Canton
          </label>
          <div className="flex flex-wrap gap-1.5 mb-1">
            {displayedCantons.map((c) => (
              <button
                key={c.code}
                onClick={() => setSelectedCanton(c.code as Canton)}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                  selectedCanton === c.code ? "bg-orange-500 text-white" : "glass border"
                }`}
                style={selectedCanton === c.code ? {} : { color: "var(--text-2)" }}
                title={c.name}
              >
                {c.code}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowAllCantons(!showAllCantons)}
            className="text-xs text-orange-400 hover:underline mt-1"
          >
            {showAllCantons ? "Show fewer cantons" : `+ Show all 26 cantons`}
          </button>
          {activeCantonInfo && (
            <div className="mt-2 glass rounded-lg p-2.5 text-xs" style={{ color: "var(--text-2)" }}>
              <span className="font-semibold" style={{ color: "var(--text)" }}>{activeCantonInfo.name}</span>
              {" · "}{activeCantonInfo.region === "FR" ? "French-speaking" : activeCantonInfo.region === "IT" ? "Italian-speaking" : "German-speaking"}
              {activeCantonInfo.strassenverkehrsamt && (
                <div className="mt-1">
                  <a href={`https://${activeCantonInfo.strassenverkehrsamt}`} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">
                    Strassenverkehrsamt ↗
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Life Stage */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-3)" }}>
            2. Your Life Stage
          </label>
          <div className="flex flex-col gap-1.5">
            {(["ALL", "New Arrival (0–12m)", "Settled (1–8y)", "Parents Visiting", "Student"] as LifeStage[]).map((s) => (
              <button
                key={s}
                onClick={() => setSelectedStage(s)}
                className={`rounded-lg px-3 py-2 text-xs font-semibold text-left transition-all ${
                  selectedStage === s ? "bg-orange-500 text-white" : "glass border"
                }`}
                style={selectedStage === s ? {} : { color: "var(--text-2)" }}
              >
                {s === "ALL" ? "All Life Stages" : s}
              </button>
            ))}
          </div>
        </div>

        {/* Language Pillar */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-3)" }}>
            3. Language Community
          </label>
          <div className="flex flex-wrap gap-1.5">
            {(["ALL", "Hindi", "Tamil", "Telugu", "Gujarati", "Marathi", "Bengali", "Kannada", "Malayalam", "Punjabi"] as LanguagePillar[]).map((l) => (
              <button
                key={l}
                onClick={() => setSelectedLanguage(l)}
                className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all ${
                  selectedLanguage === l ? "bg-teal-600 text-white" : "glass border"
                }`}
                style={selectedLanguage === l ? {} : { color: "var(--text-2)" }}
              >
                {l === "ALL" ? "All" : l}
              </button>
            ))}
          </div>
          {languageCommunity && (
            <div className="mt-2 glass rounded-lg p-2.5 text-xs" style={{ color: "var(--text-2)" }}>
              <div className="font-semibold mb-0.5" style={{ color: "var(--text)" }}>{languageCommunity.association}</div>
              <div className="mb-1">{languageCommunity.cities}</div>
              <a href={languageCommunity.url} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                Visit website ↗
              </a>
            </div>
          )}
        </div>
      </div>

      {/* ── Results count ── */}
      <p className="text-sm mb-5" style={{ color: "var(--text-3)" }}>
        Showing <strong style={{ color: "var(--text)" }}>{filteredErrands.length}</strong> guide{filteredErrands.length !== 1 ? "s" : ""}
        {selectedCanton !== "ALL" && <span> · Canton <strong style={{ color: "var(--text)" }}>{selectedCanton}</strong></span>}
        {selectedStage !== "ALL" && <span> · <strong style={{ color: "var(--text)" }}>{selectedStage}</strong></span>}
        {selectedLanguage !== "ALL" && <span> · <strong style={{ color: "var(--text)" }}>{selectedLanguage}</strong></span>}
      </p>

      {/* ── Errand cards ── */}
      <div className="grid gap-4 md:grid-cols-2 mb-10">
        {filteredErrands.length === 0 && (
          <div className="col-span-2 glass rounded-xl p-8 text-center" style={{ color: "var(--text-2)" }}>
            No guides match these filters. Try &quot;All Life Stages&quot; or a different canton.
          </div>
        )}
        {filteredErrands.map((item) => (
          <div key={item.id} className="glass rounded-xl p-5 card-hover">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl flex-shrink-0">{item.emoji}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm leading-tight mb-1.5" style={{ color: "var(--text)" }}>
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-1 mb-2">
                  {item.lifeStages.map((s) => (
                    <span key={s} className={`text-xs rounded-full px-2 py-0.5 font-semibold ${STAGE_COLORS[s] ?? ""}`}>
                      {s}
                    </span>
                  ))}
                  {item.deadline && (
                    <span className="text-xs rounded-full px-2 py-0.5 font-semibold bg-red-500/15 text-red-400">
                      ⏰ {item.deadline}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <p className="text-xs mb-3 leading-relaxed" style={{ color: "var(--text-2)" }}>{item.summary}</p>
            {item.microTip && (
              <div className="rounded-lg border border-orange-500/20 bg-orange-500/5 p-2.5 text-xs mb-3">
                <span className="font-bold text-orange-400">💡 Community tip: </span>
                <span style={{ color: "var(--text-2)" }}>{item.microTip}</span>
              </div>
            )}
            {item.officialLink && (
              <a
                href={item.officialLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 font-semibold"
              >
                🔗 {item.officialLink.label} ↗
              </a>
            )}
          </div>
        ))}
      </div>

      {/* ── Supermarket Decoder link ── */}
      <a
        href="/food/supermarket"
        className="glass rounded-2xl border border-teal-500/20 flex items-center justify-between p-5 card-hover group"
        style={{ textDecoration: "none" }}
      >
        <div>
          <h3 className="font-bold" style={{ color: "var(--text)" }}>🛒 Swiss Supermarket Decoder</h3>
          <p className="text-xs mt-0.5" style={{ color: "var(--text-2)" }}>
            Full guide — dairy, flour, spices, vegetables, label decoder, loyalty cards & shopping hacks
          </p>
        </div>
        <span className="text-sm font-semibold text-teal-400 opacity-70 group-hover:opacity-100 transition-opacity shrink-0 ml-4">
          Open guide →
        </span>
      </a>
    </section>
  );
}
