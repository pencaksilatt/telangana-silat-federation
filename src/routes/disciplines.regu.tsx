import { createFileRoute } from "@tanstack/react-router";
import { DisciplineLayout } from "@/components/site/DisciplineLayout";
import reguImg from "@/assets/regu.jpg";
import trainingImg from "@/assets/training.jpg";
import eventImg from "@/assets/event.jpg";

const TITLE = "Regu — Three-Person Team | PSSATG";
const DESCRIPTION =
  "Regu is the three-person team artistic category of Pencak Silat, where three competitors perform the compulsory form in complete synchronisation.";

export const Route = createFileRoute("/disciplines/regu")({
  component: ReguPage,
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

function ReguPage() {
  return (
    <DisciplineLayout
      name="Regu"
      tagline="Three-Person Team"
      intro="Three competitors perform the compulsory form in complete synchronisation as a team."
      image={reguImg}
      currentKey="regu"
      points={[
        {
          title: "Team Performance",
          text: "Three Pesilat from the same team perform together as a single unit.",
        },
        {
          title: "Synchronised Movement",
          text: "Every stance, strike and transition must match in timing, height and direction.",
        },
        {
          title: "Compulsory Form",
          text: "The prescribed sequence is performed in the correct order without individual variation.",
        },
        {
          title: "Artistic Discipline",
          text: "Judging rewards uniformity, precision, power and collective control.",
        },
      ]}
      gallery={[
        { src: reguImg, alt: "Regu three-person synchronised form" },
        { src: trainingImg, alt: "Team rehearsing synchronised movement" },
        { src: eventImg, alt: "Artistic category competition arena" },
      ]}
    />
  );
}
