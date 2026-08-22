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
  {
    name: "Chidambareshwara School of Bharathanatyam",
    style: "Bharatanatyam",
    city: "Zurich",
    level: "All levels",
    url: "https://www.chidambareshwara.com/",
    desc: "Tamil-Indian Bharathanatyam institution in Zurich, founded by Mathuschanka Baskaran-Kajeep. Classes in Tamil, English & German at GZ Seebach (Wed) and Buchs ZH (Sat). Level exams and Arangetram recitals."
  },
  {
    name: "Omkara School of Indian Dance",
    style: "Bharatanatyam",
    city: "Geneva",
    level: "All levels",
    url: "https://www.omkara-dance.com/en/home/",
    desc: "Promoting Bharata Natyam in Geneva since 1987. Artistic director Sujatha Venkatesh trained under renowned Masters in Bangalore. ISTD (UK) and CID (France) certifications offered. Source: omkara-dance.com"
  },
  {
    name: "Kalasri — School of Indian Dance & Yoga",
    style: "Bharatanatyam & Yoga",
    city: "Basel",
    level: "All levels",
    url: "https://www.kalasri.com/",
    desc: "The first Indian dance and yoga school in Switzerland, founded in 1976 by Esther Jenny and D. Keshava. Located at Freie Strasse 3, Basel (near Marktplatz). Serves students from Switzerland, Germany, and France."
  },
  {
    name: "Nateschwara Academy of Performing Indian Arts",
    style: "Bharata Natyam & Carnatic Music",
    city: "Baden (near Zurich)",
    level: "Beginner to Teacher Training",
    url: "https://nateschwara.ch/en/",
    desc: "One of the most important Indian performing arts schools outside India, founded 1980 by Vijaya Rao. Offers Bharata Natyam, Carnatic Singing, Hindi & Sanskrit, Yoga & Meditation. Annual Festival of Dance & Music."
  },
  {
    name: "NAVARASA — School of Indian Dance",
    style: "Mohiniyattam & Bollywood",
    city: "Switzerland",
    level: "Beginner to Advanced",
    url: "https://navarasa.ch/",
    desc: "Teaches Mohiniyattam (Kerala classical dance) and Bollywood fusion. Workshops from introductory sessions for beginners to advanced training. Active on Instagram @navarasa_swiss."
  },
  {
    name: "Stuti Aga Dance Company",
    style: "Bharatanatyam Fusion",
    city: "Zurich",
    level: "Classes & Performances",
    url: "https://www.stutiaga.com/portfolio/bharatanatyam/",
    desc: "Zurich-based Bharatanatyam Fusion dance company offering classes, workshops, and performances. Blends classical Bharatanatyam with contemporary elements."
  },
];

