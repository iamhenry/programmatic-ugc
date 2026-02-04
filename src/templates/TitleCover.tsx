import { AbsoluteFill } from "remotion";
import React from "react";
import { loadFont } from "@remotion/google-fonts/AlbertSans";

const { fontFamily } = loadFont();

export type TitleCoverProps = {
  /** Headline with [bracketed] word(s) to highlight in green */
  headline: string;
  subtitle: string;
};

const BRAND_GREEN = "#16a34a";

/** Parses headline and renders [bracketed] text in green */
const renderHeadline = (headline: string) => {
  const parts = headline.split(/(\[[^\]]+\])/g);
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

export const TitleCover: React.FC<TitleCoverProps> = ({
  headline,
  subtitle,
}) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#fafafa",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        padding: "160px 80px 0 80px",
      }}
    >
      <div
        style={{
          width: 920,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 56,
        }}
      >
        <h1
          style={{
            width: "100%",
            fontFamily,
            fontSize: 130,
            fontWeight: 800,
            lineHeight: "140px",
            margin: 0,
            color: "#404040",
          }}
        >
          {renderHeadline(headline)}
        </h1>

        <p
          style={{
            width: "100%",
            fontFamily,
            fontSize: 50,
            fontWeight: 400,
            lineHeight: 1.4,
            margin: 0,
            color: "#737373",
          }}
        >
          {subtitle}
        </p>

        <div style={{ position: "absolute", right: 80, bottom: 160, fontSize: 48, color: BRAND_GREEN }}>→</div>
      </div>
    </AbsoluteFill>
  );
};
