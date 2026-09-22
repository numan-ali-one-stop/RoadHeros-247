import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { FadeIn } from "@/components/motion/fade-in";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mobile tyre fitting, home tyre fitting, jump starts and locking nut removal — 24/7 roadside assistance that comes to you.",
  openGraph: {
    title: "Services | Road Heroes 24/7",
    description:
      "Mobile tyre fitting, home tyre fitting, jump starts and locking nut removal — 24/7 roadside assistance that comes to you.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Roadside help for every kind of breakdown"
        subtitle="From a puncture on the motorway to a battery that won't hold charge, our fitters carry the stock and tools to sort it in one visit."
      />

      <Section>
        <SectionHeading
          eyebrow="What we offer"
          title="Pick the help you need"
          subtitle="Every job is quoted upfront and carried out by a fully insured, trained fitter."
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.08} fullWidth>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
