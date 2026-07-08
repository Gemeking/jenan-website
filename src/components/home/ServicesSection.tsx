"use client";

import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "General Surgery",
    oromo: "Baqaqsanii Yaaluu",
    description: "Surgical procedures performed by experienced surgeons using modern equipment and internationally-recognised techniques.",
    image: "/images/imageDoc/operating-room-3.jpg",
  },
  {
    title: "Pediatric Care",
    oromo: "Daa'imman Yaaluu",
    description: "Specialised medical and surgical care designed for infants, children, and adolescents with compassion and clinical precision.",
    image: "/images/imageDoc/injection-room.jpg",
  },
  {
    title: "Maternal Care",
    oromo: "Haadha Yaaluu",
    description: "Obstetric and gynaecological care ensuring the safety and wellbeing of mothers and newborns throughout the journey.",
    image: "/images/imageDoc/inpatient-ward-bed.jpg",
  },
  {
    title: "Diagnostic Imaging",
    oromo: "Sakatta'a Fayyaa",
    description: "In-house X-ray, Mindray DC-40 colour Doppler ultrasound, and digital radiology workstation for fast, accurate diagnosis.",
    image: "/images/imageDoc/ultrasound-room.jpg",
  },
  {
    title: "Emergency Care",
    oromo: "Hatattamaa Yaaluu",
    description: "Our emergency team is on standby around the clock — day or night — ready to respond to any medical or surgical crisis.",
    image: "/images/imageDoc/emergency-room-entrance.jpg",
  },
  {
    title: "Sterilization & Safety",
    oromo: "Qulqullina Eeggannoo",
    description: "Hospital-grade autoclave sterilization and strict WHO infection-control protocols guarantee the highest safety standards.",
    image: "/images/imageDoc/sterilization-autoclave.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-alt py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <RevealOnScroll className="text-center mb-14">
          <div className="red-rule mx-auto mb-5" />
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            Our{" "}
            <span className="gradient-text-red">Medical Services</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From routine diagnostics to complex surgeries, our specialists deliver precise, compassionate care across the full spectrum of medical needs.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ title, oromo, description, image }, i) => (
            <RevealOnScroll key={title} direction="up" delay={i * 70}>
              <div
                className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)]"
                style={{ height: 320 }}
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/92 via-slate-900/55 to-slate-900/15" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-1">{oromo}</p>
                  <h3 className="text-white text-xl font-black mb-2">{title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed line-clamp-2">{description}</p>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white/50 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
