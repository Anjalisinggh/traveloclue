"use client";

import React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
    <button
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
          "bg-linear-to-r from-sky-500 via-emerald-500 to-sky-400 text-white shadow-lg shadow-sky-500/40 hover:brightness-110":
            variant === "primary",

          "bg-slate-900/80 text-slate-100 border border-white/10 hover:bg-slate-800/90 shadow-md shadow-emerald-500/30":
            variant === "secondary",

          "border border-sky-400/60 text-sky-200 hover:bg-sky-500 hover:text-slate-950 hover:border-transparent":
            variant === "outline",

          "text-slate-100 hover:bg-white/5":
            variant === "ghost",
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
    </button>
  );
}