"use client";

import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail } from "lucide-react";

export default function LocationContactSection() {
  return (
    <section className="bg-[#020617] py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16 mt-10">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-white">
              Where Are We Based?
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Traveloclue is your intelligent travel companion designed to
              simplify trip planning. We help travelers discover curated
              destinations, hidden gems, and seamless travel experiences 
              all in one place. From inspiration to itinerary, we make
              exploring the world effortless and exciting.
            </p>

            <p className="text-slate-200 mb-4 font-medium">Let’s plan your next adventure ✈️</p>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Traveloclue Headquarters, Mumbai, Maharashtra, India
              <br />
              Connecting explorers worldwide 🌍
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 text-slate-300">
              <Facebook size={18} className="cursor-pointer hover:text-[#38bdf8] transition" />
              <Twitter size={18} className="cursor-pointer hover:text-[#38bdf8] transition" />
              <Instagram size={18} className="cursor-pointer hover:text-[#38bdf8] transition" />
              <Youtube size={18} className="cursor-pointer hover:text-[#38bdf8] transition" />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.65)] ring-1 ring-white/10">
            <Image
              src="/map.png" 
              alt="Traveloclue Location"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* CONTACT FORM */}
          <div className="bg-[#02081a]/80 p-8 rounded-2xl shadow-[0_28px_80px_rgba(0,0,0,0.7)] border border-white/10 backdrop-blur-md">
            <form className="space-y-4">

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-white/15 bg-black/10 text-slate-100 placeholder:text-slate-500 rounded-md px-4 py-2 text-sm outline-none focus:border-sky-400 focus:bg-black/20"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-white/15 bg-black/10 text-slate-100 placeholder:text-slate-500 rounded-md px-4 py-2 text-sm outline-none focus:border-sky-400 focus:bg-black/20"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-white/15 bg-black/10 text-slate-100 placeholder:text-slate-500 rounded-md px-4 py-2 text-sm outline-none focus:border-sky-400 focus:bg-black/20"
              />

              <input
                type="text"
                placeholder="Preferred Destination (Optional)"
                className="w-full border border-white/15 bg-black/10 text-slate-100 placeholder:text-slate-500 rounded-md px-4 py-2 text-sm outline-none focus:border-sky-400 focus:bg-black/20"
              />

              <textarea
                placeholder="Tell us about your dream trip..."
                rows={4}
                className="w-full border border-white/15 bg-black/10 text-slate-100 placeholder:text-slate-500 rounded-md px-4 py-2 text-sm outline-none focus:border-sky-400 focus:bg-black/20"
              />

              <button
                type="submit"
                className="w-full bg-sky-500 text-white py-3 rounded-full shadow-lg shadow-sky-500/50 hover:scale-[1.02] hover:bg-sky-400 transition"
              >
                Start Planning
              </button>
            </form>
          </div>

          {/* LETS CONNECT */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Let’s Connect</h3>
            <p className="text-slate-300 mb-6">
              Have questions about destinations, itineraries, or travel
              experiences? Reach out to us and our team will guide you
              towards your perfect journey.
            </p>

            <div className="space-y-4 text-slate-200">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#38bdf8]" />
                <span>+91-7715866266</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#38bdf8]" />
                <span>hello@traveloclue.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}