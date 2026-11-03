// Membership tiers. Prices are in CHF; `amountChf` is 0 for the free tier. Fees may change — see Terms 5B.
export type Tier = { id: string; label: string; price: string; amountChf: number; desc: string; features: readonly string[]; color: string; popular?: boolean };
export const TIERS: readonly Tier[] = [
  {
    id: "Community",
    label: "Community",
    price: "Free",
    amountChf: 0,
    desc: "Access to directory, events and community news",
    features: ["Full directory access", "Event notifications", "Community newsletter"],
    color: "#059669",
  },
  {
    id: "Member",
    label: "Member",
    price: "CHF 50/mth",
    amountChf: 50,
    desc: "Everything in Community plus priority features",
    features: ["All Community benefits", "Business listing", "Early event access", "Member badge"],
    color: "#F97316",
    popular: true,
  },
  {
    id: "Supporter",
    label: "Supporter",
    price: "CHF 150/mth",
    amountChf: 150,
    desc: "Support the community and get premium access",
    features: ["All Member benefits", "Featured profile", "Sponsor badge", "Annual report"],
    color: "#4F46E5",
  },
];
