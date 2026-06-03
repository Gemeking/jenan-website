"use client";

import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "General Surgery",
    oromo: "Baqaqsanii Yaaluu",
    description: "Advanced surgical procedures by expert surgeons using state-of-the-art equipment and internationally-recognised techniques.",
    image: "/images/facilities/operating-room-1.jpg",
    accent: "#DC2626",
  },
  {
    title: "Pediatric Care",
    oromo: "Daa'imman Yaaluu",
    description: "Specialised medical and surgical care designed for infants, children, and adolescents with compassion and clinical precision.",
    image: "/images/facilities/operating-room-2-entrance.jpg",
    accent: "#2563EB",
  },
  {
    title: "Maternal Care",
    oromo: "Haadha Yaaluu",
    description: "Comprehensive obstetric and gynaecological care ensuring the safety and wellbeing of mothers and newborns throughout the journey.",
    image: "/images/facilities/recovery-room.jpg",
    accent: "#E11D48",
  },
  {
    title: "Diagnostic Imaging",
    oromo: "Sakatta'a Fayyaa",
    description: "In-house X-ray, Mindray DC-40 colour Doppler ultrasound, and digital radiology workstation for fast, accurate diagnosis.",
    image: "/images/equipment/ultrasound-machine.jpg",
    accent: "#7C3AED",
  },
  {
    title: "Emergency Care",
    oromo: "Hatattamaa Yaaluu",
    description: "Our emergency team is on standby around the clock — day or night — ready to respond to any medical or surgical crisis.",
    image: "/images/patient-areas/indoor-reception.jpg",
    accent: "#D97706",
  },
  {
    title: "Sterilization & Safety",
    oromo: "Qulqullina Eeggannoo",
    description: "Hospital-grade autoclave sterilization and strict WHO infection-control protocols guarantee the highest safety standards.",
    image: "/images/facilities/sterilization-room.jpg",
    accent: "#059669",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-alt py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <RevealOnScroll className="text-center mb-14">
          <div className="red-rule mx-auto mb-5" />
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            Comprehensive{" "}
            <span className="gradient-text-red">Medical Services</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From routine diagnostics to complex surgeries, our specialists deliver precise, compassionate care across the full spectrum of medical needs.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ title, oromo, description, image, accent }, i) => (
            <RevealOnScroll key={title} direction="up" delay={i * 70}>
              <div className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1" style={{ height: 320 }}>
                {/* Background image */}
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/92 via-slate-900/55 to-slate-900/15" />

                {/* Color accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: accent }} />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <p className="text-white/55 text-xs font-bold tracking-widest uppercase mb-1">{oromo}</p>
                  <h3 className="text-white text-xl font-black mb-2">{title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed line-clamp-2">{description}</p>
                  <div className="flex items-center gap-1.5 text-xs font-bold mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: accent === "#DC2626" ? "#FCA5A5" : "#93C5FD" }}>
                    <span>Learn more</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-bold text-sm rounded-xl transition-all duration-200"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
