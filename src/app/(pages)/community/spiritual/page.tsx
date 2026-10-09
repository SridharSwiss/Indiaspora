import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Hindu Temples, Pandits & Spiritual Centres in Switzerland",
  description: "Hindu temples, pandit services for Gruhapravesha, Satyanarayan Puja and rituals, yoga ashrams, and satsang groups across Switzerland — Zurich, Basel, Bern, Geneva.",
  keywords: ["Hindu temples Switzerland", "pandit Switzerland", "Hindu priest Switzerland", "Gruhapravesha Switzerland", "puja ceremony Zurich", "Satyanarayan puja Switzerland", "Hindu priest Zurich", "Gurdwara Switzerland", "Gurdwara Langenthal", "ISKCON Zurich Sunday feast"],
  openGraph: {
    title: "Hindu Temples & Pandits in Switzerland | IndiaSwiss",
    description: "Hindu temples, pandit services for Gruhapravesha, Satyanarayan Puja and rituals, yoga ashrams, and satsang groups across Switzerland.",
  },
};

type Place = { name: string; url: string | null; city: string; desc: string };

// Hindu temples verified via Wikipedia list of Hindu temples in Switzerland, sivankovil.ch, krishna.ch, and web search (Aug 2026)
const temples: Place[] = [
  { name: "Arulmihu Sivan Temple (Sri Sivasubramaniar)", url: "https://sivankovil.ch", city: "Glattbrugg (Zurich)", desc: "Largest and most visited Hindu temple in Switzerland. Founded 1994. Siva and Subramaniar consecrated. Up to 4,000 devotees at major festivals. Zurich Hauptstrasse 78, 8152 Glattbrugg. Open daily 8 am–1 pm and 6–9 pm." },
  { name: "Krishna Tempel Zürich (ISKCON)", url: "https://www.krishna.ch", city: "Zurich", desc: "Hare Krishna temple at Bergstrasse 54, 8032 Zurich. Started 1980. Sunday feast, Janmashtami, kirtan and prasad. Mangala-arati at 4:30 am daily." },
  { name: "Arputha Vinayagar Temple", url: null, city: "Versoix (Geneva)", desc: "Ganesha temple in Versoix near Geneva. Established 1996. One of the earliest Hindu temples in the French-speaking part of Switzerland." },
  { name: "Sri Sithivinayagar Temple", url: null, city: "Hünenberg (Zug)", desc: "Ganesha temple located at Bösch 43, 6331 Hünenberg, canton of Zug. Ganesh Chaturthi and regular puja." },
  { name: "BAPS Swaminarayan Satsang", url: "https://www.baps.org", city: "Zurich (Affoltern)", desc: "Regular satsang and cultural programmes at GZ Affoltern community centre, Zurich. Major celebrations for Diwali and Hindu New Year Annakut. Part of the global BAPS Swaminarayan network." },
  { name: "Shirdi Sai Baba Temple", url: null, city: "Zurich", desc: "Weekly Thursday puja and community prayers for Sai Baba devotees in the Zurich area. No verified public website." },
];

// Yoga & meditation centres verified via organisation websites (Aug 2026)
const yoga: Place[] = [
  { name: "Art of Living Switzerland", url: "https://www.artofliving.org/ch-en", city: "Nationwide", desc: "Centers in Zurich, Geneva, Basel, Bern, Lucerne, Lugano and Neuchâtel. Sudarshan Kriya, yoga, meditation retreats and happiness programmes by Sri Sri Ravi Shankar." },
  { name: "Brahma Kumaris Switzerland", url: "https://www.brahmakumaris.org", city: "Zurich/Geneva", desc: "Raja Yoga meditation, mindfulness and spiritual education classes. Part of a global network present in Switzerland." },
  { name: "Chinmaya Mission Switzerland", url: "https://chinmayamission.com", city: "Zurich", desc: "Vedanta study, Gita jnana yajna and Bala Vihar children's programme. Part of Chinmaya Mission Europe." },
  { name: "Isha Foundation Switzerland", url: "https://isha.sadhguru.org", city: "Zurich", desc: "Inner Engineering, Shambhavi Mahamudra and Sadhguru programmes available to participants in Switzerland." },
  { name: "Sivananda Yoga Centre", url: "https://www.sivananda.org", city: "Geneva", desc: "Classical Hatha Yoga and Vedanta based on Swami Sivananda's teachings." },
];

