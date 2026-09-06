import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indians in Bern — Community Guide",
  description:
    "Complete guide for Indians in Bern — registration, utilities, transport, Indian Embassy, federal employment, hospitals, UNESCO Old Town, and emergency contacts.",
  openGraph: {
    title: "Indians in Bern — Community Guide | Indiaspora",
    description:
      "Complete guide for Indians in Bern — registration, utilities, transport, Indian Embassy, federal employment, hospitals, UNESCO Old Town, and emergency contacts.",
  },
};

const cardStyle: React.CSSProperties = {
  background: "var(--surface-2)",
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: "16px 20px",
};

const quickActions = [
  {
    emoji: "🏛️",
    label: "Register Address",
    sub: "Einwohnerdienste Bern",
    href: "https://www.bern.ch/themen/bevolkerung-und-einwohnerdienste",
    external: true,
  },
  {
    emoji: "🚎",
    label: "BERNMOBIL Transport",
    sub: "Trams & buses in Bern",
    href: "https://www.bernmobil.ch",
    external: true,
  },
  {
    emoji: "🇮🇳",
    label: "Indian Embassy",
    sub: "indembassybern.gov.in",
    href: "https://www.indembassybern.gov.in",
    external: true,
  },
  {
    emoji: "💻",
    label: "City Services",
    sub: "bern.ch official portal",
    href: "https://www.bern.ch",
    external: true,
  },
];

const emergencyNumbers = [
  { number: "117", label: "Police" },
  { number: "118", label: "Fire" },
  { number: "144", label: "Ambulance" },
  { number: "1414", label: "REGA helicopter" },
  { number: "145", label: "Poison Control" },
  { number: "143", label: "Emotional support" },
  { number: "112", label: "European emergency" },
];

