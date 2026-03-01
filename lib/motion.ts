import type { Variants } from "framer-motion";

export const easeSmooth = [0.4, 0, 0.2, 1] as const;
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const duration = { short: 0.3, normal: 0.5, slow: 0.7 } as const;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.normal, ease: easeSmooth },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.normal, ease: easeSmooth },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.normal, ease: easeSmooth },
  },
};

export const viewportDefault = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -80px 0px",
} as const;
