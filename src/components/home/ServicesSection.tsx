"use client";

import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { Scissors, Baby, Heart, ScanLine, Zap, Microscope, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "General Surgery",
    oromo: "Baqaqsanii Yaaluu",
    description: "Advanced surgical procedures by expert surgeons using state-of-the-art equipment and internationally-recognised techniques.",
    accent: "border-t-brand-red",
    iconBg: "bg-brand-red-light",
    iconColor: "text-brand-red",
  },
  {
    icon: Baby,
    title: "Pediatric Care",
    oromo: "Daa'imman Yaaluu",
    description: "Specialised medical and surgical care designed for infants, children, and adolescents with compassion and clinical precision.",
    accent: "border-t-blue-500",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Heart,
    title: "Maternal Care",
    oromo: "Haadha Yaaluu",
    description: "Comprehensive obstetric and gynaecological care ensuring the safety and wellbeing of mothers and newborns throughout the journey.",
    accent: "border-t-rose-500",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    icon: ScanLine,
    title: "Diagnostic Imaging",
    oromo: "Sakatta'a Fayyaa",
    description: "In-house X-ray, Mindray DC-40 colour Doppler ultrasound, and digital radiology workstation for fast, accurate diagnosis.",
    accent: "border-t-violet-500",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Zap,
    title: "Emergency Care",
    oromo: "Hatattamaa Yaaluu",
    description: "Our emergency team is on standby around the clock — day or night — ready to respond to any medical or surgical crisis.",
    accent: "border-t-amber-500",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Microscope,
    title: "Sterilization & Safety",
    oromo: "Qulqullina Eeggannoo",
    description: "Hospital-grade autoclave sterilization and strict WHO infection-control protocols guarantee the highest safety standards.",
    accent: "border-t-emerald-500",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
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
          {services.map(({ icon: Icon, title, oromo, description, accent, iconBg, iconColor }, i) => (
            <RevealOnScroll key={title} direction="up" delay={i * 70}>
              <div className={`card border-t-4 ${accent} p-7 h-full`}>
                <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-5`}>
                  <Icon size={22} className={iconColor} />
                </div>
                <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-1">{oromo}</p>
                <h3 className="text-lg font-black text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-brand-red opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight size={12} />
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
