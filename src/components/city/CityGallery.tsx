import { CITY_GALLERY } from "@/lib/city-gallery";

export default function CityGallery({ slug, name }: { slug: string; name: string }) {
  const imgs = CITY_GALLERY[slug];
  if (!imgs?.length) return null;
  return (
    <section style={{ marginBottom: 56 }} aria-label={`${name} signature photos`}>
      <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "var(--text)", marginBottom: 16 }}>
        {name} in pictures
      </h2>
      <div className="city-gallery">
        {imgs.map((im, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={im.src} src={im.src} alt={im.alt} loading="lazy" className={i === 0 ? "cg-big" : undefined} />
        ))}
      </div>
      <p style={{ fontSize: 11, color: "var(--text-3)", marginTop: 8 }}>
        Photos: Pixabay contributors — <a href="/credits" style={{ textDecoration: "underline" }}>credits</a>
      </p>
      <style>{`
        .city-gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .city-gallery img { width: 100%; height: 170px; object-fit: cover; border-radius: 14px; display: block; }
        .city-gallery img.cg-big { grid-column: span 2; grid-row: span 2; height: 100%; min-height: 350px; }
        @media (max-width: 640px) {
          .city-gallery { grid-template-columns: repeat(2, 1fr); }
          .city-gallery img.cg-big { grid-column: span 2; grid-row: auto; height: 220px; min-height: 0; }
        }
      `}</style>
    </section>
  );
}
