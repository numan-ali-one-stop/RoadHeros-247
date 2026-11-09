import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  m6MobileTyreServiceClosingCta,
  m6MobileTyreServiceDescription,
  m6MobileTyreServiceFaqs,
  m6MobileTyreServiceFaqsTitle,
  m6MobileTyreServiceHero,
  m6MobileTyreServiceSections,
} from "@/lib/m6-mobile-tyre-service-content";

const pageTitle = m6MobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: m6MobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: m6MobileTyreServiceDescription,
  },
};

export default function M6MobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={m6MobileTyreServiceHero.title}
        paragraphs={[m6MobileTyreServiceHero.tagline]}
        points={m6MobileTyreServiceHero.points}
        closingLine={m6MobileTyreServiceHero.closingLine}
        buttons={[]}
      />
      <ContentSections sections={m6MobileTyreServiceSections} />
      <FaqSection
        title={m6MobileTyreServiceFaqsTitle}
        faqs={m6MobileTyreServiceFaqs}
      />
      <CtaBand
        title={m6MobileTyreServiceClosingCta.title}
        subtitle={m6MobileTyreServiceClosingCta.paragraphs}
        showCallButton={false}
      />
    </>
  );
}
