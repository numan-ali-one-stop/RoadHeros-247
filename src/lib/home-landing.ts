import type { LucideIcon } from "lucide-react";
import { Building2, Home, Route, TrafficCone } from "lucide-react";

import type { Faq, ProcessStep } from "@/lib/services";
import { services } from "@/lib/site";

export const homeFaqsTitle = "Frequently Asked Questions";

export const homeFaqs: Faq[] = [
  {
    question: "What is mobile tyre fitting?",
    answer:
      "Mobile tyre fitting is a service where a tyre fitter comes directly to your location to fit or replace a tyre. Road Heroes 247 LTD provides mobile tyre fitting across Greater Manchester at homes, workplaces and appropriate roadside locations.",
  },
  {
    question: "Can a mobile tyre fitter come directly to my location?",
    answer:
      "Yes. Our mobile tyre service comes to you, so you do not need to drive to a traditional tyre centre. We can provide tyre assistance at your home, workplace or an appropriate roadside location across our service area.",
  },
  {
    question: "Do you provide 24/7 emergency mobile tyre fitting?",
    answer:
      "Yes. Road Heroes 247 LTD provides 24/7 emergency mobile tyre fitting across Greater Manchester and surrounding areas for drivers who need tyre assistance day or night.",
  },
  {
    question: "Can you replace a flat, damaged or blown tyre?",
    answer:
      "Yes. We provide mobile tyre replacement for flat, damaged, blown and unusable tyres where replacement is required. Contact us with your vehicle, tyre and location details so we can establish the assistance you need.",
  },
  {
    question: "Can I get emergency tyre replacement at the roadside?",
    answer:
      "Yes. We provide roadside tyre replacement where your vehicle is positioned in an appropriate location and the work can be carried out safely. If you are on a motorway or busy road, prioritise your safety and follow relevant UK road safety guidance before arranging assistance.",
  },
  {
    question: "Can you fit a replacement tyre at my home?",
    answer:
      "Yes. Our home tyre fitting service allows you to have a replacement tyre fitted at your property without travelling to a tyre centre. This can be particularly useful when your vehicle cannot safely be driven because of a tyre problem.",
  },
  {
    question: "Can you fit a tyre while I am at work?",
    answer:
      "Yes. Mobile tyre fitting can be arranged at your workplace where there is an appropriate location to carry out the work. This allows you to have a tyre replaced without making a separate trip to a tyre centre.",
  },
  {
    question: "Which areas of Greater Manchester do you cover?",
    answer:
      "Our primary service areas include Manchester, Bolton, Bury, Oldham, Rochdale, Salford, Stockport, Tameside, Trafford and Wigan, together with surrounding areas within our service coverage. Contact us with your location if you are unsure whether we cover your area.",
  },
  {
    question:
      "Do you provide mobile tyre fitting on or near Greater Manchester motorways?",
    answer:
      "We provide emergency mobile tyre assistance around major routes including the M6, M60, M602, M61, M56, M62, M66, A627(M) and M67. If you experience a tyre problem on a motorway, prioritise your safety and follow relevant road safety guidance before requesting assistance.",
  },
  {
    question: "Can you help if I get a puncture?",
    answer:
      "Yes. If you have a punctured tyre, contact us with your vehicle, tyre and location details. Depending on the condition of the tyre and the circumstances, we can establish whether mobile puncture assistance or tyre replacement is appropriate.",
  },
  {
    question:
      "What information do you need when I call for mobile tyre fitting?",
    answer:
      "It helps to provide your current location, vehicle registration, tyre size if available, and a brief description of the tyre problem. This information allows us to establish what service is required before arranging mobile assistance.",
  },
  {
    question: "Do you provide jump start assistance?",
    answer:
      "Yes. Road Heroes 247 LTD provides mobile jump start assistance where a vehicle has a battery-related starting problem and a jump start is appropriate. Contact us with your vehicle and location details to request assistance.",
  },
  {
    question: "Can you remove a damaged locking wheel nut?",
    answer:
      "We provide mobile locking nut removal where a damaged or problematic locking wheel nut is preventing access to the wheel. Whether removal is possible will depend on the type and condition of the locking nut.",
  },
  {
    question: "Do I need to drive my car to a tyre centre?",
    answer:
      "No. The purpose of mobile tyre fitting is to bring the tyre service to your location. We can attend homes, workplaces and appropriate roadside locations, so you do not need to drive a vehicle with an unsafe or unusable tyre to a tyre centre.",
  },
  {
    question: "How do I book a mobile tyre fitter?",
    answer:
      "Contact Road Heroes 247 LTD and provide your location, vehicle details and tyre information where available. We can then establish the service you require and arrange the appropriate mobile assistance.",
  },
];

