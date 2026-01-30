import React from "react";
import { AbsoluteFill } from "remotion";
import { loadFont } from "@remotion/google-fonts/AlbertSans";

const { fontFamily } = loadFont();

export type ContentSlideProps = {
  title: string;
  items?: string[];
  body?: string;
};

const BRAND_GREEN = "#16a34a";

const bodyToItems = (body: string): string[] =>
  body
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

export const ContentSlide: React.FC<ContentSlideProps> = ({
  title,
  items,
  body,
}) => {
  const resolvedItems = items ?? (body ? bodyToItems(body) : []);

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
            {title}
          </h1>

          <ul
            style={{
              width: "100%",
              margin: 0,
              paddingLeft: 60,
              color: "#737373",
              fontFamily,
              fontSize: 50,
              fontWeight: 400,
              lineHeight: 1.4,
              listStyleType: "disc",
            }}
          >
            {resolvedItems.map((item) => (
              <li key={item} style={{ marginBottom: 28 }}>
                {item}
              </li>
            ))}
          </ul>
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
