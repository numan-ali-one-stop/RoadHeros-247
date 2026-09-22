import type { LucideIcon } from "lucide-react";
import {
  Banknote,
  Briefcase,
  Building2,
  Car,
  Clock3,
  Handshake,
  Headset,
  Navigation,
  ShieldCheck,
} from "lucide-react";

import type { ContentSection } from "@/lib/content-sections";
import type { Faq } from "@/lib/services";

export const aboutHero = {
  badge: "About Road Heroes 24/7",
  title:
    "About Road Heroes 24/7 | The Mobile Tyre Team Behind Greater Manchester's Roadside Rescues",
  tagline:
    "Local Fitters. Honest Prices. A Real Person On The Phone At Three In The Morning.",
  points: [
    "A Greater Manchester business serving Greater Manchester drivers",
    "Trained, insured fitters in fully equipped mobile vans",
    "Available 24 hours a day, every day of the year",
    "Thousands of roadside jobs completed across all 10 boroughs",
    "Prices agreed on the phone before anybody sets off",
  ],
  cta: "Talk To Us Now",
};

export type AboutValue = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const aboutValuesIntro = "What We Stand For";

export const aboutValues: AboutValue[] = [
  {
    title: "Honest Pricing",
    description:
      "The figure quoted on the phone is the figure paid at the roadside. Call out, labour, valve, balancing and disposal are all inside it. There is no night rate, no weekend loading and no sudden extras once the fitter sees the car on the drive. If somebody rings us at two in the morning in a difficult spot, that is exactly the moment they are easiest to overcharge, and exactly the moment we refuse to.",
    icon: Banknote,
  },
  {
    title: "Realistic Timings",
    description:
      "Twenty to forty minutes is our typical response across the city. When traffic, weather or distance mean it will be longer, we say so before the booking rather than after. A customer who is told ninety minutes and waits ninety minutes is far better served than one who is told twenty and waits ninety.",
    icon: Clock3,
  },
  {
    title: "Proper People On The Phone",
    description:
      "Every call is answered by a person, not a menu and not a form. On a dark hard shoulder with children in the back, staying on the line matters as much as the tyre does.",
    icon: Headset,
  },
  {
    title: "Safety Before Sales",
    description:
      "Our fitters are trained to work safely on live carriageways, in emergency refuge areas and in busy car parks. If it is not safe for us to work where your vehicle is standing, we will tell you and arrange the safest alternative rather than taking a risk to close the job.",
    icon: ShieldCheck,
  },
  {
    title: "Local Accountability",
    description:
      "We live here. Our fitters shop in the same retail parks, use the same motorway junctions and take their own kids to the same schools. That is a stronger guarantee of decent service than any national promise on a website.",
    icon: Handshake,
  },
];

