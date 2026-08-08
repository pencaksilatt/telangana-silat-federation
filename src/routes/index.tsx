import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  AboutSection,
  AffiliationStrip,
  FourPillars,
  GlobalSilatSection,
  HistoryTimeline,
  WhatIsSection,
} from "@/components/site/SectionsCore";
import {
  ArtisticSection,
  BenefitsGrid,
  DisciplinesSection,
  EventsSection,
  RulesSection,
  ScoringSection,
  TandingSection,
  TrainingSection,
} from "@/components/site/SectionsSport";
import {
  CoachSection,
  GallerySection,
  LeadershipSection,
  TestimonialsSection,
} from "@/components/site/SectionsPeople";
import { ContactSection, Footer } from "@/components/site/ContactFooter";
import { FloatingWhatsApp } from "@/components/site/WhatsAppButton";

const TITLE = "Pencak Silat Sports Association of Telangana | PSSATG";
const DESCRIPTION =
  "Official website of the Pencak Silat Sports Association of Telangana, promoting Pencak Silat training, sports, competitions, discipline, traditional martial arts and athlete development across Telangana.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Pencak Silat Telangana, PSSATG, Pencak Silat Sports Association Telangana, Pencak Silat Hyderabad, Pencak Silat Medchal, Pencak Silat training Telangana, Pencak Silat competitions Telangana, Tanding, Tunggal, Ganda, Regu, Solo Creative",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <Header />
      <main>
        <Hero />
        <AffiliationStrip />
        <AboutSection />
        <WhatIsSection />
        <HistoryTimeline />
        <GlobalSilatSection />
        <FourPillars />
        <DisciplinesSection />
        <TandingSection />
        <ScoringSection />
        <RulesSection />
        <ArtisticSection />
        <BenefitsGrid />
        <TrainingSection />
        <EventsSection />
        <LeadershipSection />
        <CoachSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
