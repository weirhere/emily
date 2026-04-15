"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/* ─────────────────────────────────────────────────────────
 * MOTION PRIMITIVES
 *
 * A small set of reusable fade-up wrappers. Every animation
 * on the site flows through these so timing stays consistent.
 *
 * Curve `[0.16, 1, 0.3, 1]` is a gentle out-expo.
 * ─────────────────────────────────────────────────────────
 */

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
};

export function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: FadeUpProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ delay, duration, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollFadeUp({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: FadeUpProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-64px" }}
      transition={{ delay, duration, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
