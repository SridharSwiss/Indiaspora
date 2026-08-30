import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import SectionTabs from "@/components/ui/SectionTabs";

export const metadata: Metadata = {
  title: "Indian Associations & Clubs in Switzerland",
  description: "Complete directory of Indian associations in Switzerland — city associations, regional language groups, professional networks, student bodies, cultural organisations and civil society.",
  openGraph: {
    title: "Indian Associations & Clubs in Switzerland | IndiaSwiss",
    description: "Complete directory of Indian associations in Switzerland — city associations, regional language groups, professional networks, student bodies, cultural organisations and civil society.",
  },
};

type Org = { name: string; url: string | null; city: string; desc: string };

// ── Umbrella & city-level associations ───────────────────────────────────────
// Sources: Embassy of India Bern listing (indembassybern.gov.in/page/indian-associations-in-switzerland-and-liechtenstein/) Aug 2026
const umbrella: Org[] = [
  { name: "IAGZ – Indian Association of Greater Zurich", url: "https://iagz.ch", city: "Zurich", desc: "Founded 2010. Pan-Indian community organisation in Greater Zurich. Holi, Dandiya, Diwali Gala, Hindi School and 70+ member families. Non-political, non-communal." },
  { name: "Indian Association Berne (IAB)", url: "https://www.india-bern.ch", city: "Bern", desc: "Founded 15 June 1972. One of Switzerland's oldest Indian associations. Cultural, non-profit, non-political. 120+ members; Ambassador of India is patron." },
  { name: "Bharatiya Association Berne (BAB)", url: "https://www.india-bab.ch", city: "Bern", desc: "Founded July 1996. Promotes companionship and goodwill among members and fosters contact with Swiss institutions and culture." },
  { name: "Indian Association Geneva (IAG)", url: "https://indianassociationgeneva.com", city: "Geneva", desc: "Founded 1947 — one of the world's oldest continuously active Indian associations. 500+ members in the Lake Geneva region. Full festival calendar including Diwali, Holi and Independence Day." },
  { name: "Indian Association Lausanne (IAL)", url: "https://www.ialausanne.com/", city: "Lausanne", desc: "Founded 1995. Non-profit socio-cultural organisation for Indians in Lausanne and French-speaking cantons (Romandy). Diwali, Holi, Independence Day and integration events." },
  { name: "Indian Association Basel (IA Basel)", url: "https://iabasel.com/", city: "Basel", desc: "Non-profit organisation for the Indian community in Basel. Cooperates with associations in Bern, Wettingen, Baden and Zurich. Organises the Independence Cup cricket tournament and community events." },
  { name: "Indian Cultural Association of Switzerland (ICAS)", url: "https://icas-online.com", city: "Basel", desc: "Founded 2005. Provides a platform for the Indian community in the Basel area to organise events and meet on festive occasions." },
  { name: "Swiss Bharathiya Association Basel (SBA)", url: "https://sbabasel.ch/", city: "Basel", desc: "Non-profit celebrating and promoting Indian cultural heritage through cultural events, yoga, traditional sports, classes and seminars. Organises Diwali and sports days." },
  { name: "Association of the Friends of India Basel (AFIB)", url: "http://www.afib.ch/", city: "Basel", desc: "Founded early 1960s. One of the oldest India-Switzerland cultural associations, founded jointly by Swiss and Indian nationals to promote intercultural relations. Bilingual German/English." },
  { name: "Indian Association Baden (IAB Baden)", url: "https://iabaden.ch/", city: "Baden, Aargau", desc: "Founded 1969. One of Switzerland's oldest Indian associations. Year-round community events promoting Indian-Swiss cultural understanding in the Aargau region." },
  { name: "Indian Association Wettingen (IAW)", url: "https://www.iawettingen.ch/", city: "Wettingen, Aargau", desc: "Non-profit for the Indian community in the Wettingen/Baden corridor. Cultural, sports, leisure and charitable events." },
  { name: "Swiss Indian Verein Rhine Valley (SIVRV)", url: "https://sivrv.ch/", city: "Buchs, St. Gallen", desc: "Community association celebrating Indian culture in eastern Switzerland (Rhine Valley region bordering Liechtenstein). Registered under Swiss Civil Code, HQ Buchs SG." },
  { name: "Association of Indian Sports & Culture Zug (AISCZ)", url: "https://www.aiscz.ch/", city: "Zug", desc: "Social platform for Indians, South Asians and Swiss in the greater Zug region. Sports and cultural events promoting Indian values and culture." },
  { name: "India Club Vaduz", url: "https://www.indiaclub.li/", city: "Vaduz, Liechtenstein", desc: "Not-for-profit in Vaduz (under Embassy of India Bern jurisdiction). Brings India's diverse cultures together with Liechtenstein and the Rhine Valley. Has organised India Weeks in Liechtenstein." },
];

