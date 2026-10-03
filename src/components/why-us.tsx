import { Phone } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { whyUsCta, whyUsFeatures, whyUsTitle } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function WhyUs() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why Road Heroes 247"
        title={whyUsTitle}
        align="center"
        className="mb-12"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyUsFeatures.map((feature, index) => (
          <FadeIn
            key={feature.title}
            delay={index * 0.06}
            className="border-border bg-card hover:border-brand-500/40 hover:shadow-brand-500/10 flex items-start gap-4 rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="icon-chip flex size-11 shrink-0 items-center justify-center rounded-xl">
              <feature.icon className="size-5" aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-heading text-base font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn className="mt-10 flex justify-center">
        <Button
          size="lg"
          className="w-full sm:w-auto"
          render={<a href={siteConfig.phoneHref} />}
        >
          <Phone className="size-4" aria-hidden="true" />
          {whyUsCta}
        </Button>
      </FadeIn>
    </Section>
  );
}
