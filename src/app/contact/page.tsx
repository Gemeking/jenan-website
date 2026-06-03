import { Phone, MapPin, Clock, Mail } from "lucide-react";
import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Jenan Surgical Speciality Center",
  description:
    "Book an appointment or reach our 24/7 team at Jenan Surgical Speciality Center, Ashewa Meda, Burayu, Ethiopia.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    values: ["0911 72 80 00", "09 28 81 81 00"],
    action: "tel:+251911728000",
    color: "text-blue-400",
    bg: "bg-blue-600/15 border-blue-500/20",
  },
  {
    icon: MapPin,
    label: "Location",
    values: ["Shaka Mall, Ashewa Meda", "Sheger Maka Nono Sub City, Burayu"],
    action: "https://maps.google.com/?q=Ashewa+Meda+Burayu",
    color: "text-cyan-400",
    bg: "bg-cyan-600/15 border-cyan-500/20",
  },
  {
    icon: Clock,
    label: "Working Hours",
    values: ["Open 24 Hours", "7 Days a Week"],
    action: null,
    color: "text-green-400",
    bg: "bg-green-600/15 border-green-500/20",
  },
  {
    icon: Mail,
    label: "Email",
    values: ["info@jenansurgical.com"],
    action: "mailto:info@jenansurgical.com",
    color: "text-amber-400",
    bg: "bg-amber-600/15 border-amber-500/20",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-navy-900 min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Contact Us
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-5">
            We&apos;re Here to{" "}
            <span className="gradient-text">Help You</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Reach out any time — our team is available 24 hours a day, 7 days a
            week. Book an appointment, ask a question, or find us at our Ashewa
            Meda location.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map(({ icon: Icon, label, values, action, color, bg }) => (
              <div
                key={label}
                className="glass border border-white/7 hover:border-blue-500/25 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-11 h-11 rounded-xl border ${bg} flex items-center justify-center mb-4`}
                >
                  <Icon size={20} className={color} />
                </div>
                <p className="text-slate-500 text-xs font-semibold tracking-widest uppercase mb-2">
                  {label}
                </p>
                {values.map((v, i) =>
                  action && i === 0 ? (
                    <a
                      key={v}
                      href={action}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-sm font-medium ${color} hover:underline`}
                    >
                      {v}
                    </a>
                  ) : (
                    <p key={v} className="text-slate-300 text-sm">
                      {v}
                    </p>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <div className="glass border border-white/8 rounded-3xl p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-white mb-2">
                Book an Appointment
              </h2>
              <p className="text-slate-400 text-sm mb-8">
                Fill in the form and our team will contact you promptly.
              </p>
              <ContactForm />
            </div>

            {/* Map + info */}
            <div className="space-y-5">
              {/* Map embed */}
              <div
                className="glass border border-white/8 rounded-3xl overflow-hidden"
                style={{ height: 320 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.097!2d38.7167!3d9.0222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDEnMjAuMCJOIDM4wrA0MycwMC4wIkU!5e0!3m2!1sen!2set!4v1"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter:
                      "invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.1)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jenan Medical Center Location"
                />
              </div>

              {/* Location details */}
              <div className="glass border border-white/8 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">Find Us</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <MapPin size={16} className="text-blue-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">
                        Shaka Mall, Ashewa Meda
                      </p>
                      <p className="text-slate-400 text-xs">
                        Sheger Maka Nono Sub City, Burayu, Addis Ababa
                      </p>
                      <p className="text-slate-500 text-xs mt-0.5">
                        ~200m East of Hills Top School
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock size={16} className="text-green-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium">
                        Always Open
                      </p>
                      <p className="text-slate-400 text-xs">
                        24 Hours · 7 Days · Including Holidays
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency callout */}
              <div className="relative rounded-2xl overflow-hidden p-6 bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-500/25">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-sm font-semibold">
                    Emergency Line — Always Active
                  </span>
                </div>
                <a
                  href="tel:+251911728000"
                  className="text-3xl font-bold text-white hover:text-blue-300 transition-colors"
                >
                  0911 72 80 00
                </a>
                <p className="text-slate-400 text-xs mt-1">
                  Call now for immediate medical attention
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
