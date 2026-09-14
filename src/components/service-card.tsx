import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import type { ServiceSummary } from "@/lib/site";

export function ServiceCard({ service }: { service: ServiceSummary }) {
  return (
    <Card className="group/service h-full transition-all hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="flex h-full flex-col gap-4">
        <div className="bg-primary/10 text-primary flex size-11 items-center justify-center rounded-xl">
          <service.icon className="size-5" aria-hidden="true" />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <h3 className="font-heading text-lg font-semibold tracking-tight">
            {service.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
        <Link
          href={`/services/${service.slug}`}
          className="text-primary inline-flex items-center gap-1 text-sm font-medium"
        >
          Learn more
          <ArrowUpRight className="size-3.5 transition-transform group-hover/service:translate-x-0.5 group-hover/service:-translate-y-0.5" />
        </Link>
      </CardContent>
    </Card>
  );
}
