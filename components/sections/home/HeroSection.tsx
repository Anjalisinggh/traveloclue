"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-stretch justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/landing.jpg"
          alt="Hero"
          width={1600}
          height={900}
          className="h-full w-full object-cover"
        />
        <motion.div
          className="absolute inset-0 h-full w-full bg-black/65"
          initial={false}
          animate={{ opacity: 1 }}
        />
      </div>

      <motion.div
        className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center px-4 py-24 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeInUp}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-3 text-sm uppercase tracking-[0.25em] text-sky-300/80"
        >
          Scandi journeys with Traveloclue
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="mb-4 text-4xl font-semibold text-white md:text-5xl lg:text-6xl"
        >
          Discover the magic of the{" "}
          <span className="text-sky-300">northern lights</span>
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
          className="mb-8 max-w-2xl text-base text-slate-200 md:text-lg"
        >
          Curated Nordic tours, fjord cruises, and aurora escapes designed for
          unforgettable nights under the Scandi sky.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="md"
            variant="primary"
            className="bg-sky-500/90 text-white hover:bg-sky-500 shadow-sky-500/30"
          >
            Get started
          </Button>
          <Link
            href="/destinations"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/40 px-6 py-3 text-base font-medium text-slate-200 backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-white/20 hover:bg-slate-800/50"
          >
            View tours
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