// Hindu priests / pandits for home rituals — verified via web search (Oct 2026)
const pandits: Place[] = [
  { name: "Pandit Naresh Kumar Shastri", url: "https://sivankovil.ch/contact", city: "Zurich", desc: "Priest at Arulmihu Sivan Temple, Glattbrugg. Available for home ceremonies including Gruhapravesha (housewarming), Satyanarayan Puja, Namkaran, Sathabhishekam, and other Sanskrit rituals. Contact via the Sivankovil office." },
  { name: "ISKCON Zurich — Puja Services", url: "https://www.krishna.ch", city: "Zurich", desc: "ISKCON Zurich offers puja services and home visit ceremonies on request. Suitable for Griha Pravesh, Satyanarayan Katha, and other Vaishnav rituals. Contact the temple at Bergstrasse 54, Zurich." },
  { name: "Hindu Community Zurich (HCZ)", url: "https://hcz.ch", city: "Zurich", desc: "The Hindu Community Zurich (hcz.ch) maintains a list of priests available for home ceremonies across the Zurich region. Contact for referrals to qualified pandits for Gruhapravesha, weddings, Satyanarayan Puja, and other rituals." },
];

// Gurdwaras — verified via web search (Oct 2026)
const gurdwaras: Place[] = [
  { name: "Gurdwara Sahib Langenthal", url: "https://www.gurdwarasahib.ch", city: "Langenthal (Bern)", desc: "Switzerland's principal Gurdwara. Located at Gasstrasse 33, 4900 Langenthal, Canton Bern. Open daily for darshan, langar (free community meals), and religious services. Accessible by train from Bern and Zurich. Tel: 062 922 16 62." },
  { name: "Gurdwara Singh Sabha Zürich", url: null, city: "Zurich", desc: "Sikh congregation in Zurich serving the Punjabi and Sikh community with regular services, Gurpurab celebrations, and langar. Contact via the Langenthal Gurdwara for current location details." },
];

// Satsang & devotional groups — verified via web search; groups without public websites marked (Aug 2026)
const satsang: Place[] = [
  { name: "Hindu Swayamsevak Sangh (HSS) Switzerland", url: "https://www.hssworld.org", city: "Nationwide", desc: "Weekly shakha, Sanskrit classes, seva projects and Hindu cultural programmes across Switzerland." },
  { name: "Gayatri Parivar / AWGP Switzerland", url: "https://www.awgp.org", city: "Zurich", desc: "Gayatri mantra sadhana, yagna and spiritual workshops. Affiliated with All World Gayatri Pariwar." },
  { name: "Sai Baba Satsang Zurich", url: null, city: "Zurich", desc: "Shirdi Sai Baba bhajans and weekly satsang gatherings. No verified public website." },
  { name: "Vaishnav Parishad Switzerland", url: null, city: "Zurich", desc: "Bhagavat katha, Ekadashi fasting observance and devotional programmes. No verified public website." },
];

function PlaceCard({ p }: { p: Place }) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-sm leading-tight" style={{ color: "var(--text)" }}>{p.name}</h3>
        <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/20">{p.city}</span>
      </div>
      <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>{p.desc}</p>
    </>
  );
  return p.url ? (
    <a href={p.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover block group">{inner}</a>
  ) : (
    <div className="glass rounded-xl p-5">{inner}</div>
  );
}

export default function SpiritualPage() {
  return (
    <div>
      <PageHeader
        title="Hindu Temples, Pandits & Spiritual Centres in Switzerland"
        subtitle="Find Hindu temples, qualified pandits for home rituals (Gruhapravesha, Satyanarayan Puja), yoga ashrams, and satsang communities across Switzerland."
        badge="🕉️ Spiritual Community"
        breadcrumbs={[{ label: "Community", href: "/community" }, { label: "Temples & Spiritual" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Hindu Priests & Pandit Services</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Qualified pandits available for Gruhapravesha (housewarming), Satyanarayan Puja, Namkaran, Sathabhishekam, weddings and other Sanskrit rituals at your home across Switzerland</p>
          <div className="glass rounded-2xl p-5 mb-4 border border-orange-500/20">
            <p className="text-sm" style={{ color: "var(--text-2)" }}>
              <strong style={{ color: "var(--text)" }}>Need a Hindu priest in Switzerland?</strong> Finding a qualified pandit for Gruhapravesha (Griha Pravesh), Satyanarayan Puja, Namkaran, Upanayana, or other home rituals is one of the most common requests in the Swiss Indian community. The contacts below can help connect you with priests serving Zurich, Basel, Bern, Geneva, and other Swiss cities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pandits.map((p) => <PlaceCard key={p.name} p={p} />)}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Hindu Temples</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Temples and Hindu prayer centres in Switzerland</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {temples.map((p) => <PlaceCard key={p.name} p={p} />)}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Yoga & Meditation Centres</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Indian yoga traditions, pranayama and meditation in Switzerland</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {yoga.map((p) => <PlaceCard key={p.name} p={p} />)}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Satsang & Devotional Groups</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Community bhajans, kathas and devotional gatherings</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {satsang.map((p) => <PlaceCard key={p.name} p={p} />)}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Gurdwaras in Switzerland</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Sikh prayer centres and Gurdwaras serving the Punjabi community across Switzerland</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gurdwaras.map((p) => <PlaceCard key={p.name} p={p} />)}
          </div>
        </section>
      </div>
    </div>
  );
}
