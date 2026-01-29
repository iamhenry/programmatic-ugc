import { AbsoluteFill } from "remotion";
import React from "react";

export type CoverSlideProps = {
  headline: string;
  highlightWord: string;
  subtitle: string;
};

export const CoverSlide: React.FC<CoverSlideProps> = ({
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
      {/* Content container - 920px width */}
      <div
        style={{
          width: 920,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 56,
        }}
      >
        {/* Headline */}
        <h1
          style={{
            width: "100%",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: 96,
            fontWeight: 800,
            lineHeight: "140px",
            margin: 0,
            color: "#404040",
          }}
        >
          {headline}{" "}
          <span style={{ color: "#16a34a" }}>{highlightWord}</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            width: "100%",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: 48,
            fontWeight: 400,
            lineHeight: 1.4,
            margin: 0,
            color: "#737373",
          }}
        >
          {subtitle}
        </p>

        {/* Arrow placeholder (emoji for now) */}
        <div
          style={{
            fontSize: 48,
            color: "#16a34a",
          }}
        >
          →
        </div>
      </div>
    </AbsoluteFill>
  );
};
