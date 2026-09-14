import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { FadeIn } from "@/components/motion/fade-in";
import { Hero } from "@/components/home/hero";
import { Section } from "@/components/layout/section";
import { LogoStrip } from "@/components/logo-strip";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { StatsBand } from "@/components/stats-band";
import { Testimonials } from "@/components/testimonials";
import { WhyUs } from "@/components/why-us";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mobile Tyre Fitting & Roadside Assistance, 24/7",
  description:
    "RoadHeros 24/7 brings mobile tyre fitting, home tyre fitting, jump starts and locking nut removal straight to you, day or night.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />

      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Four ways we get you moving again"
          subtitle="Whatever's stopped you, one call gets a fully-equipped fitter heading your way."
          align="center"
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.08} fullWidth>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </Section>

      <WhyUs />
      <StatsBand />
      <Testimonials />
      <CtaBand />
    </>
  );
}
