import { createFileRoute } from "@tanstack/react-router";
import { IMAGES as APP_IMAGES } from "@/data/images";
import { DisciplineLayout } from "@/components/site/DisciplineLayout";
const soloImg = APP_IMAGES.solo;
import trainingImg from "@/assets/training.jpg";
import eventImg from "@/assets/event.jpg";

const TITLE = "Solo Creative — Individual Creative Performance | PSSATG";
const DESCRIPTION =
  "Solo Creative is the individual creative category of Pencak Silat, where a single performer presents an original composition rooted in authentic Silat movement.";

export const Route = createFileRoute("/disciplines/solo-creative")({
  component: SoloCreativePage,
  head: () => ({
    meta: [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function SoloCreativePage() {
  return (
    <DisciplineLayout
      name="Solo Creative"
      tagline="Individual Creative Performance"
      intro="A single performer presents an original creative composition rooted in authentic Silat movement."
      image={soloImg}
      currentKey="solo"
      points={[
        {
          title: "Creative Performance",
          text: "The competitor composes an original routine rather than performing a compulsory form.",
        },
        {
          title: "Individual Expression",
          text: "Personal style, character and interpretation are central to the performance.",
        },
        {
          title: "Athletic Movement",
          text: "Balance, flexibility, speed and power are demonstrated throughout the composition.",
        },
        {
          title: "Artistic Presentation",
          text: "The routine must remain faithful to authentic Pencak Silat technique and tradition.",
        },
      ]}
      gallery={[
        { src: soloImg, alt: "Solo creative performance with blade" },
        { src: trainingImg, alt: "Athlete rehearsing a creative routine" },
        { src: eventImg, alt: "Artistic category competition arena" },
      ]}
    />
  );
}
