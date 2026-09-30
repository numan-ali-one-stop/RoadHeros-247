"use client";

import { Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "cn";

import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/mobile-nav";
import { ServiceAreaMenu } from "@/components/service-area-menu";
import { ServicesMenu } from "@/components/services-menu";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { navLinks, siteConfig } from "@/lib/site";

function isRouteActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled
          ? "bg-background/85 border-border border-b shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-18">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${siteConfig.name} home`}>
          <Logo priority className="h-11 lg:h-13" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            if (link.label === "Services") {
              return <ServicesMenu key={link.href} />;
            }
            if (link.label === "Service Area") {
              return <ServiceAreaMenu key={link.href} />;
            }

            const active = isRouteActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-foreground/75 hover:text-foreground rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                  active && "text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Button
            render={<a href={siteConfig.phoneHref} />}
            size="sm"
            className="hidden lg:inline-flex"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            {siteConfig.phone}
          </Button>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
