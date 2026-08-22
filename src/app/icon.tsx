import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "linear-gradient(135deg, #F97316 0%, #DC2626 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Diya flame shape */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
          }}
        >
          {/* Flame */}
          <div
            style={{
              width: 8,
              height: 12,
              background: "linear-gradient(180deg, #FFF7ED 0%, #FCD34D 60%, #F97316 100%)",
              borderRadius: "50% 50% 30% 30% / 60% 60% 40% 40%",
              marginBottom: -2,
            }}
          />
          {/* Diya bowl */}
          <div
            style={{
              width: 16,
              height: 7,
              background: "linear-gradient(180deg, #FCD34D 0%, #D97706 100%)",
              borderRadius: "0 0 10px 10px",
              border: "1px solid rgba(255,255,255,0.4)",
            }}
          />
        </div>
        {/* Small Swiss cross in corner */}
        <div
          style={{
            position: "absolute",
            bottom: 3,
            right: 3,
            width: 7,
            height: 7,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "absolute", width: 7, height: 2.5, background: "white", borderRadius: 1 }} />
          <div style={{ position: "absolute", width: 2.5, height: 7, background: "white", borderRadius: 1 }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
