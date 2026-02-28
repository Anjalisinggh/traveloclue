import React from "react";

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
      <div
        className={`relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 ${
          isCenter ? "items-center text-center" : "items-start text-left"
        }`}
      >
        {label && (
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
            {label}
          </p>
        )}

        <h2 className="mb-4 text-3xl font-semibold md:text-4xl lg:text-[2.8rem]">
          {title}
        </h2>

        {subtitle && (
          <p className="mb-10 max-w-2xl text-sm text-slate-300 md:text-base">
            {subtitle}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}

