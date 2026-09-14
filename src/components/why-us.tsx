import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/section-heading";
import { whyUsFeatures } from "@/lib/content";

export function WhyUs() {
  return (
    <Section className="bg-secondary/40">
      <SectionHeading
        eyebrow="Why RoadHeros"
        title="Roadside help that actually shows up"
        subtitle="We built the business we wished existed the night our own founder was stranded with a flat and no answer on the phone."
        align="center"
        className="mb-12"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whyUsFeatures.map((feature, index) => (
          <FadeIn
            key={feature.title}
            delay={index * 0.08}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6"
          >
            <div className="bg-primary/10 text-primary flex size-11 items-center justify-center rounded-xl">
              <feature.icon className="size-5" aria-hidden="true" />
            </div>
            <h3 className="font-heading text-base font-semibold tracking-tight">
              {feature.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {feature.description}
            </p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
