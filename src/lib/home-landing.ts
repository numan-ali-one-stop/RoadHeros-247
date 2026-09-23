import type { LucideIcon } from "lucide-react";
import { Gauge, RefreshCw, Siren, Truck, Wrench } from "lucide-react";

import type { ContentSection } from "@/lib/content-sections";
import type { Faq, ProcessStep } from "@/lib/services";

export type HomeLandingSection = ContentSection & {
  group: "core" | "location" | "secondary" | "closing";
};

export const homeLandingSections: HomeLandingSection[] = [
  {
    id: "mobile-tyre-service-manchester",
    group: "core",
    eyebrow: "Mobile Tyre Service",
    title: "Mobile Tyre Service Manchester",
    paragraphs: [
      "A flat, damaged or worn tyre can cause serious disruption to your day. You may be at home, heading to work, parked outside your business or stuck with a tyre problem during your journey.",
      "Road Heroes 24/7 provides a convenient Mobile Tyre Service Manchester for drivers who need professional tyre assistance without the inconvenience of visiting a traditional garage.",
      "Our mobile approach means that, where access and working conditions are suitable, tyre services can be carried out at your location.",
      "Whether you need a new tyre fitted, a damaged tyre replaced or emergency assistance, our service is designed to make the process straightforward.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1647292882945-d5c839432d7e?fm=jpg&q=80&w=1200&fit=crop",
      alt: "Placeholder image — Road Heroes 24/7 mobile tyre service in Manchester",
    },
  },
  {
    id: "mobile-tyre-fitting-manchester",
    group: "core",
    eyebrow: "Mobile Tyre Fitting",
    title: "Mobile Tyre Fitting Manchester",
    paragraphs: [
      "Need new tyres but do not have time to visit a tyre centre?",
      "Our Mobile Tyre Fitting Manchester service brings tyre fitting directly to a suitable location.",
      "This can be particularly useful if your tyres need changing at home, at work or when you cannot conveniently take your vehicle to a garage.",
    ],
    listIntro: "Mobile tyre fitting can help with:",
    bullets: [
      "New tyre fitting",
      "Worn tyre replacement",
      "Puncture related tyre replacement",
      "Tyre changes at home",
      "Tyre fitting at suitable workplaces",
      "Emergency tyre fitting",
      "Car and suitable van tyre requirements",
    ],
    closingParagraph:
      "Our aim is to make tyre fitting more convenient while keeping the service professional and focused on your vehicle requirements.",
    image: {
      src: "https://images.unsplash.com/photo-1645445522156-9ac06bc7a767?fm=jpg&q=80&w=1200&fit=crop",
      alt: "Placeholder image — Road Heroes 24/7 mobile tyre fitting in Manchester",
    },
  },
  {
    id: "emergency-mobile-tyre-fitting-manchester",
    group: "core",
    eyebrow: "Emergency Callouts",
    title: "Emergency Mobile Tyre Fitting Manchester",
    paragraphs: [
      "A tyre problem can happen without warning.",
      "A sudden puncture, damaged sidewall or complete tyre failure can leave you unable to continue your journey safely.",
      "Our Emergency Mobile Tyre Fitting Manchester service is designed for situations where you need mobile tyre assistance at a suitable location.",
      "Instead of trying to drive a damaged vehicle to a garage, you can contact Road Heroes 24/7 and provide your location and vehicle information.",
    ],
    listIntro: "Emergency mobile tyre assistance can be useful when:",
    bullets: [
      "Your tyre has suffered a serious puncture",
      "Your tyre has lost significant pressure",
      "Your tyre has visible damage",
      "You have experienced a tyre blowout",
      "Your tyre cannot safely be driven on",
      "You need a replacement tyre to continue your journey",
    ],
    note: "If your vehicle is stopped on a busy or unsafe road, prioritise your safety and move to a safe location where possible.",
    image: {
      src: "https://images.unsplash.com/photo-1599082267768-4815b2ea6bd2?fm=jpg&q=80&w=1200&fit=crop",
      alt: "Placeholder image — Road Heroes 24/7 emergency mobile tyre fitting in Manchester",
    },
  },
  {
    id: "mobile-tyre-replacement-manchester",
    group: "core",
    eyebrow: "Tyre Replacement",
    title: "Mobile Tyre Replacement Manchester",
    paragraphs: [
      "Not every damaged tyre can or should be repaired.",
      "When a tyre is unsuitable for repair, replacement may be the safest option. Road Heroes 24/7 provides Mobile Tyre Replacement Manchester for suitable vehicles and locations, subject to tyre availability.",
    ],
    listIntro: "Our mobile replacement service can be useful for tyres affected by:",
    bullets: [
      "Severe punctures",
      "Sidewall damage",
      "Excessive tread wear",
      "Road impact damage",
      "Tyre failure",
      "Damage that makes the tyre unsuitable for repair",
    ],
    closingParagraph:
      "Providing your vehicle registration or tyre size can help us understand your tyre requirements and identify suitable replacement options.",
    image: {
      src: "https://images.unsplash.com/photo-1608479746923-7e17632a9799?fm=jpg&q=80&w=1200&fit=crop",
      alt: "Placeholder image — Road Heroes 24/7 mobile tyre replacement in Manchester",
    },
  },
  {
    id: "24-hour-mobile-tyre-service-manchester",
    group: "core",
    eyebrow: "24 Hour Service",
    title: "24 Hour Mobile Tyre Service Manchester",
    paragraphs: [
      "Tyre problems do not always happen during normal garage opening hours.",
      "A flat tyre can happen early in the morning, late at night, during a weekend or while you are travelling.",
      "Road Heroes 24/7 provides a 24 Hour Mobile Tyre Service Manchester for suitable tyre requirements, subject to location, availability and safe working conditions.",
      "Our 24 hour service is designed to provide greater flexibility for drivers who need mobile tyre assistance outside traditional working hours.",
      "Whether you are dealing with an unexpected tyre problem or need mobile tyre fitting at a convenient time, our team can help you arrange the appropriate service.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1763377278900-0ce8242c5005?fm=jpg&q=80&w=1200&fit=crop",
      alt: "Placeholder image — Road Heroes 24/7 24 hour mobile tyre service in Manchester",
    },
  },
  {
    id: "mobile-tyre-fitting-at-home-manchester",
    group: "location",
    eyebrow: "At Home",
    title: "Mobile Tyre Fitting At Home Manchester",
    paragraphs: [
      "You do not always discover a tyre problem while driving.",
      "You may find a flat tyre when you are preparing for work or notice that a tyre has lost pressure while your vehicle is parked outside your home.",
      "Driving on a severely damaged or flat tyre can cause additional damage and may create a safety risk.",
      "With mobile tyre fitting, you can arrange suitable assistance without needing to take your vehicle to a tyre centre.",
      "Road Heroes 24/7 can provide mobile tyre assistance at suitable residential locations across Manchester, subject to access and working conditions.",
    ],
  },
  {
    id: "mobile-tyre-fitting-at-work",
    group: "location",
    eyebrow: "At Work",
    title: "Mobile Tyre Fitting At Work",
    paragraphs: [
      "A tyre problem can also interrupt your working day.",
      "Instead of leaving work to visit a garage, mobile tyre fitting can allow the service to come to a suitable workplace location.",
      "This can be useful for employees, business owners and drivers who rely on their vehicles during the working day.",
      "Where there is suitable access and a safe working environment, Road Heroes 24/7 can provide mobile tyre assistance at your workplace.",
    ],
  },
  {
    id: "emergency-tyre-service-across-manchester",
    group: "location",
    eyebrow: "Manchester Coverage",
    title: "Emergency Tyre Service Across Manchester",
    paragraphs: [
      "Manchester has busy city roads, residential areas, commercial districts and major routes connecting the city with surrounding areas.",
      "A tyre problem can happen anywhere during your journey.",
      "Road Heroes 24/7 provides mobile tyre assistance across suitable Manchester locations, helping drivers arrange tyre fitting and replacement without unnecessarily driving a damaged vehicle.",
      "Our service can be relevant for drivers in Manchester city centre as well as surrounding areas.",
    ],
  },
  {
    id: "mobile-tyre-service-for-cars-and-vans",
    group: "secondary",
    eyebrow: "Cars & Vans",
    title: "Mobile Tyre Service For Cars And Vans",
    paragraphs: [
      "Road Heroes 24/7 can provide mobile tyre assistance for suitable cars and light commercial vehicles, subject to tyre requirements and availability.",
      "For van drivers and small businesses, tyre problems can create additional disruption because the vehicle may be essential for daily work.",
      "Mobile tyre assistance can help reduce unnecessary downtime by bringing suitable tyre services to an accessible location.",
      "Whether you use your vehicle for commuting, family travel or business purposes, keeping your tyres in good condition is essential.",
    ],
  },
  {
    id: "tyre-replacement-when-you-need-it",
    group: "secondary",
    eyebrow: "Replacement Guidance",
    title: "Tyre Replacement When You Need It",
    paragraphs: [
      "Tyres naturally wear over time, but unexpected damage can also make replacement necessary.",
    ],
    listIntro: "A tyre may require replacement because of:",
    bullets: [
      "Severe puncture damage",
      "Sidewall damage",
      "Excessive tread wear",
      "Impact damage",
      "Age and condition",
      "Damage that cannot be safely repaired",
    ],
    closingParagraph:
      "If you are unsure whether a tyre needs repair or replacement, professional assessment can help determine the most suitable option.",
  },
  {
    id: "mobile-tyre-service-for-busy-drivers",
    group: "secondary",
    eyebrow: "Busy Drivers",
    title: "Mobile Tyre Service For Busy Drivers",
    paragraphs: [
      "Finding time to visit a tyre centre can be difficult.",
      "Work commitments, family responsibilities and daily travel can make a simple tyre change more complicated than expected.",
      "A mobile tyre service provides a more convenient alternative by allowing suitable tyre work to be carried out at an accessible location.",
      "This can help you reduce unnecessary travel and avoid spending additional time waiting at a traditional tyre centre.",
    ],
  },
  {
    id: "manchester-mobile-tyre-service-you-can-rely-on",
    group: "closing",
    eyebrow: "Road Heroes 24/7",
    title: "Manchester Mobile Tyre Service You Can Rely On",
    paragraphs: [
      "A damaged or flat tyre can quickly disrupt your plans.",
      "You may not have time to visit a garage, and driving on a damaged tyre may not be safe.",
      "Road Heroes 24/7 provides a convenient Mobile Tyre Service Manchester for customers who need professional tyre assistance at a suitable location.",
      "From everyday tyre fitting to emergency tyre replacement, our mobile approach is designed to make the process easier.",
    ],
    bullets: [
      "Mobile Tyre Fitting Manchester",
      "Emergency Mobile Tyre Fitting Manchester",
      "Mobile Tyre Replacement Manchester",
      "24 Hour Mobile Tyre Service Manchester",
    ],
  },
];

