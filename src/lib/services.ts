import type { LucideIcon } from "lucide-react";
import { BatteryCharging, Car, Gauge, KeyRound, Lock, Wrench } from "lucide-react";

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
    slug: "jump-start",
    name: "Jump Start",
    shortDescription: "Flat battery? We'll get your engine running again.",
    heroDescription:
      "Lights left on, a cold snap, or a battery on its last legs — a flat battery always happens at the worst time. We'll get to you fast, test the battery properly, and have you running again in minutes.",
    icon: BatteryCharging,
    included: [
      "Rapid-response jump start using calibrated booster packs",
      "Full battery health and alternator charge test",
      "Terminal and connection check for corrosion or damage",
      "Honest advice on whether a jump is a fix or a stopgap",
      "Replacement battery supply and fitting on the spot if needed",
      "Support for start-stop and hybrid vehicle battery systems",
    ],
    process: [
      {
        title: "Describe the symptoms",
        description:
          "Dashboard lights dim, clicking on start, or nothing at all — tell us what's happening so we bring the right kit.",
      },
      {
        title: "Rapid dispatch",
        description:
          "A fitter with a calibrated jump pack heads straight to your location.",
      },
      {
        title: "Test before we jump",
        description:
          "We check the battery and alternator first, so you know if this is a one-off or a sign you need a new battery.",
      },
      {
        title: "Running again",
        description:
          "Once started, we'll let the engine run and confirm charge is holding before we leave you.",
      },
    ],
    tools: [
      {
        name: "Calibrated booster packs",
        description: "Safe for modern electronics, including start-stop systems.",
        icon: BatteryCharging,
      },
      {
        name: "Battery & alternator tester",
        description: "Diagnoses the real cause, not just a temporary fix.",
        icon: Gauge,
      },
      {
        name: "Stocked replacement batteries",
        description: "Common fitments carried on the van for same-visit swaps.",
        icon: Car,
      },
    ],
    faqs: [
      {
        question: "Will a jump start damage my car's electronics?",
        answer:
          "No — we use calibrated booster packs designed for modern vehicles, including those with start-stop and hybrid systems, which are sensitive to voltage spikes from cheap jump leads.",
      },
      {
        question: "My car keeps needing jump starts — what's wrong?",
        answer:
          "That's usually a sign the battery is failing or something is drawing power while parked. We'll test both the battery and the alternator and explain exactly what we find.",
      },
      {
        question: "Can you fit a new battery there and then?",
        answer:
          "In most cases, yes. Our vans carry common battery fitments, and we can supply and fit a replacement during the same callout.",
      },
      {
        question: "Is a jump start safe in the rain?",
        answer:
          "Yes, our fitters are trained and equipped to work safely in wet weather, though we'll always prioritise finding you a sheltered spot if one's available.",
      },
    ],
  },
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
