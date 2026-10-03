import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { homeServices, homeServicesTitle } from "@/lib/home-landing";

export function OurServices() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Our Services"
        title={homeServicesTitle}
        align="center"
        className="mb-12"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {homeServices.map((service, index) => (
          <FadeIn
            key={service.title}
            delay={index * 0.08}
            fullWidth
            className="border-border bg-card hover:border-brand-500/40 hover:shadow-brand-500/10 flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            {service.image ? (
              <div className="bg-muted relative aspect-4/3 overflow-hidden">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="bg-card text-primary absolute bottom-3 left-3 flex size-10 items-center justify-center rounded-xl shadow-md">
                  <service.icon className="size-5" aria-hidden="true" />
                </div>
              </div>
            ) : null}
            <div className="flex flex-1 flex-col gap-4 p-6">
              {service.image ? null : (
                <div className="icon-chip flex size-11 items-center justify-center rounded-xl">
                  <service.icon className="size-5" aria-hidden="true" />
                </div>
              )}
              <h3 className="font-heading text-lg font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground flex-1 text-sm leading-relaxed">
                {service.description}
              </p>
              <Button
                variant="outline"
                className="w-full"
                render={<Link href={service.href} />}
              >
                {service.buttonLabel}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
