import type { Metadata } from "next";

import { AboutFinalCta } from "@/components/about/about-final-cta";
import { AboutHero } from "@/components/about/about-hero";
import { AboutTestimonials } from "@/components/about/about-testimonials";
import { AboutValues } from "@/components/about/about-values";
import { WhereWeWork } from "@/components/about/where-we-work";
import { WhoWeLookAfter } from "@/components/about/who-we-look-after";
import { ContentSections } from "@/components/content-sections";
import { FaqSection } from "@/components/faq-section";
import {
  aboutFaqs,
  aboutFaqsTitle,
  aboutHero,
  aboutSectionsPrimary,
  aboutSectionsSecondary,
} from "@/lib/about-content";

const pageTitle = aboutHero.title;

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: aboutHero.tagline,
  openGraph: {
    title: pageTitle,
    description: aboutHero.tagline,
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ContentSections sections={aboutSectionsPrimary} />
      <AboutValues />
      <WhoWeLookAfter />
      <ContentSections sections={aboutSectionsSecondary} />
      <WhereWeWork />
      <AboutTestimonials />
      <FaqSection title={aboutFaqsTitle} faqs={aboutFaqs} />
      <AboutFinalCta />
    </>
  );
}
