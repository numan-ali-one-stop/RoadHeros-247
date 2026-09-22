import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { areasCovered } from "@/lib/home-landing";

export function AreasCovered() {
  return (
    <Section className="bg-secondary/40">
      <SectionHeading
        eyebrow={areasCovered.eyebrow}
        title={areasCovered.title}
        subtitle={areasCovered.intro}
        align="center"
        className="mb-10"
      />

      <FadeIn className="mx-auto flex max-w-4xl flex-col items-center gap-6">
        <p className="text-foreground text-sm font-semibold">
          {areasCovered.listIntro}
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {areasCovered.areas.map((area) => (
            <Badge
              key={area}
              variant="secondary"
              className="h-auto px-3.5 py-1.5 text-sm font-medium"
            >
              {area}
            </Badge>
          ))}
        </div>
        <p className="text-muted-foreground max-w-2xl text-center leading-relaxed">
          If you are outside these areas,{" "}
          <Link href="/contact" className="text-primary font-medium underline-offset-4 hover:underline">
            contact Road Heroes 24/7
          </Link>{" "}
          with your location and tyre requirements to check service
          availability.
        </p>
      </FadeIn>
    </Section>
  );
}
