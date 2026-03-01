"use client";

import FullScreenSection from "@/components/sections/common/FullScreenSection";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const tours = [
  {
    title: "Aurora Glass Cabin Week",
    location: "Finnish Lapland",
    details: "7 nights · husky safari · private sauna",
    image: "/night.jpg",
    gradient: "linear-gradient(135deg, #0c4a6e 0%, #0e7490 50%, #155e75 100%)",
  },
  {
    title: "Midnight Sun Fjord Cruise",
    location: "Northern Norway",
    details: "5 nights · small ship · coastal hikes",
    image: "/coastal.jpg",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #0369a1 50%, #0ea5e9 100%)",
  },
  {
    title: "Scandi City Hopping",
    location: "Oslo · Stockholm · Copenhagen",
    details: "8 nights · trains · food & design focus",
    image: "/chope.jpg",
    gradient: "linear-gradient(135deg, #134e4a 0%, #0f766e 50%, #14b8a6 100%)",
  },
];

// Set to true and add images (night.jpg, coastal.jpg, chope.jpg) to /public when ready
const USE_TOUR_IMAGES = false;

export default function FeaturedToursSection() {
  return (
    <FullScreenSection
      id="tours"
      label="003/"
      title="Curated Scandi itineraries"
      subtitle="A glimpse into journeys we've recently designed. Every trip begins as inspiration — and becomes entirely yours."
      align="left"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid w-full gap-10 md:grid-cols-3"
      >
        {tours.map((tour, i) => (
          <motion.article
            key={tour.title}
            variants={fadeInUp}
            className="group relative h-[420px] w-full overflow-hidden rounded-3xl"
          >
            {/* Background: gradient (always visible), image when available */}
            <div
              className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
              style={{ background: tour.gradient }}
            />
            {USE_TOUR_IMAGES && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={tour.image}
                alt={tour.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            
            <div className="absolute bottom-0 z-10 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                {tour.location}
              </p>

              <h3 className="mt-2 text-xl font-semibold leading-snug">
                {tour.title}
              </h3>

              <p className="mt-2 text-sm text-white/80">
                {tour.details}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </FullScreenSection>
  );
}