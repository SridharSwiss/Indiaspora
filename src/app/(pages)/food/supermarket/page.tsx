import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Swiss Supermarket Decoder for Indians — Migros, Coop, Denner Guide",
  description: "Decode Swiss supermarket labels, dairy, flour, spices and vegetables. A practical guide for Indians living in Switzerland — what to buy at Migros, Coop, Denner, Aldi and Lidl, with Indian cooking equivalents.",
  keywords: ["Swiss supermarket guide Indians", "Swiss flour Indian equivalent", "Migros Coop Indian cooking", "Swiss spice names German", "Swiss dairy guide Indians", "supermarket decoder Switzerland"],
};

// ── Data ────────────────────────────────────────────────────────────────────

const CHAINS = [
  {
    name: "Migros",
    emoji: "🔶",
    colour: "#FF6600",
    tagline: "Best for daily groceries & quality",
    tips: [
      "M-Budget line = cheapest basics (rice, pasta, oil, flour)",
      "M-Classic = mid-range, Bio = organic premium",
      "Cumulus loyalty card — free, earns points on every purchase",
      "Migros Bank, travel agency, and petrol often in large branches",
      "Does NOT sell alcohol or tobacco (by founding principle)",
    ],
    good: ["Paneer (Select range)", "Basmati rice", "Coconut milk", "Greek yoghurt", "Naan"],
    avoid: "Beer and wine — go to Coop or Denner",
  },
  {
    name: "Coop",
    emoji: "🔴",
    colour: "#CC0000",
    tagline: "Best for variety, wine & specialty items",
    tips: [
      "Supercard loyalty card — free, earns Superpoints",
      "Fine Food section in bigger stores — imported & specialty items",
      "Sells alcohol, wine, and spirits unlike Migros",
      "Prix Garantie = budget line equivalent to M-Budget",
      "Coop City in malls has clothing and homeware too",
    ],
    good: ["Patak's curry pastes", "Coconut products", "Basmati rice (bulk)", "Fresh herbs", "Imported lentils"],
    avoid: "Often pricier than Migros for basics",
  },
  {
    name: "Denner",
    emoji: "🟡",
    colour: "#FFD700",
    tagline: "Best for cheap basics & bulk alcohol",
    tips: [
      "Migros-owned discount chain — lowest prices for staples",
      "Best prices on oil, sugar, salt, flour, pasta, rice",
      "Excellent wine selection at low prices",
      "Smaller stores, no deli counter",
      "Own brand Denner = budget line",
    ],
    good: ["Sunflower oil", "Sugar", "Plain flour", "Canned tomatoes", "Mineral water"],
    avoid: "Limited fresh vegetable selection",
  },
  {
    name: "Aldi",
    emoji: "⬛",
    colour: "#003087",
    tagline: "Best for weekly shops on a budget",
    tips: [
      "German discount chain — very low prices",
      "Aldi Suisse stocks more German brands than Swiss equivalents",
      "Middle aisle 'Aktionen' = rotating special offers (changed Thursdays)",
      "No loyalty card needed",
      "Fresh produce quality varies — check before buying",
    ],
    good: ["Eggs", "Butter", "Cheese", "Pasta", "Pulses (dried)"],
    avoid: "Limited Indian-specific items; stock changes weekly",
  },
  {
    name: "Lidl",
    emoji: "🔵",
    colour: "#0050AA",
    tagline: "Comparable to Aldi, often better produce",
    tips: [
      "Usually slightly better fresh produce than Aldi",
      "Good on spices — Kania brand spices are cheap and decent",
      "Thursday = new weekly Aktionen (special buys)",
      "Lidl Plus app gives additional discounts",
      "Bakery section freshly baked in-store daily",
    ],
    good: ["Kania spices (cheap)", "Rice varieties", "Tinned chickpeas", "Frozen vegetables", "Fruit"],
    avoid: "Brand consistency — items come and go",
  },
  {
    name: "Volg / Spar",
    emoji: "🟢",
    colour: "#006400",
    tagline: "Village & neighbourhood stores",
    tips: [
      "Common in smaller towns and villages",
      "Higher prices than city stores — convenience premium",
      "Good for emergency shopping if no big store nearby",
      "Often open on Sunday mornings",
      "Accept most loyalty cards",
    ],
    good: ["Convenience items", "Emergency basics", "Fresh bread"],
    avoid: "Expensive for regular shopping; limited range",
  },
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
  { german: "Butter", french: "Beurre", what: "Unsalted / salted butter", indian: "Use unsalted (ungesalzen / non salé) for making ghee; salted for direct use" },
  { german: "Paneer", french: "Paneer", what: "Indian cottage cheese — actually stocked!", indian: "Migros Select and Coop Fine Food carry fresh paneer in 200g blocks" },
  { german: "Hüttenkäse", french: "Cottage cheese", what: "Loose-curd cottage cheese", indian: "NOT paneer — too soft, doesn't hold shape when fried" },
];

