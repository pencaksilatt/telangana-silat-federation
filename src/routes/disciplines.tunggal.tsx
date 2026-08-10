import { createFileRoute } from "@tanstack/react-router";
import { DisciplineLayout } from "@/components/site/DisciplineLayout";
import tunggalImg from "@/assets/tunggal.jpg";
import trainingImg from "@/assets/training.jpg";
import eventImg from "@/assets/event.jpg";

const TITLE = "Tunggal — Single Competitor | PSSATG";
const DESCRIPTION =
  "Tunggal is the single-competitor artistic category of Pencak Silat, where one Pesilat performs the standard compulsory form with precision, power and control.";

export const Route = createFileRoute("/disciplines/tunggal")({
  component: TunggalPage,
  meta: () => [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});

function TunggalPage() {
  return (
    <DisciplineLayout
      name="Tunggal"
      tagline="Single Competitor"
      intro="A single competitor performs the standard compulsory form with precision, power and control."
      image={tunggalImg}
      currentKey="tunggal"
      points={[
        {
          title: "Single Performance",
          text: "One Pesilat presents the compulsory form alone before the panel of judges.",
        },
        {
          title: "Compulsory Form",
          text: "The prescribed sequence must be performed accurately, in the correct order and rhythm.",
        },
        {
          title: "Precision & Control",
          text: "Judging rewards technical accuracy, firmness of stance, power and control of movement.",
        },
        {
          title: "Artistic Expression",
          text: "The performance carries the traditional character and spirit of Pencak Silat.",
        },
      ]}
      gallery={[
        { src: tunggalImg, alt: "Tunggal single artistic performance" },
        { src: trainingImg, alt: "Athlete practising a compulsory form" },
        { src: eventImg, alt: "Artistic category competition arena" },
      ]}
    />
  );
}
