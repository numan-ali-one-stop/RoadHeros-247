import { FaqAccordion } from "@/components/faq-accordion";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/section-heading";
import type { Faq } from "@/lib/services";

type FaqSectionProps = {
  title: string;
  subtitle?: string;
  faqs: Faq[];
};

export function FaqSection({ title, subtitle, faqs }: FaqSectionProps) {
  return (
    <Section size="sm">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow="FAQ" title={title} subtitle={subtitle} />
        <FaqAccordion faqs={faqs} />
      </div>
    </Section>
  );
}
