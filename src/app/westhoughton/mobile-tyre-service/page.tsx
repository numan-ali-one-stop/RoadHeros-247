import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  westhoughtonMobileTyreServiceClosingCta,
  westhoughtonMobileTyreServiceDescription,
  westhoughtonMobileTyreServiceFaqs,
  westhoughtonMobileTyreServiceFaqsTitle,
  westhoughtonMobileTyreServiceHero,
  westhoughtonMobileTyreServiceSections,
} from "@/lib/westhoughton-mobile-tyre-service-content";

const pageTitle = westhoughtonMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: westhoughtonMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: westhoughtonMobileTyreServiceDescription,
  },
};

export default function WesthoughtonMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={westhoughtonMobileTyreServiceHero.title}
        paragraphs={[westhoughtonMobileTyreServiceHero.tagline]}
        points={westhoughtonMobileTyreServiceHero.points}
        closingLine={westhoughtonMobileTyreServiceHero.closingLine}
        buttons={[]}
      />
      <ContentSections sections={westhoughtonMobileTyreServiceSections} />
      <FaqSection
        title={westhoughtonMobileTyreServiceFaqsTitle}
        faqs={westhoughtonMobileTyreServiceFaqs}
      />
      <CtaBand
        title={westhoughtonMobileTyreServiceClosingCta.title}
        subtitle={westhoughtonMobileTyreServiceClosingCta.paragraphs}
        showCallButton={false}
      />
    </>
  );
}
