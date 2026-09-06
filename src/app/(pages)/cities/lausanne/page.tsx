import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indians in Lausanne — Community Guide",
  description:
    "Complete guide for Indians in Lausanne — registration, utilities, EPFL/UNIL, transport, Indian community, Olympic capital, hospitals, and emergency contacts.",
  openGraph: {
    title: "Indians in Lausanne — Community Guide | Indiaspora",
    description:
      "Complete guide for Indians in Lausanne — registration, utilities, EPFL/UNIL, transport, Indian community, Olympic capital, hospitals, and emergency contacts.",
  },
};

/* ─── inline style helpers ─────────────────────────────────────── */

const card: React.CSSProperties = {
  background: "var(--surface-2)",
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: "16px 20px",
};

const cardLink: React.CSSProperties = {
  ...card,
  display: "block",
  textDecoration: "none",
};

/* ─── section wrappers ──────────────────────────────────────────── */

const sectionBase: React.CSSProperties = {
  borderRadius: 16,
  padding: "28px 28px 24px",
  marginBottom: 0,
};

const newcomerSection: React.CSSProperties = {
  ...sectionBase,
  background: "var(--surface-2)",
  borderLeft: "4px solid #f97316",
};

const residentSection: React.CSSProperties = {
  ...sectionBase,
  background: "var(--surface-2)",
  borderLeft: "4px solid #10b981",
};

/* ─── Quick Actions ─────────────────────────────────────────────── */

const quickActions = [
  {
    emoji: "🏛️",
    label: "Register Address",
    sub: "Contrôle des habitants",
    href: "https://www.lausanne.ch/vie-pratique/population/arriver-a-lausanne.html",
  },
  {
    emoji: "🚇",
    label: "TL Transport",
    sub: "Metro, bus & trolleybus",
    href: "https://www.t-l.ch",
  },
  {
    emoji: "🎓",
    label: "EPFL & UNIL",
    sub: "Universities",
    href: "https://www.epfl.ch",
  },
  {
    emoji: "💻",
    label: "City Services",
    sub: "lausanne.ch portal",
    href: "https://www.lausanne.ch",
  },
];

/* ─── Newcomer data ─────────────────────────────────────────────── */

const registrationDocs = [
  "Valid passport or national ID",
  "Signed rental contract or accommodation proof",
  "Residence permit (L / B / C / G)",
  "Passport-format photos",
  "Birth & marriage certificates for families",
  "De-registration from previous Swiss municipality if applicable",
];

const utilities = [
  {
    name: "SIL — Services Industriels de Lausanne",
    url: "https://www.lausanne.ch",
    note: "Municipal utility for electricity, water, and heating within Lausanne city.",
  },
  {
    name: "Romande Énergie",
    url: "https://www.romande-energie.ch",
    note: "Gas and electricity for areas outside Lausanne city centre.",
  },
  {
    name: "Internet providers",
    url: "https://www.comparis.ch",
    note: "Swisscom, Sunrise, Salt — compare plans at comparis.ch.",
  },
];

const transport = [
  {
    name: "TL — Transports Lausannois",
    url: "https://www.t-l.ch",
    note: "Metro (M1, M2), buses, and trolleybuses across the city.",
  },
  {
    name: "Métro M2 — Automatic hillside metro",
    url: "https://www.t-l.ch",
    note: "Switzerland's only fully automatic metro; Ouchy (lakeside) ↔ Croisettes (north). Open 24 h at weekends.",
  },
  {
    name: "LEB — Lausanne-Echallens-Bercher",
    url: "https://www.leb.ch",
    note: "Regional rail toward northern Vaud.",
  },
  {
    name: "SBB intercity trains",
    url: "https://www.sbb.ch",
    note: "Geneva 45–50 min · Bern 65 min · Zurich 2 h 10 direct from Lausanne HB.",
  },
];

const education = [
  {
    name: "EPFL",
    url: "https://www.epfl.ch",
    note: "École Polytechnique Fédérale de Lausanne — world-top engineering & tech; very large Indian student and researcher community.",
  },
  {
    name: "UNIL — Université de Lausanne",
    url: "https://www.unil.ch",
    note: "~16,000 students; medicine, law, social sciences, HEC business school.",
  },
  {
    name: "IMD Business School",
    url: "https://www.imd.org",
    note: "Top-ranked global MBA; professional Indians from across Switzerland attend.",
  },
  {
    name: "International schools",
    url: "https://www.champittet.ch",
    note: "Collège Champittet, Brillantmont, Institut Florimont — IB / bilingual options.",
  },
];

