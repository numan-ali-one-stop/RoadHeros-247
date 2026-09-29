import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  radcliffeMobileTyreServiceClosingCta,
  radcliffeMobileTyreServiceDescription,
  radcliffeMobileTyreServiceFaqs,
  radcliffeMobileTyreServiceFaqsTitle,
  radcliffeMobileTyreServiceHero,
  radcliffeMobileTyreServiceSections,
} from "@/lib/radcliffe-mobile-tyre-service-content";

const pageTitle = radcliffeMobileTyreServiceHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: radcliffeMobileTyreServiceDescription,
  openGraph: {
    title: pageTitle,
    description: radcliffeMobileTyreServiceDescription,
  },
};

export default function RadcliffeMobileTyreServicePage() {
  return (
    <>
      <LandingHero
        title={radcliffeMobileTyreServiceHero.title}
        paragraphs={[radcliffeMobileTyreServiceHero.tagline]}
        points={radcliffeMobileTyreServiceHero.points}
        buttons={[{ label: radcliffeMobileTyreServiceHero.cta, href: "/contact" }]}
      />
      <ContentSections sections={radcliffeMobileTyreServiceSections} />
      <FaqSection
        title={radcliffeMobileTyreServiceFaqsTitle}
        faqs={radcliffeMobileTyreServiceFaqs}
      />
      <CtaBand
        title={radcliffeMobileTyreServiceClosingCta.title}
        subtitle={radcliffeMobileTyreServiceClosingCta.paragraphs}
        primaryCta={{
          label: radcliffeMobileTyreServiceClosingCta.cta,
          href: "/contact",
        }}
        showCallButton={false}
      />
    </>
  );
}
