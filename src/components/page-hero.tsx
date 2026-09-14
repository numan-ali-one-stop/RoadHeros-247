import { cn } from "cn";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "bg-grid-pattern relative overflow-hidden bg-charcoal-950 pt-32 pb-16 sm:pt-40 sm:pb-20",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="bg-primary/25 pointer-events-none absolute -top-24 right-0 size-[28rem] rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal-950"
      />
      <Container className="relative">
        <FadeIn className="flex max-w-2xl flex-col gap-4">
          {eyebrow ? (
            <span className="text-teal-300 text-xs font-semibold tracking-[0.18em] uppercase">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="text-lg text-balance text-white/70">{subtitle}</p>
          ) : null}
          {children}
        </FadeIn>
      </Container>
    </section>
  );
}
