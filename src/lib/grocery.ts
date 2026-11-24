// Indian grocery stores in Switzerland — single source for /food, /food/grocery, /food/<city>, /de and /fr pages.
// Evidence rule: only facts shown on the store's own website or its Google Maps listing. Re-check quarterly.
export const GROCERY_UPDATED = "November 2026";

export type Store = {
  city: string;          // display city
  hub: CityKey;          // which city page lists it
  name: string;
  area: string;
  address?: string;
  phone?: string;
  note: string;
  noteDe?: string;
  noteFr?: string;
  url: string | null;    // official website only
};

export type CityKey = "zurich" | "geneva" | "basel" | "bern" | "lausanne";

export const CITIES: Record<CityKey, { en: string; de: string; fr: string; region: string }> = {
  zurich:   { en: "Zurich",   de: "Zürich",  fr: "Zurich",   region: "Zurich, Winterthur and surroundings" },
  geneva:   { en: "Geneva",   de: "Genf",    fr: "Genève",   region: "Geneva" },
  basel:    { en: "Basel",    de: "Basel",   fr: "Bâle",     region: "Basel" },
  bern:     { en: "Bern",     de: "Bern",    fr: "Berne",    region: "Bern" },
  lausanne: { en: "Lausanne", de: "Lausanne",fr: "Lausanne", region: "Lausanne and Vaud" },
};

export const mapsLink = (s: Store) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${s.name} ${s.address ?? s.city}`)}`;

