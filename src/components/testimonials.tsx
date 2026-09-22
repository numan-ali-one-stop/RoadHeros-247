import { Star } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { customerReviews, customerReviewsIntro } from "@/lib/content";

export function Testimonials() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Customer stories"
        title="What Our Customers Say"
        subtitle={customerReviewsIntro}
        align="center"
        className="mb-12"
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {customerReviews.map((review, index) => (
          <FadeIn key={review.title} delay={index * 0.06} fullWidth>
            <Card className="h-full">
              <CardContent className="flex h-full flex-col gap-3">
                <div className="text-primary flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <h3 className="font-heading text-base font-semibold tracking-tight">
                  {review.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {review.description}
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
