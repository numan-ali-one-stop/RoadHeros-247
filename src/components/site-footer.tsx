import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import {
  brandIcon as BrandIcon,
  services,
  siteConfig,
  socialLinks,
} from "@/lib/site";

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Our services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-charcoal-950 text-charcoal-200 border-t border-white/10">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-16">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 text-white">
            <span className="bg-primary/20 flex size-9 items-center justify-center rounded-full">
              <BrandIcon className="text-primary size-4.5" aria-hidden="true" />
            </span>
            <span className="font-heading text-base font-semibold tracking-tight">
              {siteConfig.name}
            </span>
          </Link>
          <p className="max-w-xs text-sm text-white/60">
            {siteConfig.description}
          </p>
          <div className="flex items-center gap-2 pt-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex size-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <social.icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-white">Company</h3>
          <ul className="flex flex-col gap-2.5">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-white">Services</h3>
          <ul className="flex flex-col gap-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-white">Get in touch</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href={siteConfig.phoneHref}
                className="flex items-start gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-white/60">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {siteConfig.address}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
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