const FLOURS = [
  { swiss: "Weissmehl / Farine blanche (Type 405)", what: "Highly refined white flour", indian: "Closest to Maida (all-purpose) — use for puris, pooris, biscuits" },
  { swiss: "Halbweissmehl (Type 550)", what: "Semi-refined white flour", indian: "Between maida and atta — can blend 50/50 with Type 1050 for chapati" },
  { swiss: "Ruchmehl (Type 1050)", what: "Medium wholemeal flour", indian: "Closest to Indian whole wheat atta — best substitute for chapatis & rotis" },
  { swiss: "Vollkornmehl / Farine complète", what: "Wholegrain wheat flour", indian: "Heavier than atta; good for multigrain rotis but dense" },
  { swiss: "Dinkelvollkornmehl", what: "Wholegrain spelt flour", indian: "Good for health rotis; slightly nutty flavour, higher protein" },
  { swiss: "Maismehl (Polentamehl)", what: "Corn flour / polenta flour", indian: "Fine for makki ki roti — same thing, different name" },
  { swiss: "Reismehl", what: "Rice flour", indian: "Same as Indian chawal ka atta — use for appam, idli batter, kozhukattai" },
  { swiss: "Kichererbsenmehl", what: "Chickpea flour", indian: "Identical to besan / gram flour — exact same product, premium-priced in Swiss stores" },
  { swiss: "Weizengrieß / Semoule de blé", what: "Wheat semolina", indian: "Same as sooji / rava — use for upma, halwa, sheera, idli" },
  { swiss: "Maisgrieß / Polenta", what: "Coarse corn semolina", indian: "Not the same as sooji — do not substitute in Indian recipes" },
  { swiss: "Backpulver", what: "Baking powder", indian: "Same as baking powder — works identically" },
  { swiss: "Natron / Bicarbonate de soude", what: "Baking soda", indian: "Same as meetha soda / cooking soda — use same quantity" },
];

const SPICES = [
  { german: "Kurkuma / Gelbwurz", french: "Curcuma", english: "Turmeric", indian: "Haldi — widely available in all stores" },
  { german: "Kreuzkümmel", french: "Cumin", english: "Cumin", indian: "Jeera — dried and ground versions available" },
  { german: "Koriander (gemahlen)", french: "Coriandre (moulu)", english: "Ground coriander", indian: "Dhania powder — exact same thing" },
  { german: "Garam Masala", french: "Garam Masala", english: "Garam masala", indian: "Sold at Coop Fine Food and Indian stores; Swiss versions less complex" },
  { german: "Kardamom", french: "Cardamome", english: "Cardamom", indian: "Elaichi — green variety common; pods and powder available" },
  { german: "Zimt", french: "Cannelle", english: "Cinnamon", indian: "Dalchini — usually Ceylon variety in CH; good quality" },
  { german: "Nelken", french: "Clou de girofle", english: "Cloves", indian: "Laung — sold whole and ground" },
  { german: "Sternanis", french: "Anis étoilé", english: "Star anise", indian: "Chakra phool — easily found in Asian section" },
  { german: "Bockshornklee", french: "Fenugrec", english: "Fenugreek", indian: "Methi seeds — check Asian stores; Migros usually doesn't stock" },
  { german: "Schwarzkümmel", french: "Nigelle", english: "Black seed / Nigella", indian: "Kalonji — look in specialty stores; not common in Swiss supermarkets" },
  { german: "Asafoetida / Teufelsdreck", french: "Asa-fœtida", english: "Asafoetida", indian: "Hing — NOT available in Swiss supermarkets; must buy at Indian stores" },
  { german: "Curry (Pulver)", french: "Curry (en poudre)", english: "Curry powder", indian: "Swiss 'curry powder' ≠ masala — basic blend, use only as a mild base" },
  { german: "Paprika (edelsüß / geräuchert)", french: "Paprika (doux / fumé)", english: "Paprika (sweet / smoked)", indian: "Not a direct Indian equivalent — use Kashmiri chilli for colour instead" },
  { german: "Cayennepfeffer", french: "Poivre de Cayenne", english: "Cayenne pepper", indian: "Closest to lal mirch powder — works as substitute for red chilli powder" },
  { german: "Ingwer (gemahlen)", french: "Gingembre (moulu)", english: "Ground ginger", indian: "Sonth / dry ginger powder — commonly available" },
  { german: "Senfsamen", french: "Graines de moutarde", english: "Mustard seeds", indian: "Rai / sarson — yellow variety common in CH; use rai from Indian stores for tadka" },
  { german: "Safran", french: "Safran", english: "Saffron", indian: "Kesar — excellent quality Spanish saffron widely available in CH at Migros/Coop" },
  { german: "Lorbeerblatt", french: "Feuille de laurier", english: "Bay leaf", indian: "Tej patta — note: Indian tej patta is cinnamonleaf, not bay; flavour differs" },
];

