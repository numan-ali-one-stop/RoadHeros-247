import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  prestwichMobileTyreServiceClosingCta,
  prestwichMobileTyreServiceDescription,
  prestwichMobileTyreServiceFaqs,
  prestwichMobileTyreServiceFaqsTitle,
  prestwichMobileTyreServiceHero,
  prestwichMobileTyreServiceSections,
} from "@/lib/prestwich-mobile-tyre-service-content";

const pageTitle = prestwichMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: prestwichMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: prestwichMobileTyreServiceDescription,
  },
};

export default function PrestwichMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={prestwichMobileTyreServiceHero.title}
        paragraphs={[prestwichMobileTyreServiceHero.tagline]}
        points={prestwichMobileTyreServiceHero.points}
        buttons={[{ label: prestwichMobileTyreServiceHero.cta, href: "/contact" }]}
      />
      <ContentSections sections={prestwichMobileTyreServiceSections} />
      <FaqSection
        title={prestwichMobileTyreServiceFaqsTitle}
        faqs={prestwichMobileTyreServiceFaqs}
      />
      <CtaBand
        title={prestwichMobileTyreServiceClosingCta.title}
        subtitle={prestwichMobileTyreServiceClosingCta.paragraphs}
        primaryCta={{
          label: prestwichMobileTyreServiceClosingCta.cta,
          href: "/contact",
        }}
        showCallButton={false}
      />
    </>
  );
}
