import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import SupermarketTabs from "@/components/food/SupermarketTabs";

export const metadata: Metadata = {
  title: "Swiss Supermarket Decoder for Indians — Migros, Coop, Denner Guide",
  description: "Decode Swiss supermarket labels, dairy, flour, spices and vegetables. A practical guide for Indians living in Switzerland — what to buy at Migros, Coop, Denner, Aldi and Lidl, with Indian cooking equivalents.",
  keywords: ["Swiss supermarket guide Indians", "Swiss flour Indian equivalent", "Migros Coop Indian cooking", "Swiss spice names German", "Swiss dairy guide Indians", "supermarket decoder Switzerland"],
};

// ── Static data (server side) ────────────────────────────────────────────────

const CHAINS = [
  {
    name: "Migros", emoji: "🔶", tagline: "Best for daily groceries & quality",
    tips: [
      "M-Budget line = cheapest basics (rice, pasta, oil, flour)",
      "M-Classic = mid-range, Bio = organic premium",
      "Cumulus loyalty card — free, earns points on every purchase",
      "Does NOT sell alcohol or tobacco (by founding principle)",
    ],
    good: ["Paneer (Select range)", "Basmati rice", "Coconut milk", "Greek yoghurt", "Naan"],
    avoid: "Beer and wine — go to Coop or Denner",
  },
  {
    name: "Coop", emoji: "🔴", tagline: "Best for variety, wine & specialty items",
    tips: [
      "Supercard loyalty card — free, earns Superpoints",
      "Fine Food section in bigger stores — imported & specialty items",
      "Sells alcohol, wine, and spirits unlike Migros",
      "Prix Garantie = budget line equivalent to M-Budget",
    ],
    good: ["Patak's curry pastes", "Coconut products", "Basmati rice (bulk)", "Fresh herbs", "Imported lentils"],
    avoid: "Often pricier than Migros for basics",
  },
  {
    name: "Denner", emoji: "🟡", tagline: "Best for cheap basics & bulk alcohol",
    tips: [
      "Migros-owned discount chain — lowest prices for staples",
      "Best prices on oil, sugar, salt, flour, pasta, rice",
      "Excellent wine selection at low prices",
      "Smaller stores, no deli counter",
    ],
    good: ["Sunflower oil", "Sugar", "Plain flour", "Canned tomatoes", "Mineral water"],
    avoid: "Limited fresh vegetable selection",
  },
  {
    name: "Aldi", emoji: "⬛", tagline: "Best for weekly shops on a budget",
    tips: [
      "German discount chain — very low prices",
      "Middle aisle 'Aktionen' = rotating special offers (changed Thursdays)",
      "No loyalty card needed",
      "Fresh produce quality varies — check before buying",
    ],
    good: ["Eggs", "Butter", "Cheese", "Pasta", "Pulses (dried)"],
    avoid: "Limited Indian-specific items; stock changes weekly",
  },
  {
    name: "Lidl", emoji: "🔵", tagline: "Comparable to Aldi, often better produce",
    tips: [
      "Usually slightly better fresh produce than Aldi",
      "Good on spices — Kania brand spices are cheap and decent",
      "Thursday = new weekly Aktionen (special buys)",
      "Lidl Plus app gives additional discounts",
    ],
    good: ["Kania spices (cheap)", "Rice varieties", "Tinned chickpeas", "Frozen vegetables", "Fruit"],
    avoid: "Brand consistency — items come and go",
  },
  {
    name: "Volg / Spar", emoji: "🟢", tagline: "Village & neighbourhood stores",
    tips: [
      "Common in smaller towns and villages",
      "Higher prices than city stores — convenience premium",
      "Often open on Sunday mornings",
    ],
    good: ["Convenience items", "Emergency basics", "Fresh bread"],
    avoid: "Expensive for regular shopping; limited range",
  },
];

