import type { LucideIcon } from "lucide-react";
import { KeyRound, Lock, Wrench } from "lucide-react";

export type ProcessStep = {
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type ServiceDetail = {
  slug: string;
  name: string;
  shortDescription: string;
  heroDescription: string;
  icon: LucideIcon;
  included: string[];
  process: ProcessStep[];
  tools: { name: string; description: string; icon: LucideIcon }[];
  faqs: Faq[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "locking-nut-removal",
    name: "Locking Nut Removal",
    shortDescription: "Lost the key or a seized nut? We'll remove it safely.",
    heroDescription:
      "A missing locking wheel nut key or a seized, rounded nut can turn a simple tyre change into a standstill. Our fitters carry specialist extraction kits to remove locking nuts without damaging your alloys.",
    icon: KeyRound,
    included: [
      "Locking nut removal without the original key",
      "Damage-aware extraction to protect your alloy wheels",
      "Replacement locking nut set supplied and fitted",
      "Support for seized, rounded or cross-threaded nuts",
      "Follow-on tyre fitting or repair in the same visit if needed",
      "Advice on storing your new key safely",
    ],
    process: [
      {
        title: "Confirm the problem",
        description:
          "Missing key, seized nut, or a nut that's been rounded off by a previous attempt — let us know so we bring the right extractor set.",
      },
      {
        title: "Fitter arrives with extraction kit",
        description:
          "Specialist sockets and extractors are matched to your wheel and nut type before any tool touches the alloy.",
      },
      {
        title: "Careful removal",
        description:
          "We work slowly and methodically to remove the nut without damaging the wheel or stud.",
      },
      {
        title: "New nuts fitted",
        description:
          "A fresh set of locking nuts (or standard nuts, your choice) is fitted and torqued to spec, with two keys handed over.",
      },
    ],
    tools: [
      {
        name: "Graduated extractor sockets",
        description: "Matched precisely to worn or rounded locking nuts.",
        icon: Lock,
      },
      {
        name: "Impact-rated removal kit",
        description: "Controlled force to avoid stud or alloy damage.",
        icon: Wrench,
      },
      {
        name: "Replacement locking sets",
        description: "New nuts and keys supplied and fitted on the day.",
        icon: KeyRound,
      },
    ],
    faqs: [
      {
        question: "Will removing the nut damage my alloy wheel?",
        answer:
          "Our fitters use graduated extractor sockets specifically designed to grip worn or rounded nuts without chewing up the wheel. Damage is rare and always explained upfront if there's a risk.",
      },
      {
        question: "I don't know what locking nut key I have — does that matter?",
        answer:
          "Not for removal — our extraction kits work without the original key. We'll only need the key detail if you want a matching replacement set.",
      },
      {
        question: "Can you do this alongside a tyre change?",
        answer:
          "Yes, this is commonly booked together with mobile or home tyre fitting so the whole job is done in one visit.",
      },
      {
        question: "How long does locking nut removal take?",
        answer:
          "Most single-nut removals take 15–30 minutes, depending on how seized the nut is and wheel access.",
      },
    ],
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((service) => service.slug === slug);
}
