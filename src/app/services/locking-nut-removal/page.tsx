import type { Metadata } from "next";

import { ServicePage } from "@/components/service-page";
import { getServiceDetail } from "@/lib/services";

const service = getServiceDetail("locking-nut-removal")!;

export const metadata: Metadata = {
  title: service.name,
  description: service.heroDescription,
  openGraph: {
    title: `${service.name} | Road Heroes 24/7`,
    description: service.heroDescription,
  },
};

export default function LockingNutRemovalPage() {
  return <ServicePage service={service} />;
}
