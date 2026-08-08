import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import heroImg from "@/assets/hero-silat.jpg";
import { WhatsAppCta } from "./WhatsAppButton";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-navy-deep"
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <motion.img
          src={heroImg}
          alt="Pencak Silat athlete performing a competition stance on the mat"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="h-full w-full scale-105 object-cover object-center"
          initial={{ scale: 1.16 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(100deg,var(--navy-deep)_10%,color-mix(in_oklab,var(--navy-deep)_82%,transparent)_45%,color-mix(in_oklab,var(--navy-deep)_35%,transparent)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_20%,transparent,color-mix(in_oklab,var(--navy-deep)_75%,transparent))]" />
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-[42rem] w-[2px] rotate-[18deg] bg-[linear-gradient(to_bottom,transparent,var(--gold),transparent)] opacity-30"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/3 top-0 h-[36rem] w-px rotate-[14deg] bg-[linear-gradient(to_bottom,transparent,var(--gold),transparent)] opacity-20"
        aria-hidden="true"
      />

      <motion.div
        style={{ opacity }}
        className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pb-28 sm:pt-36"
      >
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="eyebrow"
        >
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          PSSATG • Telangana
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-4xl font-display text-[2.1rem] font-bold uppercase leading-[1.05] tracking-tight text-offwhite sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
        >
          Pencak Silat
          <br />
          Sports Association
          <br />
          <span className="text-gold-gradient">of Telangana</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-6 font-display text-base font-medium uppercase tracking-[0.28em] text-offwhite/85 sm:text-lg"
        >
          Discipline. Tradition. Excellence.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-offwhite/70"
        >
          Promoting the art, sport and heritage of Pencak Silat across Telangana.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.68 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
        >
          <a
            href="#what-is"
            className="inline-flex items-center justify-center rounded-sm bg-gold px-7 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-navy-deep transition-all duration-300 hover:bg-gold-metal hover:shadow-[0_20px_50px_-22px_var(--gold)]"
          >
            Explore Pencak Silat
          </a>
          <WhatsAppCta variant="outlineDark">Enquire Now</WhatsAppCta>
        </motion.div>
      </motion.div>

      <motion.a
        href="#affiliations"
        aria-label="Scroll to next section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-offwhite/60 transition-colors hover:text-gold sm:flex"
      >
        <span className="font-display text-[0.6rem] uppercase tracking-[0.32em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