export const coreLandingSections = homeLandingSections.filter(
  (section) => section.group === "core",
);

export const locationLandingSections = homeLandingSections.filter(
  (section) => section.group === "location",
);

export const secondaryLandingSections = homeLandingSections.filter(
  (section) => section.group === "secondary",
);

export const closingLandingSections = homeLandingSections.filter(
  (section) => section.group === "closing",
);

export const homeFaqs: Faq[] = [
  {
    question: "What is a Mobile Tyre Service Manchester?",
    answer:
      "A Mobile Tyre Service Manchester brings tyre fitting, replacement and suitable tyre assistance directly to your location. Depending on access and safety, service can be provided at home, work or a suitable roadside location.",
  },
  {
    question: "How does Mobile Tyre Fitting Manchester work?",
    answer:
      "Contact Road Heroes 24/7 with your location and vehicle details. Once the required service is confirmed, mobile tyre assistance can be arranged at a suitable location, subject to tyre availability and safe working conditions.",
  },
  {
    question: "Do you provide Emergency Mobile Tyre Fitting Manchester?",
    answer:
      "Yes, Road Heroes 24/7 provides emergency mobile tyre fitting for suitable tyre problems across Manchester, subject to location, availability and safe access.",
  },
  {
    question: "Where can I get mobile tyre fitting in Manchester?",
    answer:
      "Mobile tyre fitting may be available at your home, workplace, car park or suitable roadside location across Manchester. The location must provide safe and appropriate access for the mobile service.",
  },
  {
    question: "Can you replace a damaged tyre at the roadside?",
    answer:
      "Yes, suitable damaged tyres can be replaced at an accessible roadside location, subject to the correct tyre being available and safe working conditions.",
  },
  {
    question: "Do you provide Mobile Tyre Replacement Manchester?",
    answer:
      "Yes. Road Heroes 24/7 provides mobile tyre replacement for suitable vehicles across Manchester, subject to tyre size, availability and location.",
  },
  {
    question: "Do you offer a 24 Hour Mobile Tyre Service Manchester?",
    answer:
      "Road Heroes 24/7 provides a 24 hour mobile tyre service for suitable requirements, subject to availability, location and safe working conditions.",
  },
  {
    question: "What information do I need when booking a mobile tyre service?",
    answer:
      "You should provide your vehicle registration where possible, your location and details about the tyre problem. Your tyre size can also help identify the correct replacement tyre.",
  },
  {
    question: "Can you repair a punctured tyre?",
    answer:
      "Some punctures may be suitable for repair, while others require replacement. The appropriate option depends on the location and severity of the damage and whether the tyre remains safe to use.",
  },
  {
    question: "Can I get mobile tyre fitting at home?",
    answer:
      "Yes, mobile tyre fitting can be arranged at suitable residential locations where there is safe access and enough space to complete the work.",
  },
  {
    question: "Can you fit tyres at my workplace?",
    answer:
      "Yes, workplace tyre fitting can be arranged where the location provides suitable and safe access for the mobile service.",
  },
  {
    question: "What should I do if I have a flat tyre in Manchester?",
    answer:
      "If possible, stop in a safe location and avoid driving on a flat or seriously damaged tyre. Contact Road Heroes 24/7 and provide your location and vehicle details so the appropriate mobile tyre service can be arranged.",
  },
  {
    question: "Do you provide mobile tyre services across Greater Manchester?",
    answer:
      "Road Heroes 24/7 provides mobile tyre assistance across Manchester and suitable surrounding areas, subject to location, availability and safe working conditions.",
  },
  {
    question: "Why choose a mobile tyre service instead of visiting a garage?",
    answer:
      "Mobile tyre fitting can save travel time and reduce the inconvenience of taking your vehicle to a tyre centre. The service comes to a suitable location, making tyre fitting and replacement more convenient.",
  },
  {
    question: "When should I replace my tyre?",
    answer:
      "A tyre may require replacement when it has significant wear, severe puncture damage, sidewall damage or another condition that makes it unsuitable or unsafe for continued use.",
  },
];

