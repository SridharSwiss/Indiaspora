"use client";

import React, { useState, useMemo } from "react";

type CityHub = "Zürich" | "Basel" | "Geneva" | "Lausanne" | "Bern" | "Zug";
type DurationFilter = "ALL" | "Half-Day" | "1 Day" | "Weekend (2D)" | "Multi-Day (3–5D)";
type TravelStyle = "ALL" | "Senior & Parents Friendly" | "Iconic Alps" | "Family & Kids" | "Scenic Rail & Boat";

interface OfficialLink {
  label: string;
  url: string;
  type: "ticket" | "info";
}

interface TourPlan {
  id: string;
  hub: CityHub;
  title: string;
  duration: Exclude<DurationFilter, "ALL">;
  styles: Exclude<TravelStyle, "ALL">[];
  transportMode: string;
  recommendedPass: string;
  travelTimeFromHub: string;
  seniorMobilityNote: string;
  indianFoodNote: string;
  steps: string[];
  officialLinks: OfficialLink[];
}

const TOUR_PLANS: TourPlan[] = [
  {
    id: "zh-titlis-lucerne",
    hub: "Zürich",
    title: "Mt. Titlis (3,020m) Eternal Snow & Lucerne Lakefront",
    duration: "1 Day",
    styles: ["Iconic Alps", "Senior & Parents Friendly", "Family & Kids"],
    transportMode: "SBB InterRegio + Titlis Xpress Gondola + Rotair Revolving Cable Car",
    recommendedPass: "Tell-Pass OR SBB Halbtax + Return Mountain Ticket",
    travelTimeFromHub: "1h 50m each way",
    seniorMobilityNote: "Elevator access at all cable car stations; keep pace slow at 3,020m altitude. The revolving Rotair cable car is fully flat-floor accessible.",
    indianFoodNote: "Hot Indian vegetarian buffet & masala chai available daily at Titlis Panorama Restaurant (summit) and Spice India / Kanchi in Lucerne.",
    steps: [
      "07:35 — Depart Zürich HB on IR to Lucerne, connect to Zentralbahn scenic train to Engelberg.",
      "09:30 — Board Titlis Xpress & the revolving Titlis Rotair to 3,020m. Visit the Glacier Cave, Cliff Walk, and DDLJ Bollywood photo point.",
      "12:30 — Warm Indian vegetarian lunch overlooking the glacier at Titlis Panorama Restaurant.",
      "15:00 — Return to Lucerne: stroll Chapel Bridge (Kapellbrücke), Lion Monument, and take a 1-hr yacht cruise on Lake Lucerne.",
    ],
    officialLinks: [
      { label: "Buy Mt. Titlis Tickets", url: "https://www.titlis.ch/en", type: "ticket" },
      { label: "SBB Timetable & Saver Pass", url: "https://www.sbb.ch/en", type: "ticket" },
      { label: "Lucerne Tourism Official", url: "https://www.luzern.com/en/", type: "info" },
    ],
  },
  {
    id: "zh-rheinfall-lindt",
    hub: "Zürich",
    title: "Rhine Falls (Schloss Laufen) & Lindt Home of Chocolate",
    duration: "Half-Day",
    styles: ["Senior & Parents Friendly", "Family & Kids"],
    transportMode: "S-Bahn (S9/S24) + Lake Zurich Boat (ZSG)",
    recommendedPass: "ZVV 9 O'Clock Day Pass (CHF 13.60 with Halbtax!)",
    travelTimeFromHub: "45m to Rhine Falls",
    seniorMobilityNote: "100% step-free if you arrive at 'Schloss Laufen am Rheinfall' station and use the panoramic glass elevator down to the falls platform.",
    indianFoodNote: "Pure vegetarian & South/North Indian restaurants right at Zürich Oerlikon / HB upon return.",
    steps: [
      "09:00 — Take direct S9/S24 to Schloss Laufen am Rheinfall. Use the glass lift down to the Belvedere spray platform.",
      "10:15 — Optional 15-minute Yellow Line basin boat cruise right up to the roaring falls.",
      "12:30 — Return to Zürich Bürkliplatz and board the ZSG lake steamer to Kilchberg.",
      "13:30 — Tour the 9-meter chocolate fountain & interactive exhibits at Lindt Home of Chocolate (book 3 weeks ahead!).",
    ],
    officialLinks: [
      { label: "Rhine Falls Boat Tickets", url: "https://rheinfall.ch/en/", type: "ticket" },
      { label: "Lindt Tickets (Book 3W Ahead!)", url: "https://www.lindt-home-of-chocolate.com/en/", type: "ticket" },
      { label: "Zürich Card Official", url: "https://www.zuerich.com/en/visit/zurich-card", type: "ticket" },
    ],
  },
  {
    id: "zh-rigi-golden",
    hub: "Zürich",
    title: "Mt. Rigi Golden Round Trip via Pilatus or Lake Lucerne",
    duration: "1 Day",
    styles: ["Iconic Alps", "Scenic Rail & Boat", "Senior & Parents Friendly"],
    transportMode: "SBB + Lake Lucerne Boat + Cogwheel Train + Cable Car",
    recommendedPass: "Tell-Pass (Rigi & Pilatus both 100% FREE) or Swiss Travel Pass",
    travelTimeFromHub: "50m to Lucerne",
    seniorMobilityNote: "Rigi is reached by cogwheel train from Arth-Goldau (seated, very gentle gradient). The boat from Vitznau is fully flat-access.",
    indianFoodNote: "Swiss rösti and vegetarian soups at Rigi Kulm Hotel Restaurant. Indian restaurant options back in Lucerne (Spice India, Himalaya).",
    steps: [
      "08:04 — Train from Zürich HB to Arth-Goldau (35 min), then Europe's oldest mountain railway cogwheel train to Rigi Kulm (1,798m).",
      "10:30 — Panoramic views over 13 Swiss lakes from Rigi summit. Visit Rigi Kulm Hotel terrace.",
      "13:00 — Descend to Vitznau and board historic Lake Lucerne paddle steamer to Lucerne.",
      "15:30 — Chapel Bridge, Lion Monument, and return express train to Zürich.",
    ],
    officialLinks: [
      { label: "Mt. Rigi Official Tickets", url: "https://www.rigi.ch/en", type: "ticket" },
      { label: "Tell-Pass Official", url: "https://www.tellpass.ch/en", type: "ticket" },
      { label: "Lake Lucerne Navigation", url: "https://www.lakelucerne.ch/en/", type: "info" },
    ],
  },
  {
    id: "bs-jungfraujoch",
    hub: "Basel",
    title: "Direct Basel → Jungfraujoch (Top of Europe) & Grindelwald First",
    duration: "1 Day",
    styles: ["Iconic Alps", "Scenic Rail & Boat"],
    transportMode: "Direct IC61 SBB + Eiger Express Tricable Gondola + Cogwheel",
    recommendedPass: "Swiss Half Fare Card (50% off) or Bernese Oberland Pass",
    travelTimeFromHub: "1h 55m to Interlaken Ost (Direct — no changes!)",
    seniorMobilityNote: "Take the modern Eiger Express from Grindelwald Terminal — level boarding, saves 47 minutes vs old route. Heated indoor viewing terraces at Jungfraujoch.",
    indianFoodNote: "Bollywood Restaurant at Jungfraujoch (3,454m) serves full Indian buffet at the highest railway station in Europe! Book ahead in summer.",
    steps: [
      "07:03 — Board direct IC61 from Basel SBB to Interlaken Ost (no changes, 1h 55m panoramic valley journey).",
      "09:05 — Connect at Grindelwald Terminal onto Eiger Express to Eigergletscher, then cogwheel through the Eiger tunnel to Jungfraujoch (3,454m).",
      "11:00 — Explore the Sphinx Observatory, Alpine Sensation tunnel, Ice Palace, and Snow Fun Park.",
      "14:30 — Descend via Lauterbrunnen Valley (72 waterfalls) before direct IC61 back to Basel.",
    ],
    officialLinks: [
      { label: "Jungfraujoch Official Tickets", url: "https://www.jungfrau.ch/en-gb/jungfraujoch-top-of-europe/", type: "ticket" },
      { label: "Basel Tourism & BaselCard", url: "https://www.basel.com/en", type: "info" },
      { label: "SBB Basel Timetable", url: "https://www.sbb.ch/en", type: "ticket" },
    ],
  },
  {
    id: "bs-titlis-zuersee",
    hub: "Basel",
    title: "Stanserhorn CabriO Open-Top Cable Car & Pilatus Golden Round Trip",
    duration: "Half-Day",
    styles: ["Iconic Alps", "Senior & Parents Friendly", "Scenic Rail & Boat"],
    transportMode: "SBB + Stanserhorn Funicular + CabriO Double-Decker Cable Car",
    recommendedPass: "SBB Halbtax (50% off Stanserhorn) or Tell-Pass (100% Free!)",
    travelTimeFromHub: "1h to Stans",
    seniorMobilityNote: "Stanserhorn has a historic funicular to mid-station, then the unique open-top CabriO cable car. No steep walking required at the summit.",
    indianFoodNote: "Restaurant Stanserhorn at the summit has vegetarian Swiss options. Indian dining in Lucerne (20 min away).",
    steps: [
      "09:00 — Train from Basel to Stans via Lucerne (approx 1h 15m total).",
      "10:30 — Historic funicular up to mid-station, then CabriO — the world's first open-top double-decker cable car.",
      "12:30 — Panoramic 360° views of the Alps and three lakes from 1,898m.",
      "14:30 — Return to Lucerne for the Pilatus boat-train Golden Round Trip or return to Basel.",
    ],
    officialLinks: [
      { label: "Stanserhorn CabriO Tickets", url: "https://www.stanserhorn.ch/en/", type: "ticket" },
      { label: "Pilatus Golden Round Trip", url: "https://www.pilatus.ch/en/discover/golden-round-trip", type: "ticket" },
    ],
  },
  {
    id: "ge-glacier3000-montreux",
    hub: "Geneva",
    title: "Glacier 3000 Peak Walk & Montreux Chillon Castle",
    duration: "1 Day",
    styles: ["Iconic Alps", "Family & Kids", "Scenic Rail & Boat"],
    transportMode: "IR90 Lakefront Train + MOB GoldenPass + Cable Car",
    recommendedPass: "Swiss Travel Pass or SBB Saver Day Pass + Glacier 3000 Ticket",
    travelTimeFromHub: "2h 15m via Montreux & Col du Pillon",
    seniorMobilityNote: "Flat viewing terrace and the Peak Walk suspension bridge at the summit (no steep hiking needed). Chillon Castle has cobblestones — better viewed from the lake boat for limited mobility.",
    indianFoodNote: "Indian dining options available in Montreux and Geneva Cornavin / Paquis neighbourhood. Pack thermos chai for the glacier.",
    steps: [
      "07:40 — InterRegio train along Lake Geneva shoreline to Montreux (50 min).",
      "09:00 — Scenic MOB GoldenPass train climb toward Les Diablerets / Col du Pillon.",
      "10:30 — Ascend to Glacier 3000: cross the Peak Walk by Tissot suspension bridge connecting two Alpine peaks at 3,000m.",
      "14:00 — Stop at Chillon Castle (lakeside walk from Montreux) or DDLJ Gstaad promenade before returning to Geneva.",
    ],
    officialLinks: [
      { label: "Glacier 3000 Tickets", url: "https://www.glacier3000.ch/en", type: "ticket" },
      { label: "GoldenPass Express Reservations", url: "https://www.gpx.swiss/en/", type: "ticket" },
      { label: "Geneva Tourism Official", url: "https://www.geneve.com/en/", type: "info" },
    ],
  },
  {
    id: "ge-cern-un-lake",
    hub: "Geneva",
    title: "CERN Science Gateway, UN Palais des Nations & Jet d'Eau",
    duration: "Half-Day",
    styles: ["Family & Kids", "Senior & Parents Friendly"],
    transportMode: "TPG Tram 18 + Yellow Mouettes Water Taxi",
    recommendedPass: "Geneva Transport Card (free for hotel guests!)",
    travelTimeFromHub: "25m to CERN by tram",
    seniorMobilityNote: "CERN and UN are fully wheelchair accessible with dedicated entrances. Jet d'Eau is accessible from the flat Rive waterfront promenade.",
    indianFoodNote: "Several Indian restaurants in the Paquis district near Cornavin station (Namaste India, Taj Mahal Geneva).",
    steps: [
      "09:00 — Tram 18 from Cornavin to CERN Science Gateway (free entry, book timed slot at visit.cern).",
      "11:00 — Bus/tram to Palais des Nations (UN guided tours, CHF 15; book 1–2 weeks ahead).",
      "13:30 — Walk to Jet d'Eau (140m water jet into Lake Geneva) and Old Town flower clock (L'horloge fleurie).",
      "15:00 — Yellow Mouettes water taxi across to Rive for ice cream at the lakefront.",
    ],
    officialLinks: [
      { label: "CERN Visit Booking", url: "https://visit.cern/", type: "ticket" },
      { label: "UN Geneva Visit Info", url: "https://www.ungeneva.org/en/visit", type: "info" },
      { label: "Geneva Tourism Official", url: "https://www.geneve.com/en/", type: "info" },
    ],
  },
  {
    id: "vd-gruyeres-cailler",
    hub: "Lausanne",
    title: "Maison Cailler Chocolate Factory, Gruyères Castle & Lavaux Vineyards",
    duration: "1 Day",
    styles: ["Senior & Parents Friendly", "Family & Kids"],
    transportMode: "SBB Direct RegioExpress to Broc-Fabrique + PostBus",
    recommendedPass: "SBB Half-Fare Day Ticket",
    travelTimeFromHub: "1h 10m from Lausanne",
    seniorMobilityNote: "Maison Cailler is fully wheelchair/elevator accessible throughout. Take the petit train in Gruyères village to avoid the steep hill climb.",
    indianFoodNote: "All Cailler chocolate tastings are vegetarian (egg-free options clearly labeled). Swiss cheese fondue at La Maison du Gruyère has vegetarian variants.",
    steps: [
      "09:00 — Direct RegioExpress from Lausanne through UNESCO Lavaux vineyard terraces to Broc-Fabrique.",
      "10:15 — Interactive 90-min tour and unlimited chocolate tasting at Maison Cailler (book online).",
      "13:00 — PostBus to La Maison du Gruyère show dairy (free entry) & medieval Gruyères hilltop town.",
      "16:30 — Return to Lausanne Ouchy for sunset stroll past The Olympic Museum.",
    ],
    officialLinks: [
      { label: "Book Maison Cailler Timed Entry", url: "https://cailler.ch/en/maison-cailler", type: "ticket" },
      { label: "Château de Gruyères", url: "https://www.chateau-gruyeres.ch/en/", type: "info" },
      { label: "Lausanne Tourism Official", url: "https://www.lausanne-tourisme.ch/en/", type: "info" },
    ],
  },
  {
    id: "vd-rochers-naye",
    hub: "Lausanne",
    title: "Rochers-de-Naye (2,042m) & Montreux Riviera",
    duration: "Half-Day",
    styles: ["Iconic Alps", "Senior & Parents Friendly", "Scenic Rail & Boat"],
    transportMode: "SBB + MOB Cogwheel Train from Montreux",
    recommendedPass: "Swiss Travel Pass (Rochers-de-Naye included) or SBB Halbtax",
    travelTimeFromHub: "35m Lausanne → Montreux",
    seniorMobilityNote: "Fully seated cogwheel train from Montreux station to the summit — no walking required. Heated summit restaurant with panoramic terrace.",
    indianFoodNote: "Bring packed Indian snacks for the summit. Montreux has the iconic Freddie Mercury statue and several cafés for lunch.",
    steps: [
      "09:30 — Train from Lausanne to Montreux (35 min).",
      "10:15 — Board the MOB cogwheel train up to Rochers-de-Naye (2,042m) for panoramic Lake Geneva views.",
      "12:30 — Lunch at the summit restaurant with views across to the French Alps.",
      "14:30 — Return to Montreux: Freddie Mercury statue, Chillon Castle stroll, lakefront promenade.",
    ],
    officialLinks: [
      { label: "Rochers-de-Naye Tickets (MOB)", url: "https://www.mob.ch/en/", type: "ticket" },
      { label: "Château de Chillon Official", url: "https://www.chillon.ch/en/", type: "ticket" },
    ],
  },
  {
    id: "be-oeschinensee-blausee",
    hub: "Bern",
    title: "Oeschinensee Alpine Lake (Electric Shuttle) & Blausee",
    duration: "1 Day",
    styles: ["Senior & Parents Friendly", "Iconic Alps", "Family & Kids"],
    transportMode: "BLS Lötschberger Train + Gondola + Electric Shuttle Cart",
    recommendedPass: "BLS Day Pass or SBB Half-Fare",
    travelTimeFromHub: "55m to Kandersteg (direct!)",
    seniorMobilityNote: "From the gondola top station, an electric shuttle cart runs every 30 mins directly to the Oeschinensee lakeshore — no 25-minute walk needed for seniors.",
    indianFoodNote: "Pack hot thermos chai & theplas for the world's most scenic lakeside picnic at Oeschinensee. PostBus café at Kandersteg station for hot drinks.",
    steps: [
      "08:39 — Direct Lötschberger train from Bern HB to Kandersteg (55 mins, panoramic Kander Valley).",
      "09:45 — Gondola up and electric shuttle to the turquoise UNESCO-listed Oeschinensee lake.",
      "12:30 — Picnic or restaurant lunch at the lake with backdrop of 3,000m+ cliffs.",
      "14:00 — PostBus (15 min) to Blausee Nature Park for crystal-clear lake and flat forest walk.",
    ],
    officialLinks: [
      { label: "Oeschinensee Gondola Tickets", url: "https://www.oeschinensee.ch/en/", type: "ticket" },
      { label: "Blausee Official Tickets", url: "https://www.blausee.ch/en/", type: "ticket" },
      { label: "Bern Welcome Official", url: "https://www.bern.com/en", type: "info" },
    ],
  },
  {
    id: "be-schilthorn-007",
    hub: "Bern",
    title: "Schilthorn Piz Gloria (007 Bond Villain Lair) & Mürren Thrill Walk",
    duration: "Weekend (2D)",
    styles: ["Iconic Alps", "Scenic Rail & Boat"],
    transportMode: "BLS Lötschberger + Lauterbrunnen Cable Car + Mürren Gondola",
    recommendedPass: "Bernese Oberland Pass or Swiss Half Fare Card",
    travelTimeFromHub: "1h 10m to Lauterbrunnen",
    seniorMobilityNote: "The car-free village of Mürren is reached by cable car. Schilthorn has a fully enclosed revolving restaurant. The Thrill Walk cliff path requires good mobility — skip if needed.",
    indianFoodNote: "Piz Gloria restaurant at the summit has Swiss-international menu. Indian restaurant options in Interlaken for dinner (Taj Mahal Interlaken).",
    steps: [
      "Day 1 — 09:00: Bern → Spiez → Lauterbrunnen (Staubbach Falls, 72 waterfalls valley). Afternoon: Wengen for a sunset mountain walk.",
      "Day 2 — 09:00: Cable car Grütschalp → Mürren (car-free Alpine village). Ride up to Schilthorn Piz Gloria (2,970m): revolving 360° restaurant, James Bond World exhibition.",
      "14:00: Return via Mürren Thrill Walk cliff path (or take the gondola for those preferring no heights).",
      "17:00: Return to Lauterbrunnen → Bern direct BLS train.",
    ],
    officialLinks: [
      { label: "Schilthorn Piz Gloria Tickets", url: "https://www.schilthorn.ch/en/", type: "ticket" },
      { label: "Jungfrau Region Official", url: "https://www.jungfrau.ch/en-gb/", type: "info" },
    ],
  },
  {
    id: "zg-stoos-rigi",
    hub: "Zug",
    title: "World's Steepest Funicular (Stoos) & Queen of Mountains (Mt. Rigi)",
    duration: "1 Day",
    styles: ["Iconic Alps", "Senior & Parents Friendly", "Scenic Rail & Boat"],
    transportMode: "SBB + Stoos Funicular (110% gradient) + Rigi Cogwheel + Lake Boat",
    recommendedPass: "Tell-Pass (Both Stoos & Rigi 100% FREE!) or Swiss Travel Pass",
    travelTimeFromHub: "25m to Schwyz / 15m to Arth-Goldau",
    seniorMobilityNote: "The Stoosbahn cylindrical cabins automatically rotate to keep the floor 100% horizontal throughout the 110% gradient ascent. No standing required.",
    indianFoodNote: "Vegetarian Swiss rösti, soups and Älplermagronen at Rigi Kulm Hotel Restaurant. Indian restaurants at Zug Metalli (Spice & Rice) upon return.",
    steps: [
      "08:30 — Train from Zug to Schwyz (15 min), PostBus to Stoosbahn valley station.",
      "09:00 — Ride the world's steepest funicular (110% gradient) to car-free Stoos village.",
      "10:00 — Optional chairlift to Fronalpstock for panoramic views over 10 Swiss lakes.",
      "13:30 — Train to Arth-Goldau (15 min) and Europe's oldest mountain cogwheel railway up to Rigi Kulm (1,798m).",
      "16:30 — Descend to Vitznau and take the historic Lake Lucerne paddle steamer toward Lucerne or return to Zug.",
    ],
    officialLinks: [
      { label: "Stoosbahnen Official Tickets", url: "https://www.stoos.ch/en", type: "ticket" },
      { label: "Mt. Rigi Official Tickets", url: "https://www.rigi.ch/en", type: "ticket" },
      { label: "Tell-Pass Official", url: "https://www.tellpass.ch/en", type: "ticket" },
    ],
  },
  {
    id: "zg-gotthard-ticino",
    hub: "Zug",
    title: "Gotthard Panorama Express to Lugano & Bellinzona (UNESCO Castles)",
    duration: "Weekend (2D)",
    styles: ["Scenic Rail & Boat", "Family & Kids"],
    transportMode: "Gotthard Panorama Express (Lake Boat + Panoramic Train)",
    recommendedPass: "Swiss Travel Pass (100% free) or SBB Day Pass + Reservation (CHF 20)",
    travelTimeFromHub: "1h 25m direct to Lugano via Gotthard Base Tunnel",
    seniorMobilityNote: "The Gotthard Panorama Express is fully accessible with seats reserved. Lugano lakefront and Bellinzona Old Town are flat and wheelchair-friendly.",
    indianFoodNote: "Indian restaurant Bombay in Lugano. Italian-Swiss cuisine is very vegetarian-friendly (pizza, pasta, risotto) throughout Ticino.",
    steps: [
      "Day 1 — 09:00: Fast SBB via Gotthard Base Tunnel to Lugano (1h 25m). Lunch on Lago di Lugano and visit Monte San Salvatore or Parco Ciani.",
      "Day 1 — 15:00: Train to Bellinzona for three UNESCO-listed medieval castles (Castelgrande free entry).",
      "Day 2 — 10:00: Scenic Gotthard Panorama Express return: Lugano → Locarno by boat, then panoramic train through Gotthard mountain landscape back to Zug.",
    ],
    officialLinks: [
      { label: "Gotthard Panorama Express Reservations", url: "https://www.sbb.ch/en", type: "ticket" },
      { label: "Ticino Tourism Official", url: "https://www.ticino.ch/en/", type: "info" },
      { label: "Lugano Tourism", url: "https://www.luganoturismo.ch/en/", type: "info" },
    ],
  },
];

