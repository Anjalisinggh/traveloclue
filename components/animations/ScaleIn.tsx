"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { scaleIn, viewportDefault } from "@/lib/motion";

type ScaleInProps = {
  children: ReactNode;
  className?: string;
  viewport?: boolean;
};

export default function ScaleIn({
  children,
  className,
  viewport = true,
}: ScaleInProps) {
  return (
    <motion.div
      variants={scaleIn}
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