const VEGETABLES = [
  { german: "Spinat", french: "Épinards", english: "Spinach", indian: "Palak — fresh and frozen; use for palak paneer" },
  { german: "Kürbis", french: "Courge / Potiron", english: "Pumpkin / Squash", indian: "Kaddu — butternut squash works well for kaddu ki sabzi" },
  { german: "Aubergine / Eierfrucht", french: "Aubergine", english: "Eggplant / Aubergine", indian: "Baingan — same! Large Italian varieties are closest to Indian brinjal" },
  { german: "Zucchetti / Zucchini", french: "Courgette", english: "Courgette / Zucchini", indian: "Tori / ghiya — good substitute for turai (ridge gourd) in sabzis" },
  { german: "Fenchel", french: "Fenouil", english: "Fennel bulb", indian: "Saunf vegetable — cook as a sabzi; fronds used like dill" },
  { german: "Rettich (weiss)", french: "Radis blanc", english: "White radish / Daikon", indian: "Mooli — exact same; make mooli paratha or mooli sabzi" },
  { german: "Fenchelsamen", french: "Graines de fenouil", english: "Fennel seeds", indian: "Saunf — widely available in spice aisle at Migros/Coop" },
  { german: "Ingwer (frisch)", french: "Gingembre (frais)", english: "Fresh ginger", indian: "Adrak — widely available at Migros, Coop, and Aldi; buy in knobs" },
  { german: "Knoblauch", french: "Ail", english: "Garlic", indian: "Lasun — widely available; Swiss garlic tends to be milder" },
  { german: "Koriander (frisch)", french: "Coriandre (fraîche)", english: "Fresh coriander / Cilantro", indian: "Dhania — inconsistently stocked; Coop and Migros carry it; Asian stores reliable" },
  { german: "Minze", french: "Menthe", english: "Fresh mint", indian: "Pudina — widely available; use for chutney, raita, biryanis" },
  { german: "Böhnen (grün)", french: "Haricots verts", english: "Green beans", indian: "Sem / French beans — good for bean sabzi; widely available year-round" },
  { german: "Erbsen (gefroren)", french: "Petits pois (surgelés)", english: "Frozen peas", indian: "Matar — identical product; excellent quality; Lidl and Aldi cheapest" },
  { german: "Blumenkohl", french: "Chou-fleur", english: "Cauliflower", indian: "Gobhi — widely available; make aloo gobhi or gobhi paratha" },
  { german: "Brokkoli", french: "Brocoli", english: "Broccoli", indian: "Hari gobhi — not in traditional Indian recipes but works as a healthy substitute" },
  { german: "Lauch / Porree", french: "Poireau", english: "Leek", indian: "Leeks used in Anglo-Indian cooking; mild onion substitute in some sabzis" },
  { german: "Süsskartoffel", french: "Patate douce", english: "Sweet potato", indian: "Shakarkandi — make shakarkandi chaat, fry, or use in curries" },
];

