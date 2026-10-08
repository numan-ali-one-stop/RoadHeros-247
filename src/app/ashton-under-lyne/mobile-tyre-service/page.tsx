import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  ashtonUnderLyneMobileTyreServiceClosingCta,
  ashtonUnderLyneMobileTyreServiceDescription,
  ashtonUnderLyneMobileTyreServiceFaqs,
  ashtonUnderLyneMobileTyreServiceFaqsTitle,
  ashtonUnderLyneMobileTyreServiceHero,
  ashtonUnderLyneMobileTyreServiceSections,
} from "@/lib/ashton-under-lyne-mobile-tyre-service-content";

const pageTitle = ashtonUnderLyneMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: ashtonUnderLyneMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: ashtonUnderLyneMobileTyreServiceDescription,
  },
};

export default function AshtonUnderLyneMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={ashtonUnderLyneMobileTyreServiceHero.title}
        paragraphs={[ashtonUnderLyneMobileTyreServiceHero.tagline]}
        points={ashtonUnderLyneMobileTyreServiceHero.points}
        closingLine={ashtonUnderLyneMobileTyreServiceHero.closingLine}
        buttons={[]}
      />
      <ContentSections sections={ashtonUnderLyneMobileTyreServiceSections} />
      <FaqSection
        title={ashtonUnderLyneMobileTyreServiceFaqsTitle}
        faqs={ashtonUnderLyneMobileTyreServiceFaqs}
      />
      <CtaBand
        title={ashtonUnderLyneMobileTyreServiceClosingCta.title}
        subtitle={ashtonUnderLyneMobileTyreServiceClosingCta.paragraphs}
        showCallButton={false}
      />
    </>
  );
}
