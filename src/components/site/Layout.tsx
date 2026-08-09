import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUp, ChevronRight } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./ContactFooter";
import { FloatingWhatsApp } from "./WhatsAppButton";
import { cn } from "@/lib/utils";

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="relative z-10">
      <ol className="flex flex-wrap items-center gap-1.5 font-display text-[0.62rem] uppercase tracking-[0.22em] text-offwhite/55">
        <li>
          <Link to="/" className="transition-colors hover:text-gold">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3 text-gold/60" aria-hidden="true" />
            {item.to ? (
              <Link to={item.to} className="transition-colors hover:text-gold">
                {item.label}
              </Link>
            ) : (
              <span className="text-gold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  breadcrumbs,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
  breadcrumbs: { label: string; to?: string }[];
}) {
  return (
    <section className="relative isolate flex min-h-[62svh] w-full items-end overflow-hidden bg-navy-deep pb-12 pt-32 sm:min-h-[68svh] sm:pb-16 sm:pt-40">
      <motion.img
        src={image}
        alt=""
        aria-hidden="true"
        initial={{ scale: 1.14 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,var(--navy-deep)_12%,color-mix(in_oklab,var(--royal)_70%,transparent)_62%,color-mix(in_oklab,var(--navy-deep)_40%,transparent)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(90%_70%_at_15%_10%,color-mix(in_oklab,var(--gold)_14%,transparent),transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(to_top,var(--navy-deep),transparent)]" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Breadcrumbs items={breadcrumbs} />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="eyebrow mt-6"
        >
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-4xl font-display text-[2rem] font-bold uppercase leading-[1.06] tracking-tight text-offwhite sm:text-5xl lg:text-[3.4rem]"
        >
          {title}
        </motion.h1>
        {subtitle ? (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-offwhite/72"
          >
            {subtitle}
          </motion.p>
        ) : null}
      </div>
    </section>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          className="fixed bottom-24 right-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-gold/50 bg-navy-deep/90 text-gold backdrop-blur transition-colors hover:bg-gold hover:text-navy-deep sm:bottom-28 sm:right-7"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

export function SiteLayout({ children, className }: { children: ReactNode; className?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className={cn("min-h-screen w-full overflow-x-hidden bg-background", className)}>
      <Header />
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}

export function ViewMore({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:gap-3"
    >
      {children}
      <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  );
}