export const homeFinalCta = {
  eyebrow: "Need Emergency Tyre Assistance?",
  title: "Get Mobile Tyre Help at Your Location",
  paragraphs: [
    "Flat tyre at home, work or roadside?",
    "Road Heroes 247 LTD provides 24/7 emergency mobile tyre fitting across Greater Manchester.",
  ],
  callLabel: "Call Now for Immediate Assistance",
  secondaryCta: { label: "Book a Mobile Tyre Fitter", href: "/contact" },
};

export const homeProcessTitle = "Four Steps to Get Back on the Road";

export const homeProcessSteps: ProcessStep[] = [
  {
    title: "Contact Us",
    description:
      "Tell us your location, vehicle details and what has happened.",
  },
  {
    title: "Confirm Your Requirements",
    description: "We establish the tyre or roadside service you require.",
  },
  {
    title: "We Come to You",
    description:
      "A mobile fitter travels to your home, workplace or appropriate roadside location.",
  },
  {
    title: "Get Back on the Road",
    description:
      "Once the required work is completed and your vehicle is ready, you can continue your journey.",
  },
];

export const homeProcessCta = "Request Assistance";

export const homeEmergencyReplacement = {
  eyebrow: "Emergency Tyre Replacement",
  title: "Flat, Damaged or Blown Tyre?",
  intro:
    "We provide emergency mobile tyre replacement when a tyre problem leaves your vehicle unable or unsafe to continue its journey.",
  listIntro: "We can assist with:",
  bullets: [
    "Flat tyres",
    "Damaged tyres",
    "Blown tyres",
    "Shredded tyres",
    "Emergency tyre replacement",
    "Roadside tyre problems",
  ],
  closing:
    "Contact us with your location, vehicle and tyre details so we can establish the assistance you need.",
  cta: "Call for Emergency Tyre Assistance",
  image: {
    src: "/images/night-tyre-change-car-park.jpg",
    alt: "Car with its front wheel removed in a car park at night",
  },
  // No dedicated Emergency Tyre Replacement page yet, so this points at that section of the
  // Mobile Tyre Fitting page.
  link: {
    label: "More about emergency tyre replacement",
    href: "/mobile-tyre-fitting-manchester#emergency-tyre-replacement",
  },
};

export const homeCoverage = {
  eyebrow: "Greater Manchester Coverage",
  title: "Mobile Tyre Fitting Across Greater Manchester",
  intro:
    "Road Heroes 247 LTD provides 24/7 mobile tyre fitting across Greater Manchester and surrounding areas.",
  listTitle: "Primary Service Areas",
  /** Linked to their location page automatically once that page exists (see service-areas.ts). */
  areas: [
    "Manchester",
    "Bolton",
    "Bury",
    "Oldham",
    "Rochdale",
    "Salford",
    "Stockport",
    "Tameside",
    "Trafford",
    "Wigan",
  ],
  closing:
    "Can't see your area? Contact us with your location to check whether we can assist.",
  cta: "Check Your Area",
};

export const homeMotorways = {
  eyebrow: "Motorway & Roadside Assistance",
  title: "Motorway & Roadside Tyre Assistance",
  intro:
    "Tyre problem while travelling? We provide emergency mobile tyre assistance around major motorways and routes across Greater Manchester and surrounding areas.",
  listTitle: "Major Routes",
  /** Linked to their motorway page automatically once that page exists (see service-areas.ts). */
  routes: ["M6", "M60", "M602", "M61", "M56", "M62", "M66", "A627(M)", "M67"],
  safety:
    "If you experience a tyre problem on a motorway or busy road, prioritise your safety and follow relevant UK road safety guidance. Once you are in an appropriate safe location, contact us for assistance.",
  cta: "Get Roadside Assistance",
};

export type GalleryPhoto = {
  /** Path under /public, e.g. "/gallery/home-tyre-fitting.jpg". */
  src: string;
  alt: string;
};

