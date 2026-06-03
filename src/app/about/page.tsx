import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Heart, Target, Eye, Users, Award, Shield, ArrowRight } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Jenan Surgical Speciality Center",
  description: "Learn about Jenan Surgical Speciality Center — our history, mission, vision, and the expert team dedicated to your health in Ethiopia.",
};

const milestones = [
  { year: "2014", event: "Jenan Medical Center founded in Burayu, Addis Ababa" },
  { year: "2016", event: "Expanded to full surgical suite with Operating Theatre I and II" },
  { year: "2018", event: "Introduced advanced diagnostic imaging — X-ray and ultrasound" },
  { year: "2020", event: "Launched full 24/7 emergency services" },
  { year: "2022", event: "Upgraded to Mindray DC-40 colour Doppler ultrasound system" },
  { year: "2024", event: "Relocated to Shaka Mall, Ashewa Meda for expanded capacity" },
];

const coreValues = [
  { icon: Heart, label: "Compassion", oromo: "Gaddoo", desc: "Treating every patient with empathy, dignity, and warmth." },
  { icon: Shield, label: "Safety", oromo: "Nageenya", desc: "Zero compromise on sterilization and surgical protocols." },
  { icon: Award, label: "Excellence", oromo: "Qulqullina", desc: "World-class standards in every procedure performed." },
  { icon: Users, label: "Teamwork", oromo: "Hojii Gamtaa", desc: "Multidisciplinary collaboration for better outcomes." },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ── Page Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image src="/images/building-exterior.jpg" alt="Jenan Surgical Center Building" fill className="object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-5">
            Ethiopia&apos;s Premier<br />
            <span className="text-brand-red-mid">Surgical Center</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl">
            Jenan Surgical Speciality Center was founded with a singular commitment — to bring world-class surgical excellence to the heart of Ethiopia.
          </p>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-20 section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <RevealOnScroll direction="left">
              <div className="relative rounded-3xl overflow-hidden shadow-card-hover" style={{ height: 480 }}>
                <Image src="/images/facilities/operating-room-1-wide.jpg" alt="Operating Room" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="bg-white rounded-2xl px-5 py-4 shadow-lg inline-block">
                    <p className="text-2xl font-black gradient-text-red">10+ Waggaa</p>
                    <p className="text-slate-500 text-xs">of Surgical Excellence</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div className="red-rule mb-5" />
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
                A Decade of <span className="gradient-text-red">Excellence</span>
              </h2>
              <div className="space-y-4 text-slate-500 text-base leading-relaxed">
                <p>Founded in Burayu, Addis Ababa, Jenan Medical Center began as a vision: to create a place where every Ethiopian could access the same level of surgical care found in the world&apos;s best hospitals.</p>
                <p>Waggaa kurnan darbaniif, wiirtuun keenya xiqqaa ta&apos;e tokko irraa guddatee wiirtuu baqaqsanii yaaluu guutuu ta&apos;e — kutaa yaalaa lama, kutaa fayyaa argachuu, meeshaalee diagnostics ammayyaa, fi tajaajila hatattamaa sa&apos;aa 24 qabu.</p>
                <p>Today, Jenan is proudly located at Shaka Mall, Ashewa Meda — more accessible and more capable than ever before.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[{ n: "5,000+", l: "Patients Treated" }, { n: "1,200+", l: "Surgeries" }, { n: "2", l: "Operating Theatres" }, { n: "24/7", l: "Emergency" }].map(({ n, l }) => (
                  <div key={l} className="card p-4 text-center">
                    <p className="text-2xl font-black gradient-text-red">{n}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision ── */}
      <section className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-3">Mission &amp; <span className="gradient-text-red">Vision</span></h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RevealOnScroll direction="left">
              <div className="card border-l-4 border-l-brand-red p-8">
                <div className="w-12 h-12 rounded-xl bg-brand-red-light flex items-center justify-center mb-5">
                  <Target size={22} className="text-brand-red" />
                </div>
                <p className="text-brand-red text-xs font-black tracking-widest uppercase mb-1">Kaayyoo Keenya</p>
                <h3 className="text-xl font-black text-slate-900 mb-3">Our Mission</h3>
                <p className="text-slate-500 leading-relaxed">To deliver world-class surgical and medical care to every patient in Ethiopia, regardless of background, by combining advanced technology with compassionate, personalised attention.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="right">
              <div className="card border-l-4 border-l-blue-600 p-8">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <Eye size={22} className="text-blue-600" />
                </div>
                <p className="text-blue-600 text-xs font-black tracking-widest uppercase mb-1">Hawwii Keenya</p>
                <h3 className="text-xl font-black text-slate-900 mb-3">Our Vision</h3>
                <p className="text-slate-500 leading-relaxed">To be the most trusted, technologically advanced, and patient-centred surgical speciality center in East Africa — a beacon of medical excellence that sets the standard for the continent.</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── Core values ── */}
      <section className="py-20 section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-3">Core <span className="gradient-text-red">Values</span></h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">Gatii keenya — These principles guide everything we do.</p>
          </RevealOnScroll>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {coreValues.map(({ icon: Icon, label, oromo, desc }, i) => (
              <RevealOnScroll key={label} direction="up" delay={i * 80}>
                <div className="card p-6 text-center hover:border-red-200">
                  <div className="w-12 h-12 rounded-xl bg-brand-red-light border border-red-200 flex items-center justify-center mx-auto mb-4">
                    <Icon size={20} className="text-brand-red" />
                  </div>
                  <p className="text-brand-red text-xs font-bold italic mb-0.5">{oromo}</p>
                  <p className="text-slate-900 font-black mb-1">{label}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-3">Our <span className="gradient-text-red">Journey</span></h2>
          </RevealOnScroll>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-red via-red-300 to-transparent" />
            <div className="space-y-7">
              {milestones.map(({ year, event }, i) => (
                <RevealOnScroll key={i} direction="left" delay={i * 60}>
                  <div className="flex gap-6 items-start">
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-brand-red text-white font-black text-xs flex items-center justify-center shrink-0 shadow-md">
                      {year}
                    </div>
                    <div className="flex-1 card p-5 mt-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-brand-red mt-0.5 shrink-0" />
                        <p className="text-slate-700 text-sm leading-relaxed">{event}</p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team photo ── */}
      <section className="py-20 section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-3">Our <span className="gradient-text-red">Team</span></h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">Experienced professionals united by a passion for patient care.</p>
          </RevealOnScroll>
          <RevealOnScroll direction="scale">
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover" style={{ height: 440 }}>
              <Image src="/images/team/medical-team.jpg" alt="Jenan Medical Team" fill className="object-cover" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <p className="text-white font-black text-xl">Our Team in Action</p>
                <p className="text-slate-300 text-sm mt-1">Committed to surgical excellence every single day — Guyyaa guyyaadhaan qulqullina baqaqsaaniif carraaqna.</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 section-alt">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h3 className="text-3xl font-black text-slate-900 mb-4">Ready to Trust Us With Your Health?</h3>
            <p className="text-slate-500 mb-8">Nu quunnamaa — contact our team today for a consultation.</p>
            <Link href="/contact" className="btn-primary inline-flex">
              Get In Touch
              <ArrowRight size={17} />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
