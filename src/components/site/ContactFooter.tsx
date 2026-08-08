import { useState, type FormEvent } from "react";
import { Mail, MapPin, Navigation, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/pencak.png.asset.json";
import { ENQUIRY_TYPES, NAV, ORG, waLink } from "@/data/site";
import { Reveal, Section, SectionHeading } from "./primitives";
import { SocialIcons } from "./SocialIcons";
import { WhatsAppCta } from "./WhatsAppButton";

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "RTC Colony Road No.8, Medchal, Medchal Malkajgiri, Telangana 501401",
)}`;

type Errors = Partial<Record<"name" | "phone" | "email" | "type" | "message", string>>;

export function ContactSection() {
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const type = String(data.get("type") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[0-9+\-\s]{10,15}$/.test(phone)) next.phone = "Please enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next.email = "Please enter a valid email.";
    if (!type) next.type = "Please select an enquiry type.";
    if (message.length < 10) next.message = "Please describe your enquiry (min. 10 characters).";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    window.open(
      waLink(
        `Enquiry — Pencak Silat Sports Association of Telangana\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nType: ${type}\nMessage: ${message}`,
      ),
      "_blank",
      "noopener",
    );
    toast.success("Enquiry ready", {
      description: "Your enquiry has been prepared on WhatsApp for our official number.",
    });
    form.reset();
  };

  const field =
    "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-navy-deep outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";
  const labelCls =
    "block font-display text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-navy";

  return (
    <Section id="contact" tone="offwhite">
      <SectionHeading
        eyebrow="Get in touch"
        title="Connect with PSSATG"
        intro="For training, competitions, events or general enquiries, reach the association directly."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="h-full rounded-sm bg-navy-deep p-8 text-offwhite sm:p-10">
            <p className="font-display text-lg font-bold uppercase tracking-tight text-offwhite">
              {ORG.name}
            </p>

            <address className="mt-7 space-y-6 not-italic">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <div className="min-w-0 text-sm leading-relaxed text-offwhite/75">
                  {ORG.address.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <div className="text-sm text-offwhite/75">
                  {ORG.phones.map((p) => (
                    <p key={p}>
                      <a href={`tel:+91${p}`} className="transition-colors hover:text-gold">
                        {p}
                      </a>
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={`mailto:${ORG.email}`}
                  className="break-all text-sm text-offwhite/75 transition-colors hover:text-gold"
                >
                  {ORG.email}
                </a>
              </div>
            </address>

            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              <a
                href={`tel:+91${ORG.phones[0]}`}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-5 py-3 font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-navy-deep transition-colors hover:bg-gold-metal"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
              </a>
              <a
                href={`mailto:${ORG.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-offwhite/25 px-5 py-3 font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-offwhite transition-colors hover:border-gold hover:text-gold"
              >
                <Mail className="h-4 w-4" aria-hidden="true" /> Email Us
              </a>
              <WhatsAppCta
                variant="outlineDark"
                className="px-5 py-3 text-[0.68rem] sm:col-span-1"
              >
                WhatsApp Us
              </WhatsAppCta>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-offwhite/25 px-5 py-3 font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-offwhite transition-colors hover:border-gold hover:text-gold"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" /> Get Directions
              </a>
            </div>

            <div className="mt-8 overflow-hidden rounded-sm border border-offwhite/15">
              <div className="relative grid h-44 place-items-center bg-[linear-gradient(135deg,color-mix(in_oklab,var(--offwhite)_8%,transparent),transparent)] pattern-telangana">
                <div className="text-center">
                  <MapPin className="mx-auto h-7 w-7 text-gold" aria-hidden="true" />
                  <p className="mt-3 font-display text-[0.68rem] uppercase tracking-[0.22em] text-offwhite/70">
                    Medchal, Telangana
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-2 inline-block font-display text-[0.66rem] uppercase tracking-[0.2em] text-gold underline-offset-4 hover:underline"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-offwhite/12 pt-6">
              <p className="font-display text-[0.66rem] uppercase tracking-[0.22em] text-offwhite/55">
                Follow the association
              </p>
              <SocialIcons className="mt-3" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-sm border border-border bg-background p-8 shadow-[0_24px_60px_-40px_rgba(7,20,38,0.6)] sm:p-10"
          >
            <p className="eyebrow">Enquiry Form</p>
            <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-navy-deep">
              Send an Enquiry
            </h3>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelCls}>
                  Full Name
                </label>
                <input id="name" name="name" className={`${field} mt-2`} placeholder="Your name" />
                {errors.name ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="phone" className={labelCls}>
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  inputMode="tel"
                  className={`${field} mt-2`}
                  placeholder="10-digit number"
                />
                {errors.phone ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className={labelCls}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`${field} mt-2`}
                  placeholder="you@example.com"
                />
                {errors.email ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="type" className={labelCls}>
                  Select Enquiry Type
                </label>
                <select id="type" name="type" defaultValue="" className={`${field} mt-2`}>
                  <option value="" disabled>
                    Choose an option
                  </option>
                  {ENQUIRY_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.type ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors.type}</p>
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelCls}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`${field} mt-2 resize-y`}
                  placeholder="How can we help?"
                />
                {errors.message ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
                ) : null}
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-navy-deep px-6 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-offwhite transition-all duration-300 hover:bg-royal"
              >
                <Send className="h-4 w-4" aria-hidden="true" /> Send Enquiry
              </button>
              <WhatsAppCta className="flex-1">Contact via WhatsApp</WhatsAppCta>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  const quick = NAV.filter((n) =>
    ["Home", "About", "Disciplines", "Sports & Events", "History", "Gallery", "Rules", "Contact"].includes(
      n.label,
    ),
  );

  return (
    <footer className="surface-navy relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--gold),transparent)]" />
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo.url}
                alt="Pencak Silat Sports Association of Telangana emblem"
                width={56}
                height={68}
                loading="lazy"
                className="h-14 w-auto"
              />
              <p className="font-display text-sm font-bold uppercase leading-tight tracking-[0.1em] text-offwhite">
                Pencak Silat Sports
                <br />
                <span className="text-gold">Association of Telangana</span>
              </p>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-offwhite/60">
              Promoting the art, sport and heritage of Pencak Silat across Telangana through
              training, competition and disciplined development.
            </p>
            <SocialIcons className="mt-6" />
          </div>

          <nav aria-label="Quick links">
            <p className="font-display text-[0.66rem] uppercase tracking-[0.24em] text-gold">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2">
              {quick.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-offwhite/65 transition-colors hover:text-gold"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Pencak Silat categories">
            <p className="font-display text-[0.66rem] uppercase tracking-[0.24em] text-gold">
              Pencak Silat
            </p>
            <ul className="mt-4 space-y-2">
              {["Tanding", "Tunggal", "Ganda", "Regu", "Solo Creative"].map((d) => (
                <li key={d}>
                  <a
                    href="#disciplines"
                    className="text-sm text-offwhite/65 transition-colors hover:text-gold"
                  >
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-[0.66rem] uppercase tracking-[0.24em] text-gold">
              Contact
            </p>
            <address className="mt-4 space-y-3 text-sm not-italic text-offwhite/65">
              <p className="leading-relaxed">{ORG.address.join(" ")}</p>
              <p>
                {ORG.phones.map((p, i) => (
                  <span key={p}>
                    {i > 0 ? " • " : ""}
                    <a href={`tel:+91${p}`} className="transition-colors hover:text-gold">
                      {p}
                    </a>
                  </span>
                ))}
              </p>
              <p>
                <a
                  href={`mailto:${ORG.email}`}
                  className="break-all transition-colors hover:text-gold"
                >
                  {ORG.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-offwhite/10 pt-6 text-center text-xs text-offwhite/45 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {ORG.name}. All Rights Reserved.</p>
          <p className="font-display uppercase tracking-[0.22em]">PSSATG • Telangana</p>
        </div>
      </div>
    </footer>
  );
}
