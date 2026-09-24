import { CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

type CtaBandProps = {
  title?: string;
  subtitle?: string | string[];
  points?: string[];
  primaryCta?: { label: string; href: string };
};

export function CtaBand({
  title = "Stuck right now? We're already on our way.",
  subtitle = "Call our 24/7 line for an instant quote, or book online in under two minutes.",
  points,
  primaryCta,
}: CtaBandProps) {
  const paragraphs = Array.isArray(subtitle) ? subtitle : [subtitle];

  return (
    <Section size="sm">
      <FadeIn>
        <div className="bg-secondary bg-grid-pattern relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="bg-primary/25 pointer-events-none absolute -bottom-20 left-1/2 size-72 -translate-x-1/2 rounded-full blur-3xl"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
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
            <div className="flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <>
                  <Button size="lg" render={<Link href={primaryCta.href} />}>
                    {primaryCta.label}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    render={<a href={siteConfig.phoneHref} />}
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    Call {siteConfig.phone}
                  </Button>
                </>
              ) : (
                <>
                  <Button size="lg" render={<a href={siteConfig.phoneHref} />}>
                    <Phone className="size-4" aria-hidden="true" />
                    Call {siteConfig.phone}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    render={<Link href="/contact" />}
                  >
                    Get a free quote
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
