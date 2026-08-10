import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { CoachSection, LeadershipSection } from "@/components/site/SectionsPeople";
import { ContactCta } from "@/components/site/HomePreviews";
import heroImg from "@/assets/event.jpg";

const TITLE = "Leadership & Administration | PSSATG";
const DESCRIPTION =
  "Office bearers of the Pencak Silat Sports Association of Telangana — President C.H. Dashratham, Secretary General D. Durga Satish Goud and Treasurer Vinay Kumar Gogula.";

export const Route = createFileRoute("/leadership")({
  component: LeadershipPage,
  meta: () => [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});

function LeadershipPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Governance"
        title="Leadership & Administration"
        subtitle="The office bearers and technical leadership guiding the association's governance, coaching standards and athlete development."
        image={heroImg}
        breadcrumbs={[{ label: "Leadership" }]}
      />
      <LeadershipSection />
      <CoachSection />
      <ContactCta />
    </SiteLayout>
  );
}
