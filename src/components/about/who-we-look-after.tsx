import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/section-heading";
import { whoWeLookAfter, whoWeLookAfterTitle } from "@/lib/about-content";

export function WhoWeLookAfter() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Who We Help"
        title={whoWeLookAfterTitle}
        align="center"
        className="mb-12"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {whoWeLookAfter.map((audience, index) => (
          <FadeIn
            key={audience.title}
            delay={index * 0.08}
            className="border-border bg-card flex flex-col gap-3 rounded-2xl border p-6"
          >
            <div className="bg-primary/10 text-primary flex size-11 items-center justify-center rounded-xl">
              <audience.icon className="size-5" aria-hidden="true" />
            </div>
            <h3 className="font-heading text-base font-semibold tracking-tight">
              {audience.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {audience.description}
            </p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
