import Image from "next/image";

const values = [
  { label: "Mission", text: "To deliver world-class surgical and medical care to every patient in Ethiopia, regardless of background." },
  { label: "Vision", text: "To be the most trusted and advanced surgical speciality center in East Africa." },
  { label: "Values", text: "Excellence · Compassion · Integrity · Safety · Innovation" },
];

export default function TeamSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-navy-800" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Our People
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The Team Behind{" "}
            <span className="gradient-text">Your Care</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A dedicated group of experienced surgeons, nurses, anesthesiologists, and support staff committed to your health and recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Team photo */}
          <div className="relative rounded-3xl overflow-hidden" style={{ height: 420 }}>
            <Image
              src="/images/team/medical-team.jpg"
              alt="Jenan Medical Team"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass border border-white/10 rounded-2xl px-5 py-4">
                <p className="text-white font-semibold text-sm mb-1">Multidisciplinary Team</p>
                <p className="text-slate-400 text-xs">
                  Surgeons · Anaesthetists · Scrub Nurses · Radiologists · Recovery Nurses
                </p>
              </div>
            </div>
          </div>

          {/* Mission / vision / values */}
          <div className="space-y-5">
            {values.map(({ label, text }) => (
              <div
                key={label}
                className="glass border border-white/7 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
              >
                <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2">{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
              </div>
            ))}

            {/* Tagline card */}
            <div className="relative rounded-2xl overflow-hidden p-6 bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-500/25">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
              <p className="text-2xl font-bold text-white italic relative z-10">
                &ldquo;Yaalii Baqaqsanii Yaaluu Ol&apos;aanaa Jennaan&rdquo;
              </p>
              <p className="text-blue-300 text-sm mt-2 relative z-10">— We Serve You!!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
