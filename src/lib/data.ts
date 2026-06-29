export const NAV_ITEMS = [
  {
    label: "Community",
    href: "/community",
    children: [
      { label: "Associations & Clubs", href: "/community/associations" },
      { label: "Temples & Spiritual", href: "/community/spiritual" },
      { label: "Women's Network", href: "/community/women" },
      { label: "Students", href: "/community/students" },
    ],
  },
  {
    label: "Living in Switzerland",
    href: "/living",
    children: [
      { label: "Welcome Guide", href: "/living/welcome" },
      { label: "Housing & Real Estate", href: "/living/housing" },
      { label: "Healthcare", href: "/living/healthcare" },
      { label: "Education & Schools", href: "/living/education" },
      { label: "Banking & Finance", href: "/living/banking" },
      { label: "Transport", href: "/living/transport" },
      { label: "Legal & Immigration", href: "/living/legal" },
      { label: "Language Learning", href: "/living/language" },
    ],
  },
  {
    label: "Food & Dining",
    href: "/food",
    children: [
      { label: "Indian Restaurants", href: "/food/restaurants" },
      { label: "Grocery & Spices", href: "/food/grocery" },
      { label: "Catering & Home Chefs", href: "/food/catering" },
      { label: "Cooking Classes", href: "/food/cooking" },
    ],
  },
  {
    label: "Business & Career",
    href: "/business",
    children: [
      { label: "Networking & Chambers", href: "/business/networking" },
      { label: "Jobs & Recruitment", href: "/business/jobs" },
      { label: "Startups", href: "/business/startups" },
      { label: "Professional Services", href: "/business/services" },
    ],
  },
  {
    label: "Culture & Arts",
    href: "/culture",
    children: [
      { label: "Festivals & Events", href: "/culture/festivals" },
      { label: "Music & Dance", href: "/culture/arts" },
      { label: "Fashion & Boutiques", href: "/culture/fashion" },
      { label: "Cinema & Entertainment", href: "/culture/cinema" },
    ],
  },
  {
    label: "City Guides",
    href: "/cities",
    children: [
      { label: "Zurich", href: "/cities/zurich" },
      { label: "Geneva", href: "/cities/geneva" },
      { label: "Basel", href: "/cities/basel" },
      { label: "Bern", href: "/cities/bern" },
      { label: "Lausanne", href: "/cities/lausanne" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Resources", href: "/resources" },
];

export const STATS = [
  { value: "25,000+", label: "Indians in Switzerland", icon: "Users" },
  { value: "150+", label: "Community Associations", icon: "Building2" },
  { value: "26", label: "Cantons Covered", icon: "MapPin" },
  { value: "500+", label: "Businesses Listed", icon: "Briefcase" },
];

export const FEATURED_CATEGORIES = [
  {
    id: "community",
    title: "Community",
    description: "Connect with 25,000+ Indians across Switzerland through associations, cultural groups, and social networks",
    icon: "Users",
    color: "from-orange-500 to-red-500",
    count: "150+ groups",
    href: "/community",
    items: ["IAGZ – Indian Association of Greater Zurich", "SICC – Swiss Indian Chamber of Commerce", "TeluguSwiss Association (teluguswiss.org)", "Indian Student Association ETH Zurich (InSAZ)", "Gujarati Samaj Switzerland", "Maharashtra Mandal Switzerland", "PrangaN@Swiss – Durga Puja Lausanne", "Hindu Swayamsevak Sangh Switzerland"],
  },
  {
    id: "living",
    title: "Living in Switzerland",
    description: "Everything you need to settle in — permits, housing, schools, healthcare, banking, and daily life essentials",
    icon: "Home",
    color: "from-blue-500 to-indigo-600",
    count: "50+ guides",
    href: "/living",
    items: ["Residence Permits (B, C, L)", "Finding Accommodation", "Health Insurance (KVG/LAMal)", "Swiss Public Transport", "Registering at Gemeinde", "Swiss Banking & Finance", "German / French Language Classes", "Integration Courses"],
  },
  {
    id: "food",
    title: "Food & Dining",
    description: "Discover the best Indian restaurants, grocery stores, caterers, and home chefs across Switzerland",
    icon: "UtensilsCrossed",
    color: "from-amber-500 to-orange-500",
    count: "200+ listings",
    href: "/food",
    items: ["Bairavi Restaurant Zurich", "Rajasthan Restaurant Zurich", "Indigo Restaurant Geneva", "Art of Food (Grocery)", "Aggarwals Indian Grocery", "India Supermarkt (Online)", "Salpers Asian Grocery", "Home Chefs & Tiffin Services"],
  },
  {
    id: "spiritual",
    title: "Spiritual & Wellness",
    description: "Find temples, yoga studios, meditation centres, and Satsang groups for your spiritual journey",
    icon: "Sparkles",
    color: "from-purple-500 to-violet-600",
    count: "40+ centres",
    href: "/community/spiritual",
    items: ["Arulmihu Sivan Temple Zurich (sivankovil.ch)", "ISKCON Krishna Temple Zurich (krishna.ch)", "BAPS Swaminarayan Mandir", "Arya Samaj Switzerland", "Art of Living Switzerland", "Chinmaya Mission Switzerland", "Brahma Kumaris Switzerland", "Hatha Yoga & Pranayama Classes"],
  },
  {
    id: "business",
    title: "Business & Career",
    description: "Advance your career and grow your business with our professional network, job listings, and entrepreneurship resources",
    icon: "TrendingUp",
    color: "from-teal-500 to-cyan-600",
    count: "300+ opportunities",
    href: "/business",
    items: ["Swiss Indian Chamber of Commerce (SICC)", "TiE Zurich – The Indus Entrepreneurs", "India-EFTA TEPA (in force Oct 2025)", "CHF 22.4bn India-Swiss trade (2024)", "LinkedIn Indian Professionals Switzerland", "IT & Tech Jobs Switzerland", "Infosys Switzerland (The Circle, Zurich)", "NASSCOM Switzerland"],
  },
  {
    id: "culture",
    title: "Culture & Arts",
    description: "Celebrate India's rich culture through festivals, classical arts, Bollywood, fashion, and entertainment",
    icon: "Music",
    color: "from-rose-500 to-pink-600",
    count: "100+ events/year",
    href: "/culture",
    items: ["IAGZ Diwali Gala – Mattenhofsaal, Zurich", "Holi Zuri Openair (holizuri.ch)", "IAGZ Navratri Garba – October", "SwissPuja Durga Puja – Langnau am Albis", "InBa India Basel Festival – Theater Basel", "Nateschwara Dance School (nateschwara.ch, est. 1980)", "Kalasri Bharatanatyam Basel (est. 1976)", "ISKCON Ratha Yatra – June, Zurich"],
  },
];

export const CITIES = [
  {
    name: "Zurich",
    slug: "zurich",
    description: "Financial capital and home to the largest Indian community in Switzerland",
    population: "~10,000 Indians",
    highlights: ["IAGZ Community & Diwali Gala", "ETH & UZH Indian Students (InSAZ)", "Indian Restaurants & Grocery in Kreis 4 & 6", "Gujarati, Punjabi & Telugu Associations"],
    color: "from-blue-600 to-indigo-700",
  },
  {
    name: "Geneva",
    slug: "geneva",
    description: "International city with a diverse, cosmopolitan Indian expat community",
    population: "~5,000 Indians",
    highlights: ["UN & Diplomatic Indian Community", "Indian Association Geneva (IAG)", "Indian Consulate General (9 Rue du Valais)", "International School Options"],
    color: "from-purple-600 to-violet-700",
  },
  {
    name: "Basel",
    slug: "basel",
    description: "Pharma hub with a growing Indian professional community",
    population: "~3,500 Indians",
    highlights: ["Pharma & Biotech Professionals (Novartis, Roche)", "ICAS – Indian Cultural Association Switzerland", "Kalasri Bharatanatyam School (est. 1976)", "InBa India Basel Festival – Theater Basel"],
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Bern",
    slug: "bern",
    description: "Swiss capital with a vibrant Indian diplomatic and academic community",
    population: "~2,000 Indians",
    highlights: ["Embassy of India (Thunstrasse 5, Bern)", "Indian Association Berne (IAB)", "Bharatiya Association Berne", "University of Bern Indian Students"],
    color: "from-teal-600 to-cyan-700",
  },
  {
    name: "Lausanne",
    slug: "lausanne",
    description: "Olympic city with EPFL and a thriving Indian student community",
    population: "~1,500 Indians",
    highlights: ["EPFL Indian Student Association", "PrangaN@Swiss – Durga Puja Lausanne", "IOC Indian Professionals", "Indian Restaurants in City Centre"],
    color: "from-rose-600 to-pink-700",
  },
];

export const UPCOMING_EVENTS = [
  { title: "IAGZ Diwali Gala 2026", date: "Nov 2026", location: "Mattenhofsaal, Zurich", category: "Festival", description: "Annual Diwali gala with cultural performances, dinner, and awards — organised by IAGZ", color: "bg-orange-500" },
  { title: "Swiss India Business Summit", date: "Sep 12, 2026", location: "Kursaal Bern", category: "Networking", description: "Annual summit connecting Indian entrepreneurs and Swiss businesses", color: "bg-blue-500" },
  { title: "IAGZ Navratri Garba 2026", date: "Oct 2026", location: "Zurich", category: "Cultural", description: "Largest Garba celebration in Switzerland with live music and traditional dance — organised by IAGZ", color: "bg-purple-500" },
  { title: "SwissPuja Durga Puja 2026", date: "Oct 2026", location: "Schwerzisaal, Langnau am Albis", category: "Cultural", description: "Authentic five-day Durga Puja with pandal, dhak, prasad and cultural programs", color: "bg-rose-500" },
  { title: "Holi Zuri Openair 2026", date: "Mar 2026", location: "Zurich", category: "Festival", description: "Open-air Holi celebration with organic colours, live music and DJs — holizuri.ch", color: "bg-pink-500" },
  { title: "InBa India Basel Festival 2026", date: "May–Jun 2026", location: "Theater Basel", category: "Arts", description: "Multi-week festival of Indian performing arts at Theater Basel — dance, music, theatre", color: "bg-teal-500" },
];

export const LIVING_GUIDE = [
  {
    title: "Arriving in Switzerland",
    icon: "Plane",
    steps: [
      "Register at your local Gemeinde (municipality) within 14 days of arrival",
      "Apply for your residence permit (L, B, or C) at the cantonal Migrationsamt",
      "Open a Swiss bank account — PostFinance or Neon are easiest for new arrivals",
      "Get mandatory health insurance (Krankenkasse/LAMal) within 3 months",
      "Register children at local schools through the cantonal Schulverwaltung",
    ],
  },
  {
    title: "Health Insurance Basics",
    icon: "Heart",
    steps: [
      "Health insurance is mandatory for all residents within 3 months of arrival",
      "Basic insurance (Grundversicherung/LAMal) covers core medical needs",
      "Compare providers officially at priminfo.admin.ch or comparis.ch",
      "Choose HMO or Telmed model for 15–20% lower premiums",
      "Major insurers: CSS, Helsana, SWICA, Sanitas, Concordia, KPT",
    ],
  },
  {
    title: "Housing & Rentals",
    icon: "Home",
    steps: [
      "Rental market is very competitive — apply quickly with all documents ready",
      "Documents needed: Betreibungsauszug (debt register extract), 3 pay slips, passport",
      "Search on Homegate, Comparis, ImmoScout24, and Indian Facebook groups",
      "Deposit is capped at 3 months rent, held in a blocked bank account",
      "Join cantonal Gemeinde waiting lists for subsidised (Genossenschaft) apartments",
    ],
  },
  {
    title: "Education & Schools",
    icon: "GraduationCap",
    steps: [
      "Public schools are free and excellent — children assigned to school by home address",
      "International schools: Zurich International School, Institut Montana, ISGE Geneva",
      "Universities: ETH Zurich, University of Zurich, EPFL Lausanne, University of Geneva",
      "Weekend Indian language schools run by IAGZ, Gujarati Samaj, Tamil Sangam",
      "Indian curriculum (CBSE) school available at Zurich for short-term expats",
    ],
  },
];

export const RESOURCES = [
  { title: "Embassy of India, Berne", url: "https://www.indembassybern.gov.in", category: "Official", description: "Consular services, OCI cards, passport renewal, visa letters, diaspora events" },
  { title: "Indian Consulate General, Geneva", url: "https://www.cgigeneva.gov.in", category: "Official", description: "Consular services for French-speaking Switzerland — 9 Rue du Valais, Geneva (+41-22-906 86 86)" },
  { title: "Comparis.ch", url: "https://www.comparis.ch", category: "Living", description: "Compare health insurance, mortgages, phone plans, and rental properties" },
  { title: "SBB Swiss Railways", url: "https://www.sbb.ch", category: "Transport", description: "Public transport timetables, Half-Fare card (CHF 190/yr), GA Travelcard, and tickets" },
  { title: "IAGZ – Indian Association Zurich", url: "https://www.iagz.ch", category: "Community", description: "Events, networking, and community support for Indians in Zurich" },
  { title: "SICC – Swiss Indian Chamber", url: "https://www.sicc.ch", category: "Business", description: "Business networking, events, and trade facilitation between India and Switzerland" },
  { title: "TeluguSwiss Association", url: "https://teluguswiss.org", category: "Community", description: "Telugu-speaking Indian community across Switzerland — cultural events and networking" },
  { title: "SwissDesi", url: "https://swissdesi.ch", category: "Community", description: "Community portal for Indians in Switzerland — news, classifieds, and local resources" },
  { title: "ch.ch – Swiss Official Portal", url: "https://www.ch.ch/en/", category: "Official", description: "Official Swiss government information portal — living, working, permits, rights" },
  { title: "India Supermarkt (Online)", url: "https://www.indiasupermarkt.ch", category: "Shopping", description: "Indian groceries, spices, dal, rice, and products delivered across Switzerland" },
  { title: "SEM – Swiss Migration Office", url: "https://www.sem.admin.ch/en/", category: "Official", description: "State Secretariat for Migration — residence permits, visas, and immigration" },
  { title: "India-Swiss Startup Bridge", url: "https://startupindia.gov.in/content/sih/en/international/india-swiss_startup_bridge.html", category: "Business", description: "Bilateral startup collaboration by Startup India and Switzerland — grants and market access" },
];

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Software Engineer, Zurich",
    origin: "Mumbai, Maharashtra",
    years: "7 years in Switzerland",
    quote: "Moving to Switzerland was daunting, but the Indian community here made it feel like home. From finding a flat to celebrating Diwali with 500 people — this platform has been my go-to guide.",
    avatar: "PS",
  },
  {
    name: "Rajesh Menon",
    role: "Pharma Executive, Basel",
    origin: "Thrissur, Kerala",
    years: "4 years in Switzerland",
    quote: "The business networking resources here connected me with the right people at SICC. Switzerland's Indian professional community is incredibly strong and supportive.",
    avatar: "RM",
  },
  {
    name: "Ananya Gupta",
    role: "Doctor, Bern",
    origin: "Delhi, NCR",
    years: "10 years in Switzerland",
    quote: "As a working mother, I rely on this community for everything — from finding a Hindi tutor for my daughter to the best chaat near us in Bern. Indispensable resource.",
    avatar: "AG",
  },
];
