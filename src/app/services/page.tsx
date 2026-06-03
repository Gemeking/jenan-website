import Image from "next/image";
import Link from "next/link";
import {
  Scalpel, Baby, Heart, ScanLine, Zap, Microscope,
  Activity, Stethoscope, TestTube, BedDouble, ArrowRight, CheckCircle2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Jenan Surgical Speciality Center",
  description: "Explore our full range of surgical, diagnostic, and medical services at Jenan Surgical Speciality Center in Ethiopia.",
};

const mainServices = [
  {
    icon: Scalpel,
    title: "General Surgery",
    color: "from-blue-500 to-blue-700",
    glow: "rgba(59,130,246,0.25)",
    border: "border-blue-500/25 hover:border-blue-400/50",
    image: "/images/facilities/operating-room-1-wide.jpg",
    description: "Our experienced surgical team performs a comprehensive range of general surgical procedures using the latest minimally invasive and open surgical techniques.",
    features: [
      "Appendectomy & hernia repair",
      "Cholecystectomy (gallbladder removal)",
      "Abdominal surgeries",
      "Wound debridement & closure",
      "Laparoscopic procedures",
      "Soft tissue tumor excision",
    ],
  },
  {
    icon: Baby,
    title: "Pediatric Care",
    color: "from-cyan-500 to-cyan-700",
    glow: "rgba(6,182,212,0.25)",
    border: "border-cyan-500/25 hover:border-cyan-400/50",
    image: "/images/facilities/operating-room-2-entrance.jpg",
    description: "Specialised medical and surgical care tailored to the unique needs of infants, children, and adolescents, delivered with extra sensitivity and expertise.",
    features: [
      "Paediatric general surgery",
      "Neonatal care support",
      "Paediatric medical consultations",
      "Minor paediatric procedures",
      "Child-friendly recovery environment",
      "Family-centred care approach",
    ],
  },
  {
    icon: Heart,
    title: "Maternal & Obstetric Care",
    color: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.25)",
    border: "border-pink-500/25 hover:border-pink-400/50",
    image: "/images/facilities/recovery-room.jpg",
    description: "Comprehensive care for mothers throughout pregnancy, childbirth, and the postnatal period with a focus on the safety of both mother and child.",
    features: [
      "Caesarean section (C-section)",
      "Normal delivery support",
      "Gynaecological surgeries",
      "Ectopic pregnancy management",
      "Postnatal recovery care",
      "Family planning consultations",
    ],
  },
  {
    icon: ScanLine,
    title: "Diagnostic Imaging",
    color: "from-violet-500 to-violet-700",
    glow: "rgba(139,92,246,0.25)",
    border: "border-violet-500/25 hover:border-violet-400/50",
    image: "/images/equipment/ultrasound-machine.jpg",
    description: "Advanced in-house imaging capabilities enabling rapid, accurate diagnosis to guide treatment decisions and surgical planning.",
    features: [
      "Mindray DC-40 colour Doppler ultrasound",
      "Abdominal & pelvic sonography",
      "Obstetric ultrasound",
      "Full digital X-ray suite",
      "Chest & skeletal radiography",
      "Digital radiology workstation",
    ],
  },
  {
    icon: Zap,
    title: "24/7 Emergency Services",
    color: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.25)",
    border: "border-amber-500/25 hover:border-amber-400/50",
    image: "/images/patient-areas/indoor-reception.jpg",
    description: "Our dedicated emergency team is always on standby to triage and treat medical and surgical emergencies promptly, any hour of the day or night.",
    features: [
      "Immediate triage & stabilization",
      "Emergency surgical procedures",
      "Trauma management",
      "Resuscitation services",
      "24-hour staffed reception",
      "Rapid diagnostic access",
    ],
  },
  {
    icon: Microscope,
    title: "Sterilization & Safety",
    color: "from-green-500 to-emerald-700",
    glow: "rgba(34,197,94,0.25)",
    border: "border-green-500/25 hover:border-green-400/50",
    image: "/images/facilities/sterilization-room.jpg",
    description: "Our rigorous sterilization department ensures every instrument used in procedures meets the highest international infection-control standards.",
    features: [
      "Large-capacity autoclave sterilization",
      "WHO infection control protocols",
      "Single-use instrument policies",
      "Sterile environment maintenance",
      "Surgical safety checklist compliance",
      "Regular equipment certification",
    ],
  },
];

const additionalServices = [
  { icon: Activity, name: "Post-Operative Monitoring" },
  { icon: Stethoscope, name: "Pre-Operative Consultations" },
  { icon: TestTube, name: "Laboratory Testing" },
  { icon: BedDouble, name: "Inpatient Recovery Care" },
  { icon: Heart, name: "Wound Care Management" },
  { icon: Zap, name: "IV Therapy & Infusions" },
];

export default function ServicesPage() {
  return (
    <div className="bg-navy-900 min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Our Services
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Comprehensive{" "}
              <span className="gradient-text">Medical Excellence</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              From advanced surgical procedures to precise diagnostics and 24/7 emergency care, Jenan offers a complete spectrum of medical services under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Main services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {mainServices.map(({ icon: Icon, title, color, glow, border, image, description, features }, idx) => (
            <div
              key={title}
              className={`glass border ${border} rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-card-hover`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Image */}
                <div className={`relative ${idx % 2 === 1 ? "lg:order-2" : ""}`} style={{ minHeight: 300 }}>
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px) 100vw, 50vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-${idx % 2 === 1 ? "l" : "r"} from-transparent to-navy-900/60`} />
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-10 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div
                    className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center bg-gradient-to-br ${color}`}
                    style={{ boxShadow: `0 0 20px ${glow}` }}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{title}</h2>
                  <p className="text-slate-400 leading-relaxed mb-6">{description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional services */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">
              Additional <span className="gradient-text">Services</span>
            </h2>
            <p className="text-slate-400">Supporting your care journey every step of the way.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalServices.map(({ icon: Icon, name }) => (
              <div key={name} className="glass border border-white/7 hover:border-blue-500/30 rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-blue-400" />
                </div>
                <p className="text-slate-300 text-xs font-medium leading-tight">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Have Questions About Our Services?
          </h3>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Our medical team is available 24/7 to answer any questions, guide you to the right service, or schedule a consultation at your convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+251911728000"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 glass border border-white/15 hover:border-blue-400/50 text-white font-semibold rounded-2xl transition-all duration-300"
            >
              Call 0911 72 80 00
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
