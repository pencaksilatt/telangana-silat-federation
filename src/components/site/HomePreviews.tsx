import { Link } from "@tanstack/react-router";
import { IMAGES as APP_IMAGES } from "@/data/images";
import {
  ArrowRight,
  CalendarDays,
  Landmark,
  MapPin,
  Quote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import aboutImg from "@/assets/training.jpg";
import eventImg from "@/assets/event.jpg";
import presidentImg from "@/assets/president.jpeg";
import secretaryImg from "@/assets/general_secretary.jpeg";
import treasurerImg from "@/assets/treasurer.jpeg";
const gandaImg = APP_IMAGES.ganda;
const reguImg = APP_IMAGES.regu;
const soloImg = APP_IMAGES.solo;
const tandingImg = APP_IMAGES.tanding;
const tunggalImg = APP_IMAGES.tunggal;
import { AFFILIATIONS, EVENTS, PILLARS } from "@/data/site";
import { SafeImage } from "./SafeImage";
import { DISCIPLINES } from "./SectionsSport";
import { Eyebrow, Reveal, Section, SectionHeading, StaggerGroup, StaggerItem } from "./primitives";
import { ViewMore } from "./Layout";
import { WhatsAppCta } from "./WhatsAppButton";

export function AffiliationPreview() {
  return (
    <section className="relative border-y border-border bg-background py-14">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <Eyebrow className="justify-center">Officially Affiliated &amp; Recognized</Eyebrow>
        </Reveal>
        <StaggerGroup className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {AFFILIATIONS.map((item) => (
            <StaggerItem
              key={item}
              className="flex min-h-[88px] items-center gap-3 bg-offwhite px-5 py-5 transition-colors duration-300 hover:bg-gold/10"
            >
              <Landmark className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <p className="min-w-0 font-display text-[0.78rem] font-medium uppercase leading-snug tracking-[0.09em] text-navy-deep">
                {item}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

export function AboutPreview() {
  return (
    <Section tone="offwhite">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative overflow-hidden rounded-sm">
          <img
            src={aboutImg}
            alt="Pencak Silat athletes training together at an association session"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--navy-deep)_45%,transparent),transparent_55%)]" />
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Official Association"
            title="The Official Voice of Pencak Silat in Telangana"
            intro="The Pencak Silat Sports Association of Telangana governs, promotes and develops Pencak Silat across the state — from grassroots training to state representation, while preserving the art's cultural heritage."
          />
          <Reveal delay={0.1}>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Sport", text: "Competition & athlete development" },
                { label: "Art", text: "Tradition, culture and heritage" },
                { label: "Discipline", text: "Character, respect and focus" },
              ].map((s) => (
                <div key={s.label} className="border-l-2 border-gold pl-4">
                  <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-navy-deep">
                    {s.label}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15} className="mt-8">
            <ViewMore to="/about">Discover Our Association</ViewMore>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function GlancePreview() {
  return (
    <Section tone="navy">
      <SectionHeading
        dark
        align="center"
        eyebrow="At a glance"
        title="Pencak Silat at a Glance"
        intro="A traditional martial art of the Malay archipelago, built on four inseparable components."
      />
      <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((p) => (
          <StaggerItem key={p.no} className="h-full">
            <article className="card-dark h-full rounded-sm p-7">
              <p className="font-display text-3xl font-bold text-gold/35">{p.no}</p>
              <h3 className="mt-4 font-display text-base font-bold uppercase tracking-[0.13em] text-offwhite">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-offwhite/60">{p.text}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>
      <Reveal delay={0.15} className="mt-10 text-center [&_a]:justify-center">
        <ViewMore to="/pencak-silat">Explore Pencak Silat</ViewMore>
      </Reveal>
    </Section>
  );
}

const PREVIEW_LINKS: Record<string, string> = {
  tanding: "/disciplines/tanding",
  tunggal: "/disciplines/tunggal",
  ganda: "/disciplines/ganda",
  regu: "/disciplines/regu",
  solo: "/disciplines/solo-creative",
};

export function DisciplinesPreview() {
  return (
    <Section tone="light">
      <SectionHeading
        eyebrow="Categories"
        title="Disciplines"
        intro="Competition Pencak Silat is contested across combat and artistic categories, each with its own technical demands."
      />
      <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DISCIPLINES.map((d) => (
          <StaggerItem key={d.key} className="h-full">
            <Link
              to={PREVIEW_LINKS[d.key]!}
              className="group block h-full overflow-hidden rounded-sm border border-border bg-background transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_28px_60px_-32px_rgba(7,20,38,0.55)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={d.image}
                  alt={`${d.name} — ${d.sub}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--navy-deep)_78%,transparent),transparent_55%)]" />
                <p className="absolute bottom-4 left-5 font-display text-xl font-bold uppercase tracking-tight text-offwhite">
                  {d.name}
                </p>
              </div>
              <div className="p-6">
                <p className="font-display text-[0.64rem] uppercase tracking-[0.26em] text-gold">
                  {d.sub}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-display text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-navy-deep transition-all group-hover:gap-3 group-hover:text-gold">
                  View discipline <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>
      <Reveal delay={0.15} className="mt-10">
        <ViewMore to="/disciplines">Explore All Disciplines</ViewMore>
      </Reveal>
    </Section>
  );
}

export function EventsPreview() {
  return (
    <Section tone="dark">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <Reveal className="relative overflow-hidden rounded-sm">
          <img
            src={eventImg}
            alt="Pencak Silat championship arena during competition"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--navy-deep)_65%,transparent),transparent_50%)]" />
        </Reveal>
        <div>
          <SectionHeading dark eyebrow="Calendar" title="Upcoming Events" />
          <StaggerGroup className="mt-8 space-y-3">
            {EVENTS.filter((e) => e.status !== "Completed")
              .slice(0, 3)
              .map((e) => (
                <StaggerItem key={e.id}>
                  <article className="rounded-sm border border-offwhite/12 bg-offwhite/[0.03] p-5 transition-colors hover:border-gold/50">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-sm bg-gold/15 px-2.5 py-1 font-display text-[0.6rem] uppercase tracking-[0.2em] text-gold">
                        {e.status}
                      </span>
                      <span className="font-display text-[0.62rem] uppercase tracking-[0.2em] text-offwhite/50">
                        {e.category}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-base font-bold uppercase tracking-[0.06em] text-offwhite">
                      {e.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-4 text-xs text-offwhite/55">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5 text-gold" /> {e.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-gold" /> {e.location}
                      </span>
                    </div>
                  </article>
                </StaggerItem>
              ))}
          </StaggerGroup>
          <Reveal delay={0.15} className="mt-8">
            <ViewMore to="/events">View All Events</ViewMore>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

const OFFICIALS = [
  { role: "President", name: "C.H. Dashratham", photo: presidentImg },
  { role: "Secretary General", name: "D. Durga Satish Goud", photo: secretaryImg },
  { role: "Treasurer", name: "Vinay Kumar Gogula", photo: treasurerImg },
];

export function LeadershipPreview() {
  return (
    <Section tone="light">
      <SectionHeading
        align="center"
        eyebrow="Office bearers"
        title="Leadership"
        intro="The office bearers who guide the association's governance, development and technical direction."
      />
      <StaggerGroup className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
        {OFFICIALS.map((o) => (
          <StaggerItem key={o.role} className="h-full">
            <article className="group h-full overflow-hidden rounded-sm border border-border bg-background transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60">
              <div className="relative aspect-[4/5] overflow-hidden bg-navy-deep">
                <SafeImage
                  src={o.photo}
                  alt={`${o.name}, ${o.role}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-105"
                />
              </div>
              <div className="border-t-2 border-gold p-5 text-center">
                <p className="font-display text-[0.62rem] uppercase tracking-[0.26em] text-gold">
                  {o.role}
                </p>
                <h3 className="mt-1.5 font-display text-base font-bold uppercase text-navy-deep">
                  {o.name}
                </h3>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>
      <Reveal delay={0.15} className="mt-10 text-center [&_a]:justify-center">
        <ViewMore to="/leadership">Meet Our Leadership</ViewMore>
      </Reveal>
    </Section>
  );
}

const GALLERY_PREVIEW = [
  { src: tandingImg, alt: "Tanding bout in competition" },
  { src: tunggalImg, alt: "Tunggal single artistic performance" },
  { src: gandaImg, alt: "Ganda paired routine" },
  { src: reguImg, alt: "Regu three-person synchronised form" },
  { src: soloImg, alt: "Solo creative performance" },
  { src: eventImg, alt: "Championship arena" },
];

export function GalleryPreview() {
  return (
    <Section tone="dark">
      <SectionHeading dark eyebrow="Gallery" title="Moments from the Mat" />
      <StaggerGroup className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {GALLERY_PREVIEW.map((g, i) => (
          <StaggerItem key={i} className="overflow-hidden rounded-sm">
            <img
              src={g.src}
              alt={g.alt}
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </StaggerItem>
        ))}
      </StaggerGroup>
      <Reveal delay={0.15} className="mt-10">
        <ViewMore to="/gallery">View Full Gallery</ViewMore>
      </Reveal>
    </Section>
  );
}

export function ContactCta() {
  return (
    <Section tone="navy">
      <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <SectionHeading
            dark
            eyebrow="Get in touch"
            title="Train, Compete or Collaborate With PSSATG"
            intro="Whether you are an athlete, coach, school or institution, the association welcomes your enquiry."
          />
        </div>
        <Reveal delay={0.1} className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-navy-deep transition-all duration-300 hover:bg-gold-metal"
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" /> Contact Us
          </Link>
          <WhatsAppCta variant="outlineDark">WhatsApp Us</WhatsAppCta>
        </Reveal>
      </div>
    </Section>
  );
}

export { Quote, ShieldCheck };
