import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import {
  aboutTestimonials,
  aboutTestimonialsSubtitle,
  aboutTestimonialsTitle,
  leaveReviewNote,
} from "@/lib/about-content";

export function AboutTestimonials() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Reviews"
        title={aboutTestimonialsTitle}
        subtitle={aboutTestimonialsSubtitle}
        align="center"
        className="mb-12"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {aboutTestimonials.map((testimonial, index) => (
          <FadeIn key={testimonial.name} delay={index * 0.06} fullWidth>
            <Card className="h-full">
              <CardContent className="flex h-full flex-col gap-4">
                <p className="text-foreground/85 flex-1 text-sm leading-relaxed">
                  “{testimonial.quote}”
                </p>
                <div className="border-border border-t pt-4">
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>

      <FadeIn
        delay={0.1}
        className="border-primary/30 bg-primary/5 mx-auto mt-10 flex max-w-2xl flex-col gap-2 rounded-2xl border px-6 py-5 text-center"
      >
        <h3 className="font-heading text-sm font-semibold tracking-tight">
          {leaveReviewNote.title}
        </h3>
        <p className="text-foreground/85 text-sm leading-relaxed">
          {leaveReviewNote.description}
        </p>
      </FadeIn>
    </Section>
  );
}
