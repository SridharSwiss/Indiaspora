import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Culture & Arts",
  description: "Celebrate Indian culture in Switzerland — festivals, classical music and dance, Bollywood, fashion, and cinema.",
};

const FESTIVALS = [
  { name: "Diwali Mela Zurich", date: "October", desc: "The biggest Indian festival in Switzerland — cultural performances, food stalls, fireworks, and thousands of attendees.", city: "Zurich", emoji: "🪔" },
  { name: "Holi Festival Basel", date: "March", desc: "Vibrant Holi celebration with organic colours, music, and dance at Münsterplatz Basel.", city: "Basel", emoji: "🎨" },
  { name: "Navratri Garba Nights", date: "October", desc: "Switzerland's largest Garba celebration with live music, traditional costumes, and professional dancers.", city: "Zurich", emoji: "💃" },
  { name: "Durga Puja Celebrations", date: "October", desc: "Bengali community organises authentic Durga Puja with pandal, prasad, and cultural programs.", city: "Zurich/Geneva", emoji: "🌺" },
  { name: "Ganesh Chaturthi", date: "August/September", desc: "Maharashtra Mandal organises Ganesh Chaturthi celebrations with aarti and cultural programs.", city: "Zurich", emoji: "🐘" },
  { name: "Baisakhi Celebrations", date: "April", desc: "Punjabi Cultural Association celebrates Baisakhi with Bhangra, langar, and festivities.", city: "Nationwide", emoji: "🌾" },
];

const PERFORMING_ARTS = [
  { name: "Bharatanatyam Classes Zurich", desc: "Classical Bharatanatyam dance training for children and adults. Performances at community events.", type: "Classical Dance" },
  { name: "Kathak & Bollywood Dance", desc: "Kathak and contemporary Bollywood dance classes — beginner to advanced levels.", type: "Dance" },
  { name: "Hindustani Classical Music", desc: "Vocal and instrumental Hindustani classical music tuition in Zurich and Geneva.", type: "Music" },
  { name: "Carnatic Music Circle", desc: "Carnatic music concerts and learning circles for the South Indian community.", type: "Music" },
  { name: "Tabla & Mridangam Classes", desc: "Percussion instrument training for all ages — group and individual lessons.", type: "Percussion" },
  { name: "Indian Film Screenings", desc: "Regular Bollywood and regional Indian film screenings at venues across Switzerland.", type: "Cinema" },
];

export default function CulturePage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-rose-600/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag mb-6">Culture & Arts</div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 mt-3">
            India&apos;s Culture <span className="gradient-text">Lives in Switzerland</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Celebrate India&apos;s rich heritage through festivals, classical arts, Bollywood, fashion, and cinema — right here in Switzerland.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <a href="#festivals" className="btn btn-primary">
              Upcoming Festivals <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#arts" className="btn btn-outline">Arts & Music</a>
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Festivals */}
      <section id="festivals" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="tag">Festivals</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-3">Indian Festivals in Switzerland</h2>
            <p className="text-slate-400 text-lg">Every major Indian festival is celebrated here — often with thousands of attendees.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FESTIVALS.map((f) => (
              <div key={f.name} className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{f.emoji}</span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar className="w-3 h-3" /> {f.date}
                  </span>
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{f.name}</h3>
                <p className="text-sm text-slate-400 mb-3">{f.desc}</p>
                <span className="text-xs text-rose-400 font-medium">{f.city}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/events" className="btn btn-outline">
              View All Events <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Performing Arts */}
      <section id="arts" className="py-20 pattern-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="tag">Music & Dance</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-3">Performing Arts</h2>
            <p className="text-slate-400 text-lg">Classical Indian arts, Bollywood dance, and live music — Switzerland&apos;s Indian cultural scene is thriving.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PERFORMING_ARTS.map((a) => (
              <div key={a.name} className="card p-6">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-rose-300 mb-4 inline-block" style={{ background: "rgba(244,63,94,0.12)" }}>
                  {a.type}
                </span>
                <h3 className="font-bold text-white mb-2">{a.name}</h3>
                <p className="text-sm text-slate-400">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Fashion */}
      <section id="fashion" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="tag">Fashion & Boutiques</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-3">Indian Fashion in Switzerland</h2>
            <p className="text-slate-400 text-lg">Sarees, salwar kameez, sherwanis, and Indo-western fashion available in Switzerland.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { name: "Indian Fashion Show Zurich", desc: "Annual fashion show showcasing Indian designers and traditional wear at Zurich cultural events.", emoji: "👗" },
              { name: "Saree & Ethnic Wear Rentals", desc: "Rent beautiful sarees, lehengas, and sherwanis for festivals, weddings, and events.", emoji: "🥻" },
              { name: "Online Indian Fashion", desc: "Order directly from Indian brands — shipping to Switzerland from Myntra, Nykaa Fashion, and others.", emoji: "🛍️" },
              { name: "Jewellery Exhibitions", desc: "Indian gold and silver jewellery exhibitions organised by the community — temple jewellery, kundan, and meenakari.", emoji: "💍" },
            ].map((f) => (
              <div key={f.name} className="card p-6">
                <span className="text-2xl mb-3 block">{f.emoji}</span>
                <h3 className="font-bold text-white mb-2">{f.name}</h3>
                <p className="text-sm text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="card p-10" style={{ borderColor: "rgba(249,115,22,0.2)" }}>
            <div className="text-4xl mb-4">🎭</div>
            <h2 className="text-3xl font-bold text-white mb-4">Submit Your Cultural Event</h2>
            <p className="text-slate-400 mb-8">
              Organising an Indian cultural event in Switzerland? Get it listed on IndiaSwiss for free and reach thousands of Indians.
            </p>
            <a href="mailto:hello@indiaswiss.ch?subject=Submit%20Cultural%20Event" className="btn btn-primary">
              Submit an Event <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