const socialGroups = [
  "EPFL Indian Student Association — cultural events, cricket, Diwali on campus",
  "YUVA EPFL — youth and social organisation at EPFL",
  "InterNations Lausanne — regular expat meetups",
  "Meetup.com Lausanne — various interest and language groups",
];

/* ─── Resident data ─────────────────────────────────────────────── */

const community = [
  {
    name: "YUVA EPFL",
    url: "",
    note: "Student-led Diwali, Holi, cricket tournaments at EPFL — the heart of Lausanne's Indian social calendar.",
  },
  {
    name: "Indian Consulate General Geneva",
    url: "https://www.cgigeneva.gov.in",
    note: "Nearest Indian consular office — 45 min by train. OCI, passport, visa for Vaud/Romandy.",
  },
  {
    name: "Indian Embassy Berne",
    url: "https://www.indembassybern.gov.in",
    note: "Backup for consular services — 65 min from Lausanne.",
  },
];

const cityResources = [
  { name: "lausanne.ch", url: "https://www.lausanne.ch", note: "City of Lausanne official portal — all municipal services." },
  { name: "vd.ch — Canton Vaud", url: "https://www.vd.ch", note: "Cantonal taxes, permits, and official forms." },
];

const civicNotes = [
  "Lausanne is an Olympic capital — home to the IOC (International Olympic Committee).",
  "Conseil communal (city council) — public sessions; schedule at lausanne.ch.",
  "Volunteer: Caritas Vaud (caritas-vaud.ch), Benevol Vaud.",
  "Progressive, internationally oriented city — many civil society organisations welcome newcomers.",
];

/* ─── Amenities ─────────────────────────────────────────────────── */

const parks = [
  { name: "Parc de Sauvabelin", note: "Forested hilltop park with small lake and deer enclosure; panoramic city views; free." },
  { name: "Ouchy Lakeside", note: "Promenade along Lac Léman; swimming at Bellerive-Plage and Mon-Repos in summer." },
  { name: "Lavaux Vineyards", note: "UNESCO World Heritage terraced vineyards east of Lausanne; walking trails with lake views." },
  { name: "Vallée de la Jeunesse", note: "Open parkland in western Lausanne; sports fields, jogging, family picnics." },
  { name: "Jorat Forest", note: "Large natural forest north of Lausanne; hiking and mountain biking trails." },
];

const health = [
  { name: "CHUV", url: "https://www.chuv.ch", note: "Centre Hospitalier Universitaire Vaudois — main university hospital, 24/7 ER. Rue du Bugnon 46, 1011 Lausanne. One of Switzerland's largest hospitals." },
  { name: "Clinique Cecil", url: "https://www.cecilclinique.ch", note: "Private hospital; multilingual; popular with the international community." },
  { name: "Police cantonale Vaud", url: "https://www.police.vd.ch", note: "Cantonal police for Lausanne and Vaud." },
];

const cultural = [
  { name: "Musée Olympique", url: "https://www.olympic.org/museum", note: "World-class Olympic museum on the lakefront at Ouchy — a must-visit in the Olympic capital." },
  { name: "MCBA — Musée cantonal des Beaux-Arts", url: "https://www.mcba.ch", note: "Major art museum at the Plateforme 10 arts district." },
  { name: "Photo Elysée", url: "https://www.elysee.ch", note: "Photography museum at Plateforme 10." },
  { name: "BCU — Bibliothèque cantonale et universitaire", url: "https://www.bcu.unil.ch", note: "Main cantonal library; open to all." },
];

/* ─── Emergency ─────────────────────────────────────────────────── */

const emergencyNumbers = [
  { number: "117", label: "Police" },
  { number: "118", label: "Fire" },
  { number: "144", label: "Ambulance" },
  { number: "1414", label: "REGA helicopter" },
  { number: "145", label: "Poison Control" },
  { number: "143", label: "Emotional support" },
  { number: "112", label: "European emergency" },
];

const emergencyContacts = [
  { label: "Police cantonale Vaud", value: "police.vd.ch", url: "https://www.police.vd.ch" },
  { label: "City Hall", value: "Place de la Palud 2, 1003 Lausanne", url: "https://www.lausanne.ch" },
  { label: "Indian Consulate General Geneva", value: "cgigeneva.gov.in", url: "https://www.cgigeneva.gov.in" },
  { label: "Indian Embassy Berne", value: "indembassybern.gov.in", url: "https://www.indembassybern.gov.in" },
];

