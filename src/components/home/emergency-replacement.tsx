import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { homeEmergencyReplacement as content } from "@/lib/home-landing";
import { siteConfig } from "@/lib/site";

export function EmergencyReplacement() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <FadeIn className="flex flex-col gap-4">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {content.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {content.intro}
          </p>
          <div className="bg-muted relative mt-2 aspect-16/10 overflow-hidden rounded-3xl">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn
          delay={0.1}
          className="border-border bg-card rounded-3xl border p-6 shadow-sm sm:p-8"
        >
          <p className="text-foreground mb-4 text-sm font-semibold">
            {content.listIntro}
          </p>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {content.bullets.map((bullet) => (
              <li
                key={bullet}
                className="bg-secondary/40 flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium"
              >
                <CheckCircle2
                  className="text-primary size-4 shrink-0"
                  aria-hidden="true"
                />
                {bullet}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>

      <FadeIn className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-5 text-center">
        <p className="text-foreground/80 leading-relaxed">{content.closing}</p>
        <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <Button
            size="lg"
            className="w-full sm:w-auto"
            render={<a href={siteConfig.phoneHref} />}
          >
            <Phone className="size-4" aria-hidden="true" />
            {content.cta}
          </Button>
          <Link
            href={content.link.href}
            className="text-primary inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
          >
            {content.link.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </FadeIn>
    </Section>
  );
}
