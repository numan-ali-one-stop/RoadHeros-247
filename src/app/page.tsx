import type { Metadata } from "next";

import { AreasCovered } from "@/components/home/areas-covered";
import { ContentSections } from "@/components/content-sections";
import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { Hero } from "@/components/home/hero";
import { OurServices } from "@/components/home/our-services";
import { Process } from "@/components/home/process";
import { Testimonials } from "@/components/testimonials";
import { WhyUs } from "@/components/why-us";
import {
  closingLandingSections,
  coreLandingSections,
  homeFaqs,
  locationLandingSections,
  secondaryLandingSections,
} from "@/lib/home-landing";

export const metadata: Metadata = {
  title: "Mobile Tyre Service Manchester | Road Heroes 24/7",
  description:
    "Reliable mobile tyre fitting, repair and replacement across Manchester. Road Heroes 24/7 brings professional tyre assistance to your home, workplace or a suitable roadside location.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ContentSections sections={coreLandingSections} />
      <OurServices />
      <WhyUs />
      <ContentSections sections={locationLandingSections} />
      <AreasCovered />
      <ContentSections sections={secondaryLandingSections} />
      <Process />
      <Testimonials />
      <ContentSections sections={closingLandingSections} />
      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Can't find what you need? Give us a call and we'll talk you through it."
        faqs={homeFaqs}
      />
      <CtaBand
        title="Get Mobile Tyre Assistance In Manchester"
        subtitle="Need a tyre fitted or replaced? Road Heroes 24/7 provides mobile tyre assistance across Manchester and suitable surrounding areas. Whether you're at home, at work or dealing with a tyre problem at a suitable roadside location, contact us to discuss your tyre requirements."
      />
    </>
  );
}
