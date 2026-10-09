import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  traffordMobileTyreServiceClosingCta,
  traffordMobileTyreServiceDescription,
  traffordMobileTyreServiceFaqs,
  traffordMobileTyreServiceFaqsTitle,
  traffordMobileTyreServiceHero,
  traffordMobileTyreServiceSections,
} from "@/lib/trafford-mobile-tyre-service-content";

const pageTitle = traffordMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: traffordMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: traffordMobileTyreServiceDescription,
  },
};

export default function TraffordMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={traffordMobileTyreServiceHero.title}
        paragraphs={[traffordMobileTyreServiceHero.tagline]}
        points={traffordMobileTyreServiceHero.points}
        closingLine={traffordMobileTyreServiceHero.closingLine}
        buttons={[]}
      />
      <ContentSections sections={traffordMobileTyreServiceSections} />
      <FaqSection
        title={traffordMobileTyreServiceFaqsTitle}
        faqs={traffordMobileTyreServiceFaqs}
      />
      <CtaBand
        title={traffordMobileTyreServiceClosingCta.title}
        subtitle={traffordMobileTyreServiceClosingCta.paragraphs}
        showCallButton={false}
      />
    </>
  );
}
