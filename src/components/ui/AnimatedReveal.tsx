"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeInUp } from "@/styles/animations";

interface AnimatedRevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export function AnimatedReveal({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
}: AnimatedRevealProps) {
  const prefersReduced = useReducedMotion();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const reducedVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay } },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={prefersReduced ? reducedVariants : variants}
    >
      {children}
    </motion.div>
  );
}