const musicGroups = [
  {
    name: "Peter Huber — Tabla & Sitar School",
    genre: "Tabla, Sitar, Surbahar",
    city: "Zurich & Küttigen/AG",
    url: "https://www.tabla-schule.ch/",
    desc: "Tabla, sitar, and surbahar instruction by Peter Huber, who studied tabla with Pandit Arvind Mulgaonkar in Mumbai from 1988–2018. Teaching Indian classical music in Switzerland since 1992."
  },
  {
    name: "Hans Wettstein — Sitar & Dhrupad Vocal",
    genre: "Sitar, Dhrupad & Khyal Vocal",
    city: "Zurich",
    url: "https://www.sitar.ch/",
    desc: "Sitar and Hindustani vocal (Dhrupad, Khyal) instruction. Hans Wettstein studied Indian classical music in Varanasi for 12 years. Individual and small-group lessons."
  },
  {
    name: "Hindustani Vocal — ADEM Zurich",
    genre: "Hindustani Vocal",
    city: "Zurich",
    url: "https://adem.ch/en/classes/hindustani-vocal",
    desc: "Hindustani vocal classes offered through ADEM (Academy of Dance and Ethnic Music), Zurich. Open to all skill levels."
  },
  {
    name: "Swiss Indian Orchestra",
    genre: "Fusion & Classical",
    city: "Switzerland",
    url: "https://mx3.ch/swiss_indian_orchestra",
    desc: "Orchestra blending Indian classical and Swiss/Western musical traditions. Performs at cultural events and festivals across Switzerland."
  },
  {
    name: "Namaste Switzerland — Concert Events",
    genre: "Carnatic & Hindustani Concerts",
    city: "Switzerland-wide",
    url: "https://namasteswitzerland.ch/",
    desc: "Organises classical Indian music concerts including 'Classical Music of India' sitar and tabla concert series. Promotes Indian performing arts across Switzerland."
  },
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
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Dance Schools & Classes</h2>
          <p className="mb-8" style={{ color: "var(--text-2)" }}>Classical and contemporary Indian dance across Switzerland</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {danceSchools.map((d) => (
              d.url ? (
                <a key={d.name} href={d.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 card-hover block group">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-sm flex-1 mr-2 group-hover:text-rose-400 transition-colors" style={{ color: "var(--text)" }}>{d.name}</h3>
                    <span className="text-xs bg-rose-500/20 text-rose-400 px-2 py-1 rounded-full shrink-0">{d.city}</span>
                  </div>
                  <p className="text-xs mb-1" style={{ color: "var(--text-3)" }}>{d.style} &middot; {d.level}</p>
                  <p className="text-sm" style={{ color: "var(--text-2)" }}>{d.desc}</p>
                </a>
              ) : (
                <div key={d.name} className="glass rounded-2xl p-5 card-hover">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-sm flex-1 mr-2" style={{ color: "var(--text)" }}>{d.name}</h3>
                    <span className="text-xs bg-rose-500/20 text-rose-400 px-2 py-1 rounded-full shrink-0">{d.city}</span>
                  </div>
                  <p className="text-xs mb-1" style={{ color: "var(--text-3)" }}>{d.style} &middot; {d.level}</p>
                  <p className="text-sm" style={{ color: "var(--text-2)" }}>{d.desc}</p>
                </div>
              )
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Music Teachers & Groups</h2>
          <p className="mb-8" style={{ color: "var(--text-2)" }}>Carnatic, Hindustani, and fusion music communities in Switzerland</p>
          <div className="grid md:grid-cols-2 gap-5">
            {musicGroups.map((m) => (
              m.url ? (
                <a key={m.name} href={m.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 card-hover block group">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold group-hover:text-rose-400 transition-colors" style={{ color: "var(--text)" }}>{m.name}</h3>
                    <span className="text-xs" style={{ color: "var(--text-2)" }}>{m.city}</span>
                  </div>
                  <p className="text-xs text-rose-400 mb-2">{m.genre}</p>
                  <p className="text-sm" style={{ color: "var(--text-2)" }}>{m.desc}</p>
                </a>
              ) : (
                <div key={m.name} className="glass rounded-2xl p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold" style={{ color: "var(--text)" }}>{m.name}</h3>
                    <span className="text-xs" style={{ color: "var(--text-2)" }}>{m.city}</span>
                  </div>
                  <p className="text-xs text-rose-400 mb-2">{m.genre}</p>
                  <p className="text-sm" style={{ color: "var(--text-2)" }}>{m.desc}</p>
                </div>
              )
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Yoga & Wellness</h2>
          <p className="mb-8" style={{ color: "var(--text-2)" }}>Indian spiritual and wellness organisations in Switzerland</p>
          <div className="grid md:grid-cols-3 gap-4">
            {yogaStudios.map((y) => (
              <a key={y.name} href={y.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 card-hover block group">
                <h3 className="font-semibold text-sm mb-1 group-hover:text-rose-400 transition-colors" style={{ color: "var(--text)" }}>{y.name}</h3>
                <p className="text-xs mb-2" style={{ color: "var(--text-3)" }}>{y.city}</p>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{y.desc}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
