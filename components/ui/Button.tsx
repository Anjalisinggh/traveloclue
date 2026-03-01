"use client";

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDrag" | "onDragEnd" | "onDragStart"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
      className={clsx(
        "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-in-out focus:outline-none",

        // Size styles
        {
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
        },

        // Variant styles
        {
          "bg-sky-500 text-white shadow-lg shadow-sky-500/40 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/50":
            variant === "primary",

          "bg-slate-900/80 text-slate-100 border border-white/10 hover:bg-slate-800/90 shadow-md shadow-emerald-500/30 hover:shadow-emerald-500/40":
            variant === "secondary",

          "border border-sky-400/60 text-sky-200 hover:bg-sky-500 hover:text-slate-950 hover:border-transparent":
            variant === "outline",

          "text-slate-100 hover:bg-white/5": variant === "ghost",
        },

        // Loading state
        {
          "opacity-70 cursor-not-allowed": loading,
        },

        // Full width
        {
          "w-full": fullWidth,
        },

        className
      )}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
      ) : (
        children
      )}
    </motion.button>
  );
}