export const aboutSections: ContentSection[] = [
  {
    id: "who-we-are",
    eyebrow: "Who We Are",
    title: "Who We Are",
    paragraphs: [
      "Road Heroes 24/7 is a mobile tyre fitting and roadside tyre repair service built around one simple idea. When a tyre fails, the person it happens to should not also have to solve the problem of getting the car to a garage.",
      "We are based in Greater Manchester and we work across the whole of it. Manchester, Salford, Bolton, Bury, Oldham, Rochdale, Stockport, Tameside, Trafford and Wigan, plus the motorway ring that ties them all together. Our fitters are local people who know these roads properly, not a national call centre passing your postcode to whoever happens to answer.",
      "The work itself is straightforward. We come to your vehicle with the correct tyre already loaded, fit it, balance it, torque it and take the old one away. What people actually remember afterwards is not the tyre. It is that somebody answered the phone, gave them a straight price and turned up when they said they would.",
    ],
    image: {
      src: "https://placehold.co/1200x900/1c2530/ffffff.png?text=Who+We+Are",
      alt: "Placeholder image — Road Heroes 24/7 mobile fitter at work",
    },
  },
  {
    id: "where-this-started",
    eyebrow: "Our Story",
    title: "Where This Started",
    paragraphs: [
      "Like most useful businesses, this one started with a bad experience. Sitting on a hard shoulder waiting hours for help, being quoted one figure on the phone and charged another on arrival, ringing round garages that all shut at five, and being told a tyre would have to be ordered in for Tuesday.",
      "Anyone who drives for a living in this city has a version of that story. We decided the sensible answer was to put the workshop in a van, keep real stock on board, answer the phone at any hour and quote honestly before setting off. Everything we do now still comes back to those four things.",
    ],
    image: {
      src: "https://placehold.co/1200x900/1c2530/ffffff.png?text=Where+This+Started",
      alt: "Placeholder image — Road Heroes 24/7 origin story",
    },
  },
  {
    id: "how-we-have-grown",
    eyebrow: "Growth",
    title: "How We Have Grown",
    paragraphs: [
      "We started with one van and word of mouth. Most of our early customers were taxi drivers, delivery drivers and trades, because those are the people who feel a flat tyre the hardest and who talk to each other constantly about who is worth ringing.",
      "That reputation carried us into family cars, fleets and workplace contracts across the region. Today we run multiple vans covering the whole of Greater Manchester around the clock, and a large share of our work still arrives the same way it always did, through somebody telling somebody else that we actually turned up.",
    ],
    image: {
      src: "https://placehold.co/1200x900/1c2530/ffffff.png?text=How+We+Have+Grown",
      alt: "Placeholder image — Road Heroes 24/7 fleet of mobile tyre vans",
    },
  },
  {
    id: "what-we-do",
    eyebrow: "What We Do",
    title: "What We Do",
    paragraphs: [
      "Every van is a working tyre bay on wheels. That means a proper tyre changing machine, a wheel balancer, a compressor, torque tools, TPMS equipment, locking nut removal kits and a stock of tyres across budget, mid range and premium.",
    ],
    bullets: [
      "Emergency tyre replacement at the roadside, at home or at work",
      "Permanent puncture repair using an internal plug and patch",
      "Planned tyre fitting on driveways and in workplace car parks",
      "Locking wheel nut removal without damaging the alloy",
      "TPMS sensor replacement, new valves and system resets",
      "Wheel balancing and full pressure checks",
      "Jump starts and roadside assistance",
      "Van, taxi and small fleet tyre support on account",
    ],
  },
  {
    id: "the-standard-we-work-to",
    eyebrow: "Our Standard",
    title: "The Standard We Work To",
    paragraphs: [
      "There is a temptation in mobile work to cut corners because nobody is watching. We take the opposite view. Every job happens in front of the customer, on their driveway or at the roadside, so the work has to stand up to being watched.",
    ],
    bullets: [
      "Every tyre balanced, never fitted and waved off",
      "Every wheel nut torqued to the manufacturer setting with a torque wrench",
      "A new valve fitted with every new tyre as standard",
      "Alloy rims protected during fitting so they are not marked",
      "Every tyre on the vehicle pressure checked before we leave",
      "Old tyres taken away and sent for proper recycling",
    ],
  },
  {
    id: "if-a-repair-will-do",
    eyebrow: "Honest Advice",
    title: "If A Repair Will Do, We Repair It",
    paragraphs: [
      "If a puncture sits in the central tread area, is within the repairable size limit and the tyre has not been driven on while flat, we repair it. A repair costs a fraction of a replacement, and telling somebody they need a new tyre when they do not is the fastest way to lose a customer for life.",
      "Equally, if the damage is in the sidewall or shoulder, if the tyre has run flat, or if the tread is already near the legal minimum of 1.6mm, we say so plainly. We would rather lose a small job than put anyone back on the road on a tyre we do not trust.",
    ],
  },
  {
    id: "the-small-things-we-do-anyway",
    eyebrow: "Little Extras",
    title: "The Small Things We Do Anyway",
    paragraphs: [],
    bullets: [
      "Reinflating your spare while we are there if you ask",
      "Checking the rest of your tyres and telling you honestly what has life left",
      "Showing you the nail, the screw or the split so you can see what happened",
      "Explaining what a repair involves rather than just doing it",
      "No sales pressure on tyres you do not need yet",
    ],
    closingParagraph:
      "Covering Greater Manchester every day of the year, including Christmas Day and New Year.",
  },
  {
    id: "the-people-behind-the-vans",
    eyebrow: "Our Team",
    title: "The People Behind The Vans",
    paragraphs: [
      "Every fitter working under our name is trained, fully insured and experienced in roadside conditions. Working in a warm workshop with a ramp is one thing. Changing a tyre in the rain on a dark verge, or in a multi storey with two inches of clearance, is a different skill entirely.",
      "We look for people who are calm with customers who are stressed, methodical about torque and balancing when nobody is checking, and honest enough to say a repair will do when a replacement would earn more. Those three qualities are harder to find than technical ability, and they are what the reviews end up being about.",
    ],
    image: {
      src: "https://placehold.co/1200x900/1c2530/ffffff.png?text=The+People+Behind+The+Vans",
      alt: "Placeholder image — Road Heroes 24/7 mobile fitters",
    },
  },
  {
    id: "equipment-that-matches-a-workshop",
    eyebrow: "Our Kit",
    title: "Equipment That Matches A Workshop",
    paragraphs: [],
    bullets: [
      "Mobile tyre changing machines suitable for alloys and low profile fitments",
      "Wheel balancers calibrated regularly",
      "Torque wrenches rather than impact guns for final tightening",
      "TPMS diagnostic and reset tools",
      "Locking wheel nut removal sets",
      "Full high visibility and roadside safety equipment",
    ],
  },
];

