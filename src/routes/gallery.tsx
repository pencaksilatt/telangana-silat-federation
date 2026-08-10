import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { GallerySection, TestimonialsSection } from "@/components/site/SectionsPeople";
import { ContactCta } from "@/components/site/HomePreviews";
import heroImg from "@/assets/solo-creative.jpg";

const TITLE = "Gallery | Pencak Silat Sports Association of Telangana";
const DESCRIPTION =
  "Photo gallery of Pencak Silat training, Tanding bouts, Tunggal, Ganda, Regu and Solo Creative performances and association events across Telangana.";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  meta: () => [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});

function GalleryPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Visual archive"
        title="Gallery"
        subtitle="Moments from training halls, championship mats and artistic performances across Telangana."
        image={heroImg}
        breadcrumbs={[{ label: "Gallery" }]}
      />
      <GallerySection />
      <TestimonialsSection />
      <ContactCta />
    </SiteLayout>
  );
}
