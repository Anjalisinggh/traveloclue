"use client";

import FullScreenSection from "@/components/sections/common/FullScreenSection";
import Image from "next/image";


const tours = [
  {
    title: "Aurora Glass Cabin Week",
    location: "Finnish Lapland",
    details: "7 nights · husky safari · private sauna",
    image: "/husky.jpg",
  },
  {
    title: "Midnight Sun Fjord Cruise",
    location: "Northern Norway",
    details: "5 nights · small ship · coastal hikes",
    image: "/coastal.jpg",
  },
  {
    title: "Scandinavian City Hopping",
    location: "Oslo · Stockholm · Copenhagen",
    details: "8 nights · trains · food & design focus",
    image: "/chope.jpg",
  },
 
];

export default function FeaturedToursSection() {
  return (
    <FullScreenSection
      id="tours"
      label="003/"
      title="Curated Nordic Journeys"
      subtitle="A glimpse into journeys we've recently designed."
      align="left"
    >
      <div className="hide-scrollbar w-full min-w-0 overflow-x-auto overscroll-x-contain pb-4">
        <div className="flex snap-x snap-mandatory gap-6 pr-8" style={{ width: "max-content" }}>
          {tours.map((tour) => (
            <div
              key={tour.title}
              className="group relative h-[420px] w-[380px] shrink-0 snap-start overflow-hidden rounded-3xl transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Image */}
              <Image
                src={tour.image}
                alt={tour.title}
                width={380}
                height={420}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                  {tour.location}
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-tight">
                  {tour.title}
                </h3>
                <p className="mt-2 text-sm text-white/80">{tour.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FullScreenSection>
  );
}