export const aboutSectionsPrimary = aboutSections.slice(0, 6);
export const aboutSectionsSecondary = aboutSections.slice(6);

export type Borough = {
  name: string;
  towns: string;
};

export const whereWeWork = {
  eyebrow: "Coverage",
  title: "Where We Work",
  intro:
    "Road Heroes 24/7 covers every borough of Greater Manchester with 27 towns and 8 motorways served around the clock.",
  boroughs: [
    {
      name: "Bury",
      towns: "Bury, Radcliffe, Whitefield, Prestwich, Ramsbottom and Tottington.",
    },
    {
      name: "Bolton",
      towns: "Bolton, Farnworth, Horwich, Westhoughton, Little Lever and Blackrod.",
    },
    {
      name: "Manchester",
      towns:
        "Manchester city centre, Didsbury, Chorlton, Levenshulme, Wythenshawe, Northenden, Moston and Gorton.",
    },
    {
      name: "Oldham",
      towns: "Oldham, Chadderton, Royton, Shaw, Failsworth, Saddleworth and Uppermill.",
    },
    {
      name: "Rochdale",
      towns: "Rochdale, Heywood, Middleton, Littleborough and Milnrow.",
    },
    {
      name: "Salford",
      towns: "Salford, Eccles, Swinton, Walkden, Worsley and Irlam.",
    },
    {
      name: "Stockport",
      towns: "Stockport, Cheadle, Bramhall, Marple, Hazel Grove and Reddish.",
    },
    {
      name: "Tameside",
      towns:
        "Ashton under Lyne, Hyde, Denton, Droylsden, Stalybridge, Dukinfield, Audenshaw and Mossley.",
    },
    {
      name: "Trafford",
      towns:
        "Altrincham, Sale, Stretford, Urmston, Timperley, Partington, Old Trafford and Hale.",
    },
    {
      name: "Wigan",
      towns: "Wigan, Leigh, Atherton, Hindley, Standish and Ashton in Makerfield.",
    },
  ] satisfies Borough[],
  motorwaysTitle: "Motorways And Roads Covered",
  motorways: ["M60", "M602", "M61", "M62", "M56", "M66", "M67", "A627"],
  outsideBoundaryTitle: "Just Outside The Boundary",
  outsideBoundary:
    "If your postcode sits slightly beyond Greater Manchester, ring us anyway. We regularly help drivers on the edges of Cheshire, Lancashire and Merseyside and we will tell you honestly whether we can reach you.",
  closingLine:
    "Every borough, 27 towns and 8 motorways covered 24 hours a day, 7 days a week.",
};

export type Audience = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whoWeLookAfterTitle = "Who We Look After";

export const whoWeLookAfter: Audience[] = [
  {
    title: "Everyday Drivers",
    description:
      "School runs, commutes, weekend trips and the car that has to start on Monday morning. Most of our work is ordinary people having a bad day, and getting them moving again quickly with no drama is the whole job.",
    icon: Car,
  },
  {
    title: "Drivers Who Earn Behind The Wheel",
    description:
      "Taxi and private hire drivers, couriers, delivery drivers and mobile trades. Every hour off the road is money gone, so these jobs get treated as the emergencies they genuinely are.",
    icon: Briefcase,
  },
  {
    title: "Businesses And Small Fleets",
    description:
      "Vans, service vehicles and pool cars maintained on site so nothing has to be sent to a garage during working hours. Account terms are available for regular customers, with invoicing that suits your accounts rather than ours.",
    icon: Building2,
  },
  {
    title: "Anyone Stuck Somewhere Difficult",
    description:
      "Motorway hard shoulders, retail park car parks, multi storeys, farm tracks and industrial estates. If a recovery truck would struggle to help usefully, a mobile fitter is usually the right answer.",
    icon: Navigation,
  },
];

