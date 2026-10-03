import type { LucideIcon } from "lucide-react";
import {
  BatteryCharging,
  Clock3,
  Map as MapIcon,
  MapPin,
  Siren,
  Truck,
} from "lucide-react";

export type WhyUsFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyUsTitle = "Why Choose Road Heroes 247 LTD?";

export const whyUsCta = "Call Road Heroes 247 LTD";

export const whyUsFeatures: WhyUsFeature[] = [
  {
    title: "24/7 Service",
    description: "Emergency mobile tyre assistance day or night",
    icon: Clock3,
  },
  {
    title: "We Come to You",
    description: "Home, work and appropriate roadside locations",
    icon: MapPin,
  },
  {
    title: "Greater Manchester Coverage",
    description: "Serving the main boroughs and surrounding areas",
    icon: MapIcon,
  },
  {
    title: "Emergency Tyre Replacement",
    description: "Assistance for flat, damaged and blown tyres",
    icon: Siren,
  },
  {
    title: "Mobile Service",
    description: "Tyre assistance brought directly to your location",
    icon: Truck,
  },
  {
    title: "Additional Assistance",
    description: "Jump starts and locking nut removal available",
    icon: BatteryCharging,
  },
];
