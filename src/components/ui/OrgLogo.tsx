import { ORG_LOGOS, normOrg } from "@/lib/org-logos";

/** Shows the organisation's official logo when we hold one; renders nothing otherwise. */
export default function OrgLogo({ name, size = 40 }: { name: string; size?: number }) {
  const src = ORG_LOGOS[normOrg(name)];
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