const SUBSTITUTES = [
  { need: "Atta / Chapati flour", find: "Ruchmehl (Type 1050) at Denner or Aldi", note: "Works well for rotis; slightly coarser than fine atta" },
  { need: "Maida / All-purpose flour", find: "Weissmehl / Farine blanche (Type 405) everywhere", note: "Identical product, different name" },
  { need: "Besan / Gram flour", find: "Kichererbsenmehl at bio/specialty stores or Indian shops", note: "Same thing; CHF 4–5/kg vs CHF 1.5 at Indian stores" },
  { need: "Sooji / Rava / Semolina", find: "Weizengrieß or Hartweizengries at any supermarket", note: "Fine for upma, halwa, sooji kheer — identical grain" },
  { need: "Chana dal / Split chickpeas", find: "Indian stores only — not at Swiss supermarkets", note: "Coop has whole chickpeas (Kichererbsen); not the same as split chana dal" },
  { need: "Toor dal / Arhar dal", find: "Indian stores only", note: "Yellow split peas (gelbe Schälerbsen) are a reasonable substitute for dal tadka" },
  { need: "Urad dal / Black gram", find: "Indian stores only — not in Swiss supermarkets", note: "No real substitute; essential for idli/dosa batter" },
  { need: "Moong dal (yellow)", find: "Yellow lentils (gelbe Linsen) at Migros/Coop", note: "Very close; works for dal, payasam, and khichdi" },
  { need: "Masoor dal (red)", find: "Rote Linsen / Lentilles corail at every Swiss supermarket", note: "Exact same product — sold in any store, very cheap" },
  { need: "Tamarind paste", find: "Indian stores; occasionally in Asian section of Coop Fine Food", note: "Cannot substitute with anything in Swiss supermarkets" },
  { need: "Curry leaves", find: "Indian stores only; sometimes Coop Fine Food", note: "No substitute — Mediterranean bay leaf has completely different flavour" },
  { need: "Mustard oil", find: "Indian stores only (sold as massage oil in pharmacies — not food grade)", note: "Use food-grade mustard oil only from Indian grocery stores" },
  { need: "Coconut oil (cooking)", find: "Bio-section at Migros/Coop — Kokosöl / Huile de coco", note: "Good quality; used in Swiss baking too" },
  { need: "Ghee", find: "Make at home from unsalted butter, or Indian stores", note: "Home-making costs ~CHF 8/kg vs CHF 20+ at Indian stores" },
  { need: "Paneer", find: "Migros Select and Coop Fine Food fresh dairy section", note: "200g blocks; limited stock, check availability at your local store" },
  { need: "Kashmiri red chilli powder", find: "Indian stores only — paprika is NOT a substitute", note: "Paprika lacks the specific flavour; Kashmiri chilli gives colour without much heat" },
  { need: "Hing / Asafoetida", find: "Indian stores only — not available in Swiss supermarkets", note: "No substitute; essential for South Indian and Jain cooking" },
  { need: "Amchur / Dry mango powder", find: "Indian stores only", note: "Use fresh lemon juice as acidity substitute; flavour won't be identical" },
];

const DAIRY = [
  { german: "Vollmilch", french: "Lait entier", what: "Full-fat milk (3.5%)", indian: "Closest to standard Indian milk — use for chai, cooking, mithai" },
  { german: "Halbfettmilch / Halbmilch", french: "Lait demi-écrémé", what: "Semi-skimmed (1.5–1.8%)", indian: "Fine for chai and cereal; thinner body" },
  { german: "Magermilch", french: "Lait écrémé", what: "Skimmed milk (0.1–0.5%)", indian: "Avoid for Indian cooking — too thin, breaks when boiled" },
  { german: "Rahm / Vollrahm", french: "Crème entière", what: "Full cream / heavy cream (35%)", indian: "Use for malai, paneer cream, rich curries — richer than Indian cream" },
  { german: "Halbrahm", french: "Demi-crème", what: "Half cream (25%)", indian: "Good for kormas and butter chicken sauce" },
  { german: "Saucenrahm", french: "Crème à sauce", what: "Cooking cream (15%)", indian: "Heat-stable — ideal for curry sauces without splitting" },
  { german: "Sauerrahm", french: "Crème acidulée", what: "Sour cream", indian: "Similar to Indian dahi in tang — good for raita, marinades" },
  { german: "Quark", french: "Séré", what: "Fresh curd cheese (thick)", indian: "Closest thing to hung curd / chakka — perfect for shrikhand, dips" },
  { german: "Joghurt natur", french: "Yogourt nature", what: "Plain yoghurt", indian: "Fine as dahi substitute for raita, lassi, marinades" },
  { german: "Griechischer Joghurt", french: "Yaourt grec", what: "Greek yoghurt (thick, 10%)", indian: "Richer substitute for thick dahi — great for dips and marinating chicken" },
  { german: "Butter", french: "Beurre", what: "Unsalted / salted butter", indian: "Use unsalted (ungesalzen) for making ghee; salted for direct use" },
  { german: "Paneer", french: "Paneer", what: "Indian cottage cheese — actually stocked!", indian: "Migros Select and Coop Fine Food carry fresh paneer in 200g blocks" },
  { german: "Hüttenkäse", french: "Cottage cheese", what: "Loose-curd cottage cheese", indian: "NOT paneer — too soft, doesn't hold shape when fried" },
];

