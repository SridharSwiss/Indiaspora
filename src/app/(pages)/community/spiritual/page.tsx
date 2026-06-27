import PageHeader from "@/components/ui/PageHeader";

type Place = { name: string; url: string | null; city: string; desc: string };

const temples: Place[] = [
  { name: "ISKCON Zurich", url: "https://www.iskcon.ch", city: "Zurich", desc: "Hare Krishna temple — Sunday feast, Janmashtami, kirtan and prasad." },
  { name: "Shiva Temple Zurich", url: null, city: "Zurich", desc: "Shiva puja, Maha Shivaratri and regular aarti services." },
  { name: "Shirdi Sai Baba Temple", url: null, city: "Zurich", desc: "Weekly Thursday puja and community prayers." },
  { name: "Sri Venkateswara Temple Geneva", url: null, city: "Geneva", desc: "South Indian temple — Brahmotsavam and regular agamic puja." },
  { name: "Ganesha Temple Basel", url: null, city: "Basel", desc: "Ganesh Chaturthi celebrations and weekly puja." },
];

const yoga: Place[] = [
  { name: "Art of Living Switzerland", url: "https://www.artofliving.org/ch-en", city: "Zurich/Geneva", desc: "Sudarshan Kriya, SKY breathing, meditation retreats and happiness programmes." },
  { name: "Brahma Kumaris Switzerland", url: "https://www.brahmakumaris.org", city: "Zurich/Geneva", desc: "Raja Yoga meditation, mindfulness and spiritual education classes." },
  { name: "Chinmaya Mission Switzerland", url: "https://chinmayamission.com", city: "Zurich", desc: "Vedanta study, Gita jnana yajna and Bala Vihar children's programme." },
  { name: "Isha Foundation Switzerland", url: "https://isha.sadhguru.org", city: "Zurich", desc: "Inner Engineering, Shambhavi Mahamudra and Sadhguru programmes." },
  { name: "Sivananda Yoga Centre", url: "https://www.sivananda.org", city: "Geneva", desc: "Classical Hatha Yoga and Vedanta based on Swami Sivananda's teachings." },
];

const satsang: Place[] = [
  { name: "Hindu Swayamsevak Sangh (HSS) Switzerland", url: "https://hssuk.org", city: "Nationwide", desc: "Weekly shakha, Sanskrit classes, seva projects and Hindu cultural programmes." },
  { name: "Gayatri Parivar / AWGP Switzerland", url: "https://www.awgp.org", city: "Zurich", desc: "Gayatri mantra sadhana, yagna and spiritual workshops." },
  { name: "Vaishnav Parishad Switzerland", url: null, city: "Zurich", desc: "Bhagavat katha, Ekadashi fasting observance and devotional programmes." },
  { name: "Sai Baba Satsang Zurich", url: null, city: "Zurich", desc: "Shirdi Sai Baba bhajans and weekly satsang gatherings." },
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
