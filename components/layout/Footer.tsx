"use client";

import Link from "next/link";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-[#020b1b] via-[#020617] to-[#020617] pt-16 text-slate-200">
      {/* Background graphics – make sure leftfooter.svg/rightfooter.svg are in /public */}
      <img
     
        src="/rightfooter.svg"
        alt=""
        className="pointer-events-none select-none absolute bottom-20 left-0 w-[260px] md:w-[360px] lg:w-[420px] object-contain opacity-40 z-0"
      />
      <img
        src="/leftfooter.svg"
        alt=""
        className="pointer-events-none select-none absolute bottom-20 right-0 w-[260px] md:w-[360px] lg:w-[420px] object-contain opacity-40 z-0"
      />

      {/* Top Section */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 pb-16 md:grid-cols-3">
        {/* Left - Logo & Address */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center ">
              <img src="/shortlogo.svg" alt="Logo" width={50} height={50} />
            </div>
            <h3 className="text-lg font-semibold text-white">Traveloclue</h3>
          </div>

          <p className="text-sm leading-relaxed text-slate-300">
            Discover curated travel experiences with Traveloclue.
          </p>
        </div>

        {/* Center - Newsletter */}
        <div>
          <h4 className="mb-2 font-medium text-white">Newsletter</h4>
          <p className="mb-4 text-sm text-slate-300">
            Get weekly travel listings
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center overflow-hidden rounded-full border border-white/15 bg-white/5 backdrop-blur-sm"
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 bg-transparent px-4 py-3 text-sm outline-none text-slate-100 placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="px-4 text-[rgb(34,84,221)] transition hover:scale-110"
            >
              ✈
            </button>
          </form>
        </div>

        {/* Right - Contact */}
        <div>
          <h4 className="mb-4 font-medium text-white">Contact Us</h4>
          <div className="space-y-2 text-sm text-slate-300">
            <p>contact@traveloclue.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 bg-[#02081a]/95 border-t border-white/10 py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-sm text-slate-200 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <p>©2026 Traveloclue</p>
            <Link href="#" className="hover:underline">
            
            All Rights Reserved
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 ">
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
    <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#0f172a] text-[#rgb(34,84,221)] border border-white/10 shadow-md shadow-sky-500/30 transition hover:scale-110 hover:bg-[#02081a]">
      {children}
    </div>
  );
}