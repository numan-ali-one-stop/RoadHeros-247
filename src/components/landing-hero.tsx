import { CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export type LandingHeroButton = {
  label: string;
  href: string;
  variant?: "default" | "outline";
};

export type LandingHeroProps = {
  badge: string;
  title: string;
  paragraphs: string[];
  points: string[];
  buttons: LandingHeroButton[];
};

export function LandingHero({
  badge,
  title,
  paragraphs,
  points,
  buttons,
}: LandingHeroProps) {
  return (
    <section className="bg-grid-pattern relative overflow-hidden bg-background pt-32 pb-20 sm:pt-44 sm:pb-28">
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
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
      />
      <Container className="relative flex flex-col items-start gap-8">
        <FadeIn className="flex flex-col gap-6">
          <span className="bg-foreground/10 text-foreground/80 ring-foreground/15 inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium ring-1">
            <span className="bg-primary size-1.5 animate-pulse rounded-full" />
            {badge}
          </span>
          <h1 className="text-foreground max-w-3xl font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={
                index === 0
                  ? "text-foreground/70 max-w-xl text-lg text-balance"
                  : "text-foreground/60 max-w-xl text-balance"
              }
            >
              {paragraph}
            </p>
          ))}
        </FadeIn>

        <FadeIn
          delay={0.08}
          className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2.5"
        >
          {points.map((point) => (
            <div
              key={point}
              className="text-foreground/70 flex items-center gap-2 text-sm"
            >
              <CheckCircle2
                className="text-primary size-4 shrink-0"
                aria-hidden="true"
              />
              {point}
            </div>
          ))}
        </FadeIn>

        <FadeIn delay={0.16} className="flex flex-col gap-3 sm:flex-row">
          {buttons.map((button) => {
            const isTel = button.href.startsWith("tel:");
            return (
              <Button
                key={button.label}
                size="lg"
                variant={button.variant ?? "default"}
                render={
                  isTel ? (
                    <a href={button.href} />
                  ) : (
                    <Link href={button.href} />
                  )
                }
              >
                {isTel ? <Phone className="size-4" aria-hidden="true" /> : null}
                {button.label}
              </Button>
            );
          })}
        </FadeIn>
      </Container>
    </section>
  );
}
