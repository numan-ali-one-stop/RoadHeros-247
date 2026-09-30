import { Mail, Phone } from "lucide-react";
import { cn } from "cn";

import { siteConfig } from "@/lib/site";

const contactMention = /\b(contact|call|get in touch)\b/i;

/** True when any of the given copy asks the reader to contact or call us. */
export function mentionsContact(...texts: (string | undefined)[]): boolean {
  return texts.some((text) => text !== undefined && contactMention.test(text));
}

/** Clickable phone number and email, shown wherever the copy asks people to get in touch. */
export function ContactDetails({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium",
        className,
      )}
    >
      <a
        href={siteConfig.phoneHref}
        className="inline-flex items-center gap-1.5 hover:underline"
      >
        <Phone className="text-primary size-4 shrink-0" aria-hidden="true" />
        {siteConfig.phone}
      </a>
      <a
        href={`mailto:${siteConfig.email}`}
        className="inline-flex items-center gap-1.5 break-all hover:underline"
      >
        <Mail className="text-primary size-4 shrink-0" aria-hidden="true" />
        {siteConfig.email}
      </a>
    </p>
  );
}
