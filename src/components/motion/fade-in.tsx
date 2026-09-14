"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ComponentProps } from "react";

type FadeInProps = ComponentProps<typeof motion.div> & {
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  fullWidth?: boolean;
};

const offset = 24;

function getVariants(
  direction: FadeInProps["direction"],
  reduced: boolean,
): Variants {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }

  const initial =
    direction === "up"
      ? { y: offset }
      : direction === "down"
        ? { y: -offset }
        : direction === "left"
          ? { x: offset }
          : direction === "right"
            ? { x: -offset }
            : {};

  return {
    hidden: { opacity: 0, ...initial },
    visible: { opacity: 1, x: 0, y: 0 },
  };
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  fullWidth,
  className,
  ...props
}: FadeInProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={getVariants(direction, Boolean(reducedMotion))}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={fullWidth ? `w-full ${className ?? ""}` : className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
