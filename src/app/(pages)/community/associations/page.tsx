import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { ExternalLink } from "lucide-react";

const associations = [
  {
    category: "Umbrella & Regional",
    color: "from-orange-500 to-red-500",
    orgs: [
      { name: "IAGZ – Indian Association of Greater Zurich", url: "https://www.iagz.ch", city: "Zurich", desc: "Largest Indian association in Switzerland. Hindi school, Diwali Mela, networking events, sports." },
      { name: "Indian Association Berne", url: "https://www.indiaassociationberne.ch", city: "Bern", desc: "Community hub in the capital. Cultural events, festivals, children's programmes." },
      { name: "Indian Cultural Association Basel (ICAS)", url: "#", city: "Basel", desc: "Community events and cultural programmes for Indians in the Basel tri-national region." },
      { name: "Indian Association Geneva (IAG)", url: "#", city: "Geneva", desc: "Community for Indians in Geneva including UN/international organisation employees." },
      { name: "Bharatiya Association Berne", url: "#", city: "Bern", desc: "Cultural events and Indian diaspora support in Bern canton." },
    ],
  },
  {
    category: "Language & Cultural",
    color: "from-purple-500 to-violet-600",
    orgs: [
      { name: "Gujarati Samaj Switzerland", url: "#", city: "Nationwide", desc: "Navratri, Diwali, language classes and Gujarati cultural preservation." },
      { name: "Maharashtra Mandal Switzerland", url: "#", city: "Nationwide", desc: "Ganesh Chaturthi, Gudi Padwa, Marathi cultural events and welfare." },
      { name: "Tamil Sangam Switzerland", url: "#", city: "Zurich/Basel", desc: "Pongal, Tamil New Year, classical arts and Tamil language education." },
      { name: "Telugu Association Switzerland (TAS)", url: "#", city: "Nationwide", desc: "Ugadi, Bathukamma, Telugu cultural and social events." },
      { name: "Punjabi Cultural Association Switzerland", url: "#", city: "Zurich", desc: "Lohri, Baisakhi, bhangra and Punjabi cultural celebrations." },
      { name: "Kannada Koota Switzerland", url: "#", city: "Zurich", desc: "Kannada Rajyotsava (Nov 1), Ugadi and Kannada cultural events." },
      { name: "Bengali Association Switzerland", url: "#", city: "Zurich/Geneva", desc: "Durga Puja, Rabindra Jayanti, and Bengali cultural programmes." },
      { name: "Rajasthan Association Switzerland", url: "#", city: "Zurich", desc: "Teej, Gangaur and Rajasthani cultural events." },
    ],
  },
  {
    category: "Professional & Business",
    color: "from-teal-500 to-cyan-600",
    orgs: [
      { name: "SICC – Swiss Indian Chamber of Commerce", url: "https://www.sicc.ch", city: "Zurich", desc: "Bilateral Switzerland–India trade, business networking and investment facilitation." },
      { name: "TiE Switzerland", url: "#", city: "Zurich", desc: "The Indus Entrepreneurs — mentorship, funding, startup ecosystem for Indian entrepreneurs." },
      { name: "NASSCOM Switzerland", url: "#", city: "Zurich", desc: "Indian IT & tech industry network; connects Indian IT professionals in Switzerland." },
      { name: "India Business Switzerland (IBS)", url: "#", city: "Nationwide", desc: "Promotes Swiss-Indian business exchange across sectors." },
    ],
  },
  {
    category: "Spiritual & Cultural",
    color: "from-rose-500 to-pink-600",
    orgs: [
      { name: "Hindu Swayamsevak Sangh (HSS) Switzerland", url: "#", city: "Nationwide", desc: "Hindu values, yoga, Sanskrit and youth development programmes." },
      { name: "ISKCON Zurich", url: "#", city: "Zurich", desc: "Hare Krishna temple, Sunday Feast, Janmashtami celebrations and spiritual programmes." },
      { name: "Arya Samaj Switzerland", url: "#", city: "Nationwide", desc: "Vedic studies, havan ceremonies and Arya Samaj principles." },
      { name: "Art of Living Switzerland", url: "https://www.artofliving.org/ch-en/", city: "Nationwide", desc: "Sudarshan Kriya, meditation, yoga and stress relief programmes." },
      { name: "Chinmaya Mission Switzerland", url: "#", city: "Zurich", desc: "Vedanta studies, Bala Vihar for children, spiritual discourses." },
      { name: "Brahma Kumaris Switzerland", url: "https://www.brahmakumaris.org/", city: "Geneva/Zurich", desc: "Raja Yoga meditation, spiritual education and values-based living." },
    ],
  },
];

export default function AssociationsPage() {
  return (
    <div className="bg-slate-950 text-white">
      <PageHeader
        title="Indian Associations & Clubs"
        subtitle="150+ active organisations serving every region, language, and interest group within Switzerland's Indian community."
        badge="🏛 Complete Directory"
        breadcrumbs={[{ label: "Community", href: "/community" }, { label: "Associations & Clubs" }]}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-12">
        {associations.map((cat) => (
          <div key={cat.category}>
            <div className={`inline-flex px-3 py-1 rounded-full bg-gradient-to-r ${cat.color} text-white text-xs font-semibold mb-5`}>
              {cat.category}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.orgs.map((org) => (
                <a key={org.name} href={org.url} target="_blank" rel="noopener noreferrer"
                  className="glass rounded-xl p-5 card-hover group block">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-white text-sm group-hover:text-orange-400 transition-colors leading-snug">{org.name}</h3>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 mb-2 inline-block">{org.city}</span>
                  <p className="text-slate-400 text-xs leading-relaxed">{org.desc}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
        <div className="glass rounded-2xl p-6 sm:p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Is your association missing?</h3>
          <p className="text-slate-400 text-sm mb-5">We want to list every Indian association in Switzerland. Submit your details for a free listing.</p>
          <a href="mailto:hello@indiaswiss.ch" className="inline-flex px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-sm hover:from-orange-600 hover:to-amber-600 transition-all">
            Submit Your Association
          </a>
        </div>
      </section>
    </div>
  );
}
