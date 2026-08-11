import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, Quote, ShieldCheck, X } from "lucide-react";
import presidentImg from "@/assets/president.jpeg";
import secretaryImg from "@/assets/general_secretary.jpeg";
import treasurerImg from "@/assets/treasurer.jpeg";
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
        title="Leadership &amp; Administration"
        intro="The office bearers of the Pencak Silat Sports Association of Telangana, as listed on the official association letterhead."
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

export function CoachSection() {
  return (
    <Section id="coaching" tone="navy">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="relative mx-auto max-w-xs overflow-hidden rounded-sm border border-gold/40">
            <img
              src={secretaryImg}
              alt="Durga Satish Donga, Telangana Pencak Silat Chief Coach"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
        </Reveal>
        <div>
          <SectionHeading dark eyebrow="Technical" title="Coaching &amp; Technical Leadership" />
          <Reveal delay={0.1}>
            <div className="mt-7 space-y-4">
              <p className="font-display text-2xl font-bold uppercase tracking-tight text-gold">
                Durga Satish Donga
              </p>
              <ul className="space-y-2.5 text-sm text-offwhite/75">
                {[
                  "Telangana Pencak Silat Chief Coach",
                  "National Coach & National Referee",
                  "Secretary General, PSSA Telangana State",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {line}
                  </li>
                ))}
              </ul>
              <p className="max-w-xl text-sm leading-relaxed text-offwhite/55">
                Technical leadership guides coaching standards, athlete preparation and officiating
                within the association.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
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
