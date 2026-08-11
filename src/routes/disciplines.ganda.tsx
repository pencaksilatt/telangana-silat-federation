import { createFileRoute } from "@tanstack/react-router";
import { DisciplineLayout } from "@/components/site/DisciplineLayout";
import gandaImg from "@/assets/ganda.jpg";
import trainingImg from "@/assets/training.jpg";
import eventImg from "@/assets/event.jpg";

const TITLE = "Ganda — Double / Two-Person Team | PSSATG";
const DESCRIPTION =
  "Ganda is the two-person artistic category of Pencak Silat, where a pair presents a choreographed attack-and-defence sequence, empty hand and with weapons.";

export const Route = createFileRoute("/disciplines/ganda")({
  component: GandaPage,
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

function GandaPage() {
  return (
    <DisciplineLayout
      name="Ganda"
      tagline="Double / Two-Person Team"
      intro="Two competitors present a choreographed attack-and-defence sequence, empty hand and with weapons."
      image={gandaImg}
      currentKey="ganda"
      points={[
        {
          title: "Two-Person Team",
          text: "A pair from the same team performs together as attacker and defender in turn.",
        },
        {
          title: "Attack & Defence",
          text: "The routine demonstrates realistic attack-and-defence exchanges with clear intent.",
        },
        {
          title: "Empty Hand & Weapons",
          text: "The composition includes both empty-hand sequences and traditional weapon work.",
        },
        {
          title: "Timing & Harmony",
          text: "Judging rewards timing, distance, coordination and the flow between both performers.",
        },
      ]}
      gallery={[
        { src: gandaImg, alt: "Ganda paired weapons routine" },
        { src: trainingImg, alt: "Pair rehearsing an artistic sequence" },
        { src: eventImg, alt: "Artistic category competition arena" },
      ]}
    />
  );
}
