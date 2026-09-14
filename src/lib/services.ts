import type { LucideIcon } from "lucide-react";
import {
  BatteryCharging,
  Car,
  Gauge,
  Home,
  KeyRound,
  ListChecks,
  Lock,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

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
    slug: "mobile-tyre-fitting",
    name: "Mobile Tyre Fitting",
    shortDescription: "Puncture or blowout? A fitter comes to your location.",
    heroDescription:
      "Stuck on the hard shoulder, in a car park, or outside the office with a dead tyre? Our mobile fitters carry a full range of stock and come straight to you — no towing, no waiting room, no wasted afternoon.",
    icon: Truck,
    included: [
      "Fully equipped van with a wide range of tyre sizes and brands in stock",
      "On-the-spot puncture repair where it's safe and legal to do so",
      "New tyre supply and fitting at the roadside, at home, or at work",
      "Wheel balancing and torque-to-spec after every fit",
      "Old tyre disposal handled for you",
      "Nitrogen or air top-up on request",
    ],
    process: [
      {
        title: "Call or book online",
        description:
          "Tell us your tyre size, location and vehicle details. We'll quote you a price and an arrival window before you confirm.",
      },
      {
        title: "We dispatch the nearest fitter",
        description:
          "Our routing sends the closest fully-stocked van, and you get a live ETA by text.",
      },
      {
        title: "Fitted on the spot",
        description:
          "Your fitter repairs or replaces the tyre, balances the wheel, and torques it to manufacturer spec.",
      },
      {
        title: "Back on the road",
        description:
          "You get a digital receipt and a written note of what was done, including tread depth and pressure checks on the other three tyres.",
      },
    ],
    tools: [
      {
        name: "Mobile balancing rig",
        description: "Van-mounted wheel balancer for a smooth, vibration-free ride.",
        icon: Gauge,
      },
      {
        name: "Torque-calibrated tools",
        description: "Every wheel nut is torqued to the exact manufacturer spec.",
        icon: Wrench,
      },
      {
        name: "Tyre pressure monitoring reset",
        description: "TPMS sensors are checked and reset where fitted.",
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        question: "How quickly can someone reach me?",
        answer:
          "Most callouts are attended within 60–90 minutes, and often sooner in urban areas. You'll get a live ETA once you book.",
      },
      {
        question: "Do you carry my tyre size?",
        answer:
          "Our vans stock the most common sizes and brands. If yours is unusual, we'll confirm availability on the phone before dispatching so there's no wasted trip.",
      },
      {
        question: "Can you fit run-flats or performance tyres?",
        answer:
          "Yes — our fitters carry equipment for run-flats, low-profile and performance fitments as standard.",
      },
      {
        question: "Is it safe to wait roadside while you fit the tyre?",
        answer:
          "Your safety comes first. If your location isn't safe to work at, we'll talk you through moving somewhere safer, or advise on a short tow to a nearby safe spot.",
      },
    ],
  },
  {
    slug: "home-tyre-fitting",
    name: "Home Tyre Fitting",
    shortDescription: "Book ahead and we fit new tyres on your driveway.",
    heroDescription:
      "Skip the garage waiting room. Book a slot that suits you and we'll fit your new tyres on your own driveway or in your car park — ideal for planned replacements, seasonal swaps, or fleet vehicles that can't be off the road.",
    icon: Home,
    included: [
      "Pre-booked appointment window that fits your schedule",
      "New tyres ordered and brought directly to your address",
      "Full fitting, balancing and disposal of old tyres",
      "Free visual brake and suspension check while we're there",
      "Seasonal tyre swap-overs (summer/winter sets) with storage advice",
      "Fleet and multi-vehicle bookings available",
    ],
    process: [
      {
        title: "Choose your tyres and slot",
        description:
          "Pick from our recommended range online or over the phone, then choose a date and time that works for you.",
      },
      {
        title: "We source the stock",
        description:
          "Your tyres are ordered in ahead of the appointment so there's no delay on the day.",
      },
      {
        title: "Fitted at your door",
        description:
          "A fitter arrives in your window, fits the tyres on your driveway, and balances every wheel.",
      },
      {
        title: "Quick health check",
        description:
          "We'll flag anything else worth knowing — brake wear, alignment pull, or uneven tread — with no obligation to act on it.",
      },
    ],
    tools: [
      {
        name: "Driveway-safe jacking equipment",
        description: "Rated for tarmac, block paving and gravel surfaces.",
        icon: ShieldCheck,
      },
      {
        name: "Mobile balancing rig",
        description: "The same precision balancing you'd get in a workshop.",
        icon: Gauge,
      },
      {
        name: "Digital tread & pressure gauge",
        description: "Logged results shared with you after the visit.",
        icon: ListChecks,
      },
    ],
    faqs: [
      {
        question: "How far in advance should I book?",
        answer:
          "We can often fit you in within 2–3 days. Popular slots and seasonal swap periods (spring/autumn) book up faster, so earlier is better.",
      },
      {
        question: "Do I need to be home?",
        answer:
          "Someone needs to be present to unlock the vehicle and confirm the job, but you're welcome to carry on with your day while we work.",
      },
      {
        question: "Can you store my old tyres?",
        answer:
          "We can advise on seasonal storage, but we don't currently offer a storage service ourselves — we'll recycle your old tyres responsibly instead.",
      },
      {
        question: "What if my driveway is on a slope?",
        answer:
          "Let us know when booking. Our fitters carry wheel chocks and can usually work safely on a moderate incline, or suggest a nearby flat spot.",
      },
    ],
  },
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
