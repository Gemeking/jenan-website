import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Heart, Target, Eye, Users, Award, Shield, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Jenan Surgical Speciality Center",
  description: "Learn about Jenan Surgical Speciality Center — our history, mission, vision, and the expert team dedicated to your health in Ethiopia.",
};

const milestones = [
  { year: "2014", event: "Jenan Medical Center founded in Burayu, Addis Ababa" },
  { year: "2016", event: "Expanded to full surgical suite with OR:1 and OR:2" },
  { year: "2018", event: "Introduced advanced diagnostic imaging (X-ray & Ultrasound)" },
  { year: "2020", event: "Launched 24/7 emergency services" },
  { year: "2022", event: "Upgraded to Mindray DC-40 color Doppler ultrasound system" },
  { year: "2024", event: "Relocated to Shaka Mall, Ashewa Meda for expanded capacity" },
];

const team = [
  { role: "Chief Surgeon", name: "Senior Surgical Specialist", spec: "General & Laparoscopic Surgery" },
  { role: "Anaesthesiologist", name: "Anaesthesia Lead", spec: "General & Regional Anaesthesia" },
  { role: "Paediatrician", name: "Paediatric Specialist", spec: "Neonatal & Paediatric Care" },
  { role: "Gynaecologist", name: "Maternal Care Lead", spec: "Obstetrics & Gynaecology" },
  { role: "Radiologist", name: "Diagnostic Imaging Lead", spec: "X-Ray & Ultrasound Imaging" },
  { role: "Head Nurse", name: "Senior Scrub Nurse", spec: "Surgical & Recovery Nursing" },
];

const coreValues = [
  { icon: Heart, label: "Compassion", desc: "Treating every patient with empathy and dignity." },
  { icon: Shield, label: "Safety", desc: "Zero compromise on sterilization and surgical protocols." },
  { icon: Award, label: "Excellence", desc: "World-class standards in every procedure." },
  { icon: Users, label: "Teamwork", desc: "Multidisciplinary collaboration for better outcomes." },
];

export default function AboutPage() {
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
              About Us
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Ethiopia&apos;s Premier{" "}
              <span className="gradient-text">Surgical Center</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              Jenan Surgical Speciality Center was founded with a singular commitment — to bring world-class surgical excellence to the heart of Ethiopia. From our very first patient to over 5,000 treated, we have never wavered from that promise.
            </p>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative rounded-3xl overflow-hidden" style={{ height: 480 }}>
              <Image
                src="/images/facilities/operating-room-1-wide.jpg"
                alt="Jenan Operating Room"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="glass border border-white/10 rounded-2xl px-5 py-4 inline-block">
                  <p className="text-2xl font-bold gradient-text-blue">10+ Years</p>
                  <p className="text-slate-400 text-xs">of Surgical Excellence</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-slate-400 text-base leading-relaxed">
                <p>
                  Founded in Burayu, Addis Ababa, Jenan Medical Center began as a vision: to create a place where every Ethiopian could access the same level of surgical care found in the world&apos;s best hospitals.
                </p>
                <p>
                  Over more than a decade, we have grown from a small clinic into a fully equipped surgical speciality center complete with two modern operating theatres, a dedicated recovery ward, advanced diagnostic imaging suites, and a 24-hour emergency department.
                </p>
                <p>
                  Today, Jenan is proudly located at Shaka Mall, Ashewa Meda — more accessible than ever, and more capable than ever before.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { n: "5,000+", l: "Patients Treated" },
                  { n: "1,200+", l: "Surgeries Performed" },
                  { n: "2", l: "Operating Theatres" },
                  { n: "24/7", l: "Emergency Available" },
                ].map(({ n, l }) => (
                  <div key={l} className="glass border border-white/8 rounded-2xl p-4 text-center">
                    <p className="text-2xl font-bold gradient-text-blue">{n}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission · Vision */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-3">
              Mission &amp; <span className="gradient-text">Vision</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass border border-blue-500/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl" />
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-5">
                <Target size={22} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                To deliver world-class surgical and medical care to every patient in Ethiopia, regardless of background, by combining advanced technology with compassionate, personalised attention.
              </p>
            </div>
            <div className="glass border border-cyan-500/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-600/10 rounded-full blur-2xl" />
              <div className="w-12 h-12 rounded-xl bg-cyan-600/20 flex items-center justify-center mb-5">
                <Eye size={22} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed">
                To be the most trusted, technologically advanced, and patient-centered surgical speciality center in East Africa — a beacon of medical excellence that sets the standard for the continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-3">
              Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              These principles guide everything we do at Jenan.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {coreValues.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="glass border border-white/7 hover:border-blue-500/30 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <p className="text-white font-semibold mb-1">{label}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-3">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-blue-500/30 to-transparent" />
            <div className="space-y-8">
              {milestones.map(({ year, event }, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="relative z-10 w-16 h-16 rounded-2xl glass border border-blue-500/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                    <span className="text-blue-400 font-bold text-xs">{year}</span>
                  </div>
                  <div className="flex-1 glass border border-white/7 rounded-2xl p-5 mt-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-blue-400 mt-0.5 shrink-0" />
                      <p className="text-slate-300 text-sm leading-relaxed">{event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-3">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Experienced professionals united by a passion for patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {team.map(({ role, name, spec }) => (
              <div key={role} className="glass border border-white/7 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-600/20 border border-blue-500/20 flex items-center justify-center mb-4">
                  <Users size={24} className="text-blue-400" />
                </div>
                <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-1">{role}</p>
                <p className="text-white font-semibold mb-1">{name}</p>
                <p className="text-slate-400 text-xs">{spec}</p>
              </div>
            ))}
          </div>

          {/* Team photo */}
          <div className="relative rounded-3xl overflow-hidden" style={{ height: 400 }}>
            <Image
              src="/images/team/medical-team.jpg"
              alt="Jenan Medical Team in OR"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <p className="text-white font-bold text-xl">Our Team in Action</p>
              <p className="text-slate-300 text-sm mt-1">Committed to surgical excellence every single day</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Trust Us With Your Health?
          </h3>
          <p className="text-slate-400 mb-8">Contact us today to schedule a consultation or learn more about our services.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.4)]"
          >
            Get In Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
