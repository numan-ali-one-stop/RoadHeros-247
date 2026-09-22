import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { whereWeWork } from "@/lib/about-content";

export function WhereWeWork() {
  return (
    <Section>
      <SectionHeading
        eyebrow={whereWeWork.eyebrow}
        title={whereWeWork.title}
        subtitle={whereWeWork.intro}
        align="center"
        className="mb-12"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whereWeWork.boroughs.map((borough, index) => (
          <FadeIn
            key={borough.name}
            delay={index * 0.05}
            className="border-border bg-card flex flex-col gap-1.5 rounded-2xl border p-5"
          >
            <h3 className="font-heading text-base font-semibold tracking-tight">
              {borough.name}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {borough.towns}
            </p>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-14 flex flex-col items-center gap-6 text-center">
        <h3 className="font-heading text-lg font-semibold tracking-tight">
          {whereWeWork.motorwaysTitle}
        </h3>
        <div className="flex flex-wrap justify-center gap-2.5">
          {whereWeWork.motorways.map((road) => (
            <Badge
              key={road}
              variant="secondary"
              className="h-auto px-3.5 py-1.5 text-sm font-medium"
            >
              {road}
            </Badge>
          ))}
        </div>
      </FadeIn>

      <FadeIn
        delay={0.1}
        className="border-primary/30 bg-primary/5 mx-auto mt-10 flex max-w-2xl flex-col gap-2 rounded-2xl border px-6 py-5 text-center"
      >
        <h3 className="font-heading text-sm font-semibold tracking-tight">
          {whereWeWork.outsideBoundaryTitle}
        </h3>
        <p className="text-foreground/85 text-sm leading-relaxed">
          {whereWeWork.outsideBoundary}
        </p>
      </FadeIn>

      <p className="text-muted-foreground mt-10 text-center text-sm font-medium">
        {whereWeWork.closingLine}
      </p>
    </Section>
  );
}
