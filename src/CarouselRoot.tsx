/**
 * Headless render entry point for carousel slides.
 * Registers all slide types as Stills for programmatic rendering.
 * DO NOT use in browser preview - use Root.tsx instead.
 */
import { Still } from "remotion";
import { TitleCover, TitleCoverProps } from "./templates/TitleCover";
import { ContentSlide, ContentSlideProps } from "./templates/ContentSlide";
import { EndSlide, EndSlideProps } from "./templates/EndSlide";

// Instagram carousel dimensions
const WIDTH = 1080;
const HEIGHT = 1350;

// Default props (overridden at render time via inputProps)
const defaultCoverProps: TitleCoverProps = {
  headline: "Placeholder",
  highlightWord: "headline",
  subtitle: "Placeholder subtitle",
};

const defaultContentProps: ContentSlideProps = {
  title: "Placeholder",
  items: ["Item 1", "Item 2", "Item 3"],
};

const defaultEndProps: EndSlideProps = {
  saveLine: "Save this if you need it",
  shareLine: "Share with someone who needs it",
  closer: "You've got this.",
  highlightPhrase: "need it",
};

export const CarouselRoot = () => {
  return (
    <>
      <Still
        id="TitleCover"
        component={TitleCover}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={defaultCoverProps}
      />
      <Still
        id="ContentSlide"
        component={ContentSlide}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={defaultContentProps}
      />
      <Still
        id="EndSlide"
        component={EndSlide}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={defaultEndProps}
      />
    </>
  );
};
