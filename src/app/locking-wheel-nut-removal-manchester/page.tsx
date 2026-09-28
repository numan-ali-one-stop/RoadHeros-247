import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  lockingWheelNutClosingCta,
  lockingWheelNutDescription,
  lockingWheelNutFaqs,
  lockingWheelNutFaqsTitle,
  lockingWheelNutHero,
  lockingWheelNutSections,
} from "@/lib/locking-wheel-nut-content";

const pageTitle = lockingWheelNutHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: lockingWheelNutDescription,
  openGraph: {
    title: pageTitle,
    description: lockingWheelNutDescription,
  },
};

export default function LockingWheelNutRemovalManchesterPage() {
  return (
    <>
      <LandingHero
        title={lockingWheelNutHero.title}
        paragraphs={[lockingWheelNutHero.tagline]}
        points={lockingWheelNutHero.points}
        buttons={[{ label: lockingWheelNutHero.cta, href: "/contact" }]}
      />
      <ContentSections sections={lockingWheelNutSections} />
      <FaqSection
        title={lockingWheelNutFaqsTitle}
        faqs={lockingWheelNutFaqs}
      />
      <CtaBand
        title={lockingWheelNutClosingCta.title}
        subtitle={lockingWheelNutClosingCta.paragraphs}
        primaryCta={{ label: lockingWheelNutClosingCta.cta, href: "/contact" }}
        showCallButton={false}
      />
    </>
  );
}