const LABELS = [
  { label: "Bio", meaning: "Certified organic — Swiss organic standard (stricter than EU)", tip: "Worth it for dairy and produce; skip for processed staples" },
  { label: "IP-Suisse", meaning: "Integrated Production — Swiss sustainable farming label", tip: "Step below Bio but still eco-conscious; common on Swiss eggs and meat" },
  { label: "Fairtrade", meaning: "Fair Trade Certified — ethical sourcing from developing countries", tip: "Good indicator for coffee, tea, bananas, chocolate" },
  { label: "Naturaplan (Coop)", meaning: "Coop's own organic label — stricter than standard Bio", tip: "Coop's premium eco line; reliable quality on dairy and produce" },
  { label: "Naturafarm (Coop)", meaning: "Free-range/ethical animal farming label", tip: "Better animal welfare standards; applies to meat, eggs, dairy" },
  { label: "Bio Suisse Knospe 🌱", meaning: "Swiss organic certification with a bud symbol", tip: "Highest Swiss organic standard — all inputs and processing certified" },
  { label: "Suisse Garantie", meaning: "Guaranteed Swiss origin for food and agriculture", tip: "Means produced AND processed in Switzerland" },
  { label: "AOC / AOP", meaning: "Protected Designation of Origin (like cheese appellations)", tip: "Gruyère AOP, Emmental AOC = authentic Swiss; worth the premium" },
  { label: "MSC (blue fish)", meaning: "Marine Stewardship Council — sustainable wild-caught fish", tip: "Look for this on fish and seafood for sustainability" },
  { label: "Gluten Free / Glutenfrei", meaning: "Certified gluten-free product", tip: "Useful for Indian cooking: verify atta substitutes if needed" },
  { label: "Vegan (V leaf)", meaning: "Vegan certified — no animal products at all", tip: "Indian vegetarians: also check for eggs (Ei/Eier) in ingredients" },
  { label: "UTZ / Rainforest Alliance", meaning: "Sustainable farming certification (now merged)", tip: "Common on coffee, tea, cocoa — indicates better farming practices" },
];

