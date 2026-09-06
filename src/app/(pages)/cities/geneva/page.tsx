import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indians in Geneva — Community Guide",
  description:
    "Complete guide for Indians in Geneva — registration, utilities, transport, Indian consulate, community, hospitals, and emergency contacts.",
  openGraph: {
    title: "Indians in Geneva — Community Guide | Indiaspora",
    description:
      "Complete guide for Indians in Geneva — registration, utilities, transport, Indian consulate, community, hospitals, and emergency contacts.",
  },
};

const sectionHeading: React.CSSProperties = {
  fontFamily: "'Playfair Display', Georgia, serif",
  fontSize: "1.4rem",
  fontWeight: 700,
  color: "var(--text)",
  marginBottom: 16,
};

const bodyText: React.CSSProperties = {
  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  fontSize: 13,
  color: "var(--text-2)",
  lineHeight: 1.6,
};

const card: React.CSSProperties = {
  background: "var(--surface-2)",
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: "16px 20px",
};

const subLabel: React.CSSProperties = {
  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  fontSize: 13,
  fontWeight: 600,
  color: "var(--text)",
  marginBottom: 4,
  marginTop: 12,
};

export default function GenevaPage() {
  return (
    <div>
      <PageHeader
        title="Indians in Geneva"
        badge="City Guide"
        gradient="from-blue-600 to-cyan-500"
        breadcrumbs={[
          { label: "Cities", href: "/cities" },
          { label: "Geneva" },
        ]}
      />

      {/* Hero Image */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 16px 0" }}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Jet_d%27eau_Geneve.jpg/1280px-Jet_d%27eau_Geneve.jpg"
          alt="Geneva Jet d'Eau fountain"
          width={1200}
          height={400}
          unoptimized
          style={{ width: "100%", height: 280, objectFit: "cover", borderRadius: 16 }}
        />
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 16px 64px", display: "flex", flexDirection: "column", gap: 48 }}>

        {/* SECTION 1 — Quick Actions */}
        <section>
          <h2 style={sectionHeading}>Quick Actions</h2>
          <style>{`
            .geneva-quick-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 12px;
            }
            @media (min-width: 640px) {
              .geneva-quick-grid {
                grid-template-columns: repeat(4, 1fr);
              }
            }
          `}</style>
          <div className="geneva-quick-grid">
            {[
              { emoji: "🏛️", label: "Register Address", sub: "OCPM — ge.ch", href: "https://www.ge.ch/population-genevoise-population/annonce-arrivee-commune" },
              { emoji: "🚎", label: "TPG Transport", sub: "Trams & buses", href: "https://www.tpg.ch/en" },
              { emoji: "🇮🇳", label: "Indian Consulate", sub: "cgigeneva.gov.in", href: "https://www.cgigeneva.gov.in" },
              { emoji: "💻", label: "Canton Services", sub: "ge.ch", href: "https://www.ge.ch" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...card,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  gap: 6,
                  padding: "20px 12px",
                  textDecoration: "none",
                  transition: "opacity 0.15s",
                }}
              >
                <span style={{ fontSize: 28 }}>{item.emoji}</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{item.label}</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 11, color: "var(--text-2)" }}>{item.sub}</span>
              </a>
            ))}
          </div>
        </section>

        {/* SECTION 2 — Newcomer Track */}
        <section style={{ ...card, borderLeft: "4px solid #f97316" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span style={{
              background: "rgba(249,115,22,0.12)",
              color: "#f97316",
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.06em",
              padding: "3px 10px",
              borderRadius: 20,
              textTransform: "uppercase",
            }}>For Newcomers</span>
          </div>
          <h2 style={{ ...sectionHeading, marginBottom: 20 }}>Settling In</h2>

          {/* Registration */}
          <div style={{ marginBottom: 24 }}>
            <p style={subLabel}>Registration — OCPM</p>
            <div style={{ ...card, marginTop: 8 }}>
              <p style={bodyText}><strong style={{ color: "var(--text)" }}>Office:</strong> Office cantonal de la population et des migrations (OCPM) — <a href="https://www.ge.ch/population" target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6" }}>ge.ch/population</a></p>
              <p style={{ ...bodyText, marginTop: 6 }}><strong style={{ color: "var(--text)" }}>Deadline:</strong> Within <strong style={{ color: "#f97316" }}>8 days of arrival</strong> — stricter than most Swiss cantons.</p>
              <p style={{ ...bodyText, marginTop: 6 }}><strong style={{ color: "var(--text)" }}>Online form:</strong> <a href="https://www.ge.ch/s-annoncer-dans-commune-genevoise" target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6" }}>ge.ch/s-annoncer-dans-commune-genevoise</a></p>
              <p style={{ ...bodyText, marginTop: 6 }}><strong style={{ color: "var(--text)" }}>Documents needed:</strong> Valid passport/ID, signed lease or accommodation proof, residence permit (L/B/C/G/F), passport photos, birth/marriage certificates for families.</p>
            </div>
          </div>

          {/* Utilities */}
          <div style={{ marginBottom: 24 }}>
            <p style={subLabel}>Utilities</p>
            <div style={{ ...card, marginTop: 8 }}>
              <p style={bodyText}><strong style={{ color: "var(--text)" }}>SIG — <a href="https://www.sig-ge.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6" }}>sig-ge.ch</a></strong> — Services Industriels de Genève handles electricity, water, gas, and heating for all of Geneva. One-stop setup.</p>
              <p style={{ ...bodyText, marginTop: 6 }}><strong style={{ color: "var(--text)" }}>Internet:</strong> <a href="https://www.swisscom.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6" }}>Swisscom</a>, <a href="https://www.sunrise.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6" }}>Sunrise</a>, <a href="https://www.salt.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6" }}>Salt</a> — compare at <a href="https://www.comparis.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6" }}>comparis.ch</a>.</p>
            </div>
          </div>

          {/* Transport */}
          <div style={{ marginBottom: 24 }}>
            <p style={subLabel}>Public Transport</p>
            <div style={{ ...card, marginTop: 8 }}>
              <p style={bodyText}><strong style={{ color: "var(--text)" }}>TPG — <a href="https://www.tpg.ch/en" target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6" }}>tpg.ch</a></strong> — Transports Publics Genevois: trams, buses, trolleybuses across Geneva.</p>
              <p style={{ ...bodyText, marginTop: 6 }}><strong style={{ color: "var(--text)" }}>unireso — <a href="https://www.unireso.com" target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6" }}>unireso.com</a></strong> — Regional network covering Geneva and surrounding French territory.</p>
              <p style={{ ...bodyText, marginTop: 6 }}><strong style={{ color: "var(--text)" }}>TPG App:</strong> Tickets, journey planner, real-time departures.</p>
              <p style={{ ...bodyText, marginTop: 6 }}>Geneva is very walkable; many enjoy the free electric Mouettes boat taxis on Lake Geneva.</p>
            </div>
          </div>

          {/* Education */}
          <div style={{ marginBottom: 24 }}>
            <p style={subLabel}>Education &amp; Universities</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 10, marginTop: 8 }}>
              {[
                { name: "University of Geneva (UNIGE)", url: "https://www.unige.ch", note: "~17,000 students; medicine, law, science, international relations." },
                { name: "Graduate Institute", url: "https://www.graduateinstitute.ch", note: "International affairs; attracts Indian diplomatic and policy students." },
                { name: "Webster University Geneva", url: "https://www.webstergeneva.ch", note: "English-medium; popular with international families." },
                { name: "Ecolint (Geneva International School)", url: "https://www.ecolint.ch", note: "IB curriculum; expat-friendly." },
              ].map((u) => (
                <a key={u.name} href={u.url} target="_blank" rel="noopener noreferrer" style={{ ...card, textDecoration: "none", display: "block" }}>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>{u.name}</p>
                  <p style={bodyText}>{u.note}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Making Friends */}
          <div>
            <p style={subLabel}>Making Friends &amp; Expat Groups</p>
            <div style={{ ...card, marginTop: 8 }}>
              <p style={bodyText}><strong style={{ color: "var(--text)" }}>Indian Association Geneva (IAG) — <a href="https://www.indianassociationgeneva.com" target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6" }}>indianassociationgeneva.com</a></strong> — Cultural events, Diwali, Holi, festivals year-round.</p>
              <p style={{ ...bodyText, marginTop: 6 }}><strong style={{ color: "var(--text)" }}>InterNations Geneva</strong> — Large expat meetup community with regular events.</p>
              <p style={{ ...bodyText, marginTop: 6 }}><strong style={{ color: "var(--text)" }}>UN / CERN / WHO staff networks</strong> — Many Indians work at UN Geneva, CERN, WHO, and WTO; professional networking via LinkedIn is common.</p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — Resident Track */}
        <section style={{ ...card, borderLeft: "4px solid #10b981" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span style={{
              background: "rgba(16,185,129,0.12)",
              color: "#10b981",
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.06em",
              padding: "3px 10px",
              borderRadius: 20,
              textTransform: "uppercase",
            }}>Community &amp; Daily Life</span>
          </div>
          <h2 style={{ ...sectionHeading, marginBottom: 20 }}>Living in Geneva</h2>

          {/* Indian Community */}
          <div style={{ marginBottom: 24 }}>
            <p style={subLabel}>Indian Community</p>
            <div style={{ ...card, marginTop: 8 }}>
              <p style={bodyText}><strong style={{ color: "var(--text)" }}>Indian Consulate General Geneva — <a href="https://www.cgigeneva.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6" }}>cgigeneva.gov.in</a></strong> — Handles OCI, passport, visa, and attestation for Western Switzerland (Romandy + Ticino); appointment-based.</p>
              <p style={{ ...bodyText, marginTop: 6 }}><strong style={{ color: "var(--text)" }}>Indian Association Geneva (IAG) — <a href="https://www.indianassociationgeneva.com" target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6" }}>indianassociationgeneva.com</a></strong> — Festivals, cultural programs, and community networking.</p>
              <p style={{ ...bodyText, marginTop: 6 }}>Many Indians are employed at CERN, WHO, WTO, UN Geneva, and international NGOs, making Geneva one of the most professionally connected Indian communities in Europe.</p>
            </div>
          </div>

          {/* City Resources */}
          <div style={{ marginBottom: 24 }}>
            <p style={subLabel}>City Resources</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10, marginTop: 8 }}>
              {[
                { label: "City of Geneva", url: "https://www.geneve.ch", note: "geneve.ch — city services, events, local administration." },
                { label: "Canton Geneva", url: "https://www.ge.ch", note: "ge.ch — taxes, permits, official forms, OCPM." },
              ].map((r) => (
                <a key={r.label} href={r.url} target="_blank" rel="noopener noreferrer" style={{ ...card, textDecoration: "none", display: "block" }}>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>{r.label}</p>
                  <p style={bodyText}>{r.note}</p>
                </a>
              ))}
            </div>
            <p style={{ ...bodyText, marginTop: 10 }}>Geneva is bilingual in practice but the official language is French — learning French is strongly recommended for integration.</p>
          </div>

          {/* Civic Engagement */}
          <div>
            <p style={subLabel}>Civic Engagement</p>
            <div style={{ ...card, marginTop: 8 }}>
              <p style={bodyText}><strong style={{ color: "var(--text)" }}>Neighbourhood councils (Conseils municipaux de quartier)</strong> — Geneva has 8 districts; residents can participate in local decision-making.</p>
              <p style={{ ...bodyText, marginTop: 6 }}><strong style={{ color: "var(--text)" }}>Volunteering:</strong> <a href="https://www.caritas-geneve.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6" }}>Caritas Genève</a>, CICR volunteers, and Croix-Rouge Geneva all welcome volunteers.</p>
              <p style={{ ...bodyText, marginTop: 6 }}><strong style={{ color: "var(--text)" }}>City council meetings (Conseil Municipal):</strong> Public; schedule at <a href="https://www.geneve.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6" }}>geneve.ch</a>.</p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — Amenities & Recreation */}
        <section>
          <h2 style={sectionHeading}>Amenities &amp; Recreation</h2>

          {/* Parks */}
          <div style={{ marginBottom: 20 }}>
            <p style={subLabel}>Parks &amp; Nature</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 10, marginTop: 8 }}>
              {[
                { name: "Parc des Bastions", note: "Central park with giant chess sets and the Reformation Wall in university gardens." },
                { name: "Jardin Anglais", note: "Lakeside park home to the famous Flower Clock (Horloge Fleurie)." },
                { name: "Bois de la Bâtie", note: "Forested park with small animal enclosure and BBQ areas." },
                { name: "Lac Léman (Lake Geneva)", note: "Swimming at Plage des Eaux-Vives and Genève-Plage in summer." },
                { name: "Salève Mountain", note: "Cable car from Veyrier (France side); hiking, paragliding, panoramic Alps views." },
              ].map((p) => (
                <div key={p.name} style={card}>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>{p.name}</p>
                  <p style={bodyText}>{p.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Health & Safety */}
          <div style={{ marginBottom: 20 }}>
            <p style={subLabel}>Health &amp; Safety</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10, marginTop: 8 }}>
              {[
                { name: "HUG — Hôpitaux Universitaires de Genève", url: "https://www.hug.ch", note: "Main university hospital with 24/7 ER. Rue Gabrielle-Perret-Gentil 4, 1211 Geneva." },
                { name: "Hôpital de la Tour", url: "https://www.latour.ch", note: "Private hospital with 24/7 ER; popular with expats, multilingual staff." },
                { name: "Police cantonale", url: "https://www.police.ge.ch", note: "police.ge.ch — Geneva cantonal police services." },
              ].map((h) => (
                <a key={h.name} href={h.url} target="_blank" rel="noopener noreferrer" style={{ ...card, textDecoration: "none", display: "block" }}>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>{h.name}</p>
                  <p style={bodyText}>{h.note}</p>
                </a>
              ))}
            </div>
            <p style={{ ...bodyText, marginTop: 10 }}>Late-night pharmacy: Pharmacie Principale near Cornavin station (extended hours).</p>
          </div>

          {/* Cultural & Sports */}
          <div>
            <p style={subLabel}>Cultural &amp; Sports</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 10, marginTop: 8 }}>
              {[
                { name: "Musée d'Art et d'Histoire (MAH)", url: "https://www.mahgeneve.ch", note: "Free entry on first Sunday of each month." },
                { name: "Palais des Nations", url: "https://www.ungeneva.org", note: "UN Geneva — guided tours available, book in advance." },
                { name: "MAMCO", url: "https://www.mamco.ch", note: "Contemporary art museum in central Geneva." },
                { name: "Piscine des Vernets", url: "https://www.geneve.ch", note: "Olympic indoor swimming pool." },
                { name: "Bibliothèque de Genève (BGE)", url: "https://www.bge-geneve.ch", note: "Main public library with extensive collections." },
              ].map((c) => (
                <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" style={{ ...card, textDecoration: "none", display: "block" }}>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>{c.name}</p>
                  <p style={bodyText}>{c.note}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — Emergency & Contacts */}
        <section>
          <h2 style={sectionHeading}>Emergency &amp; Contacts</h2>

          {/* Emergency numbers */}
          <div style={{ marginBottom: 20 }}>
            <p style={subLabel}>Swiss Emergency Numbers</p>
            <div style={{ ...card, marginTop: 8 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
                {[
                  { num: "117", label: "Police" },
                  { num: "118", label: "Fire" },
                  { num: "144", label: "Ambulance" },
                  { num: "1414", label: "REGA Helicopter" },
                  { num: "145", label: "Poison Control" },
                  { num: "143", label: "Emotional Support" },
                  { num: "112", label: "European Emergency" },
                ].map((e) => (
                  <div key={e.num} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#ef4444",
                      minWidth: 48,
                    }}>{e.num}</span>
                    <span style={bodyText}>{e.label}</span>
                  </div>
                ))}
              </div>
              <p style={{ ...bodyText, marginTop: 12, color: "var(--text-3)", fontSize: 12 }}>All numbers are the same nationwide across Switzerland.</p>
            </div>
          </div>

          {/* Geneva contacts */}
          <div>
            <p style={subLabel}>Geneva Key Contacts</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 10, marginTop: 8 }}>
              {[
                { name: "Police cantonale Geneva", url: "https://www.police.ge.ch", detail: "police.ge.ch" },
                { name: "City Hall (Hôtel de Ville)", url: "https://www.geneve.ch", detail: "Rue de l'Hôtel-de-Ville 2, 1204 Geneva — geneve.ch" },
                { name: "Indian Consulate General Geneva", url: "https://www.cgigeneva.gov.in", detail: "cgigeneva.gov.in — OCI, passport, visa, attestation" },
                { name: "Indian Embassy Berne", url: "https://www.indembassybern.gov.in", detail: "indembassybern.gov.in — overall diplomatic mission" },
              ].map((c) => (
                <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" style={{ ...card, textDecoration: "none", display: "block" }}>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>{c.name}</p>
                  <p style={bodyText}>{c.detail}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
