import { createFileRoute } from "@tanstack/react-router";
import { DisciplineLayout } from "@/components/site/DisciplineLayout";
import { ScoringSection, TandingSection } from "@/components/site/SectionsSport";
import tandingImg from "@/assets/tanding.jpg";
import eventImg from "@/assets/event.jpg";
import trainingImg from "@/assets/training.jpg";

const TITLE = "Tanding — The Combat Category | PSSATG";
const DESCRIPTION =
  "Tanding is the combat category of Pencak Silat: striking, blocking, take-down and sweeping techniques contested in weight categories over three rounds of two minutes.";

export const Route = createFileRoute("/disciplines/tanding")({
  component: TandingPage,
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

function TandingPage() {
  return (
    <DisciplineLayout
      name="Tanding"
      tagline="The Combat Category"
      intro="A combat confrontation of two Pesilat from two different teams, contested within defined weight categories."
      image={tandingImg}
      currentKey="tanding"
      points={[
        {
          title: "Combat Confrontation",
          text: "Two Pesilat from different teams face each other under the applicable competition rules.",
        },
        {
          title: "Striking & Blocking",
          text: "Scoring is built on controlled striking and effective blocking of the opponent's attacks.",
        },
        {
          title: "Take-Down & Sweeping",
          text: "Take-down and sweeping techniques are used to unbalance and score against the opponent.",
        },
        {
          title: "Weight Categories",
          text: "Bouts are contested within defined weight categories to ensure fair competition.",
        },
      ]}
      gallery={[
        { src: tandingImg, alt: "Tanding bout in progress" },
        { src: eventImg, alt: "Championship arena during Tanding competition" },
        { src: trainingImg, alt: "Athletes training combat techniques" },
      ]}
    >
      <TandingSection />
      <ScoringSection />
    </DisciplineLayout>
  );
}
