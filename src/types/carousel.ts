/**
 * Cover slide - the hook (Slide 1)
 */
export type CoverSlideContent = {
  /** Main headline without highlight word. 30-65 chars */
  headline: string;
  /** Last word/phrase highlighted in green. 5-15 chars */
  highlightWord: string;
  /** Explains why this matters. 40-80 chars */
  subtitle: string;
};

/**
 * Content slide - educational bullets (Slides 2-4)
 */
export type ContentSlideContent = {
  /** Slide title. 20-45 chars */
  title: string;
  /** 3-4 bullet points. Each 30-70 chars */
  items: string[];
};

/**
 * End slide - CTA (Slide 5)
 */
export type EndSlideContent = {
  /** "Save this if you are..." 40-80 chars */
  saveLine: string;
  /** "Share with someone who..." 40-80 chars */
  shareLine: string;
  /** Empowering closing statement. 30-60 chars */
  closer: string;
  /** Topic phrase highlighted in green within saveLine. 10-30 chars */
  highlightPhrase: string;
};

/**
 * Full carousel data (4-6 slides total: 1 cover + 2-4 content + 1 CTA)
 */
export type CarouselContent = {
  /** Topic identifier for this carousel */
  topic: string;
  /** Slide 1: Cover */
  cover: CoverSlideContent;
  /** Content slides (2-4 items). Validated at runtime. */
  slides: ContentSlideContent[];
  /** Final slide: CTA */
  end: EndSlideContent;
};
