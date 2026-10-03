import Link from "next/link";

import { PlaceChips } from "@/components/home/place-chips";
import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { homeCoverage } from "@/lib/home-landing";
import { hasPage, serviceAreas } from "@/lib/service-areas";

const places = homeCoverage.areas.map((name) => {
  const href = serviceAreas.find((area) => area.name === name)?.href;
  return { name, href: hasPage(href) ? href : undefined };
});

export function AreasCovered() {
  return (
    <Section className="bg-secondary/40">
      <SectionHeading
        eyebrow={homeCoverage.eyebrow}
        title={homeCoverage.title}
        subtitle={homeCoverage.intro}
        align="center"
        className="mb-10"
      />

      <FadeIn className="mx-auto flex max-w-4xl flex-col items-center gap-6">
        <h3 className="font-heading text-lg font-semibold tracking-tight">
          {homeCoverage.listTitle}
        </h3>
        <PlaceChips places={places} />
        <p className="text-muted-foreground max-w-2xl text-center leading-relaxed">
          {homeCoverage.closing}
        </p>
        <Button
          size="lg"
          className="w-full sm:w-auto"
          render={<Link href="/contact" />}
        >
          {homeCoverage.cta}
        </Button>
      </FadeIn>
    </Section>
  );
}
