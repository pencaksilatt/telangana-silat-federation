import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Quote, ShieldCheck, X } from "lucide-react";
import gandaImg from "@/assets/ganda.jpg";
import reguImg from "@/assets/regu.jpg";
import soloImg from "@/assets/solo-creative.jpg";
import tandingImg from "@/assets/tanding.jpg";
import trainingImg from "@/assets/training.jpg";
import tunggalImg from "@/assets/tunggal.jpg";
import eventImg from "@/assets/event.jpg";
import { TESTIMONIALS } from "@/data/site";
import { ASSETS } from "@/data/assets";
import { SafeImage } from "./SafeImage";
import { Reveal, Section, SectionHeading, StaggerGroup, StaggerItem } from "./primitives";
import { cn } from "@/lib/utils";

const OFFICIALS = [
  { role: "President", name: "C.H. Dashratham", photo: ASSETS.president },
  { role: "Secretary General", name: "D. Durga Satish Goud", photo: ASSETS.secretaryGeneral },
  { role: "Treasurer", name: "Vinay Kumar Gogula", photo: ASSETS.treasurer },
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
                <img
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
              src={ASSETS.secretaryGeneral}
              alt="Durga Satish Donga, Telangana Pencak Silat Chief Coach"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
        </Reveal>
        <div>
          <SectionHeading
            dark
            eyebrow="Technical"
            title="Coaching &amp; Technical Leadership"
          />
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

const GALLERY = [
  { src: tandingImg, category: "Tanding", alt: "Tanding combat bout in progress" },
  { src: tunggalImg, category: "Tunggal", alt: "Tunggal single artistic performance" },
  { src: gandaImg, category: "Ganda", alt: "Ganda paired weapons routine" },
  { src: reguImg, category: "Regu", alt: "Regu three-person synchronised form" },
  { src: soloImg, category: "Solo Creative", alt: "Solo creative performance with blade" },
  { src: eventImg, category: "Events", alt: "Pencak Silat championship arena" },
  { src: trainingImg, category: "Training", alt: "Group Pencak Silat training session" },
  { src: tandingImg, category: "Events", alt: "Competition bout during a championship" },
  { src: tunggalImg, category: "Training", alt: "Athlete practising a compulsory form" },
];

const CATEGORIES = [
  "All",
  "Tanding",
  "Tunggal",
  "Ganda",
  "Regu",
  "Solo Creative",
  "Events",
  "Training",
];

export function GallerySection() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<null | (typeof GALLERY)[number]>(null);
  const items = filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter);

  return (
    <Section id="gallery" tone="dark">
      <SectionHeading
        dark
        eyebrow="Moments"
        title="Sports Gallery"
        intro="Competition, artistic and training imagery from the world of Pencak Silat."
      />

      <Reveal className="mt-8">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
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
              key={`${item.category}-${i}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              onClick={() => setLightbox(item)}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-sm"
              aria-label={`View image: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className={cn(
                  "w-full object-cover transition-transform duration-[900ms] group-hover:scale-108",
                  i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-[4/3]" : "aspect-square",
                )}
              />
              <div className="absolute inset-0 bg-navy-deep/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 translate-y-2 font-display text-[0.66rem] uppercase tracking-[0.22em] text-gold opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {item.category}
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightbox ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-navy-deep/95 p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              aria-label="Close image"
              onClick={() => setLightbox(null)}
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-sm border border-offwhite/25 text-offwhite hover:border-gold hover:text-gold"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[82vh] w-auto max-w-full rounded-sm object-contain"
            />
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
