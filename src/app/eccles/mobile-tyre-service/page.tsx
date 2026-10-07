import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  ecclesMobileTyreServiceClosingCta,
  ecclesMobileTyreServiceDescription,
  ecclesMobileTyreServiceFaqs,
  ecclesMobileTyreServiceFaqsTitle,
  ecclesMobileTyreServiceHero,
  ecclesMobileTyreServiceSections,
} from "@/lib/eccles-mobile-tyre-service-content";

const pageTitle = ecclesMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: ecclesMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: ecclesMobileTyreServiceDescription,
  },
};

export default function EcclesMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={ecclesMobileTyreServiceHero.title}
        paragraphs={[ecclesMobileTyreServiceHero.tagline]}
        points={ecclesMobileTyreServiceHero.points}
        closingLine={ecclesMobileTyreServiceHero.closingLine}
        buttons={[]}
      />
      <ContentSections sections={ecclesMobileTyreServiceSections} />
      <FaqSection
        title={ecclesMobileTyreServiceFaqsTitle}
        faqs={ecclesMobileTyreServiceFaqs}
      />
      <CtaBand
        title={ecclesMobileTyreServiceClosingCta.title}
        subtitle={ecclesMobileTyreServiceClosingCta.paragraphs}
        showCallButton={false}
      />
    </>
  );
}
