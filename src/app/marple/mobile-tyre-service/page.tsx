import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  marpleMobileTyreServiceClosingCta,
  marpleMobileTyreServiceDescription,
  marpleMobileTyreServiceFaqs,
  marpleMobileTyreServiceFaqsTitle,
  marpleMobileTyreServiceHero,
  marpleMobileTyreServiceSections,
} from "@/lib/marple-mobile-tyre-service-content";

const pageTitle = marpleMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: marpleMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: marpleMobileTyreServiceDescription,
  },
};

export default function MarpleMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={marpleMobileTyreServiceHero.title}
        paragraphs={[marpleMobileTyreServiceHero.tagline]}
        points={marpleMobileTyreServiceHero.points}
        closingLine={marpleMobileTyreServiceHero.closingLine}
        buttons={[]}
      />
      <ContentSections sections={marpleMobileTyreServiceSections} />
      <FaqSection
        title={marpleMobileTyreServiceFaqsTitle}
        faqs={marpleMobileTyreServiceFaqs}
      />
      <CtaBand
        title={marpleMobileTyreServiceClosingCta.title}
        subtitle={marpleMobileTyreServiceClosingCta.paragraphs}
        showCallButton={false}
      />
    </>
  );
}
