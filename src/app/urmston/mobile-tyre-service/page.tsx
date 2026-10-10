import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  urmstonMobileTyreServiceClosingCta,
  urmstonMobileTyreServiceDescription,
  urmstonMobileTyreServiceFaqs,
  urmstonMobileTyreServiceFaqsTitle,
  urmstonMobileTyreServiceHero,
  urmstonMobileTyreServiceSections,
} from "@/lib/urmston-mobile-tyre-service-content";

const pageTitle = urmstonMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: urmstonMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: urmstonMobileTyreServiceDescription,
  },
};

export default function UrmstonMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={urmstonMobileTyreServiceHero.title}
        paragraphs={[urmstonMobileTyreServiceHero.tagline]}
        points={urmstonMobileTyreServiceHero.points}
        closingLine={urmstonMobileTyreServiceHero.closingLine}
        buttons={[]}
      />
      <ContentSections sections={urmstonMobileTyreServiceSections} />
      <FaqSection
        title={urmstonMobileTyreServiceFaqsTitle}
        faqs={urmstonMobileTyreServiceFaqs}
      />
      <CtaBand
        title={urmstonMobileTyreServiceClosingCta.title}
        subtitle={urmstonMobileTyreServiceClosingCta.paragraphs}
        showCallButton={false}
      />
    </>
  );
}