// ── Regional & language communities ──────────────────────────────────────────
// Sub-grouped by language community
const marathi: Org[] = [
  { name: "Bruhan Maharashtra Mandal Switzerland (BMMS)", url: "https://bruhan-mms.org", city: "Nationwide", desc: "Non-profit, secular forum for the Marathi-speaking community in Switzerland. Promotes Marathi language, literature, culture and Ganesh Chaturthi celebrations." },
];

const gujarati: Org[] = [
  { name: "Gujarati Samaj Switzerland", url: "https://www.gujaratisamaj.ch", city: "Nationwide", desc: "Navratri Garba, Gujarati language classes and cultural events across Switzerland." },
  { name: "Ras Garba Association Switzerland", url: null, city: "Baden / Windisch, Aargau", desc: "Organises the annual Ras Garba / Navratri celebration in Baden. 2023 and 2025 events held at Sportausbildungszentrum Mülimatt, Windisch. Contact: rasgarbabaden@gmail.com. Listed by Embassy of India Bern." },
];

const tamil: Org[] = [
  { name: "Swiss Tamil Sangam", url: "https://swisstamilsangam.com", city: "Nationwide", desc: "Cultural association for the Tamil-speaking community in Switzerland. One of the largest diaspora language groups in the country." },
  { name: "Switzerland Tamil Sangam", url: "https://www.switzerlandtamilsangam.org/", city: "Nationwide", desc: "Established by Tamil enthusiasts to promote Tamil language and culture across Switzerland. Distinct from the Swiss Tamil Sangam." },
  { name: "Swiss Tamil Professionals Association (STPA)", url: "https://www.tamilprofessionals.ch", city: "Zurich", desc: "Network for Tamil professionals — collaboration, innovation and cross-industry mentoring." },
  { name: "Basel Tamil Sangam", url: "https://baseltamilsangam.com/", city: "Basel", desc: "Cultural organisation connecting Tamil families, students and professionals in Basel through events and learning programmes." },
  { name: "Geneva Tamil Sangam", url: null, city: "Geneva", desc: "Founded 20 November 2017 (Rue de Cornavin 5, Geneva). Registered under Swiss Civil Code. Cultivates, promotes and transmits Tamil language and cultural heritage within Geneva's Tamil population." },
];

const telugu: Org[] = [
  { name: "Telugu Association of Switzerland (TeluguSwiss / TAS)", url: "https://teluguswiss.org", city: "Nationwide", desc: "Ugadi and other Telugu cultural events and community networking. The affiliated Swiss Telugu NRI Forum (STNRI) runs Mana Badi, a Telugu language programme for children." },
  { name: "Swiss Telugu NRI Forum (STNRI)", url: "http://www.stnri.org/", city: "Opfikon / Zurich", desc: "Registered with the City of Opfikon. Non-profit encouraging Telugu-speaking people in Switzerland to participate in community progress. Runs Mana Badi Telugu language classes and organises the STNRI Cricket League, Ganesh Mahotsav and Sankranthi festivals." },
];

