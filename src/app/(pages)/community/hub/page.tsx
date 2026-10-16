import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CommunityLifeHub from "@/components/community/CommunityLifeHub";

export const metadata: Metadata = {
  title: "Swiss-Indian Daily Life Hub — Permits, Groceries, Driving License & More",
  description: "Your interactive daily life navigator for Indians in Switzerland. From Gemeinde registration (Day 1) to Pillar 3a, Indian driving license Kontrollfahrt, Zürisack guide, parents visiting visa, and Swiss supermarket decoder.",
  keywords: ["Indians in Switzerland daily life", "register Gemeinde Switzerland Indian", "Kontrollfahrt Indian driving license", "Zürisack guide Indians", "Indian grocery Switzerland decoder", "parents visiting Switzerland Schengen visa", "Indian expat Switzerland guide", "Swiss B permit C permit guide", "Pillar 3a Indians Switzerland", "OCI renewal VFS Zurich"],
  openGraph: {
    title: "Swiss-Indian Daily Life Hub | IndiaSwiss",
    description: "Interactive guide for Indians in Switzerland: permits, groceries, driving license, parents visiting, taxes, and daily life errands by canton.",
  },
};

const hubSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I register at Gemeinde as a new Indian arrival in Switzerland?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You must register at your Gemeinde (Anmeldung) within 14 days of arrival and before starting work. Bring your employment contract, signed rental agreement (your name must be on the mailbox), passport, and apostilled marriage/birth certificates. In Zurich this is done at the Kreisbüro for your district."
      }
    },
    {
      "@type": "Question",
      "name": "How do I convert my Indian driving license in Switzerland (Kontrollfahrt)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You have exactly 12 months from your Swiss arrival date to pass the Kontrollfahrt (practical driving test). You only get one attempt. Take 5–8 lessons with a local instructor familiar with your Strassenverkehrsamt test routes before booking. Apply at your canton's Strassenverkehrsamt (e.g., Zurich: strassenverkehrsamt.zh.ch)."
      }
    },
    {
      "@type": "Question",
      "name": "What is Zürisack and how does garbage collection work in Zurich?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Zurich, all household waste must be put in official pre-paid Zürisack bags (35L ≈ CHF 2.15 each), available at Migros and Coop. Glass is separated by colour. Cardboard is collected on specific calendar days. Check stadt-zuerich.ch/entsorgung for your PLZ schedule."
      }
    },
    {
      "@type": "Question",
      "name": "How do visiting Indian parents get a Schengen visa for Switzerland?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You must provide a Verpflichtungserklärung (financial guarantee, notarised at your Gemeinde), proof of accommodation, travel insurance with minimum €30,000 coverage, and your Swiss residence permit copy. Apply through VFS Global in India (New Delhi/Mumbai/Chennai) at least 3 months before travel."
      }
    }
  ]
};

export default function CommunityHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }} />
      <div>
        <PageHeader
          title="Swiss-Indian Daily Life Hub"
          subtitle="From Day 1 at Zurich Airport to long-term wealth building — interactive guides, errands, and insider tips for every stage of your Swiss journey."
          badge="Life in Switzerland"
          gradient="from-orange-500 to-amber-600"
        heroImage="/hero-community.jpg"
        heroImageAlt="Indian community hub Switzerland"
        heroImagePosition="center 40%"
          breadcrumbs={[
            { label: "Community", href: "/community" },
            { label: "Daily Life Hub" },
          ]}
        />
        <CommunityLifeHub />
      </div>
    </>
  );
}
