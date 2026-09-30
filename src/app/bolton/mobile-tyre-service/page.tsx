import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  boltonMobileTyreServiceClosingCta,
  boltonMobileTyreServiceDescription,
  boltonMobileTyreServiceFaqs,
  boltonMobileTyreServiceFaqsTitle,
  boltonMobileTyreServiceHero,
  boltonMobileTyreServiceSections,
} from "@/lib/bolton-mobile-tyre-service-content";

const pageTitle = boltonMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: boltonMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: boltonMobileTyreServiceDescription,
  },
};

export default function BoltonMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={boltonMobileTyreServiceHero.title}
        paragraphs={[boltonMobileTyreServiceHero.tagline]}
        points={boltonMobileTyreServiceHero.points}
        buttons={[{ label: boltonMobileTyreServiceHero.cta, href: "/contact" }]}
      />
      <ContentSections sections={boltonMobileTyreServiceSections} />
      <FaqSection
        title={boltonMobileTyreServiceFaqsTitle}
        faqs={boltonMobileTyreServiceFaqs}
      />
      <CtaBand
        title={boltonMobileTyreServiceClosingCta.title}
        subtitle={boltonMobileTyreServiceClosingCta.paragraphs}
        primaryCta={{
          label: boltonMobileTyreServiceClosingCta.cta,
          href: "/contact",
        }}
        showCallButton={false}
      />
    </>
  );
}