const HACKS = [
  {
    category: "Loyalty Cards — Free Money",
    icon: "💳",
    tips: [
      "Cumulus (Migros): get 1 point per CHF 1 spent; redeem as vouchers at checkout. Sign up free at migros.ch",
      "Supercard (Coop): earn points on purchases + Coop Supercard partners (Interdiscount, Microspot etc.)",
      "Lidl Plus App: scan before checkout for weekly digital deals — often 20–40% off select items",
      "Aldi has no loyalty card — everyone gets the same low price automatically",
      "Both Cumulus and Supercard also give extra points on selected 'action' items — check the weekly flyer",
    ],
  },
  {
    category: "Tuesday / Wednesday Deals",
    icon: "📅",
    tips: [
      "Migros runs 'Tiefpreisgarantie' promotions every Tuesday; new Aktionen start Wednesday or Thursday",
      "Lidl and Aldi change their middle-aisle specials every Thursday",
      "Coop Friday fresh promotions on fish and selected produce",
      "Check the Migros and Coop apps every Sunday to plan the week's shopping around offers",
    ],
  },
  {
    category: "Buy Online, Save Time",
    icon: "📦",
    tips: [
      "Migros online (migros.ch/de/supermarkt): same prices as in-store, CHF 9.90 delivery (free above threshold)",
      "Coop online (coop.ch/shop): click-and-collect free from many stores",
      "LeShop.ch = Migros delivery arm — good for bulk pantry orders",
      "Galaxus (galaxus.ch) often has imported Indian grocery brands at competitive prices",
    ],
  },
  {
    category: "Making Ghee at Home",
    icon: "🧈",
    tips: [
      "Buy Migros or Denner unsalted butter (Butter, ungesalzen) — 250g blocks",
      "Simmer on low heat ~30 min until solids brown; strain through muslin",
      "1 kg butter yields ~750 ml ghee — far cheaper than Indian store ghee in CH",
      "Store in a glass jar at room temperature for up to 3 months",
    ],
  },
  {
    category: "Fresh Produce Hacks",
    icon: "🥦",
    tips: [
      "Migros 'Aus der Region' produce is local and often picked last night — freshest option",
      "Buy curry leaves and methi at Indian stores only — Swiss supermarkets rarely stock them",
      "Frozen spinach, peas, and mixed vegetables from Lidl/Aldi are excellent quality and very cheap",
      "Coop's refrigerated section often has fresh coconut milk (not canned) — better for coconut chutney",
      "Swiss tomatoes peak July–September; off-season Dutch or Moroccan tomatoes are less flavourful",
    ],
  },
  {
    category: "Reading Expiry Dates",
    icon: "📆",
    tips: [
      "'Mindestens haltbar bis' (MHB) / 'À consommer de préférence avant' = Best Before — still edible after this date",
      "'Zu verbrauchen bis' / 'À consommer jusqu'au' = Use By — safety date, do not use after",
      "Swiss best-before dates are conservative; dry goods like spices, rice, pasta are fine well past MHB",
      "Fresh paneer and dairy: always check use-by date carefully — sells fast near expiry",
    ],
  },
  {
    category: "Self-Checkout Tips",
    icon: "🛒",
    tips: [
      "Most Migros and Coop have self-checkout (Selbstscan / Self-Scanning) — scan as you shop, pay at exit",
      "Occasional random bag check ('Kontrolle') — stay calm, it's routine, not accusatory",
      "Bring your own bags (Tragtaschen) — plastic bags cost ~0.10–0.20 CHF at checkout",
      "Scan your loyalty card FIRST before scanning any items at self-checkout",
      "At staffed checkouts, place the divider bar after your items when the belt is shared",
    ],
  },
  {
    category: "Sunday Shopping Reality",
    icon: "🕐",
    tips: [
      "Most Swiss supermarkets close on Sundays — plan your Friday/Saturday shop carefully",
      "Exceptions: Migros and Coop in main train stations (HB Zürich, Basel SBB etc.) open 7 days",
      "Volg and Spar village stores often open Sunday mornings (08:00–11:00)",
      "Petrol station shops (Migrolino, Avec) are open 24/7 — expensive but available in emergencies",
      "Airport stores are open daily including Sunday",
    ],
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
  { need: "Mustard oil", find: "Indian stores only (sold as massage oil in Swiss pharmacies — not food grade)", note: "Use food-grade mustard oil only from Indian grocery stores" },
  { need: "Coconut oil (cooking)", find: "Bio-section at Migros/Coop — Kokosöl / Huile de coco", note: "Good quality; used in Swiss baking too" },
  { need: "Ghee", find: "Make at home from unsalted butter (easy!), or Indian stores", note: "Swiss supermarkets don't stock ghee; home-making costs ~CHF 8/kg vs CHF 20+ at Indian stores" },
  { need: "Paneer", find: "Migros Select and Coop Fine Food fresh dairy section", note: "200g blocks; limited stock, check availability at your local store" },
  { need: "Kashmiri red chilli powder", find: "Indian stores only — paprika is NOT a substitute", note: "Paprika lacks the specific flavour; Kashmiri chilli gives colour without much heat" },
  { need: "Hing / Asafoetida", find: "Indian stores only — not available in Swiss supermarkets", note: "No substitute; essential for South Indian and Jain cooking" },
  { need: "Amchur / Dry mango powder", find: "Indian stores only", note: "Use fresh lemon juice as acidity substitute; flavour won't be identical" },
];

// ── Component ────────────────────────────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>{children}</h2>
  );
}

