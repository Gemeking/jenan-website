"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Shield, Clock, ChevronDown } from "lucide-react";
import MedicalCross3D from "@/components/ui/MedicalCross3D";

const slides = [
  { src: "/images/building-exterior.jpg", label: "Jenan Surgical Center" },
  { src: "/images/facilities/operating-room-1-wide.jpg", label: "Advanced Operating Theatres" },
  { src: "/images/patient-areas/indoor-reception.jpg", label: "24-Hour Emergency Care" },
  { src: "/images/facilities/hospital-corridor.jpg", label: "Modern Facilities" },
  { src: "/images/equipment/ultrasound-machine.jpg", label: "Precision Diagnostics" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background slideshow ── */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="hero-image-slide absolute inset-0"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.label}
              fill
              priority={i === 0}
              className={`object-cover ${i === current ? "animate-ken-burns" : ""}`}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Strong dark overlay — heavier on mobile for text clarity */}
        <div className="absolute inset-0 bg-black/65 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/80 sm:via-black/55 sm:to-black/20" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">

          {/* LEFT — text */}
          <div className="space-y-5 sm:space-y-7">

            {/* Live badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 bg-black/30 backdrop-blur-sm text-sm text-white font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
              <span className="hero-sub-shadow">Banaa Sa&apos;aa 24 — Emergency Available</span>
            </div>

            {/* Oromo subtitle */}
            <p className="text-brand-red-mid text-sm font-bold tracking-[0.2em] uppercase hero-sub-shadow">
              Yaalii Baqaqsanii Yaaluu Ol&apos;aanaa Jennaan
            </p>

            {/* Main headline */}
            <div>
              <h1 className="hero-text-shadow text-5xl sm:text-6xl xl:text-7xl font-black text-white leading-[1.02] tracking-tight">
                Jenan
                <br />
                <span className="text-brand-red-mid">Surgical</span>
                <br />
                <span className="text-3xl sm:text-4xl xl:text-5xl font-light tracking-wide text-white/90">
                  Speciality Center
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="hero-sub-shadow text-white/85 text-base sm:text-lg leading-relaxed max-w-lg">
              Ethiopia&apos;s premier surgical speciality center. Advanced procedures, compassionate care, and world-class facilities — every hour of every day.
            </p>

            {/* Oromo awareness line */}
            <p className="text-white/55 text-sm italic border-l-2 border-brand-red pl-3 leading-relaxed hero-sub-shadow">
              &ldquo;Dhibee qabdan otoo hin turin gara mana yaalaa keenya dhufaa — tajaajila barbaachisaa argatta.&rdquo;
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/services"
                className="group flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 bg-brand-red hover:bg-brand-red-dark text-white font-black text-sm rounded-xl transition-all duration-200 shadow-lg">
                Explore Services
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact"
                className="flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white font-black text-sm rounded-xl transition-all duration-200">
                <Phone size={15} />
                Contact Us
              </Link>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-4 sm:gap-5 pt-1">
              {[
                { icon: Shield, text: "Certified Excellence" },
                { icon: Clock, text: "24 / 7 Emergency" },
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="flex items-center gap-2 text-sm text-white/70 hero-sub-shadow">
                  <Icon size={13} className="text-brand-red-mid" />
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — 3D cross (large screens only) */}
          <div className="hidden lg:flex items-center justify-center relative h-[500px]">
            <div className="absolute w-72 h-72 rounded-full bg-brand-red/12 blur-3xl" />
            <MedicalCross3D className="w-full h-full" />

            <div className="absolute top-12 right-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-4 animate-float">
              <p className="text-2xl font-black text-white">5,000+</p>
              <p className="text-xs text-white/60 mt-0.5">Patients Treated</p>
            </div>
            <div className="absolute bottom-16 left-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-4 animate-float-slow">
              <p className="text-2xl font-black text-white">10+</p>
              <p className="text-xs text-white/60 mt-0.5">Years of Excellence</p>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex items-center gap-3 mt-4">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? "w-8 bg-brand-red" : "w-2 bg-white/30 hover:bg-white/55"
              }`}
              aria-label={s.label}
            />
          ))}
          <span className="ml-1 text-white/35 text-xs hidden sm:inline">{slides[current].label}</span>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/35 animate-bounce">
        <ChevronDown size={22} />
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
