import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  tamesideMobileTyreServiceClosingCta,
  tamesideMobileTyreServiceDescription,
  tamesideMobileTyreServiceFaqs,
  tamesideMobileTyreServiceFaqsTitle,
  tamesideMobileTyreServiceHero,
  tamesideMobileTyreServiceSections,
} from "@/lib/tameside-mobile-tyre-service-content";

const pageTitle = tamesideMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: tamesideMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: tamesideMobileTyreServiceDescription,
  },
};

export default function TamesideMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={tamesideMobileTyreServiceHero.title}
        paragraphs={[tamesideMobileTyreServiceHero.tagline]}
        points={tamesideMobileTyreServiceHero.points}
        closingLine={tamesideMobileTyreServiceHero.closingLine}
        buttons={[]}
      />
      <ContentSections sections={tamesideMobileTyreServiceSections} />
      <FaqSection
        title={tamesideMobileTyreServiceFaqsTitle}
        faqs={tamesideMobileTyreServiceFaqs}
      />
      <CtaBand
        title={tamesideMobileTyreServiceClosingCta.title}
        subtitle={tamesideMobileTyreServiceClosingCta.paragraphs}
        showCallButton={false}
      />
    </>
  );
}
