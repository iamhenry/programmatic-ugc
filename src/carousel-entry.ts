/**
 * Entry point for headless carousel rendering.
 * Used by scripts/render-carousel.ts - not for browser preview.
 */
import { registerRoot } from "remotion";
import { CarouselRoot } from "./CarouselRoot";

registerRoot(CarouselRoot);
