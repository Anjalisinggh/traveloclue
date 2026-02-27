import FullScreenSection from "@/components/sections/common/FullScreenSection";

export default function AboutSection() {
  return (
    <FullScreenSection
      id="about"
      label="001/"
      title="We are your travel partner"
      subtitle="Traveloclue curates nature-first journeys across the Nordics, from glass-igloo aurora stays to fjord cruises and alpine escapes."
      align="left"
    >
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <p className="text-sm text-slate-300 md:text-base">
          We work side-by-side with local guides, boutique stays, and cruise
          operators to craft itineraries that feel effortless, cinematic, and
          deeply connected to place. No generic packages, only journeys that
          respect the land and the seasons.
        </p>

        <div className="space-y-4 text-sm text-slate-200">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              For explorers
            </p>
            <p className="mt-1">
              Solo, friends, or families who want curated experiences without
              losing the thrill of discovery.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              For teams
            </p>
            <p className="mt-1">
              Retreats, incentive trips, and offsites designed for deep focus by
              day and aurora skies by night.
            </p>
          </div>
        </div>
      </div>
    </FullScreenSection>
  );
}

