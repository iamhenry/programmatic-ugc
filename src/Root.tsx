import { Still } from "remotion";
import { CoverSlide } from "./CoverSlide";
import { ContentSlide } from "./templates/ContentSlide";

export const RemotionRoot = () => {
  return (
    <>
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
      <Still
        id="ContentSlide"
        component={ContentSlide}
        width={1080}
        height={1350}
        defaultProps={{
          title: "What alcohol does to the gut and brain",
          items: [
            "Alcohol irritates the gut lining",
            "Inflammation signals reach the brain",
            "Result anxiety bloating and low mood feel mental but start in the gut",
          ],
        }}
      />
    </>
  );
};