const FLOURS = [
  { swiss: "Weissmehl / Farine blanche (Type 405)", what: "Highly refined white flour", indian: "Closest to Maida — use for puris, biscuits" },
  { swiss: "Halbweissmehl (Type 550)", what: "Semi-refined white flour", indian: "Between maida and atta — blend 50/50 with Type 1050 for chapati" },
  { swiss: "Ruchmehl (Type 1050)", what: "Medium wholemeal flour", indian: "Closest to Indian whole wheat atta — best substitute for chapatis & rotis" },
  { swiss: "Vollkornmehl / Farine complète", what: "Wholegrain wheat flour", indian: "Heavier than atta; good for multigrain rotis but dense" },
  { swiss: "Dinkelvollkornmehl", what: "Wholegrain spelt flour", indian: "Good for health rotis; slightly nutty flavour, higher protein" },
  { swiss: "Maismehl (Polentamehl)", what: "Corn flour / polenta flour", indian: "Fine for makki ki roti — same thing, different name" },
  { swiss: "Reismehl", what: "Rice flour", indian: "Same as Indian chawal ka atta — use for appam, idli batter, kozhukattai" },
  { swiss: "Kichererbsenmehl", what: "Chickpea flour", indian: "Identical to besan / gram flour — premium-priced in Swiss stores" },
  { swiss: "Weizengrieß / Semoule de blé", what: "Wheat semolina", indian: "Same as sooji / rava — use for upma, halwa, sheera, idli" },
  { swiss: "Backpulver / Natron", what: "Baking powder / Baking soda", indian: "Identical to baking powder / meetha soda — same quantity" },
];

const SPICES = [
  { german: "Kurkuma / Gelbwurz", french: "Curcuma", english: "Turmeric", indian: "Haldi — widely available in all stores" },
  { german: "Kreuzkümmel", french: "Cumin", english: "Cumin", indian: "Jeera — dried and ground versions available" },
  { german: "Koriander (gemahlen)", french: "Coriandre (moulu)", english: "Ground coriander", indian: "Dhania powder — exact same thing" },
  { german: "Garam Masala", french: "Garam Masala", english: "Garam masala", indian: "Sold at Coop Fine Food; Swiss versions less complex" },
  { german: "Kardamom", french: "Cardamome", english: "Cardamom", indian: "Elaichi — green variety common; pods and powder available" },
  { german: "Zimt", french: "Cannelle", english: "Cinnamon", indian: "Dalchini — usually Ceylon variety in CH; good quality" },
  { german: "Nelken", french: "Clou de girofle", english: "Cloves", indian: "Laung — sold whole and ground" },
  { german: "Sternanis", french: "Anis étoilé", english: "Star anise", indian: "Chakra phool — easily found in Asian section" },
  { german: "Bockshornklee", french: "Fenugrec", english: "Fenugreek", indian: "Methi seeds — check Asian stores; Migros usually doesn't stock" },
  { german: "Schwarzkümmel", french: "Nigelle", english: "Black seed / Nigella", indian: "Kalonji — look in specialty stores; not common in Swiss supermarkets" },
  { german: "Asafoetida / Teufelsdreck", french: "Asa-fœtida", english: "Asafoetida", indian: "Hing — NOT available in Swiss supermarkets; must buy at Indian stores" },
  { german: "Cayennepfeffer", french: "Poivre de Cayenne", english: "Cayenne pepper", indian: "Closest to lal mirch powder — works as substitute for red chilli powder" },
  { german: "Ingwer (gemahlen)", french: "Gingembre (moulu)", english: "Ground ginger", indian: "Sonth / dry ginger powder — commonly available" },
  { german: "Senfsamen", french: "Graines de moutarde", english: "Mustard seeds", indian: "Rai / sarson — yellow variety common; use rai from Indian stores for tadka" },
  { german: "Safran", french: "Safran", english: "Saffron", indian: "Kesar — excellent quality Spanish saffron at Migros/Coop" },
  { german: "Paprika (edelsüß)", french: "Paprika (doux)", english: "Paprika (sweet)", indian: "NOT a direct equivalent — use Kashmiri chilli for colour instead" },
];

