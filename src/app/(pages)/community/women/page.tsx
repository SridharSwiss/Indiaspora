import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import SectionTabs from "@/components/ui/SectionTabs";

export const metadata: Metadata = {
  title: "Women's Network in Switzerland",
  description: "Professional networks, expat communities, government equality offices, NGO support, entrepreneurship, mentorship, and women in tech — verified organisations across Switzerland.",
  openGraph: {
    title: "Women's Network in Switzerland | IndiaSwiss",
    description: "Professional networks, expat communities, government equality offices, NGO support, entrepreneurship, mentorship, and women in tech — verified organisations across Switzerland.",
  },
};

type Org = { name: string; url: string; city: string; desc: string };

// Professional & career networks — verified Aug 2026
const professional: Org[] = [
  { name: "BPW Switzerland — Business and Professional Women", url: "https://bpw.ch/en/Ueber-uns", city: "Nationwide", desc: "Switzerland's chapter of BPW International, the world's largest women's network. ~1,810 members across 35 clubs in all linguistic regions. Focuses on economic and political participation through networking, lobbying, mentoring, and UN/EU committee engagement." },
  { name: "Professional Women's Group Zürich (PWG)", url: "https://www.pwg-zh.com", city: "Zurich", desc: "Career network for internationally minded women founded in 1983. Monthly evening events, mentorship, and company visits for professionals across sectors." },
  { name: "PWN Geneva-Lausanne (Professional Women's Network)", url: "https://www.pwnglobal.net/c/pwn-geneva-lausanne", city: "Geneva / Lausanne", desc: "Part of a global federation promoting professional advancement of women across all sectors. Events, mentoring programmes, and an online member platform." },
  { name: "LEAD Network Switzerland", url: "https://theleadnetwork.net/chapters/switzerland/", city: "Nationwide", desc: "Swiss chapter of the European network advancing diversity in FMCG and retail. Networking breakfasts, mentoring, and coaching focused on career advancement." },
  { name: "Swiss Association of University Women (SVA)", url: "https://www.graduatewomen.ch/", city: "Nationwide", desc: "Primary national network for women graduates. Member of Graduate Women International (GWI) and Alliance F since 1949. Advocates for women in academia, research, and professional life." },
  { name: "alliance F — Swiss Women's Organisations", url: "https://de.alliancef.ch/", city: "Nationwide", desc: "Founded 1900 — Switzerland's oldest and largest non-partisan umbrella body, with 100+ member associations. Advocates at the political level for gender equality in business, family, and society. Celebrated its 125th anniversary in 2025." },
];

// Expat & international networks — verified Aug 2026
const expat: Org[] = [
  { name: "ZIWA — Zurich International Women's Association", url: "https://www.ziwa.com/", city: "Zurich", desc: "Founded 1985. Over 700 members from nearly 70 nationalities. Approximately 150 activities per year across 55+ interest groups spanning culture, sport, social, and community volunteering." },
  { name: "ZIWC — Zug International Women's Club", url: "https://www.ziwc.ch/", city: "Zug", desc: "Founded 1967. 500+ members from nearly 50 nationalities. Regular activities, seasonal events, monthly coffee mornings, and charity projects." },
  { name: "IDCN — International Dual Career Network", url: "https://idcn.info", city: "Zurich / Basel", desc: "Active in the Zurich region since 2012. Networking and job-market re-entry support for accompanying spouses and partners — a common first stop for women arriving on a dependant permit." },
  { name: "CAGI — Centre d'Accueil de la Genève Internationale", url: "https://www.cagi.ch/en/practical-infos/international-networking/", city: "Geneva", desc: "The reception and information hub for Geneva's international community. Provides networking resources and connections for women in international organisations and the diplomatic community." },
];

// Entrepreneurship networks — verified Aug 2026
const entrepreneurship: Org[] = [
  { name: "SwissFintech Ladies", url: "https://swissfintechladies.com/", city: "Nationwide", desc: "Winner of the Global Award as Women's Financial Network of the Year 2024/2025. Promotes women as employees, entrepreneurs, and investors in Swiss fintech and finance. Active community with regular events." },
  { name: "Female Founders Switzerland", url: "https://female-founders.ch/ecosystem/", city: "Nationwide", desc: "Platform mapping and supporting the Swiss ecosystem for female founders. Directory of founders, investors, and organisations backing women entrepreneurs." },
  { name: "Swiss Startup Association — Female Founders", url: "https://swissstartupassociation.ch/topics/female/", city: "Nationwide", desc: "Dedicated focus area within the Swiss Startup Association. Partners on the State of Gender Diversity in European Venture report and runs initiatives to close the funding gap for women founders." },
  { name: "Swiss Government SME Portal — Women Entrepreneurs", url: "https://www.kmu.admin.ch/kmu/en/home/concrete-know-how/useful-addresses-and-links/for-women.html", city: "Nationwide", desc: "The official federal SME portal's curated directory of contacts, funding resources, and networks for women entrepreneurs — a useful official entry point." },
];

