import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  farnworthMobileTyreServiceClosingCta,
  farnworthMobileTyreServiceDescription,
  farnworthMobileTyreServiceFaqs,
  farnworthMobileTyreServiceFaqsTitle,
  farnworthMobileTyreServiceHero,
  farnworthMobileTyreServiceSections,
} from "@/lib/farnworth-mobile-tyre-service-content";

const pageTitle = farnworthMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: farnworthMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: farnworthMobileTyreServiceDescription,
  },
};

export default function FarnworthMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={farnworthMobileTyreServiceHero.title}
        paragraphs={[farnworthMobileTyreServiceHero.tagline]}
        points={farnworthMobileTyreServiceHero.points}
        closingLine={farnworthMobileTyreServiceHero.closingLine}
        buttons={[]}
      />
      <ContentSections sections={farnworthMobileTyreServiceSections} />
      <FaqSection
        title={farnworthMobileTyreServiceFaqsTitle}
        faqs={farnworthMobileTyreServiceFaqs}
      />
      <CtaBand
        title={farnworthMobileTyreServiceClosingCta.title}
        subtitle={farnworthMobileTyreServiceClosingCta.paragraphs}
        showCallButton={false}
      />
    </>
  );
}
