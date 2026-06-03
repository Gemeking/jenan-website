"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

function MedicalCross() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer ring */}
      <div className="absolute w-72 h-72 rounded-full border border-blue-500/20 animate-spin-slow" />
      <div className="absolute w-56 h-56 rounded-full border border-cyan-500/15 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "15s" }} />
      {/* Glowing orb */}
      <div className="absolute w-40 h-40 rounded-full bg-gradient-radial from-blue-600/30 via-blue-900/20 to-transparent blur-xl animate-pulse-slow" />
      {/* Medical cross */}
      <div className="relative w-28 h-28 animate-float">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/40 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 shadow-[0_0_60px_rgba(37,99,235,0.5)]" />
        {/* Cross shape */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-14 h-5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-90" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-14 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full opacity-90" />
          </div>
        </div>
        {/* Shine */}
        <div className="absolute top-2 left-3 w-8 h-1.5 bg-white/20 rounded-full blur-sm" />
      </div>
      {/* Orbiting dots */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-400/60"
          style={{
            transform: `rotate(${deg}deg) translateX(120px)`,
            animation: `spin 20s linear infinite`,
            animationDelay: `${i * -3}s`,
            opacity: 0.4 + (i % 3) * 0.2,
          }}
        />
      ))}
    </div>
  );
}

function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 4 + Math.random() * 6,
    delay: Math.random() * 4,
    opacity: 0.1 + Math.random() * 0.3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle bg-blue-400/40"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
            "--duration": `${p.duration}s`,
            "--delay": `${p.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute inset-0 bg-hero-glow" />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Blue glow blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl" />

      <Particles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left — Text */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/25 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-slate-300">Open 24/7 — Emergency Care Available</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                <span className="text-white">Jenan</span>{" "}
                <br />
                <span className="gradient-text">Surgical</span>
                <br />
                <span className="text-white text-4xl sm:text-5xl lg:text-6xl font-light">Speciality Center</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              Ethiopia's premier surgical center delivering world-class medical excellence. Advanced procedures, compassionate care, and cutting-edge technology — all under one roof in Addis Ababa.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="group flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] hover:-translate-y-0.5"
              >
                Explore Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-7 py-4 glass border border-white/10 hover:border-blue-500/40 text-white font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Book Appointment
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-5 pt-2">
              {[
                { icon: Shield, label: "Certified Excellence" },
                { icon: Clock, label: "24/7 Emergency" },
                { icon: Award, label: "Surgical Experts" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-slate-400">
                  <Icon size={15} className="text-blue-400" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 3D illustration */}
          <div className="relative flex items-center justify-center h-[420px] lg:h-[520px]">
            <MedicalCross />

            {/* Floating stat cards */}
            <div className="absolute top-8 right-0 glass border border-white/10 rounded-2xl px-5 py-4 animate-float" style={{ animationDelay: "0.5s" }}>
              <p className="text-3xl font-bold gradient-text-blue">10+</p>
              <p className="text-xs text-slate-400 mt-0.5">Years of Excellence</p>
            </div>

            <div className="absolute bottom-16 left-0 glass border border-white/10 rounded-2xl px-5 py-4 animate-float-delay">
              <p className="text-3xl font-bold text-green-400">5,000+</p>
              <p className="text-xs text-slate-400 mt-0.5">Patients Treated</p>
            </div>

            <div className="absolute bottom-4 right-8 glass border border-white/10 rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-xs text-slate-300 font-medium">Available Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent pointer-events-none" />
    </section>
  );
}
