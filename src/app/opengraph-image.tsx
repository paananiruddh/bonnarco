import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { site } from "@/lib/site-config";

export const runtime = "nodejs";
export const alt = `${site.brandName} — Business Support & Advice`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [regular, italic] = await Promise.all([
    readFile(path.join(process.cwd(), "src/assets/fonts/fraunces-500.ttf")),
    readFile(
      path.join(process.cwd(), "src/assets/fonts/fraunces-500-italic.ttf"),
    ),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1B1A17",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontFamily: "Fraunces",
            fontSize: 104,
            color: "#FBF9F4",
          }}
        >
          <span>Bonnar&nbsp;</span>
          <span style={{ fontFamily: "FrauncesItalic", color: "#C9A968" }}>
            &amp;
          </span>
          <span>&nbsp;Co</span>
        </div>
        <div
          style={{
            display: "flex",
            width: 64,
            height: 2,
            marginTop: 36,
            marginBottom: 36,
            backgroundColor: "#8A6A34",
          }}
        />
        <div
          style={{
            display: "flex",
            fontFamily: "Fraunces",
            fontSize: 26,
            letterSpacing: 6,
            color: "rgba(251,249,244,0.6)",
          }}
        >
          BUSINESS SUPPORT &amp; ADVICE
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: regular, weight: 500, style: "normal" },
        { name: "FrauncesItalic", data: italic, weight: 500, style: "italic" },
      ],
    },
  );
}
