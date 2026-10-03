import { Phone, TriangleAlert } from "lucide-react";

import { PlaceChips } from "@/components/home/place-chips";
import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { homeMotorways } from "@/lib/home-landing";
import { hasPage, serviceAreas } from "@/lib/service-areas";
import { siteConfig } from "@/lib/site";

const motorwayPages = serviceAreas.find(
  (area) => area.slug === "motorways-roads",
)?.locations;

const routes = homeMotorways.routes.map((name) => {
  const href = motorwayPages?.find((route) => route.name === name)?.href;
  return { name, href: hasPage(href) ? href : undefined };
});

export function MotorwayAssistance() {
  return (
    <Section>
      <SectionHeading
        eyebrow={homeMotorways.eyebrow}
        title={homeMotorways.title}
        subtitle={homeMotorways.intro}
        align="center"
        className="mb-10"
      />

      <FadeIn className="mx-auto flex max-w-4xl flex-col items-center gap-6">
        <h3 className="font-heading text-lg font-semibold tracking-tight">
          {homeMotorways.listTitle}
        </h3>
        <PlaceChips places={routes} />
        <div className="border-primary/30 bg-primary/5 flex max-w-2xl items-start gap-3 rounded-xl border px-4 py-3.5">
          <TriangleAlert
            className="text-primary mt-0.5 size-4.5 shrink-0"
            aria-hidden="true"
          />
          <p className="text-foreground/85 text-sm leading-relaxed">
            {homeMotorways.safety}
          </p>
        </div>
        <Button
          size="lg"
          className="w-full sm:w-auto"
          render={<a href={siteConfig.phoneHref} />}
        >
          <Phone className="size-4" aria-hidden="true" />
          {homeMotorways.cta}
        </Button>
      </FadeIn>
    </Section>
  );
}
