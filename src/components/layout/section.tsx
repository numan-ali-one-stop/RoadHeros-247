import { cn } from "cn";
import type { ComponentProps } from "react";

import { Container } from "@/components/layout/container";

type SectionProps = ComponentProps<"section"> & {
  containerClassName?: string;
  size?: "default" | "sm" | "lg";
};

const sizeClasses: Record<NonNullable<SectionProps["size"]>, string> = {
  sm: "py-12 md:py-16",
  default: "py-16 md:py-24",
  lg: "py-20 md:py-32",
};

export function Section({
  className,
  containerClassName,
  size = "default",
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(sizeClasses[size], className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
