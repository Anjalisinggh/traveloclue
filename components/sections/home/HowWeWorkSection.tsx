import FullScreenSection from "@/components/sections/common/FullScreenSection";

const steps = [
  {
    title: "Spot the signal",
    body: "Tell us how you like to travel and when. We scan seasons, aurora forecasts, and local events to find the window that fits you best.",
  },
  {
    title: "Design what matters",
    body: "We design a route with stays, transfers, and experiences that balance slow travel with once-in-a-lifetime peaks.",
  },
  {
    title: "Travel, supported",
    body: "From the first airport to the last cabin, our team and local partners stay one message away if plans need to adapt.",
  },
];

export default function HowWeWorkSection() {
  return (
    <FullScreenSection
      id="how-we-work"
      label="002/"
      title="How we build your journey"
      subtitle="From first idea to the last night under the lights, we turn inspiration into a clear, supported itinerary."
      align="left"
    >
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.title}
            className="rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-md"
          >
            <h3 className="mb-3 text-base font-semibold text-slate-50">
              {step.title}
            </h3>
            <p className="text-sm text-slate-300">{step.body}</p>
          </div>
        ))}
      </div>
    </FullScreenSection>
  );
}