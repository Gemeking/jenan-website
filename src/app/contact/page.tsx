import { Phone, MapPin, Clock, Mail } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Call, visit, or message Jenan Surgical Speciality Center — 24/7 emergency line and our location at Shaka Mall, Ashewa Meda, Melka Nono, Ethiopia.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Jenan Surgical Speciality Center",
    description: "Call, visit, or message Jenan Surgical Speciality Center — 24/7 emergency line and our location at Shaka Mall, Ashewa Meda, Melka Nono, Ethiopia.",
    url: "/contact",
    images: ["/images/imageDoc/reception-counter.jpg"],
  },
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    lines: ["+251 911 72 80 00", "+251 928 81 81 00"],
    href: "tel:+251911728000",
    iconBg: "bg-brand-red-light border-red-200",
    iconColor: "text-brand-red",
  },
  {
    icon: MapPin,
    label: "Location",
    lines: ["Shaka Mall, Ashewa Meda", "Melka Nono Sub City, Sheger"],
    href: "https://www.google.com/maps/search/?api=1&query=9.032859993684763,38.665363133229945",
    iconBg: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    icon: Clock,
    label: "Working Hours",
    lines: ["Open 24 Hours", "7 Days a Week · All Holidays"],
    href: null,
    iconBg: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-600",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["jenansurgicalcenter@gmail.com"],
    href: "mailto:jenansurgicalcenter@gmail.com",
    iconBg: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Contact Us", path: "/contact" }]} />

      {/* ── Page Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image
            src="/images/imageDoc/reception-counter.jpg"
            alt="Jenan Reception"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/65 to-slate-900/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            We&apos;re Here to <span className="text-brand-red-mid">Help</span>
          </h1>
          <p className="text-brand-red-mid italic text-lg font-semibold mb-2">
            &ldquo;Yeroo barbaaddan nu bira jirra.&rdquo;
          </p>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            We are here when you need us — 24 hours a day, 7 days a week. Call us, find us, or send us a message.
          </p>
        </div>
      </section>

      {/* ── Contact cards ── */}
      <section className="py-16 section-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {contactInfo.map(({ icon: Icon, label, lines, href, iconBg, iconColor }, i) => (
              <RevealOnScroll key={label} direction="up" delay={i * 80}>
                <div className="card p-7 flex gap-5 items-start">
                  <div className={`w-13 h-13 rounded-xl border ${iconBg} flex items-center justify-center shrink-0 p-3`}>
                    <Icon size={22} className={iconColor} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-black tracking-widest uppercase mb-2">{label}</p>
                    {lines.map((line, j) =>
                      href && j === 0 ? (
                        <a key={line} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                          className={`block text-base font-black ${iconColor} hover:underline`}>
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="text-slate-700 text-sm font-medium">{line}</p>
                      )
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Emergency callout ── */}
      <section className="py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll direction="scale">
            <div className="rounded-2xl p-8 bg-gradient-to-br from-brand-red to-red-700 text-white relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/8 rounded-full blur-2xl" />
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-red-100 text-sm font-bold tracking-wide">Emergency Line — Always Active</span>
                </div>
                <p className="text-white/70 text-sm">Call now for immediate medical attention, any time of day.</p>
              </div>
              <a href="tel:+251911728000"
                className="text-4xl font-black text-white hover:text-red-100 transition-colors shrink-0 relative z-10">
                +251 911 72 80 00
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Map + location detail ── */}
      <section className="py-16 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

            {/* Map */}
            <RevealOnScroll direction="left" className="lg:col-span-3">
              <div className="card overflow-hidden" style={{ height: 380 }}>
                <iframe
                  src="https://www.google.com/maps?q=9.032859993684763,38.665363133229945&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jenan Medical Center Location"
                />
              </div>
            </RevealOnScroll>

            {/* Location details + building photo */}
            <RevealOnScroll direction="right" className="lg:col-span-2 flex flex-col gap-5">
              <div className="card p-6 flex-1">
                <h3 className="text-slate-900 font-black mb-5 text-lg">Find Us</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin size={16} className="text-brand-red mt-0.5 shrink-0" />
                    <div>
                      <p className="text-slate-900 text-sm font-black">Shaka Mall, Ashewa Meda</p>
                      <p className="text-slate-400 text-sm mt-0.5">Melka Nono Sub City, Sheger</p>
                      <p className="text-slate-400 text-sm">Addis Ababa, Ethiopia</p>
                      <p className="text-slate-400 text-sm mt-1">~200m East of Hills Top School</p>
                    </div>
                  </div>
                  <div className="h-px bg-slate-100" />
                  <div className="flex gap-3">
                    <Clock size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-slate-900 text-sm font-black">Always Open</p>
                      <p className="text-slate-400 text-sm mt-0.5">24 Hours · 7 Days · Including Holidays</p>
                    </div>
                  </div>
                  <div className="h-px bg-slate-100" />
                  <div className="flex gap-3">
                    <Phone size={16} className="text-brand-red mt-0.5 shrink-0" />
                    <div>
                      <a href="tel:+251911728000" className="text-brand-red font-black text-sm hover:underline">+251 911 72 80 00</a>
                      <a href="tel:+251928818100" className="block text-brand-red font-black text-sm hover:underline">+251 928 81 81 00</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Building photo */}
              <div className="relative rounded-2xl overflow-hidden" style={{ height: 150 }}>
                <Image
                  src="/images/imageDoc/building-facade-signage.jpg"
                  alt="Jenan Surgical Center Building"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

    </div>
  );
}
