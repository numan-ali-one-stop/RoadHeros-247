import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  altrinchamMobileTyreServiceClosingCta,
  altrinchamMobileTyreServiceDescription,
  altrinchamMobileTyreServiceFaqs,
  altrinchamMobileTyreServiceFaqsTitle,
  altrinchamMobileTyreServiceHero,
  altrinchamMobileTyreServiceSections,
} from "@/lib/altrincham-mobile-tyre-service-content";

const pageTitle = altrinchamMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: altrinchamMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: altrinchamMobileTyreServiceDescription,
  },
};

export default function AltrinchamMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={altrinchamMobileTyreServiceHero.title}
        paragraphs={[altrinchamMobileTyreServiceHero.tagline]}
        points={altrinchamMobileTyreServiceHero.points}
        closingLine={altrinchamMobileTyreServiceHero.closingLine}
        buttons={[]}
      />
      <ContentSections sections={altrinchamMobileTyreServiceSections} />
      <FaqSection
        title={altrinchamMobileTyreServiceFaqsTitle}
        faqs={altrinchamMobileTyreServiceFaqs}
      />
      <CtaBand
        title={altrinchamMobileTyreServiceClosingCta.title}
        subtitle={altrinchamMobileTyreServiceClosingCta.paragraphs}
        showCallButton={false}
      />
    </>
  );
}
