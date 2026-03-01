"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportDefault } from "@/lib/motion";

const filters = [
  "All",
  "Beaches",
  "Mountains",
  "Cities",
  "Heritage",
  "Nature",
  "Luxury",
];

const destinations = [
  {
    name: "Bali",
    country: "Indonesia",
    category: "Beaches",
    image: "/destinations/bali.jpg",
    vibe: "Tropical paradise with culture & coastline.",
  },
  {
    name: "Paris",
    country: "France",
    category: "Cities",
    image: "/destinations/pairs.jpg",
    vibe: "Romance, art, and timeless elegance.",
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    category: "Mountains",
    image: "/destinations/swiss.jpg",
    vibe: "Snow peaks and scenic adventures.",
  },
  {
    name: "Kyoto",
    country: "Japan",
    category: "Heritage",
    image: "/destinations/kyoto.jpg",
    vibe: "Tradition meets tranquility.",
  },
  {
    name: "Maldives",
    country: "Maldives",
    category: "Luxury",
    image: "/destinations/maldives.jpg",
    vibe: "Crystal waters and overwater villas.",
  },
];

export default function DestinationsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? destinations
      : destinations.filter((d) => d.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#020617] px-6 py-24 text-white">
      {/* HERO */}
      <motion.section
        className="mx-auto mb-20 max-w-6xl text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeInUp}
          className="mb-6 text-4xl font-semibold md:text-5xl"
        >
          Discover Destinations That Match Your Vibe
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mx-auto mb-8 max-w-2xl text-slate-400"
        >
          From serene beaches to bustling cities — explore curated locations
          designed for your next unforgettable journey.
        </motion.p>

        <motion.div variants={fadeInUp} className="mx-auto max-w-xl">
          <input
            type="text"
            placeholder="Search country, city, or experience..."
            className="w-full rounded-full border border-white/10 bg-slate-900/40 px-6 py-3 text-sm shadow-lg shadow-black/20 backdrop-blur-xl transition focus:border-sky-400 focus:outline-none"
          />
        </motion.div>
      </motion.section>

      {/* FILTERS */}
      <motion.section
        className="mx-auto mb-14 max-w-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`rounded-full border px-5 py-2 text-sm backdrop-blur-xl transition ${
                activeFilter === filter
                  ? "border-sky-500 bg-sky-500 text-white"
                  : "border-white/10 bg-slate-900/40 text-slate-300 shadow-black/20 hover:bg-slate-800/60"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>
      </motion.section>

      {/* DESTINATION GRID */}
      <section className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {filtered.map((destination, index) => (
          <DestinationCard key={destination.name} {...destination} index={index} />
        ))}
      </section>

      {/* TRENDING SECTION */}
      <motion.section
        className="mx-auto mt-24 max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={viewportDefault}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp} className="mb-8 text-2xl font-semibold">
          Trending Right Now
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {destinations.slice(0, 3).map((destination, index) => (
            <motion.div
              key={destination.name}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/20"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={500}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-black/30 p-4 backdrop-blur-md">
                <h3 className="text-lg font-medium">
                  {destination.name}, {destination.country}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}

function DestinationCard({
  name,
  country,
  image,
  vibe,
  index,
}: {
  name: string;
  country: string;
  image: string;
  vibe: string;
  index: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportDefault}
      variants={fadeInUp}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 shadow-xl shadow-black/30 backdrop-blur-xl transition-shadow duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={500}
          height={300}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <h3 className="mb-1 text-xl font-semibold">
          {name}, {country}
        </h3>
        <p className="mb-4 text-sm text-slate-400">{vibe}</p>
        <motion.button
          whileHover={{ x: 4 }}
          className="text-sm text-sky-400 transition hover:text-sky-300"
        >
          Explore →
        </motion.button>
      </div>
    </motion.div>
  );
}
