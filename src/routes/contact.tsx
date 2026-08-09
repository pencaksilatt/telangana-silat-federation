import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { ContactSection } from "@/components/site/ContactFooter";
import heroImg from "@/assets/training.jpg";

const TITLE = "Contact & Enquiries | PSSATG";
const DESCRIPTION =
  "Contact the Pencak Silat Sports Association of Telangana — Medchal Malkajgiri office address, phone numbers, email and WhatsApp enquiries.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get in touch"
        title="Contact & Enquiries"
        subtitle="Reach the association for training, competitions, affiliation or general enquiries."
        image={heroImg}
        breadcrumbs={[{ label: "Contact" }]}
      />
      <ContactSection />
    </SiteLayout>
  );
}
