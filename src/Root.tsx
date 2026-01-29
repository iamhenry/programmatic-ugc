import { Still } from "remotion";
import { CoverSlide } from "./CoverSlide";

export const RemotionRoot = () => {
  return (
    <Still
      id="CoverSlide"
      component={CoverSlide}
      width={1080}
      height={1350}
      defaultProps={{
        headline: "What happens to your gut and brain when you quit",
        highlightWord: "alcohol",
        subtitle: "Why anxiety, mood, and digestion change together in sobriety",
      }}
    />
  );
};
