"use client";

import { Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "cn";

import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/mobile-nav";
import { ServicesMenu } from "@/components/services-menu";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { brandIcon as BrandIcon, navLinks, siteConfig } from "@/lib/site";

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

  const tone: "light" | "dark" = scrolled ? "light" : "dark";

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
        <Link
          href="/"
          className={cn(
            "flex shrink-0 items-center gap-2 text-base font-semibold tracking-tight",
            tone === "dark" ? "text-white" : "text-foreground",
          )}
        >
          <span
            className={cn(
              "flex size-9 items-center justify-center rounded-full",
              tone === "dark" ? "bg-white/15" : "bg-primary/10",
            )}
          >
            <BrandIcon
              className={cn(
                "size-4.5",
                tone === "dark" ? "text-white" : "text-primary",
              )}
              aria-hidden="true"
            />
          </span>
          <span className="font-heading">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            if (link.label === "Services") {
              return <ServicesMenu key={link.href} tone={tone} />;
            }

            const active = isRouteActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                  tone === "dark"
                    ? "text-white/85 hover:text-white"
                    : "text-foreground/75 hover:text-foreground",
                  active && (tone === "dark" ? "text-white" : "text-foreground"),
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className={cn(tone === "dark" ? "text-white" : "text-foreground")}>
            <ThemeToggle />
          </div>
          <Button
            render={<a href={siteConfig.phoneHref} />}
            size="sm"
            variant={tone === "dark" ? "secondary" : "default"}
            className={cn(
              "hidden lg:inline-flex",
              tone === "dark" &&
                "bg-white text-charcoal-950 hover:bg-white/90",
            )}
          >
            <Phone className="size-3.5" aria-hidden="true" />
            {siteConfig.phone}
          </Button>
          <div className="md:hidden">
            <MobileNav tone={tone} />
          </div>
        </div>
      </Container>
    </header>
  );
}
