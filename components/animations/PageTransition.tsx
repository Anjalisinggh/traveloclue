"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { fadeInUp } from "@/lib/motion";

type PageTransitionProps = {
  children: ReactNode;
  className?: string;
};

export default function PageTransition({
  children,
  className,
}: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
