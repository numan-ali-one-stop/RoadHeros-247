import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/layout/section";
import { stats } from "@/lib/content";

export function StatsBand() {
  return (
    <Section size="sm" className="border-border border-y bg-secondary/50">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((stat, index) => (
          <FadeIn
            key={stat.label}
            delay={index * 0.08}
            className="flex flex-col items-center gap-1 text-center"
          >
            <span className="font-heading text-primary text-3xl font-semibold tracking-tight sm:text-4xl">
              {stat.value}
            </span>
            <span className="text-muted-foreground text-sm">{stat.label}</span>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
