import { Star } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Customer stories"
        title="Real callouts, real relief"
        subtitle="We don't ask for reviews — people just tend to leave them after a 2am puncture gets sorted."
        align="center"
        className="mb-12"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <FadeIn key={testimonial.name} delay={index * 0.06}>
            <Card className="h-full">
              <CardContent className="flex h-full flex-col gap-4">
                <div className="text-primary flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="text-foreground/85 flex-1 text-sm leading-relaxed">
                  “{testimonial.quote}”
                </p>
                <div className="border-border flex items-center justify-between border-t pt-4">
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.location}
                    </p>
                  </div>
                  <span className="bg-secondary text-secondary-foreground rounded-full px-2.5 py-1 text-xs font-medium">
                    {testimonial.service}
                  </span>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
