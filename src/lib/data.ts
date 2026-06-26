export const NAV_ITEMS = [
  {
    label: "Community",
    href: "#community",
    children: [
      { label: "Associations & Clubs", href: "#associations" },
      { label: "Temples & Spiritual", href: "#spiritual" },
      { label: "Women's Network", href: "#women" },
      { label: "Students", href: "#students" },
    ],
  },
  {
    label: "Living in Switzerland",
    href: "#living",
    children: [
      { label: "Welcome Guide", href: "#welcome" },
      { label: "Housing & Real Estate", href: "#housing" },
      { label: "Healthcare", href: "#healthcare" },
      { label: "Education & Schools", href: "#education" },
      { label: "Banking & Finance", href: "#finance" },
      { label: "Transport", href: "#transport" },
      { label: "Legal & Immigration", href: "#legal" },
      { label: "Language Learning", href: "#language" },
    ],
  },
  {
    label: "Food & Dining",
    href: "#food",
    children: [
      { label: "Indian Restaurants", href: "#restaurants" },
      { label: "Grocery & Spices", href: "#grocery" },
      { label: "Catering & Home Chefs", href: "#catering" },
      { label: "Cooking Classes", href: "#cooking" },
    ],
  },
  {
    label: "Business & Career",
    href: "#business",
    children: [
      { label: "Networking & Chambers", href: "#networking" },
      { label: "Jobs & Recruitment", href: "#jobs" },
      { label: "Startups", href: "#startups" },
      { label: "Professional Services", href: "#services" },
    ],
  },
  {
    label: "Culture & Arts",
    href: "#culture",
    children: [
      { label: "Festivals & Events", href: "#festivals" },
      { label: "Music & Dance", href: "#arts" },
      { label: "Fashion & Boutiques", href: "#fashion" },
      { label: "Cinema & Entertainment", href: "#cinema" },
    ],
  },
  {
    label: "City Guides",
    href: "#cities",
    children: [
      { label: "Zurich", href: "#zurich" },
      { label: "Geneva", href: "#geneva" },
      { label: "Basel", href: "#basel" },
      { label: "Bern", href: "#bern" },
      { label: "Lausanne", href: "#lausanne" },
    ],
  },
  { label: "Events", href: "#events" },
  { label: "Resources", href: "#resources" },
];

export const STATS = [
  { value: "30,000+", label: "Indians in Switzerland", icon: "Users" },
  { value: "150+", label: "Community Associations", icon: "Building2" },
  { value: "26", label: "Cantons Covered", icon: "MapPin" },
  { value: "500+", label: "Businesses Listed", icon: "Briefcase" },
];

