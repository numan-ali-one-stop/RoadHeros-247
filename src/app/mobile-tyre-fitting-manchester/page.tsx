import type { Metadata } from "next";

import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { LandingHero } from "@/components/landing-hero";
import {
  mobileTyreFittingDescription,
  mobileTyreFittingFaqs,
  mobileTyreFittingFaqsTitle,
  mobileTyreFittingHero,
  mobileTyreFittingSections,
} from "@/lib/mobile-tyre-fitting-content";
import { siteConfig } from "@/lib/site";

const pageTitle = mobileTyreFittingHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: mobileTyreFittingDescription,
  openGraph: {
    title: pageTitle,
    description: mobileTyreFittingDescription,
  },
};

export default function MobileTyreFittingManchesterPage() {
  return (
    <>
      <LandingHero
        badge={mobileTyreFittingHero.badge}
        title={mobileTyreFittingHero.title}
        paragraphs={[
          mobileTyreFittingHero.tagline,
          mobileTyreFittingHero.subline,
        ]}
        points={mobileTyreFittingHero.points}
        buttons={[
          { label: mobileTyreFittingHero.primaryCta, href: "/contact" },
          {
            label: mobileTyreFittingHero.secondaryCta,
            href: siteConfig.phoneHref,
            variant: "outline",
          },
        ]}
      />
      <ContentSections sections={mobileTyreFittingSections} />
      <FaqSection
        title={mobileTyreFittingFaqsTitle}
        faqs={mobileTyreFittingFaqs}
      />
      <CtaBand
        title="Need Mobile Tyre Fitting In Manchester Right Now?"
        subtitle="Tell us where you are and what's happened, and we'll agree a price on the phone before anybody sets off."
      />
    </>
  );
}
