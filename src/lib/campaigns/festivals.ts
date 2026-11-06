// Lunar-calendar festival dates vary every year, so the admin picks the festival to send;
// only fixed-date national days carry a date. Diwali's date below is updated by hand each year.
//
// Draft-writing principles (festival greeting emails):
//  - warm, personal and short to open: the wish comes first, the explanation second
//  - explain what the festival means, not just "Happy X" (heritage over decoration)
//  - acknowledge that families and regions celebrate differently, and that dates can differ by community
//  - something useful for the reader: how people celebrate, and how to find a celebration in Switzerland
//  - no selling: the call to action is the events calendar
//  - 2-3 subject lines under ~50 characters for A/B testing, plus a preview line that adds new information
export type Festival = {
  id: string;
  name: string;
  emoji: string;
  greeting: string;
  /** Short opening wish (also used for social captions). */
  blurb: string;
  colors: [string, string];
  fixed?: string;
  image?: string;
  /** Extra greetings shown as one line under the wish, e.g. in the Swiss national languages. */
  greetings?: string[];
  /** What the festival means, in plain language (1-3 sentences). */
  meaning: string;
  /** How families commonly celebrate (3-4 short items). */
  traditions: string[];
  /** The Switzerland angle: where and how to celebrate here. */
  swiss: string;
  /** Alternative subject lines for A/B testing; the first is the default. */
  subjects: string[];
  /** Preview text shown after the subject in the inbox. */
  preheader: string;
};

const CAL = "Find celebrations on the Indiaspora events calendar, and add your own event so others can join.";

