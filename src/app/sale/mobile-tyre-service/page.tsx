import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  saleMobileTyreServiceClosingCta,
  saleMobileTyreServiceDescription,
  saleMobileTyreServiceFaqs,
  saleMobileTyreServiceFaqsTitle,
  saleMobileTyreServiceHero,
  saleMobileTyreServiceSections,
} from "@/lib/sale-mobile-tyre-service-content";

const pageTitle = saleMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: saleMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: saleMobileTyreServiceDescription,
  },
};

export default function SaleMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={saleMobileTyreServiceHero.title}
        paragraphs={[saleMobileTyreServiceHero.tagline]}
        points={saleMobileTyreServiceHero.points}
        closingLine={saleMobileTyreServiceHero.closingLine}
        buttons={[]}
      />
      <ContentSections sections={saleMobileTyreServiceSections} />
      <FaqSection
        title={saleMobileTyreServiceFaqsTitle}
        faqs={saleMobileTyreServiceFaqs}
      />
      <CtaBand
        title={saleMobileTyreServiceClosingCta.title}
        subtitle={saleMobileTyreServiceClosingCta.paragraphs}
        showCallButton={false}
      />
    </>
  );
}