const malayalam: Org[] = [
  { name: "World Malayalee Council Switzerland (WMC Swiss)", url: "https://wmcswiss.com/", city: "Seuzach / Rümlang (Zurich)", desc: "Founded April 1995. Connects Malayalees in Switzerland and neighbouring regions to foster social and cultural bonds. Part of the global World Malayalee Council network." },
  { name: "Keli Swiss (KELI)", url: "https://www.keliswiss.org/", city: "Schlieren, Zurich", desc: "Founded 24 October 1998 (inaugurated by the Permanent Mission of India). Non-profit, non-sectarian Indo-Swiss Socio-Cultural Organisation. Renowned for the annual Kalamela arts event and social outreach." },
  { name: "Swiss Malayalee Association Basel (SMA Basel)", url: "https://www.smabasel.ch/", city: "Basel", desc: "Non-profit cultural organisation for people from Kerala in Switzerland, based in Basel. Known for its annual Ponnonam / Onam celebration with classical music, dance and folk art." },
  { name: "Bharatheeya Kalalayam Switzerland", url: "https://bharatheeyakalalayam.org", city: "Zurich", desc: "Kerala cultural arts organisation in Zurich. Organises Onam, Vishu and Malayalam-language cultural events." },
  { name: "Changathi Kootam", url: null, city: "Zurich", desc: "Kerala community cultural group in the Zurich area. Organises Onam and other Kerala festivals. No verified public website; consistently referenced alongside Keliswiss and Keralam." },
  { name: "Kerala Samajam Bern", url: null, city: "Bern", desc: "Registered association organising Onam and other Kerala cultural events in the Bern area. Listed by Embassy of India Bern." },
];

const bengali: Org[] = [
  { name: "SwissPuja", url: "http://www.swisspuja.org/", city: "Baden / Zurich area", desc: "Founded 2003 by Bengalis in Switzerland. Non-profit promoting Indian culture and values. Organises Durga Puja, Bijaya Sammelani and publishes the multilingual Swisspuja Patrika annually." },
  { name: "PrangaN@Swiss", url: "https://pranganswiss.org", city: "Lausanne", desc: "First women-led non-profit of the Bengali diaspora in Switzerland. Organised around a 'Taste of Bengal' ethos. Organises Vasant Utsav and Sarbojanin Durga Puja." },
  { name: "Bengali Cultural Society Switzerland", url: null, city: "Zurich / Geneva", desc: "Durga Puja, Rabindra Jayanti and Bengali cultural events. No verified standalone public website." },
];

const kannada: Org[] = [
  { name: "Kannada Koota Switzerland", url: null, city: "Zurich", desc: "Kannada Rajyotsava and community events for Kannadigas in Switzerland. No verified standalone public website; referenced by Embassy of India Bern." },
];

// ── Professional & business networks ─────────────────────────────────────────
const professional: Org[] = [
  { name: "SICC – Swiss-Indian Chamber of Commerce", url: "https://sicc.ch", city: "Zurich", desc: "Founded 1985. Bi-national non-profit with 400+ Swiss and Indian members. Offices in Zurich, Mumbai, New Delhi, Bengaluru and Pune. Hosts 50+ events annually." },
  { name: "TiE Zurich (The Indus Entrepreneurs)", url: "https://tie.org", city: "Zurich", desc: "Global entrepreneurship network founded 1992 in Silicon Valley. Swiss chapter fosters mentoring, networking and education for entrepreneurs with Indus-region roots." },
  { name: "Swiss Tamil Professionals Association (STPA)", url: "https://www.tamilprofessionals.ch", city: "Zurich", desc: "Network for Tamil professionals — collaboration, innovation and cross-industry mentoring. Cross-listed under Tamil associations." },
  { name: "Swiss India Professional Network (SIPN)", url: "https://sipn.ch/", city: "Geneva / Basel / Zurich", desc: "Recently launched registered non-profit (Canton of Geneva). Brings together Indian-origin professionals, entrepreneurs, researchers and business leaders across sectors. Launch event held in Basel with participation of the Consul General." },
];

// ── Student associations ──────────────────────────────────────────────────────
const students: Org[] = [
  { name: "InSAZ – Indian Students Association Zurich", url: "https://blogs.ethz.ch/insaz/", city: "Zurich (ETH / UZH)", desc: "Voluntary student association at ETH Zurich and UZH. Mentorship, airport pickup for newcomers, Diwali, Holi, industrial talks, hikes and cricket screenings." },
  { name: "YUVA – Indians Association at EPFL / UNIL", url: "https://www.epfl.ch/campus/associations/yuva/", city: "Lausanne", desc: "Public, non-profit, non-political association for Indian and Indian-origin students and staff at EPFL and UNIL. Known for the annual Yuvaali: Festival of Lights Diwali event (250+ guests)." },
];

