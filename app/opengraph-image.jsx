import { ImageResponse } from "next/og";

export const alt = "Ambrozia Café & Pâtisserie — Viman Nagar, Pune";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social-share card, generated at build time (no external assets).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
          background:
            "radial-gradient(120% 120% at 50% 0%, #FBF6EF 0%, #F4ECE0 45%, #E9DAC6 100%)",
          color: "#2A2019",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#9A5A30",
          }}
        >
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 999,
              background: "#2A2019",
              color: "#FBF6EF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
            }}
          >
            A
          </div>
          Est. 2015 · Viman Nagar
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 92, lineHeight: 1.02, fontWeight: 600 }}>
            Ambrozia
          </div>
          <div
            style={{
              fontSize: 52,
              fontStyle: "italic",
              color: "#9A5A30",
            }}
          >
            Café &amp; Pâtisserie
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 28,
            fontFamily: "Helvetica, Arial, sans-serif",
            color: "#5A4432",
          }}
        >
          <div style={{ display: "flex" }}>
            French Macarons · Cheesecakes · Cakes · Coffee
          </div>
          <div style={{ display: "flex", color: "#B96F3D" }}>Rated 4.8 / 5</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
