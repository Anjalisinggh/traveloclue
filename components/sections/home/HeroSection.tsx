import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-stretch justify-center">
      <img
        src="/landing.jpg"
        alt="Hero"
        width={1600}
        height={900}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center px-4 py-24 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-sky-300/80">
          Scandi journeys with Traveloclue
        </p>
        <h1 className="mb-4 text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
          Discover the magic of the{" "}
          <span className="text-sky-300">northern lights</span>
        </h1>
        <p className="mb-8 max-w-2xl text-base text-slate-200 md:text-lg">
          Curated Nordic tours, fjord cruises, and aurora escapes designed
          for unforgettable nights under the Scandi sky.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" variant="primary">
            Get started
          </Button>
          <Button size="lg" variant="outline" className="border-white/30 text-slate-100">
            View tours
          </Button>
        </div>
      </div>
    </section>
  );
}
