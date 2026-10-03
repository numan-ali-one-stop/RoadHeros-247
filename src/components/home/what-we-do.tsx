import { Phone } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { homeWhatWeDo } from "@/lib/home-landing";
import { siteConfig } from "@/lib/site";

export function WhatWeDo() {
  return (
    <Section className="bg-secondary/40">
      <SectionHeading
        eyebrow="What We Do"
        title={homeWhatWeDo.title}
        align="center"
        className="mb-6"
      />
      <FadeIn className="mx-auto mb-10 flex max-w-2xl flex-col gap-3 text-center">
        {homeWhatWeDo.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}
      </FadeIn>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {homeWhatWeDo.locations.map((location, index) => (
          <FadeIn
            key={location.title}
            delay={index * 0.06}
            fullWidth
            className="border-border bg-card flex h-full flex-col gap-3 rounded-2xl border p-5 shadow-sm"
          >
            <div className="icon-chip flex size-11 items-center justify-center rounded-xl">
              <location.icon className="size-5" aria-hidden="true" />
            </div>
            <h3 className="font-heading text-lg font-semibold tracking-tight">
              {location.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {location.description}
            </p>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-5 text-center">
        <p className="text-foreground/80 leading-relaxed">
          {homeWhatWeDo.closing}
        </p>
        <Button
          size="lg"
          className="w-full sm:w-auto"
          render={<a href={siteConfig.phoneHref} />}
        >
          <Phone className="size-4" aria-hidden="true" />
          {homeWhatWeDo.cta}
        </Button>
      </FadeIn>
    </Section>
  );
}
