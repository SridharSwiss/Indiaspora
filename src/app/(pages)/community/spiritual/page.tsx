import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Hindu Temples, Yoga & Spiritual Centres in Switzerland",
  description: "Find Hindu temples, yoga ashrams, meditation centres, and satsang groups for the Indian community across Switzerland.",
  openGraph: {
    title: "Hindu Temples, Yoga & Spiritual Centres in Switzerland | IndiaSwiss",
    description: "Find Hindu temples, yoga ashrams, meditation centres, and satsang groups for the Indian community across Switzerland.",
  },
};

type Place = { name: string; url: string | null; city: string; desc: string };

// Hindu temples verified via Wikipedia list of Hindu temples in Switzerland, worldhindutemples.com, and swissdesi.ch (Aug 2026)
const temples: Place[] = [
  { name: "Sri Sivasubramaniar Temple", url: null, city: "Adliswil (Zurich)", desc: "Largest and most famous Hindu temple in Switzerland. Founded 1994. Sihlweg 3, 8134 Adliswil. Open daily 8 am–1 pm and 6–9 pm. Contact: +41 44 709 0630." },
  { name: "Krishna Tempel Zürich (ISKCON)", url: "https://www.krishna.ch", city: "Zurich", desc: "Hare Krishna temple at Bergstrasse 54, 8032 Zurich. Started 1980. Sunday feast, Janmashtami, kirtan and prasad. Mangala-arati at 4:30 am daily." },
  { name: "Arputha Vinayagar Temple", url: null, city: "Versoix (Geneva)", desc: "Ganesha temple in Versoix near Geneva. Established 1996. One of the earliest Hindu temples in the French-speaking part of Switzerland." },
  { name: "Sri Sithivinayagar Temple", url: null, city: "Hünenberg (Zug)", desc: "Ganesha temple located at Bösch 43, 6331 Hünenberg, canton of Zug. Ganesh Chaturthi and regular puja." },
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
        <h3 className="font-semibold text-white text-sm leading-tight">{p.name}</h3>
        <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/20">{p.city}</span>
      </div>
      <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
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
    <div className="bg-slate-950 text-white min-h-screen">
      <PageHeader
        title="Temples, Yoga & Spiritual Centres"
        subtitle="Hindu temples, yoga ashrams, meditation groups and satsang communities across Switzerland."
        badge="🕉️ Spiritual Community"
        breadcrumbs={[{ label: "Community", href: "/community" }, { label: "Temples & Spiritual" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-1">Hindu Temples</h2>
          <p className="text-slate-400 text-sm mb-6">Temples and Hindu prayer centres in Switzerland</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {temples.map((p) => <PlaceCard key={p.name} p={p} />)}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-1">Yoga & Meditation Centres</h2>
          <p className="text-slate-400 text-sm mb-6">Indian yoga traditions, pranayama and meditation in Switzerland</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {yoga.map((p) => <PlaceCard key={p.name} p={p} />)}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-1">Satsang & Devotional Groups</h2>
          <p className="text-slate-400 text-sm mb-6">Community bhajans, kathas and devotional gatherings</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {satsang.map((p) => <PlaceCard key={p.name} p={p} />)}
          </div>
        </section>
      </div>
    </div>
  );
}