export const homeGallery = {
  eyebrow: "Real Service",
  interimEyebrow: "Gallery",
  title: "Mobile Tyre Fitting in Action",
  /** The owner's intro, shown once the photos below are genuine Road Heroes 247 LTD jobs. */
  intro:
    "Real mobile tyre fitting and roadside assistance carried out by Road Heroes 247 LTD across Greater Manchester.",
  /** Shown while stand-in photos are used, so the page doesn't claim them as Road Heroes work. */
  interimIntro:
    "Mobile tyre fitting and roadside tyre assistance at homes, streets and car parks.",
  /** Set to true once `photos` are genuine Road Heroes 247 LTD jobs. */
  photosAreOwnWork: false,
  photos: [
    {
      src: "/images/tyre-change-home-driveway.jpg",
      alt: "Saloon car on a trolley jack with its rear wheel removed on a home driveway",
    },
    {
      src: "/images/night-callout-driveway.jpg",
      alt: "Car on a jack on a residential driveway during a late-night callout",
    },
    {
      src: "/images/front-wheel-removed-street.jpg",
      alt: "Car with its front wheel removed on a residential street, with jack and impact wrench",
    },
    {
      src: "/images/wheel-change-car-park.jpg",
      alt: "Estate car raised on a trolley jack in a car park during a wheel change",
    },
    {
      src: "/images/tyre-fitting-home-patio.jpg",
      alt: "Hatchback raised on a trolley jack on a home patio",
    },
    {
      src: "/images/front-wheel-removed-driveway.jpg",
      alt: "Front wheel removed from a car on a driveway, with jack and tools beside it",
    },
    {
      src: "/images/suv-tyre-change-driveway.jpg",
      alt: "SUV on a trolley jack outside a house during a tyre change",
    },
    {
      src: "/images/rear-wheel-removed-street.jpg",
      alt: "Hatchback with its rear wheel removed while parked on a street",
    },
  ] as GalleryPhoto[],
  /** Shot list from the homepage brief, used to label the preview placeholders when `photos` is empty. */
  recommendedShots: [
    "Mobile tyre fitting at a customer's location",
    "Emergency roadside tyre replacement",
    "Road Heroes 247 service vehicle",
    "Fitter working on a customer's vehicle",
    "Home tyre fitting",
    "Roadside assistance job",
  ],
};

export const homeWhatWeDo = {
  title: "Mobile Tyre Assistance When You Need It",
  paragraphs: [
    "Road Heroes 247 LTD provides 24/7 mobile tyre fitting and emergency tyre replacement across Greater Manchester.",
    "Instead of trying to drive with a flat or damaged tyre, our mobile service comes directly to you.",
  ],
  locations: [
    {
      title: "Home",
      description: "Mobile tyre fitting at your property",
      icon: Home,
    },
    {
      title: "Work",
      description: "Convenient tyre fitting at your workplace",
      icon: Building2,
    },
    {
      title: "Roadside",
      description: "Assistance at an appropriate safe location",
      icon: TrafficCone,
    },
    {
      title: "On your journey",
      description: "Emergency assistance around major routes",
      icon: Route,
    },
  ] satisfies { title: string; description: string; icon: LucideIcon }[],
  closing:
    "From a flat tyre to an emergency tyre replacement, contact us with your location, vehicle details and tyre information.",
  cta: "Get Mobile Tyre Assistance",
};

export type HomeServiceCard = {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
  icon: LucideIcon;
  /** A genuine photo of this service, once one is available. */
  image?: { src: string; alt: string };
};

function serviceLink(slug: string) {
  const service = services.find((entry) => entry.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return { href: service.href ?? `/services/${slug}`, icon: service.icon };
}

export const homeServicesTitle = "Our Mobile Services";

export const homeServices: HomeServiceCard[] = [
  {
    title: "Mobile Tyre Fitting",
    description:
      "Need a replacement tyre? Our mobile tyre fitting service comes directly to your location across Greater Manchester for flat, damaged, blown or unusable tyres.",
    buttonLabel: "Mobile Tyre Fitting",
    image: {
      src: "/images/front-wheel-removed-street.jpg",
      alt: "Car with its front wheel removed on a residential street, with jack and impact wrench",
    },
    ...serviceLink("mobile-tyre-fitting"),
  },
  {
    title: "Home Tyre Fitting",
    description:
      "Get your tyres fitted at home without travelling to a tyre centre. We bring the mobile tyre fitting service directly to your property.",
    buttonLabel: "Home Tyre Fitting",
    image: {
      src: "/images/tyre-fitting-house-driveway.jpg",
      alt: "SUV raised on a jack on a house driveway for tyre fitting",
    },
    ...serviceLink("home-tyre-fitting"),
  },
  {
    title: "Jump Start Assistance",
    description:
      "Vehicle won't start because of a flat or discharged battery? Request mobile jump start assistance at your location where a jump start is appropriate.",
    buttonLabel: "Jump Start Assistance",
    image: {
      src: "/images/night-callout-driveway.jpg",
      alt: "Car on a jack on a residential driveway during a late-night callout",
    },
    ...serviceLink("jump-start"),
  },
  {
    title: "Locking Nut Removal",
    description:
      "Lost your locking wheel nut key or dealing with a damaged locking nut? Our mobile locking nut removal service can help where removal is possible.",
    buttonLabel: "Locking Nut Removal",
    image: {
      src: "/images/rear-wheel-removed-street.jpg",
      alt: "Hatchback with its rear wheel removed while parked on a street",
    },
    ...serviceLink("locking-nut-removal"),
  },
];
