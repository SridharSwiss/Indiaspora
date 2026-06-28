import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indian Music & Dance in Switzerland",
  description: "Classical dance schools, music academies, and Bollywood studios for Indians in Zurich, Geneva, Basel, and Lausanne.",
  openGraph: {
    title: "Indian Music & Dance in Switzerland | IndiaSwiss",
    description: "Classical dance schools, music academies, and Bollywood studios for Indians in Zurich, Geneva, Basel, and Lausanne.",
  },
};

const danceSchools = [
  { name: "Natya Academy Zurich", style: "Bharatanatyam", city: "Zurich", level: "All levels", desc: "Certified Bharatanatyam classes for children and adults. Annual Arangetram recitals." },
  { name: "Bollywood Dance Studio Zurich", style: "Bollywood / Fusion", city: "Zurich", level: "Beginner–Intermediate", desc: "Weekly Bollywood workshops and choreography for events, weddings, and Diwali shows." },
  { name: "Bollywood Beats Geneva", style: "Bollywood", city: "Geneva", level: "Fitness & Performance", desc: "Dance fitness classes and group performances for the Geneva Indian community." },
  { name: "Kuchipudi Kalakshetra", style: "Kuchipudi", city: "Zurich", level: "Children & Advanced", desc: "Telugu classical dance — regular group classes and annual Guru Purnima recital." },
  { name: "Odissi Dance Academy Basel", style: "Odissi", city: "Basel", level: "Intermediate–Advanced", desc: "Odissi classical dance with training inspired by the Odisha tradition." },
  { name: "Dhol & Bhangra Group Zurich", style: "Bhangra / Folk", city: "Zurich", level: "All levels", desc: "High-energy Bhangra group for events, weddings, Navratri, and Lohri celebrations." },
];

const musicGroups = [
  { name: "Indian Music Circle Switzerland", genre: "Carnatic & Hindustani", city: "Zurich", url: "https://www.facebook.com/IndianMusicSwitzerland/", desc: "Promotes classical Indian music — concerts, learning circles, and visiting artist events." },
  { name: "Sur Swarang Zurich", genre: "Hindustani Classical", city: "Zurich", url: null, desc: "Tabla, sitar, flute, and vocal — lessons for all skill levels from beginners to advanced." },
  { name: "Bollywood Band Switzerland", genre: "Bollywood / Film", city: "Zurich", url: null, desc: "Live band for weddings, Diwali events, and corporate shows across Switzerland." },
  { name: "Sufi Nights Switzerland", genre: "Sufi / Qawwali", city: "Geneva", url: null, desc: "Quarterly Sufi music evenings, open to all communities. Spiritual and contemplative." },
  { name: "Dhwani Carnatic Vocal", genre: "Carnatic Vocal", city: "Baden (Near Zurich)", url: null, desc: "Carnatic vocal lessons for children above 6 and adults. Beginner to intermediate." },
];

const yogaStudios = [
  { name: "Art of Living Switzerland", url: "https://www.artofliving.org/ch-en", city: "Nationwide", desc: "Sudarshan Kriya, Sahaj Samadhi meditation, and yoga courses by Sri Sri Ravi Shankar." },
  { name: "Isha Foundation Switzerland", url: "https://isha.sadhguru.org", city: "Zurich / Online", desc: "Inner Engineering, Hatha Yoga, and online programmes by Sadhguru." },
  { name: "Brahma Kumaris Switzerland", url: "https://www.brahmakumaris.org/ch-en", city: "Zurich / Geneva", desc: "Meditation and spiritual study centres. Free Raja Yoga meditation courses." },
];

export default function ArtsPage() {
  return (
    <div>
      <PageHeader
        title="Music & Dance"
        subtitle="From Bharatanatyam to Bhangra — Switzerland's Indian arts community offers classical training, Bollywood fitness, and live music across all major cities."
        badge="Arts & Culture"
        gradient="from-rose-500 to-pink-600"
        breadcrumbs={[
          { label: "Culture & Arts", href: "/culture" },
          { label: "Music & Dance" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Dance Schools & Classes</h2>
          <p className="text-slate-400 mb-8">Classical and contemporary Indian dance across Switzerland</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {danceSchools.map((d) => (
              <div key={d.name} className="glass rounded-2xl p-5 card-hover">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white text-sm flex-1 mr-2">{d.name}</h3>
                  <span className="text-xs bg-rose-500/20 text-rose-400 px-2 py-1 rounded-full shrink-0">{d.city}</span>
                </div>
                <p className="text-xs text-white/40 mb-1">{d.style} &middot; {d.level}</p>
                <p className="text-sm text-slate-400">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Music Groups & Academies</h2>
          <p className="text-slate-400 mb-8">Carnatic, Hindustani, Bollywood, and Sufi music communities</p>
          <div className="grid md:grid-cols-2 gap-5">
            {musicGroups.map((m) => (
              m.url ? (
                <a key={m.name} href={m.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 card-hover block group">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-white group-hover:text-rose-400 transition-colors">{m.name}</h3>
                    <span className="text-xs text-slate-400">{m.city}</span>
                  </div>
                  <p className="text-xs text-rose-400 mb-2">{m.genre}</p>
                  <p className="text-sm text-slate-400">{m.desc}</p>
                </a>
              ) : (
                <div key={m.name} className="glass rounded-2xl p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-white">{m.name}</h3>
                    <span className="text-xs text-slate-400">{m.city}</span>
                  </div>
                  <p className="text-xs text-rose-400 mb-2">{m.genre}</p>
                  <p className="text-sm text-slate-400">{m.desc}</p>
                </div>
              )
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-2">Yoga & Wellness</h2>
          <p className="text-slate-400 mb-8">Indian spiritual and wellness organisations in Switzerland</p>
          <div className="grid md:grid-cols-3 gap-4">
            {yogaStudios.map((y) => (
              <a key={y.name} href={y.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 card-hover block group">
                <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-rose-400 transition-colors">{y.name}</h3>
                <p className="text-xs text-white/40 mb-2">{y.city}</p>
                <p className="text-sm text-slate-400">{y.desc}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
