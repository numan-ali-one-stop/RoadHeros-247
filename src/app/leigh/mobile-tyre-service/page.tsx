import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  leighMobileTyreServiceClosingCta,
  leighMobileTyreServiceDescription,
  leighMobileTyreServiceFaqs,
  leighMobileTyreServiceFaqsTitle,
  leighMobileTyreServiceHero,
  leighMobileTyreServiceSections,
} from "@/lib/leigh-mobile-tyre-service-content";

const pageTitle = leighMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: leighMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: leighMobileTyreServiceDescription,
  },
};

export default function LeighMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={leighMobileTyreServiceHero.title}
        paragraphs={[leighMobileTyreServiceHero.tagline]}
        points={leighMobileTyreServiceHero.points}
        closingLine={leighMobileTyreServiceHero.closingLine}
        buttons={[]}
      />
      <ContentSections sections={leighMobileTyreServiceSections} />
      <FaqSection
        title={leighMobileTyreServiceFaqsTitle}
        faqs={leighMobileTyreServiceFaqs}
      />
      <CtaBand
        title={leighMobileTyreServiceClosingCta.title}
        subtitle={leighMobileTyreServiceClosingCta.paragraphs}
        showCallButton={false}
      />
    </>
  );
}
