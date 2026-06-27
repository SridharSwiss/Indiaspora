import PageHeader from "@/components/ui/PageHeader";

const danceSchools = [
  { name: "Natya Academy Zurich", style: "Bharatanatyam", city: "Zurich", desc: "Certified Bharatanatyam classes for children (age 5+) and adults. Annual Arangetram performances.", contact: "Via IAGZ or Facebook" },
  { name: "Bollywood Dance Studio Zurich", style: "Bollywood / Fusion", city: "Zurich", desc: "Weekly workshops, event choreography, bachelorette party sessions, Navratri performances.", contact: "Instagram: search Bollywood Dance Zurich" },
  { name: "Bollywood Beats Geneva", style: "Bollywood / Dance Fitness", city: "Geneva", desc: "Dance fitness classes and performance training. Popular with UN and CERN community.", contact: "Via Indian Association Geneva" },
  { name: "Kuchipudi Kalakshetra", style: "Kuchipudi", city: "Zurich", desc: "Telugu classical dance — children's batches and advanced students. Annual recital.", contact: "Via Telugu NRI Forum Switzerland" },
  { name: "Odissi Dance Academy Basel", style: "Odissi", city: "Basel", desc: "Odissi classical dance instruction. Annual Guru Purnima recital.", contact: "Via ICAS Basel" },
  { name: "Dhol & Bhangra Group Zurich", style: "Bhangra / Dhol", city: "Zurich", desc: "High-energy Bhangra for Navratri, Diwali, Baisakhi, and weddings. All skill levels.", contact: "Via Punjabi Cultural Association" },
];

const musicGroups = [
  { name: "Swiss Carnatic Music Circle", genre: "Carnatic Classical", city: "Zurich", desc: "Monthly Satsang concerts, violin, veena, and vocal lessons for all ages. Guru Purnima recital." },
  { name: "Hindustani Music Academy Zurich", genre: "Hindustani Classical", city: "Zurich", desc: "Tabla, sitar, flute, bansuri, and vocal training. Beginner to advanced. Annual concert." },
  { name: "Bollywood Band Switzerland", genre: "Bollywood / Live Band", city: "Zurich", desc: "Live band for weddings, Diwali galas, corporate events, Navratri. 5-piece ensemble." },
  { name: "Sufi Nights Switzerland", genre: "Sufi / Qawwali", city: "Geneva", desc: "Quarterly Sufi music evenings open to all. Intimate concert format with renowned artists." },
];

const annualEvents = [
  { name: "Natya Utsav", desc: "Annual Indian classical dance festival showcasing Bharatanatyam, Odissi, Kuchipudi, and Mohiniyattam. Usually November." },
  { name: "Sangeet Sandhya", desc: "Classical and semi-classical music evening. Carnatic and Hindustani performances. Organised by Swiss Carnatic Music Circle." },
  { name: "Guru Purnima Recital", desc: "Annual student recitals dedicated to Guru Purnima (July). Dance and music students present before their teachers." },
];

export default function ArtsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Indian Music & Dance in Switzerland"
        subtitle="Classical Bharatanatyam to Bollywood beats — explore Indian performing arts schools, groups, and annual performances across Switzerland."
        badge="Classical & Contemporary"
        gradient="from-rose-500 to-pink-600"
        breadcrumbs={[{ label: "Culture & Arts", href: "/culture" }, { label: "Music & Dance" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Dance Schools & Classes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {danceSchools.map((d) => (
              <div key={d.name} className="glass rounded-2xl p-5 card-hover">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white text-sm">{d.name}</h3>
                  <span className="text-xs bg-rose-500/20 text-rose-400 px-2 py-1 rounded-full ml-2 shrink-0">{d.city}</span>
                </div>
                <p className="text-xs text-pink-400 mb-2">{d.style}</p>
                <p className="text-sm text-slate-400 mb-3">{d.desc}</p>
                <p className="text-xs text-slate-500">{d.contact}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Music Groups & Academies</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {musicGroups.map((m) => (
              <div key={m.name} className="glass rounded-2xl p-5 card-hover">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white">{m.name}</h3>
                  <span className="text-xs text-slate-400">{m.city}</span>
                </div>
                <p className="text-xs text-rose-400 mb-2">{m.genre}</p>
                <p className="text-sm text-slate-400">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Annual Arts Events</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {annualEvents.map((e) => (
              <div key={e.name} className="glass rounded-2xl p-5">
                <h3 className="font-semibold text-rose-400 mb-3">{e.name}</h3>
                <p className="text-sm text-slate-400">{e.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 rounded-2xl bg-rose-500/10 border border-rose-500/20">
            <p className="text-sm text-slate-300">To find and join arts groups: post in Facebook groups <strong>"Indians in Zurich"</strong> or <strong>"Indian Community Switzerland"</strong>, or contact <a href="https://iagz.ch" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-300">IAGZ</a> for referrals to performing arts teachers.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
