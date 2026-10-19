import { ImageResponse } from "next/og";

export const alt = "Portafolio de Denis Jamil, Backend Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#000000",
          color: "#ffffff",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "74px 90px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 760 }}>
          <div style={{ color: "#8dc4ff", display: "flex", fontSize: 24, fontWeight: 700, letterSpacing: 6 }}>
            PORTAFOLIO
          </div>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 900, letterSpacing: -6, lineHeight: 1, marginTop: 28 }}>
            Denis Jamil
          </div>
          <div style={{ color: "#007bff", display: "flex", fontSize: 48, fontWeight: 800, marginTop: 18 }}>
            Backend Developer
          </div>
          <div style={{ color: "#a0aec0", display: "flex", fontSize: 27, lineHeight: 1.35, marginTop: 28 }}>
            Construyo soluciones digitales con codigo claro y proposito.
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            background: "linear-gradient(135deg, #0052ff, #168bff)",
            borderRadius: 999,
            color: "white",
            display: "flex",
            fontSize: 94,
            fontWeight: 900,
            height: 270,
            justifyContent: "center",
            width: 270,
          }}
        >
          DJ
        </div>
      </div>
    ),
    size,
  );
}
