import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import heroImg from "@/assets/hero-silat.jpg";
import { ASSETS } from "@/data/assets";

const HEADING = ["Pencak Silat", "Sports Association", "of Telangana"];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

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
          className="h-full w-full object-cover object-center"
          initial={{ scale: 1.16 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      {/* Cinematic navy → royal blue grading with warm gold light */}
      <div className="absolute inset-0 bg-[linear-gradient(102deg,var(--navy-deep)_8%,color-mix(in_oklab,var(--royal)_88%,transparent)_52%,color-mix(in_oklab,var(--navy)_45%,transparent)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(75%_60%_at_78%_38%,color-mix(in_oklab,var(--gold)_26%,transparent),transparent_62%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_12%_85%,color-mix(in_oklab,oklch(0.7_0.11_230)_22%,transparent),transparent_65%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(to_top,var(--navy-deep),transparent)]" />

      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-[42rem] w-[2px] rotate-[18deg] bg-[linear-gradient(to_bottom,transparent,var(--gold),transparent)] opacity-30"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/3 top-0 h-[36rem] w-px rotate-[14deg] bg-[linear-gradient(to_bottom,transparent,oklch(0.85_0.09_225),transparent)] opacity-25"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-screen [background-image:radial-gradient(1.5px_1.5px_at_20%_30%,white,transparent),radial-gradient(1.5px_1.5px_at_65%_18%,var(--gold),transparent),radial-gradient(1.5px_1.5px_at_82%_72%,white,transparent),radial-gradient(1.5px_1.5px_at_38%_82%,var(--gold),transparent),radial-gradient(1.5px_1.5px_at_52%_55%,white,transparent)] [background-size:600px_600px]"
        aria-hidden="true"
      />

      <motion.div
        style={{ opacity }}
        className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-24 pt-32 sm:px-8 sm:pb-28 sm:pt-36 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14"
      >
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="eyebrow"
          >
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            PSSATG • Telangana
          </motion.p>

          <h1 className="mt-5 max-w-4xl font-display text-[2.1rem] font-bold uppercase leading-[1.05] tracking-tight text-offwhite sm:text-5xl lg:text-6xl xl:text-[4.15rem]">
            {HEADING.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className={i === 2 ? "block text-gold-gradient" : "block"}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.28 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.62 }}
            className="mt-6 font-display text-base font-medium uppercase tracking-[0.28em] text-offwhite/85 sm:text-lg"
          >
            Discipline. Tradition. Excellence.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.72 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-offwhite/72"
          >
            Promoting the art, sport and heritage of Pencak Silat across Telangana.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.84 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Link
              to="/pencak-silat"
              className="inline-flex items-center justify-center rounded-sm bg-gold px-7 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-navy-deep transition-all duration-300 hover:bg-gold-metal hover:shadow-[0_20px_50px_-22px_var(--gold)]"
            >
              Explore Pencak Silat
            </Link>
            <Link
              to="/disciplines"
              className="inline-flex items-center justify-center rounded-sm border border-offwhite/30 px-7 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-offwhite transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
            >
              View Disciplines
            </Link>
          </motion.div>
        </div>

        {/* Static official emblem — one-time entrance only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="order-first mx-auto w-40 sm:w-52 lg:order-none lg:mx-0 lg:w-full lg:max-w-[22rem] lg:justify-self-end"
        >
          <img
            src={ASSETS.logo}
            alt="Official emblem of the Pencak Silat Sports Association of Telangana"
            width={880}
            height={1080}
            fetchPriority="high"
            className="h-auto w-full drop-shadow-[0_28px_60px_rgba(0,0,0,0.55)]"
          />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-offwhite/60 sm:flex"
      >
        <span className="font-display text-[0.6rem] uppercase tracking-[0.32em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}
