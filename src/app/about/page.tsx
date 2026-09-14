import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { companyValues, teamMembers, timeline } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "RoadHeros 24/7 started with one van and a promise to always answer the phone. Meet the team and see how we got here.",
  openGraph: {
    title: "About | RoadHeros 24/7",
    description:
      "RoadHeros 24/7 started with one van and a promise to always answer the phone. Meet the team and see how we got here.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built by people who've been stranded too"
        subtitle="RoadHeros 24/7 started because our founder once waited three hours for a breakdown truck that never showed. We exist to make sure that doesn't happen to you."
      />

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn className="flex flex-col gap-4">
            <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
              Our story
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              From one van to a 24-hour operation
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Danny, our founder, spent over a decade fitting tyres in a
              workshop before deciding the workshop should come to the
              customer instead. In 2016 he kitted out a single van, put his
              personal mobile number on a website, and started answering
              calls himself — including at 3am.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Word spread fast, mostly from people who couldn&apos;t believe
              someone actually picked up. Today we run a fleet of fully
              stocked vans across South Yorkshire, but the promise
              hasn&apos;t changed: a real person answers, and a fitter
              actually turns up.
            </p>
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="border-border bg-secondary/40 flex aspect-4/3 items-center justify-center rounded-3xl border"
          >
            <span className="text-muted-foreground text-sm">
              Photo of the RoadHeros fleet
            </span>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading
          eyebrow="What we stand for"
          title="The values behind every callout"
          align="center"
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {companyValues.map((value, index) => (
            <FadeIn key={value.title} delay={index * 0.08} fullWidth>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col gap-3">
                  <div className="bg-primary/10 text-primary flex size-11 items-center justify-center rounded-xl">
                    <value.icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-base font-semibold tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Timeline"
          title="How we got here"
          align="center"
          className="mb-12"
        />
        <div className="relative mx-auto max-w-2xl">
          <div
            aria-hidden="true"
            className="bg-border absolute top-0 bottom-0 left-[7px] w-px sm:left-1/2"
          />
          <ol className="flex flex-col gap-10">
            {timeline.map((event, index) => (
              <FadeIn
                key={event.year}
                delay={index * 0.08}
                direction={index % 2 === 0 ? "left" : "right"}
                className="relative pl-8 sm:grid sm:grid-cols-2 sm:gap-10 sm:pl-0"
              >
                <div
                  aria-hidden="true"
                  className="border-background bg-primary absolute top-1 left-0 size-4 rounded-full border-4 sm:left-1/2 sm:-translate-x-1/2"
                />
                <div
                  className={
                    index % 2 === 0
                      ? "sm:col-start-1 sm:row-start-1 sm:pr-10 sm:text-right"
                      : "sm:col-start-2 sm:row-start-1 sm:pl-10"
                  }
                >
                  <span className="text-primary text-sm font-semibold">
                    {event.year}
                  </span>
                  <h3 className="font-heading mt-1 text-lg font-semibold tracking-tight">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading
          eyebrow="The team"
          title="The people who'll turn up at your door"
          align="center"
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.08} fullWidth>
              <div className="border-border bg-card h-full overflow-hidden rounded-xl border">
                <div className="bg-charcoal-900 relative flex aspect-square items-center justify-center">
                  <span className="font-heading text-3xl font-semibold text-white/40">
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                </div>
                <div className="flex flex-col gap-1 p-4">
                  <p className="text-sm font-semibold">{member.name}</p>
                  <p className="text-primary text-xs font-medium">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