// Mentorship & leadership — verified Aug 2026
const mentorship: Org[] = [
  { name: "Lean In Network Switzerland", url: "https://www.leaninswitzerland.org/", city: "Bern / Lucerne / Zurich", desc: "Founded 2015. Official network in the global LeanIn.Org programme. ~1,500 members. Runs Lean In Circles — small peer groups that meet regularly — alongside events and leadership programming." },
  { name: "WIIS Switzerland — Women in International Security", url: "https://www.wiis.ch/mentoring-program", city: "Geneva", desc: "Mentoring programme connecting young women beginning careers in international security with established professionals. Launched its first cohort in 2023." },
  { name: "Amali Switzerland", url: "https://amaliprogram.com/", city: "Nationwide", desc: "Mentorship network and leadership programme for women. Runs coaching and peer learning with operations rooted in Switzerland, with particular focus on diaspora communities." },
];

// Women in tech & STEM — verified Aug 2026
const tech: Org[] = [
  { name: "Women in Digital Switzerland (WDS)", url: "https://www.womenindigitalswitzerland.com/", city: "Nationwide", desc: "Community of 1,500+ members advocating for diversity in Switzerland's digital economy. Mentoring programmes, peer networks, expert-led events, and skills development for women in digital roles." },
  { name: "Women in Tech Switzerland (Global Chapter)", url: "https://women-in-tech.org/ch/", city: "Nationwide", desc: "Official Swiss chapter of Women in Tech Global (HQ: Paris). Dedicated to closing the gender gap in STEAM sectors. Founded in Switzerland in 2021 with corporate partners." },
  { name: "Girls in Tech Switzerland", url: "https://switzerland.girlsintech.org/", city: "Nationwide", desc: "Swiss chapter of the global Girls in Tech organisation, originally launched in Geneva. Shares stories of inspiring women in tech and partners with employers on attracting and retaining women in technology." },
  { name: "WiDS Zürich — Women in Data Science", url: "https://www.wids.ch/mentorship-session-2025", city: "Zurich", desc: "Zurich chapter of the global WiDS initiative. Mentorship sessions and events connecting women working in data science, machine learning, and AI." },
];

// Official government bodies — verified Aug 2026
const government: Org[] = [
  { name: "Federal Office for Gender Equality (FOGE / EBG)", url: "https://www.ebg.admin.ch/ebg/en/home.html", city: "Federal", desc: "The Swiss federal authority on gender equality — legislation, anti-discrimination, pay equity, and gender policy across all sectors." },
  { name: "Gleichstellung — Canton of Zurich", url: "https://www.zh.ch/de/wirtschaft-arbeit/gleichstellung.html", city: "Zurich", desc: "Cantonal equality office promoting implementation of gender equality across all areas of life in Canton Zurich." },
  { name: "Fachstelle für Gleichstellung — City of Bern", url: "https://www.bern.ch/en/politics-and-administration/equality", city: "Bern", desc: "The City of Bern's official equality office, addressing gender equality across municipal administration and policy." },
  { name: "Fondation pour l'Egalité de Genre", url: "https://fondationegalitedegenre.ch/", city: "Geneva", desc: "Geneva-based foundation dedicated to advancing gender equality through advocacy, awareness, and research." },
  { name: "egalite.ch", url: "https://egalite.ch/portrait/en-savoir-plus/", city: "Nationwide", desc: "Swiss information portal on gender equality. Resources on legal rights, workplace equality, and gender policy — available in German, French, and Italian." },
];

// NGO support — verified Aug 2026
const ngo: Org[] = [
  { name: "FIZ — Counselling Centre for Women & Migration", url: "https://www.fiz-info.ch/en/Welcome", city: "Zurich", desc: "Advice, legal assistance, and emergency support for migrant women in Switzerland. Long-established specialist centre covering trafficking, domestic violence, and social integration." },
  { name: "Brava NGO", url: "https://www.brava-ngo.ch/en/about-us/organisation", city: "Nationwide", desc: "Feminist NGO supporting women victims of violence. Antiracist, intersectional, and anti-sexist counselling for women and their families." },
  { name: "Surgir Foundation", url: "https://www.surgir.ch/", city: "Lausanne", desc: "Advocates for women's rights and has established a volunteer network to support migrant women affected by violence, FGM, and forced marriage. Also runs international programmes." },
  { name: "Frieda", url: "https://www.frieda.org/en/countries/schweiz", city: "Nationwide", desc: "Implements participation projects with migrant women, coordinates the '16 Days of Activism Against Gender Violence' campaign in Switzerland, and engages in peace and migration policy advocacy." },
  { name: "Weisser Ring Switzerland", url: "https://www.weisser-ring.ch", city: "Nationwide", desc: "Victim support organisation providing assistance after violence, crime, or domestic abuse — practical, legal, and psychological support." },
  { name: "HEKS — Aid for Refugees and the Poor", url: "https://www.heks.ch/en", city: "Nationwide", desc: "Swiss relief organisation providing counselling and integration support for migrants and refugees, including women navigating the Swiss system for the first time." },
];

