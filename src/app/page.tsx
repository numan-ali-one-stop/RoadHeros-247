import type { Metadata } from "next";

import { AreasCovered } from "@/components/home/areas-covered";
import { CtaBand } from "@/components/cta-band";
import { EmergencyReplacement } from "@/components/home/emergency-replacement";
import { FaqSection } from "@/components/faq-section";
import { GoogleReviews } from "@/components/home/google-reviews";
import { Hero } from "@/components/home/hero";
import { MotorwayAssistance } from "@/components/home/motorway-assistance";
import { OurServices } from "@/components/home/our-services";
import { WhatWeDo } from "@/components/home/what-we-do";
import { Process } from "@/components/home/process";
import { ServiceGallery } from "@/components/home/service-gallery";
import { WhyUs } from "@/components/why-us";
import { homeFaqs, homeFaqsTitle, homeFinalCta } from "@/lib/home-landing";

const pageTitle = "Mobile Tyre Fitting Manchester 24/7 | Road Heroes 247";
const pageDescription =
  "Need a mobile tyre fitter? Road Heroes 247 provides 24/7 emergency mobile tyre fitting at home, work and roadside across Greater Manchester. Call now.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <GoogleReviews />
      <WhatWeDo />
      <OurServices />
      <Process />
      <EmergencyReplacement />
      <AreasCovered />
      <MotorwayAssistance />
      <ServiceGallery />
      <WhyUs />
      <FaqSection title={homeFaqsTitle} faqs={homeFaqs} />
      <CtaBand
        eyebrow={homeFinalCta.eyebrow}
        title={homeFinalCta.title}
        subtitle={homeFinalCta.paragraphs}
        callLabel={homeFinalCta.callLabel}
        secondaryCta={homeFinalCta.secondaryCta}
      />
    </>
  );
}