function Tag({ children, color = "green" }: { children: React.ReactNode; color?: string }) {
  const colorMap: Record<string, string> = {
    green: "bg-green-500/15 text-green-400",
    amber: "bg-amber-500/15 text-amber-400",
    blue: "bg-blue-500/15 text-blue-400",
    red: "bg-red-500/15 text-red-400",
  };
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${colorMap[color] || colorMap.green}`}>
      {children}
    </span>
  );
}

export default function SupermarketDecoderPage() {
  return (
    <div>
      <PageHeader
        title="Swiss Supermarket Decoder"
        subtitle="A practical guide for Indians — decode labels, find substitutes, and shop confidently at Migros, Coop, Denner, Aldi and Lidl."
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* ── Supermarket Chains ─────────────────────────────────────────── */}
        <section id="chains">
          <SectionTitle>Know Your Supermarket Chains</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CHAINS.map((c) => (
              <div key={c.name} className="glass rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{c.emoji}</span>
                  <div>
                    <h3 className="font-bold text-base" style={{ color: "var(--text)" }}>{c.name}</h3>
                    <p className="text-xs" style={{ color: "var(--text-3)" }}>{c.tagline}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-1 text-green-400">✓ Good for:</p>
                  <p className="text-xs" style={{ color: "var(--text-2)" }}>{c.good.join(" · ")}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-1 text-amber-400">⚠ Note:</p>
                  <p className="text-xs" style={{ color: "var(--text-2)" }}>{c.avoid}</p>
                </div>
                <ul className="space-y-1">
                  {c.tips.map((t, i) => (
                    <li key={i} className="text-xs flex gap-2" style={{ color: "var(--text-2)" }}>
                      <span className="shrink-0 text-amber-400">›</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Swiss Ingredient Substitutes ──────────────────────────────── */}
        <section id="substitutes">
          <SectionTitle>Indian Ingredient → Swiss Supermarket Substitute</SectionTitle>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>
            What you need from India vs. what you can find at Migros / Coop / Denner right now.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {SUBSTITUTES.map((s) => (
              <div key={s.need} className="glass rounded-xl p-4 flex flex-col gap-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{s.need}</p>
                  <Tag color={s.find.includes("Indian stores only") ? "red" : "green"}>
                    {s.find.includes("Indian stores only") ? "Indian store" : "Swiss supermarket"}
                  </Tag>
                </div>
                <p className="text-xs font-medium text-amber-400">{s.find}</p>
                <p className="text-xs" style={{ color: "var(--text-3)" }}>{s.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Dairy Decoder ─────────────────────────────────────────────── */}
        <section id="dairy">
          <SectionTitle>The Dairy Maze — Decoded</SectionTitle>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>
            Swiss dairy aisles carry 40+ milk and cream variants. Here&apos;s what each one is in Indian cooking terms.
          </p>
          <div className="overflow-x-auto rounded-2xl glass">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b" style={{ borderColor: "var(--border-2)" }}>
                  <th className="text-left p-3 font-semibold text-xs" style={{ color: "var(--text-3)" }}>German label</th>
                  <th className="text-left p-3 font-semibold text-xs" style={{ color: "var(--text-3)" }}>French label</th>
                  <th className="text-left p-3 font-semibold text-xs" style={{ color: "var(--text-3)" }}>What it is</th>
                  <th className="text-left p-3 font-semibold text-xs" style={{ color: "var(--text-3)" }}>Indian cooking use</th>
                </tr>
              </thead>
              <tbody>
                {DAIRY.map((d, i) => (
                  <tr key={d.german} className={i % 2 === 0 ? "" : "bg-white/[0.02]"} style={{ borderBottom: "1px solid var(--border-2)" }}>
                    <td className="p-3 font-medium text-xs" style={{ color: "var(--text)" }}>{d.german}</td>
                    <td className="p-3 text-xs" style={{ color: "var(--text-2)" }}>{d.french}</td>
                    <td className="p-3 text-xs" style={{ color: "var(--text-2)" }}>{d.what}</td>
                    <td className="p-3 text-xs" style={{ color: "var(--sf-hi)" }}>{d.indian}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Flour Guide ───────────────────────────────────────────────── */}
        <section id="flour">
          <SectionTitle>Flour Aisle — Swiss Types & Indian Equivalents</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FLOURS.map((f) => (
              <div key={f.swiss} className="glass rounded-xl p-4 space-y-1">
                <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{f.swiss}</p>
                <p className="text-xs" style={{ color: "var(--text-2)" }}>{f.what}</p>
                <p className="text-xs font-medium" style={{ color: "var(--sf-hi)" }}>→ {f.indian}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Spice Translation ─────────────────────────────────────────── */}
        <section id="spices">
          <SectionTitle>Spice Translation Table</SectionTitle>
          <p className="text-sm mb-4" style={{ color: "var(--text-2)" }}>
            German and French names on Swiss packaging — decoded to Indian names and notes on availability.
          </p>
          <div className="overflow-x-auto rounded-2xl glass">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b" style={{ borderColor: "var(--border-2)" }}>
                  <th className="text-left p-3 font-semibold text-xs" style={{ color: "var(--text-3)" }}>German</th>
                  <th className="text-left p-3 font-semibold text-xs" style={{ color: "var(--text-3)" }}>French</th>
                  <th className="text-left p-3 font-semibold text-xs" style={{ color: "var(--text-3)" }}>English</th>
                  <th className="text-left p-3 font-semibold text-xs" style={{ color: "var(--text-3)" }}>Indian name &amp; notes</th>
                </tr>
              </thead>
              <tbody>
                {SPICES.map((s, i) => (
                  <tr key={s.german} className={i % 2 === 0 ? "" : "bg-white/[0.02]"} style={{ borderBottom: "1px solid var(--border-2)" }}>
                    <td className="p-3 font-medium text-xs" style={{ color: "var(--text)" }}>{s.german}</td>
                    <td className="p-3 text-xs" style={{ color: "var(--text-2)" }}>{s.french}</td>
                    <td className="p-3 text-xs" style={{ color: "var(--text-2)" }}>{s.english}</td>
                    <td className="p-3 text-xs" style={{ color: "var(--sf-hi)" }}>{s.indian}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Vegetables ────────────────────────────────────────────────── */}
        <section id="vegetables">
          <SectionTitle>Vegetable Names — German / French → Indian</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {VEGETABLES.map((v) => (
              <div key={v.german} className="glass rounded-xl p-3 space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{v.english}</p>
                  <span className="text-xs" style={{ color: "var(--text-3)" }}>/</span>
                  <p className="text-xs" style={{ color: "var(--text-3)" }}>{v.german}</p>
                </div>
                <p className="text-xs" style={{ color: "var(--text-3)" }}>{v.french}</p>
                <p className="text-xs font-medium" style={{ color: "var(--sf-hi)" }}>→ {v.indian}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Quality Labels ────────────────────────────────────────────── */}
        <section id="labels">
          <SectionTitle>Quality Labels — What Those Symbols Mean</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {LABELS.map((l) => (
              <div key={l.label} className="glass rounded-xl p-4 space-y-1">
                <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{l.label}</p>
                <p className="text-xs" style={{ color: "var(--text-2)" }}>{l.meaning}</p>
                <p className="text-xs italic" style={{ color: "var(--sf-hi)" }}>💡 {l.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Shopping Hacks ────────────────────────────────────────────── */}
        <section id="hacks">
          <SectionTitle>Shopping Hacks That Save Real Money</SectionTitle>
          <div className="space-y-4">
            {HACKS.map((h) => (
              <div key={h.category} className="glass rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{h.icon}</span>
                  <h3 className="font-semibold text-base" style={{ color: "var(--text)" }}>{h.category}</h3>
                </div>
                <ul className="space-y-2">
                  {h.tips.map((t, i) => (
                    <li key={i} className="text-sm flex gap-2" style={{ color: "var(--text-2)" }}>
                      <span className="shrink-0 text-amber-400 font-bold">›</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Quick Reference Card ──────────────────────────────────────── */}
        <section id="quickref">
          <SectionTitle>Quick Reference — At a Glance</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Cheapest basics", answer: "Denner or Aldi", sub: "Sugar, oil, rice, flour" },
              { label: "Best fresh produce", answer: "Migros", sub: "Aus der Region = local & fresh" },
              { label: "Best for variety", answer: "Coop Fine Food", sub: "Patak's, paneer, specialty" },
              { label: "Open on Sunday", answer: "Station stores", sub: "Migros/Coop at main stations" },
              { label: "Atta substitute", answer: "Ruchmehl (Type 1050)", sub: "Denner, Aldi, most stores" },
              { label: "Red lentils", answer: "Rote Linsen", sub: "Everywhere — identical to masoor" },
              { label: "Besan", answer: "Kichererbsenmehl", sub: "Bio stores or Indian shops" },
              { label: "Make ghee from", answer: "Butter ungesalzen", sub: "~250g block from any store" },
            ].map((r) => (
              <div key={r.label} className="glass rounded-xl p-4 text-center space-y-1">
                <p className="text-xs font-medium" style={{ color: "var(--text-3)" }}>{r.label}</p>
                <p className="text-base font-bold" style={{ color: "var(--sf-hi)" }}>{r.answer}</p>
                <p className="text-xs" style={{ color: "var(--text-2)" }}>{r.sub}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