const VEGETABLES = [
  { german: "Spinat", french: "Épinards", english: "Spinach", indian: "Palak — fresh and frozen; use for palak paneer" },
  { german: "Kürbis", french: "Courge / Potiron", english: "Pumpkin / Squash", indian: "Kaddu — butternut squash works well for kaddu ki sabzi" },
  { german: "Aubergine / Eierfrucht", french: "Aubergine", english: "Eggplant", indian: "Baingan — same! Large Italian varieties closest to Indian brinjal" },
  { german: "Zucchetti / Zucchini", french: "Courgette", english: "Courgette", indian: "Tori — good substitute for turai (ridge gourd)" },
  { german: "Rettich (weiss)", french: "Radis blanc", english: "White radish / Daikon", indian: "Mooli — exact same; make mooli paratha or mooli sabzi" },
  { german: "Ingwer (frisch)", french: "Gingembre (frais)", english: "Fresh ginger", indian: "Adrak — widely available at Migros, Coop, and Aldi" },
  { german: "Koriander (frisch)", french: "Coriandre (fraîche)", english: "Fresh coriander / Cilantro", indian: "Dhania — inconsistently stocked; Asian stores reliable" },
  { german: "Minze", french: "Menthe", english: "Fresh mint", indian: "Pudina — widely available; use for chutney, raita, biryanis" },
  { german: "Böhnen (grün)", french: "Haricots verts", english: "Green beans", indian: "Sem / French beans — good for bean sabzi; widely available year-round" },
  { german: "Erbsen (gefroren)", french: "Petits pois (surgelés)", english: "Frozen peas", indian: "Matar — identical product; Lidl and Aldi cheapest" },
  { german: "Blumenkohl", french: "Chou-fleur", english: "Cauliflower", indian: "Gobhi — make aloo gobhi or gobhi paratha" },
  { german: "Süsskartoffel", french: "Patate douce", english: "Sweet potato", indian: "Shakarkandi — make shakarkandi chaat or use in curries" },
];

const LABELS = [
  { label: "Bio", meaning: "Certified organic — Swiss organic standard (stricter than EU)", tip: "Worth it for dairy and produce; skip for processed staples" },
  { label: "IP-Suisse", meaning: "Integrated Production — Swiss sustainable farming label", tip: "Step below Bio but still eco-conscious; common on Swiss eggs and meat" },
  { label: "Fairtrade", meaning: "Fair Trade Certified — ethical sourcing from developing countries", tip: "Good indicator for coffee, tea, bananas, chocolate" },
  { label: "Naturaplan (Coop)", meaning: "Coop's own organic label — stricter than standard Bio", tip: "Coop's premium eco line; reliable quality on dairy and produce" },
  { label: "Bio Suisse Knospe 🌱", meaning: "Swiss organic certification with a bud symbol", tip: "Highest Swiss organic standard — all inputs and processing certified" },
  { label: "Suisse Garantie", meaning: "Guaranteed Swiss origin for food and agriculture", tip: "Means produced AND processed in Switzerland" },
  { label: "AOC / AOP", meaning: "Protected Designation of Origin (like cheese appellations)", tip: "Gruyère AOP, Emmental AOC = authentic Swiss; worth the premium" },
  { label: "MSC (blue fish)", meaning: "Marine Stewardship Council — sustainable wild-caught fish", tip: "Look for this on fish and seafood for sustainability" },
  { label: "Vegan (V leaf)", meaning: "Vegan certified — no animal products at all", tip: "Indian vegetarians: also check for eggs (Ei/Eier) in ingredients" },
  { label: "Mindestens haltbar bis (MHB)", meaning: "Best Before date — still edible after this date", tip: "Different from 'Zu verbrauchen bis' (Use By) — MHB is a quality date, not a safety date" },
];

