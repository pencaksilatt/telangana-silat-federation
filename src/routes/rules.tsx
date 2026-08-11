import { createFileRoute } from "@tanstack/react-router";
import { IMAGES as APP_IMAGES } from "@/data/images";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { RulesSection, ScoringSection } from "@/components/site/SectionsSport";
import { ContactCta } from "@/components/site/HomePreviews";
const heroImg = APP_IMAGES.tanding;

const TITLE = "Rules & Regulations | PSSATG";
const DESCRIPTION =
  "Competition rules, match structure, scoring, winner determination and disqualification criteria for Pencak Silat competitions in Telangana.";

export const Route = createFileRoute("/rules")({
  component: RulesPage,
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

function RulesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Competition framework"
        title="Rules & Regulations"
        subtitle="Match structure, scoring and conduct followed in association-sanctioned Pencak Silat competitions."
        image={heroImg}
        breadcrumbs={[{ label: "Rules" }]}
      />
      <RulesSection />
      <ScoringSection />
      <ContactCta />
    </SiteLayout>
  );
}
