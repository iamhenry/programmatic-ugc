import { AbsoluteFill } from "remotion";
import React from "react";
import { loadFont } from "@remotion/google-fonts/AlbertSans";

const { fontFamily } = loadFont();

export type TitleCoverProps = {
  headline: string;
  highlightWord: string;
  subtitle: string;
};

const BRAND_GREEN = "#16a34a";

export const TitleCover: React.FC<TitleCoverProps> = ({
  headline,
  highlightWord,
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
        padding: "193px 80px 0 80px",
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
          {headline}{" "}
          <span style={{ color: BRAND_GREEN }}>{highlightWord}</span>
        </h1>

        <p
          style={{
            width: "100%",
            fontFamily,
            fontSize: 48,
            fontWeight: 400,
            lineHeight: 1.4,
            margin: 0,
            color: "#737373",
          }}
        >
          {subtitle}
        </p>

        <div style={{ fontSize: 48, color: BRAND_GREEN }}>→</div>
      </div>
    </AbsoluteFill>
  );
};
