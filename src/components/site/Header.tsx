import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/pencak.png.asset.json";
import { NAV, ORG } from "@/data/site";
import { SocialIcons } from "./SocialIcons";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0.01, 0.2] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "border-b border-offwhite/10 bg-navy-deep/92 backdrop-blur-xl shadow-[0_10px_40px_-24px_rgba(0,0,0,0.9)]"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "hidden border-b border-offwhite/10 transition-all duration-500 lg:block",
          scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-12 opacity-100",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-8 py-1.5">
          <p className="font-display text-[0.68rem] uppercase tracking-[0.3em] text-offwhite/60">
            Official State Association • Telangana
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`tel:+91${ORG.phones[0]}`}
              className="flex items-center gap-2 text-[0.72rem] tracking-wide text-offwhite/70 transition-colors hover:text-gold"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              +91 {ORG.phones[0]}
            </a>
            <SocialIcons size="sm" />
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3" aria-label={ORG.name}>
          <img
            src={logo.url}
            alt="Pencak Silat Sports Association of Telangana official emblem"
            width={64}
            height={78}
            className="h-11 w-auto shrink-0 drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)] sm:h-12"
          />
          <span className="hidden min-w-0 leading-tight sm:block">
            <span className="block font-display text-sm font-semibold uppercase tracking-[0.16em] text-offwhite">
              Pencak Silat
            </span>
            <span className="block text-[0.63rem] uppercase tracking-[0.22em] text-gold">
              Sports Association of Telangana
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-2.5 py-2 font-display text-[0.72rem] font-medium uppercase tracking-[0.13em] transition-colors duration-300",
                active === item.href ? "text-gold" : "text-offwhite/80 hover:text-gold",
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute inset-x-2.5 -bottom-0.5 h-0.5 origin-left bg-gold transition-transform duration-300",
                  active === item.href ? "scale-x-100" : "scale-x-0",
                )}
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-sm bg-gold px-5 py-2.5 font-display text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-navy-deep transition-all duration-300 hover:bg-gold-metal hover:shadow-[0_16px_38px_-20px_var(--gold)] lg:inline-flex"
          >
            Join / Enquire
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-offwhite/25 text-offwhite transition-colors hover:border-gold hover:text-gold xl:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-navy-deep/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-navy-deep px-6 py-5"
            >
              <div className="flex items-center justify-between">
                <img
                  src={logo.url}
                  alt="PSSATG emblem"
                  width={48}
                  height={58}
                  className="h-11 w-auto"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-sm border border-offwhite/25 text-offwhite hover:border-gold hover:text-gold"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-8 flex-1 overflow-y-auto" aria-label="Mobile">
                <ul className="space-y-1">
                  {NAV.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block border-b border-offwhite/10 py-3 font-display text-sm uppercase tracking-[0.16em] text-offwhite/85 transition-colors hover:text-gold"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-6 space-y-4">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-sm bg-gold py-3 text-center font-display text-xs font-semibold uppercase tracking-[0.18em] text-navy-deep"
                >
                  Join / Enquire
                </a>
                <SocialIcons />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
