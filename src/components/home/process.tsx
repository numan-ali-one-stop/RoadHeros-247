import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import {
  homeProcessCta,
  homeProcessSteps,
  homeProcessTitle,
} from "@/lib/home-landing";

export function Process() {
  return (
    <Section className="bg-secondary/40">
      <SectionHeading
        eyebrow="How It Works"
        title={homeProcessTitle}
        align="center"
        className="mb-12"
      />
      <ProcessSteps steps={homeProcessSteps} />
      <FadeIn className="mt-10 flex justify-center">
        <Button
          size="lg"
          className="w-full sm:w-auto"
          render={<Link href="/contact" />}
        >
          {homeProcessCta}
        </Button>
      </FadeIn>
    </Section>
  );
}
