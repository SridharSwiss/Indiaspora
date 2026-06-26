import PageHeader from "@/components/ui/PageHeader";

const danceSchools = [
  { name: "Natya Academy Zurich", style: "Bharatanatyam", description: "Classical Bharatanatyam training for children and adults. Regular arangetrams and stage performances.", city: "Zurich" },
  { name: "Bollywood Dance Studio Zurich", style: "Bollywood", description: "Fun workshops and choreography for events, performances, and fitness.", city: "Zurich" },
  { name: "Bollywood Beats Geneva", style: "Bollywood Fitness", description: "High-energy Bollywood dance fitness classes and performance groups.", city: "Geneva" },
  { name: "Kuchipudi Kalakshetra Zurich", style: "Kuchipudi", description: "Telugu classical Kuchipudi training with cultural performances for the community.", city: "Zurich" },
  { name: "Odissi Dance Academy Basel", style: "Odissi", description: "Classical Odissi dance classes for students of all levels.", city: "Basel" },
  { name: "Dhol & Bhangra Group Zurich", style: "Bhangra / Dhol", description: "Energetic Bhangra troupe performing at Navratri, weddings, and cultural events.", city: "Zurich" },
];

const musicGroups = [
  { name: "Swiss Carnatic Music Circle", genre: "Carnatic Classical", description: "Monthly satsang featuring violin, veena, and vocal performances. Open to learners and enthusiasts.", city: "Zurich" },
  { name: "Hindustani Music Academy Zurich", genre: "Hindustani Classical", description: "Classes in tabla, sitar, bansuri (flute), and vocal music. Organises annual student concerts.", city: "Zurich" },
  { name: "Bollywood Band Switzerland", genre: "Bollywood Live", description: "Live band performing at Indian weddings, corporate events, and cultural functions across Switzerland.", city: "Nationwide" },
  { name: "Sufi Nights Switzerland", genre: "Sufi / Qawwali", description: "Quarterly evenings of Sufi music and poetry in Geneva. Intimate, soulful performances.", city: "Geneva" },
];

const annualEvents = [
  { name: "Natya Utsav", description: "Annual classical Indian dance festival featuring performances from schools across Switzerland." },
  { name: "Sangeet Sandhya", description: "Community music evenings showcasing classical and semi-classical performances." },
  { name: "Guru Purnima Recitals", description: "Students perform for their gurus at this traditional celebration of Indian arts and learning." },
];

export default function ArtsPage() {
  return (
    <div>
      <PageHeader
        title="Indian Music & Dance in Switzerland"
        subtitle="Classical Bharatanatyam to Bollywood beats — explore Indian performing arts schools, groups, and performances across Switzerland."
        badge="Classical & Contemporary"
        gradient="from-rose-500 to-pink-600"
        breadcrumbs={[
          { label: "Culture & Arts", href: "/culture" },
          { label: "Music & Dance" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Dance Schools */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Dance Schools & Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {danceSchools.map((school) => (
              <div key={school.name} className="glass card-hover rounded-2xl p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-semibold text-white">{school.name}</h3>
                  <span className="text-xs text-white/40 ml-2 shrink-0">{school.city}</span>
                </div>
                <span className="text-sm text-rose-400 font-medium">{school.style}</span>
                <p className="text-sm text-white/60 mt-2">{school.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Music */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Music Groups & Academies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {musicGroups.map((group) => (
              <div key={group.name} className="glass card-hover rounded-2xl p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-semibold text-white">{group.name}</h3>
                  <span className="text-xs text-white/40 ml-2 shrink-0">{group.city}</span>
                </div>
                <span className="text-sm text-rose-400 font-medium">{group.genre}</span>
                <p className="text-sm text-white/60 mt-2">{group.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Annual Events */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Annual Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {annualEvents.map((ev) => (
              <div key={ev.name} className="glass card-hover rounded-2xl p-6 text-center">
                <h3 className="text-base font-semibold text-white mb-2">{ev.name}</h3>
                <p className="text-sm text-white/60">{ev.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Join */}
        <div className="glass rounded-2xl p-6 border border-rose-500/20">
          <p className="text-white/80 text-sm">
            <span className="font-semibold text-rose-400">How to join:</span> Most schools and groups post updates and contact details through community Facebook groups and IAGZ. Search for the group name on Facebook or ask in <strong className="text-white">"Indians in Zurich"</strong> to get connected.
          </p>
        </div>
      </div>
    </div>
  );
}
