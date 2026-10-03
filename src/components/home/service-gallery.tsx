import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "cn";

import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/section-heading";
import { homeGallery } from "@/lib/home-landing";

/**
 * Photo gallery of mobile tyre jobs. Hidden on the live site when `homeGallery.photos` is empty;
 * in `next dev` it then shows labelled placeholders for the brief's shot list.
 */
export function ServiceGallery() {
  const { photos } = homeGallery;
  const isPreview =
    photos.length === 0 && process.env.NODE_ENV !== "production";
  if (photos.length === 0 && !isPreview) return null;

  return (
    <Section className="bg-secondary/40">
      <SectionHeading
        eyebrow={
          homeGallery.photosAreOwnWork
            ? homeGallery.eyebrow
            : homeGallery.interimEyebrow
        }
        title={homeGallery.title}
        subtitle={
          homeGallery.photosAreOwnWork
            ? homeGallery.intro
            : homeGallery.interimIntro
        }
        align="center"
        className="mb-10"
      />

      {isPreview ? (
        <p className="border-primary/30 bg-primary/5 text-foreground/85 mx-auto mb-6 max-w-2xl rounded-xl border px-4 py-3 text-center text-sm">
          Preview only: this section is hidden on the live site until genuine
          photos are added to homeGallery.photos in src/lib/home-landing.ts.
        </p>
      ) : null}

      <div
        className={cn(
          "grid grid-cols-2 gap-3 sm:gap-4",
          isPreview ? "lg:grid-cols-3" : "lg:grid-cols-4",
        )}
      >
        {isPreview
          ? homeGallery.recommendedShots.map((shot) => (
              <div
                key={shot}
                className="border-border text-muted-foreground flex aspect-4/3 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed p-4 text-center text-xs sm:text-sm"
              >
                <ImageIcon className="size-6" aria-hidden="true" />
                {shot}
              </div>
            ))
          : photos.map((photo, index) => (
              <FadeIn
                key={photo.src}
                delay={index * 0.05}
                fullWidth
                className="bg-muted relative aspect-4/3 overflow-hidden rounded-2xl"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </FadeIn>
            ))}
      </div>
    </Section>
  );
}
