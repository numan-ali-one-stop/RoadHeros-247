import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { logoStrip } from "@/lib/content";

export function LogoStrip() {
  return (
    <Section size="sm">
      <FadeIn className="flex flex-col items-center gap-6">
        <p className="text-muted-foreground text-xs font-semibold tracking-[0.18em] uppercase">
          Trusted by local fleets and businesses
        </p>
        <div className="grid w-full grid-cols-2 place-items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {logoStrip.map((name) => (
            <span
              key={name}
              className="text-muted-foreground/70 font-heading text-center text-sm font-semibold tracking-tight"
            >
              {name}
            </span>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
