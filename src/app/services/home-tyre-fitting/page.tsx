import type { Metadata } from "next";

import { ServicePage } from "@/components/service-page";
import { getServiceDetail } from "@/lib/services";

const service = getServiceDetail("home-tyre-fitting")!;

export const metadata: Metadata = {
  title: service.name,
  description: service.heroDescription,
  openGraph: {
    title: `${service.name} | RoadHeros 24/7`,
    description: service.heroDescription,
  },
};

export default function HomeTyreFittingPage() {
  return <ServicePage service={service} />;
}
