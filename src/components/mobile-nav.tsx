"use client";

import { Menu as MenuIcon, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "cn";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, services, siteConfig } from "@/lib/site";

function isRouteActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            className="text-foreground"
          />
        }
      >
        <MenuIcon aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="right" className="flex w-full flex-col sm:max-w-sm">
        <SheetHeader className="border-border border-b">
          <SheetTitle>{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-2">
          {navLinks.map((link) => {
            if (link.label === "Services") {
              const active =
                isRouteActive(pathname, "/services") ||
                services.some((service) => service.href && pathname.startsWith(service.href));
              return (
                <Accordion key={link.href} className="w-full">
                  <AccordionItem value="services" className="border-none">
                    <AccordionTrigger
                      className={cn(
                        "rounded-lg px-3 py-2.5 text-base font-medium hover:no-underline",
                        active && "text-primary",
                      )}
                    >
                      Services
                    </AccordionTrigger>
                    <AccordionContent className="pb-1 pl-1 [&_a]:no-underline">
                      <div className="flex flex-col gap-1">
                        {services.map((service) => {
                          const serviceHref = service.href ?? `/services/${service.slug}`;
                          const serviceActive = pathname === serviceHref;
                          return (
                            <SheetClose
                              key={service.slug}
                              render={<Link href={serviceHref} />}
                              className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm",
                                serviceActive
                                  ? "bg-accent text-foreground"
                                  : "text-muted-foreground hover:bg-accent hover:text-foreground",
                              )}
                            >
                              <service.icon
                                className="text-primary size-4 shrink-0"
                                aria-hidden="true"
                              />
                              {service.name}
                            </SheetClose>
                          );
                        })}
                        <SheetClose
                          render={<Link href="/services" />}
                          className="text-primary rounded-lg px-3 py-2 text-sm font-medium"
                        >
                          View all services
                        </SheetClose>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            }

            const active = isRouteActive(pathname, link.href);
            return (
              <SheetClose
                key={link.href}
                render={<Link href={link.href} />}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-base font-medium",
                  active
                    ? "text-primary"
                    : "text-foreground hover:bg-accent",
                )}
              >
                {link.label}
              </SheetClose>
            );
          })}
        </nav>
        <div className="border-border flex flex-col gap-3 border-t p-4">
          <Button render={<a href={siteConfig.phoneHref} />} className="w-full">
            <Phone className="size-4" aria-hidden="true" />
            Call {siteConfig.phone}
          </Button>
          <Button
            variant="outline"
            render={<Link href="/contact" />}
            className="w-full"
            onClick={() => setOpen(false)}
          >
            Get a free quote
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
