import {
  Landmark, Hospital, ShoppingCart, Recycle, Car, FileText, Shirt, Users, School, Receipt,
  Wallet, PawPrint, IdCard, GraduationCap, Languages, Banknote, ClipboardList, Building2,
  BarChart3, TrainFront, Trash2, Laptop, MapPin, Handshake, ShieldCheck, Scale, Briefcase,
  Home, Globe, Utensils, Zap, Vote, TreePine, Palette, Siren, Lightbulb, Link2, CreditCard,
  TrainTrack, type LucideIcon,
} from "lucide-react";

// Emoji → line icon. Unknown emoji fall back to the emoji itself.
const MAP: Record<string, LucideIcon> = {
  "🏛️": Landmark, "🏥": Hospital, "🛒": ShoppingCart, "🗑️": Trash2, "🚗": Car, "📄": FileText,
  "🧺": Shirt, "👴👵": Users, "👴": Users, "🏫": School, "🧾": Receipt, "💰": Wallet, "🐾": PawPrint,
  "🛂": IdCard, "🎓": GraduationCap, "🗣️": Languages, "🏦": Banknote, "📋": ClipboardList,
  "📊": BarChart3, "🚊": TrainFront, "💻": Laptop, "📍": MapPin, "🤝": Handshake, "🛡️": ShieldCheck,
  "⚖️": Scale, "💼": Briefcase, "🏠": Home, "🌐": Globe, "🍛": Utensils, "⚡": Zap, "🗳️": Vote,
  "🌳": TreePine, "🎨": Palette, "🚨": Siren, "💡": Lightbulb, "🔗": Link2, "💳": CreditCard,
  "🚄": TrainTrack, "🏙️": Building2, "🗺": MapPin,
};

export default function EmojiIcon({ e, size = 24, color, strokeWidth = 1.75 }: { e: string; size?: number; color?: string; strokeWidth?: number }) {
  const Icon = MAP[e.trim()];
  if (!Icon) return <span style={{ fontSize: size, lineHeight: 1 }}>{e}</span>;
  return <Icon aria-hidden width={size} height={size} strokeWidth={strokeWidth} style={{ color: color ?? "var(--accent, #CEB07A)", flexShrink: 0 }} />;
}
