import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/lib/services";

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <Accordion className="border-border divide-border divide-y rounded-2xl border">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={faq.question}
          value={`faq-${index}`}
          className="border-none px-5"
        >
          <AccordionTrigger className="py-4 text-base font-medium">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
