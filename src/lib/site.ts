import type { LucideIcon } from "lucide-react";
import { BatteryCharging, Car, Home, KeyRound, Truck } from "lucide-react";

import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
} from "@/components/icons/social-icons";

const DEFAULT_SITE_URL = "http://localhost:3000";

function normalizeUrl(url: string): string {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export const siteConfig = {
  name: "Road Heroes 24/7",
  shortName: "Road Heroes",
  description:
    "24/7 mobile tyre service across Manchester. Mobile tyre fitting, emergency tyre replacement and roadside tyre assistance — we come to you, day or night.",
  url: normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL),
  phone: "0800 555 0124",
  phoneHref: "tel:+448005550124",
  email: "help@roadheroes247.co.uk",
  address: "Unit 4, Foundry Business Park, Manchester, M1 2AB",
  hours: "Callouts available 24 hours a day, 7 days a week",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export type ServiceSummary = {
  slug: string;
  name: string;
  shortDescription: string;
  icon: LucideIcon;
  /** Overrides the default `/services/{slug}` link when the service has its own dedicated landing page. */
  href?: string;
};

export const services: ServiceSummary[] = [
  {
    slug: "mobile-tyre-fitting",
    name: "Mobile Tyre Fitting",
    shortDescription: "Puncture or blowout? A fitter comes to your location.",
    icon: Truck,
    href: "/mobile-tyre-fitting-manchester",
  },
  {
    slug: "home-tyre-fitting",
    name: "Home Tyre Fitting",
    shortDescription: "Book ahead and we fit new tyres on your driveway.",
    icon: Home,
    href: "/home-tyre-fitting-manchester",
  },
  {
    slug: "jump-start",
    name: "Jump Start",
    shortDescription: "Flat battery? We'll get your engine running again.",
    icon: BatteryCharging,
    href: "/car-jump-start-manchester",
  },
  {
    slug: "locking-nut-removal",
    name: "Locking Nut Removal",
    shortDescription: "Lost the key or a seized nut? We'll remove it safely.",
    icon: KeyRound,
  },
];

export function getServiceBySlug(slug: string): ServiceSummary | undefined {
  return services.find((service) => service.slug === slug);
}

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "X (Twitter)", href: "https://x.com", icon: XIcon },
] as const;

export const brandIcon: LucideIcon = Car;
