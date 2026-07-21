"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

type Category = "All" | "Exterior" | "Surgery" | "Diagnostics" | "Facilities" | "Team";

interface GalleryImage {
  src: string;
  title: string;
  oromo: string;
  category: Exclude<Category, "All">;
}

const images: GalleryImage[] = [
  { src: "/images/imageDoc/entrance-market-view.jpg", title: "Street Entrance", oromo: "Balbala Seensaa", category: "Exterior" },
  { src: "/images/imageDoc/building-signage-wide.jpg", title: "Jenan Building", oromo: "Mana Wiirtuu Jennaan", category: "Exterior" },
  { src: "/images/imageDoc/building-signage-tall.jpg", title: "Building Facade", oromo: "Fuula Mana Keenya", category: "Exterior" },
  { src: "/images/imageDoc/building-exterior-portrait.jpg", title: "Jenan Signage", oromo: "Mallattoo Jennaan", category: "Exterior" },
  { src: "/images/imageDoc/entrance-gate-close.jpg", title: "Main Gate", oromo: "Balbala Guddaa", category: "Exterior" },

  { src: "/images/imageDoc/reception-desk.jpg", title: "Reception Desk", oromo: "Kutaa Simannaa", category: "Facilities" },
  { src: "/images/imageDoc/opd-entrance-waiting.jpg", title: "OPD Entrance", oromo: "Balbala OPD", category: "Facilities" },
  { src: "/images/imageDoc/waiting-hallway-empty.jpg", title: "Patient Waiting Hallway", oromo: "Bakka Eeggannoo", category: "Facilities" },
  { src: "/images/imageDoc/waiting-hallway-patients.jpg", title: "Patient Waiting Area", oromo: "Bakka Eeggannoo Dhukkubsataa", category: "Facilities" },
  { src: "/images/imageDoc/emergency-room-entrance.jpg", title: "Emergency Room", oromo: "Kutaa Hatattamaa", category: "Facilities" },
  { src: "/images/imageDoc/injection-procedure-hallway.jpg", title: "Injection & Procedure Rooms", oromo: "Kutaa Maalaqaa", category: "Facilities" },
  { src: "/images/imageDoc/female-ward-hallway.jpg", title: "Female Ward", oromo: "Kutaa Dubartootaa", category: "Facilities" },
  { src: "/images/imageDoc/oxygen-tanks-storage.jpg", title: "Oxygen Supply", oromo: "Meeshaa Ogsijinii", category: "Facilities" },
  { src: "/images/imageDoc/ambulance-exterior.jpg", title: "24/7 Ambulance Service", oromo: "Konkolaataa Hatattamaa", category: "Facilities" },

  { src: "/images/imageDoc/operating-room-staff.jpg", title: "Operating Theatre", oromo: "Kutaa Baqaqsanii", category: "Surgery" },
  { src: "/images/imageDoc/or-icu-hallway.jpg", title: "OR / ICU Wing", oromo: "Kutaa Yaalaa Cimaa", category: "Surgery" },
  { src: "/images/imageDoc/inpatient-ward-room.jpg", title: "Inpatient Ward", oromo: "Kutaa Fayyinaa", category: "Surgery" },
  { src: "/images/imageDoc/sterilization-autoclave-room.jpg", title: "Sterilization Room", oromo: "Kutaa Qulqulleessuu", category: "Surgery" },
  { src: "/images/imageDoc/consultation-room.jpg", title: "Consultation Room", oromo: "Kutaa Mari'achuu", category: "Surgery" },

  { src: "/images/imageDoc/ultrasound-exam-room.jpg", title: "Ultrasound Suite", oromo: "Meeshaa Ultrasound", category: "Diagnostics" },
  { src: "/images/imageDoc/xray-machine-room.jpg", title: "Digital X-Ray Suite", oromo: "Meeshaa X-Ray", category: "Diagnostics" },
  { src: "/images/imageDoc/xray-digital-workstation.jpg", title: "Radiology Workstation", oromo: "Kutaa Too'annoo Radiooloojii", category: "Diagnostics" },
  { src: "/images/imageDoc/laboratory-door.jpg", title: "Laboratory Entrance", oromo: "Balbala Kutaa Qorannoo", category: "Diagnostics" },
  { src: "/images/imageDoc/laboratory-equipment-desk.jpg", title: "Clinical Chemistry Analyzer", oromo: "Meeshaa Qorannoo Dhiigaa", category: "Diagnostics" },
  { src: "/images/imageDoc/lab-technician-microscope.jpg", title: "Laboratory Technician at Work", oromo: "Ogeessa Kutaa Qorannoo", category: "Diagnostics" },

  { src: "/images/imageDoc/nurses-team-lineup-1.jpg", title: "Our Nursing Team", oromo: "Garee Ogeeyyii Fayyaa", category: "Team" },
  { src: "/images/imageDoc/nurses-team-lineup-2.jpg", title: "Our Nursing Team", oromo: "Garee Ogeeyyii Fayyaa", category: "Team" },
  { src: "/images/imageDoc/dr-dejene-portrait.jpg", title: "Dr. Dejene Desalegn — Founder & Medical Director", oromo: "Hundeessaa fi Ogeessa Olaanaa", category: "Team" },
  { src: "/images/imageDoc/dr-dejene-office-wide.jpg", title: "Dr. Dejene Desalegn at Work", oromo: "Hundeessaa fi Ogeessa Olaanaa", category: "Team" },
  { src: "/images/imageDoc/dr-tadesse-portrait.jpg", title: "Dr. Tadesse Soresso — Pediatrician", oromo: "Ogeessa Fayyaa Daa'immanii", category: "Team" },
  { src: "/images/imageDoc/dr-tadesse-at-desk.jpg", title: "Dr. Tadesse Soresso at Work", oromo: "Ogeessa Fayyaa Daa'immanii", category: "Team" },
];

const categories: Category[] = ["All", "Exterior", "Surgery", "Diagnostics", "Facilities", "Team"];

export default function GalleryGrid() {
  const [active, setActive] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  const close = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, close, showPrev, showNext]);

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
              active === cat
                ? "bg-brand-red text-white shadow-md"
                : "bg-white text-slate-600 border border-slate-200 hover:border-brand-red hover:text-brand-red"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {filtered.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setLightboxIndex(i)}
            className="group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-square bg-slate-100 text-left"
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                <ZoomIn size={16} className="text-slate-900" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm sm:text-sm font-black leading-tight line-clamp-2">{img.title}</p>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-slate-400 py-16">No images in this category yet.</p>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-3 sm:p-8"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous image"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next image"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <ChevronRight size={22} />
          </button>

          <div
            className="relative w-full max-w-4xl max-h-[80vh] aspect-[4/3] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-center px-4 max-w-lg">
            <p className="text-white font-black text-sm sm:text-base">{filtered[lightboxIndex].title}</p>
            <p className="text-brand-red-mid text-sm italic mt-0.5">{filtered[lightboxIndex].oromo}</p>
            <p className="text-slate-500 text-sm mt-2">{lightboxIndex + 1} / {filtered.length}</p>
          </div>
        </div>
      )}
    </div>
  );
}
