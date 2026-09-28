import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  buryMobileTyreServiceClosingCta,
  buryMobileTyreServiceDescription,
  buryMobileTyreServiceFaqs,
  buryMobileTyreServiceFaqsTitle,
  buryMobileTyreServiceHero,
  buryMobileTyreServiceSections,
} from "@/lib/bury-mobile-tyre-service-content";

const pageTitle = buryMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: buryMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: buryMobileTyreServiceDescription,
  },
};

export default function BuryMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={buryMobileTyreServiceHero.title}
        paragraphs={[buryMobileTyreServiceHero.tagline]}
        points={buryMobileTyreServiceHero.points}
        buttons={[{ label: buryMobileTyreServiceHero.cta, href: "/contact" }]}
      />
      <ContentSections sections={buryMobileTyreServiceSections} />
      <FaqSection
        title={buryMobileTyreServiceFaqsTitle}
        faqs={buryMobileTyreServiceFaqs}
      />
      <CtaBand
        title={buryMobileTyreServiceClosingCta.title}
        subtitle={buryMobileTyreServiceClosingCta.paragraphs}
        primaryCta={{ label: buryMobileTyreServiceClosingCta.cta, href: "/contact" }}
        showCallButton={false}
      />
    </>
  );
}
