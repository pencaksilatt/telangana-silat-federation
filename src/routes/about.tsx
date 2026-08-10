import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { AboutSection } from "@/components/site/SectionsCore";
import { BenefitsGrid, TrainingSection } from "@/components/site/SectionsSport";
import { ContactCta } from "@/components/site/HomePreviews";
import heroImg from "@/assets/training.jpg";

const TITLE = "About PSSATG | Pencak Silat Sports Association of Telangana";
const DESCRIPTION =
  "About the Pencak Silat Sports Association of Telangana — our mission, vision, role in sports development, athlete and youth development, training, competition and cultural preservation.";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  meta: () => [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});

const STATS = [
  { value: "04", label: "Core components of Pencak Silat" },
  { value: "05", label: "Competition disciplines" },
  { value: "06", label: "Affiliations & recognitions" },
  { value: "01", label: "Official state association" },
];

const ROLES = [
  {
    title: "Sports Development",
    text: "Structured promotion of Pencak Silat as a competitive sport across districts of Telangana.",
  },
  {
    title: "Athlete Development",
    text: "Preparing Pesilat for state, national and international level competition.",
  },
  {
    title: "Youth Development",
    text: "Building discipline, confidence and responsibility in young practitioners.",
  },
  {
    title: "Training",
    text: "Coaching standards, technical camps and continuous skill development.",
  },
  {
    title: "Competition",
    text: "Organising and supporting championships in combat and artistic categories.",
  },
  {
    title: "Cultural Preservation",
    text: "Protecting the traditional art, music, costume and ceremony of Pencak Silat.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Official Association"
        title="About PSSATG"
        subtitle="The Pencak Silat Sports Association of Telangana governs, promotes and develops Pencak Silat across the state — as a sport, as a martial art and as living cultural heritage."
        image={heroImg}
        breadcrumbs={[{ label: "About" }]}
      />

      <section className="border-b border-border bg-background py-12">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border px-0 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-background px-5 py-8 text-center">
              <p className="font-display text-4xl font-bold text-gold">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <AboutSection />

      <section className="bg-offwhite py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <p className="eyebrow">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            Role of the Association
          </p>
          <h2 className="mt-4 text-3xl font-extrabold uppercase tracking-tight text-navy-deep sm:text-4xl">
            What We Do
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {ROLES.map((r, i) => (
              <article
                key={r.title}
                className="bg-background p-8 transition-colors duration-300 hover:bg-gold/5"
              >
                <p className="font-display text-2xl font-bold text-gold/35">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-base font-bold uppercase tracking-[0.13em] text-navy-deep">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BenefitsGrid />
      <TrainingSection />
      <ContactCta />
    </SiteLayout>
  );
}
