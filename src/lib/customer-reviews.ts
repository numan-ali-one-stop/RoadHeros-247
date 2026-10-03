import { BadgePoundSterling, Clock3, MapPin, ShieldCheck } from "lucide-react";

import type { GoogleReview } from "@/lib/google-reviews";

/**
 * Genuine Road Heroes 247 customer reviews, shown on the live site when the Google
 * Places API isn't connected. Only add reviews real customers wrote about Road Heroes,
 * copied as written (e.g. from Google), with the name they posted under.
 */
export const genuineReviews: GoogleReview[] = [
  // {
  //   author: "Name as shown on the review",
  //   rating: 5,
  //   text: "Review text exactly as the customer wrote it.",
  //   relativeTime: "2 weeks ago",
  // },
];

/** Shown in the reviews section until there are genuine reviews: service promises, not reviews. */
export const serviceExpectations = {
  eyebrow: "What To Expect",
  title: "Trusted by Drivers Across Greater Manchester",
  subtitle:
    "Here is what you can expect when you call Road Heroes 247 LTD for mobile tyre help.",
  items: [
    {
      title: "We Come To You",
      description:
        "Tyre help at your home, workplace or an appropriate roadside location, so you do not have to drive on an unsafe tyre.",
      icon: MapPin,
    },
    {
      title: "Help Day Or Night",
      description:
        "Emergency mobile tyre assistance 24/7 across Greater Manchester, subject to availability.",
      icon: Clock3,
    },
    {
      title: "Price Agreed First",
      description:
        "We discuss your vehicle, tyre and location details and explain the price before any work begins.",
      icon: BadgePoundSterling,
    },
    {
      title: "Honest Repair Advice",
      description:
        "If a puncture can be repaired safely we will tell you. If not, we explain why and talk through replacement.",
      icon: ShieldCheck,
    },
  ],
};
