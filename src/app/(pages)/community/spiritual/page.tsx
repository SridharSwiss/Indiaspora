import PageHeader from "@/components/ui/PageHeader";
import { ExternalLink } from "lucide-react";

const temples = [
  { name: "Ganesha Temple Zurich (Saiva Thamil Sangam)", city: "Glattbrugg, Zurich", url: "#", desc: "The largest Hindu temple in Switzerland. Daily puja, major festival celebrations, Tamil Sangam events." },
  { name: "ISKCON Krishna Temple", city: "Zurich", url: "#", desc: "Hare Krishna temple with Sunday Feast (free prasad), Janmashtami, Ratha Yatra and Bhagavad Gita classes." },
  { name: "Sri Durga Temple Basel", city: "Basel", url: "#", desc: "Navratri puja, Durga ashtami and regular prayers for the Basel Indian community." },
  { name: "Shiva Temple Bern", city: "Bern", url: "#", desc: "Regular abishekam, Maha Shivaratri and Pradosham prayers in the Swiss capital." },
  { name: "Murugan Temple Geneva", city: "Geneva", url: "#", desc: "Thaipusam, Panguni Uthiram and regular pujas for the Tamil community in Geneva." },
];

const wellness = [
  { name: "Art of Living Switzerland", url: "https://www.artofliving.org/ch-en/", desc: "Sri Sri Ravi Shankar's foundation. Sudarshan Kriya, Sahaj Samadhi Meditation, yoga and happiness programmes across Switzerland." },
  { name: "Brahma Kumaris Switzerland", url: "https://www.brahmakumaris.org/", desc: "Raja Yoga meditation centres in Geneva and Zurich. Free meditation courses and spiritual retreats." },
  { name: "Chinmaya Mission Switzerland", url: "#", desc: "Vedanta classes, Bala Vihar (children's spiritual education), Gita Chanting and spiritual camps." },
  { name: "Isha Foundation Switzerland", url: "https://isha.sadhguru.org/", desc: "Sadhguru's programmes — Isha Kriya, Inner Engineering and yoga programmes." },
  { name: "Arya Samaj Switzerland", url: "#", desc: "Vedic havan ceremonies, Sanskrit classes, satsang and Maharishi Dayananda's teachings." },
  { name: "Sathya Sai Organisation Switzerland", url: "#", desc: "Sathya Sai Baba devotees — bhajans, seva projects and study circles." },
  { name: "Transcendental Meditation Switzerland", url: "https://www.tm.org/", desc: "Maharishi's TM technique — stress reduction, improved focus and inner peace." },
];

const yoga = [
  { name: "Sivananda Yoga Vedanta Centre Zurich", url: "https://www.sivananda.org/", desc: "Classical Hatha Yoga, Vedanta, Sanskrit and teacher training courses." },
  { name: "Iyengar Yoga Institute Zurich", url: "#", desc: "B.K.S. Iyengar method — precision alignment, therapeutic yoga and teacher training." },
  { name: "Ashtanga Yoga Zurich", url: "#", desc: "Traditional Mysore-style Ashtanga practice and led classes." },
  { name: "Bikram Yoga Switzerland", url: "#", desc: "Hot yoga studios in Zurich and Geneva. 26 postures in a heated room." },
];

export default function SpiritualPage() {
  return (
    <div className="bg-slate-950 text-white">
      <PageHeader
        title="Temples, Spiritual & Wellness"
        subtitle="Find your spiritual home in Switzerland — Hindu temples, yoga centres, meditation groups, and satsang communities."
        badge="🕉 40+ Centres"
        gradient="from-purple-500 to-violet-600"
        breadcrumbs={[{ label: "Community", href: "/community" }, { label: "Temples & Spiritual" }]}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-14">
        <div>
          <h2 className="text-2xl font-black text-white mb-2">Hindu Temples in Switzerland</h2>
          <p className="text-slate-400 text-sm mb-6">Major temples serving India's diverse Hindu traditions across Swiss cities</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {temples.map((t) => (
              <div key={t.name} className="glass rounded-xl p-5 card-hover">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-white text-sm leading-snug">{t.name}</h3>
                </div>
                <span className="text-xs text-orange-400 mb-2 block">{t.city}</span>
                <p className="text-slate-400 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-white mb-2">Spiritual Organisations</h2>
          <p className="text-slate-400 text-sm mb-6">Meditation, devotion and Vedic knowledge centres</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {wellness.map((w) => (
              <a key={w.name} href={w.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover block group">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-white text-sm group-hover:text-purple-400 transition-colors leading-snug">{w.name}</h3>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{w.desc}</p>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-white mb-2">Yoga Centres</h2>
          <p className="text-slate-400 text-sm mb-6">Traditional Indian yoga lineages practised in Switzerland</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {yoga.map((y) => (
              <a key={y.name} href={y.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover block group">
                <h3 className="font-semibold text-white text-sm group-hover:text-purple-400 transition-colors mb-2">{y.name}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{y.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
