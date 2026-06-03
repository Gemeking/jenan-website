"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowRight, Phone, Shield, Clock, ChevronDown } from "lucide-react";

const MedicalCross3D = dynamic(
  () => import("@/components/ui/MedicalCross3D"),
  { ssr: false, loading: () => <div className="w-full h-full" /> }
);

const slides = [
  {
    src: "/images/team/medical-team.jpg",
    label: "Surgical Excellence",
  },
  {
    src: "/images/facilities/operating-room-1-wide.jpg",
    label: "Advanced Operating Theatres",
  },
  {
    src: "/images/patient-areas/indoor-reception.jpg",
    label: "24-Hour Emergency Care",
  },
  {
    src: "/images/facilities/hospital-corridor.jpg",
    label: "Modern Facilities",
  },
  {
    src: "/images/equipment/ultrasound-machine.jpg",
    label: "Precision Diagnostics",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setCurrent((c) => (c + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (i: number) => {
    if (i === current) return;
    setPrev(current);
    setCurrent(i);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── Background slideshow ── */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="hero-image-slide"
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

        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[82vh]">

          {/* LEFT — text */}
          <div className="space-y-7">
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/8 backdrop-blur-sm text-sm text-white/90">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Banaa Sa&apos;aa 24 — Tajaajila Hatattamaa Jira
            </div>

            {/* Oromo name */}
            <p className="text-brand-red-mid text-sm font-bold tracking-[0.22em] uppercase">
              Yaalii Baqaqsanii Yaaluu Ol&apos;aanaa Jennaan
            </p>

            {/* Main headline */}
            <div>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black text-white leading-[1.02] tracking-tight">
                Jenan
                <br />
                <span className="text-brand-red-mid">Surgical</span>
                <br />
                <span className="text-3xl sm:text-4xl xl:text-5xl font-light tracking-wide">
                  Speciality Center
                </span>
              </h1>
            </div>

            {/* Sub headline */}
            <p className="text-white/75 text-lg leading-relaxed max-w-lg">
              Ethiopia&apos;s premier surgical speciality center. Advanced procedures, compassionate care, and world-class facilities — available to you every hour of every day.
            </p>

            {/* Oromo sub-message */}
            <p className="text-white/50 text-sm italic border-l-2 border-brand-red pl-3 leading-relaxed">
              &ldquo;Dhibee qabdan otoo hin turin gara mana yaalaa keenya dhufaa — tajaajila guutuu argattan.&rdquo;
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href="/services" className="btn-primary">
                Explore Services
                <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className="btn-outline">
                <Phone size={17} />
                Contact Us
              </Link>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-5 pt-1">
              {[
                { icon: Shield, text: "Certified Excellence" },
                { icon: Clock, text: "24 / 7 Emergency" },
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="flex items-center gap-2 text-sm text-white/70">
                  <Icon size={14} className="text-brand-red-mid" />
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — 3D cross */}
          <div className="hidden lg:flex items-center justify-center relative h-[500px]">
            {/* Glow behind cross */}
            <div className="absolute w-72 h-72 rounded-full bg-brand-red/15 blur-3xl" />
            <MedicalCross3D className="w-full h-full" />

            {/* Floating stat card — top right */}
            <div className="absolute top-12 right-0 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-4 animate-float">
              <p className="text-2xl font-black text-white">5,000+</p>
              <p className="text-xs text-white/60 mt-0.5">Patients Treated</p>
            </div>

            {/* Floating stat card — bottom left */}
            <div
              className="absolute bottom-16 left-0 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-4 animate-float-slow"
            >
              <p className="text-2xl font-black text-white">10+</p>
              <p className="text-xs text-white/60 mt-0.5">Years of Excellence</p>
            </div>
          </div>
        </div>

        {/* ── Slide indicator ── */}
        <div className="flex items-center gap-3 mt-4">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? "w-10 bg-brand-red" : "w-2 bg-white/35 hover:bg-white/60"
              }`}
              aria-label={s.label}
            />
          ))}
          <span className="ml-2 text-white/40 text-xs">{slides[current].label}</span>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-bounce">
        <ChevronDown size={22} />
      </div>

      {/* Bottom fade into white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
