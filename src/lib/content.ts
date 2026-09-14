import type { LucideIcon } from "lucide-react";
import {
  Award,
  Clock3,
  Handshake,
  ShieldCheck,
  Sparkles,
  Timer,
  Truck,
  Wrench,
} from "lucide-react";

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "42,000+", label: "Callouts completed" },
  { value: "58 min", label: "Average arrival time" },
  { value: "4.9 / 5", label: "Average customer rating" },
  { value: "24 / 7", label: "Days a year we're on call" },
];

export type WhyUsFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyUsFeatures: WhyUsFeature[] = [
  {
    title: "Genuinely 24/7",
    description:
      "No answering machines, no call centres overseas. A real fitter picks up, day or night, weekends and bank holidays included.",
    icon: Clock3,
  },
  {
    title: "Fully stocked vans",
    description:
      "Every van carries a wide range of tyre sizes, batteries and extraction tools, so most jobs are finished in a single visit.",
    icon: Truck,
  },
  {
    title: "Upfront, honest pricing",
    description:
      "You get a quote before we dispatch anyone. No surprise call-out fees, no pressure to buy more than you need.",
    icon: ShieldCheck,
  },
  {
    title: "Trained, insured fitters",
    description:
      "Every technician is fully insured, background-checked and trained to manufacturer torque and safety standards.",
    icon: Award,
  },
];

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Hannah H.",
    location: "Sheffield",
    quote:
      "Blew a tyre on the ring road at 11pm and had genuinely given up hope of getting home that night. Fitter arrived in 40 minutes, had a new tyre on in 15. Can't thank them enough.",
    service: "Mobile Tyre Fitting",
  },
  {
    name: "Marcus O.",
    location: "Rotherham",
    quote:
      "Booked home tyre fitting for all four tyres before a long trip. Turned up exactly on time, worked around my driveway slope without any fuss, and the car drives like new.",
    service: "Home Tyre Fitting",
  },
  {
    name: "Priya D.",
    location: "Barnsley",
    quote:
      "Flat battery on a freezing morning with the school run looming. They talked me through it calmly on the phone and had me jump-started before I'd finished my coffee.",
    service: "Jump Start",
  },
  {
    name: "Callum R.",
    location: "Doncaster",
    quote:
      "Lost my locking wheel nut key years ago and finally needed new tyres. Was dreading it, but they removed the nut without a scratch on the alloys.",
    service: "Locking Nut Removal",
  },
];

export const logoStrip = [
  "Fleetline Logistics",
  "Northside Cabs",
  "Aurora Property Group",
  "Peak District Tours",
  "Hallam Facilities",
  "Steel City Motors",
];

export type CompanyValue = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const companyValues: CompanyValue[] = [
  {
    title: "Show up, every time",
    description:
      "Reliability is the whole business. If we say an hour, we mean an hour — and we communicate the moment that changes.",
    icon: Timer,
  },
  {
    title: "Do the job properly",
    description:
      "We'd rather take an extra ten minutes and torque things to spec than rush and leave you with a problem down the road.",
    icon: Wrench,
  },
  {
    title: "Treat people fairly",
    description:
      "Transparent pricing, no invented upsells, and advice we'd give our own family.",
    icon: Handshake,
  },
  {
    title: "Keep getting better",
    description:
      "Every fitter trains on the latest vehicle systems, from start-stop batteries to TPMS resets.",
    icon: Sparkles,
  },
];

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

export const timeline: TimelineEvent[] = [
  {
    year: "2016",
    title: "One van, one founder",
    description:
      "Started with a single fitted-out transit van covering Sheffield, answering the phone from the driver's seat.",
  },
  {
    year: "2018",
    title: "First night-shift crew",
    description:
      "Demand for overnight callouts led to our first dedicated night team and a genuine 24/7 rota.",
  },
  {
    year: "2021",
    title: "Regional coverage",
    description:
      "Grew to a fleet of fitters covering South Yorkshire, with live GPS dispatch to find the nearest available van.",
  },
  {
    year: "2024",
    title: "42,000th callout",
    description:
      "Passed a milestone we're proud of, built one honest job at a time — and still answered by a real person.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Danny Ferris",
    role: "Founder & Head Fitter",
    bio: "15 years as a tyre technician before starting RoadHeros with one van and a pager.",
  },
  {
    name: "Aisha Bello",
    role: "Operations Lead",
    bio: "Keeps the dispatch board running and makes sure every van is stocked before the shift starts.",
  },
  {
    name: "Tom Whitfield",
    role: "Senior Mobile Fitter",
    bio: "Specialises in locking nut extraction and awkward fitments other garages turn away.",
  },
  {
    name: "Sarah Nkemelu",
    role: "Customer Care Manager",
    bio: "The voice on the phone at 2am, making sure you know exactly when help is arriving.",
  },
];
