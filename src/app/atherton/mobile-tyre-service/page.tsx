import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  athertonMobileTyreServiceClosingCta,
  athertonMobileTyreServiceDescription,
  athertonMobileTyreServiceFaqs,
  athertonMobileTyreServiceFaqsTitle,
  athertonMobileTyreServiceHero,
  athertonMobileTyreServiceSections,
} from "@/lib/atherton-mobile-tyre-service-content";

const pageTitle = athertonMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: athertonMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: athertonMobileTyreServiceDescription,
  },
};

export default function AthertonMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={athertonMobileTyreServiceHero.title}
        paragraphs={[athertonMobileTyreServiceHero.tagline]}
        points={athertonMobileTyreServiceHero.points}
        closingLine={athertonMobileTyreServiceHero.closingLine}
        buttons={[]}
      />
      <ContentSections sections={athertonMobileTyreServiceSections} />
      <FaqSection
        title={athertonMobileTyreServiceFaqsTitle}
        faqs={athertonMobileTyreServiceFaqs}
      />
      <CtaBand
        title={athertonMobileTyreServiceClosingCta.title}
        subtitle={athertonMobileTyreServiceClosingCta.paragraphs}
        showCallButton={false}
      />
    </>
  );
}
