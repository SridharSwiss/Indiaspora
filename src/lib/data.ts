export const NAV_ITEMS = [
  {
    label: "Community",
    href: "/community",
    children: [
      { label: "Associations & Clubs", href: "/community#associations" },
      { label: "Temples & Spiritual", href: "/community#spiritual" },
      { label: "Women's Network", href: "/community#women" },
      { label: "Students", href: "/community#students" },
    ],
  },
  {
    label: "Living Guide",
    href: "/living",
    children: [
      { label: "Welcome to Switzerland", href: "/living#welcome" },
      { label: "Housing & Real Estate", href: "/living#housing" },
      { label: "Healthcare", href: "/living#healthcare" },
      { label: "Education & Schools", href: "/living#education" },
      { label: "Banking & Finance", href: "/living#finance" },
      { label: "Transport", href: "/living#transport" },
      { label: "Legal & Immigration", href: "/living#legal" },
    ],
  },
  {
    label: "Food & Dining",
    href: "/food",
    children: [
      { label: "Indian Restaurants", href: "/food#restaurants" },
      { label: "Grocery & Spices", href: "/food#grocery" },
      { label: "Catering & Home Chefs", href: "/food#catering" },
      { label: "Cooking Classes", href: "/food#cooking" },
    ],
  },
  {
    label: "Business",
    href: "/business",
    children: [
      { label: "Networking & Chambers", href: "/business#networking" },
      { label: "Jobs & Recruitment", href: "/business#jobs" },
      { label: "Startups", href: "/business#startups" },
      { label: "Professional Services", href: "/business#services" },
    ],
  },
  {
    label: "Culture",
    href: "/culture",
    children: [
      { label: "Festivals & Events", href: "/culture#festivals" },
      { label: "Music & Dance", href: "/culture#arts" },
      { label: "Fashion & Boutiques", href: "/culture#fashion" },
      { label: "Cinema & Entertainment", href: "/culture#cinema" },
    ],
  },
  {
    label: "City Guides",
    href: "/cities",
    children: [
      { label: "Zurich", href: "/cities#zurich" },
      { label: "Geneva", href: "/cities#geneva" },
      { label: "Basel", href: "/cities#basel" },
      { label: "Bern", href: "/cities#bern" },
      { label: "Lausanne", href: "/cities#lausanne" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Resources", href: "/resources" },
];

export const STATS = [
  { value: "38,000+", label: "Indians in Switzerland", icon: "Users" },
  { value: "150+", label: "Community Associations", icon: "Building2" },
  { value: "26", label: "Cantons Covered", icon: "MapPin" },
  { value: "500+", label: "Businesses Listed", icon: "Briefcase" },
];

export const FEATURED_CATEGORIES = [
  {
    id: "community",
    href: "/community",
    title: "Community",
    description: "Connect with 38,000+ Indians across Switzerland through associations, cultural groups, and social networks",
    icon: "Users",
    color: "from-orange-500 to-red-500",
    count: "150+ groups",
    items: ["IAGZ – Indian Association of Greater Zurich", "SICC – Swiss Indian Chamber of Commerce", "Hindu Swayamsevak Sangh Switzerland", "Indian Student Association ETH Zurich (InSAZ)", "Swiss Telugu NRI Forum (STNRI)", "Gujarati Samaj Switzerland", "Maharashtra Mandal Switzerland", "Punjabi Cultural Association"],
  },
  {
    id: "living",
    href: "/living",
    title: "Living in Switzerland",
    description: "Everything you need to settle in — permits, housing, schools, healthcare, banking, and daily life essentials",
    icon: "Home",
    color: "from-blue-500 to-indigo-600",
    count: "50+ guides",
    items: ["Residence Permits (L, B, C permits for non-EU)", "Finding Accommodation", "Health Insurance (KVG basics)", "Swiss Public Transport (SBB, ZVV)", "Registering at Gemeinde", "Swiss Banking & Finance", "German / French Language Classes", "Integration Courses"],
  },
  {
    id: "food",
    href: "/food",
    title: "Food & Dining",
    description: "Discover the best Indian restaurants, grocery stores, caterers, and home chefs across Switzerland",
    icon: "UtensilsCrossed",
    color: "from-amber-500 to-orange-500",
    count: "200+ listings",
    items: ["Bairavi Restaurant Zurich (South Indian)", "Rajasthan Restaurant Zurich (North Indian)", "Indigo Restaurant Geneva", "Art of Food (Grocery, Zurich)", "Aggarwals Indian Grocery", "India Supermarkt (Online delivery)", "Salpers Asian Grocery", "Home Chefs & Tiffin Services"],
  },
  {
    id: "spiritual",
    href: "/community#spiritual",
    title: "Spiritual & Wellness",
    description: "Find temples, yoga studios, meditation centres, and Satsang groups for your spiritual journey",
    icon: "Sparkles",
    color: "from-purple-500 to-violet-600",
    count: "40+ centres",
    items: ["Glatbrugg Siva Temple (Saiva Thamil Sangam)", "ISKCON Krishna Temple Zurich", "Sri Durga Temple Basel", "Arya Samaj Switzerland", "Art of Living Switzerland", "Chinmaya Mission Switzerland", "Brahma Kumaris Switzerland", "Hatha Yoga & Pranayama Classes"],
  },
  {
    id: "business",
    href: "/business",
    title: "Business & Career",
    description: "Advance your career and grow your business with our professional network, job listings, and entrepreneurship resources",
    icon: "TrendingUp",
    color: "from-teal-500 to-cyan-600",
    count: "300+ opportunities",
    items: ["Swiss Indian Chamber of Commerce (SICC)", "India Business Switzerland (IBS)", "Swiss Indo Business Forum", "TiE (The Indus Entrepreneurs) Switzerland", "LinkedIn Indian Professionals Zurich", "IT & Tech Jobs Switzerland", "Startups by Indians in Switzerland", "NASSCOM Switzerland"],
  },
  {
    id: "culture",
    href: "/culture",
    title: "Culture & Arts",
    description: "Celebrate India's rich culture through festivals, classical arts, Bollywood, fashion, and entertainment",
    icon: "Music",
    color: "from-rose-500 to-pink-600",
    count: "100+ events/year",
    items: ["Diwali Mela Zurich", "Holi Festival Basel", "Navratri Garba Nights", "Durga Puja Celebrations", "Bollywood Dance Classes", "Bharatanatyam & Classical Dance", "Carnatic & Hindustani Music", "Indian Film Screenings"],
  },
];

export const CITIES = [
  {
    name: "Zurich",
    slug: "zurich",
    description: "Financial capital and home to the largest Indian community in Switzerland — pharma, finance, and tech professionals",
    population: "~20,000 Indians",
    highlights: ["IAGZ Community (founded 1983)", "ETH & UZH Indian Students", "Indian Restaurants in Langstrasse", "Gujarati & Punjabi Associations"],
    color: "from-blue-600 to-indigo-700",
  },
  {
    name: "Geneva",
    slug: "geneva",
    description: "International city with a diverse, cosmopolitan Indian expat community — UN, WHO, WTO professionals",
    population: "~6,000 Indians",
    highlights: ["UN & Diplomatic Indian Community", "Indian Association Geneva (IAG)", "Indian Restaurants in Carouge", "International School Options"],
    color: "from-purple-600 to-violet-700",
  },
  {
    name: "Basel",
    slug: "basel",
    description: "Pharma hub with a growing Indian professional community — Novartis, Roche, and life sciences",
    population: "~4,000 Indians",
    highlights: ["Pharma & Biotech Professionals", "Indian Cultural Association Switzerland (ICAS)", "Sri Durga Temple", "Holi Festival Basel"],
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Bern",
    slug: "bern",
    description: "Swiss federal capital with a vibrant Indian diplomatic and academic community",
    population: "~2,500 Indians",
    highlights: ["Embassy of India in Berne", "Indian Association Berne (IAB)", "Bharatiya Association Berne", "University of Bern Indian Students"],
    color: "from-teal-600 to-cyan-700",
  },
  {
    name: "Lausanne",
    slug: "lausanne",
    description: "Olympic city with EPFL and a thriving Indian student and researcher community",
    population: "~2,000 Indians",
    highlights: ["EPFL Indian Student Association", "Indian Restaurants in City Centre", "IOC Indian Professionals", "Bollywood Nights Lausanne"],
    color: "from-rose-600 to-pink-700",
  },
];

export const UPCOMING_EVENTS = [
  {
    title: "Diwali Mela Zurich 2026",
    date: "Oct 18, 2026",
    location: "Stadthaus Zurich",
    category: "Festival",
    description: "Annual Diwali celebration with cultural performances, food stalls, and spectacular fireworks — Zurich's largest Indian festival",
    color: "bg-orange-500",
  },
  {
    title: "Swiss India Business Summit",
    date: "Sep 12, 2026",
    location: "Kursaal Bern",
    category: "Networking",
    description: "Annual summit connecting Indian entrepreneurs and Swiss businesses — keynotes, panel discussions, and B2B networking",
    color: "bg-blue-500",
  },
  {
    title: "Navratri Garba Night",
    date: "Oct 2, 2026",
    location: "Hallenstadion, Zurich",
    category: "Cultural",
    description: "Largest Garba celebration in Switzerland with live music, traditional dance, and authentic Gujarati food",
    color: "bg-purple-500",
  },
  {
    title: "Indian Food Festival Basel",
    date: "Aug 23, 2026",
    location: "Münsterplatz, Basel",
    category: "Food",
    description: "Multi-day festival celebrating the diversity of Indian cuisines — from street food to fine dining, all 28 states represented",
    color: "bg-amber-500",
  },
  {
    title: "Holi Festival Zurich",
    date: "Mar 28, 2026",
    location: "Landiwiese, Zurich",
    category: "Festival",
    description: "Celebrate the festival of colours with live music, dance, organic colour powder, and food trucks",
    color: "bg-rose-500",
  },
  {
    title: "Bollywood Dance Workshop",
    date: "Jul 5, 2026",
    location: "Tanzhaus Zürich",
    category: "Arts",
    description: "Full-day workshop with professional choreographers — learn iconic moves from classic to contemporary Bollywood",
    color: "bg-teal-500",
  },
];

export const LIVING_GUIDE = [
  {
    title: "Arriving in Switzerland",
    icon: "Plane",
    steps: [
      "Register at your local Gemeinde (municipality) within 14 days of arrival",
      "Apply for your residence permit (L or B permit) at the Migrationsamt — your employer typically initiates this",
      "Open a Swiss bank account — Neon or Yuh are easiest for new arrivals; UBS and Postfinance for traditional banking",
      "Get mandatory health insurance (Krankenkasse) within 3 months of arrival",
      "Register children at local schools through the Schulverwaltung",
    ],
  },
  {
    title: "Health Insurance Basics",
    icon: "Heart",
    steps: [
      "Health insurance is mandatory for all residents in Switzerland from day one of registration",
      "Basic insurance (Grundversicherung / LaMal) covers core medical needs — all providers must offer it",
      "Compare premiums at comparis.ch — average CHF 400–650/month per adult depending on canton and model",
      "Choose between Standard, HMO, or Telmed models — HMO and Telmed are 10–20% cheaper",
      "Top insurers: Helsana, Swica, CSS, Sanitas, Concordia — all equally valid",
    ],
  },
  {
    title: "Housing & Rentals",
    icon: "Home",
    steps: [
      "Rental market is extremely competitive in Zurich and Geneva — apply the same day listings appear",
      "Documents needed: Betreibungsauszug (debt register extract), last 3 pay slips, residence permit copy",
      "Search on Homegate, Comparis, Immoscout24, and Indian Facebook groups for community referrals",
      "Typical deposit: 2–3 months rent, held in a blocked account (Mietkaution) — returned when you move out",
      "Budget: Zurich 1-bedroom CHF 2,000–3,000/month; Geneva CHF 1,800–2,800/month; Basel CHF 1,400–2,200/month",
    ],
  },
  {
    title: "Education & Schools",
    icon: "GraduationCap",
    steps: [
      "Public schools are free, high-quality, and children are assigned based on home address",
      "International schools: Zurich International School (ZIS), American School of Zurich, ISGE Geneva",
      "Universities: ETH Zurich (#1 in Europe for engineering), UZH, EPFL — all world-class",
      "IAGZ and Indian associations run Hindi weekend schools for children",
      "University applications: ETH and EPFL accept applications from Indian universities directly",
    ],
  },
];

export const RESOURCES = [
  { title: "Embassy of India, Berne", url: "https://www.indembassybern.gov.in", category: "Official", description: "Consular services, OCI cards, passport renewal, visa for Switzerland visits from India" },
  { title: "Comparis.ch", url: "https://www.comparis.ch", category: "Living", description: "Compare health insurance premiums, mortgages, car insurance, and internet plans" },
  { title: "SBB Swiss Railways", url: "https://www.sbb.ch", category: "Transport", description: "Train timetables, GA travelcard, Half-Fare card, and regional passes" },
  { title: "IAGZ – Indian Association Zurich", url: "https://iagz.ch", category: "Community", description: "Events, networking, and community support for Indians in Zurich since 1983" },
  { title: "SICC – Swiss Indian Chamber", url: "https://sicc.ch", category: "Business", description: "Business networking, trade facilitation, and bilateral investment between India and Switzerland" },
  { title: "Namaste Switzerland", url: "https://namasteswitzerland.ch", category: "Media", description: "Online magazine for the Swiss Indian community — news, events, and features" },
  { title: "India Supermarkt (Online)", url: "https://indiasupermarkt.ch", category: "Shopping", description: "Buy Indian groceries, spices, lentils, and products online — delivery across Switzerland" },
  { title: "TiE Zurich", url: "https://www.tie-zurich.ch", category: "Business", description: "The Indus Entrepreneurs — mentorship, networking, and startup support for Indian entrepreneurs" },
];

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Software Engineer at Google Zurich",
    origin: "Mumbai, Maharashtra",
    years: "7 years in Switzerland",
    quote: "Moving to Switzerland was daunting, but the Indian community here made it feel like home. From finding a flat in Oerlikon to celebrating Diwali with 500 people — this platform has been my go-to guide from day one.",
    avatar: "PS",
  },
  {
    name: "Rajesh Menon",
    role: "Senior Director at Novartis, Basel",
    origin: "Thrissur, Kerala",
    years: "6 years in Switzerland",
    quote: "The business networking resources here connected me with the right people at SICC within weeks of arriving in Basel. Switzerland's Indian professional community — especially in pharma — is incredibly strong and genuinely supportive.",
    avatar: "RM",
  },
  {
    name: "Ananya Gupta",
    role: "Consultant Physician, Inselspital Bern",
    origin: "Delhi, NCR",
    years: "10 years in Switzerland",
    quote: "As a working mother, I rely on this community for everything — from finding a Hindi tutor for my daughter to the best masala chai in Bern. The living guide saved me weeks of research when I first got my B permit.",
    avatar: "AG",
  },
];
