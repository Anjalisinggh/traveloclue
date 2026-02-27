import Image from "next/image";

export const metadata = {
  title: "About | Traveloclue",
  description: "About Traveloclue",
};

export default function AboutPage() {
  return (
    <main className="bg-[#0b1220] text-slate-100">

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Structured travel for businesses.
              <br />
              <span className="text-sky-400">
                Delivered with precision.
              </span>
            </h1>

            <p className="mt-6 text-slate-300 leading-relaxed max-w-xl">
              Founded in 2014, Traveloclue partners with corporates,
              event planners, and structured group travelers across
              key global destinations. We focus on operational clarity,
              coordination, and dependable execution.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
            <Image
              src="/thailand.jpg"
              alt="Travel"
              width={600}
              height={500}
              className="object-cover w-full h-[420px]"
            />
          </div>

        </div>
      </section>


      {/* ================= VISION / MISSION ================= */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-3">

          <SimpleCard
            title="Vision"
            text="Simplify global travel planning for corporates and structured group journeys."
          />

          <SimpleCard
            title="Mission"
            text="Handle logistics, compliance, and coordination with consistency."
          />

          <SimpleCard
            title="Focus"
            text="Reliable partnerships and transparent execution across destinations."
          />

        </div>
      </section>


      {/* ================= INFOGRAPHIC APPROACH SECTION ================= */}
      <section className="relative bg-[#0f172a] py-32 overflow-hidden">

        {/* subtle background lighting */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-emerald-400/5 pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-center">
            Our Approach
          </h2>

          <p className="text-slate-400 text-center mt-4 max-w-2xl mx-auto">
            A structured, sequential system designed to ensure clarity and control.
          </p>

          <div className="relative mt-20">

            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10"></div>

            <div className="space-y-16">

              <TimelineItem
                number="01"
                title="Discovery & Requirement Mapping"
                text="Understanding business objectives, travel scale, budgets, and compliance requirements before planning begins."
              />

              <TimelineItem
                number="02"
                title="Strategic Planning"
                text="Destination coordination, verified partner alignment, and itinerary structuring with clear deliverables."
              />

              <TimelineItem
                number="03"
                title="Execution & Coordination"
                text="Managed logistics, on-ground supervision, and consistent communication throughout the journey."
              />

              <TimelineItem
                number="04"
                title="Post-Travel Review"
                text="Feedback integration, performance review, and long-term relationship strengthening."
              />

            </div>

          </div>

        </div>
      </section>


      {/* ================= FOUNDER SECTION ================= */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-6 bg-[#111827] rounded-3xl -z-10"></div>

            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
              <Image
                src="/urvashi.jpg"  // Replace with real image
                alt="Urvashi Panchal"
                width={600}
                height={700}
                className="object-cover w-full h-[500px]"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-sky-400">
              Founder & CEO
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
              Urvashi Panchal
            </h2>

            <p className="mt-6 text-slate-300 leading-relaxed">
              With over 13 years of experience in travel and hospitality,
              Urvashi founded Traveloclue with a focus on operational
              strength, industry discipline, and long-term partnerships.
            </p>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Holding IATA and GDS certifications, she brings structured
              planning, destination expertise, and clarity to every journey
              managed under the Traveloclue name.
            </p>

            <div className="mt-8 h-px w-24 bg-sky-400/40"></div>
          </div>

        </div>
      </section>

    </main>
  );
}


/* ================= COMPONENTS ================= */

function SimpleCard({ title, text }: any) {
  return (
    <div className="bg-[#111827] p-8 rounded-2xl shadow-xl shadow-black/40 hover:shadow-black/60 transition-all duration-300">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-4 text-slate-300 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function TimelineItem({ number, title, text }: any) {
  return (
    <div className="relative flex items-start gap-8">

      {/* Dot */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center shadow-lg shadow-black/40">
          <span className="text-sm font-semibold text-sky-400">
            {number}
          </span>
        </div>
      </div>

      {/* Panel */}
      <div className="flex-1 bg-[#111827]/90 rounded-2xl p-8 shadow-2xl shadow-black/40 border border-white/5 transition-all duration-300 hover:shadow-black/60 hover:-translate-y-1">

        <h3 className="text-lg md:text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-4 text-sm text-slate-400 leading-relaxed">
          {text}
        </p>

      </div>

    </div>
  );
}