import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Download,
  FileText,
  HeartPulse,
  Landmark,
  MapPin,
  Medal,
  ShieldCheck,
  Smile,
  Sparkles,
  Timer,
  Users,
} from "lucide-react";
import gandaImg from "@/assets/ganda.jpg";
import reguImg from "@/assets/regu.jpg";
import soloImg from "@/assets/solo-creative.jpg";
import tandingImg from "@/assets/tanding.jpg";
import trainingImg from "@/assets/training.jpg";
import tunggalImg from "@/assets/tunggal.jpg";
import eventImg from "@/assets/event.jpg";
import { BENEFITS, SCORING } from "@/data/site";
import { Reveal, Section, SectionHeading, StaggerGroup, StaggerItem } from "./primitives";
import { WhatsAppCta } from "./WhatsAppButton";

export const DISCIPLINES = [
  {
    key: "tanding",
    name: "Tanding",
    sub: "Combat / Fight",
    text: "Full-contact confrontation between two Pesilat from different teams, contested within weight categories.",
    image: tandingImg,
  },
  {
    key: "tunggal",
    name: "Tunggal",
    sub: "Single competitor",
    text: "A single competitor performs the standard compulsory form with precision, power and control.",
    image: tunggalImg,
  },
  {
    key: "ganda",
    name: "Ganda",
    sub: "Two competitors",
    text: "Two competitors present a choreographed attack-and-defence sequence, empty hand and with weapons.",
    image: gandaImg,
  },
  {
    key: "regu",
    name: "Regu",
    sub: "Three competitors",
    text: "Three competitors perform the compulsory form in complete synchronisation as a team.",
    image: reguImg,
  },
  {
    key: "solo",
    name: "Solo Creative",
    sub: "Single-person creative performance",
    text: "A single performer presents an original creative composition rooted in authentic Silat movement.",
    image: soloImg,
  },
];

