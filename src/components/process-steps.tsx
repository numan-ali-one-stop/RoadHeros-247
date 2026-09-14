import { FadeIn } from "@/components/motion/fade-in";
import type { ProcessStep } from "@/lib/services";

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {steps.map((step, index) => (
        <FadeIn
          key={step.title}
          delay={index * 0.08}
          className="relative flex flex-col gap-2 rounded-2xl border border-border bg-card p-6"
        >
          <span className="font-heading text-primary/40 text-4xl font-bold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-heading text-base font-semibold tracking-tight">
            {step.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {step.description}
          </p>
        </FadeIn>
      ))}
    </ol>
  );
}
