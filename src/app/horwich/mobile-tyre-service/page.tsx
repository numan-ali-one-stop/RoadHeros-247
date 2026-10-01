import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  horwichMobileTyreServiceClosingCta,
  horwichMobileTyreServiceDescription,
  horwichMobileTyreServiceFaqs,
  horwichMobileTyreServiceFaqsTitle,
  horwichMobileTyreServiceHero,
  horwichMobileTyreServiceSections,
} from "@/lib/horwich-mobile-tyre-service-content";

const pageTitle = horwichMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: horwichMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: horwichMobileTyreServiceDescription,
  },
};

export default function HorwichMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={horwichMobileTyreServiceHero.title}
        paragraphs={[horwichMobileTyreServiceHero.tagline]}
        points={horwichMobileTyreServiceHero.points}
        closingLine={horwichMobileTyreServiceHero.closingLine}
        buttons={[]}
      />
      <ContentSections sections={horwichMobileTyreServiceSections} />
      <FaqSection
        title={horwichMobileTyreServiceFaqsTitle}
        faqs={horwichMobileTyreServiceFaqs}
      />
      <CtaBand
        title={horwichMobileTyreServiceClosingCta.title}
        subtitle={horwichMobileTyreServiceClosingCta.paragraphs}
        showCallButton={false}
      />
    </>
  );
}
