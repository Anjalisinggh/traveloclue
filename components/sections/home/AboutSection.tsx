"use client";

import FullScreenSection from "@/components/sections/common/FullScreenSection";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <FullScreenSection
      id="about"
      label="001/"
      title="Your Nordic Travel Partner"
      subtitle="Nature-first journeys across the Nordics — from glass-igloo aurora stays to fjord cruises and alpine escapes."
      align="left"
    >
      <div className="grid gap-16 md:grid-cols-2 md:items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-base leading-relaxed text-slate-300">
            We collaborate closely with local guides, boutique stays, and cruise
            operators to craft journeys that feel effortless and cinematic.
            Every itinerary is shaped by season, landscape, and story —
            never a generic package.
          </p>

          <p className="text-base leading-relaxed text-slate-400">
            From Arctic stillness to dramatic fjords, we design travel
            experiences that respect nature while elevating comfort.
          </p>
        </motion.div>

        {/* Right Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur-xl transition hover:bg-slate-800/50">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              For Explorers
            </p>
            <p className="mt-3 text-sm text-slate-200 leading-relaxed">
              Solo travelers, friends, or families seeking curated experiences
              without losing the thrill of discovery.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur-xl transition hover:bg-slate-800/50">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              For Teams
            </p>
            <p className="mt-3 text-sm text-slate-200 leading-relaxed">
              Retreats, incentive trips, and offsites designed for deep focus by
              day and aurora skies by night.
            </p>
          </div>
        </motion.div>
      </div>
    </FullScreenSection>
  );
}