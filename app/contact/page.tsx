"use client";

import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail } from "lucide-react";

export default function LocationContactSection() {
  return (
    <section className="bg-linear-to-b from-[#020b1b] via-[#020617] to-[#020617] py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16 mt-10">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-white">
              Where Are We Located?
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              Factorylo provides a buyer-first platform for industrial and
              factory property seekers. It brings together modern factories and
              industrial spaces equipped with contemporary infrastructure,
              compliance-ready facilities, and business-focused amenities
              making industrial property discovery simple and efficient.
            </p>

            <p className="text-slate-200 mb-4 font-medium">Let’s meet!!</p>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              FactoryLo Plot no. 1, Viva Compound, Near Reliance Petrol pump,
              NH-8, Nalasopara, Dist. Palghar Maharashtra, India
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 text-slate-300">
              <Facebook size={18} className="cursor-pointer hover:text-[#fbbf24] transition" />
              <Twitter size={18} className="cursor-pointer hover:text-[#fbbf24] transition" />
              <Instagram size={18} className="cursor-pointer hover:text-[#fbbf24] transition" />
              <Youtube size={18} className="cursor-pointer hover:text-[#fbbf24] transition" />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.65)] ring-1 ring-white/10">
            <Image
              src="/map.png"
              alt="Location"
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
                  placeholder="John"
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
                placeholder="Email"
                className="w-full border border-white/15 bg-black/10 text-slate-100 placeholder:text-slate-500 rounded-md px-4 py-2 text-sm outline-none focus:border-sky-400 focus:bg-black/20"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-white/15 bg-black/10 text-slate-100 placeholder:text-slate-500 rounded-md px-4 py-2 text-sm outline-none focus:border-sky-400 focus:bg-black/20"
              />

              <textarea
                placeholder="Your Message..."
                rows={4}
                className="w-full border border-white/15 bg-black/10 text-slate-100 placeholder:text-slate-500 rounded-md px-4 py-2 text-sm outline-none focus:border-sky-400 focus:bg-black/20"
              />

              <button
                type="submit"
                className="w-full bg-linear-to-r from-sky-500 via-emerald-500 to-sky-400 text-white py-3 rounded-full shadow-lg shadow-sky-500/50 hover:scale-[1.02] transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* LETS CONNECT */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Lets Connect</h3>
            <p className="text-slate-300 mb-6">
              Questions, comments, or suggestions? Simply fill in the form and
              we’ll be in touch shortly.
            </p>

            <div className="space-y-4 text-slate-200">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#0f19ab]" />
                <span>+91-7715866266</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#0f19ab]" />
                <span>contact@factorylo.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}