export type AboutTestimonial = {
  name: string;
  location: string;
  quote: string;
};

export const aboutTestimonialsTitle = "What Our Customers Say";
export const aboutTestimonialsSubtitle = "Feedback From Across Greater Manchester";

export const aboutTestimonials: AboutTestimonial[] = [
  {
    name: "Sarah",
    location: "Manchester",
    quote:
      "Flat tyre in a hospital car park at half nine at night after a late shift and I had no idea who to ring. Repaired it there and then, showed me the screw that caused it, charged exactly what was quoted on the phone. Cannot fault it.",
  },
  {
    name: "Imran",
    location: "Stockport",
    quote:
      "Blowout on the M60 with my two kids in the back. They stayed on the phone with me until the van arrived, about forty minutes, and had a new tyre on and balanced in twenty. Worth every penny for the peace of mind alone.",
  },
  {
    name: "Dave",
    location: "Bolton",
    quote:
      "Booked two tyres at my house on a Saturday morning so I did not lose half a day sitting in a waiting room. Arrived when they said, sorted it on the drive, took the old ones away. Third time I have used them now.",
  },
  {
    name: "Michelle",
    location: "Salford",
    quote:
      "Locking wheel nut key had vanished and nowhere would touch the car. These lads had it off in about ten minutes and fitted a normal one. Polite, quick and cheaper than I expected.",
  },
  {
    name: "Tom",
    location: "Oldham",
    quote:
      "Van tyre went halfway through a delivery round and I was losing money by the hour. Rang at half seven in the morning and I was back out on the road before nine. Absolutely brilliant.",
  },
];

export const leaveReviewNote = {
  title: "Leave Us A Review",
  description:
    "If we have looked after you, a review on Google helps the next local driver know exactly who to ring at three in the morning.",
};

export const aboutFaqsTitle = "Frequently Asked Questions About Road Heroes 24/7";

export const aboutFaqs: Faq[] = [
  {
    question: "Are you a local business or a national booking service?",
    answer:
      "We are a Greater Manchester business with our own vans and our own fitters. When you ring, you are speaking to the people who will actually be doing the work.",
  },
  {
    question: "Are your fitters qualified and insured?",
    answer:
      "Yes. Every fitter is trained, fully insured and experienced in roadside work, and they arrive in a marked van with workshop grade equipment.",
  },
  {
    question: "Are you really open 24 hours a day?",
    answer:
      "Yes, including nights, weekends, bank holidays and Christmas. There is no separate out of hours charge, and the price quoted at two in the morning is the same one we would quote at two in the afternoon.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "All 10 boroughs of Greater Manchester, covering 27 towns, along with the motorway network including the M60, M62, M61, M66, M67, M56, M602 and the A627.",
  },
  {
    question: "How quickly do you usually arrive?",
    answer:
      "Twenty to forty minutes is typical across most of the city. Outer areas, rural lanes and heavy traffic can stretch that, and we always give a realistic window on the phone rather than an optimistic one.",
  },
  {
    question: "Do you sell tyres or just fit them?",
    answer:
      "Both. We carry budget, mid range and premium tyres on board and can source almost anything else quickly. We also offer a fit only service if you have already bought tyres yourself.",
  },
  {
    question: "Do you work with businesses and fleets?",
    answer:
      "We do. Account terms, planned fitting slots and priority response are available for regular commercial customers.",
  },
  {
    question: "What happens to my old tyre?",
    answer:
      "It goes with us and is sent for proper recycling. That is included in the price, not charged as an extra.",
  },
];

export const aboutFinalCta = {
  title: "Talk To Road Heroes 24/7",
  intro:
    "Whether you are standing next to a flat tyre right now or planning ahead for a set that is close to the legal limit, one phone call is all it takes.",
  points: [
    "Available 24 hours a day, every day of the year",
    "All 10 boroughs of Greater Manchester and the full motorway network",
    "Home, workplace, roadside, car park and motorway call outs",
    "Clear pricing agreed before we set off, with nothing added afterwards",
  ],
  callLabel: "Call Road Heroes 24/7 On",
  closingLine:
    "Local fitters, honest prices and a real person on the phone, wherever your car has stopped.",
};
