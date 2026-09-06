export const revalidate = 0;

import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { UPCOMING_EVENTS } from "@/lib/data";
import { createAdminClient } from "@/lib/supabase/admin";

const MONTHS: Record<string, number> = {
  jan: 0, january: 0, feb: 1, february: 1, mar: 2, march: 2,
  apr: 3, april: 3, may: 4, jun: 5, june: 5, jul: 6, july: 6,
  aug: 7, august: 7, sep: 8, september: 8, oct: 9, october: 9,
  nov: 10, november: 10, dec: 11, december: 11,
};

function parseEventDate(dateStr: string): Date {
  if (!dateStr) return new Date(9999, 0, 1);
  const s = dateStr.trim();

  // "15 Oct 2026" or "15 October 2026"
  let m = s.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);
  if (m) {
    const mo = MONTHS[m[2].toLowerCase()];
    if (mo !== undefined) return new Date(+m[3], mo, +m[1]);
  }

  // "Oct 15, 2026" or "October 15, 2026"
  m = s.match(/^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/);
  if (m) {
    const mo = MONTHS[m[1].toLowerCase()];
    if (mo !== undefined) return new Date(+m[3], mo, +m[2]);
  }

  // "Oct 2026" or "October 2026" — no day, use 1st
  m = s.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (m) {
    const mo = MONTHS[m[1].toLowerCase()];
    if (mo !== undefined) return new Date(+m[2], mo, 1);
  }

  // ISO "2026-10-15"
  m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (m) return new Date(+m[1], +m[2] - 1, +m[3]);

  // "15/10/2026" or "15.10.2026"
  m = s.match(/^(\d{1,2})[./](\d{1,2})[./](\d{4})$/);
  if (m) return new Date(+m[3], +m[2] - 1, +m[1]);

  return new Date(9999, 0, 1);
}

const monthlyCalendar = [
  { month: "January", events: ["TASC Pongal Celebration (Tamil community, Zurich & Geneva)", "Lohri Night (Punjabi community, Zurich & Bern)", "Makar Sankranti / Uttarayan kite festival puja", "Gujarati Samaj New Year celebrations"] },
  { month: "February", events: ["Valentine's Bollywood Night (Zurich & Basel)", "Vasant Panchami / Saraswati Puja", "IAGZ winter social mixer"] },
  { month: "March", events: ["IAGZ Holi Rang Barse (Landiwiese, Zurich — late March)", "Holi ONE Color Festival (Zurich, public event)", "Ugadi / Gudi Padwa / Telugu & Maharashtrian New Year", "Ram Navami puja"] },
  { month: "April", events: ["Baisakhi Bhangra Night (Sikh community, Zurich & Basel)", "Tamil New Year / Puthandu (TASC, Geneva)", "Hanuman Jayanti puja", "Spring social events (various associations)"] },
  { month: "May", events: ["InBa India Basel Festival (Theater Basel, May–Jun)", "Buddha Purnima / Vesak", "SICC Spring Business Networking", "Eid celebrations (Indian Muslim community)"] },
  { month: "June", events: ["ISKCON Rath Yatra (Zurich city streets)", "InBa India Basel Festival (Theater Basel, closing)", "Vat Savitri puja", "Summer sports tournament (ISSC badminton, Wetzikon)"] },
  { month: "July", events: ["Guru Purnima (ISKCON & temple communities)", "Bollywood Dance Workshop (Zurich & Geneva)", "Swiss-India Business Forum (SICC networking)", "Kargil Vijay Diwas community gathering"] },
  { month: "August", events: ["Indian Independence Day flag hoisting (Embassy of India, Berne, Aug 15)", "Onam Sadya celebrations (Kerala community, Zurich & Geneva)", "Janmashtami puja and cultural program", "Summer food festival and pop-ups"] },
  { month: "September", events: ["Ganesh Chaturthi utsav (Zurich & Basel)", "Swiss India Business Summit (Kursaal Bern)", "IAGZ Navratri Raas Garba (late September)", "TeluguSwiss Annual Cultural Evening"] },
  { month: "October", events: ["IAGZ Navratri Garba Night (Zurich, 9–10 nights)", "SwissPuja Durga Puja (Schwerzisaal, Langnau am Albis)", "PrangaN@Swiss Durga Pujo (Lausanne)", "Dussehra / Vijaya Dashami celebrations", "Karwa Chauth community event"] },
  { month: "November", events: ["IAGZ Diwali Gala (Mattenhofsaal, Zurich — late Nov)", "ICAS Diwali Night (Basel)", "Diwali events (Geneva, Bern, Lausanne)", "Gujarati Samaj Annakut", "Bhai Dooj & Chhath Puja gatherings"] },
  { month: "December", events: ["Year-end community gala (IAGZ)", "Margazhi Utsav / India Fest (Carnatic music, Zurich)", "Advent Indian bazaar and food sale", "Christmas-Bollywood fusion social", "New Year's Eve Indian community party"] },
];

