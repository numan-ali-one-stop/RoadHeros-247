import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  rochdaleMobileTyreServiceClosingCta,
  rochdaleMobileTyreServiceDescription,
  rochdaleMobileTyreServiceFaqs,
  rochdaleMobileTyreServiceFaqsTitle,
  rochdaleMobileTyreServiceHero,
  rochdaleMobileTyreServiceSections,
} from "@/lib/rochdale-mobile-tyre-service-content";

const pageTitle = rochdaleMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: rochdaleMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: rochdaleMobileTyreServiceDescription,
  },
};

export default function RochdaleMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={rochdaleMobileTyreServiceHero.title}
        paragraphs={[rochdaleMobileTyreServiceHero.tagline]}
        points={rochdaleMobileTyreServiceHero.points}
        closingLine={rochdaleMobileTyreServiceHero.closingLine}
        buttons={[]}
      />
      <ContentSections sections={rochdaleMobileTyreServiceSections} />
      <FaqSection
        title={rochdaleMobileTyreServiceFaqsTitle}
        faqs={rochdaleMobileTyreServiceFaqs}
      />
      <CtaBand
        title={rochdaleMobileTyreServiceClosingCta.title}
        subtitle={rochdaleMobileTyreServiceClosingCta.paragraphs}
        showCallButton={false}
      />
    </>
  );
}
