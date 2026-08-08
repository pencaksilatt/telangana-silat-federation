import { motion } from "framer-motion";
import { Award, Brain, Globe2, Landmark, Shield, Sparkles, Trophy } from "lucide-react";
import aboutImg from "@/assets/tunggal.jpg";
import { AFFILIATIONS, PILLARS, WORLD_BODIES } from "@/data/site";
import {
  Eyebrow,
  Reveal,
  Section,
  SectionHeading,
  StaggerGroup,
  StaggerItem,
} from "./primitives";

export function AffiliationStrip() {
  return (
    <section id="affiliations" className="relative border-y border-border bg-offwhite py-12">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <Eyebrow className="justify-center">Officially Affiliated &amp; Recognized</Eyebrow>
        </Reveal>
        <StaggerGroup className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {AFFILIATIONS.map((item) => (
            <StaggerItem
              key={item}
              className="flex min-h-[92px] items-center gap-3 bg-background px-5 py-5 transition-colors duration-300 hover:bg-gold/5"
            >
              <Landmark className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <p className="min-w-0 font-display text-[0.78rem] font-medium uppercase leading-snug tracking-[0.09em] text-navy-deep">
                {item}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <p className="mt-5 text-center text-xs text-muted-foreground">
          Affiliation and recognition references as stated on the official association letterhead.
        </p>
      </div>
    </section>
  );
}

const STATS = [
  { value: "Pencak Silat", label: "Traditional Martial Art" },
  { value: "4", label: "Core Components" },
  { value: "3", label: "Combat Rounds" },
  { value: "Telangana", label: "State Association" },
];

export function AboutSection() {
  return (
    <Section id="about" tone="light">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-sm">
            <motion.img
              src={aboutImg}
              alt="Pencak Silat athlete demonstrating a traditional stance"
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--navy-deep)_55%,transparent),transparent_55%)]" />
          </div>
          <div
            className="absolute -bottom-5 -right-5 hidden h-28 w-28 border-b-2 border-r-2 border-gold sm:block"
            aria-hidden="true"
          />
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About PSSATG"
            title="The State Body for Pencak Silat in Telangana"
            intro="The Pencak Silat Sports Association of Telangana promotes Pencak Silat as a traditional martial art and a modern competitive sport — developing athletes, organising competitions and carrying the discipline of Silat to every district of the state."
          />
          <Reveal delay={0.1}>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Sports development",
                "Athlete training",
                "Competitions",
                "Discipline",
                "Traditional martial arts",
                "Youth development",
                "Fitness",
                "Sportsmanship",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-navy">
                  <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <StaggerGroup className="mt-9 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border">
            {STATS.map((s) => (
              <StaggerItem key={s.label} className="bg-background px-5 py-6">
                <p className="font-display text-xl font-bold uppercase tracking-tight text-navy-deep sm:text-2xl">
                  {s.value}
                </p>
                <p className="mt-1 text-[0.72rem] uppercase tracking-[0.16em] text-gold">
                  {s.label}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </Section>
  );
}

const PILLAR_ICONS = [Brain, Shield, Sparkles, Trophy];

export function WhatIsSection() {
  return (
    <Section id="what-is" tone="dark">
      <div className="pointer-events-none absolute inset-0 pattern-telangana opacity-[0.08]" />
      <div className="relative">
        <SectionHeading
          dark
          align="center"
          eyebrow="Understanding the art"
          title="What is Pencak Silat?"
          intro="Pencak Silat is the generic term for the indigenous martial arts of the Indonesian and Malay archipelago, including Indonesia, Malaysia, Singapore and Brunei. Rooted in centuries of cultural exchange, it has been passed down through perguruans (schools) as both a fighting art and a living cultural heritage — and today stands as an internationally organised sport."
        />
        <p className="mx-auto mt-6 max-w-3xl text-center text-offwhite/70">
          Pencak Silat combines mental-spiritual development, self-defence, art &amp; culture and
          sport into one complete discipline.
        </p>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => {
            const Icon = PILLAR_ICONS[i];
            return (
              <StaggerItem key={p.no}>
                <article className="card-dark group h-full rounded-sm p-7">
                  <div className="flex items-start justify-between">
                    <Icon className="h-7 w-7 text-gold" aria-hidden="true" />
                    <span className="font-display text-3xl font-bold text-offwhite/12 transition-colors duration-300 group-hover:text-gold/30">
                      {p.no}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-base font-semibold uppercase tracking-[0.14em] text-offwhite">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-offwhite/65">{p.text}</p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </Section>
  );
}

const TIMELINE = [
  {
    year: "Origins",
    title: "Indigenous Martial Arts of the Archipelago",
    text: "Pencak Silat developed across the Indonesian and Malay archipelago as a family of indigenous fighting arts, taught within communities and perguruans and shaped by local culture, music and custom.",
  },
  {
    year: "Two Traditions",
    title: "Pencak and Silat",
    text: "Different regions used different names for the art — 'Pencak' and 'Silat' — each with its own perguruans, styles and lineages of teaching.",
  },
  {
    year: "18 May 1948",
    title: "Unification in Surakarta",
    text: "An organisation was formed in Surakarta uniting the Pencak and Silat perguruans, bringing the traditions together under a single national body and establishing the modern organised identity of Pencak Silat.",
  },
  {
    year: "Modern Era",
    title: "From Heritage to Competitive Sport",
    text: "National federations, standardised rules and international competition transformed Pencak Silat into a structured sport practised worldwide, while preserving its artistic and cultural foundations.",
  },
];

export function HistoryTimeline() {
  return (
    <Section id="history" tone="offwhite">
      <SectionHeading
        eyebrow="Heritage"
        title="History of Pencak Silat"
        intro="A martial tradition carried through generations of teachers, perguruans and communities — and united into a single organised discipline."
      />

      <div className="relative mt-14">
        <div
          className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border md:block md:left-1/2"
          aria-hidden="true"
        />
        <ol className="space-y-10 md:space-y-0">
          {TIMELINE.map((item, i) => (
            <li key={item.year} className="relative md:grid md:grid-cols-2 md:gap-12">
              <Reveal
                className={
                  i % 2 === 0
                    ? "md:col-start-1 md:pr-4 md:text-right"
                    : "md:col-start-2 md:pl-4 md:pt-24"
                }
              >
                <div className="relative border-l-2 border-gold pl-6 md:border-l-0 md:pl-0">
                  <span className="eyebrow">{item.year}</span>
                  <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-tight text-navy-deep">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
              <span
                className="absolute left-0 top-1.5 hidden h-3.5 w-3.5 rotate-45 border-2 border-gold bg-offwhite md:left-1/2 md:block md:-translate-x-1/2"
                style={{ top: i % 2 === 0 ? "0.35rem" : "6.35rem" }}
                aria-hidden="true"
              />
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function GlobalSilatSection() {
  return (
    <Section id="world" tone="navy">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.07]"
        aria-hidden="true"
      >
        <Globe2 className="h-[42rem] w-[42rem] text-offwhite" strokeWidth={0.3} />
      </div>
      <div className="relative">
        <SectionHeading
          dark
          eyebrow="International"
          title="Pencak Silat Around the World"
          intro="Pencak Silat is organised through national federations, clubs and schools across the world. PERSILAT — the international Pencak Silat federation — coordinates the sport internationally and has driven its development beyond its region of origin into an international competitive discipline."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WORLD_BODIES.map((b) => (
            <StaggerItem key={b.abbr}>
              <article className="card-dark h-full rounded-sm p-7">
                <p className="font-display text-2xl font-bold uppercase tracking-tight text-gold">
                  {b.abbr}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-offwhite/75">{b.name}</p>
                <p className="mt-4 border-t border-offwhite/10 pt-3 text-[0.68rem] uppercase tracking-[0.2em] text-offwhite/45">
                  Founding Member • {b.country}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </Section>
  );
}

const PILLAR_DETAIL = [
  {
    title: "Mental-Spiritual",
    text: "Silat develops inner peace, spiritual balance and control of body and mind.",
    icon: Brain,
  },
  {
    title: "Self-Defence",
    text: "Skills and techniques for effective self-defence.",
    icon: Shield,
  },
  {
    title: "Art & Culture",
    text: "Aesthetic movements combined with traditional music, costumes and cultural ceremonies.",
    icon: Sparkles,
  },
  {
    title: "Sports",
    text: "Pencak Silat as a competitive sport focused on fitness and achievement.",
    icon: Award,
  },
];

export function FourPillars() {
  return (
    <Section tone="light">
      <SectionHeading
        align="center"
        eyebrow="Core components"
        title="The Four Pillars of Pencak Silat"
      />
      <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2">
        {PILLAR_DETAIL.map(({ title, text, icon: Icon }, i) => (
          <StaggerItem key={title}>
            <article className="card-premium group relative h-full overflow-hidden rounded-sm p-8 sm:p-10">
              <span
                className="absolute right-0 top-0 h-24 w-24 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_70%)]"
                aria-hidden="true"
              />
              <div className="relative flex items-start gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-sm bg-navy-deep text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-deep">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-[0.68rem] uppercase tracking-[0.28em] text-gold">
                    Pillar 0{i + 1}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-tight text-navy-deep">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
