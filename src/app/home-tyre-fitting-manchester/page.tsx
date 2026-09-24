import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  homeTyreFittingClosingCta,
  homeTyreFittingDescription,
  homeTyreFittingFaqs,
  homeTyreFittingFaqsTitle,
  homeTyreFittingFinalCta,
  homeTyreFittingHero,
  homeTyreFittingSections,
} from "@/lib/home-tyre-fitting-content";
import { siteConfig } from "@/lib/site";

const pageTitle = homeTyreFittingHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: homeTyreFittingDescription,
  openGraph: {
    title: pageTitle,
    description: homeTyreFittingDescription,
  },
};

export default function HomeTyreFittingManchesterPage() {
  return (
    <>
      <LandingHero
        badge={homeTyreFittingHero.badge}
        title={homeTyreFittingHero.title}
        paragraphs={[homeTyreFittingHero.tagline]}
        points={homeTyreFittingHero.points}
        buttons={[
          { label: homeTyreFittingHero.primaryCta, href: "/contact" },
          {
            label: homeTyreFittingHero.secondaryCta,
            href: siteConfig.phoneHref,
            variant: "outline",
          },
        ]}
      />
      <ContentSections sections={homeTyreFittingSections} />
      <CtaBand
        title={homeTyreFittingFinalCta.title}
        subtitle={homeTyreFittingFinalCta.paragraphs}
        points={homeTyreFittingFinalCta.points}
        primaryCta={{ label: homeTyreFittingFinalCta.cta, href: "/contact" }}
      />
      <FaqSection
        title={homeTyreFittingFaqsTitle}
        faqs={homeTyreFittingFaqs}
      />
      <CtaBand
        title={homeTyreFittingClosingCta.title}
        subtitle={homeTyreFittingClosingCta.paragraphs}
        primaryCta={{ label: homeTyreFittingClosingCta.cta, href: "/contact" }}
      />
    </>
  );
}
