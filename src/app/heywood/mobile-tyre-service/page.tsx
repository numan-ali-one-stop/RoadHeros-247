import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  heywoodMobileTyreServiceClosingCta,
  heywoodMobileTyreServiceDescription,
  heywoodMobileTyreServiceFaqs,
  heywoodMobileTyreServiceFaqsTitle,
  heywoodMobileTyreServiceHero,
  heywoodMobileTyreServiceSections,
} from "@/lib/heywood-mobile-tyre-service-content";

const pageTitle = heywoodMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: heywoodMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: heywoodMobileTyreServiceDescription,
  },
};

export default function HeywoodMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={heywoodMobileTyreServiceHero.title}
        paragraphs={[heywoodMobileTyreServiceHero.tagline]}
        points={heywoodMobileTyreServiceHero.points}
        closingLine={heywoodMobileTyreServiceHero.closingLine}
        buttons={[]}
      />
      <ContentSections sections={heywoodMobileTyreServiceSections} />
      <FaqSection
        title={heywoodMobileTyreServiceFaqsTitle}
        faqs={heywoodMobileTyreServiceFaqs}
      />
      <CtaBand
        title={heywoodMobileTyreServiceClosingCta.title}
        subtitle={heywoodMobileTyreServiceClosingCta.paragraphs}
        showCallButton={false}
      />
    </>
  );
}