const HACKS = [
  {
    category: "Loyalty Cards — Free Money", icon: "💳",
    tips: [
      "Cumulus (Migros): get 1 point per CHF 1 spent; redeem as vouchers at checkout. Sign up free at migros.ch",
      "Supercard (Coop): earn points on purchases + Coop Supercard partners",
      "Lidl Plus App: scan before checkout for weekly digital deals — often 20–40% off select items",
      "Aldi has no loyalty card — everyone gets the same low price automatically",
    ],
  },
  {
    category: "Weekly Deal Days", icon: "📅",
    tips: [
      "Migros runs 'Tiefpreisgarantie' promotions every Tuesday; new Aktionen start Wednesday/Thursday",
      "Lidl and Aldi change their middle-aisle specials every Thursday",
      "Check the Migros and Coop apps every Sunday to plan the week around offers",
    ],
  },
  {
    category: "Making Ghee at Home", icon: "🧈",
    tips: [
      "Buy Migros or Denner unsalted butter (Butter, ungesalzen) — 250g blocks",
      "Simmer on low heat ~30 min until solids brown; strain through muslin",
      "1 kg butter yields ~750 ml ghee — far cheaper than Indian store ghee in CH",
    ],
  },
  {
    category: "Fresh Produce Hacks", icon: "🥦",
    tips: [
      "Migros 'Aus der Region' produce is local and often picked last night — freshest option",
      "Buy curry leaves and methi at Indian stores only — Swiss supermarkets rarely stock them",
      "Frozen spinach, peas, and mixed vegetables from Lidl/Aldi are excellent quality and very cheap",
    ],
  },
  {
    category: "Sunday Shopping Reality", icon: "🕐",
    tips: [
      "Most Swiss supermarkets close on Sundays — plan your Friday/Saturday shop carefully",
      "Exceptions: Migros and Coop in main train stations (HB Zürich, Basel SBB etc.) open 7 days",
      "Petrol station shops (Migrolino, Avec) are open 24/7 — expensive but available in emergencies",
    ],
  },
  {
    category: "Self-Checkout Tips", icon: "🛒",
    tips: [
      "Scan your loyalty card FIRST before scanning any items at self-checkout",
      "Occasional random bag check ('Kontrolle') — stay calm, it's routine, not accusatory",
      "Bring your own bags (Tragtaschen) — plastic bags cost ~0.10–0.20 CHF at checkout",
    ],
  },
];

const QUICK_REF = [
  { label: "Cheapest basics", answer: "Denner or Aldi", sub: "Sugar, oil, rice, flour" },
  { label: "Best fresh produce", answer: "Migros", sub: "Aus der Region = local & fresh" },
  { label: "Best for variety", answer: "Coop Fine Food", sub: "Patak's, paneer, specialty" },
  { label: "Open on Sunday", answer: "Station stores", sub: "Migros/Coop at main stations" },
  { label: "Atta substitute", answer: "Ruchmehl (Type 1050)", sub: "Denner, Aldi, most stores" },
  { label: "Red lentils", answer: "Rote Linsen", sub: "Everywhere — identical to masoor" },
  { label: "Besan", answer: "Kichererbsenmehl", sub: "Bio stores or Indian shops" },
  { label: "Make ghee from", answer: "Butter ungesalzen", sub: "~250g block from any store" },
];

export default function SupermarketDecoderPage() {
  return (
    <div>
      <PageHeader
        title="Swiss Supermarket Decoder"
        subtitle="Decode labels, find Indian substitutes, and shop confidently at Migros, Coop, Denner, Aldi and Lidl."
        badge="Food Guide"
        gradient="from-amber-500 to-orange-500"
        heroImage="/hero-food.jpg"
        heroImageAlt="Swiss supermarket guide for Indians"
        heroImagePosition="center 40%"
        breadcrumbs={[
          { label: "Food & Dining", href: "/food" },
          { label: "Supermarket Decoder" },
        ]}
      />
      <SupermarketTabs
        chains={CHAINS}
        substitutes={SUBSTITUTES}
        dairy={DAIRY}
        flours={FLOURS}
        spices={SPICES}
        vegetables={VEGETABLES}
        labels={LABELS}
        hacks={HACKS}
        quickRef={QUICK_REF}
      />
    </div>
  );
}
