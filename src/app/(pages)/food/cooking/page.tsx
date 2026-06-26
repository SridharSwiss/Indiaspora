import PageHeader from "@/components/ui/PageHeader";

const cuisines = [
  { name: "Punjabi / North Indian", dishes: ["Butter chicken", "Dal makhani", "Chole bhature", "Aloo paratha", "Palak paneer"] },
  { name: "South Indian", dishes: ["Masala dosa", "Sambar", "Rasam", "Idli", "Coconut chutney", "Kerala fish curry"] },
  { name: "Gujarati", dishes: ["Dhokla", "Thepla", "Undhiyu", "Kadhi", "Khandvi"] },
  { name: "Bengali", dishes: ["Macher jhol", "Aloo posto", "Mishti doi", "Rasgulla", "Cholar dal"] },
  { name: "Rajasthani", dishes: ["Dal baati churma", "Laal maas", "Gatte ki sabzi", "Ker sangri"] },
  { name: "Indian Sweets", dishes: ["Gulab jamun", "Kheer", "Halwa", "Ladoo", "Barfi", "Jalebi"] },
];

export default function CookingPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Indian Cooking Classes in Switzerland"
        subtitle="Learn to cook authentic regional Indian cuisines — from Kerala fish curry to Rajasthani dal baati — with expert instructors and home chefs."
        badge="Classes & Workshops"
        gradient="from-amber-500 to-orange-500"
        breadcrumbs={[{ label: "Food & Dining", href: "/food" }, { label: "Cooking Classes" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-2">Where to Find Classes</h2>
          <p className="text-slate-400 mb-8">Indian cooking classes in Switzerland are mostly community-run or offered by home chefs</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-orange-400 mb-4">Community Classes</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2"><span className="text-orange-400 mt-0.5">&#8226;</span><span><strong>IAGZ (Indian Association Zurich)</strong> — Occasional cooking workshops for members. Visit <a href="https://iagz.ch" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">iagz.ch</a> for events</span></li>
                <li className="flex items-start gap-2"><span className="text-orange-400 mt-0.5">&#8226;</span><span><strong>Tamil Sangam Switzerland</strong> — South Indian cooking classes, especially around Pongal</span></li>
                <li className="flex items-start gap-2"><span className="text-orange-400 mt-0.5">&#8226;</span><span><strong>Gujarati Samaj Switzerland</strong> — Gujarati cooking workshops for community members</span></li>
                <li className="flex items-start gap-2"><span className="text-orange-400 mt-0.5">&#8226;</span><span><strong>Facebook groups</strong> — Post in "Indians in Zurich" to find private cooking class instructors</span></li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold text-orange-400 mb-4">Private Home Chef Classes</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2"><span className="text-orange-400 mt-0.5">&#8226;</span><span>Many Indian home chefs offer private 2–3 hour cooking classes (CHF 60–120 per session)</span></li>
                <li className="flex items-start gap-2"><span className="text-orange-400 mt-0.5">&#8226;</span><span>Group classes (4–8 people) are more affordable and social</span></li>
                <li className="flex items-start gap-2"><span className="text-orange-400 mt-0.5">&#8226;</span><span>Find via Migros Klubschule (<a href="https://www.klubschule.ch" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">klubschule.ch</a>) — occasionally lists Indian cooking courses</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Cuisines You Can Learn</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cuisines.map((c) => (
              <div key={c.name} className="glass rounded-2xl p-5">
                <h3 className="font-semibold text-orange-400 mb-3 text-sm">{c.name}</h3>
                <ul className="space-y-1">
                  {c.dishes.map((d) => (
                    <li key={d} className="text-xs text-slate-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-orange-400 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="glass rounded-2xl p-6">
          <h3 className="font-semibold text-white mb-4">Online Learning Resources</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
            <ul className="space-y-2">
              <li>&#8226; <strong>YouTube:</strong> Hebbar's Kitchen, Ranveer Brar, Vahchef</li>
              <li>&#8226; <strong>YouTube:</strong> Manjula's Kitchen (vegetarian)</li>
              <li>&#8226; <strong>YouTube:</strong> Chef Sanjyot Keer (Your Food Lab)</li>
            </ul>
            <ul className="space-y-2">
              <li>&#8226; <strong>Cookware tip:</strong> Pressure cookers (Hawkins/Prestige) available via indiasupermarkt.ch or Amazon.de (ships to Switzerland)</li>
              <li>&#8226; <strong>Spice starter kit:</strong> Order from <a href="https://indiasupermarkt.ch" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">indiasupermarkt.ch</a></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
