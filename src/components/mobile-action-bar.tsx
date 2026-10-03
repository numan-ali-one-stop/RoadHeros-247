import { CalendarCheck, Phone } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/lib/site";

/** Fixed CALL NOW | BOOK NOW bar on phones, so the emergency actions are always one tap away. */
export function MobileActionBar() {
  return (
    <nav
      aria-label="Quick contact"
      className="border-border bg-background/95 fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden"
    >
      <a
        href={siteConfig.phoneHref}
        className="bg-primary text-primary-foreground flex h-12 items-center justify-center gap-2 rounded-xl text-sm font-bold tracking-wide"
      >
        <Phone className="size-4" aria-hidden="true" />
        CALL NOW
      </a>
      <Link
        href="/contact"
        className="border-border bg-card text-foreground flex h-12 items-center justify-center gap-2 rounded-xl border text-sm font-bold tracking-wide"
      >
        <CalendarCheck className="size-4" aria-hidden="true" />
        BOOK NOW
      </Link>
    </nav>
  );
}
