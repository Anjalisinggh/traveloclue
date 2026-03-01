"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportDefault } from "@/lib/motion";

interface FullScreenSectionProps {
  id?: string;
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export default function FullScreenSection({
  id,
  label,
  title,
  subtitle,
  align = "left",
  children,
}: FullScreenSectionProps) {
  const isCenter = align === "center";

  return (
    <section
      id={id}
      className="relative min-h-screen overflow-hidden bg-transparent text-slate-100"
    >
      <motion.div
        className={`relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 ${
          isCenter ? "items-center text-center" : "items-start text-left"
        }`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportDefault}
      >
        {label && (
          <motion.p
            variants={fadeInUp}
            className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-slate-400"
          >
            {label}
          </motion.p>
        )}

        <motion.h2
          variants={fadeInUp}
          className="mb-4 text-3xl font-semibold md:text-4xl lg:text-[2.8rem]"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            variants={fadeInUp}
            className="mb-10 max-w-2xl text-sm text-slate-300 md:text-base"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div variants={fadeInUp}>{children}</motion.div>
      </motion.div>
    </section>
  );
}
