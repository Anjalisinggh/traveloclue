"use client";

import FullScreenSection from "@/components/sections/common/FullScreenSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, viewportDefault } from "@/lib/motion";

const steps = [
  {
    number: "01",
    title: "Spot the signal",
    body: "Tell us how you like to travel and when. We scan seasons, aurora forecasts, and local events to find the perfect window.",
  },
  {
    number: "02",
    title: "Design what matters",
    body: "We shape a route with stays, transfers, and experiences that balance slow travel with once-in-a-lifetime peaks.",
  },
  {
    number: "03",
    title: "Travel, supported",
    body: "From your first airport to your last cabin, our team and local partners stay one message away if plans shift.",
  },
];

export default function HowWeWorkSection() {
  return (
    <FullScreenSection
      id="how-we-work"
      label="002/"
      title="How we build your journey"
      subtitle="From first idea to your final night under northern skies, we turn inspiration into a seamless itinerary."
      align="left"
    >
      <div className="grid gap-16 md:grid-cols-2 md:items-center">
        
        
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefault}
          className="relative h-[420px] w-full overflow-hidden rounded-3xl"
        >
          <Image
            src="/night.jpg"  
            alt="Nordic travel planning"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </motion.div>

        
        <div className="space-y-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportDefault}
              transition={{ delay: i * 0.1 }}
              className="group relative pl-12"
            >
             
              <div className="absolute left-4 top-0 h-full w-px bg-white/10" />

           
              <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xs font-medium text-white backdrop-blur-md">
                {step.number}
              </div>

              <h3 className="mb-2 text-base font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </FullScreenSection>
  );
}