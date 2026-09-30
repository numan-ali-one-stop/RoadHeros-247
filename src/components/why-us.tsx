import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/section-heading";
import { whyUsFeatures, whyUsIntro } from "@/lib/content";

export function WhyUs() {
  return (
    <Section className="bg-secondary/40">
      <SectionHeading
        eyebrow="Why Road Heroes 24/7"
        title="Why Choose Road Heroes 24/7?"
        subtitle={whyUsIntro}
        align="center"
        className="mb-12"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyUsFeatures.map((feature, index) => (
          <FadeIn
            key={feature.title}
            delay={index * 0.08}
            className="border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/40 hover:shadow-lg hover:shadow-brand-500/10 flex flex-col gap-3 rounded-2xl border p-6"
          >
            <div className="icon-chip flex size-11 items-center justify-center rounded-xl">
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
