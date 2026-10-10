import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  wiganMobileTyreServiceClosingCta,
  wiganMobileTyreServiceDescription,
  wiganMobileTyreServiceFaqs,
  wiganMobileTyreServiceFaqsTitle,
  wiganMobileTyreServiceHero,
  wiganMobileTyreServiceSections,
} from "@/lib/wigan-mobile-tyre-service-content";

const pageTitle = wiganMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: wiganMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: wiganMobileTyreServiceDescription,
  },
};

export default function WiganMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={wiganMobileTyreServiceHero.title}
        paragraphs={[wiganMobileTyreServiceHero.tagline]}
        points={wiganMobileTyreServiceHero.points}
        closingLine={wiganMobileTyreServiceHero.closingLine}
        buttons={[]}
      />
      <ContentSections sections={wiganMobileTyreServiceSections} />
      <FaqSection
        title={wiganMobileTyreServiceFaqsTitle}
        faqs={wiganMobileTyreServiceFaqs}
      />
      <CtaBand
        title={wiganMobileTyreServiceClosingCta.title}
        subtitle={wiganMobileTyreServiceClosingCta.paragraphs}
        showCallButton={false}
      />
    </>
  );
}