async function getDbEvents() {
  try {
    const supabase = createAdminClient();
    const { data } = await supabase
      .from("events")
      .select("*")
      .eq("event_status", "approved")
      .order("created_at", { ascending: false });
    return data ?? [];
  } catch {
    return [];
  }
}

type EventItem = {
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  organiser?: string;
  color: string;
  url: string;
  image: string;
  _parsed: Date;
};

function EventCard({ event, muted }: { event: EventItem; muted?: boolean }) {
  const Wrapper = event.url ? "a" : "div";
  const wrapperProps = event.url ? { href: event.url, target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Wrapper {...wrapperProps} className={`glass rounded-2xl overflow-hidden card-hover block group${muted ? " opacity-55" : ""}`} style={{ textDecoration: "none" }}>
      {event.image && (
        <div className="relative h-44 overflow-hidden">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute top-3 left-3">
            <span className="text-xs px-2 py-1 rounded-full font-medium text-white" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}>{event.category}</span>
          </div>
        </div>
      )}
      <div className="p-5 flex flex-col gap-3">
        {/* Title — always prominent */}
        <h3 className="font-bold text-base leading-snug group-hover:text-violet-400 transition-colors" style={{ color: "var(--text)" }}>
          {event.title}
        </h3>

        {/* Date — visually dominant */}
        {event.date && (
          <div className="flex items-center gap-2">
            <span className={`w-2 h-full min-h-[2rem] rounded-full ${event.color || "bg-violet-500"} shrink-0`} style={{ width: "3px" }} />
            <p className="text-sm font-semibold" style={{ color: "var(--accent, #a855f7)" }}>📅 {event.date}</p>
          </div>
        )}

        {/* Location */}
        {event.location && (
          <p className="text-xs" style={{ color: "var(--text-2)" }}>📍 {event.location}</p>
        )}

        {/* Description */}
        {event.description && (
          <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>{event.description}</p>
        )}

        {/* Footer: organiser + URL always visible */}
        <div className="flex items-center justify-between pt-1 border-t" style={{ borderColor: "var(--border, rgba(255,255,255,0.08))" }}>
          {event.organiser
            ? <span className="text-xs font-medium" style={{ color: "var(--text-2)" }}>by {event.organiser}</span>
            : <span />}
          {event.url && (
            <span className="text-xs font-semibold text-violet-400 group-hover:text-violet-300 transition-colors flex items-center gap-1">
              Visit event ↗
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default async function EventsPage() {
  const dbEvents = await getDbEvents();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const allEvents: EventItem[] = [
    ...dbEvents.map((e: Record<string, string>) => ({
      title: e.title,
      date: e.date,
      location: e.location,
      category: e.category,
      description: e.description,
      organiser: e.organiser,
      color: e.color ?? "bg-violet-500",
      url: e.url ?? "",
      image: e.image_url ?? e.image ?? "",
      _parsed: parseEventDate(e.date),
    })),
    ...UPCOMING_EVENTS.map((e) => ({ ...e, image: (e as { image?: string }).image ?? "", _parsed: parseEventDate(e.date) })),
  ];

  const upcomingEvents = allEvents.filter(e => e._parsed >= today).sort((a, b) => a._parsed.getTime() - b._parsed.getTime());
  const pastEvents = allEvents.filter(e => e._parsed < today).sort((a, b) => b._parsed.getTime() - a._parsed.getTime());

  return (
    <div>
      <PageHeader
        title="Indian Events in Switzerland 2026"
        subtitle="From Diwali melas and Garba nights to business summits and food festivals — never miss an event in the Swiss-Indian calendar."
        badge="100+ Events/Year"
        gradient="from-violet-500 to-purple-600"
        breadcrumbs={[{ label: "Events" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Upcoming */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Upcoming Events</h2>
          <p className="mb-8" style={{ color: "var(--text-2)" }}>Next events in the Swiss-Indian community calendar</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {upcomingEvents.map((event) => <EventCard key={event.title + event.date} event={event} />)}
            {upcomingEvents.length === 0 && (
              <p className="col-span-3 text-sm" style={{ color: "var(--text-2)" }}>No upcoming events listed yet. Check back soon.</p>
            )}
          </div>
        </section>

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Past Events</h2>
            <p className="mb-8" style={{ color: "var(--text-2)" }}>Events that have already taken place</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pastEvents.map((event) => <EventCard key={event.title + event.date} event={event} muted />)}
            </div>
          </section>
        )}

        {/* Calendar */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Annual Festival Calendar</h2>
          <p className="mb-8" style={{ color: "var(--text-2)" }}>Key celebrations through the year for the Swiss-Indian community</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {monthlyCalendar.map((m) => (
              <div key={m.month} className="glass rounded-2xl p-4">
                <h3 className="font-semibold text-violet-400 mb-2 text-sm">{m.month}</h3>
                <ul className="space-y-1">
                  {m.events.map((e) => (
                    <li key={e} className="text-xs flex items-center gap-2" style={{ color: "var(--text-2)" }}>
                      <span className="w-1 h-1 rounded-full bg-violet-400 shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Stay Informed */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>How to Stay Informed</h2>
          <p className="mb-8" style={{ color: "var(--text-2)" }}>Never miss an event — the Swiss-Indian community is active but spread across channels</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "IAGZ Newsletter & WhatsApp", body: "The Indian Association of Greater Zurich (iagz.ch) sends a monthly newsletter and maintains WhatsApp groups. Instagram: @iagzurich · Facebook: IA GZ" },
              { title: "TASC Tamil Community", body: "Tamil Association of Switzerland (tasc.ch) publishes an events calendar for Tamil events across German- and French-speaking Switzerland." },
              { title: "TeluguSwiss", body: "Telugu Swiss Association (teluguswiss.ch) announces Ugadi, cultural evenings, and community events. Facebook: TeluguSwiss Association." },
              { title: "SwissPuja Bengali Community", body: "SwissPuja (swisspuja.org) runs Switzerland's largest Durga Puja. Instagram: @swisspuja · Facebook: Swisspuja - সুইসপূজা" },
              { title: "Indian Association Geneva", body: "IAG (indianassociationgeneva.com) — founded 1947, 500+ members in Lake Geneva region. Instagram: @indian_association_of_geneva" },
              { title: "SICC Business Events", body: "Swiss Indian Chamber of Commerce (sicc.ch) publishes a business events calendar including the annual Swiss India Business Summit and networking dinners." },
              { title: "Indian Embassy Berne Events", body: "The Embassy of India in Berne (indembassybern.gov.in) hosts receptions for Independence Day, Republic Day, and Gandhi Jayanti — open to all Indian nationals." },
              { title: "YUVA EPFL / Keliswiss / SMA Basel", body: "YUVA (EPFL): yuvaali@epfl.ch for Diwali event. Keliswiss (keliswiss.org): Kalamela arts festival. SMA Basel (smabasel.ch): Onam / Ponnonam celebration." },
              { title: "Swiss Telugu NRI Forum (STNRI)", body: "STNRI (swisstelugunri.com) is Switzerland's Telugu NRI community platform — connecting Telugu professionals, families and students across Swiss cities with cultural events, networking, and community support." },
            ].map((item) => (
              <div key={item.title} className="glass rounded-2xl p-5">
                <h3 className="text-sm font-semibold text-violet-400 mb-2">{item.title}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Submit CTA */}
        <div className="glass rounded-2xl p-8 text-center">
          <div className="text-4xl mb-4">📅</div>
          <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>Submit Your Event</h3>
          <p className="mb-6" style={{ color: "var(--text-2)" }}>
            Organising an Indian community event in Switzerland? List it here to reach 24,500+ Indians across the country.
            Submissions are reviewed by our AI moderation system and go live within 12 hours.
          </p>
          <Link
            href="/events/submit"
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 font-semibold text-white hover:from-violet-600 hover:to-purple-700 transition-all"
          >
            Submit an Event →
          </Link>
        </div>
      </div>
    </div>
  );
}
