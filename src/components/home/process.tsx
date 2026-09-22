import { Section } from "@/components/layout/section";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";
import { homeProcessSteps } from "@/lib/home-landing";

export function Process() {
  return (
    <Section className="bg-secondary/40">
      <SectionHeading
        eyebrow="How it works"
        title="Simple Mobile Tyre Service Process"
        align="center"
        className="mb-12"
      />
      <ProcessSteps steps={homeProcessSteps} />
    </Section>
  );
}
