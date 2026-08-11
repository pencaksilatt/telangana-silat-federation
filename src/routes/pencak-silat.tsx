import { createFileRoute } from "@tanstack/react-router";
import { IMAGES as APP_IMAGES } from "@/data/images";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import {
  FourPillars,
  GlobalSilatSection,
  HistoryTimeline,
  WhatIsSection,
} from "@/components/site/SectionsCore";
import { ContactCta } from "@/components/site/HomePreviews";
const heroImg = APP_IMAGES.tunggal;

const TITLE = "The Art of Pencak Silat | PSSATG";
const DESCRIPTION =
  "What is Pencak Silat? Explore its history, the four core components — mental-spiritual, self-defence, art & culture and sport — and PERSILAT with founding members IPSI, PESAKA, PERSISI and PERSIB.";

export const Route = createFileRoute("/pencak-silat")({
  component: PencakSilatPage,
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

function PencakSilatPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Martial Art"
        title="The Art of Pencak Silat"
        subtitle="A traditional martial art of the Malay archipelago, practised as spiritual discipline, self-defence, cultural art and competitive sport."
        image={heroImg}
        breadcrumbs={[{ label: "Pencak Silat" }]}
      />
      <WhatIsSection />
      <FourPillars />
      <HistoryTimeline />
      <GlobalSilatSection />
      <ContactCta />
    </SiteLayout>
  );
}
