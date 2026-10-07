import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  salfordMobileTyreServiceClosingCta,
  salfordMobileTyreServiceDescription,
  salfordMobileTyreServiceFaqs,
  salfordMobileTyreServiceFaqsTitle,
  salfordMobileTyreServiceHero,
  salfordMobileTyreServiceSections,
} from "@/lib/salford-mobile-tyre-service-content";

const pageTitle = salfordMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: salfordMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: salfordMobileTyreServiceDescription,
  },
};

export default function SalfordMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={salfordMobileTyreServiceHero.title}
        paragraphs={[salfordMobileTyreServiceHero.tagline]}
        points={salfordMobileTyreServiceHero.points}
        closingLine={salfordMobileTyreServiceHero.closingLine}
        buttons={[]}
      />
      <ContentSections sections={salfordMobileTyreServiceSections} />
      <FaqSection
        title={salfordMobileTyreServiceFaqsTitle}
        faqs={salfordMobileTyreServiceFaqs}
      />
      <CtaBand
        title={salfordMobileTyreServiceClosingCta.title}
        subtitle={salfordMobileTyreServiceClosingCta.paragraphs}
        showCallButton={false}
      />
    </>
  );
}
