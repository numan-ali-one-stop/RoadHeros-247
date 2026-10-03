import { ExternalLink, Star } from "lucide-react";
import { cn } from "cn";

import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { genuineReviews, serviceExpectations } from "@/lib/customer-reviews";
import { getGoogleReviews } from "@/lib/google-reviews";

function Stars({ rating, className }: { rating: number; className?: string }) {
  const filled = Math.round(rating);
  return (
    <div
      className={cn("flex gap-0.5", className)}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "size-4",
            i < filled
              ? "fill-current text-amber-500"
              : "text-muted-foreground/40",
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export async function GoogleReviews() {
  const data = await getGoogleReviews();
  const liveReviews = data?.reviews ?? [];
  const reviews = (liveReviews.length > 0 ? liveReviews : genuineReviews).slice(
    0,
    6,
  );

  // No genuine reviews yet: show what customers can expect instead of placeholder reviews.
  if (reviews.length === 0) {
    return (
      <Section>
        <SectionHeading
          eyebrow={serviceExpectations.eyebrow}
          title={serviceExpectations.title}
          subtitle={serviceExpectations.subtitle}
          align="center"
          className="mb-10"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceExpectations.items.map((item, index) => (
            <FadeIn
              key={item.title}
              delay={index * 0.06}
              fullWidth
              className="border-border bg-card flex h-full flex-col gap-3 rounded-2xl border p-6 shadow-sm"
            >
              <div className="icon-chip flex size-11 items-center justify-center rounded-xl">
                <item.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-base font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <SectionHeading
        eyebrow="Our Google Reviews"
        title="Trusted by Drivers Across Greater Manchester"
        subtitle="See what customers say about their experience with Road Heroes 247 LTD."
        align="center"
        className="mb-10"
      />

      {data?.rating !== undefined && data.count !== undefined ? (
        <FadeIn className="mb-10 flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="font-heading text-4xl font-semibold">
              {data.rating.toFixed(1)}
            </span>
            <Stars rating={data.rating} className="[&_svg]:size-6" />
          </div>
          <p className="text-muted-foreground text-sm">
            {data.count.toLocaleString("en-GB")} Google Reviews
          </p>
        </FadeIn>
      ) : null}

      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <FadeIn
            key={`${review.author}-${index}`}
            delay={index * 0.06}
            fullWidth
          >
            <Card className="h-full">
              <CardContent className="flex h-full flex-col gap-3">
                <Stars rating={review.rating} />
                <p className="text-muted-foreground line-clamp-6 text-sm leading-relaxed">
                  {review.text}
                </p>
                <p className="mt-auto text-sm font-medium">
                  {review.authorUrl ? (
                    <a
                      href={review.authorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {review.author}
                    </a>
                  ) : (
                    review.author
                  )}
                  {review.relativeTime ? (
                    <span className="text-muted-foreground font-normal">
                      {" "}
                      · {review.relativeTime}
                    </span>
                  ) : null}
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>

      {data?.url ? (
        <FadeIn className="flex flex-col items-center gap-3">
          <Button
            size="lg"
            variant="outline"
            render={
              <a href={data.url} target="_blank" rel="noopener noreferrer" />
            }
          >
            Read Our Google Reviews
            <ExternalLink className="size-4" aria-hidden="true" />
          </Button>
          {liveReviews.length > 0 ? (
            <p className="text-muted-foreground text-xs">Reviews from Google</p>
          ) : null}
        </FadeIn>
      ) : null}
    </Section>
  );
}
