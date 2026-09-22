import { CheckCircle2, Phone } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { aboutFinalCta } from "@/lib/about-content";
import { siteConfig } from "@/lib/site";

export function AboutFinalCta() {
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
              {aboutFinalCta.title}
            </h2>
            <p className="text-secondary-foreground/70 text-balance">
              {aboutFinalCta.intro}
            </p>

            <ul className="flex flex-col gap-2.5 text-left sm:items-center">
              {aboutFinalCta.points.map((point) => (
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

            <div className="flex flex-col items-center gap-2 pt-2">
              <span className="text-secondary-foreground/50 text-xs font-semibold tracking-[0.18em] uppercase">
                {aboutFinalCta.callLabel}
              </span>
              <a
                href={siteConfig.phoneHref}
                className="bg-primary text-primary-foreground hover:bg-primary/80 inline-flex items-center gap-2 rounded-full px-6 py-3 text-lg font-semibold transition-colors"
              >
                <Phone className="size-5" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </div>

            <p className="text-secondary-foreground/50 text-balance text-sm">
              {aboutFinalCta.closingLine}
            </p>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
