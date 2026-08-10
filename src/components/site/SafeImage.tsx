import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

type SafeImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

/** Image that renders a subtle premium placeholder instead of a broken-image icon. */
export function SafeImage({ src, alt, className, ...rest }: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "grid place-items-center gap-2 bg-navy-deep/90 text-center",
          className,
        )}
      >
        <ImageOff className="h-6 w-6 text-gold/70" aria-hidden="true" />
        <span className="font-display text-[0.6rem] uppercase tracking-[0.22em] text-offwhite/60">
          Image unavailable
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
