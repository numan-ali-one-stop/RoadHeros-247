import { AlertTriangle, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { cn } from "cn";

import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import type {
  ContentSection,
  ContentStep,
  ContentSubsection,
} from "@/lib/content-sections";

function BulletList({
  bullets,
  wide,
}: {
  bullets: string[];
  wide: boolean;
}) {
  return (
    <ul
      className={cn(
        "grid grid-cols-1 gap-2.5",
        wide ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2",
      )}
    >
      {bullets.map((bullet) => (
        <li key={bullet} className="flex items-start gap-2.5 text-sm">
          <CheckCircle2
            className="text-primary mt-0.5 size-4 shrink-0"
            aria-hidden="true"
          />
          <span className="text-foreground/85">{bullet}</span>
        </li>
      ))}
    </ul>
  );
}

function StepList({ steps }: { steps: ContentStep[] }) {
  return (
    <ol className="flex flex-col gap-4">
      {steps.map((step, index) => (
        <li key={step.title} className="flex items-start gap-3.5">
          <span className="bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold">
            {index + 1}
          </span>
          <div className="flex flex-col gap-1">
            <h4 className="font-heading text-base font-semibold tracking-tight">
              {step.title}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function ItemGrid({ items }: { items: ContentStep[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item.title}
          className="border-border bg-card flex flex-col gap-1.5 rounded-2xl border p-5"
        >
          <h4 className="font-heading text-base font-semibold tracking-tight">
            {item.title}
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  );
}

function Subsection({
  subsection,
  wide,
}: {
  subsection: ContentSubsection;
  wide: boolean;
}) {
  return (
    <div className="border-border flex flex-col gap-4 border-t pt-8">
      <h3 className="text-xl font-semibold tracking-tight text-balance sm:text-2xl">
        {subsection.title}
      </h3>
      {subsection.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="text-muted-foreground leading-relaxed">
          {paragraph}
        </p>
      ))}
      {subsection.listIntro ? (
        <p className="text-foreground text-sm font-semibold">
          {subsection.listIntro}
        </p>
      ) : null}
      {subsection.bullets ? (
        <BulletList bullets={subsection.bullets} wide={wide} />
      ) : null}
      {subsection.steps ? <StepList steps={subsection.steps} /> : null}
      {subsection.items ? <ItemGrid items={subsection.items} /> : null}
      {subsection.closingParagraph ? (
        <p className="text-muted-foreground leading-relaxed">
          {subsection.closingParagraph}
        </p>
      ) : null}
    </div>
  );
}

export function ContentSections({ sections }: { sections: ContentSection[] }) {
  return (
    <>
      {sections.map((section, index) => {
        const reversed = index % 2 === 1;
        const hasImage = Boolean(section.image);

        const content = (
          <FadeIn
            className={cn(
              "flex flex-col gap-4",
              hasImage && reversed && "lg:order-2",
            )}
          >
            <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
              {section.eyebrow}
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {section.title}
            </h2>

            <div className="flex flex-col gap-4">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {section.bullets ? (
              <div className="flex flex-col gap-3 pt-1">
                {section.listIntro ? (
                  <p className="text-foreground text-sm font-semibold">
                    {section.listIntro}
                  </p>
                ) : null}
                <BulletList bullets={section.bullets} wide={!hasImage} />
              </div>
            ) : null}

            {section.items ? <ItemGrid items={section.items} /> : null}

            {section.closingParagraph ? (
              <p className="text-muted-foreground leading-relaxed">
                {section.closingParagraph}
              </p>
            ) : null}

            {section.note ? (
              <div className="border-primary/30 bg-primary/5 flex items-start gap-3 rounded-xl border px-4 py-3.5">
                <AlertTriangle
                  className="text-primary mt-0.5 size-4.5 shrink-0"
                  aria-hidden="true"
                />
                <p className="text-foreground/85 text-sm leading-relaxed">
                  {section.note}
                </p>
              </div>
            ) : null}

            {section.subsections?.map((subsection) => (
              <Subsection
                key={subsection.title}
                subsection={subsection}
                wide={!hasImage}
              />
            ))}
          </FadeIn>
        );

        return (
          <Section
            key={section.id}
            id={section.id}
            className={index % 2 === 0 ? "bg-secondary/40" : undefined}
          >
            {hasImage && section.image ? (
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                {content}

                <FadeIn
                  delay={0.1}
                  direction={reversed ? "left" : "right"}
                  className={cn(
                    "relative aspect-4/3 overflow-hidden rounded-3xl",
                    reversed && "lg:order-1",
                  )}
                >
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </FadeIn>
              </div>
            ) : (
              <div className="mx-auto max-w-3xl">{content}</div>
            )}
          </Section>
        );
      })}
    </>
  );
}