export default function BernPage() {
  return (
    <div>
      <PageHeader
        title="Indians in Bern"
        subtitle="Switzerland's federal capital — home to the Embassy of India, the Aare river loop, and a tight-knit Indian community in the heart of the Bernese Mittelland."
        badge="City Guide"
        gradient="from-green-600 to-emerald-600"
        breadcrumbs={[
          { label: "Cities", href: "/cities" },
          { label: "Bern" },
        ]}
      />

      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "40px 20px 80px", display: "flex", flexDirection: "column", gap: 56 }}>

        {/* Hero Image */}
        <div>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Bern_Bundeshaus_2009.jpg/1280px-Bern_Bundeshaus_2009.jpg"
            alt="Bern Federal Palace (Bundeshaus)"
            width={1280}
            height={426}
            unoptimized
            style={{ width: "100%", height: 280, objectFit: "cover", borderRadius: 16 }}
          />
        </div>

        {/* SECTION 1 — Quick Actions */}
        <section>
          <h2 style={{ color: "var(--text)", fontSize: 22, fontWeight: 700, marginBottom: 4 }}>Quick Actions</h2>
          <p style={{ color: "var(--text-2)", fontSize: 14, marginBottom: 20 }}>Essential links for Indians in Bern</p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}>
            {quickActions.map((action) =>
              action.external ? (
                <a
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...cardStyle, display: "flex", alignItems: "center", gap: 16, textDecoration: "none" }}
                >
                  <span style={{ fontSize: 28, lineHeight: 1, flexShrink: 0 }}>{action.emoji}</span>
                  <div>
                    <div style={{ color: "var(--text)", fontWeight: 700, fontSize: 15 }}>{action.label}</div>
                    <div style={{ color: "var(--text-2)", fontSize: 12, marginTop: 2 }}>{action.sub}</div>
                  </div>
                </a>
              ) : (
                <Link
                  key={action.label}
                  href={action.href}
                  style={{ ...cardStyle, display: "flex", alignItems: "center", gap: 16, textDecoration: "none" }}
                >
                  <span style={{ fontSize: 28, lineHeight: 1, flexShrink: 0 }}>{action.emoji}</span>
                  <div>
                    <div style={{ color: "var(--text)", fontWeight: 700, fontSize: 15 }}>{action.label}</div>
                    <div style={{ color: "var(--text-2)", fontSize: 12, marginTop: 2 }}>{action.sub}</div>
                  </div>
                </Link>
              )
            )}
          </div>
        </section>

        {/* SECTION 2 — Newcomer Track */}
        <section style={{ borderLeft: "4px solid #f97316", paddingLeft: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
            <h2 style={{ color: "var(--text)", fontSize: 22, fontWeight: 700, margin: 0 }}>Newcomer Track</h2>
            <span style={{
              background: "rgba(249,115,22,0.15)",
              color: "#f97316",
              fontSize: 11,
              fontWeight: 700,
              padding: "2px 10px",
              borderRadius: 99,
              letterSpacing: "0.04em",
            }}>FOR NEWCOMERS</span>
          </div>
          <p style={{ color: "var(--text-2)", fontSize: 14, marginBottom: 24 }}>Everything you need to settle in during your first weeks in Bern</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* Registration */}
            <div style={cardStyle}>
              <h3 style={{ color: "var(--text)", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>
                Registration — Einwohnerdienste
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>
                  <strong style={{ color: "var(--text)" }}>Office:</strong> Einwohnerdienste Bern, Predigergasse 5, 3000 Bern 7
                </p>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>
                  <strong style={{ color: "var(--text)" }}>Website:</strong>{" "}
                  <a href="https://www.bern.ch/themen/bevolkerung-und-einwohnerdienste" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316" }}>
                    bern.ch/themen/bevolkerung-und-einwohnerdienste
                  </a>
                </p>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>
                  <strong style={{ color: "var(--text)" }}>Deadline:</strong> Within 14 days of moving in
                </p>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>
                  <strong style={{ color: "var(--text)" }}>Documents required:</strong> Valid passport/ID, signed rental contract or landlord confirmation, residence permit (L/B/C/G), birth/marriage certificates for families, Abmeldung from previous Swiss municipality
                </p>
              </div>
            </div>

            {/* Utilities */}
            <div style={cardStyle}>
              <h3 style={{ color: "var(--text)", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Utilities</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>
                  <strong style={{ color: "var(--text)" }}>Electricity, gas, water & heating:</strong>{" "}
                  <a href="https://www.ewb.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316" }}>ewb.ch</a>
                  {" "}— ewb (Energie Wasser Bern) is the municipal utility providing all services in Bern city
                </p>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>
                  <strong style={{ color: "var(--text)" }}>Internet providers:</strong>{" "}
                  <a href="https://www.swisscom.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316" }}>Swisscom</a>,{" "}
                  <a href="https://www.sunrise.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316" }}>Sunrise</a>,{" "}
                  <a href="https://www.salt.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316" }}>Salt</a>{" "}
                  — compare plans at{" "}
                  <a href="https://www.comparis.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316" }}>comparis.ch</a>
                </p>
              </div>
            </div>

            {/* Transport */}
            <div style={cardStyle}>
              <h3 style={{ color: "var(--text)", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Public Transport</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>
                  <a href="https://www.bernmobil.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316", fontWeight: 600 }}>BERNMOBIL</a>
                  {" "}— Trams and buses within Bern city; app available for tickets and real-time timetables
                </p>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>
                  <a href="https://www.rbs.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316", fontWeight: 600 }}>RBS — Regionalverkehr Bern-Solothurn</a>
                  {" "}— Regional rail connections beyond the city
                </p>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>
                  <strong style={{ color: "var(--text)" }}>SBB — Bern Hauptbahnhof:</strong> Direct trains to Zurich (57 min), Basel (55 min), Geneva (1h40), Lausanne (65 min), Interlaken (50 min)
                </p>
              </div>
            </div>

            {/* Education */}
            <div style={cardStyle}>
              <h3 style={{ color: "var(--text)", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Education & Universities</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>
                  <a href="https://www.unibe.ch/index_eng.html" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316", fontWeight: 600 }}>University of Bern (Universität Bern)</a>
                  {" "}— ~20,000 students; strong medicine, law, veterinary medicine, and natural sciences; located in Länggasse quarter
                </p>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>
                  <a href="https://www.bfh.ch/en/" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316", fontWeight: 600 }}>Bern University of Applied Sciences (BFH)</a>
                  {" "}— Engineering, business, health, architecture; ~6,000 students
                </p>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>
                  <a href="https://www.isberne.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316", fontWeight: 600 }}>International School Berne</a>
                  {" "}— IB curriculum for expat families
                </p>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>
                  City school enrollment via Schulamt Bern — see bern.ch/schulamt
                </p>
              </div>
            </div>

            {/* Making Friends */}
            <div style={cardStyle}>
              <h3 style={{ color: "var(--text)", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Making Friends & Expat Groups</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>Indian community in Bern is largely connected through the Embassy of India and federal government roles</p>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>InterNations Bern — expat networking events across the city</p>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>University international office networks — for students and researchers</p>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>Länggasse neighbourhood (near University of Bern) — student and international community atmosphere</p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3 — Resident Track */}
        <section style={{ borderLeft: "4px solid #10b981", paddingLeft: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
            <h2 style={{ color: "var(--text)", fontSize: 22, fontWeight: 700, margin: 0 }}>Community & Daily Life</h2>
            <span style={{
              background: "rgba(16,185,129,0.15)",
              color: "#10b981",
              fontSize: 11,
              fontWeight: 700,
              padding: "2px 10px",
              borderRadius: 99,
              letterSpacing: "0.04em",
            }}>COMMUNITY &amp; DAILY LIFE</span>
          </div>
          <p style={{ color: "var(--text-2)", fontSize: 14, marginBottom: 24 }}>Indian associations, civic life, and city resources for residents</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* Indian Community */}
            <div style={cardStyle}>
              <h3 style={{ color: "var(--text)", fontWeight: 700, fontSize: 16, marginBottom: 10 }}>Indian Community</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div>
                  <a href="https://www.indembassybern.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: "#10b981", fontWeight: 700, fontSize: 14 }}>
                    Embassy of India, Berne
                  </a>
                  <p style={{ color: "var(--text-2)", fontSize: 13, marginTop: 2 }}>
                    Kirchenfeldstrasse 28, 3005 Bern — Tel: +41 31 350 11 30. CRITICAL resource: handles passport renewal, OCI, visa, and attestation for ALL Indians in Switzerland. Appointment via website.
                  </p>
                </div>
                <div>
                  <p style={{ color: "var(--text)", fontWeight: 600, fontSize: 14 }}>IAB — Indian Association Berne</p>
                  <p style={{ color: "var(--text-2)", fontSize: 13, marginTop: 2 }}>Cultural events and festivals for the local Indian community in Bern</p>
                </div>
                <div>
                  <p style={{ color: "var(--text)", fontWeight: 600, fontSize: 14 }}>BAB — Bharatiya Association Bern</p>
                  <p style={{ color: "var(--text-2)", fontSize: 13, marginTop: 2 }}>Community support and cultural preservation for Indians and people of Indian origin in the Berne area</p>
                </div>
                <p style={{ color: "var(--text-2)", fontSize: 13 }}>
                  Indian community in Bern is relatively small (~1,500–2,000) but well-connected through diplomatic, federal government, and university networks
                </p>
              </div>
            </div>

            {/* City Resources */}
            <div style={cardStyle}>
              <h3 style={{ color: "var(--text)", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>City Resources</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>
                  <a href="https://www.bern.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#10b981", fontWeight: 600 }}>bern.ch</a>
                  {" "}— City of Bern official portal
                </p>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>
                  <a href="https://www.be.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#10b981", fontWeight: 600 }}>be.ch</a>
                  {" "}— Canton Bern portal; taxes, permits, official cantonal services
                </p>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>
                  Bern is Switzerland&apos;s federal capital and seat of the Federal Council and Parliament (Bundesrat)
                </p>
              </div>
            </div>

            {/* Civic Engagement */}
            <div style={cardStyle}>
              <h3 style={{ color: "var(--text)", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Civic Engagement</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>Stadtrat (city council) — public sessions; schedule at bern.ch</p>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>
                  Volunteer:{" "}
                  <a href="https://www.caritas-bern.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#10b981" }}>Caritas Bern</a>,{" "}
                  Benevol Bern
                </p>
                <p style={{ color: "var(--text-2)", fontSize: 14 }}>
                  Federal Parliament tours when not in session — free;{" "}
                  <a href="https://www.parl.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#10b981" }}>parl.ch</a>
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4 — Amenities & Recreation */}
        <section>
          <h2 style={{ color: "var(--text)", fontSize: 22, fontWeight: 700, marginBottom: 4 }}>Amenities &amp; Recreation</h2>
          <p style={{ color: "var(--text-2)", fontSize: 14, marginBottom: 24 }}>Parks, health services, culture, and sport in Switzerland&apos;s UNESCO-listed federal capital</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>

            {/* Parks & Nature */}
            <div style={cardStyle}>
              <h3 style={{ color: "var(--text)", fontWeight: 700, fontSize: 16, marginBottom: 10 }}>Parks &amp; Nature</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div>
                  <p style={{ color: "var(--text)", fontWeight: 600, fontSize: 14 }}>Rosengarten (Rose Garden)</p>
                  <p style={{ color: "var(--text-2)", fontSize: 13 }}>200+ rose varieties; panoramic view over UNESCO Old Town and Aare river; free entry; best May–October</p>
                </div>
                <div>
                  <p style={{ color: "var(--text)", fontWeight: 600, fontSize: 14 }}>BärenPark</p>
                  <p style={{ color: "var(--text-2)", fontSize: 13 }}>Bern&apos;s famous bear park on the Aare riverbank; free entry; year-round</p>
                </div>
                <div>
                  <p style={{ color: "var(--text)", fontWeight: 600, fontSize: 14 }}>Gurten (858 m)</p>
                  <p style={{ color: "var(--text-2)", fontSize: 13 }}>Bern&apos;s local hill via Gurtenbahn funicular; panoramic Alps views (Eiger, Mönch, Jungfrau); annual Gurtenfestival in July</p>
                </div>
                <div>
                  <p style={{ color: "var(--text)", fontWeight: 600, fontSize: 14 }}>Aare River — Marzilibad</p>
                  <p style={{ color: "var(--text-2)", fontSize: 13 }}>Beloved summer swimming tradition; free entry; let the current carry you downstream; clean, fast water ~18°C in summer</p>
                </div>
              </div>
            </div>

            {/* Health & Safety */}
            <div style={cardStyle}>
              <h3 style={{ color: "var(--text)", fontWeight: 700, fontSize: 16, marginBottom: 10 }}>Health &amp; Safety</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div>
                  <a href="https://www.insel.ch" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text)", fontWeight: 600, fontSize: 14 }}>Inselspital — Bern University Hospital</a>
                  <p style={{ color: "var(--text-2)", fontSize: 13 }}>Main hospital, 24/7 ER; Freiburgstrasse 18, 3010 Bern</p>
                </div>
                <div>
                  <a href="https://www.lindenhofgruppe.ch" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text)", fontWeight: 600, fontSize: 14 }}>Lindenhofspital</a>
                  <p style={{ color: "var(--text-2)", fontSize: 13 }}>Private hospital; Bremgartenstrasse 119, Bern</p>
                </div>
                <div>
                  <p style={{ color: "var(--text)", fontWeight: 600, fontSize: 14 }}>Late-night pharmacy</p>
                  <p style={{ color: "var(--text-2)", fontSize: 13 }}>Bahnhof-Apotheke — near Bern HB main station</p>
                </div>
                <div>
                  <p style={{ color: "var(--text)", fontWeight: 600, fontSize: 14 }}>Police</p>
                  <p style={{ color: "var(--text-2)", fontSize: 13 }}>
                    Stadtpolizei Bern and Kantonspolizei Bern —{" "}
                    <a href="https://www.police.be.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#10b981" }}>police.be.ch</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Cultural & Sports */}
            <div style={cardStyle}>
              <h3 style={{ color: "var(--text)", fontWeight: 700, fontSize: 16, marginBottom: 10 }}>Culture &amp; Landmarks</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div>
                  <a href="https://www.bhm.ch" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text)", fontWeight: 600, fontSize: 14 }}>Historisches Museum Bern</a>
                  <p style={{ color: "var(--text-2)", fontSize: 13 }}>Also houses the Einstein Museum; largest historical museum in Switzerland</p>
                </div>
                <div>
                  <a href="https://www.kunstmuseumbern.ch" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text)", fontWeight: 600, fontSize: 14 }}>Kunstmuseum Bern</a>
                  <p style={{ color: "var(--text-2)", fontSize: 13 }}>Permanent collection includes Paul Klee works</p>
                </div>
                <div>
                  <p style={{ color: "var(--text)", fontWeight: 600, fontSize: 14 }}>UNESCO Old Town (Altstadt)</p>
                  <p style={{ color: "var(--text-2)", fontSize: 13 }}>6 km of sandstone arcaded walkways (Lauben); 11 Renaissance fountains; free to explore</p>
                </div>
                <div>
                  <p style={{ color: "var(--text)", fontWeight: 600, fontSize: 14 }}>Zytglogge (Clock Tower)</p>
                  <p style={{ color: "var(--text-2)", fontSize: 13 }}>Animated clock mechanism performs 4 min before every hour; guided tours available</p>
                </div>
                <div>
                  <a href="https://www.einstein-bern.ch" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text)", fontWeight: 600, fontSize: 14 }}>Einstein House, Kramgasse 49</a>
                  <p style={{ color: "var(--text-2)", fontSize: 13 }}>Where Einstein developed Special Relativity (1905)</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 5 — Emergency & Contacts */}
        <section>
          <h2 style={{ color: "var(--text)", fontSize: 22, fontWeight: 700, marginBottom: 4 }}>Emergency &amp; Contacts</h2>
          <p style={{ color: "var(--text-2)", fontSize: 14, marginBottom: 24 }}>Save these numbers before you need them</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>

            {/* Swiss Emergency Numbers */}
            <div style={cardStyle}>
              <h3 style={{ color: "var(--text)", fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Swiss Emergency Numbers</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {emergencyNumbers.map((e) => (
                  <div key={e.number} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{
                      background: "rgba(239,68,68,0.12)",
                      color: "#ef4444",
                      fontWeight: 800,
                      fontSize: 15,
                      padding: "2px 10px",
                      borderRadius: 8,
                      minWidth: 48,
                      textAlign: "center",
                      fontVariantNumeric: "tabular-nums",
                    }}>{e.number}</span>
                    <span style={{ color: "var(--text-2)", fontSize: 14 }}>{e.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bern Key Contacts */}
            <div style={cardStyle}>
              <h3 style={{ color: "var(--text)", fontWeight: 700, fontSize: 16, marginBottom: 12 }}>Bern Key Contacts</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div>
                  <p style={{ color: "var(--text)", fontWeight: 600, fontSize: 14 }}>Stadtpolizei / Kantonspolizei Bern</p>
                  <a href="https://www.police.be.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#10b981", fontSize: 13 }}>police.be.ch</a>
                </div>
                <div>
                  <p style={{ color: "var(--text)", fontWeight: 600, fontSize: 14 }}>City Hall — Rathaus Bern</p>
                  <p style={{ color: "var(--text-2)", fontSize: 13 }}>Rathausplatz 2, 3011 Bern</p>
                  <a href="https://www.bern.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#10b981", fontSize: 13 }}>bern.ch</a>
                </div>
                <div>
                  <p style={{ color: "var(--text)", fontWeight: 600, fontSize: 14 }}>Indian Embassy Berne</p>
                  <p style={{ color: "var(--text-2)", fontSize: 13 }}>Kirchenfeldstrasse 28, 3005 Bern</p>
                  <p style={{ color: "var(--text-2)", fontSize: 13 }}>Tel: +41 31 350 11 30</p>
                  <a href="https://www.indembassybern.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: "#10b981", fontSize: 13 }}>indembassybern.gov.in</a>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
