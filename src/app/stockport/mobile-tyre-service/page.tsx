import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  stockportMobileTyreServiceClosingCta,
  stockportMobileTyreServiceDescription,
  stockportMobileTyreServiceFaqs,
  stockportMobileTyreServiceFaqsTitle,
  stockportMobileTyreServiceHero,
  stockportMobileTyreServiceSections,
} from "@/lib/stockport-mobile-tyre-service-content";

const pageTitle = stockportMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: stockportMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: stockportMobileTyreServiceDescription,
  },
};

export default function StockportMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={stockportMobileTyreServiceHero.title}
        paragraphs={[stockportMobileTyreServiceHero.tagline]}
        points={stockportMobileTyreServiceHero.points}
        closingLine={stockportMobileTyreServiceHero.closingLine}
        buttons={[]}
      />
      <ContentSections sections={stockportMobileTyreServiceSections} />
      <FaqSection
        title={stockportMobileTyreServiceFaqsTitle}
        faqs={stockportMobileTyreServiceFaqs}
      />
      <CtaBand
        title={stockportMobileTyreServiceClosingCta.title}
        subtitle={stockportMobileTyreServiceClosingCta.paragraphs}
        showCallButton={false}
      />
    </>
  );
}
