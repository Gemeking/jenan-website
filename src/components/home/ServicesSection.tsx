"use client";

import Link from "next/link";
import { Scissors, Baby, Heart, ScanLine, Zap, Microscope, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "General Surgery",
    description: "Advanced surgical procedures performed by our team of expert surgeons using state-of-the-art equipment and techniques.",
    color: "from-blue-500 to-blue-700",
    glow: "rgba(59,130,246,0.2)",
    border: "group-hover:border-blue-500/40",
  },
  {
    icon: Baby,
    title: "Pediatric Care",
    description: "Specialized medical and surgical care designed for infants, children, and adolescents with compassion and expertise.",
    color: "from-cyan-500 to-cyan-700",
    glow: "rgba(6,182,212,0.2)",
    border: "group-hover:border-cyan-500/40",
  },
  {
    icon: Heart,
    title: "Maternal Care",
    description: "Comprehensive obstetric and gynecological care providing safe, high-quality treatment for mothers and newborns.",
    color: "from-pink-500 to-pink-700",
    glow: "rgba(236,72,153,0.2)",
    border: "group-hover:border-pink-500/40",
  },
  {
    icon: ScanLine,
    title: "Diagnostic Imaging",
    description: "Cutting-edge X-ray, ultrasound (Mindray DC-40), and radiology imaging for precise and rapid diagnosis.",
    color: "from-violet-500 to-violet-700",
    glow: "rgba(139,92,246,0.2)",
    border: "group-hover:border-violet-500/40",
  },
  {
    icon: Zap,
    title: "Emergency Care",
    description: "Round-the-clock emergency medical and surgical services. We are always ready — 24 hours, 7 days a week.",
    color: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.2)",
    border: "group-hover:border-amber-500/40",
  },
  {
    icon: Microscope,
    title: "Sterilization & Safety",
    description: "Hospital-grade sterilization protocols with autoclave equipment ensuring maximum safety for every patient.",
    color: "from-green-500 to-emerald-700",
    glow: "rgba(34,197,94,0.2)",
    border: "group-hover:border-green-500/40",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Medical{" "}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From routine diagnostics to complex surgeries, our specialized team delivers precise, compassionate care across a full spectrum of medical services.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, description, color, glow, border }) => (
            <div
              key={title}
              className={`group glass border border-white/7 ${border} rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover cursor-pointer`}
              style={{ "--glow": glow } as React.CSSProperties}
            >
              <div
                className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center bg-gradient-to-br ${color} bg-opacity-20 shadow-lg`}
                style={{ boxShadow: `0 0 20px ${glow}` }}
              >
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              <div className="mt-5 flex items-center gap-1.5 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <ArrowRight size={12} />
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500/40 hover:border-blue-400 text-blue-400 hover:text-white hover:bg-blue-600/20 font-semibold rounded-2xl transition-all duration-300"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
