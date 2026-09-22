import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { brandIcon as BrandIcon, siteConfig, socialLinks } from "@/lib/site";

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Our services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const footerServiceLinks = [
  { label: "Mobile Tyre Service Manchester", href: "/#mobile-tyre-service-manchester" },
  { label: "Mobile Tyre Fitting Manchester", href: "/#mobile-tyre-fitting-manchester" },
  {
    label: "Emergency Mobile Tyre Fitting Manchester",
    href: "/#emergency-mobile-tyre-fitting-manchester",
  },
  {
    label: "Mobile Tyre Replacement Manchester",
    href: "/#mobile-tyre-replacement-manchester",
  },
  {
    label: "24 Hour Mobile Tyre Service Manchester",
    href: "/#24-hour-mobile-tyre-service-manchester",
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-border border-t">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-16">
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-secondary-foreground flex items-center gap-2">
            <span className="bg-primary/20 flex size-9 items-center justify-center rounded-full">
              <BrandIcon className="text-primary size-4.5" aria-hidden="true" />
            </span>
            <span className="font-heading text-base font-semibold tracking-tight">
              {siteConfig.name}
            </span>
          </Link>
          <p className="text-secondary-foreground/60 max-w-xs text-sm">
            Professional mobile tyre assistance across Manchester.
          </p>
          <div className="flex items-center gap-2 pt-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="bg-foreground/5 text-secondary-foreground/70 hover:bg-foreground/10 hover:text-secondary-foreground flex size-9 items-center justify-center rounded-full transition-colors"
              >
                <social.icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-secondary-foreground text-sm font-semibold">
            Company
          </h3>
          <ul className="flex flex-col gap-2.5">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-secondary-foreground/60 hover:text-secondary-foreground text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-secondary-foreground text-sm font-semibold">
            Services
          </h3>
          <ul className="flex flex-col gap-2.5">
            {footerServiceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-secondary-foreground/60 hover:text-secondary-foreground text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-secondary-foreground text-sm font-semibold">
            Get in touch
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href={siteConfig.phoneHref}
                className="text-secondary-foreground/60 hover:text-secondary-foreground flex items-start gap-2.5 text-sm transition-colors"
              >
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-secondary-foreground/60 hover:text-secondary-foreground flex items-start gap-2.5 text-sm transition-colors"
              >
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
            <li className="text-secondary-foreground/60 flex items-start gap-2.5 text-sm">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {siteConfig.address}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-border border-t">
        <Container className="text-secondary-foreground/50 flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>{siteConfig.hours}</p>
        </Container>
      </div>
    </footer>
  );
}
