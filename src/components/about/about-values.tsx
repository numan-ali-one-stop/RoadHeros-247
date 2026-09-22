import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/section-heading";
import { aboutValues, aboutValuesIntro } from "@/lib/about-content";

export function AboutValues() {
  return (
    <Section className="bg-secondary/40">
      <SectionHeading
        eyebrow="Our Values"
        title={aboutValuesIntro}
        align="center"
        className="mb-12"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {aboutValues.map((value, index) => (
          <FadeIn
            key={value.title}
            delay={index * 0.08}
            className="border-border bg-card flex flex-col gap-3 rounded-2xl border p-6"
          >
            <div className="bg-primary/10 text-primary flex size-11 items-center justify-center rounded-xl">
              <value.icon className="size-5" aria-hidden="true" />
            </div>
            <h3 className="font-heading text-base font-semibold tracking-tight">
              {value.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {value.description}
            </p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
