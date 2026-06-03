import { Phone, MapPin, Clock, Mail } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ContactForm from "@/components/ui/ContactForm";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Jenan Surgical Speciality Center",
  description: "Contact Jenan Surgical Speciality Center — 24/7 emergency line, appointment booking, and location in Ashewa Meda, Burayu, Ethiopia.",
};

const contactInfo = [
  { icon: Phone, label: "Bilbila", en: "Phone", values: ["0911 72 80 00", "09 28 81 81 00"], action: "tel:+251911728000", iconBg: "bg-brand-red-light border-red-200", iconColor: "text-brand-red" },
  { icon: MapPin, label: "Bakka", en: "Location", values: ["Shaka Mall, Ashewa Meda", "Sheger Maka Nono Sub City, Burayu"], action: null, iconBg: "bg-blue-50 border-blue-200", iconColor: "text-blue-600" },
  { icon: Clock, label: "Sa'aa Hojii", en: "Hours", values: ["Banaa Sa'aa 24", "Guyyaa 7 / Torban 7"], action: null, iconBg: "bg-emerald-50 border-emerald-200", iconColor: "text-emerald-600" },
  { icon: Mail, label: "Email", en: "Email", values: ["info@jenansurgical.com"], action: "mailto:info@jenansurgical.com", iconBg: "bg-amber-50 border-amber-200", iconColor: "text-amber-600" },
];

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ── Page Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image src="/images/patient-areas/indoor-reception.jpg" alt="Reception" fill className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-5">
            We&apos;re Here to <span className="text-brand-red-mid">Help</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Yeroo hundaa isinif jirra — our team is available 24 hours a day, 7 days a week. Reach out for an appointment, question, or emergency.
          </p>
        </div>
      </section>

      {/* ── Contact info cards ── */}
      <section className="py-12 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map(({ icon: Icon, label, en, values, action, iconBg, iconColor }, i) => (
              <RevealOnScroll key={en} direction="up" delay={i * 70}>
                <div className="card p-6 hover:border-red-200">
                  <div className={`w-11 h-11 rounded-xl border ${iconBg} flex items-center justify-center mb-4`}>
                    <Icon size={20} className={iconColor} />
                  </div>
                  <p className="text-slate-400 text-xs font-black tracking-widest uppercase mb-0.5">{en}</p>
                  <p className="text-slate-500 text-xs italic mb-2">{label}</p>
                  {values.map((v, i2) =>
                    action && i2 === 0 ? (
                      <a key={v} href={action} className={`block text-sm font-black ${iconColor} hover:underline`}>{v}</a>
                    ) : (
                      <p key={v} className="text-slate-700 text-sm font-medium">{v}</p>
                    )
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Map ── */}
      <section className="py-12 pb-24 section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Form */}
            <RevealOnScroll direction="left">
              <div className="card p-8 sm:p-10">
                <h2 className="text-2xl font-black text-slate-900 mb-1">Book a Consultation</h2>
                <p className="text-slate-400 text-sm mb-8">Fill in the form and our team will contact you promptly.</p>
                <ContactForm />
              </div>
            </RevealOnScroll>

            {/* Map + info */}
            <div className="space-y-5">
              <RevealOnScroll direction="right">
                <div className="card overflow-hidden" style={{ height: 300 }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.097!2d38.7167!3d9.0222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDEnMjAuMCJOIDM4wrA0MycwMC4wIkU!5e0!3m2!1sen!2set!4v1"
                    width="100%" height="100%"
                    style={{ border: 0 }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Jenan Medical Center Location"
                  />
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="right" delay={80}>
                <div className="card p-6">
                  <h3 className="text-slate-900 font-black mb-4">Find Us</h3>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <MapPin size={15} className="text-brand-red mt-0.5 shrink-0" />
                      <div>
                        <p className="text-slate-900 text-sm font-black">Shaka Mall, Ashewa Meda</p>
                        <p className="text-slate-400 text-xs">Sheger Maka Nono Sub City, Burayu, Addis Ababa</p>
                        <p className="text-slate-400 text-xs">~200m East of Hills Top School</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Clock size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-slate-900 text-sm font-black">Banaa Sa&apos;aa 24 — Always Open</p>
                        <p className="text-slate-400 text-xs">24 Hours · 7 Days · Including Holidays</p>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Emergency callout */}
              <RevealOnScroll direction="right" delay={160}>
                <div className="rounded-2xl p-6 bg-gradient-to-br from-brand-red to-red-700 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-red-100 text-sm font-bold">Tajaajila Hatattamaa — Emergency Line Active</span>
                  </div>
                  <a href="tel:+251911728000" className="text-3xl font-black text-white hover:text-red-100 transition-colors">
                    0911 72 80 00
                  </a>
                  <p className="text-red-200 text-xs mt-1">Call now for immediate medical attention</p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
