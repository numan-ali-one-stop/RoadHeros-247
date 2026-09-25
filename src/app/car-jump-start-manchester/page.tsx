import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  carJumpStartClosingCta,
  carJumpStartDescription,
  carJumpStartFaqs,
  carJumpStartFaqsTitle,
  carJumpStartFinalCta,
  carJumpStartHero,
  carJumpStartSections,
} from "@/lib/car-jump-start-content";
import { siteConfig } from "@/lib/site";

const pageTitle = carJumpStartHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: carJumpStartDescription,
  openGraph: {
    title: pageTitle,
    description: carJumpStartDescription,
  },
};

export default function CarJumpStartManchesterPage() {
  return (
    <>
      <LandingHero
        badge={carJumpStartHero.badge}
        title={carJumpStartHero.title}
        paragraphs={[carJumpStartHero.tagline]}
        points={carJumpStartHero.points}
        buttons={[
          { label: carJumpStartHero.primaryCta, href: "/contact" },
          {
            label: carJumpStartHero.secondaryCta,
            href: siteConfig.phoneHref,
            variant: "outline",
          },
        ]}
      />
      <ContentSections sections={carJumpStartSections} />
      <CtaBand
        title={carJumpStartFinalCta.title}
        subtitle={carJumpStartFinalCta.paragraphs}
        points={carJumpStartFinalCta.points}
        primaryCta={{ label: carJumpStartFinalCta.cta, href: "/contact" }}
      />
      <FaqSection title={carJumpStartFaqsTitle} faqs={carJumpStartFaqs} />
      <CtaBand
        title={carJumpStartClosingCta.title}
        subtitle={carJumpStartClosingCta.paragraphs}
        primaryCta={{ label: carJumpStartClosingCta.cta, href: "/contact" }}
      />
    </>
  );
}
