import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  oldhamMobileTyreServiceClosingCta,
  oldhamMobileTyreServiceDescription,
  oldhamMobileTyreServiceFaqs,
  oldhamMobileTyreServiceFaqsTitle,
  oldhamMobileTyreServiceHero,
  oldhamMobileTyreServiceSections,
} from "@/lib/oldham-mobile-tyre-service-content";

const pageTitle = oldhamMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: oldhamMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: oldhamMobileTyreServiceDescription,
  },
};

export default function OldhamMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={oldhamMobileTyreServiceHero.title}
        paragraphs={[oldhamMobileTyreServiceHero.tagline]}
        points={oldhamMobileTyreServiceHero.points}
        closingLine={oldhamMobileTyreServiceHero.closingLine}
        buttons={[]}
      />
      <ContentSections sections={oldhamMobileTyreServiceSections} />
      <FaqSection
        title={oldhamMobileTyreServiceFaqsTitle}
        faqs={oldhamMobileTyreServiceFaqs}
      />
      <CtaBand
        title={oldhamMobileTyreServiceClosingCta.title}
        subtitle={oldhamMobileTyreServiceClosingCta.paragraphs}
        showCallButton={false}
      />
    </>
  );
}
