import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Jenan Surgical Speciality Center",
  description: "Explore our full range of surgical, diagnostic, and medical services at Jenan Surgical Speciality Center, Ethiopia.",
};

const mainServices = [
  {
    title: "General Surgery",
    oromo: "Baqaqsanii Yaaluu",
    borderColor: "#DC2626",
    image: "/images/facilities/operating-room-1-wide.jpg",
    description: "Our experienced surgical team performs a comprehensive range of general surgical procedures using the latest minimally invasive and open surgical techniques.",
    features: ["Appendectomy & hernia repair", "Cholecystectomy (gallbladder removal)", "Abdominal surgeries", "Wound debridement & closure", "Laparoscopic procedures", "Soft tissue tumour excision"],
  },
  {
    title: "Pediatric Care",
    oromo: "Daa'imman Yaaluu",
    borderColor: "#2563EB",
    image: "/images/facilities/operating-room-2-entrance.jpg",
    description: "Specialised medical and surgical care tailored to the unique needs of infants, children, and adolescents, delivered with extra sensitivity and expertise.",
    features: ["Paediatric general surgery", "Neonatal care support", "Paediatric medical consultations", "Minor paediatric procedures", "Child-friendly recovery environment", "Family-centred care approach"],
  },
  {
    title: "Maternal & Obstetric Care",
    oromo: "Haadha fi Daa'ima Yaaluu",
    borderColor: "#E11D48",
    image: "/images/facilities/recovery-room.jpg",
    description: "Comprehensive care for mothers throughout pregnancy, childbirth, and the postnatal period with a focus on the safety of both mother and child.",
    features: ["Caesarean section (C-section)", "Normal delivery support", "Gynaecological surgeries", "Ectopic pregnancy management", "Postnatal recovery care", "Family planning consultations"],
  },
  {
    title: "Diagnostic Imaging",
    oromo: "Sakatta'a Fayyaa",
    borderColor: "#7C3AED",
    image: "/images/equipment/ultrasound-machine.jpg",
    description: "Advanced in-house imaging capabilities enabling rapid, accurate diagnosis to guide treatment decisions and surgical planning.",
    features: ["Mindray DC-40 colour Doppler ultrasound", "Abdominal & pelvic sonography", "Obstetric ultrasound", "Full digital X-ray suite", "Chest & skeletal radiography", "Digital radiology workstation"],
  },
  {
    title: "24/7 Emergency Services",
    oromo: "Tajaajila Hatattamaa Sa'aa 24",
    borderColor: "#D97706",
    image: "/images/patient-areas/indoor-reception.jpg",
    description: "Our dedicated emergency team is always on standby to triage and treat medical and surgical emergencies promptly, any hour of the day or night.",
    features: ["Immediate triage & stabilization", "Emergency surgical procedures", "Trauma management", "Resuscitation services", "24-hour staffed reception", "Rapid diagnostic access"],
  },
  {
    title: "Sterilization & Safety",
    oromo: "Qulqullina fi Nageenya",
    borderColor: "#059669",
    image: "/images/facilities/sterilization-room.jpg",
    description: "Our rigorous sterilization department ensures every instrument used in procedures meets the highest international infection-control standards.",
    features: ["Large-capacity autoclave sterilization", "WHO infection control protocols", "Single-use instrument policies", "Sterile environment maintenance", "Surgical safety checklist compliance", "Regular equipment certification"],
  },
];

const additionalServices = [
  { name: "Post-Operative Monitoring", oromo: "Itti aanee hordofuu" },
  { name: "Pre-Operative Consultations", oromo: "Dursa mari'achuu" },
  { name: "Laboratory Testing", oromo: "Qorannoo Lab" },
  { name: "Inpatient Recovery Care", oromo: "Bakka ciisichaa fayyuu" },
  { name: "Wound Care", oromo: "Madaa Qorachuu" },
  { name: "IV Therapy & Infusions", oromo: "IV Yaaluu" },
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ── Page Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image src="/images/facilities/operating-room-1-wide.jpg" alt="Operating Theatre" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            Comprehensive<br /><span className="text-brand-red-mid">Medical Excellence</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
            From advanced surgical procedures to precise diagnostics and 24/7 emergency care, Jenan offers a complete spectrum of medical services under one roof.
          </p>
        </div>
      </section>

      {/* ── Main services ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {mainServices.map(({ title, oromo, borderColor, image, description, features }, idx) => (
            <RevealOnScroll key={title} direction={idx % 2 === 0 ? "left" : "right"}>
              <div className="card overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2`}>
                  <div className={`relative ${idx % 2 === 1 ? "lg:order-2" : ""}`} style={{ minHeight: 280 }}>
                    <Image src={image} alt={title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-50/10" />
                  </div>
                  <div className={`p-8 lg:p-10 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="text-xs font-black tracking-widest uppercase mb-1 italic" style={{ color: borderColor }}>{oromo}</p>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">{title}</h2>
                    <p className="text-slate-500 leading-relaxed mb-6">{description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 size={13} className="text-brand-red shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ── Additional services ── */}
      <section className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Additional <span className="gradient-text-red">Services</span></h2>
            <p className="text-slate-500">Supporting your care journey at every step.</p>
          </RevealOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalServices.map(({ name, oromo }, i) => (
              <RevealOnScroll key={name} direction="up" delay={i * 60}>
                <div className="card p-5 text-center">
                  <div className="h-0.5 w-8 bg-slate-200 rounded mx-auto mb-3" />
                  <p className="text-slate-700 text-xs font-black leading-tight">{name}</p>
                  <p className="text-slate-400 text-xs italic mt-0.5">{oromo}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h3 className="text-3xl font-black text-slate-900 mb-3">Have Questions About Our Services?</h3>
            <p className="text-brand-red italic text-base mb-2 font-semibold">Gaafii qabdan nu gaafadhaa — Deebii sirraa siif kenninaa.</p>
            <p className="text-slate-500 mb-8 leading-relaxed">Ask us anything — our medical team is available 24/7 to guide you to the right service.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex">Contact Us <ArrowRight size={17} /></Link>
              <a href="tel:+251911728000" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-slate-200 text-slate-700 hover:border-brand-red hover:text-brand-red font-bold text-sm rounded-xl transition-all">
                Call 0911 72 80 00
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