export const homeProcessSteps: ProcessStep[] = [
  {
    title: "Contact Road Heroes 24/7",
    description: "Tell us where your vehicle is located and explain the tyre problem.",
  },
  {
    title: "Provide Your Vehicle Details",
    description:
      "Where possible, provide your vehicle registration, tyre size and information about the tyre issue.",
  },
  {
    title: "Discuss The Required Service",
    description:
      "We can identify whether your requirement is for tyre fitting, replacement, repair or emergency assistance.",
  },
  {
    title: "Arrange Mobile Assistance",
    description:
      "A suitable mobile service can attend your location where access and working conditions allow.",
  },
  {
    title: "Get Back On The Road",
    description:
      "Once the required work has been completed and the vehicle is safe to continue, you can continue your journey.",
  },
];

export type AreasCovered = {
  eyebrow: string;
  title: string;
  intro: string;
  listIntro: string;
  areas: string[];
  closing: string;
};

export const areasCovered: AreasCovered = {
  eyebrow: "Coverage",
  title: "Areas We Cover Across Manchester",
  intro:
    "Road Heroes 24/7 provides mobile tyre assistance across Manchester and suitable surrounding areas, subject to location, access and availability.",
  listIntro: "Our service can cover areas including:",
  areas: [
    "Manchester City Centre",
    "Longsight",
    "Rusholme",
    "Fallowfield",
    "Withington",
    "Didsbury",
    "Wythenshawe",
    "Chorlton cum Hardy",
    "Moss Side",
    "Hulme",
    "Ardwick",
    "Gorton",
    "Beswick",
    "Newton Heath",
    "Cheetham Hill",
    "Blackley",
    "Salford",
    "Trafford",
    "Stockport",
    "Oldham",
    "Rochdale",
    "Bury",
    "Bolton",
    "Tameside",
    "Wigan",
  ],
  closing:
    "If you are outside these areas, contact Road Heroes 24/7 with your location and tyre requirements to check service availability.",
};

export type HomeServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const homeServices: HomeServiceItem[] = [
  {
    title: "Mobile Tyre Fitting",
    description:
      "Professional tyre fitting at a suitable location, helping you avoid an unnecessary trip to a garage.",
    icon: Truck,
  },
  {
    title: "Mobile Tyre Replacement",
    description:
      "Replacement tyres can be supplied and fitted where suitable, subject to tyre size and availability.",
    icon: RefreshCw,
  },
  {
    title: "Emergency Tyre Fitting",
    description:
      "Mobile assistance for unexpected tyre problems when you cannot safely continue your journey.",
    icon: Siren,
  },
  {
    title: "Mobile Tyre Repair",
    description:
      "Where a puncture or tyre issue is safe and suitable for repair, mobile assistance may be available.",
    icon: Wrench,
  },
  {
    title: "Mobile Puncture Assistance",
    description:
      "If you have a puncture at home, work or a suitable roadside location, mobile tyre assistance can provide a convenient solution.",
    icon: Gauge,
  },
];
