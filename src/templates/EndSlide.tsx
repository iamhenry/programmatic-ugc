import React from "react";
import { AbsoluteFill } from "remotion";
import { loadFont } from "@remotion/google-fonts/AlbertSans";

const { fontFamily } = loadFont();

export type EndSlideProps = {
  saveLine: string;
  shareLine: string;
  closer: string;
};

const BRAND_GREEN = "#16a34a";

/**
 * Parses [bracketed] text and renders brackets content in green.
 */
const parseBracketedText = (text: string): React.ReactNode => {
  const parts = text.split(/(\[[^\]]+\])/g);
  return parts.map((part, i) => {
    if (part.startsWith("[") && part.endsWith("]")) {
      return (
        <span key={i} style={{ color: BRAND_GREEN }}>
          {part.slice(1, -1)}
        </span>
      );
    }
    return part;
  });
};

export const EndSlide: React.FC<EndSlideProps> = ({
  saveLine,
  shareLine,
  closer,
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#fafafa" }}>
      <div
        style={{
          width: 1080,
          height: 1350,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: 920,
            position: "absolute",
            left: 80,
            top: 160,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 56,
          }}
        >
          {/* Hardcoded title */}
          <h1
            style={{
              width: "100%",
              margin: 0,
              color: "#404040",
              fontFamily,
              fontSize: 130,
              fontWeight: 800,
              lineHeight: "140px",
            }}
          >
            Save & Share
          </h1>

          {/* Body lines */}
          <div
            style={{
              width: "100%",
              color: "#737373",
              fontFamily,
              fontSize: 50,
              fontWeight: 400,
              lineHeight: 1.4,
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            <p style={{ margin: 0 }}>{parseBracketedText(saveLine)}</p>
            <p style={{ margin: 0 }}>{parseBracketedText(shareLine)}</p>
            <p style={{ margin: 0 }}>{parseBracketedText(closer)}</p>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: 160,
            fontSize: 48,
            color: BRAND_GREEN,
          }}
        >
          →
        </div>
      </div>
    </AbsoluteFill>
  );
};
