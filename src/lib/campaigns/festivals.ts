// Lunar-calendar festival dates vary every year, so the admin picks the festival to send;
// only fixed-date national days carry a date.
export type Festival = { id: string; name: string; emoji: string; greeting: string; blurb: string; colors: [string, string]; fixed?: string };

export const FESTIVALS: Festival[] = [
  { id: "diwali", name: "Diwali", emoji: "🪔", greeting: "Shubh Deepavali", colors: ["#F97316", "#DC2626"], blurb: "May the festival of lights fill your home with warmth, your table with sweets and your year with new beginnings." },
  { id: "holi", name: "Holi", emoji: "🎨", greeting: "Happy Holi", colors: ["#EC4899", "#8B5CF6"], blurb: "Wishing you a season of colour, laughter and good company with friends and family." },
  { id: "navratri", name: "Navratri & Garba", emoji: "💃", greeting: "Happy Navratri", colors: ["#DC2626", "#F59E0B"], blurb: "Nine nights of devotion, dance and community. Wishing you joy at every Garba." },
  { id: "durga-puja", name: "Durga Puja", emoji: "🌺", greeting: "Shubho Durga Puja", colors: ["#BE123C", "#F97316"], blurb: "May Maa Durga bless you and your loved ones with strength, peace and prosperity." },
  { id: "ganesh", name: "Ganesh Chaturthi", emoji: "🐘", greeting: "Ganpati Bappa Morya", colors: ["#F59E0B", "#DC2626"], blurb: "May Lord Ganesha remove every obstacle and bring wisdom and happiness to your home." },
  { id: "onam", name: "Onam", emoji: "🌼", greeting: "Onashamsakal", colors: ["#16A34A", "#F59E0B"], blurb: "Wishing our Malayali community a bountiful Onam of pookalam, sadya and togetherness." },
  { id: "pongal", name: "Pongal / Makar Sankranti", emoji: "🌾", greeting: "Happy Pongal & Sankranti", colors: ["#CA8A04", "#16A34A"], blurb: "Gratitude for the harvest and the turn of the season. Wishing you sweetness and abundance." },
  { id: "eid", name: "Eid", emoji: "🌙", greeting: "Eid Mubarak", colors: ["#0F766E", "#0EA5E9"], blurb: "Warm wishes to our Muslim friends and neighbours. May your Eid be full of blessings and good food." },
  { id: "christmas", name: "Christmas", emoji: "🎄", greeting: "Merry Christmas", colors: ["#15803D", "#B91C1C"], blurb: "Wishing our Christian community and everyone celebrating a peaceful, joyful Christmas." },
  { id: "baisakhi", name: "Baisakhi / Vaisakhi", emoji: "🌻", greeting: "Happy Baisakhi", colors: ["#EAB308", "#F97316"], blurb: "Celebrating the harvest and the spirit of the Khalsa. Wishing our Punjabi and Sikh community joy and chardi kala." },
  { id: "ugadi", name: "Ugadi / Gudi Padwa", emoji: "🥭", greeting: "Ugadi & Gudi Padwa Subhakankshalu", colors: ["#16A34A", "#EAB308"], blurb: "Happy New Year to our Telugu, Kannada and Marathi families. May the year taste of every flavour of joy." },
  { id: "raksha-bandhan", name: "Raksha Bandhan", emoji: "🧵", greeting: "Happy Raksha Bandhan", colors: ["#DB2777", "#F97316"], blurb: "To siblings near and far: celebrating the bond that distance cannot weaken." },
  { id: "janmashtami", name: "Janmashtami", emoji: "🦚", greeting: "Happy Janmashtami", colors: ["#2563EB", "#7C3AED"], blurb: "Wishing you the joy, music and devotion of Krishna's birthday." },
  { id: "independence", name: "Indian Independence Day", emoji: "🇮🇳", greeting: "Happy Independence Day", colors: ["#F97316", "#16A34A"], fixed: "15 August", blurb: "Jai Hind! Proud of India, grateful for Switzerland: celebrating our community on this special day." },
  { id: "republic", name: "Indian Republic Day", emoji: "🇮🇳", greeting: "Happy Republic Day", colors: ["#F97316", "#16A34A"], fixed: "26 January", blurb: "Warm wishes to all Indians in Switzerland on Republic Day." },
  { id: "swiss-national", name: "Swiss National Day", emoji: "🇨🇭", greeting: "Happy 1st of August", colors: ["#DC2626", "#9F1239"], fixed: "1 August", blurb: "To our adopted home: thank you, Switzerland, for the welcome. Happy Swiss National Day!" },
  { id: "new-year", name: "New Year", emoji: "✨", greeting: "Happy New Year", colors: ["#4F46E5", "#7C3AED"], blurb: "Wishing you health, happiness and a wonderful year ahead in Switzerland and beyond." },
];
