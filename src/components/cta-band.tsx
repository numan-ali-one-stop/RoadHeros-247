import { CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";

import { ContactDetails } from "@/components/contact-details";
import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

type CtaBandProps = {
  /** Small line shown above the title. */
  eyebrow?: string;
  title?: string;
  subtitle?: string | string[];
  points?: string[];
  primaryCta?: { label: string; href: string };
  showCallButton?: boolean;
  /** Label for the call button; defaults to "Call {phone}". */
  callLabel?: string;
  /** Second button when there is no primaryCta; defaults to "Get a free quote". */
  secondaryCta?: { label: string; href: string };
};

export function CtaBand({
  eyebrow,
  title = "Stuck right now? We're already on our way.",
  subtitle = "Call our 24/7 line for an instant quote, or book online in under two minutes.",
  points,
  primaryCta,
  showCallButton = true,
  callLabel = `Call ${siteConfig.phone}`,
  secondaryCta = { label: "Get a free quote", href: "/contact" },
}: CtaBandProps) {
  const paragraphs = Array.isArray(subtitle) ? subtitle : [subtitle];

  return (
    <Section size="sm">
      <FadeIn>
        <div className="theme-ink bg-secondary bg-grid-pattern-ink shadow-charcoal-950/15 relative overflow-hidden rounded-3xl px-6 py-14 text-center shadow-xl sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="bg-primary/25 pointer-events-none absolute -bottom-20 left-1/2 size-72 -translate-x-1/2 rounded-full blur-3xl"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            {eyebrow ? (
              <p className="text-primary text-sm font-semibold tracking-wide uppercase">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-secondary-foreground font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {title}
            </h2>
            <div className="flex flex-col gap-3">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-secondary-foreground/70 text-balance"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {points ? (
              <ul className="flex flex-col gap-2.5 text-left sm:items-center">
                {points.map((point) => (
                  <li
                    key={point}
                    className="text-secondary-foreground/80 flex items-start gap-2.5 text-sm"
                  >
                    <CheckCircle2
                      className="text-primary mt-0.5 size-4 shrink-0"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}
            {primaryCta || showCallButton ? (
              <div className="flex flex-col gap-3 sm:flex-row">
                {primaryCta ? (
                  <>
                    <Button size="lg" render={<Link href={primaryCta.href} />}>
                      {primaryCta.label}
                    </Button>
                    {showCallButton ? (
                      <Button
                        size="lg"
                        variant="outline"
                        render={<a href={siteConfig.phoneHref} />}
                      >
                        <Phone className="size-4" aria-hidden="true" />
                        {callLabel}
                      </Button>
                    ) : null}
                  </>
                ) : (
                  <>
                    <Button
                      size="lg"
                      render={<a href={siteConfig.phoneHref} />}
                    >
                      <Phone className="size-4" aria-hidden="true" />
                      {callLabel}
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      render={<Link href={secondaryCta.href} />}
                    >
                      {secondaryCta.label}
                    </Button>
                  </>
                )}
              </div>
            ) : null}
            <ContactDetails className="text-secondary-foreground justify-center" />
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
