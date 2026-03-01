"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportDefault } from "@/lib/motion";

export default function AboutPageContent() {
  return (
    <main className="overflow-x-hidden bg-[#0b1220] text-slate-100">
      {/* HERO */}
      <motion.section
        className="mx-auto max-w-6xl px-4 pb-24 pt-24 sm:px-6 sm:pt-28"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-semibold leading-tight md:text-5xl"
            >
              Structured travel for businesses.
              <br />
              <span className="text-sky-400">Delivered with precision.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl leading-relaxed text-slate-300"
            >
              Founded in 2014, Traveloclue partners with corporates, event
              planners, and structured group travelers across key global
              destinations. We focus on operational clarity, coordination, and
              dependable execution.
            </motion.p>
          </div>

          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-3xl border border-white/10 shadow-xl shadow-black/30 backdrop-blur-xl"
          >
            <Image
              src="/thailand.jpg"
              alt="Travel"
              width={600}
              height={500}
              className="h-[420px] w-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* VISION / MISSION */}
      <motion.section
        className="mx-auto max-w-6xl px-4 pb-24 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={viewportDefault}
        variants={staggerContainer}
      >
        <div className="grid gap-8 md:grid-cols-3">
          <motion.div variants={fadeInUp}>
            <SimpleCard
              title="Vision"
              text="Simplify global travel planning for corporates and structured group journeys."
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <SimpleCard
              title="Mission"
              text="Handle logistics, compliance, and coordination with consistency."
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <SimpleCard
              title="Focus"
              text="Reliable partnerships and transparent execution across destinations."
            />
          </motion.div>
        </div>
      </motion.section>

      {/* TIMELINE */}
      <motion.section
        className="relative overflow-hidden bg-[#0f172a] py-32"
        initial="hidden"
        whileInView="visible"
        viewport={viewportDefault}
        variants={staggerContainer}
      >
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <motion.h2
            variants={fadeInUp}
            className="text-center text-3xl font-semibold md:text-4xl"
          >
            Our Approach
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-center text-slate-400"
          >
            A structured, sequential system designed to ensure clarity and
            control.
          </motion.p>

          <div className="relative mt-20">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-16">
              <TimelineItem
                number="01"
                title="Discovery & Requirement Mapping"
                text="Understanding business objectives, travel scale, budgets, and compliance requirements before planning begins."
              />
              <TimelineItem
                number="02"
                title="Strategic Planning"
                text="Destination coordination, verified partner alignment, and itinerary structuring with clear deliverables."
              />
              <TimelineItem
                number="03"
                title="Execution & Coordination"
                text="Managed logistics, on-ground supervision, and consistent communication throughout the journey."
              />
              <TimelineItem
                number="04"
                title="Post-Travel Review"
                text="Feedback integration, performance review, and long-term relationship strengthening."
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* FOUNDER */}
      <motion.section
        className="mx-auto max-w-6xl px-4 py-28 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={viewportDefault}
        variants={staggerContainer}
      >
        <div className="grid items-center gap-20 md:grid-cols-2">
          <motion.div variants={fadeInUp} className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-slate-900/40 backdrop-blur-xl" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-3xl border border-white/10 shadow-xl shadow-black/30 backdrop-blur-xl"
            >
              <Image
                src="/urvashi.jpeg"
                alt="Urvashi Panchal"
                width={600}
                height={700}
                className="h-[500px] w-full object-cover"
              />
            </motion.div>
          </motion.div>

          <div>
            <motion.p
              variants={fadeInUp}
              className="text-xs uppercase tracking-[0.3em] text-sky-400"
            >
              Founder & CEO
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              className="mt-4 text-3xl font-semibold md:text-4xl"
            >
              Urvashi Panchal
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-6 leading-relaxed text-slate-300"
            >
              With over 13 years of experience in travel and hospitality,
              Urvashi founded Traveloclue with a focus on operational strength,
              industry discipline, and long-term partnerships.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-4 leading-relaxed text-slate-300"
            >
              Holding IATA and GDS certifications, she brings structured
              planning, destination expertise, and clarity to every journey
              managed under the Traveloclue name.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 h-px w-24 bg-sky-400/40"
            />
          </div>
        </div>
      </motion.section>
    </main>
  );
}

function SimpleCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
      className="rounded-2xl border border-white/10 bg-slate-900/40 p-8 shadow-xl shadow-black/30 backdrop-blur-xl transition-shadow duration-300"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-slate-300">{text}</p>
    </motion.div>
  );
}

function TimelineItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative flex items-start gap-8"
    >
      <div className="relative z-10 shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900/50 shadow-lg shadow-black/30 backdrop-blur-xl">
          <span className="text-sm font-semibold text-sky-400">{number}</span>
        </div>
      </div>

      <motion.div
        whileHover={{
          y: -4,
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.4)",
        }}
        className="flex-1 rounded-2xl border border-white/10 bg-slate-900/40 p-8 shadow-xl shadow-black/30 backdrop-blur-xl transition-shadow duration-300"
      >
        <h3 className="text-lg font-semibold text-white md:text-xl">{title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-slate-400">{text}</p>
      </motion.div>
    </motion.div>
  );
}
