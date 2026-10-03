import { CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "cn";

import { Container } from "@/components/layout/container";
import { Logo } from "@/components/logo";
import { homeCoverage, homeEmergencyReplacement } from "@/lib/home-landing";
import { hasPage, serviceAreas } from "@/lib/service-areas";
import { services, siteConfig, socialLinks } from "@/lib/site";

const serviceLinks = [
  ...services.map((service) => ({
    label: service.name,
    href: service.href ?? `/services/${service.slug}`,
  })),
  {
    label: "Emergency Tyre Replacement",
    href: homeEmergencyReplacement.link.href,
  },
];

// Main boroughs only; smaller towns live on their borough's location page.
const areaLinks = homeCoverage.areas.map((name) => {
  const href = serviceAreas.find((area) => area.name === name)?.href;
  return { label: name, href: hasPage(href) ? href : undefined };
});

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Contact & booking", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const linkClassName =
  "text-secondary-foreground/65 hover:text-secondary-foreground text-sm transition-colors";

function FooterHeading({ children }: { children: string }) {
  return (
    <p className="text-secondary-foreground text-sm font-semibold">
      {children}
    </p>
  );
}

export function SiteFooter() {
  return (
    <footer className="theme-ink bg-secondary text-secondary-foreground border-t-brand-400 relative border-t-4">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:py-16">
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="flex w-fit items-center rounded-xl bg-white px-3 py-2"
            aria-label={`${siteConfig.legalName} home`}
          >
            <Logo className="h-12" />
          </Link>
          <div>
            <p className="text-secondary-foreground font-semibold">
              {siteConfig.legalName}
            </p>
            <p className="text-secondary-foreground/65 max-w-xs text-sm">
              24/7 Emergency Mobile Tyre Fitting Across Greater Manchester
            </p>
          </div>
          <ul className="flex flex-col gap-2.5">
            <li>
              <a
                href={siteConfig.phoneHref}
                className="text-secondary-foreground hover:text-primary flex items-center gap-2.5 text-base font-semibold transition-colors"
              >
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className={cn(
                  linkClassName,
                  "flex items-center gap-2.5 break-all",
                )}
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className={cn(linkClassName, "flex items-center gap-2.5")}
              >
                <CalendarCheck className="size-4 shrink-0" aria-hidden="true" />
                Book a mobile tyre fitter
              </Link>
            </li>
            <li className="text-secondary-foreground/65 flex items-start gap-2.5 text-sm">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {siteConfig.address}
            </li>
          </ul>
          <div className="flex items-center gap-2 pt-1">
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

        <nav aria-label="Services" className="flex flex-col gap-3">
          <FooterHeading>Services</FooterHeading>
          <ul className="flex flex-col gap-2.5">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClassName}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Service areas" className="flex flex-col gap-3">
          <FooterHeading>Service Areas</FooterHeading>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 lg:grid-cols-1">
            {areaLinks.map((area) => (
              <li key={area.label}>
                {area.href ? (
                  <Link href={area.href} className={linkClassName}>
                    {area.label}
                  </Link>
                ) : (
                  <span className="text-secondary-foreground/65 text-sm">
                    {area.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="flex flex-col gap-3">
          <FooterHeading>Company</FooterHeading>
          <ul className="flex flex-col gap-2.5">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClassName}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <div className="border-border border-t">
        <Container className="text-secondary-foreground/55 flex flex-col items-center justify-between gap-3 py-6 text-center text-xs sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
            {siteConfig.companyNumber
              ? ` Registered in England and Wales, company number ${siteConfig.companyNumber}.`
              : null}
          </p>
          <p>{siteConfig.hours}</p>
        </Container>
      </div>
    </footer>
  );
}
