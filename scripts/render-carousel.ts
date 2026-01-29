/**
 * Headless carousel renderer.
 * Reads CarouselContent JSON and outputs PNG slides.
 *
 * Usage: npx tsx scripts/render-carousel.ts <content.json>
 * Output: slide-1.png, slide-2.png, etc. in same directory as input JSON
 */
import { bundle } from "@remotion/bundler";
import { renderStill, selectComposition } from "@remotion/renderer";
import * as path from "node:path";
import * as fs from "node:fs";
import { fileURLToPath } from "node:url";

import type { CarouselContent } from "../src/types/carousel";
import type { TitleCoverProps } from "../src/templates/TitleCover";
import type { ContentSlideProps } from "../src/templates/ContentSlide";
import type { EndSlideProps } from "../src/templates/EndSlide";

// ESM __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Instagram carousel dimensions
const WIDTH = 1080;
const HEIGHT = 1350;

type SlideConfig = {
  compositionId: string;
  inputProps: TitleCoverProps | ContentSlideProps | EndSlideProps;
  outputName: string;
};

function buildSlideConfigs(content: CarouselContent): SlideConfig[] {
  const configs: SlideConfig[] = [];

  // Slide 1: Cover
  configs.push({
    compositionId: "TitleCover",
    inputProps: {
      headline: content.cover.headline,
      highlightWord: content.cover.highlightWord,
      subtitle: content.cover.subtitle,
    } satisfies TitleCoverProps,
    outputName: "slide-1.png",
  });

  // Slides 2-N: Content (supports 2-4 content slides)
  content.slides.forEach((slide, index) => {
    configs.push({
      compositionId: "ContentSlide",
      inputProps: {
        title: slide.title,
        items: slide.items,
      } satisfies ContentSlideProps,
      outputName: `slide-${index + 2}.png`,
    });
  });

  // Final slide: End/CTA
  const endSlideNumber = content.slides.length + 2;
  configs.push({
    compositionId: "EndSlide",
    inputProps: {
      saveLine: content.end.saveLine,
      shareLine: content.end.shareLine,
      closer: content.end.closer,
      highlightPhrase: content.end.highlightPhrase,
    } satisfies EndSlideProps,
    outputName: `slide-${endSlideNumber}.png`,
  });

  return configs;
}

function validateContent(content: unknown): content is CarouselContent {
  if (!content || typeof content !== "object") {
    return false;
  }

  const c = content as Record<string, unknown>;

  if (!c.topic || typeof c.topic !== "string") {
    console.error("Error: Missing or invalid 'topic' field");
    return false;
  }

  if (!c.cover || typeof c.cover !== "object") {
    console.error("Error: Missing or invalid 'cover' field");
    return false;
  }

  if (!Array.isArray(c.slides) || c.slides.length < 2 || c.slides.length > 4) {
    console.error("Error: 'slides' must be an array with 2-4 items");
    return false;
  }

  if (!c.end || typeof c.end !== "object") {
    console.error("Error: Missing or invalid 'end' field");
    return false;
  }

  return true;
}

async function main() {
  const jsonPath = process.argv[2];

  if (!jsonPath) {
    console.error("Usage: npx tsx scripts/render-carousel.ts <content.json>");
    console.error("Example: npx tsx scripts/render-carousel.ts ./content/my-carousel.json");
    process.exit(1);
  }

  const absoluteJsonPath = path.resolve(jsonPath);

  if (!fs.existsSync(absoluteJsonPath)) {
    console.error(`Error: File not found: ${absoluteJsonPath}`);
    process.exit(1);
  }

  const outputDir = path.dirname(absoluteJsonPath);

  // Parse and validate JSON
  let content: CarouselContent;
  try {
    const raw = JSON.parse(fs.readFileSync(absoluteJsonPath, "utf-8"));
    if (!validateContent(raw)) {
      process.exit(1);
    }
    content = raw;
  } catch (err) {
    console.error(`Error: Failed to parse JSON: ${err instanceof Error ? err.message : err}`);
    process.exit(1);
  }

  const slideConfigs = buildSlideConfigs(content);
  const totalSlides = slideConfigs.length;

  console.log(`\n📸 Rendering carousel: "${content.topic}"`);
  console.log(`   Output: ${outputDir}`);
  console.log(`   Slides: ${totalSlides} (1 cover + ${content.slides.length} content + 1 CTA)\n`);

  // Bundle the Remotion project (uses carousel-specific entry point)
  console.log("📦 Bundling Remotion project...");
  const bundleLocation = await bundle({
    entryPoint: path.resolve(__dirname, "../src/carousel-entry.ts"),
    // Webpack override for better error messages
    onProgress: (progress) => {
      if (progress === 100) {
        console.log("   Bundle complete.\n");
      }
    },
  });

  // Render each slide
  for (let i = 0; i < slideConfigs.length; i++) {
    const config = slideConfigs[i];
    const outputPath = path.join(outputDir, config.outputName);

    console.log(`🎨 [${i + 1}/${totalSlides}] Rendering ${config.outputName}...`);

    // Select composition with custom props
    const composition = await selectComposition({
      serveUrl: bundleLocation,
      id: config.compositionId,
      inputProps: config.inputProps,
    });

    // Render the still
    await renderStill({
      composition,
      serveUrl: bundleLocation,
      output: outputPath,
      inputProps: config.inputProps,
    });

    console.log(`   ✓ Saved: ${config.outputName}`);
  }

  console.log(`\n✅ Done! ${totalSlides} slides rendered to ${outputDir}\n`);
}

main().catch((err) => {
  console.error("\n❌ Render failed:", err instanceof Error ? err.message : err);
  process.exit(1);
});
