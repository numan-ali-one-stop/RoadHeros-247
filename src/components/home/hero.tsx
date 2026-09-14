import { Phone, ShieldCheck, Star, Timer } from "lucide-react";
import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const trustPoints = [
  { icon: Timer, label: "58 min average response" },
  { icon: ShieldCheck, label: "Fully insured fitters" },
  { icon: Star, label: "4.9/5 from 2,300+ jobs" },
];

export function Hero() {
  return (
    <section className="bg-grid-pattern relative overflow-hidden bg-charcoal-950 pt-32 pb-20 sm:pt-44 sm:pb-28">
      <div
        aria-hidden="true"
        className="bg-primary/25 pointer-events-none absolute -top-32 -right-20 size-[32rem] rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="bg-teal-500/10 pointer-events-none absolute bottom-0 left-0 size-96 -translate-x-1/3 translate-y-1/3 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal-950"
      />
      <Container className="relative flex flex-col items-start gap-8">
        <FadeIn className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/15">
            <span className="bg-primary size-1.5 animate-pulse rounded-full" />
            Callouts live now across South Yorkshire
          </span>
          <h1 className="max-w-3xl font-heading text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
            Stuck on the road? Help is minutes away, not hours.
          </h1>
          <p className="max-w-xl text-lg text-balance text-white/70">
            RoadHeros 24/7 brings mobile tyre fitting, jump starts and
            locking nut removal straight to your location — day or night,
            wherever you&apos;ve broken down.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            render={<a href={siteConfig.phoneHref} />}
            className="bg-white text-charcoal-950 hover:bg-white/90"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call {siteConfig.phone}
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={<Link href="/contact" />}
            className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            Get a free quote
          </Button>
        </FadeIn>

        <FadeIn
          delay={0.2}
          className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-4"
        >
          {trustPoints.map((point) => (
            <div
              key={point.label}
              className="flex items-center gap-2 text-sm text-white/60"
            >
              <point.icon className="text-teal-300 size-4" aria-hidden="true" />
              {point.label}
            </div>
          ))}
        </FadeIn>
      </Container>
    </section>
  );
}
