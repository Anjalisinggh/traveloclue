"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainer, viewportDefault } from "@/lib/motion";

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  viewport?: boolean;
};

export default function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
  viewport = true,
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={{
        ...staggerContainer,
        visible: {
          ...staggerContainer.visible,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate={viewport ? undefined : "visible"}
      whileInView={viewport ? "visible" : undefined}
      viewport={viewport ? viewportDefault : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