export const STORES: Store[] = [
  { hub: "zurich", city: "Zurich", name: "Aggarwal", area: "Wiedikon (Kreis 3)", address: "Kernstrasse 27, 8004 Zürich",
    note: "One of Switzerland's longest-running Indian grocery chains (est. 1986). Fresh vegetables, spices, lentils, frozen foods, pickles and household items, plus a take-away counter with samosas and chaat.", noteDe: "Eine der ältesten indischen Lebensmittelketten der Schweiz (seit 1986): frisches Gemüse, Gewürze, Linsen, Tiefkühlware, Pickles und Haushaltsartikel, dazu Take-away mit Samosas und Chaat.", noteFr: "L'une des plus anciennes chaînes d'épiceries indiennes de Suisse (depuis 1986) : légumes frais, épices, lentilles, surgelés, pickles et articles ménagers, avec un comptoir à emporter (samosas, chaat).", url: "https://aggarwal.ch" },
  { hub: "zurich", city: "Zurich", name: "Indiasupermarkt.ch", area: "Kreis 5", address: "Josefstrasse 91, 8005 Zürich",
    note: "Large Indian supermarket with all major brands, fresh curry leaves, Indian vegetables, frozen meals and cosmetics. Also ships across Switzerland.", noteDe: "Grosser indischer Supermarkt mit allen bekannten Marken, frischen Curryblättern, indischem Gemüse, Fertiggerichten und Kosmetik. Versand in die ganze Schweiz.", noteFr: "Grand supermarché indien : toutes les grandes marques, feuilles de curry fraîches, légumes indiens, plats surgelés et cosmétiques. Livraison dans toute la Suisse.", url: "https://indiasupermarkt.ch" },
  { hub: "zurich", city: "Adliswil", name: "Namastey India", area: "Adliswil (south of Zurich)", address: "Kronenstrasse 3, 8134 Adliswil",
    note: "Indian grocery with fresh vegetables, spices, lentils, frozen items and ready-to-eat meals, plus take-away. Mon–Sat 11:00–22:00.", noteDe: "Indischer Laden mit frischem Gemüse, Gewürzen, Linsen, Tiefkühlprodukten und Fertiggerichten, dazu Take-away. Mo–Sa 11:00–22:00.", noteFr: "Épicerie indienne : légumes frais, épices, lentilles, surgelés et plats prêts à manger, avec vente à emporter. Lun–sam 11h–22h.", url: "https://namasteyindia.ch" },
  { hub: "zurich", city: "Oberglatt", name: "Salpers Asian Grocery", area: "Oberglatt (north of Zurich)", address: "8154 Oberglatt",
    note: "Asian and Indian grocery warehouse: bulk rice, dals, spices and snacks. Online shop with delivery across Switzerland.", noteDe: "Asiatisches und indisches Lebensmittellager: Reis, Dal, Gewürze und Snacks in Grosspackungen. Onlineshop mit Lieferung in die ganze Schweiz.", noteFr: "Entrepôt d'épicerie asiatique et indienne : riz, dals, épices et snacks en gros. Boutique en ligne avec livraison dans toute la Suisse.", url: "https://salpers.ch" },
  { hub: "zurich", city: "Winterthur", name: "Tandoor Indian Supermarket", area: "Behind Winterthur main station", address: "Neuwiesenstrasse 6, 8400 Winterthur", phone: "052 550 29 01",
    note: "Indian supermarket and take-away: groceries, spices, lentils, rice and frozen foods, plus a buffet of fresh Indian dishes.", noteDe: "Indischer Supermarkt mit Take-away direkt hinter dem Hauptbahnhof Winterthur: Lebensmittel, Gewürze, Linsen, Reis, Tiefkühlware und ein Buffet mit frischen indischen Gerichten.", noteFr: "Supermarché indien et vente à emporter derrière la gare de Winterthour : épicerie, épices, lentilles, riz, surgelés et buffet de plats indiens frais.", url: null },
  { hub: "basel", city: "Basel", name: "Aggarwal", area: "Basel",
    note: "Basel branch of the Aggarwal chain: spices, fresh Indian vegetables, lentils, rice and a take-away counter. See aggarwal.ch for the current address.", noteDe: "Basler Filiale von Aggarwal: Gewürze, frisches indisches Gemüse, Linsen, Reis und Take-away. Aktuelle Adresse auf aggarwal.ch.", noteFr: "Succursale bâloise d'Aggarwal : épices, légumes indiens frais, lentilles, riz et vente à emporter. Adresse actuelle sur aggarwal.ch.", url: "https://aggarwal.ch" },
  { hub: "bern", city: "Bern", name: "Aggarwal", area: "Near Bern station", address: "Schanzenstrasse 4B, 3008 Bern", phone: "+41 31 311 86 55",
    note: "Bern branch of the Aggarwal chain: fresh Indian vegetables, spices, lentils, pickles and household products.", noteDe: "Berner Filiale von Aggarwal: frisches indisches Gemüse, Gewürze, Linsen, Pickles und Haushaltsprodukte.", noteFr: "Succursale bernoise d'Aggarwal : légumes indiens frais, épices, lentilles, pickles et produits ménagers.", url: "https://aggarwal.ch" },
  { hub: "geneva", city: "Geneva", name: "Seelan Market", area: "Geneva",
    note: "Indian, Sri Lankan and South Asian groceries: spices, rice varieties, fresh produce and ready-to-cook items.", noteDe: "Indische, srilankische und südasiatische Lebensmittel: Gewürze, Reissorten, frische Produkte und Kochzutaten.", noteFr: "Épicerie indienne, sri-lankaise et sud-asiatique : épices, variétés de riz, produits frais et ingrédients prêts à cuisiner.", url: "https://seelanmarket.ch" },
  { hub: "geneva", city: "Geneva", name: "Madhura", area: "Pâquis / Servette", address: "Rue de Liotard 56, 1202 Genève", phone: "+41 22 344 21 20",
    note: "Indian and South Asian grocery: spices, dals, rice, frozen meals and specialty items.", noteDe: "Indische und südasiatische Lebensmittel: Gewürze, Dal, Reis, Tiefkühlgerichte und Spezialitäten.", noteFr: "Épicerie indienne et sud-asiatique : épices, dals, riz, plats surgelés et spécialités.", url: null },
  { hub: "lausanne", city: "Lausanne", name: "Asia Shop / Épicerie Indienne", area: "Avenue de France", address: "Avenue de France 2, 1004 Lausanne", phone: "+41 21 624 61 01",
    note: "South Asian grocery for the Romandie Indian community: spices, dals, frozen meals and specialty items.", noteDe: "Südasiatischer Laden für die indische Gemeinschaft in der Romandie: Gewürze, Dal, Tiefkühlgerichte und Spezialitäten.", noteFr: "Épicerie sud-asiatique pour la communauté indienne de Romandie : épices, dals, plats surgelés et spécialités.", url: null },
];

export const ONLINE = [
  { name: "indiasupermarkt.ch", url: "https://indiasupermarkt.ch", desc: "Swiss Indian online supermarket with nationwide delivery; physical store at Josefstrasse 91, Zurich." },
  { name: "salpers.ch", url: "https://salpers.ch", desc: "Asian and Indian groceries in bulk from Oberglatt (ZH), delivered across Switzerland; pickup available." },
  { name: "dalchinii.ch", url: "https://dalchinii.ch", desc: "Online Indian grocery with spices, lentils, flours and pickles; good for hard-to-find brands." },
];

export const storesIn = (c: CityKey) => STORES.filter(s => s.hub === c);