const durationColors: Record<string, string> = {
  "Half-Day": "bg-amber-500/15 text-amber-400",
  "1 Day": "bg-orange-500/15 text-orange-400",
  "Weekend (2D)": "bg-purple-500/15 text-purple-400",
  "Multi-Day (3–5D)": "bg-rose-500/15 text-rose-400",
};

export default function SwissTourismExplorer() {
  const [selectedHub, setSelectedHub] = useState<CityHub>("Zürich");
  const [selectedDuration, setSelectedDuration] = useState<DurationFilter>("ALL");
  const [selectedStyle, setSelectedStyle] = useState<TravelStyle>("ALL");

  const filteredPlans = useMemo(() => {
    return TOUR_PLANS.filter((plan) => {
      const hubMatch = plan.hub === selectedHub;
      const durationMatch = selectedDuration === "ALL" || plan.duration === selectedDuration;
      const styleMatch = selectedStyle === "ALL" || plan.styles.includes(selectedStyle as Exclude<TravelStyle, "ALL">);
      return hubMatch && durationMatch && styleMatch;
    });
  }, [selectedHub, selectedDuration, selectedStyle]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      {/* Header */}
      <div className="mb-8 glass rounded-2xl p-6 md:p-8 border border-orange-500/20">
        <span className="inline-block rounded-full bg-orange-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-400">
          Swiss-Indian Travel & Hosting Planner
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: "var(--text)" }}>
          Explore Switzerland from Your Hub City
        </h2>
        <p className="mt-2 max-w-3xl text-sm md:text-base" style={{ color: "var(--text-2)" }}>
          Curated half-day, full-day, and weekend itineraries — with senior/parents mobility notes, Indian vegetarian food stops, pass recommendations, and direct official ticket links.
        </p>

        {/* Quick Official Portals Bar */}
        <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold">
          {[
            { label: "🚆 SBB Official Tickets", url: "https://www.sbb.ch/en" },
            { label: "🇨🇭 MySwitzerland Official", url: "https://www.myswitzerland.com/en-ch/" },
            { label: "🎫 Swiss Travel Pass", url: "https://www.swisstravelsystem.com/en/" },
            { label: "☀️ MeteoSwiss Webcams", url: "https://www.meteoswiss.admin.ch/" },
          ].map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
              className="glass rounded-lg border px-3 py-1.5 transition hover:border-orange-500/50"
              style={{ color: "var(--text-2)", borderColor: "var(--border)" }}>
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>

      {/* Step 1: Hub City */}
      <div className="mb-6">
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider" style={{ color: "var(--text-3)" }}>
          1. Choose Your Departure Hub City
        </label>
        <div className="flex flex-wrap gap-2">
          {(["Zürich", "Basel", "Geneva", "Lausanne", "Bern", "Zug"] as CityHub[]).map((city) => (
            <button key={city} onClick={() => setSelectedHub(city)}
              className={`rounded-xl px-4 py-2.5 text-sm font-bold transition-all ${
                selectedHub === city ? "bg-orange-500 text-white shadow-sm" : "glass border text-sm"
              }`}
              style={selectedHub === city ? {} : { color: "var(--text-2)" }}>
              📍 {city}
            </button>
          ))}
        </div>
      </div>

      {/* Steps 2 & 3: Filters */}
      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider" style={{ color: "var(--text-3)" }}>
            2. Trip Duration
          </label>
          <div className="flex flex-wrap gap-2">
            {(["ALL", "Half-Day", "1 Day", "Weekend (2D)", "Multi-Day (3–5D)"] as DurationFilter[]).map((dur) => (
              <button key={dur} onClick={() => setSelectedDuration(dur)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                  selectedDuration === dur ? "bg-orange-500 text-white" : "glass border"
                }`}
                style={selectedDuration === dur ? {} : { color: "var(--text-2)" }}>
                {dur === "ALL" ? "All Durations" : dur}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wider" style={{ color: "var(--text-3)" }}>
            3. Travel Style & Mobility
          </label>
          <div className="flex flex-wrap gap-2">
            {(["ALL", "Senior & Parents Friendly", "Iconic Alps", "Family & Kids", "Scenic Rail & Boat"] as TravelStyle[]).map((style) => (
              <button key={style} onClick={() => setSelectedStyle(style)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                  selectedStyle === style ? "bg-teal-600 text-white" : "glass border"
                }`}
                style={selectedStyle === style ? {} : { color: "var(--text-2)" }}>
                {style === "ALL" ? "All Styles" : style}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="mb-4 text-sm" style={{ color: "var(--text-3)" }}>
        {filteredPlans.length} itinerar{filteredPlans.length === 1 ? "y" : "ies"} from <strong style={{ color: "var(--text)" }}>{selectedHub}</strong>
        {selectedDuration !== "ALL" ? ` · ${selectedDuration}` : ""}
        {selectedStyle !== "ALL" ? ` · ${selectedStyle}` : ""}
      </p>

      {/* Itinerary Cards */}
      <div className="grid gap-6">
        {filteredPlans.length === 0 && (
          <div className="glass rounded-xl p-8 text-center" style={{ color: "var(--text-2)" }}>
            No itineraries match your filters. Try selecting "All Durations" or "All Styles".
          </div>
        )}
        {filteredPlans.map((plan) => (
          <div key={plan.id} className="glass rounded-2xl p-6 card-hover">
            {/* Card Header */}
            <div className="flex flex-wrap items-start justify-between gap-3 border-b pb-4 mb-4" style={{ borderColor: "var(--border)" }}>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="rounded-md bg-orange-500/15 px-2.5 py-1 text-xs font-bold text-orange-400">
                    From {plan.hub} · {plan.travelTimeFromHub}
                  </span>
                  <span className={`rounded-md px-2.5 py-1 text-xs font-bold ${durationColors[plan.duration] ?? ""}`}>
                    ⏱️ {plan.duration}
                  </span>
                  {plan.styles.map((s) => (
                    <span key={s} className="rounded-md bg-teal-500/10 px-2.5 py-1 text-xs font-semibold text-teal-400">
                      {s}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold" style={{ color: "var(--text)" }}>{plan.title}</h3>
              </div>
              <div className="glass rounded-xl border border-amber-500/20 bg-amber-500/5 px-3 py-2 text-xs shrink-0">
                <div className="font-bold text-amber-400">🎟️ Best Pass:</div>
                <div style={{ color: "var(--text-2)" }}>{plan.recommendedPass}</div>
              </div>
            </div>

            {/* Steps + Callouts */}
            <div className="grid gap-5 md:grid-cols-12 mb-4">
              <div className="md:col-span-7">
                <h4 className="mb-2 text-xs font-bold uppercase tracking-wider" style={{ color: "var(--text-3)" }}>
                  Step-by-Step Timetable
                </h4>
                <ol className="space-y-2 text-sm" style={{ color: "var(--text-2)" }}>
                  {plan.steps.map((step, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="font-bold text-orange-400 shrink-0">{idx + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="space-y-3 md:col-span-5">
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 text-xs">
                  <div className="font-bold text-emerald-400 mb-1">👵 Mobility & Parents Note:</div>
                  <p style={{ color: "var(--text-2)" }}>{plan.seniorMobilityNote}</p>
                </div>
                <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-3.5 text-xs">
                  <div className="font-bold text-orange-400 mb-1">🍛 Indian Veg / Chai:</div>
                  <p style={{ color: "var(--text-2)" }}>{plan.indianFoodNote}</p>
                </div>
              </div>
            </div>

            {/* Footer: transport + links */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-4" style={{ borderColor: "var(--border)" }}>
              <span className="text-xs" style={{ color: "var(--text-3)" }}>
                🚆 <strong>{plan.transportMode}</strong>
              </span>
              <div className="flex flex-wrap gap-2">
                {plan.officialLinks.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                    className={`rounded-lg px-3.5 py-2 text-xs font-bold transition-all ${
                      link.type === "ticket"
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "glass border"
                    }`}
                    style={link.type === "ticket" ? {} : { color: "var(--text-2)" }}>
                    {link.type === "ticket" ? "🎟️ " : "ℹ️ "}{link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