export function DisciplinesSection() {
  return (
    <Section id="disciplines" tone="dark">
      <SectionHeading
        dark
        eyebrow="Categories"
        title="Pencak Silat Disciplines"
        intro="Competition Pencak Silat is contested across combat and artistic categories, each with its own technical demands and judging criteria."
      />
      <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DISCIPLINES.map((d) => (
          <StaggerItem key={d.key} className="h-full">
            <article className="group relative h-full overflow-hidden rounded-sm border border-offwhite/12">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={d.image}
                  alt={`${d.name} — ${d.sub}`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--navy-deep)_8%,color-mix(in_oklab,var(--navy-deep)_55%,transparent)_45%,transparent)]" />
              </div>
              <div className="relative -mt-16 p-6">
                <p className="font-display text-[0.66rem] uppercase tracking-[0.28em] text-gold">
                  {d.sub}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-offwhite">
                  {d.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-offwhite/65">{d.text}</p>
                <a
                  href="#training"
                  className="mt-5 inline-flex items-center gap-2 font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:gap-3"
                >
                  Explore <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}

const ROUNDS = [
  { label: "Round 01", time: "2 Min", type: "round" },
  { label: "Break", time: "1 Min", type: "break" },
  { label: "Round 02", time: "2 Min", type: "round" },
  { label: "Break", time: "1 Min", type: "break" },
  { label: "Round 03", time: "2 Min", type: "round" },
];

export function TandingSection() {
  return (
    <Section id="tanding" tone="light">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Combat category"
            title="Tanding — Combat Category"
            intro="A combat confrontation of two Pesilat from two different teams, contested within defined weight categories."
          />
          <Reveal delay={0.1}>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Striking",
                "Blocking",
                "Take down",
                "Sweeping techniques",
                "Weight categories",
                "Three rounds of two minutes",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-3 border border-border bg-offwhite px-4 py-3 text-sm font-medium text-navy-deep"
                >
                  <ShieldCheck className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-sm text-muted-foreground">
              Each bout is fought over three rounds of 2 minutes, with a 1 minute break between
              rounds.
            </p>
          </Reveal>
        </div>

        <Reveal className="relative overflow-hidden rounded-sm">
          <img
            src={tandingImg}
            alt="Two Pencak Silat athletes competing in a Tanding bout"
            width={1200}
            height={900}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-deep/25" />
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <p className="eyebrow">Match Format</p>
        <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-stretch">
          {ROUNDS.map((r, i) => (
            <motion.div
              key={`${r.label}-${i}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={
                r.type === "round"
                  ? "flex-1 rounded-sm bg-navy-deep px-6 py-7 text-offwhite"
                  : "flex-none rounded-sm border border-dashed border-gold/50 bg-gold/5 px-6 py-7 text-navy-deep md:w-40"
              }
            >
              <div className="flex items-center gap-2">
                <Timer
                  className={`h-4 w-4 ${r.type === "round" ? "text-gold" : "text-gold"}`}
                  aria-hidden="true"
                />
                <span
                  className={`font-display text-[0.66rem] uppercase tracking-[0.24em] ${
                    r.type === "round" ? "text-offwhite/70" : "text-navy/70"
                  }`}
                >
                  {r.label}
                </span>
              </div>
              <p className="mt-3 font-display text-2xl font-bold uppercase tracking-tight">
                {r.time}
              </p>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

export function ScoringSection() {
  const icons = [Medal, ShieldCheck, Users, FileText];
  return (
    <Section id="scoring" tone="offwhite">
      <SectionHeading
        eyebrow="Officiating"
        title="Match Scoring &amp; Winning"
        intro="A Tanding bout can be decided in several ways under the applicable competition rules."
      />
      <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SCORING.map((s, i) => {
          const Icon = icons[i];
          return (
            <StaggerItem key={s.title} className="h-full">
              <article className="card-premium h-full rounded-sm p-7">
                <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                <h3 className="mt-5 font-display text-base font-bold uppercase tracking-[0.12em] text-navy-deep">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </Section>
  );
}

export function RulesSection() {
  return (
    <Section id="rules" tone="navy">
      <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <SectionHeading
            dark
            eyebrow="Governance"
            title="Rules &amp; Regulations"
            intro="Like every sport, Pencak Silat has its own rules. Breaching the rules can result in penalties."
          />
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-sm text-offwhite/60">
              The official rules document will be published here. Athletes, coaches and officials
              should always refer to the applicable rules of the governing federation.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="card-dark rounded-sm p-8">
            <FileText className="h-8 w-8 text-gold" aria-hidden="true" />
            <p className="mt-5 font-display text-sm uppercase tracking-[0.16em] text-offwhite">
              Official Rules Document
            </p>
            <p className="mt-2 text-xs text-offwhite/55">
              Document to be linked once officially released.
            </p>
            <button
              type="button"
              disabled
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3 font-display text-xs font-semibold uppercase tracking-[0.18em] text-navy-deep disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Rules &amp; Regulations
            </button>
            <WhatsAppCta
              variant="outlineDark"
              className="mt-3 w-full"
              message="Hello, I would like to request the Pencak Silat rules and regulations document."
            >
              Request via WhatsApp
            </WhatsAppCta>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

const ARTISTIC = [
  { name: "Tunggal", sub: "Single competitor", image: tunggalImg },
  { name: "Ganda", sub: "Double / two-person team", image: gandaImg },
  { name: "Regu", sub: "Triple / three-person team", image: reguImg },
  { name: "Solo Creative", sub: "Single person", image: soloImg },
];

export function ArtisticSection() {
  return (
    <Section id="artistic" tone="light">
      <SectionHeading
        align="center"
        eyebrow="Seni"
        title="Sports Artistic Category"
        intro="The artistic categories are judged on accuracy, expression, rhythm and mastery of authentic Pencak Silat movement."
      />
      <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ARTISTIC.map((a) => (
          <StaggerItem key={a.name}>
            <figure className="group relative overflow-hidden rounded-sm">
              <img
                src={a.image}
                alt={`${a.name} artistic category`}
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-[900ms] group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--navy-deep),transparent_58%)]" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-lg font-bold uppercase tracking-[0.08em] text-offwhite">
                  {a.name}
                </p>
                <p className="mt-1 text-[0.68rem] uppercase tracking-[0.2em] text-gold">{a.sub}</p>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}

const BENEFIT_ICONS = [
  HeartPulse,
  Sparkles,
  Landmark,
  ShieldCheck,
  Medal,
  Users,
  Smile,
  HeartPulse,
];

export function BenefitsGrid() {
  return (
    <Section id="benefits" tone="offwhite">
      <SectionHeading eyebrow="Value of the art" title="Why Practice Pencak Silat?" />
      <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((b, i) => {
          const Icon = BENEFIT_ICONS[i % BENEFIT_ICONS.length];
          return (
            <StaggerItem key={b} className="h-full">
              <div className="card-premium flex h-full flex-col gap-4 rounded-sm p-6">
                <Icon className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-navy">{b}</p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </Section>
  );
}

export function TrainingSection() {
  return (
    <Section id="training" tone="dark">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
        <SectionHeading
          dark
          eyebrow="Train with PSSATG"
          title="Train • Discipline • Excel"
          intro="Structured coaching across every competition discipline, for beginners through to state-level athletes."
        />
        <Reveal className="overflow-hidden rounded-sm">
          <img
            src={trainingImg}
            alt="Pencak Silat training session in progress"
            width={1400}
            height={1000}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
        </Reveal>
      </div>

      <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {DISCIPLINES.map((d) => (
          <StaggerItem key={`train-${d.key}`} className="h-full">
            <article className="card-dark flex h-full flex-col overflow-hidden rounded-sm">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={d.image}
                  alt={`${d.name} training`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] hover:scale-108"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold uppercase tracking-[0.1em] text-offwhite">
                  {d.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-offwhite/65">{d.text}</p>
                <WhatsAppCta
                  variant="outlineDark"
                  className="mt-5 w-full"
                  message={`Hello, I would like to enquire about ${d.name} training with Pencak Silat Sports Association of Telangana.`}
                >
                  Enquire
                </WhatsAppCta>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}

const EVENTS = [
  {
    title: "Pencak Silat Championship",
    category: "Championship",
    date: "Date to be announced",
    venue: "Venue to be announced",
    text: "State championship across Tanding and artistic categories. Details will be published once confirmed.",
  },
  {
    title: "State-Level Competition",
    category: "Competition",
    date: "Date to be announced",
    venue: "Venue to be announced",
    text: "District and state-level competition for registered athletes across age and weight categories.",
  },
  {
    title: "Training Camp",
    category: "Training",
    date: "Date to be announced",
    venue: "Venue to be announced",
    text: "Residential and non-residential technical camps focused on conditioning and competition preparation.",
  },
  {
    title: "Selection Event",
    category: "Selection",
    date: "Date to be announced",
    venue: "Venue to be announced",
    text: "Selection trials for state representation in Tanding and artistic categories.",
  },
  {
    title: "Demonstration & Artistic Showcase",
    category: "Demonstration",
    date: "Date to be announced",
    venue: "Venue to be announced",
    text: "Public demonstrations and artistic showcases presenting Tunggal, Ganda, Regu and Solo Creative.",
  },
  {
    title: "Coaching & Referee Activity",
    category: "Technical",
    date: "Date to be announced",
    venue: "Venue to be announced",
    text: "Technical courses and refresher activities for coaches, referees and judges.",
  },
];

export function EventsSection() {
  return (
    <Section id="events" tone="light">
      <SectionHeading
        eyebrow="Calendar"
        title="Sports Events"
        intro="Championships, competitions, camps and technical activities organised by the association. Event details are published here once officially confirmed."
      />
      <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {EVENTS.map((e) => (
          <StaggerItem key={e.title} className="h-full">
            <article className="card-premium group flex h-full flex-col overflow-hidden rounded-sm">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={eventImg}
                  alt={`${e.title} — Pencak Silat competition arena`}
                  width={1400}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-navy-deep/45" />
                <span className="absolute left-4 top-4 rounded-sm bg-gold px-3 py-1 font-display text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-navy-deep">
                  {e.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-navy-deep">
                  {e.title}
                </h3>
                <div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <CalendarDays className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
                    {e.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
                    {e.venue}
                  </p>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {e.text}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <WhatsAppCta
                    className="flex-1 px-4 py-2.5 text-[0.66rem]"
                    message={`Hello, I would like to enquire about the ${e.title} organised by Pencak Silat Sports Association of Telangana.`}
                  >
                    Register / Enquire
                  </WhatsAppCta>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 rounded-sm border border-navy/20 px-4 py-2.5 font-display text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-navy-deep transition-colors hover:border-gold hover:bg-gold/10"
                  >
                    Details
                  </a>
                </div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
