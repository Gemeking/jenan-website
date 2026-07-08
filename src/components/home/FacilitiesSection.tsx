"use client";

import { useState } from "react";
import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ChevronLeft, ChevronRight } from "lucide-react";

const facilities = [
  { src: "/images/imageDoc/operating-room-3-wide.jpg", title: "Operating Theatre", oromo: "Kutaa Baqaqsanii", desc: "Full surgical suite with overhead lights, anesthesia machine, and complete instrumentation.", tag: "Surgery" },
  { src: "/images/imageDoc/clinic-staff-group.png", title: "Expert Medical Team", oromo: "Garee Ogeeyyii Fayyaa", desc: "Dedicated surgeons, nurses, and anaesthetists delivering outstanding patient outcomes.", tag: "Team" },
  { src: "/images/imageDoc/inpatient-ward-bed.jpg", title: "Inpatient Ward", oromo: "Kutaa Fayyinaa", desc: "Kutaa booda baqaqsaniitti — post-operative recovery with close monitoring and oxygen supply.", tag: "Recovery" },
  { src: "/images/imageDoc/ultrasound-room.jpg", title: "Mindray DC-40 Ultrasound", oromo: "Meeshaa Ultrasound", desc: "Ultrasoond ammayyaa — colour Doppler ultrasound for abdominal, obstetric, and vascular imaging.", tag: "Diagnostics" },
  { src: "/images/imageDoc/xray-room-machine.jpg", title: "Digital X-Ray Suite", oromo: "Meeshaa X-Ray", desc: "Sakatta'a X-ray — high-resolution radiography for fast and accurate skeletal and chest imaging.", tag: "Radiology" },
  { src: "/images/imageDoc/sterilization-autoclave.jpg", title: "Sterilization Room", oromo: "Kutaa Qulqulleessuu", desc: "Qulqulleessuu meeshaalee — autoclave sterilization ensuring every instrument meets international safety standards.", tag: "Safety" },
  { src: "/images/imageDoc/laboratory-chemistry-analyzer.jpg", title: "Clinical Laboratory", oromo: "Kutaa Qorannoo", desc: "Qorannoo dhiigaa fi fincaanii — in-house clinical chemistry and immunoassay testing for fast, accurate results.", tag: "Laboratory" },
  { src: "/images/imageDoc/pharmacy-entrance.jpg", title: "In-House Pharmacy", oromo: "Kutaa Qorichaa", desc: "Qoricha barbaachisu argachuu dandeessu — a fully stocked on-site pharmacy for every prescription need.", tag: "Pharmacy" },
  { src: "/images/imageDoc/surgical-waiting-hallway.jpg", title: "Patient Waiting Area", oromo: "Bakka Eeggannoo Dhukkubsataa", desc: "Bakka eeggannoo bal'aa fi nagaa — spacious and comfortable waiting area for a calm experience.", tag: "Facilities" },
  { src: "/images/imageDoc/reception-counter.jpg", title: "24-Hour Reception", oromo: "Simichaa Sa'aa 24", desc: "Sa'aa 24 banaa — always-staffed reception and triage area open around the clock.", tag: "Reception" },
];

const tagStyles: Record<string, string> = {
  Surgery: "bg-brand-red-light text-brand-red border-red-200",
  Team: "bg-blue-50 text-blue-600 border-blue-200",
  Recovery: "bg-emerald-50 text-emerald-600 border-emerald-200",
  Diagnostics: "bg-violet-50 text-violet-600 border-violet-200",
  Radiology: "bg-indigo-50 text-indigo-600 border-indigo-200",
  Safety: "bg-amber-50 text-amber-600 border-amber-200",
  Laboratory: "bg-cyan-50 text-cyan-600 border-cyan-200",
  Pharmacy: "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200",
  Facilities: "bg-slate-50 text-slate-600 border-slate-200",
  Reception: "bg-rose-50 text-rose-600 border-rose-200",
};

export default function FacilitiesSection() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + facilities.length) % facilities.length);
  const next = () => setActive((a) => (a + 1) % facilities.length);

  return (
    <section id="facilities" className="section-alt py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <RevealOnScroll className="text-center mb-14">
          <div className="red-rule mx-auto mb-5" />
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            Inside{" "}
            <span className="gradient-text-red">Jenan</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Every room, instrument, and piece of equipment at Jenan is chosen to deliver the safest and most effective care possible.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-stretch">
          {/* Main image */}
          <RevealOnScroll direction="left" className="lg:col-span-3">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover" style={{ minHeight: 420 }}>
              <Image
                src={facilities[active].src}
                alt={facilities[active].title}
                fill
                className="object-cover transition-all duration-700"
                sizes="(max-width:1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${tagStyles[facilities[active].tag]}`}>
                  {facilities[active].tag}
                </span>
              </div>

              {/* Nav */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button onClick={prev} className="w-9 h-9 rounded-xl bg-white/90 hover:bg-white flex items-center justify-center text-slate-700 shadow transition-all">
                  <ChevronLeft size={17} />
                </button>
                <button onClick={next} className="w-9 h-9 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white flex items-center justify-center shadow transition-all">
                  <ChevronRight size={17} />
                </button>
              </div>

              {/* Caption */}
              <div className="absolute bottom-14 left-5 right-16">
                <p className="text-white/50 text-xs font-bold italic mb-0.5">{facilities[active].oromo}</p>
                <h3 className="text-white font-black text-xl">{facilities[active].title}</h3>
                <p className="text-white/70 text-sm mt-1">{facilities[active].desc}</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Thumbnail grid */}
          <RevealOnScroll direction="right" className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 h-full">
              {facilities.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                    i === active ? "ring-2 ring-brand-red shadow-md" : "opacity-70 hover:opacity-100"
                  }`}
                  style={{ height: 100 }}
                >
                  <Image src={f.src} alt={f.title} fill className="object-cover" sizes="180px" />
                  <div className={`absolute inset-0 ${i === active ? "bg-brand-red/10" : "bg-transparent"}`} />
                </button>
              ))}
            </div>
          </RevealOnScroll>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {facilities.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${i === active ? "w-7 h-2 bg-brand-red" : "w-2 h-2 bg-slate-300 hover:bg-slate-400"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
