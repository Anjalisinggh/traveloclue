"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeInUp, viewportDefault } from "@/lib/motion";

type SectionWrapperProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  animate?: boolean;
};

export default function SectionWrapper({
  id,
  className,
  children,
  animate = true,
}: SectionWrapperProps) {
  if (!animate) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportDefault}
    >
      {children}
    </motion.section>
  );
}
