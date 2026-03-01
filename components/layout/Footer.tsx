"use client";

import Link from "next/link";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, viewportDefault } from "@/lib/motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020617] pt-16 text-slate-200">
      <img
        src="/rightfooter.svg"
        alt=""
        className="pointer-events-none absolute bottom-20 left-0 z-0 w-[260px] select-none object-contain opacity-40 md:w-[360px] lg:w-[420px]"
      />
      <img
        src="/leftfooter.svg"
        alt=""
        className="pointer-events-none absolute bottom-20 right-0 z-0 w-[260px] select-none object-contain opacity-40 md:w-[360px] lg:w-[420px]"
      />

      <motion.div
        className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 pb-16 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={viewportDefault}
        variants={fadeInUp}
      >
        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center">
              <img src="/shortlogo.svg" alt="Logo" width={50} height={50} />
            </div>
            <h3 className="text-lg font-semibold text-white">Traveloclue</h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-300">
            Discover curated travel experiences with Traveloclue.
          </p>
        </div>

        <div>
          <h4 className="mb-2 font-medium text-white">Newsletter</h4>
          <p className="mb-4 text-sm text-slate-300">
            Get weekly travel listings
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center overflow-hidden rounded-full border border-white/10 bg-slate-900/40 shadow-lg shadow-black/20 backdrop-blur-xl"
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 bg-transparent px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-400"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 text-[rgb(34,84,221)]"
            >
              ✈
            </motion.button>
          </form>
        </div>

        <div>
          <h4 className="mb-4 font-medium text-white">Contact Us</h4>
          <div className="space-y-2 text-sm text-slate-300">
            <p>contact@traveloclue.com</p>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 border-t border-white/10 bg-slate-950/80 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-sm text-slate-200 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <p>©2026 Traveloclue</p>
            <Link href="#" className="hover:underline">
              All Rights Reserved
            </Link>
          </div>
          <div className="flex gap-4">
            <SocialIcon>
              <Facebook size={16} />
            </SocialIcon>
            <SocialIcon>
              <Linkedin size={16} />
            </SocialIcon>
            <SocialIcon>
              <Twitter size={16} />
            </SocialIcon>
            <SocialIcon>
              <Youtube size={16} />
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-slate-900/50 text-[#rgb(34,84,221)] shadow-md shadow-sky-500/30 backdrop-blur-xl transition hover:bg-slate-800/60"
    >
      {children}
    </motion.div>
  );
}
