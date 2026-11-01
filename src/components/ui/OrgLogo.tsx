import { ORG_LOGOS, normOrg } from "@/lib/org-logos";

const KEYS = Object.keys(ORG_LOGOS).filter((k) => k.length >= 3).sort((a, b) => b.length - a.length);

/** Exact match first; otherwise the longest known organisation name/alias contained in `name` as whole words. */
function findLogo(name: string): string | undefined {
  const n = normOrg(name);
  if (ORG_LOGOS[n]) return ORG_LOGOS[n];
  const padded = ` ${n} `;
  const hit = KEYS.find((k) => padded.includes(` ${k} `));
  return hit ? ORG_LOGOS[hit] : undefined;
}

/** Shows the organisation's official logo when we hold one; renders nothing otherwise. */
export default function OrgLogo({ name, size = 40 }: { name: string; size?: number }) {
  const src = findLogo(name);
  if (!src) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${name} logo`}
      loading="lazy"
      style={{ height: size, width: "auto", maxWidth: size * 2.6, objectFit: "contain", background: "#fff", borderRadius: 8, padding: 4, flexShrink: 0, display: "block", marginBottom: 8 }}
    />
  );
}
