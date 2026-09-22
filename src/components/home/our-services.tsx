import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/section-heading";
import { homeServices } from "@/lib/home-landing";

export function OurServices() {
  return (
    <Section>
      <SectionHeading
        eyebrow="What we do"
        title="Our Mobile Tyre Services"
        subtitle="Whatever's stopped you, one call gets a fully-equipped mobile fitter heading your way."
        align="center"
        className="mb-12"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {homeServices.map((service, index) => (
          <FadeIn
            key={service.title}
            delay={index * 0.08}
            fullWidth
            className="border-border bg-card flex h-full flex-col gap-4 rounded-2xl border p-6"
          >
            <div className="bg-primary/10 text-primary flex size-11 items-center justify-center rounded-xl">
              <service.icon className="size-5" aria-hidden="true" />
            </div>
            <h3 className="font-heading text-lg font-semibold tracking-tight">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
