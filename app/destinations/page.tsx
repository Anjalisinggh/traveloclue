"use client";

import { useState } from "react";
import Image from "next/image";

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
    image: "/destinations/paris.jpg",
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
    <main className="min-h-screen bg-[#020617] text-white px-6 py-24">

      {/* HERO */}
      <section className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Discover Destinations That Match Your Vibe
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto mb-8">
          From serene beaches to bustling cities — explore curated locations
          designed for your next unforgettable journey.
        </p>

        {/* Search */}
        <div className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search country, city, or experience..."
            className="w-full bg-slate-900/60 border border-white/10 rounded-full px-6 py-3 text-sm backdrop-blur-md focus:outline-none focus:border-sky-400 transition"
          />
        </div>
      </section>

      {/* FILTERS */}
      <section className="max-w-6xl mx-auto mb-14">
        <div className="flex flex-wrap gap-3 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm border transition ${
                activeFilter === filter
                  ? "bg-sky-500 text-white border-sky-500"
                  : "bg-slate-900/50 text-slate-300 border-white/10 hover:bg-slate-800"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* DESTINATION GRID */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {filtered.map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
      </section>

      {/* TRENDING SECTION */}
      <section className="max-w-6xl mx-auto mt-24">
        <h2 className="text-2xl font-semibold mb-8">
          🔥 Trending Right Now
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {destinations.slice(0, 3).map((destination, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group"
            >
              <Image
                src={destination.image}
                alt={destination.name}
                width={500}
                height={300}
                className="object-cover h-56 w-full group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-end p-4">
                <h3 className="text-lg font-medium">
                  {destination.name}, {destination.country}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

/* DESTINATION CARD COMPONENT */

function DestinationCard({
  name,
  country,
  image,
  vibe,
}: {
  name: string;
  country: string;
  image: string;
  vibe: string;
}) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-slate-900/60 border border-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={500}
          height={300}
          className="object-cover w-full h-full group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-1">
          {name}, {country}
        </h3>
        <p className="text-slate-400 text-sm mb-4">{vibe}</p>
        <button className="text-sm text-sky-400 hover:text-sky-300 transition">
          Explore →
        </button>
      </div>
    </div>
  );
}