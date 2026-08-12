import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  Flag,
  Globe2,
  Medal,
  Quote,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import presidentImg from "@/assets/president.jpeg";
import secretaryImg from "@/assets/general_secretary.jpeg";
import treasurerImg from "@/assets/treasurer.jpeg";
import nagaJyothiImg from "@/assets/naga-jyothi.jpeg";
import kiranNayakImg from "@/assets/kiran-kumar-nayak.jpeg";
import { IMAGES as APP_IMAGES, DISCIPLINE_ALT } from "@/data/images";
import { TESTIMONIALS } from "@/data/site";
import { SafeImage } from "./SafeImage";
import { Reveal, Section, SectionHeading, StaggerGroup, StaggerItem } from "./primitives";
import { cn } from "@/lib/utils";



const OFFICIALS = [
  { role: "President", name: "C.H. Dashratham", photo: presidentImg },
  { role: "Secretary General", name: "D. Durga Satish Goud", photo: secretaryImg },
  { role: "Treasurer", name: "Vinay Kumar Gogula", photo: treasurerImg },
];

export function LeadershipSection() {
  return (
    <Section id="leadership" tone="offwhite">
      <SectionHeading
        align="center"
        eyebrow="Office bearers"
        title="Administrative Leadership"
        intro="Meet the leaders, coaches and technical professionals who contribute to the development, administration and sporting excellence of Pencak Silat in Telangana."
      />
      <StaggerGroup className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {OFFICIALS.map((o) => (
          <StaggerItem key={o.role} className="h-full">
            <article className="group h-full overflow-hidden rounded-sm border border-border bg-background shadow-[0_20px_50px_-30px_rgba(7,20,38,0.55)] transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_28px_60px_-28px_rgba(7,20,38,0.5)]">
              <div className="relative aspect-[4/5] overflow-hidden bg-navy-deep">
                <SafeImage
                  src={o.photo}
                  alt={`${o.name}, ${o.role}, Pencak Silat Sports Association of Telangana`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--navy-deep)_70%,transparent),transparent_45%)]" />
              </div>
              <div className="border-t-2 border-gold p-6 text-center">
                <p className="font-display text-[0.66rem] uppercase tracking-[0.28em] text-gold">
                  {o.role}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-navy-deep">
                  {o.name}
                </h3>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}

type Credential = { icon: typeof ShieldCheck; label: string; detail: string };

const SATISH_CREDENTIALS: Credential[] = [
  {
    icon: Globe2,
    label: "18th World Pencak Silat Championship",
    detail: "Participated in 2018 — Singapore",
  },
  { icon: ShieldCheck, label: "National Coach", detail: "National-level coaching credential" },
  { icon: Flag, label: "National Referee", detail: "(IPSF) Certified" },
];

const TECHNICAL_TEAM = [
  {
    name: "S. Naga Jyothi",
    org: "PSSATG",
    role: "Technical Official",
    photo: nagaJyothiImg,
    credentials: [
      { icon: Users, label: "Pencak Silat National Coach & Referee" },
    ],
  },
  {
    name: "R. Kiran Kumar Nayak",
    org: "PSSATG",
    role: "Technical Director",
    photo: kiranNayakImg,
    credentials: [
      { icon: Medal, label: "Pencak Silat National Medalist" },
      { icon: Flag, label: "State Coach and Referee" },
    ],
  },
];

export function CoachSection() {
  return (
    <Section id="coaching" tone="navy">
      <SectionHeading
        dark
        eyebrow="Technical"
        title="Coaching &amp; Technical Leadership"
        intro="Technical leadership guides coaching standards, athlete preparation and officiating within the association."
      />

      <Reveal className="mt-12">
        <article className="grid gap-0 overflow-hidden rounded-sm border border-gold/35 bg-navy-deep/60 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.9)] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)]">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy-deep lg:aspect-auto lg:min-h-[26rem]">
            <SafeImage
              src={secretaryImg}
              alt="D. Durga Satish Goud, General Secretary and National Coach, PSSATG"
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 border-r border-gold/25" />
          </div>
          <div className="p-8 sm:p-10">
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-gold sm:text-3xl">
              D. Durga Satish Goud
            </h3>
            <p className="mt-2 font-display text-[0.7rem] uppercase tracking-[0.26em] text-offwhite/70">
              (PSSATG) General Secretary
            </p>
            <p className="mt-1 text-xs text-offwhite/45">
              Also listed above under Administrative Leadership as Secretary General.
            </p>

            <StaggerGroup className="mt-7 grid gap-3 sm:grid-cols-1">
              {SATISH_CREDENTIALS.map((c) => (
                <StaggerItem key={c.label}>
                  <div className="flex items-start gap-4 border border-offwhite/12 bg-navy/40 p-4 transition-colors duration-300 hover:border-gold/50">
                    <span className="grid h-9 w-9 shrink-0 place-items-center border border-gold/40 text-gold">
                      <c.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-offwhite">
                        {c.label}
                      </p>
                      <p className="mt-1 text-xs text-offwhite/60">{c.detail}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </article>
      </Reveal>

      <Reveal className="mt-16">
        <h3 className="font-display text-lg font-bold uppercase tracking-[0.18em] text-offwhite">
          Technical Officials &amp; Sports Professionals
        </h3>
        <span className="mt-3 block h-px w-16 bg-gold" aria-hidden="true" />
      </Reveal>

      <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-2">
        {TECHNICAL_TEAM.map((p) => (
          <StaggerItem key={p.name} className="h-full">
            <article className="flex h-full flex-col gap-6 border border-offwhite/12 bg-navy-deep/60 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 sm:flex-row">
              <div className="relative h-52 w-full shrink-0 overflow-hidden border border-gold/35 bg-navy sm:h-44 sm:w-36">
                <SafeImage
                  src={p.photo}
                  alt={`${p.name}, ${p.role}, PSSATG`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-display text-xl font-bold uppercase tracking-tight text-gold">
                  {p.name}
                </h4>
                <p className="mt-2 font-display text-[0.66rem] uppercase tracking-[0.24em] text-offwhite/70">
                  {p.org}
                  <span className="mx-2 text-gold">/</span>
                  {p.role}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {p.credentials.map((c) => (
                    <li key={c.label} className="flex items-start gap-3 text-sm text-offwhite/75">
                      <c.icon className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                      {c.label}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}

type GalleryItem = { src: string; category: string; title: string; alt: string };

const GALLERY: GalleryItem[] = [
  {
    src: APP_IMAGES.tanding,
    category: "Tanding",
    title: "Tanding — Combat Category",
    alt: DISCIPLINE_ALT.tanding,
  },
  {
    src: APP_IMAGES.tunggal,
    category: "Tunggal",
    title: "Tunggal — Single Competitor",
    alt: DISCIPLINE_ALT.tunggal,
  },
  {
    src: APP_IMAGES.ganda,
    category: "Ganda",
    title: "Ganda — Two-Person Team",
    alt: DISCIPLINE_ALT.ganda,
  },
  {
    src: APP_IMAGES.regu,
    category: "Regu",
    title: "Regu — Three-Person Team",
    alt: DISCIPLINE_ALT.regu,
  },
  {
    src: APP_IMAGES.solo,
    category: "Solo Creative",
    title: "Solo Creative Performance",
    alt: DISCIPLINE_ALT.solo,
  },
  {
    src: APP_IMAGES.officialsChampionship,
    category: "Events",
    title: "Officials & Athletes at National Championship",
    alt: "Pencak Silat officials, coaches and athletes at a national championship venue",
  },
  {
    src: APP_IMAGES.officialsBeach,
    category: "Events",
    title: "Beach Games Pencak Silat Officials",
    alt: "Pencak Silat technical officials on duty at Beach Games",
  },
  {
    src: APP_IMAGES.association,
    category: "Association",
    title: "Association Felicitation",
    alt: "Association representative and young athlete during an official felicitation",
  },
  {
    src: APP_IMAGES.training,
    category: "Training",
    title: "Association Training Session",
    alt: "Group Pencak Silat training session at an association centre",
  },
];

const CATEGORIES = [
  "All",
  "Training",
  "Tanding",
  "Tunggal",
  "Ganda",
  "Regu",
  "Solo Creative",
  "Events",
  "Association",
];

export function GallerySection() {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState<number | null>(null);
  const items = filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter);
  const active = index === null ? null : (items[index] ?? null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, step]);

  return (
    <Section id="gallery" tone="dark">
      <SectionHeading
        dark
        eyebrow="Moments"
        title="Sports Gallery"
        intro="Competition, artistic, training and association imagery from Pencak Silat in Telangana."
      />

      <Reveal className="mt-8">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setFilter(c);
                setIndex(null);
              }}
              className={cn(
                "rounded-sm border px-4 py-2 font-display text-[0.66rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300",
                filter === c
                  ? "border-gold bg-gold text-navy-deep"
                  : "border-offwhite/20 text-offwhite/70 hover:border-gold hover:text-gold",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.button
              type="button"
              layout
              key={`${item.category}-${item.title}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35 }}
              onClick={() => setIndex(i)}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-sm"
              aria-label={`View image: ${item.title}`}
            >
              <SafeImage
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--navy-deep)_75%,transparent),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-2 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-display text-[0.62rem] uppercase tracking-[0.22em] text-gold">
                  {item.category}
                </span>
                <p className="mt-1 font-display text-sm font-semibold uppercase tracking-[0.05em] text-offwhite">
                  {item.title}
                </p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            className="fixed inset-0 z-50 grid place-items-center bg-navy-deep/96 p-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close image"
              onClick={close}
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-offwhite/25 text-offwhite transition-colors hover:border-gold hover:text-gold"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-offwhite/25 text-offwhite transition-colors hover:border-gold hover:text-gold sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-offwhite/25 text-offwhite transition-colors hover:border-gold hover:text-gold sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.figure
              key={active.title}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl text-center"
            >
              <SafeImage
                src={active.src}
                alt={active.alt}
                className="mx-auto max-h-[76vh] w-auto max-w-full rounded-sm object-contain"
              />
              <figcaption className="mt-4">
                <span className="font-display text-[0.62rem] uppercase tracking-[0.24em] text-gold">
                  {active.category}
                </span>
                <p className="mt-1 font-display text-sm font-semibold uppercase tracking-[0.06em] text-offwhite">
                  {active.title}
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}


export function TestimonialsSection() {
  return (
    <Section id="testimonials" tone="light">
      <SectionHeading align="center" eyebrow="Voices" title="From Our Community" />
      <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <StaggerItem key={t.name} className="h-full">
            <figure className="card-premium flex h-full flex-col rounded-sm p-8">
              <Quote className="h-7 w-7 text-gold" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-navy">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-navy-deep font-display text-sm font-bold text-gold">
                  {t.name.charAt(0)}
                </span>
                <span className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-navy-deep">
                  {t.name}
                </span>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </StaggerGroup>
      <Reveal className="mt-10 text-center">
        <p className="inline-flex items-center gap-2 text-xs text-muted-foreground">
          <Award className="h-4 w-4 text-gold" aria-hidden="true" />
          Testimonials shared by members of the association community.
        </p>
      </Reveal>
    </Section>
  );
}
