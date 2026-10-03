import { CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const heroPoints = [
  "Available 24 hours a day, 7 days a week",
  "Mobile tyre fitting at your location",
  "Home, work & roadside assistance",
  "Emergency tyre replacement",
  "Covering Greater Manchester",
];

const heroImage = {
  src: "/images/night-tyre-change-car-park.jpg",
  alt: "Car with its front wheel removed in a car park at night",
};

// Rendered without entrance animations so the H1 and Call Now button paint immediately.
export function Hero() {
  return (
    <section className="bg-background relative overflow-hidden pt-24 pb-14 sm:pt-44 sm:pb-28">
      {/* Starts below the transparent header so the navigation stays readable. */}
      <div className="absolute inset-x-0 top-16 bottom-0 lg:top-18">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          preload
          sizes="100vw"
          className="object-cover object-[30%_center]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/45"
        />
        <div
          aria-hidden="true"
          className="to-background absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent"
        />
      </div>

      <Container className="relative flex flex-col items-start gap-6 pt-6 sm:gap-8 sm:pt-0">
        <div className="flex flex-col gap-4 sm:gap-6">
          <span className="bg-card text-foreground/80 ring-brand-500/25 inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium shadow-sm ring-1">
            <span className="bg-primary size-1.5 rounded-full" />
            24/7 mobile tyre service · We come to you
          </span>
          <h1 className="font-heading max-w-3xl text-[2rem] leading-tight font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
            Emergency Mobile Tyre Fitting{" "}
            <span className="text-gradient-brand">
              Across Greater Manchester
            </span>
          </h1>
          <p className="max-w-xl text-base text-balance text-white/85 sm:text-lg">
            Flat, damaged or blown tyre? Road Heroes 247 LTD provides 24/7
            mobile tyre fitting, bringing emergency tyre assistance directly to
            your home, workplace or roadside location across Greater Manchester.
          </p>
        </div>

        {/* Call Now must be above the fold on phones, so the buttons come before the points there. */}
        <div className="flex w-full flex-col gap-3 sm:order-last sm:w-auto sm:flex-row">
          <Button
            size="lg"
            className="h-12 w-full text-base sm:h-auto sm:w-auto sm:text-sm"
            render={<a href={siteConfig.phoneHref} />}
          >
            <Phone className="size-4" aria-hidden="true" />
            Call Now for Immediate Assistance
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 w-full border-white/50 bg-white/10 text-base text-white hover:bg-white/20 hover:text-white sm:h-auto sm:w-auto sm:text-sm"
            render={<Link href="/contact" />}
          >
            Book a Mobile Tyre Fitter
          </Button>
        </div>

        <ul className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2.5">
          {heroPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2 text-sm text-white/85"
            >
              <CheckCircle2
                className="text-primary size-4 shrink-0"
                aria-hidden="true"
              />
              {point}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