export const FESTIVALS: Festival[] = [
  {
    id: "diwali", name: "Diwali", emoji: "🪔", greeting: "Shubh Deepavali", colors: ["#F97316", "#DC2626"],
    image: "https://indiaspora.ch/images/diwali/diwali-2026-banner.jpg",
    fixed: "8 November 2026", // update each year: Diwali moves with the lunar calendar
    greetings: ["Happy Diwali", "Frohe Diwali", "Joyeuse Diwali", "Buona Diwali"],
    blurb: "May the lights of Diwali bring warmth to your home, sweetness to your table and fresh beginnings to your year.",
    meaning: "Diwali, the festival of lights, celebrates the triumph of light over darkness and good over evil. For many families it recalls Lord Rama's return to Ayodhya, and in some regions Krishna's victory over Narakasura or the goddess Kali. Lakshmi Puja is performed for prosperity and new beginnings. Jains remember Mahavira's nirvana, Sikhs celebrate Bandi Chhor Divas, and Newar Buddhists worship Lakshmi.",
    traditions: ["Cleaning and decorating the home, with rangoli and diyas at the door", "Lakshmi Puja in the evening", "Sharing sweets and gifts with family, friends and neighbours", "Dressing up and gathering for a festive meal"],
    swiss: `Many associations hold Diwali evenings and galas across Switzerland. ${CAL} Sharing a box of sweets with a neighbour is a lovely way to introduce the festival.`,
    subjects: ["🪔 Shubh Deepavali from Indiaspora", "Wishing you a bright Diwali", "Happy Diwali, and where to celebrate in Switzerland"],
    preheader: "Warm wishes for the festival of lights, and where to celebrate near you.",
  },
  {
    id: "holi", name: "Holi", emoji: "🎨", greeting: "Happy Holi", colors: ["#EC4899", "#8B5CF6"],
    blurb: "Wishing you a season of colour, laughter and good company with friends and family.",
    meaning: "Holi welcomes spring and celebrates the victory of good over evil, remembered through the story of Prahlad and Holika. The playful colours are linked with the stories of Krishna and Radha, and many people use the day to forgive and mend friendships.",
    traditions: ["Holika Dahan, a bonfire lit the evening before", "Playing with dry colours (gulal) and water", "Sharing gujiya, thandai and other festive treats", "Music, dancing and visiting friends"],
    swiss: `Colour gatherings are organised in several Swiss cities. Check each organiser's rules on colours and water, and wear clothes you do not mind staining. ${CAL}`,
    subjects: ["🎨 Happy Holi from Indiaspora", "Colour, laughter and spring: Happy Holi", "Holi wishes, and where to play in Switzerland"],
    preheader: "Spring, colour and good company: warm Holi wishes from our community.",
  },
  {
    id: "navratri", name: "Navratri & Garba", emoji: "💃", greeting: "Happy Navratri", colors: ["#DC2626", "#F59E0B"],
    blurb: "Nine nights of devotion, dance and community. Wishing you joy at every Garba.",
    meaning: "Navratri means nine nights. It honours the Goddess Durga in her many forms and is observed with prayer and fasting. In Gujarat and across the diaspora the nights are filled with Garba and Dandiya raas, and it ends on the tenth day, Vijayadashami or Dussehra, which honours Durga's victory or Rama's victory over Ravana, depending on the region.",
    traditions: ["Evening aarti and devotion to the Goddess", "Garba and Dandiya raas in colourful traditional dress", "Fasting or a simple sattvic diet for many families", "Vijayadashami (Dussehra) on the tenth day"],
    swiss: `Garba nights are held in Zurich and other Swiss cities through the nine nights, and tickets often sell out early. ${CAL}`,
    subjects: ["💃 Happy Navratri from Indiaspora", "Nine nights of Garba: Happy Navratri", "Navratri wishes, and Garba nights in Switzerland"],
    preheader: "Nine nights of devotion and dance: warm Navratri wishes and Garba dates.",
  },
  {
    id: "durga-puja", name: "Durga Puja", emoji: "🌺", greeting: "Shubho Durga Puja", colors: ["#BE123C", "#F97316"],
    blurb: "May Maa Durga bless you and your loved ones with strength, peace and prosperity.",
    meaning: "Durga Puja is the great autumn festival of Bengal. It celebrates Goddess Durga's victory over the demon Mahishasura, and brings families and neighbourhoods together for art, music, food and prayer over several days, ending with Dashami and Bijoya.",
    traditions: ["Visiting the pandal for darshan of the idol", "Anjali, the flower offering on Ashtami morning", "Dhunuchi dance and evening aarti", "Bhog, the shared community meal, and Bijoya greetings on the last day"],
    swiss: `Bengali associations, including SwissPuja, organise Durga Puja in Switzerland. ${CAL}`,
    subjects: ["🌺 Shubho Durga Puja from Indiaspora", "Shubho Pujo: wishes for you and your family", "Durga Puja in Switzerland: wishes and details"],
    preheader: "Warm Pujo wishes, and how to join the celebrations in Switzerland.",
  },
  {
    id: "ganesh", name: "Ganesh Chaturthi", emoji: "🐘", greeting: "Ganpati Bappa Morya", colors: ["#F59E0B", "#DC2626"],
    blurb: "May Lord Ganesha remove every obstacle and bring wisdom and happiness to your home.",
    meaning: "Ganesh Chaturthi celebrates the birth of Lord Ganesha, the remover of obstacles and the patron of new beginnings. Idols, often of clay, are welcomed at home or in community halls, worshipped for a day or several days and then bid farewell.",
    traditions: ["Welcoming a clay idol and performing the first puja", "Offering modak, his favourite sweet", "Daily aarti, bhajans and family gatherings", "The farewell chant: Ganpati Bappa Morya, Pudhchya Varshi Lavkar Ya"],
    swiss: `Community groups hold Ganesh celebrations in Swiss cities. If you are new to Switzerland, a local gathering is a lovely way to meet neighbours. ${CAL}`,
    subjects: ["🐘 Ganpati Bappa Morya! Wishes from Indiaspora", "Happy Ganesh Chaturthi", "New beginnings with Ganesha: warm wishes"],
    preheader: "Warm wishes for Ganesh Chaturthi, and where communities are celebrating.",
  },
  {
    id: "onam", name: "Onam", emoji: "🌼", greeting: "Onashamsakal", colors: ["#16A34A", "#F59E0B"],
    blurb: "Wishing our Malayali community a bountiful Onam of pookalam, sadya and togetherness.",
    meaning: "Onam is Kerala's harvest festival, welcoming the legendary King Mahabali. Mahabali's reign is remembered as a golden age of prosperity, and the festival is enjoyed by Malayalis of many backgrounds and faiths.",
    traditions: ["Pookalam, a flower carpet laid fresh each morning", "Onasadya, the feast served on a banana leaf", "New clothes (Onakkodi) and Thiruvathira dances", "Vallam kali boat races and Pulikali in Kerala"],
    swiss: `Malayali associations host Onam sadya and cultural programmes across Switzerland. ${CAL}`,
    subjects: ["🌼 Onashamsakal from Indiaspora", "Happy Onam: pookalam, sadya and togetherness", "Onam wishes to our Malayali community"],
    preheader: "Pookalam, sadya and togetherness: warm Onam wishes from our community.",
  },
  {
    id: "pongal", name: "Pongal / Makar Sankranti", emoji: "🌾", greeting: "Happy Pongal & Sankranti", colors: ["#CA8A04", "#16A34A"],
    blurb: "Gratitude for the harvest and the turn of the season. Wishing you sweetness and abundance.",
    meaning: "Pongal in Tamil Nadu and Makar Sankranti across India mark the sun's northward journey and give thanks for the harvest. The festival is about gratitude to the sun, the farmers and the land.",
    traditions: ["Cooking fresh rice, milk and jaggery until it overflows, with the cry of Pongalo Pongal", "Kolam designs at the doorstep", "Thanking the sun, and honouring the cattle that help the harvest (Mattu Pongal)", "Flying kites and sharing til-gur sweets for Sankranti"],
    swiss: `It falls in the Swiss winter, so many families cook Pongal at home and gather indoors with friends. ${CAL}`,
    subjects: ["🌾 Happy Pongal & Sankranti", "Thai Pongal and Makar Sankranti wishes", "Sweet beginnings: Pongal and Sankranti greetings"],
    preheader: "Gratitude, sweetness and a new season: Pongal and Sankranti wishes.",
  },
  {
    id: "eid", name: "Eid", emoji: "🌙", greeting: "Eid Mubarak", colors: ["#0F766E", "#0EA5E9"],
    blurb: "Warm wishes to our Muslim friends and neighbours. May your Eid be full of blessings and good food.",
    meaning: "Eid al-Fitr marks the end of Ramadan, a month of fasting, prayer and charity. Eid al-Adha remembers Ibrahim's willingness to sacrifice his son in obedience to God, and meat is shared with family, friends and those in need. Both are days of gratitude, family and generosity.",
    traditions: ["Special Eid prayers in the morning", "Charity to those in need", "Visiting family and friends, with Eidi for the children", "Festive meals such as sheer khurma and biryani"],
    swiss: "The exact day depends on the moon sighting and can differ by a day between communities, so check with your local mosque or association. Share your Eid gathering on the Indiaspora events calendar.",
    subjects: ["🌙 Eid Mubarak from Indiaspora", "Eid Mubarak to you and your family", "Warm Eid wishes from the Swiss Indian community"],
    preheader: "Blessings, family and good food: warm Eid wishes from our community.",
  },
  {
    id: "christmas", name: "Christmas", emoji: "🎄", greeting: "Merry Christmas", colors: ["#15803D", "#B91C1C"],
    blurb: "Wishing our Christian community and everyone celebrating a peaceful, joyful Christmas.",
    meaning: "Christmas celebrates the birth of Jesus Christ. Indian Christians, from Goa and Kerala to the North-East, celebrate with Midnight Mass, carols, cribs and festive food, and the season is a time of peace and generosity.",
    traditions: ["Midnight Mass and carol singing", "Cribs (nativity scenes) and star lanterns", "Festive food such as plum cake, bebinca and appam", "Gifts and time with family"],
    swiss: "Swiss Christmas markets and Advent traditions are a lovely way to share the season with friends. Share your community's carol evening or Christmas gathering on the Indiaspora events calendar.",
    subjects: ["🎄 Merry Christmas from Indiaspora", "Warm Christmas wishes to you and yours", "Christmas greetings from the Swiss Indian community"],
    preheader: "Peace, joy and good company: Christmas wishes from our community.",
  },
  {
    id: "baisakhi", name: "Baisakhi / Vaisakhi", emoji: "🌻", greeting: "Happy Baisakhi", colors: ["#EAB308", "#F97316"],
    blurb: "Celebrating the harvest and the spirit of the Khalsa. Wishing our Punjabi and Sikh community joy and chardi kala.",
    meaning: "Baisakhi (Vaisakhi) marks the spring harvest and solar new year in Punjab and, for Sikhs, the founding of the Khalsa by Guru Gobind Singh in 1699. It is a day of gratitude, service and community.",
    traditions: ["Visiting the gurdwara and Nagar Kirtan processions", "Langar, the community meal that welcomes everyone", "Bhangra and Gidda", "Harvest fairs and family gatherings"],
    swiss: `Sikh and Punjabi community groups hold Baisakhi gatherings in Switzerland. ${CAL}`,
    subjects: ["🌻 Happy Baisakhi from Indiaspora", "Vaisakhi diyan lakh lakh vadhaiyan", "Baisakhi wishes: harvest, Khalsa and community"],
    preheader: "Harvest, service and community: warm Baisakhi wishes.",
  },
  {
    id: "ugadi", name: "Ugadi / Gudi Padwa", emoji: "🥭", greeting: "Ugadi & Gudi Padwa Subhakankshalu", colors: ["#16A34A", "#EAB308"],
    greetings: ["Yugadi Habbada Shubhashayagalu (Kannada)", "Gudi Padwachya Shubhechha (Marathi)"],
    blurb: "Happy New Year to our Telugu, Kannada and Marathi families. May the year taste of every flavour of joy.",
    meaning: "Ugadi (for Telugu and Kannada families) and Gudi Padwa (for Marathi families) mark the new year in the Hindu lunisolar calendar and the start of spring, with a wish for a year that holds all of life's flavours.",
    traditions: ["Ugadi pachadi (Telugu), a dish of six tastes for the joys and sorrows of the year", "Mango-leaf toranas and rangoli at the door", "A gudi raised outside the home on Gudi Padwa", "Hearing the year's almanac (Panchanga) read"],
    swiss: `Telugu, Kannada and Marathi associations hold new-year gatherings in Switzerland. ${CAL}`,
    subjects: ["🥭 Ugadi & Gudi Padwa wishes from Indiaspora", "Happy New Year: Ugadi and Gudi Padwa", "Six tastes, one wish: a joyful new year"],
    preheader: "A new year with every flavour of joy: Ugadi and Gudi Padwa wishes.",
  },
  {
    id: "raksha-bandhan", name: "Raksha Bandhan", emoji: "🧵", greeting: "Happy Raksha Bandhan", colors: ["#DB2777", "#F97316"],
    blurb: "To siblings near and far: celebrating the bond that distance cannot weaken.",
    meaning: "Raksha Bandhan celebrates the bond between siblings. A sister ties a rakhi on her brother's wrist and he promises care and protection; many families extend the day to cousins and to all the siblings of the heart.",
    traditions: ["Tying the rakhi and an aarti", "Exchanging gifts and sweets", "Posting a rakhi, or a video call, when siblings live far apart", "A family meal"],
    swiss: "Many of us live far from our siblings, so a rakhi in the post and a long video call are part of the Swiss Indian celebration. Share your community's Rakhi get-together on the Indiaspora events calendar.",
    subjects: ["🧵 Happy Raksha Bandhan from Indiaspora", "To siblings near and far: Happy Rakhi", "Rakhi wishes, wherever your siblings are"],
    preheader: "A bond that distance cannot weaken: Raksha Bandhan wishes.",
  },
  {
    id: "janmashtami", name: "Janmashtami", emoji: "🦚", greeting: "Happy Janmashtami", colors: ["#2563EB", "#7C3AED"],
    blurb: "Wishing you the joy, music and devotion of Krishna's birthday.",
    meaning: "Janmashtami celebrates the birth of Lord Krishna, observed at midnight, the hour of his birth. Families remember his stories and teachings through fasting, devotional music and decorated cradles.",
    traditions: ["Fasting until midnight", "Bhajans and kirtan", "Decorating a cradle (jhula) for baby Krishna", "Dahi Handi, the human-pyramid pot-breaking held the next day in Maharashtra"],
    swiss: `Temples and cultural groups hold Janmashtami programmes in Switzerland. ${CAL}`,
    subjects: ["🦚 Happy Janmashtami from Indiaspora", "Joy, music and devotion: Happy Janmashtami", "Janmashtami wishes for you and your family"],
    preheader: "Music, devotion and the joy of Krishna's birthday.",
  },
  {
    id: "independence", name: "Indian Independence Day", emoji: "🇮🇳", greeting: "Happy Independence Day", colors: ["#F97316", "#16A34A"], fixed: "15 August",
    blurb: "Jai Hind! Proud of India, grateful for Switzerland: celebrating our community on this special day.",
    meaning: "On 15 August 1947 India became independent from British rule. The day honours the freedom struggle and the founding promise of a free, diverse nation, and it is also remembered with sensitivity for the Partition.",
    traditions: ["Flag hoisting and the national anthem", "Cultural programmes and tricolour decorations", "Remembering the freedom struggle", "Gathering with the community"],
    swiss: `The Embassy of India and community associations organise Independence Day gatherings in Switzerland. ${CAL}`,
    subjects: ["🇮🇳 Happy Independence Day from Indiaspora", "Jai Hind! Independence Day wishes", "Proud of India, grateful for Switzerland"],
    preheader: "Jai Hind! A day to celebrate our roots and our community.",
  },
  {
    id: "republic", name: "Indian Republic Day", emoji: "🇮🇳", greeting: "Happy Republic Day", colors: ["#F97316", "#16A34A"], fixed: "26 January",
    blurb: "Warm wishes to all Indians in Switzerland on Republic Day.",
    meaning: "On 26 January 1950 the Constitution of India came into force and India became a republic. The day celebrates the Constitution's promise of justice, liberty, equality and fraternity.",
    traditions: ["The Republic Day parade in New Delhi", "Flag hoisting, with some schools and communities reading the Preamble", "Cultural performances in schools and communities", "Tricolour decorations"],
    swiss: `The Embassy of India and community associations mark Republic Day in Switzerland. ${CAL}`,
    subjects: ["🇮🇳 Happy Republic Day from Indiaspora", "Republic Day wishes to Indians in Switzerland", "Jai Hind! Happy Republic Day"],
    preheader: "Celebrating the Constitution and our community in Switzerland.",
  },
  {
    id: "swiss-national", name: "Swiss National Day", emoji: "🇨🇭", greeting: "Happy 1st of August", colors: ["#DC2626", "#9F1239"], fixed: "1 August",
    blurb: "To our adopted home: thank you, Switzerland, for the welcome. Happy Swiss National Day!",
    meaning: "Swiss National Day, on 1 August, recalls the Federal Charter of 1291, the founding pact traditionally dated to early August. For many Indians in Switzerland it is also a day to say thank you to the country that is home.",
    traditions: ["Lanterns, flags and bonfires on the hills", "Fireworks (check your canton's fire rules)", "The 1 August brunch on a farm", "Speeches, Alpine horns and neighbourhood gatherings"],
    swiss: "Join your neighbours at a local celebration: it is a warm, easy way to meet people and to share a little about your own festivals in return.",
    subjects: ["🇨🇭 Happy 1st of August from Indiaspora", "Thank you, Switzerland: Happy National Day", "Swiss National Day wishes from our community"],
    preheader: "A thank-you to the country we call home.",
  },
  {
    id: "new-year", name: "New Year", emoji: "✨", greeting: "Happy New Year", colors: ["#4F46E5", "#7C3AED"],
    blurb: "Wishing you health, happiness and a wonderful year ahead in Switzerland and beyond.",
    meaning: "A new year is a moment to give thanks for the year behind us and to set a few kind intentions for the one ahead. Many Indian communities also celebrate their own new years at other times of the year, such as the Gujarati New Year after Diwali, Ugadi, Baisakhi and Vishu.",
    traditions: ["Reflecting on the year and giving thanks", "Gathering with family and friends for a festive meal", "Swiss traditions such as fireworks over the lakes (Silvester)", "Setting a few simple intentions"],
    swiss: `Many community groups host New Year gatherings. ${CAL}`,
    subjects: ["✨ Happy New Year from Indiaspora", "Wishing you a healthy, happy year ahead", "New Year wishes from the Swiss Indian community"],
    preheader: "Health, happiness and good company in the year ahead.",
  },
];
