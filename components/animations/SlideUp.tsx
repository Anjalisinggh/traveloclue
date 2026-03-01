"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp, viewportDefault } from "@/lib/motion";

type SlideUpProps = {
  children: ReactNode;
  className?: string;
  viewport?: boolean;
};

export default function SlideUp({
  children,
  className,
  viewport = true,
}: SlideUpProps) {
  return (
    <motion.div
      variants={fadeInUp}
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
