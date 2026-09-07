import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indians in Basel — Community Guide",
  description:
    "Complete guide for Indians in Basel — registration, utilities, transport, Indian community, pharma industry, hospitals, and emergency contacts.",
  openGraph: {
    title: "Indians in Basel — Community Guide",
    description:
      "Complete guide for Indians in Basel — registration, utilities, transport, Indian community, pharma industry, hospitals, and emergency contacts.",
    type: "website",
  },
};

const quickActions = [
  {
    emoji: "🏛️",
    label: "Register Address",
    sub: "Einwohneramt Basel-Stadt",
    href: "https://www.bs.ch/themen/einwohneramt",
  },
  {
    emoji: "🚋",
    label: "BVB Transport",
    sub: "Trams & buses in Basel",
    href: "https://www.bvb.ch",
  },
  {
    emoji: "🧪",
    label: "Canton Services",
    sub: "All official services",
    href: "https://www.bs.ch",
  },
  {
    emoji: "🇮🇳",
    label: "Indian Embassy",
    sub: "Consular services, Berne",
    href: "https://www.indembassybern.gov.in",
  },
];

export default function BaselPage() {
  const cardBase: React.CSSProperties = {
    background: "var(--surface-2)",
    border: "1px solid var(--border)",
    borderRadius: 16,
    padding: "16px 20px",
  };

  const sectionHeading: React.CSSProperties = {
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "var(--text)",
    marginBottom: 4,
    letterSpacing: "-0.01em",
  };

  const sectionSubtext: React.CSSProperties = {
    fontSize: "0.85rem",
    color: "var(--text-3)",
    marginBottom: 20,
    lineHeight: 1.5,
  };

  const dt: React.CSSProperties = {
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "var(--text-3)",
    marginBottom: 2,
  };

  const dd: React.CSSProperties = {
    fontSize: "0.9rem",
    color: "var(--text-2)",
    lineHeight: 1.6,
    marginBottom: 12,
  };

  const subhead: React.CSSProperties = {
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "var(--text)",
    marginBottom: 10,
    marginTop: 20,
  };

  const badge = (color: string): React.CSSProperties => ({
    display: "inline-block",
    fontSize: "0.65rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color,
    border: `1px solid ${color}`,
    borderRadius: 4,
    padding: "2px 8px",
    marginBottom: 16,
    opacity: 0.9,
  });

  const sectionWrap = (borderColor: string): React.CSSProperties => ({
    ...cardBase,
    borderLeft: `4px solid ${borderColor}`,
    borderRadius: 16,
  });

  const emergencyPill: React.CSSProperties = {
    display: "flex",
    alignItems: "baseline",
    gap: 10,
    padding: "10px 16px",
    background: "var(--surface-2)",
    border: "1px solid var(--border)",
    borderRadius: 10,
  };

  return (
    <div>
      <PageHeader
        title="Indians in Basel"
        subtitle="Switzerland's pharmaceutical capital — home to Novartis, Roche, Art Basel, and a growing Indian professional community at the tri-national CH/DE/FR border."
        badge="City Guide"
        gradient="from-red-600 to-orange-500"
        breadcrumbs={[
          { label: "Cities", href: "/cities" },
          { label: "Basel" },
        ]}
      />

      {/* Hero Image */}
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "24px 20px 0" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Basel_-_Mittlere_Bruecke1.jpg/1280px-Basel_-_Mittlere_Bruecke1.jpg"
          alt="Basel Mittlere Brücke over the Rhine"
          style={{
            width: "100%",
            height: 280,
            objectFit: "cover",
            borderRadius: 16,
            display: "block",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "32px 20px 64px",
          display: "flex",
          flexDirection: "column",
          gap: 40,
        }}
      >
        {/* ── SECTION 1: Quick Actions ─────────────────────────────────── */}
        <section>
          <p style={{ ...dt, marginBottom: 12 }}>Quick Links</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 12,
            }}
          >
            {quickActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...cardBase,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 6,
                  textDecoration: "none",
                  transition: "border-color 0.15s",
                }}
              >
                <span style={{ fontSize: 28, lineHeight: 1 }}>{action.emoji}</span>
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "var(--text)",
                    marginTop: 4,
                  }}
                >
                  {action.label}
                </span>
                <span style={{ fontSize: "0.78rem", color: "var(--text-3)" }}>
                  {action.sub}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ── SECTION 2: Newcomer Track ────────────────────────────────── */}
        <section>
          <div style={sectionWrap("#f97316")}>
            <span style={badge("#f97316")}>For Newcomers</span>

            {/* Registration */}
            <h2 style={sectionHeading}>Address Registration</h2>
            <p style={sectionSubtext}>
              Register within 14 days of moving in — mandatory for all residents.
            </p>
            <div style={cardBase}>
              <p style={subhead}>Einwohneramt Basel-Stadt</p>
              <dl style={{ margin: 0 }}>
                <dt style={dt}>Address</dt>
                <dd style={dd}>Spiegelgasse 6, 4051 Basel</dd>
                <dt style={dt}>Official Portal</dt>
                <dd style={{ ...dd, marginBottom: 4 }}>
                  <a
                    href="https://www.bs.ch/themen/einwohneramt"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#f97316", textDecoration: "none" }}
                  >
                    bs.ch/themen/einwohneramt
                  </a>
                </dd>
                <dt style={dt}>Deadline</dt>
                <dd style={dd}>Within 14 days of moving in</dd>
                <dt style={dt}>Documents Required</dt>
                <dd style={dd}>
                  Valid passport or ID · Signed rental contract · Residence permit ·
                  Birth and marriage certificates (for families) · Abmeldung from
                  previous Swiss municipality
                </dd>
              </dl>
            </div>

            {/* Utilities */}
            <p style={{ ...subhead, marginTop: 24 }}>Utilities</p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 12,
              }}
            >
              <div style={cardBase}>
                <p style={{ ...dt, marginBottom: 6 }}>Electricity, Gas & Water</p>
                <p style={{ ...dd, marginBottom: 4 }}>
                  <strong style={{ color: "var(--text)" }}>IWB</strong> — Industrielle
                  Werke Basel is the single provider for electricity, gas, water, and
                  district heating in Basel-Stadt.
                </p>
                <a
                  href="https://www.iwb.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.8rem", color: "#f97316", textDecoration: "none" }}
                >
                  iwb.ch →
                </a>
              </div>
              <div style={cardBase}>
                <p style={{ ...dt, marginBottom: 6 }}>Internet Providers</p>
                <p style={{ ...dd, marginBottom: 4 }}>
                  Swisscom · Sunrise · Salt · UPC. Compare plans at{" "}
                  <a
                    href="https://www.comparis.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#f97316", textDecoration: "none" }}
                  >
                    comparis.ch
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Public Transport */}
            <p style={{ ...subhead, marginTop: 24 }}>Public Transport</p>
            <div style={cardBase}>
              <dl style={{ margin: 0 }}>
                <dt style={dt}>Within Basel City</dt>
                <dd style={dd}>
                  <strong style={{ color: "var(--text)" }}>BVB</strong> — Basler
                  Verkehrs-Betriebe (
                  <a
                    href="https://www.bvb.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#f97316", textDecoration: "none" }}
                  >
                    bvb.ch
                  </a>
                  ) — Trams and buses within Basel city
                </dd>
                <dt style={dt}>Regional Connections</dt>
                <dd style={dd}>
                  <strong style={{ color: "var(--text)" }}>BLT</strong> — Baselland
                  Transport (
                  <a
                    href="https://www.blt.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#f97316", textDecoration: "none" }}
                  >
                    blt.ch
                  </a>
                  ) — Regional connections to Basel-Landschaft
                </dd>
                <dt style={dt}>TNW Pass</dt>
                <dd style={dd}>
                  Covers BVB + BLT + regional buses. Buy via BVB App or SBB App.
                  Basel is very walkable; the old town (Altstadt) is compact and
                  tram-connected.
                </dd>
                <dt style={dt}>Tri-National Advantage</dt>
                <dd style={dd}>
                  Basel sits at the CH/DE/FR border — German and French regional
                  transport also accessible from the city.
                </dd>
              </dl>
            </div>

            {/* Education */}
            <p style={{ ...subhead, marginTop: 24 }}>Education &amp; Universities</p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 12,
              }}
            >
              {[
                {
                  name: "University of Basel",
                  url: "https://www.unibas.ch",
                  note:
                    "Switzerland's oldest university (1460). Strong in medicine, chemistry, and life sciences.",
                },
                {
                  name: "FHNW",
                  url: "https://www.fhnw.ch",
                  note:
                    "University of Applied Sciences; engineering, business, and health programmes.",
                },
                {
                  name: "International School Basel",
                  url: "https://www.isbasel.ch",
                  note:
                    "English-medium IB curriculum. Popular with Indian expat families.",
                },
                {
                  name: "City School Enrollment",
                  url: "https://www.ed.bs.ch",
                  note:
                    "Public school enrollment via the Erziehungsdepartement (ed.bs.ch).",
                },
              ].map((item) => (
                <div key={item.name} style={cardBase}>
                  <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text)", marginBottom: 4 }}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--text)", textDecoration: "none" }}
                    >
                      {item.name}
                    </a>
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.5 }}>
                    {item.note}
                  </p>
                </div>
              ))}
            </div>

            {/* Friends & Expats */}
            <p style={{ ...subhead, marginTop: 24 }}>Making Friends &amp; Expat Groups</p>
            <div style={cardBase}>
              <ul style={{ margin: 0, paddingLeft: 18, color: "var(--text-2)", fontSize: "0.9rem", lineHeight: 1.8 }}>
                <li>
                  <strong style={{ color: "var(--text)" }}>Indian Community Basel</strong> — informal
                  networks through pharma companies (Novartis, Roche)
                </li>
                <li>
                  <strong style={{ color: "var(--text)" }}>InBa</strong> — India Basel festival
                  community (annual Indian cultural festival at Theater Basel)
                </li>
                <li>
                  <strong style={{ color: "var(--text)" }}>InterNations Basel</strong> — expat
                  networking and social events
                </li>
                <li>
                  <strong style={{ color: "var(--text)" }}>Rotary / Lions clubs</strong> — professional
                  networking for newcomers
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: Resident Track ────────────────────────────────── */}
        <section>
          <div style={sectionWrap("#10b981")}>
            <span style={badge("#10b981")}>Community &amp; Daily Life</span>

            {/* Indian Community */}
            <h2 style={sectionHeading}>Indian Community</h2>
            <p style={sectionSubtext}>
              Basel's Indian community is concentrated around the Novartis and Roche
              campuses, with a strong professional network in pharma and life sciences.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 12,
              }}
            >
              {[
                {
                  name: "InBa — India Basel Festival",
                  url: null,
                  note:
                    "Annual festival (usually June at Theater Basel) celebrating Indian culture with music, dance, and cuisine.",
                },
                {
                  name: "SMA Basel",
                  url: "https://www.smabasel.ch",
                  note:
                    "Swiss Marathi Association Basel — cultural and social events for the Marathi-speaking community.",
                },
                {
                  name: "Indian Embassy Berne",
                  url: "https://www.indembassybern.gov.in",
                  note:
                    "Kirchenfeldstrasse 28, 3005 Bern. Handles all consular services for Basel residents.",
                },
                {
                  name: "Novartis & Roche Networks",
                  url: null,
                  note:
                    "Largest informal Indian networks in Basel form through pharma colleagues at Dreispitz / St. Johann campuses.",
                },
              ].map((item) => (
                <div key={item.name} style={cardBase}>
                  <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text)", marginBottom: 4 }}>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--text)", textDecoration: "none" }}
                      >
                        {item.name}
                      </a>
                    ) : (
                      item.name
                    )}
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.5 }}>
                    {item.note}
                  </p>
                </div>
              ))}
            </div>

            {/* City Resources */}
            <p style={{ ...subhead, marginTop: 24 }}>City Resources</p>
            <div style={cardBase}>
              <dl style={{ margin: 0 }}>
                <dt style={dt}>Canton Portal</dt>
                <dd style={dd}>
                  <a
                    href="https://www.bs.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#10b981", textDecoration: "none" }}
                  >
                    bs.ch
                  </a>{" "}
                  — Canton Basel-Stadt main portal; all official services
                </dd>
                <dt style={dt}>City Hall (Rathaus)</dt>
                <dd style={dd}>
                  Marktplatz — historical seat of government; striking red-frescoed
                  16th-century building, open for self-guided visits
                </dd>
                <dt style={dt}>Geography</dt>
                <dd style={dd}>
                  Basel sits at the tri-national border of Switzerland, Germany, and
                  France (Dreiländereck). Shop and explore across three countries.
                </dd>
              </dl>
            </div>

            {/* Civic Engagement */}
            <p style={{ ...subhead, marginTop: 24 }}>Civic Engagement</p>
            <div style={cardBase}>
              <ul style={{ margin: 0, paddingLeft: 18, color: "var(--text-2)", fontSize: "0.9rem", lineHeight: 1.8 }}>
                <li>Neighbourhood associations by district (Wohnviertel)</li>
                <li>
                  Volunteer:{" "}
                  <a
                    href="https://www.caritas-bl-so.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#10b981", textDecoration: "none" }}
                  >
                    Caritas Basel
                  </a>{" "}
                  and Sozialhilfe Basel
                </li>
                <li>
                  Grossrat (cantonal parliament) public sessions — schedule at{" "}
                  <a
                    href="https://www.grosserrat.bs.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#10b981", textDecoration: "none" }}
                  >
                    grosserrat.bs.ch
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: Amenities & Recreation ───────────────────────── */}
        <section>
          <h2 style={{ ...sectionHeading, fontSize: "1.35rem", marginBottom: 6 }}>
            Amenities &amp; Recreation
          </h2>
          <p style={sectionSubtext}>
            Basel punches far above its size — more museums per capita than almost
            anywhere in the world, Rhine swimming in summer, and the world's top art fair.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {/* Parks */}
            <div style={cardBase}>
              <p style={{ ...dt, marginBottom: 12 }}>Parks &amp; Nature</p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { name: "Kannenfeldpark", note: "Largest park in Basel; playground, outdoor chess, family area." },
                  { name: "Lange Erlen", note: "Nature reserve and animal park (free entry); walks along the Wiese river." },
                  { name: "Rheinufer", note: "Rhine riverside promenade. Rhine swimming is Basel's beloved summer tradition — float downstream." },
                  { name: "Dreiländereck", note: "Tri-national border point where CH, DE, FR meet; landmark and riverside walks." },
                ].map((p) => (
                  <li key={p.name}>
                    <span style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--text)" }}>
                      {p.name}
                    </span>
                    <span style={{ fontSize: "0.82rem", color: "var(--text-2)", display: "block", lineHeight: 1.5 }}>
                      {p.note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Health & Safety */}
            <div style={cardBase}>
              <p style={{ ...dt, marginBottom: 12 }}>Health &amp; Safety</p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                <li>
                  <a
                    href="https://www.usb.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--text)", textDecoration: "none" }}
                  >
                    Universitätsspital Basel (USB)
                  </a>
                  <span style={{ fontSize: "0.82rem", color: "var(--text-2)", display: "block", lineHeight: 1.5 }}>
                    Main university hospital, 24/7 ER — Petersgraben 4, 4031 Basel
                  </span>
                </li>
                <li>
                  <a
                    href="https://www.ksbl.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--text)", textDecoration: "none" }}
                  >
                    Kantonsspital Baselland (KSBL)
                  </a>
                  <span style={{ fontSize: "0.82rem", color: "var(--text-2)", display: "block", lineHeight: 1.5 }}>
                    Regional hospital serving Basel-Landschaft
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--text)" }}>Late-Night Pharmacy</span>
                  <span style={{ fontSize: "0.82rem", color: "var(--text-2)", display: "block", lineHeight: 1.5 }}>
                    Basel SBB station and Aeschenvorstadt area
                  </span>
                </li>
                <li>
                  <a
                    href="https://www.polizei.bs.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--text)", textDecoration: "none" }}
                  >
                    Kantonspolizei Basel-Stadt
                  </a>
                  <span style={{ fontSize: "0.82rem", color: "var(--text-2)", display: "block" }}>
                    polizei.bs.ch
                  </span>
                </li>
              </ul>
            </div>

            {/* Cultural & Sports */}
            <div style={cardBase}>
              <p style={{ ...dt, marginBottom: 12 }}>Culture &amp; Sports</p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { name: "Kunstmuseum Basel", url: "https://www.kunstmuseumbasel.ch", note: "One of Switzerland's most important art museums." },
                  { name: "Fondation Beyeler", url: "https://www.fondationbeyeler.ch", note: "World-class modern art in Riehen — a must-visit." },
                  { name: "Theater Basel", url: "https://www.theater-basel.ch", note: "Opera, ballet, and drama; venue for the annual InBa festival." },
                  { name: "Basel Zoo", url: "https://www.zoobasel.ch", note: "Switzerland's oldest and most-visited zoo." },
                  { name: "Rheinbad", url: null, note: "Outdoor Rhine swimming, summer — beloved local tradition." },
                ].map((c) => (
                  <li key={c.name}>
                    {c.url ? (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--text)", textDecoration: "none" }}
                      >
                        {c.name}
                      </a>
                    ) : (
                      <span style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--text)" }}>{c.name}</span>
                    )}
                    <span style={{ fontSize: "0.82rem", color: "var(--text-2)", display: "block", lineHeight: 1.5 }}>
                      {c.note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: Indian Food & Grocery ─────────────────────────── */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ ...sectionHeading, fontSize: "1.35rem", marginBottom: 6 }}>
            Indian Restaurants &amp; Grocery
          </h2>
          <p style={sectionSubtext}>Indian dining and grocery in Basel — links open in Google Maps.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>

            <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 16, padding: "20px 22px" }}>
              <h3 style={{ margin: "0 0 14px", fontSize: 13, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--text-3)" }}>🍛 Restaurants</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { name: "Little India Basel", note: "Established North Indian near the Marktplatz", href: "https://maps.google.com/?q=Little+India+Restaurant+Basel" },
                  { name: "Bombay Dreams Basel", note: "Bollywood atmosphere, broad menu", href: "https://maps.google.com/?q=Bombay+Dreams+Restaurant+Basel" },
                  { name: "Goa Restaurant Basel", note: "Goan and coastal Indian cuisine", href: "https://maps.google.com/?q=Goa+Restaurant+Basel+Switzerland" },
                  { name: "Namaste Basel", note: "Friendly neighbourhood Indian, Gundeldingen", href: "https://maps.google.com/?q=Namaste+Restaurant+Basel+Switzerland" },
                  { name: "More on Maps →", note: "Browse all Indian restaurants", href: "https://www.google.com/maps/search/Indian+restaurants+Basel+Switzerland" },
                ].map(r => (
                  <a key={r.name} href={r.href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "column", textDecoration: "none" }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--in)" }}>{r.name}</span>
                    <span style={{ fontSize: 11, color: "var(--text-3)", marginTop: 1 }}>{r.note}</span>
                  </a>
                ))}
              </div>
            </div>

            <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 16, padding: "20px 22px" }}>
              <h3 style={{ margin: "0 0 14px", fontSize: 13, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--text-3)" }}>🛒 Indian &amp; Asian Groceries</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { name: "Asia Market Basel", note: "Lange Gasse — Indian spices, lentils, rice", href: "https://maps.google.com/?q=Asia+Market+Basel+Switzerland" },
                  { name: "Exotic Food Basel", note: "South Asian and tropical products, Gundeldingen", href: "https://maps.google.com/?q=Exotic+Food+Basel+Switzerland" },
                  { name: "Indian Spice Shop Basel", note: "Spices, dals, frozen Indian snacks", href: "https://maps.google.com/?q=Indian+Spice+Shop+Basel+Switzerland" },
                  { name: "More on Maps →", note: "Browse all Indian grocery stores", href: "https://www.google.com/maps/search/Indian+grocery+store+Basel+Switzerland" },
                ].map(r => (
                  <a key={r.name} href={r.href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "column", textDecoration: "none" }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--in)" }}>{r.name}</span>
                    <span style={{ fontSize: 11, color: "var(--text-3)", marginTop: 1 }}>{r.note}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 6: Emergency & Contacts ─────────────────────────── */}
        <section>
          <h2 style={{ ...sectionHeading, fontSize: "1.35rem", marginBottom: 6 }}>
            Emergency &amp; Key Contacts
          </h2>
          <p style={sectionSubtext}>
            Save these before you need them.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {/* Emergency numbers */}
            <div style={cardBase}>
              <p style={{ ...dt, marginBottom: 14 }}>Swiss Emergency Numbers</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { num: "117", label: "Police" },
                  { num: "118", label: "Fire Brigade" },
                  { num: "144", label: "Ambulance" },
                  { num: "1414", label: "REGA helicopter rescue" },
                  { num: "145", label: "Poison Control" },
                  { num: "143", label: "Emotional support (Die Dargebotene Hand)" },
                  { num: "112", label: "European emergency (roaming)" },
                ].map((e) => (
                  <div key={e.num} style={emergencyPill}>
                    <span
                      style={{
                        fontWeight: 800,
                        fontSize: "1.1rem",
                        color: "#dc2626",
                        fontVariantNumeric: "tabular-nums",
                        minWidth: 38,
                      }}
                    >
                      {e.num}
                    </span>
                    <span style={{ fontSize: "0.87rem", color: "var(--text-2)" }}>
                      {e.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Basel contacts */}
            <div style={cardBase}>
              <p style={{ ...dt, marginBottom: 14 }}>Basel Contacts</p>
              <dl style={{ margin: 0 }}>
                <dt style={dt}>Kantonspolizei Basel-Stadt</dt>
                <dd style={dd}>
                  <a
                    href="https://www.polizei.bs.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--text-2)", textDecoration: "none" }}
                  >
                    polizei.bs.ch
                  </a>
                </dd>
                <dt style={dt}>Rathaus Basel</dt>
                <dd style={dd}>
                  Marktplatz 9, 4001 Basel —{" "}
                  <a
                    href="https://www.bs.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--text-2)", textDecoration: "none" }}
                  >
                    bs.ch
                  </a>
                </dd>
                <dt style={dt}>Indian Embassy Berne</dt>
                <dd style={dd}>
                  Kirchenfeldstrasse 28, 3005 Bern —{" "}
                  <a
                    href="https://www.indembassybern.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--text-2)", textDecoration: "none" }}
                  >
                    indembassybern.gov.in
                  </a>
                  <br />
                  <span style={{ fontSize: "0.8rem", color: "var(--text-3)" }}>
                    Handles consular services (OCI, passport renewal) for all Basel residents
                  </span>
                </dd>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
