import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indians in Zurich — Community Guide",
  description: "Complete guide for Indians in Zurich — registration, utilities, transport, Indian community, hospitals, parks, and emergency contacts.",
  openGraph: {
    title: "Indians in Zurich — Community Guide | Indiaspora",
    description: "Complete guide for Indians in Zurich — registration, utilities, transport, Indian community, hospitals, parks, and emergency contacts.",
  },
};

const quickActions = [
  { emoji: "🏛️", label: "Register Address", sub: "Einwohnerkontrolle", href: "https://www.stadt-zuerich.ch/pd/de/index/stadtpolizei_zuerich/einwohnerkon.html" },
  { emoji: "🚊", label: "ZVV Transport", sub: "Trams, buses & S-Bahn", href: "https://www.zvv.ch/en/home.html" },
  { emoji: "🗑️", label: "Waste Calendar", sub: "Abfuhrtermine", href: "https://www.stadt-zuerich.ch/ted/de/index/entsorgung_recycling/abfuhrtermine.html" },
  { emoji: "💻", label: "City Services", sub: "stadt-zuerich.ch", href: "https://www.stadt-zuerich.ch" },
];

export default function ZurichPage() {
  return (
    <div>
      <PageHeader
        title="Indians in Zurich"
        subtitle="Switzerland's largest city and financial hub — where Bahnhofstrasse meets the ETH hilltop, Lake Zurich shimmers at the city's heart, and a thriving Indian community calls Kreis 4, Oerlikon and Seefeld home."
        badge="City Guide"
        gradient="from-amber-500 to-orange-500"
        breadcrumbs={[
          { label: "Cities", href: "/cities" },
          { label: "Zurich" },
        ]}
      />

      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px 80px" }}>

        {/* Hero Image */}
        <div style={{ margin: "32px 0 40px" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Zurich_Grossmunster_and_Limmat_River.jpg/1280px-Zurich_Grossmunster_and_Limmat_River.jpg"
            alt="Zurich Grossmünster and Limmat River"
            style={{ width: "100%", height: 300, objectFit: "cover", borderRadius: 20 }}
          />
        </div>

        {/* SECTION 1 — Quick Actions */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "var(--text)", marginBottom: 20 }}>
            Quick Actions
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {quickActions.map((a) => (
              <Link
                key={a.label}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  padding: "28px 16px",
                  textDecoration: "none",
                  transition: "transform 0.15s ease, box-shadow 0.15s ease",
                  cursor: "pointer",
                }}
              >
                <span style={{ fontSize: 36, marginBottom: 10 }}>{a.emoji}</span>
                <span style={{ fontWeight: 700, fontSize: 15, color: "var(--text)", textAlign: "center", marginBottom: 4 }}>{a.label}</span>
                <span style={{ fontSize: 12, color: "var(--text-3)", textAlign: "center" }}>{a.sub}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* SECTION 2 — Newcomer Track */}
        <section style={{ marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "var(--text)", margin: 0 }}>
              Getting Settled
            </h2>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", background: "rgba(249,115,22,0.12)", color: "#f97316", border: "1px solid rgba(249,115,22,0.3)", borderRadius: 6, padding: "3px 10px", textTransform: "uppercase" }}>
              For Newcomers
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>

            {/* Registration */}
            <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderLeft: "4px solid #f97316", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 12 }}>🏛️ Residence Registration</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>Office:</strong> Kreisbüro — 12 district offices across Zurich</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>Deadline:</strong> Within 14 days of moving in</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>Documents:</strong> Valid passport/ID, signed rental contract, residence permit (L/B/C/G), birth/marriage certificates for families, Abmeldung from previous Swiss municipality</li>
                <li><a href="https://www.stadt-zuerich.ch/pd/de/index/stadtpolizei_zuerich/einwohnerkon.html" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "#f97316", textDecoration: "none" }}>→ Official registration page</a></li>
              </ul>
            </div>

            {/* Utilities */}
            <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderLeft: "4px solid #f97316", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 12 }}>⚡ Utilities</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><a href="https://www.ewz.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316", textDecoration: "none" }}>EWZ (ewz.ch)</a> — Electricity, district heating, solar</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><a href="https://www.energie360.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316", textDecoration: "none" }}>Energie 360° (energie360.ch)</a> — Gas, renewable energy</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>Water:</strong> Provided by city (Wasserversorgung Zürich, included via municipal services)</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>Internet:</strong> <a href="https://www.swisscom.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316", textDecoration: "none" }}>Swisscom</a>, <a href="https://www.sunrise.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316", textDecoration: "none" }}>Sunrise</a>, <a href="https://www.salt.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316", textDecoration: "none" }}>Salt</a> — compare at <a href="https://www.comparis.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316", textDecoration: "none" }}>comparis.ch</a></li>
              </ul>
            </div>

            {/* Public Transport */}
            <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderLeft: "4px solid #f97316", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 12 }}>🚊 Public Transport</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><a href="https://www.zvv.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316", textDecoration: "none" }}>ZVV (zvv.ch)</a> — Covers all trams, buses, S-Bahn in Zurich canton. Zone 110 = city centre</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>ZVV App:</strong> Tickets, journey planner, real-time departures</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>SBB App:</strong> National rail tickets</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>Züricard:</strong> 24/48/72hr tourist pass — public transport + museum entry</li>
              </ul>
            </div>

            {/* Education */}
            <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderLeft: "4px solid #f97316", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 12 }}>🎓 Education & Universities</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><a href="https://ethz.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316", textDecoration: "none" }}>ETH Zurich (ethz.ch)</a> — World-top engineering & science; large Indian student community</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><a href="https://www.uzh.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316", textDecoration: "none" }}>University of Zurich UZH (uzh.ch)</a> — Medicine, humanities, law, ~27,000 students</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><a href="https://www.zis.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316", textDecoration: "none" }}>Zurich International School ZIS (zis.ch)</a> — English-medium private school for expat families</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>City schools:</strong> Enrollment via <a href="https://www.vsz.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316", textDecoration: "none" }}>Volksschulamt (vsz.ch)</a></li>
              </ul>
            </div>

            {/* Making Friends */}
            <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderLeft: "4px solid #f97316", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 12 }}>🤝 Making Friends & Expat Groups</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><a href="https://iagz.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#f97316", textDecoration: "none" }}>IAGZ (iagz.ch)</a> — Indian Association of Greater Zurich; Diwali, Holi, family events</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>InSAZ</strong> — Indian Students Association Zurich (ETH/UZH)</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>InterNations Zurich</strong> — Large expat community meetups</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>Meetup.com Zurich</strong> — Various interest-based groups</li>
              </ul>
            </div>

          </div>
        </section>

        {/* SECTION 3 — Resident Track */}
        <section style={{ marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "var(--text)", margin: 0 }}>
              Community &amp; Daily Life
            </h2>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", background: "rgba(16,185,129,0.1)", color: "#10b981", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 6, padding: "3px 10px", textTransform: "uppercase" }}>
              Community &amp; Daily Life
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>

            {/* Indian Community */}
            <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderLeft: "4px solid #10b981", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 12 }}>🇮🇳 Indian Community</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><a href="https://iagz.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#10b981", textDecoration: "none" }}>IAGZ (iagz.ch)</a> — Primary Indian association, 100+ member families</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>ISKCON Zurich</strong> — Hare Krishna temple, bhajans, prasad, festivals</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>Gujarati, Telugu, Punjabi associations</strong> — Regional cultural groups</li>
              </ul>
            </div>

            {/* City Resources */}
            <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderLeft: "4px solid #10b981", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 12 }}>🌐 City Resources</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><a href="https://www.stadt-zuerich.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#10b981", textDecoration: "none" }}>stadt-zuerich.ch</a> — City portal, all services</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><a href="https://www.zh.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#10b981", textDecoration: "none" }}>zh.ch</a> — Canton Zurich portal</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>City council decisions:</strong> <a href="https://www.stadt-zuerich.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#10b981", textDecoration: "none" }}>stadt-zuerich.ch</a></li>
              </ul>
            </div>

            {/* Civic Engagement */}
            <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderLeft: "4px solid #10b981", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 12 }}>🗳️ Civic Engagement</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>Neighbourhood associations (Quartiervereins)</strong> — Join via local notice boards</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}>Volunteer: <a href="https://www.caritas-zuerich.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#10b981", textDecoration: "none" }}>Caritas Zürich</a>, <a href="https://www.benevol-zh.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#10b981", textDecoration: "none" }}>Benevol</a></li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>City council meetings:</strong> Public — schedule at <a href="https://www.stadt-zuerich.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#10b981", textDecoration: "none" }}>stadt-zuerich.ch</a></li>
              </ul>
            </div>

          </div>
        </section>

        {/* SECTION 4 — Amenities & Recreation */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "var(--text)", marginBottom: 24 }}>
            Amenities &amp; Recreation
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>

            {/* Parks & Nature */}
            <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 12 }}>🌳 Parks &amp; Nature</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>Zürichhorn</strong> — Lakeside park, barbecue areas, Chinese Garden nearby</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>Irchelpark</strong> — Large park with meadows, near UZH, family-friendly</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>Rieterpark</strong> — Rose garden, Museum Rietberg, quiet walks</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>Uetliberg</strong> — Zurich's local mountain, 869m, hiking, panoramic views</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>Lake Zurich</strong> — Public swimming lidos (Freibäder) at Mythenquai, Tiefenbrunnen</li>
              </ul>
            </div>

            {/* Health & Safety */}
            <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 12 }}>🏥 Health &amp; Safety</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><a href="https://www.usz.ch" target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)", textDecoration: "none" }}>Universitätsspital Zürich USZ</a> — Main university hospital, 24/7 ER, Rämistrasse 100</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><a href="https://www.triemli.ch" target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)", textDecoration: "none" }}>Stadtspital Triemli</a> — City hospital, 24/7 ER, Birmensdorferstrasse 497</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>Stadtspital Waid</strong> — Community hospital, north Zurich</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>Late-night pharmacy:</strong> Apotheke HB (Zurich main station, open 24h)</li>
              </ul>
            </div>

            {/* Cultural & Sports */}
            <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 16, padding: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 12 }}>🎨 Cultural &amp; Sports</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><a href="https://www.kunsthaus.ch" target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)", textDecoration: "none" }}>Kunsthaus Zürich (kunsthaus.ch)</a> — Major art museum</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><a href="https://www.nationalmuseum.ch" target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)", textDecoration: "none" }}>Landesmuseum (nationalmuseum.ch)</a> — Swiss national history museum</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><a href="https://www.opernhaus.ch" target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)", textDecoration: "none" }}>Zurich Opera House (opernhaus.ch)</a></li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><strong style={{ color: "var(--text)" }}>Hallenbäder (indoor pools):</strong> Hallenbad City, Hallenbad Oerlikon</li>
                <li style={{ fontSize: 13, color: "var(--text-2)" }}><a href="https://www.stabi.ch" target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)", textDecoration: "none" }}>Stadtbibliothek Zürich (stabi.ch)</a> — Public library network</li>
              </ul>
            </div>

          </div>
        </section>

        {/* SECTION 5 — Indian Food & Grocery */}
        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>
            Indian Restaurants &amp; Grocery
          </h2>
          <p style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 24 }}>Well-established Indian restaurants and grocery stores in Zurich — all links open in Google Maps.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>

            {/* Restaurants */}
            <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 16, padding: "20px 22px" }}>
              <h3 style={{ margin: "0 0 14px", fontSize: 13, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--text-3)" }}>🍛 Restaurants</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { name: "India Garden", note: "Limmatquai — long-standing North Indian classic", href: "https://maps.google.com/?q=India+Garden+Restaurant+Zurich" },
                  { name: "Shaan", note: "Tandoori specialties, Kreis 4", href: "https://maps.google.com/?q=Shaan+Indian+Restaurant+Zurich" },
                  { name: "Meera Indian Restaurant", note: "Seefeld quarter, South Indian dishes", href: "https://maps.google.com/?q=Meera+Indian+Restaurant+Zurich" },
                  { name: "Rajasthan Flavors", note: "Vegetarian-friendly North Indian", href: "https://maps.google.com/?q=Rajasthan+Flavors+Zurich" },
                  { name: "Goa Grill", note: "Goan and coastal cuisine", href: "https://maps.google.com/?q=Goa+Grill+Restaurant+Zurich" },
                  { name: "More on Maps →", note: "Browse all Indian restaurants", href: "https://www.google.com/maps/search/Indian+restaurants+Zurich+Switzerland" },
                ].map(r => (
                  <a key={r.name} href={r.href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", flexDirection: "column", textDecoration: "none" }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--in)" }}>{r.name}</span>
                    <span style={{ fontSize: 11, color: "var(--text-3)", marginTop: 1 }}>{r.note}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Grocery */}
            <div style={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 16, padding: "20px 22px" }}>
              <h3 style={{ margin: "0 0 14px", fontSize: 13, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--text-3)" }}>🛒 Indian & Asian Groceries</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { name: "Asia House Zurich", note: "Weststrasse 178 — largest Indian/Asian grocery", href: "https://maps.google.com/?q=Asia+House+Weststrasse+178+Zurich" },
                  { name: "Bollywood Supermarket", note: "Langstrasse area — spices, dal, frozen goods", href: "https://maps.google.com/?q=Bollywood+Supermarket+Zurich" },
                  { name: "Desi Kirana", note: "Indian spices, lentils, pickles, snacks", href: "https://maps.google.com/?q=Desi+Kirana+Zurich" },
                  { name: "Asia Food Oerlikon", note: "Oerlikon — Indian and SE Asian products", href: "https://maps.google.com/?q=Asia+Food+Oerlikon+Zurich" },
                  { name: "More on Maps →", note: "Browse all Indian grocery stores", href: "https://www.google.com/maps/search/Indian+grocery+store+Zurich+Switzerland" },
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

        {/* SECTION 6 — Emergency & Contacts */}
        <section>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "var(--text)", marginBottom: 20 }}>
            Emergency &amp; Key Contacts
          </h2>
          <div style={{ background: "#111827", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "28px 28px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>

            {/* Swiss Emergency Numbers */}
            <div>
              <h3 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#f87171", marginBottom: 14 }}>🚨 Swiss Emergency Numbers</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px" }}>
                {[
                  ["117", "Police"],
                  ["118", "Fire"],
                  ["144", "Ambulance"],
                  ["1414", "REGA Helicopter"],
                  ["145", "Poison Control"],
                  ["143", "Emotional Support"],
                  ["112", "European Emergency"],
                ].map(([num, label]) => (
                  <div key={num} style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                    <span style={{ fontSize: 16, fontWeight: 800, color: "#f87171", fontVariantNumeric: "tabular-nums" }}>{num}</span>
                    <span style={{ fontSize: 12, color: "#9ca3af" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Zurich Contacts */}
            <div>
              <h3 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#60a5fa", marginBottom: 14 }}>🏙️ Zurich Contacts</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                <li style={{ fontSize: 13, color: "#9ca3af" }}><a href="https://www.stadtpolizei.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#60a5fa", textDecoration: "none" }}>Stadtpolizei Zürich</a></li>
                <li style={{ fontSize: 13, color: "#9ca3af" }}><strong style={{ color: "#d1d5db" }}>City Hall:</strong> Stadthaus, Stadthausquai 17, 8001 Zürich — <a href="https://www.stadt-zuerich.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#60a5fa", textDecoration: "none" }}>stadt-zuerich.ch</a></li>
              </ul>
            </div>

            {/* Indian Diplomatic */}
            <div>
              <h3 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#f59e0b", marginBottom: 14 }}>🇮🇳 Indian Diplomatic Missions</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                <li style={{ fontSize: 13, color: "#9ca3af" }}>
                  <strong style={{ color: "#d1d5db" }}>Embassy of India, Berne</strong><br />
                  <a href="https://www.indembassybern.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: "#f59e0b", textDecoration: "none" }}>indembassybern.gov.in</a>
                  <span style={{ display: "block", marginTop: 2 }}>Kirchenfeldstrasse 28, 3005 Bern</span>
                </li>
                <li style={{ fontSize: 13, color: "#9ca3af" }}>
                  <strong style={{ color: "#d1d5db" }}>Indian Consulate General, Geneva</strong><br />
                  <a href="https://www.cgigeneva.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: "#f59e0b", textDecoration: "none" }}>cgigeneva.gov.in</a>
                </li>
              </ul>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
