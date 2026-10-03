import { MapPin } from "lucide-react";
import Link from "next/link";
import { cn } from "cn";

const chipClassName =
  "bg-card border-border inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium shadow-sm";

/** A row of place names; each links to its page when `href` is set. */
export function PlaceChips({
  places,
}: {
  places: { name: string; href?: string }[];
}) {
  return (
    <ul className="flex flex-wrap justify-center gap-2.5">
      {places.map((place) => (
        <li key={place.name}>
          {place.href ? (
            <Link
              href={place.href}
              className={cn(
                chipClassName,
                "text-primary hover:border-brand-500/50 hover:bg-primary/5 transition-colors",
              )}
            >
              <MapPin className="size-3.5" aria-hidden="true" />
              {place.name}
            </Link>
          ) : (
            <span className={cn(chipClassName, "text-foreground/85")}>
              <MapPin className="text-primary size-3.5" aria-hidden="true" />
              {place.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
