import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  middletonMobileTyreServiceClosingCta,
  middletonMobileTyreServiceDescription,
  middletonMobileTyreServiceFaqs,
  middletonMobileTyreServiceFaqsTitle,
  middletonMobileTyreServiceHero,
  middletonMobileTyreServiceSections,
} from "@/lib/middleton-mobile-tyre-service-content";

const pageTitle = middletonMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: middletonMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: middletonMobileTyreServiceDescription,
  },
};

export default function MiddletonMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={middletonMobileTyreServiceHero.title}
        paragraphs={[middletonMobileTyreServiceHero.tagline]}
        points={middletonMobileTyreServiceHero.points}
        closingLine={middletonMobileTyreServiceHero.closingLine}
        buttons={[]}
      />
      <ContentSections sections={middletonMobileTyreServiceSections} />
      <FaqSection
        title={middletonMobileTyreServiceFaqsTitle}
        faqs={middletonMobileTyreServiceFaqs}
      />
      <CtaBand
        title={middletonMobileTyreServiceClosingCta.title}
        subtitle={middletonMobileTyreServiceClosingCta.paragraphs}
        showCallButton={false}
      />
    </>
  );
}
