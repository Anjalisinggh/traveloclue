import FullScreenSection from "@/components/sections/common/FullScreenSection";

const tours = [
  {
    title: "Aurora Glass Cabin Week",
    location: "Finnish Lapland",
    details: "7 nights · husky safari · private sauna",
  },
  {
    title: "Midnight Sun Fjord Cruise",
    location: "Northern Norway",
    details: "5 nights · small ship · coastal hikes",
  },
  {
    title: "Scandi City Hopping",
    location: "Oslo · Stockholm · Copenhagen",
    details: "8 nights · trains · food & design focus",
  },
];

export default function FeaturedToursSection() {
  return (
    <FullScreenSection
      id="tours"
      label="003/"
      title="Curated Scandi itineraries"
      subtitle="A sample of journeys we’ve recently designed. Every trip starts here and is tailored to the way you like to travel."
      align="left"
    >
      <div className="grid gap-8 md:grid-cols-3">
        {tours.map((tour) => (
          <article
            key={tour.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_26px_80px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute -top-12 right-[-20%] h-40 w-40 rounded-full bg-sky-400/25 blur-2xl transition duration-500 group-hover:translate-y-4" />
            <div className="relative z-10 space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-300">
                {tour.location}
              </p>
              <h3 className="text-lg font-semibold text-slate-50">
                {tour.title}
              </h3>
              <p className="text-sm text-slate-200">{tour.details}</p>
            </div>
          </article>
        ))}
      </div>
    </FullScreenSection>
  );
}