// ── Cultural & arts organisations ────────────────────────────────────────────
const cultural: Org[] = [
  { name: "Swiss Indian Fine Arts Association (SIFAA)", url: "https://www.sifaa.ch/", city: "Zurich", desc: "Founded 25 November 2021. Non-profit, non-religious association promoting Swiss and Indian arts through classical music, dance and arts programmes. Organises major events including Shri Ram Mahotsav. Listed by Embassy of India Bern." },
  { name: "Hindu Swayamsevak Sangh (HSS) Switzerland", url: "https://www.hssworld.org", city: "Nationwide", desc: "Hindu cultural values, weekly shakha, Sanskrit classes, seva projects and youth development programmes across Switzerland." },
  { name: "Art of Living Switzerland", url: "https://www.artofliving.org/ch-en", city: "Nationwide", desc: "Centres in Zurich, Geneva, Basel, Bern, Lucerne, Lugano and Neuchâtel. Sudarshan Kriya, meditation, yoga and wellness programmes by Sri Sri Ravi Shankar." },
  { name: "Chinmaya Mission Switzerland", url: "https://chinmayamission.com", city: "Zurich", desc: "Vedanta classes, Gita study groups, Bala Vihar for children and spiritual programmes. Part of Chinmaya Mission Europe." },
  { name: "Swiss Vedic Bhakti Foundation (SVBF)", url: "https://swissvbf.com/", city: "Glattbrugg, Zurich", desc: "Non-profit encouraging Vedic, Bhakti and devotional activities following Sanathana Dharma. Also supports cultural, charitable, educational and social activities. Listed by Embassy of India Bern." },
  { name: "Centre Védantique Genève (Ramakrishna Mission)", url: "https://geneva.rkmm.org/", city: "Geneva", desc: "Branch of the Ramakrishna Mission, Belur Math, established 1962. One of the oldest Indian spiritual organisations in Switzerland. Daily worship, scriptural classes, inter-religious meets and festival celebrations." },
  { name: "Schweizerischer Dachverband für Hinduismus (SDH)", url: "https://www.hindus.ch/en", city: "Winterthur (national)", desc: "Founded 2017. Umbrella body representing approximately 60,000 Hindus in Switzerland across communities and traditions. Member of the Hindu Forum of Europe. Represents Swiss Hindus in inter-religious dialogue." },
];

// ── Civil society & binational platforms ─────────────────────────────────────
const civil: Org[] = [
  { name: "Be Friends Switzerland (BFS)", url: "https://befriends.ch/", city: "Nationwide", desc: "Binational organisation strengthening civil society bridges between India and Switzerland. Cultivates cultural interaction and contributes to community resilience. Listed by Embassy of India Bern." },
  { name: "Indo-Swiss Center", url: "https://www.indo-swiss.center/", city: "Adliswil, Zurich", desc: "Builds India-Switzerland partnerships with government, business and non-profit organisations. Promotes collaboration in trade, technology, tourism, education, culture and development. Listed by Embassy of India Bern." },
  { name: "Namaste Switzerland", url: "https://namasteswitzerland.ch", city: "Nationwide (online)", desc: "Online infotainment magazine founded on International Women's Day 2017 by four Indian women co-founders. Mission: Connect. Inform. Integrate. Listed on the Embassy of India Berne website." },
  { name: "SICC – Swiss-Indian Chamber of Commerce", url: "https://sicc.ch", city: "Zurich", desc: "Also operates as a binational civil society platform — see Professional Networks." },
];

// ── Shared card component ─────────────────────────────────────────────────────
function OrgCard({ org }: { org: Org }) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-sm leading-tight group-hover:text-orange-400 transition-colors" style={{ color: "var(--text)" }}>{org.name}</h3>
        <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/20">{org.city}</span>
      </div>
      <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>{org.desc}</p>
    </>
  );
  return org.url ? (
    <a href={org.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover block group">{inner}</a>
  ) : (
    <div className="glass rounded-xl p-5">{inner}</div>
  );
}