/* ─── Component ─────────────────────────────────────────────────── */

export default function LausannePage() {
  return (
    <div>
      <PageHeader
        title="Indians in Lausanne"
        subtitle="Olympic capital on Lake Geneva — home to EPFL, YUVA, and a growing Indian student and professional community on the shores of Lac Léman."
        badge="City Guide"
        gradient="from-purple-600 to-indigo-600"
        breadcrumbs={[
          { label: "Cities", href: "/cities" },
          { label: "Lausanne" },
        ]}
      />

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 20px 80px",
          display: "flex",
          flexDirection: "column",
          gap: 40,
        }}
      >
        {/* ── Hero image ── */}
        <div style={{ marginTop: 32 }}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Lausanne_-_panorama_depuis_Sauvabelin_-_panoramio.jpg/1280px-Lausanne_-_panorama_depuis_Sauvabelin_-_panoramio.jpg"
            alt="Lausanne panorama from Sauvabelin"
            width={1280}
            height={400}
            unoptimized
            style={{
              width: "100%",
              height: 260,
              objectFit: "cover",
              borderRadius: 16,
              display: "block",
            }}
          />
          <p
            style={{
              fontSize: 12,
              color: "var(--text-3)",
              marginTop: 8,
              textAlign: "right",
            }}
          >
            Lausanne from Sauvabelin hill — Olympic capital on Lac Léman
          </p>
        </div>

        {/* ── SECTION 1: Quick Actions ── */}
        <section>
          <h2
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text-3)",
              marginBottom: 16,
            }}
          >
            Quick Links
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 12,
            }}
          >
            {quickActions.map((qa) => (
              <a
                key={qa.label}
                href={qa.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...cardLink,
                  textAlign: "center",
                  padding: "20px 16px",
                }}
              >
                <span style={{ fontSize: 28, display: "block", marginBottom: 10 }}>
                  {qa.emoji}
                </span>
                <span
                  style={{
                    display: "block",
                    fontWeight: 700,
                    fontSize: 14,
                    color: "var(--text)",
                    marginBottom: 4,
                  }}
                >
                  {qa.label}
                </span>
                <span style={{ fontSize: 12, color: "var(--text-3)" }}>{qa.sub}</span>
              </a>
            ))}
          </div>
        </section>

        {/* ── SECTION 2: Newcomer Track ── */}
        <section style={newcomerSection}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span
              style={{
                background: "#f97316",
                color: "#fff",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: 6,
                padding: "3px 10px",
              }}
            >
              For Newcomers
            </span>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "var(--text)",
                margin: 0,
              }}
            >
              Getting Started in Lausanne
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {/* Registration */}
            <div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 4,
                }}
              >
                Registration — Contrôle des habitants
              </h3>
              <p style={{ fontSize: 14, color: "var(--text-2)", marginBottom: 12 }}>
                <strong>Office:</strong>{" "}
                <a
                  href="https://www.lausanne.ch/vie-pratique/population/arriver-a-lausanne.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#f97316" }}
                >
                  Contrôle des habitants de Lausanne
                </a>
                {"  "}·{"  "}
                <strong>Deadline:</strong> Within 8 days of arrival (Vaud canton — stricter than most cantons)
              </p>
              <div
                style={{
                  ...card,
                  padding: "14px 18px",
                }}
              >
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--text-3)",
                    marginBottom: 10,
                  }}
                >
                  Documents required
                </p>
                <ul
                  style={{
                    margin: 0,
                    padding: "0 0 0 18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  {registrationDocs.map((doc) => (
                    <li key={doc} style={{ fontSize: 14, color: "var(--text-2)" }}>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Utilities */}
            <div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 12,
                }}
              >
                Utilities
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {utilities.map((u) => (
                  <div key={u.name} style={{ ...card, padding: "12px 18px" }}>
                    <a
                      href={u.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontWeight: 600,
                        fontSize: 14,
                        color: "var(--text)",
                        textDecoration: "none",
                      }}
                    >
                      {u.name}
                    </a>
                    <p style={{ fontSize: 13, color: "var(--text-2)", margin: "4px 0 0" }}>
                      {u.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Public Transport */}
            <div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 4,
                }}
              >
                Public Transport
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-3)",
                  marginBottom: 12,
                }}
              >
                Lausanne is hilly — the metro and funiculars are essential for steep routes.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: 8,
                }}
              >
                {transport.map((t) => (
                  <div key={t.name} style={{ ...card, padding: "12px 18px" }}>
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontWeight: 600,
                        fontSize: 14,
                        color: "var(--text)",
                        textDecoration: "none",
                      }}
                    >
                      {t.name}
                    </a>
                    <p style={{ fontSize: 13, color: "var(--text-2)", margin: "4px 0 0" }}>
                      {t.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 12,
                }}
              >
                Education &amp; Universities
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: 8,
                }}
              >
                {education.map((e) => (
                  <div key={e.name} style={{ ...card, padding: "12px 18px" }}>
                    <a
                      href={e.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontWeight: 600,
                        fontSize: 14,
                        color: "var(--text)",
                        textDecoration: "none",
                      }}
                    >
                      {e.name}
                    </a>
                    <p style={{ fontSize: 13, color: "var(--text-2)", margin: "4px 0 0" }}>
                      {e.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Making Friends */}
            <div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 12,
                }}
              >
                Making Friends &amp; Expat Groups
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {socialGroups.map((g) => (
                  <div
                    key={g}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      padding: "10px 14px",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                    }}
                  >
                    <span style={{ color: "#f97316", fontWeight: 700, flexShrink: 0 }}>→</span>
                    <span style={{ fontSize: 14, color: "var(--text-2)" }}>{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: Resident Track ── */}
        <section style={residentSection}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span
              style={{
                background: "#10b981",
                color: "#fff",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: 6,
                padding: "3px 10px",
              }}
            >
              Community &amp; Daily Life
            </span>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "var(--text)",
                margin: 0,
              }}
            >
              Living in Lausanne
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {/* Indian Community */}
            <div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 4,
                }}
              >
                Indian Community
              </h3>
              <p style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 12 }}>
                The EPFL Indian community is the core of Lausanne's Indian population — very active networks among students, postdocs, and researchers.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {community.map((c) => (
                  <div key={c.name} style={{ ...card, padding: "12px 18px" }}>
                    {c.url ? (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontWeight: 600,
                          fontSize: 14,
                          color: "var(--text)",
                          textDecoration: "none",
                        }}
                      >
                        {c.name}
                      </a>
                    ) : (
                      <span style={{ fontWeight: 600, fontSize: 14, color: "var(--text)" }}>
                        {c.name}
                      </span>
                    )}
                    <p style={{ fontSize: 13, color: "var(--text-2)", margin: "4px 0 0" }}>
                      {c.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* City Resources */}
            <div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 12,
                }}
              >
                City &amp; Cantonal Resources
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: 8,
                }}
              >
                {cityResources.map((r) => (
                  <div key={r.name} style={{ ...card, padding: "12px 18px" }}>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontWeight: 600,
                        fontSize: 14,
                        color: "var(--text)",
                        textDecoration: "none",
                      }}
                    >
                      {r.name}
                    </a>
                    <p style={{ fontSize: 13, color: "var(--text-2)", margin: "4px 0 0" }}>
                      {r.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Civic Engagement */}
            <div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 12,
                }}
              >
                Civic Engagement
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {civicNotes.map((n) => (
                  <div
                    key={n}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      padding: "10px 14px",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                    }}
                  >
                    <span style={{ color: "#10b981", fontWeight: 700, flexShrink: 0 }}>→</span>
                    <span style={{ fontSize: 14, color: "var(--text-2)" }}>{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: Amenities & Recreation ── */}
        <section>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "var(--text)",
              marginBottom: 24,
            }}
          >
            Amenities &amp; Recreation
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {/* Parks */}
            <div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 12,
                }}
              >
                Parks &amp; Nature
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 8,
                }}
              >
                {parks.map((p) => (
                  <div key={p.name} style={{ ...card, padding: "12px 18px" }}>
                    <p style={{ fontWeight: 600, fontSize: 14, color: "var(--text)", margin: 0 }}>
                      {p.name}
                    </p>
                    <p style={{ fontSize: 13, color: "var(--text-2)", margin: "4px 0 0" }}>
                      {p.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Health */}
            <div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 12,
                }}
              >
                Health &amp; Safety
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {health.map((h) => (
                  <div key={h.name} style={{ ...card, padding: "12px 18px" }}>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontWeight: 600,
                        fontSize: 14,
                        color: "var(--text)",
                        textDecoration: "none",
                      }}
                    >
                      {h.name}
                    </a>
                    <p style={{ fontSize: 13, color: "var(--text-2)", margin: "4px 0 0" }}>
                      {h.note}
                    </p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 13, color: "var(--text-3)", marginTop: 10 }}>
                Late-night pharmacies: Pharmacie de la Gare (near Lausanne HB) and Pharmacie Principale.
              </p>
            </div>

            {/* Cultural */}
            <div>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: 12,
                }}
              >
                Culture &amp; Sport
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 8,
                }}
              >
                {cultural.map((c) => (
                  <div key={c.name} style={{ ...card, padding: "12px 18px" }}>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontWeight: 600,
                        fontSize: 14,
                        color: "var(--text)",
                        textDecoration: "none",
                      }}
                    >
                      {c.name}
                    </a>
                    <p style={{ fontSize: 13, color: "var(--text-2)", margin: "4px 0 0" }}>
                      {c.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: Indian Food & Grocery ── */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>Indian Restaurants &amp; Grocery</h2>
          <p style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 24 }}>Indian dining and grocery in Lausanne — links open in Google Maps.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>

            <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 16, padding: "20px 22px" }}>
              <h3 style={{ margin: "0 0 14px", fontSize: 13, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--text-3)" }}>🍛 Restaurants</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { name: "Bollywood Lausanne", note: "Flon district — generous curries, popular with EPFL crowd", href: "https://maps.google.com/?q=Bollywood+Restaurant+Lausanne" },
                  { name: "India Gate Lausanne", note: "Near the train station, classic tandoori menu", href: "https://maps.google.com/?q=India+Gate+Restaurant+Lausanne" },
                  { name: "Namaste Lausanne", note: "Vegetarian-friendly, south of the lake", href: "https://maps.google.com/?q=Namaste+Restaurant+Lausanne+Switzerland" },
                  { name: "Taj Mahal Lausanne", note: "Classic North Indian near city centre", href: "https://maps.google.com/?q=Taj+Mahal+Restaurant+Lausanne+Switzerland" },
                  { name: "More on Maps →", note: "Browse all Indian restaurants", href: "https://www.google.com/maps/search/Indian+restaurants+Lausanne+Switzerland" },
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
                  { name: "Asia Market Lausanne", note: "Rue de Genève — Indian spices, basmati, lentils", href: "https://maps.google.com/?q=Asia+Market+Lausanne+Switzerland" },
                  { name: "Exotic Food Lausanne", note: "South Asian and tropical products", href: "https://maps.google.com/?q=Exotic+Food+Lausanne+Switzerland" },
                  { name: "Sri Lanka Supermarket", note: "Indian and Sri Lankan groceries, central Lausanne", href: "https://maps.google.com/?q=Sri+Lanka+Supermarket+Lausanne+Switzerland" },
                  { name: "More on Maps →", note: "Browse all Indian grocery stores", href: "https://www.google.com/maps/search/Indian+grocery+store+Lausanne+Switzerland" },
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

        {/* ── SECTION 6: Emergency & Contacts ── */}
        <section>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "var(--text)",
              marginBottom: 20,
            }}
          >
            Emergency &amp; Contacts
          </h2>

          {/* Emergency numbers grid */}
          <div
            style={{
              background: "var(--surface-2)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "20px 24px",
              marginBottom: 16,
            }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-3)",
                marginBottom: 16,
              }}
            >
              Swiss Emergency Numbers
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
                gap: 10,
              }}
            >
              {emergencyNumbers.map((e) => (
                <div
                  key={e.number}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                    padding: "10px 14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <span
                    style={{
                      fontVariantNumeric: "tabular-nums",
                      fontWeight: 800,
                      fontSize: 20,
                      color: "var(--text)",
                      lineHeight: 1.1,
                    }}
                  >
                    {e.number}
                  </span>
                  <span style={{ fontSize: 12, color: "var(--text-3)" }}>{e.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lausanne contacts */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {emergencyContacts.map((c) => (
              <div
                key={c.label}
                style={{
                  ...card,
                  padding: "12px 18px",
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text-2)",
                    flexShrink: 0,
                    minWidth: 220,
                  }}
                >
                  {c.label}
                </span>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 13,
                    color: "var(--text)",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  {c.value}
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
