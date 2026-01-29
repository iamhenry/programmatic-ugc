import React from "react";
import { AbsoluteFill } from "remotion";

export type EndSlideProps = {
  saveLine: string;
  shareLine: string;
  closer: string;
  highlightPhrase: string;
};

const BRAND_GREEN = "#16a34a";

/**
 * Wraps highlightPhrase in green span if found within text.
 * Returns original text if phrase not found.
 */
const highlightText = (text: string, phrase: string): React.ReactNode => {
  const idx = text.indexOf(phrase);
  if (idx === -1) return text;

  return (
    <>
      {text.slice(0, idx)}
      <span style={{ color: BRAND_GREEN }}>{phrase}</span>
      {text.slice(idx + phrase.length)}
    </>
  );
};

export const EndSlide: React.FC<EndSlideProps> = ({
  saveLine,
  shareLine,
  closer,
  highlightPhrase,
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
            top: 181,
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
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: 96,
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
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: 48,
              fontWeight: 400,
              lineHeight: 1.4,
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            <p style={{ margin: 0 }}>{highlightText(saveLine, highlightPhrase)}</p>
            <p style={{ margin: 0 }}>{shareLine}</p>
            <p style={{ margin: 0 }}>{closer}</p>
          </div>
        </div>

        {/* Arrow - same position as ContentSlide (y:1145) */}
        <div
          style={{
            position: "absolute",
            left: 872.6,
            top: 1145,
            width: 80,
            height: 0,
            borderTop: `8px solid ${BRAND_GREEN}`,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 938.4,
            top: 1133,
            width: 0,
            height: 24,
            borderLeft: `8px solid ${BRAND_GREEN}`,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
