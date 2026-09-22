import type { LucideIcon } from "lucide-react";
import { Clock3, Home, ListChecks, MapPin, Siren, Sparkles } from "lucide-react";

export type WhyUsFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyUsIntro =
  "Choosing the right mobile tyre service is about more than simply getting a tyre fitted. You need a service that understands the inconvenience caused by tyre problems and provides a straightforward solution.";

export const whyUsFeatures: WhyUsFeature[] = [
  {
    title: "We Come To You",
    description:
      "You do not always need to drive to a tyre centre. Where safe access is available, our mobile service can come to your location.",
    icon: MapPin,
  },
  {
    title: "Convenient Service",
    description:
      "Mobile tyre fitting can save unnecessary travel and reduce disruption to your day.",
    icon: Sparkles,
  },
  {
    title: "Emergency Assistance",
    description:
      "When an unexpected tyre problem leaves you unable to continue your journey safely, mobile assistance can provide a practical option.",
    icon: Siren,
  },
  {
    title: "Home And Workplace Fitting",
    description:
      "Where access is suitable, tyres can be fitted at home or at your workplace.",
    icon: Home,
  },
  {
    title: "24 Hour Availability",
    description:
      "Our 24 hour mobile tyre service provides an option for customers who need assistance outside normal garage hours, subject to availability.",
    icon: Clock3,
  },
  {
    title: "Straightforward Process",
    description:
      "We aim to make the process simple from the first contact through to completing the required tyre service.",
    icon: ListChecks,
  },
];

export type CustomerReview = {
  title: string;
  description: string;
  rating: number;
};

// Placeholder review copy — swap for verified Google reviews before launch.
export const customerReviewsIntro =
  "At Road Heroes 24/7, our goal is to provide a professional and convenient experience from the first contact to the completion of the tyre service.";

export const customerReviews: CustomerReview[] = [
  {
    title: "Professional Mobile Tyre Service",
    description:
      "A convenient service for drivers who need tyre assistance without the hassle of visiting a garage.",
    rating: 5,
  },
  {
    title: "Convenient Tyre Fitting",
    description:
      "Mobile tyre fitting makes it easier to arrange tyre replacement at a suitable home or workplace location.",
    rating: 5,
  },
  {
    title: "Helpful Emergency Service",
    description:
      "When a tyre problem happens unexpectedly, having access to mobile assistance can make the situation much easier to manage.",
    rating: 5,
  },
  {
    title: "Simple And Straightforward",
    description:
      "A mobile approach helps reduce unnecessary travel and makes tyre fitting more convenient for busy drivers.",
    rating: 5,
  },
  {
    title: "Reliable Tyre Assistance",
    description:
      "Road Heroes 24/7 focuses on professional mobile tyre assistance for customers across Manchester.",
    rating: 5,
  },
];