function OrgCard({ org, accent }: { org: Org; accent: string }) {
  return (
    <a
      href={org.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass rounded-xl p-5 card-hover block group"
      style={{ textDecoration: "none", ["--card-accent" as string]: accent }}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="org-card-title font-semibold text-sm leading-tight" style={{ color: "var(--text)" }}>{org.name}</h3>
        <span className="shrink-0 text-xs px-2 py-0.5 rounded-full whitespace-nowrap" style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}30` }}>{org.city}</span>
      </div>
      <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>{org.desc}</p>
      <style>{`.card-hover:hover .org-card-title { color: var(--card-accent) !important; }`}</style>
    </a>
  );
}

function Section({ id, title, desc, items, accent, cols = 2 }: {
  id: string; title: string; desc: string; items: Org[]; accent: string; cols?: number;
}) {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>{title}</h2>
      <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>{desc}</p>
      <div className={`grid grid-cols-1 ${cols === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"} gap-4`}>
        {items.map((o) => <OrgCard key={o.name} org={o} accent={accent} />)}
      </div>
    </section>
  );
}

export default function WomenPage() {
  return (
    <div>
      <PageHeader
        title="Women's Network in Switzerland"
        subtitle="Professional networks, expat communities, mentorship, entrepreneurship, tech, and official support — verified organisations across Switzerland."
        badge="👩‍💼 Women's Network"
        breadcrumbs={[{ label: "Community", href: "/community" }, { label: "Women's Network" }]}
      />

      <SectionTabs tabs={[
        { id: "professional", label: "Professional" },
        { id: "expat", label: "Expat & International" },
        { id: "entrepreneurship", label: "Entrepreneurship" },
        { id: "mentorship", label: "Mentorship" },
        { id: "tech", label: "Women in Tech" },
        { id: "government", label: "Government" },
        { id: "ngo", label: "NGO Support" },
      ]} accentColor="#e11d48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Section id="professional" title="Professional & Career Networks" desc="National and city-level career networks for women across sectors" items={professional} accent="#e11d48" cols={2} />
        <Section id="expat" title="Expat & International Women's Networks" desc="Communities for internationally mobile women and accompanying partners" items={expat} accent="#db2777" cols={2} />
        <Section id="entrepreneurship" title="Entrepreneurship & Business" desc="Networks and resources for women building and scaling businesses in Switzerland" items={entrepreneurship} accent="#9333ea" cols={2} />
        <Section id="mentorship" title="Mentorship & Leadership" desc="Structured mentoring programmes and leadership development for women" items={mentorship} accent="#7c3aed" cols={3} />
        <Section id="tech" title="Women in Tech & STEM" desc="Communities and programmes for women working in technology, data, and digital roles" items={tech} accent="#0891b2" cols={2} />
        <Section id="government" title="Government & Equality Offices" desc="Official federal and cantonal bodies responsible for gender equality in Switzerland" items={government} accent="#059669" cols={2} />
        <Section id="ngo" title="NGO & Support Organisations" desc="Counselling, legal aid, and integration support for women — especially migrants and newcomers" items={ngo} accent="#ea580c" cols={3} />

        <div className="glass rounded-2xl p-6 border border-rose-500/20 mt-4">
          <h2 className="text-lg font-bold mb-4" style={{ color: "var(--text)" }}>Emergency & Helpline Numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm" style={{ color: "var(--text-2)" }}>
            <div className="space-y-2">
              <p>Police (all cantons): <strong style={{ color: "var(--text)" }}>117</strong></p>
              <p>Ambulance: <strong style={{ color: "var(--text)" }}>144</strong></p>
              <p>Domestic violence helpline: <strong style={{ color: "var(--text)" }}>0800 060 060</strong></p>
              <p>Dargebotene Hand (emotional support): <strong style={{ color: "var(--text)" }}>143</strong></p>
              <p>Victim support (Opferhilfe): <strong style={{ color: "var(--text)" }}>0800 040 040</strong></p>
            </div>
            <div>
              <p className="mb-1">Embassy of India, Bern:</p>
              <a href="https://www.indembassybern.gov.in" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">indembassybern.gov.in</a>
              <p className="mt-3 mb-1">Consulate General of India, Geneva:</p>
              <a href="https://www.cgigeneva.gov.in" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">cgigeneva.gov.in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
