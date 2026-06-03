"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const facilities = [
  {
    src: "/images/facilities/operating-room-1-wide.jpg",
    title: "Operating Room I",
    desc: "Fully-equipped surgical suite with overhead lights, anesthesia machine, and complete instrumentation.",
    tag: "Surgical",
  },
  {
    src: "/images/team/medical-team.jpg",
    title: "Our Expert Team",
    desc: "Dedicated surgeons, nurses, and anaesthetists working together for outstanding patient outcomes.",
    tag: "Team",
  },
  {
    src: "/images/facilities/recovery-room.jpg",
    title: "Recovery Room",
    desc: "Comfortable post-operative recovery space with close monitoring and oxygen supply.",
    tag: "Recovery",
  },
  {
    src: "/images/equipment/ultrasound-machine.jpg",
    title: "Mindray DC-40 Ultrasound",
    desc: "State-of-the-art colour Doppler ultrasound for abdominal, obstetric, and vascular imaging.",
    tag: "Diagnostics",
  },
  {
    src: "/images/equipment/xray-machine.jpg",
    title: "Digital X-Ray Suite",
    desc: "High-resolution radiography table enabling fast, accurate skeletal and chest imaging.",
    tag: "Radiology",
  },
  {
    src: "/images/facilities/sterilization-room.jpg",
    title: "Sterilization Room",
    desc: "Autoclave sterilization ensuring every instrument meets the highest safety standards.",
    tag: "Safety",
  },
  {
    src: "/images/patient-areas/outdoor-waiting-area.jpg",
    title: "Patient Waiting Area",
    desc: "Spacious and comfortable waiting area designed for a calm, reassuring patient experience.",
    tag: "Facilities",
  },
  {
    src: "/images/patient-areas/indoor-reception.jpg",
    title: "24-Hour Reception",
    desc: "Always-open reception and triage area staffed around the clock for immediate attention.",
    tag: "Reception",
  },
];

const tagColors: Record<string, string> = {
  Surgical: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Team: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  Recovery: "bg-green-500/20 text-green-300 border-green-500/30",
  Diagnostics: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  Radiology: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  Safety: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  Facilities: "bg-slate-500/20 text-slate-300 border-slate-500/30",
  Reception: "bg-pink-500/20 text-pink-300 border-pink-500/30",
};

export default function FacilitiesSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + facilities.length) % facilities.length);
  const next = () => setActive((a) => (a + 1) % facilities.length);

  return (
    <section id="facilities" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-navy-800" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Our Facilities
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            World-Class{" "}
            <span className="gradient-text">Infrastructure</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every room and piece of equipment at Jenan is chosen to deliver the safest and most effective care possible.
          </p>
        </div>

        {/* Main image + info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          {/* Big image */}
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden group" style={{ minHeight: 400 }}>
            <Image
              src={facilities[active].src}
              alt={facilities[active].title}
              fill
              className="object-cover transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
            {/* Tag */}
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${tagColors[facilities[active].tag]}`}>
                {facilities[active].tag}
              </span>
            </div>
            {/* Nav arrows */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl glass border border-white/10 hover:border-blue-400/40 flex items-center justify-center text-white transition-all hover:bg-blue-600/20"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl glass border border-white/10 hover:border-blue-400/40 flex items-center justify-center text-white transition-all hover:bg-blue-600/20"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            {/* Title overlay */}
            <div className="absolute bottom-14 left-5 right-16">
              <h3 className="text-xl font-bold text-white">{facilities[active].title}</h3>
              <p className="text-slate-300 text-sm mt-1">{facilities[active].desc}</p>
            </div>
          </div>

          {/* Thumbnail grid */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
            {facilities.map((f, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  i === active
                    ? "ring-2 ring-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                    : "opacity-60 hover:opacity-90"
                }`}
                style={{ height: 110 }}
              >
                <Image src={f.src} alt={f.title} fill className="object-cover" sizes="200px" />
                <div className={`absolute inset-0 ${i === active ? "bg-blue-600/10" : "bg-navy-900/20"}`} />
                {i === active && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ZoomIn size={16} className="text-white opacity-80" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {facilities.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${
                i === active ? "w-8 h-2 bg-blue-500" : "w-2 h-2 bg-slate-600 hover:bg-slate-400"
              }`}
              aria-label={`Go to ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
