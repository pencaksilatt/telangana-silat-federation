import { createFileRoute, Link } from "@tanstack/react-router";
import { IMAGES as APP_IMAGES } from "@/data/images";
import { ArrowRight } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { ContactCta } from "@/components/site/HomePreviews";
import { StaggerGroup, StaggerItem } from "@/components/site/primitives";
import { DISCIPLINES } from "@/components/site/SectionsSport";
const heroImg = APP_IMAGES.regu;

const TITLE = "Pencak Silat Disciplines — Tanding, Tunggal, Ganda, Regu, Solo Creative | PSSATG";
const DESCRIPTION =
  "Explore the five competition disciplines of Pencak Silat: Tanding combat plus the artistic categories Tunggal, Ganda, Regu and Solo Creative.";

export const Route = createFileRoute("/disciplines/")({
  component: DisciplinesPage,
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

const LINKS: Record<string, string> = {
  tanding: "/disciplines/tanding",
  tunggal: "/disciplines/tunggal",
  ganda: "/disciplines/ganda",
  regu: "/disciplines/regu",
  solo: "/disciplines/solo-creative",
};

function DisciplinesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Categories"
        title="Pencak Silat Disciplines"
        subtitle="Different forms. One tradition. One discipline."
        image={heroImg}
        breadcrumbs={[{ label: "Disciplines" }]}
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <StaggerGroup className="space-y-6">
            {DISCIPLINES.map((d, i) => (
              <StaggerItem key={d.key}>
                <article className="group grid overflow-hidden rounded-sm border border-border bg-background transition-all duration-500 hover:border-gold/60 hover:shadow-[0_32px_70px_-40px_rgba(7,20,38,0.6)] lg:grid-cols-2">
                  <div
                    className={`relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[22rem] ${
                      i % 2 === 1 ? "lg:order-last" : ""
                    }`}
                  >
                    <img
                      src={d.image}
                      alt={`${d.name} — ${d.sub}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1000ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--navy-deep)_55%,transparent),transparent_55%)]" />
                  </div>
                  <div className="flex flex-col justify-center p-8 sm:p-12">
                    <p className="font-display text-4xl font-bold text-gold/30">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-4 font-display text-[0.66rem] uppercase tracking-[0.28em] text-gold">
                      {d.sub}
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-navy-deep sm:text-4xl">
                      {d.name}
                    </h2>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {d.text}
                    </p>
                    <Link
                      to={LINKS[d.key]!}
                      className="mt-8 inline-flex w-fit items-center gap-2 rounded-sm border border-navy/20 px-6 py-3 font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy-deep transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy-deep"
                    >
                      View Discipline <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <ContactCta />
    </SiteLayout>
  );
}
