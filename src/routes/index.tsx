import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import {
  AboutPreview,
  AffiliationPreview,
  ContactCta,
  DisciplinesPreview,
  EventsPreview,
  GalleryPreview,
  GlancePreview,
  LeadershipPreview,
} from "@/components/site/HomePreviews";

const TITLE = "Pencak Silat Sports Association of Telangana | PSSATG";
const DESCRIPTION =
  "Official website of the Pencak Silat Sports Association of Telangana — promoting the art, sport and heritage of Pencak Silat through training, competition and athlete development.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsOrganization",
          name: "Pencak Silat Sports Association of Telangana",
          alternateName: "PSSATG",
          sport: "Pencak Silat",
          email: "pencaksilatsportsassociationtg@gmail.com",
          telephone: ["+919347776946", "+917981188678"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "H.No.1-93/9, RTC Colony, Road No.8, Medchal",
            addressLocality: "Medchal Malkajgiri",
            addressRegion: "Telangana",
            postalCode: "501401",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <AffiliationPreview />
      <AboutPreview />
      <GlancePreview />
      <DisciplinesPreview />
      <EventsPreview />
      <LeadershipPreview />
      <GalleryPreview />
      <ContactCta />
    </SiteLayout>
  );
}
