import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import type { ComponentType } from "react";
import { ORG, SOCIALS } from "@/data/site";
import { cn } from "@/lib/utils";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.656l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  instagram: Instagram,
  x: XIcon,
  facebook: Facebook,
  youtube: Youtube,
};

export function SocialIcons({
  className,
  variant = "dark",
  size = "md",
}: {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md";
}) {
  const items = [
    ...SOCIALS.map((s) => ({ ...s, Icon: ICONS[s.id] })),
    {
      id: "email",
      label: "Email",
      handle: ORG.email,
      url: `mailto:${ORG.email}`,
      Icon: Mail,
    },
  ];

  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {items.map(({ id, label, handle, url, Icon }) => (
        <li key={id}>
          <a
            href={url}
            target={url.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer noopener"
            aria-label={`${label} — ${handle}`}
            title={`${label} — ${handle}`}
            className={cn(
              "grid place-items-center rounded-sm border transition-colors duration-300",
              size === "sm" ? "h-8 w-8" : "h-10 w-10",
              variant === "dark"
                ? "border-offwhite/20 text-offwhite/75 hover:border-gold hover:text-gold"
                : "border-navy/15 text-navy hover:border-gold hover:bg-gold/10 hover:text-navy-deep",
            )}
          >
            {Icon ? <Icon className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} /> : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
