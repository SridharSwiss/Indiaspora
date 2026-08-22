import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: "linear-gradient(135deg, #F97316 0%, #DC2626 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Diya flame */}
        <div
          style={{
            width: 44,
            height: 64,
            background: "linear-gradient(180deg, #FFF7ED 0%, #FCD34D 55%, #F97316 100%)",
            borderRadius: "50% 50% 30% 30% / 60% 60% 40% 40%",
            marginBottom: -8,
          }}
        />
        {/* Diya bowl */}
        <div
          style={{
            width: 90,
            height: 38,
            background: "linear-gradient(180deg, #FCD34D 0%, #D97706 100%)",
            borderRadius: "0 0 50px 50px",
            border: "2px solid rgba(255,255,255,0.45)",
          }}
        />
        {/* Wick dot */}
        <div
          style={{
            position: "absolute",
            top: 60,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#92400E",
          }}
        />
        {/* Swiss cross bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: 18,
            right: 18,
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "absolute", width: 36, height: 12, background: "rgba(255,255,255,0.9)", borderRadius: 4 }} />
          <div style={{ position: "absolute", width: 12, height: 36, background: "rgba(255,255,255,0.9)", borderRadius: 4 }} />
        </div>
        {/* Tricolor stripe at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            borderRadius: "0 0 40px 40px",
            background: "linear-gradient(90deg, #F97316 0% 33%, rgba(255,255,255,0.6) 33% 66%, #059669 66% 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
