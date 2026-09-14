"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "cn";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { siteConfig, services } from "@/lib/site";

export function ServicesMenu({ tone }: { tone: "light" | "dark" }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith("/services");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        openOnHover
        delay={100}
        closeDelay={150}
        className={cn(
          "group inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition-colors outline-none focus-visible:ring-2",
          tone === "dark"
            ? "text-white/85 hover:text-white focus-visible:ring-white/60 data-popup-open:text-white"
            : "text-foreground/75 hover:text-foreground focus-visible:ring-ring data-popup-open:text-foreground",
          isActive && (tone === "dark" ? "text-white" : "text-foreground"),
        )}
      >
        Services
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          aria-hidden="true"
          className="mt-px transition-transform group-data-popup-open:rotate-180"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={14}
        className="w-[min(90vw,640px)] rounded-2xl p-4"
      >
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          {services.map((service) => (
            <DropdownMenuItem
              key={service.slug}
              render={<Link href={`/services/${service.slug}`} />}
              className="flex h-auto items-start gap-3 rounded-xl p-3"
            >
              <span className="bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-lg">
                <service.icon className="size-4.5" aria-hidden="true" />
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="text-foreground text-sm font-medium">
                  {service.name}
                </span>
                <span className="text-muted-foreground text-xs leading-snug">
                  {service.shortDescription}
                </span>
              </span>
            </DropdownMenuItem>
          ))}
        </div>
        <div className="border-border mt-2 flex items-center justify-between gap-4 border-t pt-3">
          <p className="text-muted-foreground text-xs">
            Not sure what you need?{" "}
            <a href={siteConfig.phoneHref} className="text-foreground font-medium hover:underline">
              Call {siteConfig.phone}
            </a>
          </p>
          <DropdownMenuItem
            render={<Link href="/services" />}
            className="text-primary flex w-auto shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold"
          >
            View all
            <ArrowRight className="size-3" aria-hidden="true" />
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
