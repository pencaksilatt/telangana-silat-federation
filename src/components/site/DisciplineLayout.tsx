import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { PageHero, SiteLayout } from "./Layout";
import { Reveal, Section, SectionHeading, StaggerGroup, StaggerItem } from "./primitives";
import { ContactCta } from "./HomePreviews";
import { DISCIPLINES } from "./SectionsSport";

const LINKS: Record<string, string> = {
  tanding: "/disciplines/tanding",
  tunggal: "/disciplines/tunggal",
  ganda: "/disciplines/ganda",
  regu: "/disciplines/regu",
  solo: "/disciplines/solo-creative",
};

export function DisciplineLayout({
  name,
  tagline,
  intro,
  image,
  points,
  currentKey,
  gallery,
  children,
}: {
  name: string;
  tagline: string;
  intro: string;
  image: string;
  points: { title: string; text: string }[];
  currentKey: string;
  gallery?: { src: string; alt: string }[];
  children?: ReactNode;
}) {
  const others = DISCIPLINES.filter((d) => d.key !== currentKey);

  return (
    <SiteLayout>
      <PageHero
        eyebrow={tagline}
        title={name}
        subtitle={intro}
        image={image}
        breadcrumbs={[{ label: "Disciplines", to: "/disciplines" }, { label: name }]}
      />

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading eyebrow="Category Information" title={`Understanding ${name}`} />
            <StaggerGroup className="mt-8 space-y-4">
              {points.map((p) => (
                <StaggerItem key={p.title}>
                  <div className="flex gap-4 border-l-2 border-gold pl-5">
                    <div>
                      <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-navy-deep">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
          <Reveal className="relative overflow-hidden rounded-sm">
            <img
              src={image}
              alt={`${name} — ${tagline}`}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--navy-deep)_45%,transparent),transparent_55%)]" />
          </Reveal>
        </div>
      </Section>

      {children}

      {gallery ? (
        <Section tone="dark">
          <SectionHeading dark eyebrow="Gallery" title={`${name} in Performance`} />
          <StaggerGroup className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {gallery.map((g, i) => (
              <StaggerItem key={i} className="overflow-hidden rounded-sm">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold transition-all hover:gap-3"
            >
              View Full Gallery <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </Section>
      ) : null}

      <Section tone="offwhite">
        <SectionHeading eyebrow="Continue" title="Other Disciplines" />
        <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((d) => (
            <StaggerItem key={d.key} className="h-full">
              <Link
                to={LINKS[d.key]!}
                className="group block h-full overflow-hidden rounded-sm border border-border bg-background transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 p-4">
                  <span className="font-display text-sm font-bold uppercase tracking-[0.1em] text-navy-deep">
                    {d.name}
                  </span>
                  <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <ContactCta />
    </SiteLayout>
  );
}

export { ShieldCheck };
