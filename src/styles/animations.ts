import type { Transition, Variants } from "framer-motion";

export const spring = {
  gentle: { type: "spring" as const, stiffness: 120, damping: 14 },
  snappy: { type: "spring" as const, stiffness: 300, damping: 24 },
  bouncy: { type: "spring" as const, stiffness: 400, damping: 10 },
};

export const transition = {
  smooth: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: spring.gentle },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transition.smooth },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: spring.snappy },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: spring.gentle },
};
