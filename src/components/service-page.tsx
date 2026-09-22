import { CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";

import { CtaBand } from "@/components/cta-band";
import { FadeIn } from "@/components/motion/fade-in";
import { FaqAccordion } from "@/components/faq-accordion";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/section-heading";
import { PageHero } from "@/components/page-hero";
import { ProcessSteps } from "@/components/process-steps";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";
import type { ServiceDetail } from "@/lib/services";

export function ServicePage({ service }: { service: ServiceDetail }) {
  return (
    <>
      <PageHero eyebrow="Service" title={service.name} subtitle={service.heroDescription}>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button size="lg" render={<a href={siteConfig.phoneHref} />}>
            <Phone className="size-4" aria-hidden="true" />
            Call {siteConfig.phone}
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={<Link href="/contact" />}
          >
            Get a free quote
          </Button>
        </div>
      </PageHero>

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <SectionHeading
              eyebrow="What's included"
              title="Everything covered in this callout"
              className="mb-8"
            />
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2
                    className="text-primary mt-0.5 size-4 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="bg-secondary/60 h-full border-dashed">
              <CardContent className="flex h-full flex-col gap-4">
                <h3 className="font-heading text-lg font-semibold tracking-tight">
                  Tools & technology we bring
                </h3>
                <div className="flex flex-col gap-4">
                  {service.tools.map((tool) => (
                    <div key={tool.name} className="flex items-start gap-3">
                      <span className="bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-lg">
                        <tool.icon className="size-4.5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-medium">{tool.name}</p>
                        <p className="text-muted-foreground text-xs leading-relaxed">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading
          eyebrow="How it works"
          title="From call to callout, four steps"
          align="center"
          className="mb-12"
        />
        <ProcessSteps steps={service.process} />
      </Section>

      <Section size="sm">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions about this service"
            subtitle="Can't find what you need? Give us a call and we'll talk you through it."
          />
          <FaqAccordion faqs={service.faqs} />
        </div>
      </Section>

      <CtaBand
        title={`Need ${service.name.toLowerCase()} right now?`}
        subtitle="Tell us where you are and we'll get a fitter moving straight away."
      />
    </>
  );
}
