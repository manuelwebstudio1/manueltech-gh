import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(180deg, #07111F 0%, #0B1728 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, color: "#5B9BFF" }}>
          MANUELTECH GH
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 64,
            fontWeight: 700,
            marginTop: 24,
            lineHeight: 1.1,
          }}
        >
          <div style={{ display: "flex" }}>We Build Websites.</div>
          <div style={{ display: "flex" }}>We Engineer Business Growth.</div>
        </div>
      </div>
    ),
    size,
  );
}
