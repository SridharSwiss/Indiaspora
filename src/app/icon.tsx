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
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 240 220"
          width="30"
          height="30"
        >
          <polygon points="100,48 55,130 72,158 80,120" fill="#B71C1C"/>
          <polygon points="100,48 55,130 80,120" fill="#C62828"/>
          <polygon points="100,48 72,158 90,165 95,130" fill="#C62828"/>
          <polygon points="140,48 185,130 168,158 160,120" fill="#B71C1C"/>
          <polygon points="140,48 185,130 160,120" fill="#C62828"/>
          <polygon points="140,48 168,158 150,165 145,130" fill="#C62828"/>
          <polygon points="80,120 72,158 120,168 120,145" fill="#D32F2F"/>
          <polygon points="160,120 168,158 120,168 120,145" fill="#C62828"/>
          <polygon points="120,32 100,48 80,120 95,130 120,118" fill="#E53935"/>
          <polygon points="120,32 140,48 160,120 145,130 120,118" fill="#C62828"/>
          <polygon points="120,52 90,105 100,128 120,118" fill="#C9A06A"/>
          <polygon points="120,52 90,105 100,115 120,110" fill="#D4AA7D"/>
          <polygon points="120,52 150,105 140,128 120,118" fill="#C9A06A"/>
          <polygon points="120,52 150,105 140,115 120,110" fill="#BF9560"/>
          <polygon points="100,128 120,138 140,128 120,118" fill="#BF9560"/>
          <polygon points="105,72 93,100 117,100" fill="white"/>
          <polygon points="135,78 120,100 148,100" fill="white" opacity="0.8"/>
          <polygon points="105,72 99,84 111,84" fill="white"/>
          <polygon points="135,78 129,88 141,88" fill="white"/>
          <polygon points="120,58 111,95 120,114 129,95" fill="#C62828"/>
          <polygon points="120,58 111,95 120,105" fill="#D32F2F"/>
        </svg>
      </div>
    ),
    { ...size }
  );
}