export const FEATURED_CATEGORIES = [
  {
    id: "community",
    title: "Community",
    description: "Connect with 30,000+ Indians across Switzerland through associations, cultural groups, and social networks",
    icon: "Users",
    color: "from-orange-500 to-red-500",
    count: "150+ groups",
    items: ["IAGZ – Indian Association of Greater Zurich", "SICC – Swiss Indian Chamber of Commerce", "Hindu Swayamsevak Sangh Switzerland", "Indian Student Association ETH Zurich (InSAZ)", "Swiss Telugu NRI Forum (STNRI)", "Gujarati Samaj Switzerland", "Maharashtra Mandal Switzerland", "Punjabi Cultural Association"],
  },
  {
    id: "living",
    title: "Living in Switzerland",
    description: "Everything you need to settle in — permits, housing, schools, healthcare, banking, and daily life essentials",
    icon: "Home",
    color: "from-blue-500 to-indigo-600",
    count: "50+ guides",
    items: ["Residence Permits (B, C, L permits)", "Finding Accommodation", "Health Insurance (KVG basics)", "Swiss Public Transport (SBB, ZVV)", "Registering at Gemeinde", "Swiss Banking & Finance", "German / French Language Classes", "Integration Courses (Stadt Zurich)"],
  },
  {
    id: "food",
    title: "Food & Dining",
    description: "Discover the best Indian restaurants, grocery stores, caterers, and home chefs across Switzerland",
    icon: "UtensilsCrossed",
    color: "from-amber-500 to-orange-500",
    count: "200+ listings",
    items: ["Bairavi Restaurant Zurich", "Rajasthan Restaurant Zurich", "Indigo Restaurant Geneva", "Art of Food (Grocery)", "Aggarwals Indian Grocery", "India Supermarkt (Online)", "Salpers Asian Grocery", "Home Chefs & Tiffin Services"],
  },
  {
    id: "spiritual",
    title: "Spiritual & Wellness",
    description: "Find temples, yoga studios, meditation centres, and Satsang groups for your spiritual journey",
    icon: "Sparkles",
    color: "from-purple-500 to-violet-600",
    count: "40+ centres",
    items: ["Glatbrugg Siva Temple (Saiva Thamil Sangam)", "ISKCON Krishna Temple Zurich", "Sri Durga Temple Basel", "Arya Samaj Switzerland", "Art of Living Switzerland", "Chinmaya Mission Switzerland", "Brahma Kumaris Switzerland", "Hatha Yoga & Pranayama Classes"],
  },
  {
    id: "business",
    title: "Business & Career",
    description: "Advance your career and grow your business with our professional network, job listings, and entrepreneurship resources",
    icon: "TrendingUp",
    color: "from-teal-500 to-cyan-600",
    count: "300+ opportunities",
    items: ["Swiss Indian Chamber of Commerce (SICC)", "India Business Switzerland (IBS)", "Swiss Indo Business Forum", "TiE (The Indus Entrepreneurs) Switzerland", "LinkedIn Indian Professionals Zurich", "IT & Tech Jobs Switzerland", "Startups by Indians in Switzerland", "NASSCOM Switzerland"],
  },
  {
    id: "culture",
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
    description: "Financial capital and home to the largest Indian community in Switzerland",
    population: "~18,000 Indians",
    highlights: ["IAGZ Community", "ETH & UZH Indian Students", "Indian Restaurants in City Centre", "Gujarati & Punjabi Associations"],
    color: "from-blue-600 to-indigo-700",
  },
  {
    name: "Geneva",
    description: "International city with a diverse, cosmopolitan Indian expat community",
    population: "~5,000 Indians",
    highlights: ["UN & Diplomatic Indian Community", "Indian Association Geneva", "Indian Restaurants in Carouge", "International School Options"],
    color: "from-purple-600 to-violet-700",
  },
  {
    name: "Basel",
    description: "Pharma hub with a growing Indian professional community",
    population: "~3,000 Indians",
    highlights: ["Pharma & Biotech Professionals", "Indian Association Basel (ICAS)", "Sri Durga Temple", "Holi Festival Basel"],
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Bern",
    description: "Swiss capital with a vibrant Indian diplomatic and academic community",
    population: "~2,000 Indians",
    highlights: ["Embassy of India", "Indian Association Berne", "Bharatiya Association Berne", "University of Bern Indian Students"],
    color: "from-teal-600 to-cyan-700",
  },
  {
    name: "Lausanne",
    description: "Olympic city with EPFL and a thriving Indian student community",
    population: "~1,500 Indians",
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
    description: "Annual Diwali celebration with cultural performances, food stalls, and fireworks",
    color: "bg-orange-500",
  },
  {
    title: "Swiss India Business Summit",
    date: "Sep 12, 2026",
    location: "Kursaal Bern",
    category: "Networking",
    description: "Annual summit connecting Indian entrepreneurs and Swiss businesses",
    color: "bg-blue-500",
  },
  {
    title: "Navratri Garba Night",
    date: "Oct 2, 2026",
    location: "Hallenstadion, Zurich",
    category: "Cultural",
    description: "Largest Garba celebration in Switzerland with live music and traditional dance",
    color: "bg-purple-500",
  },
  {
    title: "Indian Food Festival Basel",
    date: "Aug 23, 2026",
    location: "Münsterplatz, Basel",
    category: "Food",
    description: "Multi-day festival celebrating the diversity of Indian cuisines across all regions",
    color: "bg-amber-500",
  },
  {
    title: "Holi Festival Zurich",
    date: "Mar 28, 2026",
    location: "Landiwiese, Zurich",
    category: "Festival",
    description: "Celebrate the festival of colours with music, dance, and organic colour powder",
    color: "bg-rose-500",
  },
  {
    title: "Bollywood Dance Workshop",
    date: "Jul 5, 2026",
    location: "Tanzhaus Zürich",
    category: "Arts",
    description: "Learn iconic Bollywood moves with professional choreographers from India",
    color: "bg-teal-500",
  },
];

