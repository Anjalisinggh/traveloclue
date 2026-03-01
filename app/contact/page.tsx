"use client";

import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportDefault } from "@/lib/motion";

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <motion.section
        className="bg-[#020617] px-6 py-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportDefault}
      >
        <div className="mx-auto mt-10 max-w-6xl space-y-16">
          {/* TOP GRID */}
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <motion.h2
                variants={fadeInUp}
                className="mb-6 text-3xl font-semibold text-white"
              >
                Where Are We Based?
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="mb-6 leading-relaxed text-slate-300"
              >
                Traveloclue is your intelligent travel companion designed to
                simplify trip planning. We help travelers discover curated
                destinations, hidden gems, and seamless travel experiences all
                in one place. From inspiration to itinerary, we make exploring
                the world effortless and exciting.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="mb-4 font-medium text-slate-200"
              >
                Let's plan your next adventure ✈️
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="mb-6 text-sm leading-relaxed text-slate-300"
              >
                Traveloclue Headquarters, Mumbai, Maharashtra, India
                <br />
                Connecting explorers worldwide 🌍
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex gap-5 text-slate-300"
              >
                <SocialIcon>
                  <Facebook size={18} />
                </SocialIcon>
                <SocialIcon>
                  <Twitter size={18} />
                </SocialIcon>
                <SocialIcon>
                  <Instagram size={18} />
                </SocialIcon>
                <SocialIcon>
                  <Youtube size={18} />
                </SocialIcon>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="relative h-[400px] w-full overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-black/30 backdrop-blur-xl"
            >
              <Image
                src="/map.png"
                alt="Traveloclue Location"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* BOTTOM GRID */}
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <motion.div
              variants={fadeInUp}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-8 shadow-xl shadow-black/30 backdrop-blur-xl"
            >
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="rounded-md border border-white/10 bg-slate-900/40 px-4 py-2 text-sm text-slate-100 backdrop-blur-sm outline-none placeholder:text-slate-500 focus:border-sky-400 focus:bg-slate-800/50"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="rounded-md border border-white/10 bg-slate-900/40 px-4 py-2 text-sm text-slate-100 backdrop-blur-sm outline-none placeholder:text-slate-500 focus:border-sky-400 focus:bg-slate-800/50"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-md border border-white/10 bg-slate-900/40 px-4 py-2 text-sm text-slate-100 backdrop-blur-sm outline-none placeholder:text-slate-500 focus:border-sky-400 focus:bg-slate-800/50"
                />

                <input
                  type="text"
                  placeholder="Preferred Destination (Optional)"
                  className="w-full rounded-md border border-white/10 bg-slate-900/40 px-4 py-2 text-sm text-slate-100 backdrop-blur-sm outline-none placeholder:text-slate-500 focus:border-sky-400 focus:bg-slate-800/50"
                />

                <textarea
                  placeholder="Tell us about your dream trip..."
                  rows={4}
                  className="w-full rounded-md border border-white/10 bg-slate-900/40 px-4 py-2 text-sm text-slate-100 backdrop-blur-sm outline-none placeholder:text-slate-500 focus:border-sky-400 focus:bg-slate-800/50"
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-full bg-sky-500 py-3 text-white shadow-lg shadow-sky-500/50 transition hover:bg-sky-400"
                >
                  Start Planning
                </motion.button>
              </form>
            </motion.div>

            <div>
              <motion.h3
                variants={fadeInUp}
                className="mb-4 text-2xl font-semibold text-white"
              >
                Let's Connect
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="mb-6 text-slate-300"
              >
                Have questions about destinations, itineraries, or travel
                experiences? Reach out to us and our team will guide you towards
                your perfect journey.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="space-y-4 text-slate-200"
              >
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#38bdf8]" />
                  <span>+91-7715866266</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#38bdf8]" />
                  <span>hello@traveloclue.com</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      whileHover={{ scale: 1.1 }}
      className="cursor-pointer transition hover:text-[#38bdf8]"
    >
      {children}
    </motion.span>
  );
}
