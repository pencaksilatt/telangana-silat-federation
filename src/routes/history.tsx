import { createFileRoute } from "@tanstack/react-router";
import { IMAGES as APP_IMAGES } from "@/data/images";
import img148 from "@/assets/img 148.jpeg";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { GlobalSilatSection, HistoryTimeline } from "@/components/site/SectionsCore";
import { ContactCta } from "@/components/site/HomePreviews";
const heroImg = img148;

const TITLE = "The History of Pencak Silat | PSSATG";
const DESCRIPTION =
  "The origins, cultural heritage, 1948 milestone and modern global expansion of Pencak Silat, presented by the Pencak Silat Sports Association of Telangana.";

export const Route = createFileRoute("/history")({
  component: HistoryPage,
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

function HistoryPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Heritage"
        title="The History of Pencak Silat"
        subtitle="From the traditions of the Malay archipelago to a modern international sport practised across the world."
        image={heroImg}
        breadcrumbs={[{ label: "History" }]}
      />
      <HistoryTimeline />
      <GlobalSilatSection />
      <ContactCta />
    </SiteLayout>
  );
}