function Section({ title, desc, items, cols = 3 }: { title: string; desc: string; items: Org[]; cols?: number }) {
  return (
    <div className="mb-10">
      <h3 className="text-base font-bold mb-1" style={{ color: "var(--text)" }}>{title}</h3>
      <p className="text-xs mb-4" style={{ color: "var(--text-2)" }}>{desc}</p>
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols === 3 ? "lg:grid-cols-3" : ""} gap-4`}>
        {items.map((o) => <OrgCard key={o.name} org={o} />)}
      </div>
    </div>
  );
}

export default function AssociationsPage() {
  return (
    <div>
      <PageHeader
        title="Indian Associations & Clubs in Switzerland"
        subtitle="The most complete directory of Indian associations in Switzerland — from city-level pan-Indian organisations to language communities, professional networks, student bodies, arts groups and civil society."
        badge="🏛️ 55+ Associations"
        breadcrumbs={[{ label: "Community", href: "/community" }, { label: "Associations & Clubs" }]}
      />

      <SectionTabs tabs={[
        { id: "umbrella", label: "City Associations" },
        { id: "regional", label: "Regional & Language" },
        { id: "professional", label: "Professional" },
        { id: "students", label: "Students" },
        { id: "cultural", label: "Cultural & Spiritual" },
        { id: "civil", label: "Civil Society" },
      ]} accentColor="var(--in)" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Umbrella */}
        <section id="umbrella" className="mb-14">
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>City & Pan-Swiss Associations</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>General Indian associations serving entire cities or cantons — the first stop for any newcomer</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {umbrella.map((o) => <OrgCard key={o.name} org={o} />)}
          </div>
        </section>

        {/* Regional */}
        <section id="regional" className="mb-14">
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Regional & Language Communities</h2>
          <p className="text-sm mb-8" style={{ color: "var(--text-2)" }}>Associations organised by language, state of origin or regional identity</p>

          <Section title="Marathi" desc="Maharashtra-origin community" items={marathi} />
          <Section title="Gujarati" desc="Gujarati-speaking community and Navratri celebrations" items={gujarati} />
          <Section title="Tamil" desc="Tamil-speaking community across Switzerland" items={tamil} />
          <Section title="Telugu" desc="Telugu-speaking community — TAS and Swiss Telugu NRI Forum" items={telugu} />
          <Section title="Malayalam / Kerala" desc="Kerala diaspora — city-level associations and arts organisations" items={malayalam} />
          <Section title="Bengali" desc="Bengali cultural community — Durga Puja and arts" items={bengali} />
          <Section title="Kannada" desc="Kannada-speaking community" items={kannada} />
        </section>

        {/* Professional */}
        <section id="professional" className="mb-14">
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Professional & Business Networks</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Career, entrepreneurship, trade and cross-sector professional networks</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {professional.map((o) => <OrgCard key={o.name} org={o} />)}
          </div>
        </section>

        {/* Students */}
        <section id="students" className="mb-14">
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Student Associations</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Indian student organisations at Swiss universities</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {students.map((o) => <OrgCard key={o.name} org={o} />)}
          </div>
          <p className="text-xs mt-4" style={{ color: "var(--text-3)" }}>
            For a full guide to Indian students in Switzerland including scholarships and visa information, see the{" "}
            <a href="/community/students" className="text-orange-400 hover:text-orange-300">Students page</a>.
          </p>
        </section>

        {/* Cultural */}
        <section id="cultural" className="mb-14">
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Cultural, Arts & Spiritual Organisations</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Hindu culture, classical arts, yoga and spiritual community organisations</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cultural.map((o) => <OrgCard key={o.name} org={o} />)}
          </div>
          <p className="text-xs mt-4" style={{ color: "var(--text-3)" }}>
            For temples, ISKCON, Sathya Sai, and yoga centres see the{" "}
            <a href="/community/spiritual" className="text-orange-400 hover:text-orange-300">Temples & Spiritual page</a>.
          </p>
        </section>

        {/* Civil Society */}
        <section id="civil" className="mb-14">
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Civil Society & Binational Platforms</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Organisations building India–Switzerland bridges across trade, culture and community</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {civil.filter(o => o.name !== "SICC – Swiss-Indian Chamber of Commerce").map((o) => <OrgCard key={o.name} org={o} />)}
          </div>
        </section>

        <div className="glass rounded-2xl p-6 border border-orange-500/20">
          <p className="text-sm" style={{ color: "var(--text-2)" }}>
            <span className="text-orange-400 font-semibold">Source:</span> This directory combines the{" "}
            <a href="https://www.indembassybern.gov.in/page/indian-associations-in-switzerland-and-liechtenstein/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Embassy of India Bern's official registered list</a>{" "}
            with independently verified websites. Know of an association not listed here?{" "}
            <a href="/events/submit" className="text-orange-400 hover:text-orange-300">Let us know</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