export const LIVING_GUIDE = [
  {
    title: "Arriving in Switzerland",
    icon: "Plane",
    steps: [
      "Register at your local Gemeinde (municipality) within 14 days",
      "Apply for your residence permit (L, B, or C) at the Migrationsamt",
      "Open a Swiss bank account (UBS, Credit Suisse, Postfinance, or Neo banks like Neon)",
      "Get mandatory health insurance (Krankenkasse) within 3 months",
      "Register children at local schools through the Schulverwaltung",
    ],
  },
  {
    title: "Health Insurance Basics",
    icon: "Heart",
    steps: [
      "Health insurance is mandatory for all residents in Switzerland",
      "Basic insurance (Grundversicherung / LAMal) covers core medical needs",
      "Compare providers at comparis.ch to find the best premium",
      "Choose between standard, HMO, or Telmed models for lower premiums",
      "Indian doctors in Zurich: Dr. Priya Sharma (Langstrasse), Dr. Vikram Mehta (Oerlikon)",
    ],
  },
  {
    title: "Housing & Rentals",
    icon: "Home",
    steps: [
      "Rental market is very competitive — apply quickly with all documents ready",
      "Documents needed: Betreibungsauszug (debt register), last 3 pay slips, passport copy",
      "Search on Homegate, Comparis, Immoscout24, and Facebook groups",
      "Typical deposit: 2-3 months rent, held in a blocked account",
      "Join Indian Facebook groups for community referrals and subletting",
    ],
  },
  {
    title: "Education & Schools",
    icon: "GraduationCap",
    steps: [
      "Public schools are free and excellent — children assigned by address",
      "International schools available: Zurich International School, American School, ISGE Geneva",
      "Universities: ETH Zurich, University of Zurich, EPFL Lausanne",
      "Hindi / Indian language classes: IAGZ, community groups run weekend schools",
      "Indian curriculum schools for short-term expats available in Zurich",
    ],
  },
];

export const RESOURCES = [
  { title: "Embassy of India, Berne", url: "https://www.indembassybern.gov.in", category: "Official", description: "Consular services, OCI cards, passport renewal, diaspora events" },
  { title: "Comparis.ch", url: "https://www.comparis.ch", category: "Living", description: "Compare health insurance, mortgages, cars, and internet plans" },
  { title: "SBB Swiss Railways", url: "https://www.sbb.ch", category: "Transport", description: "Public transport timetables, passes, and GA/Half-Fare cards" },
  { title: "IAGZ – Indian Association Zurich", url: "https://iagz.ch", category: "Community", description: "Events, networking, and community support for Indians in Zurich" },
  { title: "SICC – Swiss Indian Chamber", url: "https://sicc.ch", category: "Business", description: "Business networking, events, and trade facilitation between India and Switzerland" },
  { title: "Namaste Switzerland", url: "#", category: "Media", description: "Online magazine for the Swiss Indian community with news and features" },
  { title: "India Supermarkt (Online)", url: "https://indiasupermarkt.ch", category: "Shopping", description: "Buy Indian groceries, spices, and products online in Switzerland" },
  { title: "TiE Switzerland", url: "#", category: "Business", description: "The Indus Entrepreneurs — mentorship, networking, and startup ecosystem" },
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
