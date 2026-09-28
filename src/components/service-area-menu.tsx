"use client";

import { ArrowRight, ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "cn";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { serviceAreas } from "@/lib/service-areas";

export function ServiceAreaMenu() {
  const pathname = usePathname();
  const [activeSlug, setActiveSlug] = useState(serviceAreas[0].slug);
  const activeArea =
    serviceAreas.find((area) => area.slug === activeSlug) ?? serviceAreas[0];
  const isActive = serviceAreas.some(
    (area) =>
      area.href === pathname ||
      area.locations.some((location) => location.href === pathname),
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        openOnHover
        delay={100}
        closeDelay={150}
        className={cn(
          "group text-foreground/75 hover:text-foreground data-popup-open:text-foreground focus-visible:ring-ring inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition-colors outline-none focus-visible:ring-2",
          isActive && "text-foreground",
        )}
      >
        Service Area
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
        align="center"
        sideOffset={14}
        className="w-[min(92vw,760px)] rounded-2xl p-0"
      >
        <div className="flex max-h-[min(70vh,520px)]">
          <ul className="border-border flex w-48 shrink-0 flex-col gap-0.5 overflow-y-auto border-r p-2">
            {serviceAreas.map((area) => {
              const selected = area.slug === activeArea.slug;
              return (
                <li key={area.slug}>
                  <button
                    type="button"
                    onClick={() => setActiveSlug(area.slug)}
                    onMouseEnter={() => setActiveSlug(area.slug)}
                    aria-expanded={selected}
                    className={cn(
                      "flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors outline-none",
                      selected
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80 hover:bg-accent hover:text-foreground",
                    )}
                  >
                    {area.name}
                    <ChevronRight className="size-3.5 shrink-0" aria-hidden="true" />
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="flex min-w-0 flex-1 flex-col overflow-y-auto p-4">
            <div className="mb-2 flex items-center justify-between gap-2 px-2">
              <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                {activeArea.name}
              </p>
              {activeArea.href && (
                <DropdownMenuItem
                  render={<Link href={activeArea.href} />}
                  className="text-primary flex w-auto shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold"
                >
                  View {activeArea.name}
                  <ArrowRight className="size-3" aria-hidden="true" />
                </DropdownMenuItem>
              )}
            </div>
            <div className="grid grid-cols-2 gap-0.5 lg:grid-cols-3">
              {activeArea.locations.map((location) => (
                <DropdownMenuItem
                  key={location.href}
                  render={<Link href={location.href} />}
                  className={cn(
                    "flex h-auto items-center gap-2 rounded-lg px-2 py-1.5 text-sm",
                    pathname === location.href && "bg-accent text-foreground",
                  )}
                >
                  <MapPin className="text-primary size-3.5 shrink-0" aria-hidden="true" />
                  <span className="truncate">{location.name}</span>
                </DropdownMenuItem>
              ))}
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
