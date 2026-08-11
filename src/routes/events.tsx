import { useState } from "react";
import { IMAGES as APP_IMAGES } from "@/data/images";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import { ContactCta } from "@/components/site/HomePreviews";
import { EVENT_FILTERS, EVENTS, waLink } from "@/data/site";
import eventImg from "@/assets/event.jpg";
const tandingImg = APP_IMAGES.tanding;
import trainingImg from "@/assets/training.jpg";
const reguImg = APP_IMAGES.regu;
import { cn } from "@/lib/utils";

const TITLE = "Sports & Events | Pencak Silat Sports Association of Telangana";
const DESCRIPTION =
  "Championships, selection trials, coaching camps and technical clinics organised and supported by the Pencak Silat Sports Association of Telangana.";

export const Route = createFileRoute("/events")({
  component: EventsPage,
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

const IMAGES: Record<string, string> = {
  Championships: eventImg,
  Tanding: tandingImg,
  Artistic: reguImg,
  Training: trainingImg,
};

function EventsPage() {
  const [filter, setFilter] = useState<string>("All");

  const list = EVENTS.filter((e) =>
    filter === "All"
      ? true
      : filter === "Upcoming"
        ? e.status !== "Completed"
        : filter === "Completed"
          ? e.status === "Completed"
          : e.category === filter,
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Calendar"
        title="Sports & Events"
        subtitle="Championships, selection trials, coaching camps and officiating clinics across Telangana. Dates are confirmed and announced by the association."
        image={eventImg}
        breadcrumbs={[{ label: "Sports & Events" }]}
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap gap-2">
            {EVENT_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-sm border px-4 py-2 font-display text-[0.66rem] uppercase tracking-[0.18em] transition-all duration-300",
                  filter === f
                    ? "border-gold bg-gold text-navy-deep"
                    : "border-border text-navy-deep hover:border-gold hover:bg-gold/10",
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((e) => (
                <motion.article
                  key={e.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-background transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_28px_60px_-34px_rgba(7,20,38,0.55)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={IMAGES[e.category] ?? eventImg}
                      alt={e.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                    />
                    <span className="absolute left-4 top-4 rounded-sm bg-navy-deep/90 px-2.5 py-1 font-display text-[0.58rem] uppercase tracking-[0.2em] text-gold">
                      {e.status}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-display text-[0.62rem] uppercase tracking-[0.24em] text-gold">
                      {e.category}
                    </p>
                    <h2 className="mt-2 font-display text-lg font-bold uppercase leading-snug tracking-tight text-navy-deep">
                      {e.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {e.description}
                    </p>
                    <div className="mt-5 space-y-1.5 text-xs text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <CalendarDays className="h-3.5 w-3.5 text-gold" /> {e.date}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-gold" /> {e.location}
                      </p>
                    </div>
                    <a
                      href={waLink(`Hello, I would like details about: ${e.title}`)}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-6 inline-flex w-fit items-center gap-2 border-b border-gold pb-1 font-display text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-navy-deep transition-colors hover:text-gold"
                    >
                      View Details
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <ContactCta />
    </SiteLayout>
  );
}
