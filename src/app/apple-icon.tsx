import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Simplified lotus representation for Apple icon (ImageResponse doesn't support SVG polygons)
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 36,
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Outer petals — left */}
        <div style={{
          position: "absolute", width: 0, height: 0,
          borderLeft: "42px solid transparent",
          borderRight: "28px solid transparent",
          borderBottom: "110px solid #B82222",
          top: 38, left: 14, transform: "rotate(-30deg)",
        }} />
        {/* Outer petals — right */}
        <div style={{
          position: "absolute", width: 0, height: 0,
          borderLeft: "28px solid transparent",
          borderRight: "42px solid transparent",
          borderBottom: "110px solid #B82222",
          top: 38, right: 14, transform: "rotate(30deg)",
        }} />
        {/* Bottom-left petal */}
        <div style={{
          position: "absolute", width: 0, height: 0,
          borderLeft: "50px solid transparent",
          borderRight: "18px solid transparent",
          borderBottom: "80px solid #A01E1E",
          top: 88, left: 10, transform: "rotate(10deg)",
        }} />
        {/* Bottom-right petal */}
        <div style={{
          position: "absolute", width: 0, height: 0,
          borderLeft: "18px solid transparent",
          borderRight: "50px solid transparent",
          borderBottom: "80px solid #A01E1E",
          top: 88, right: 10, transform: "rotate(-10deg)",
        }} />
        {/* Bottom centre spread */}
        <div style={{
          position: "absolute", bottom: 14, left: 28, right: 28, height: 38,
          background: "#B52020", borderRadius: "0 0 28px 28px",
        }} />
        {/* Golden left inner petal */}
        <div style={{
          position: "absolute", width: 0, height: 0,
          borderLeft: "26px solid transparent",
          borderRight: "26px solid transparent",
          borderBottom: "70px solid #C9956A",
          top: 60, left: 42,
        }} />
        {/* Golden right inner petal */}
        <div style={{
          position: "absolute", width: 0, height: 0,
          borderLeft: "26px solid transparent",
          borderRight: "26px solid transparent",
          borderBottom: "70px solid #BE8A5F",
          top: 60, right: 42,
        }} />
        {/* Central red petal */}
        <div style={{
          position: "absolute", width: 0, height: 0,
          borderLeft: "18px solid transparent",
          borderRight: "18px solid transparent",
          borderBottom: "105px solid #CC2C2C",
          top: 28, left: "50%", transform: "translateX(-50%)",
        }} />
        {/* Mountain peaks — left */}
        <div style={{
          position: "absolute", width: 0, height: 0,
          borderLeft: "16px solid transparent",
          borderRight: "16px solid transparent",
          borderBottom: "30px solid white",
          top: 56, left: 52,
        }} />
        {/* Mountain peaks — centre */}
        <div style={{
          position: "absolute", width: 0, height: 0,
          borderLeft: "20px solid transparent",
          borderRight: "20px solid transparent",
          borderBottom: "36px solid white",
          top: 50, left: "50%", transform: "translateX(-50%)",
        }} />
        {/* Mountain peaks — right */}
        <div style={{
          position: "absolute", width: 0, height: 0,
          borderLeft: "16px solid transparent",
          borderRight: "16px solid transparent",
          borderBottom: "26px solid white",
          top: 60, right: 52,
        }} />
        {/* White arch on central petal */}
        <div style={{
          position: "absolute", top: 36, left: "50%", transform: "translateX(-50%)",
          width: 24, height: 40, border: "2px solid white",
          borderBottom: "none", borderRadius: "12px 12px 0 0", opacity: 0.85,
        }} />
      </div>
    ),
    { ...size }
  );
}
