import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { ASSETS } from "@/data/assets";
import { NAV, ORG } from "@/data/site";
import { SocialIcons } from "./SocialIcons";
import { cn } from "@/lib/utils";

function isActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [mobileSub, setMobileSub] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdown(false);
  }, [pathname]);

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
          : "bg-[linear-gradient(to_bottom,color-mix(in_oklab,var(--navy-deep)_78%,transparent),transparent)]",
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
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={ORG.name}>
          <img
            src={ASSETS.logo}
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
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active = isActive(pathname, item.to);
            if (item.children) {
              return (
                <div
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link
                    to={item.to}
                    className={cn(
                      "relative flex items-center gap-1 whitespace-nowrap px-2.5 py-2 font-display text-[0.72rem] font-medium uppercase tracking-[0.13em] transition-colors duration-300",
                      active ? "text-gold" : "text-offwhite/80 hover:text-gold",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-3 w-3 transition-transform duration-300",
                        dropdown && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={cn(
                        "absolute inset-x-2.5 -bottom-0.5 h-0.5 origin-left bg-gold transition-transform duration-300",
                        active ? "scale-x-100" : "scale-x-0",
                      )}
                      aria-hidden="true"
                    />
                  </Link>
                  <AnimatePresence>
                    {dropdown ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-0 top-full w-56 pt-2"
                      >
                        <ul className="overflow-hidden rounded-sm border border-offwhite/12 bg-navy-deep/97 py-1.5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl">
                          {item.children.map((c) => (
                            <li key={c.to}>
                              <Link
                                to={c.to}
                                className={cn(
                                  "block border-l-2 px-4 py-2 font-display text-[0.7rem] uppercase tracking-[0.16em] transition-colors",
                                  isActive(pathname, c.to)
                                    ? "border-gold bg-gold/10 text-gold"
                                    : "border-transparent text-offwhite/75 hover:border-gold hover:bg-gold/5 hover:text-gold",
                                )}
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            }
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative whitespace-nowrap px-2.5 py-2 font-display text-[0.72rem] font-medium uppercase tracking-[0.13em] transition-colors duration-300",
                  active ? "text-gold" : "text-offwhite/80 hover:text-gold",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-2.5 -bottom-0.5 h-0.5 origin-left bg-gold transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden whitespace-nowrap rounded-sm bg-gold px-5 py-2.5 font-display text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-navy-deep transition-all duration-300 hover:bg-gold-metal hover:shadow-[0_16px_38px_-20px_var(--gold)] lg:inline-flex"
          >
            Join / Enquire
          </Link>
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
                  src={ASSETS.logo}
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
                    <li key={item.to}>
                      {item.children ? (
                        <>
                          <div className="flex items-center justify-between border-b border-offwhite/10">
                            <Link
                              to={item.to}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "block flex-1 py-3 font-display text-sm uppercase tracking-[0.16em] transition-colors",
                                isActive(pathname, item.to)
                                  ? "text-gold"
                                  : "text-offwhite/85 hover:text-gold",
                              )}
                            >
                              {item.label}
                            </Link>
                            <button
                              type="button"
                              aria-label="Toggle disciplines submenu"
                              aria-expanded={mobileSub}
                              onClick={() => setMobileSub((v) => !v)}
                              className="grid h-9 w-9 place-items-center text-offwhite/70 hover:text-gold"
                            >
                              <ChevronDown
                                className={cn(
                                  "h-4 w-4 transition-transform duration-300",
                                  mobileSub && "rotate-180",
                                )}
                              />
                            </button>
                          </div>
                          <AnimatePresence initial={false}>
                            {mobileSub ? (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                              >
                                {item.children.map((c) => (
                                  <li key={c.to}>
                                    <Link
                                      to={c.to}
                                      onClick={() => setOpen(false)}
                                      className={cn(
                                        "block border-b border-offwhite/5 py-2.5 pl-4 font-display text-[0.78rem] uppercase tracking-[0.14em] transition-colors",
                                        isActive(pathname, c.to)
                                          ? "text-gold"
                                          : "text-offwhite/65 hover:text-gold",
                                      )}
                                    >
                                      {c.label}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            ) : null}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "block border-b border-offwhite/10 py-3 font-display text-sm uppercase tracking-[0.16em] transition-colors",
                            isActive(pathname, item.to)
                              ? "text-gold"
                              : "text-offwhite/85 hover:text-gold",
                          )}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-6 space-y-4">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-sm bg-gold py-3 text-center font-display text-xs font-semibold uppercase tracking-[0.18em] text-navy-deep"
                >
                  Join / Enquire
                </Link>
                <SocialIcons />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
