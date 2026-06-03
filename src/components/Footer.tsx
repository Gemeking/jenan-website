import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Mail, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5">
      {/* Top strip */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-blue-500/30">
                <Image
                  src="/images/hero/banner-logo.png"
                  alt="Jenan"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-white">JENAN</p>
                <p className="text-xs text-blue-400 tracking-widest uppercase">Surgical Center</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Ethiopia's premier surgical speciality center, delivering world-class medical care with compassion and excellence since our founding.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "General Surgery",
                "Pediatric Care",
                "Maternal Care",
                "Diagnostic Imaging",
                "Emergency Care",
                "Recovery Services",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-blue-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  Sheger Maka Nono Sub City, Ashewa Meda, Shaka Mall, Burayu, Ethiopia
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-blue-400 mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+251911728000" className="text-slate-400 hover:text-white text-sm block transition-colors">
                    0911 72 80 00
                  </a>
                  <a href="tel:+251928818100" className="text-slate-400 hover:text-white text-sm block transition-colors">
                    09 28 81 81 00
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">24 / 7</p>
                  <p className="text-slate-400 text-xs">Open every day, all hours</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-blue-400 mt-0.5 shrink-0" />
                <a href="mailto:info@jenansurgical.com" className="text-slate-400 hover:text-white text-sm transition-colors">
                  info@jenansurgical.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Jenan Surgical Speciality Center. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Yaalii Baqaqsanii Yaaluu Ol&apos;aanaa Jennaan &mdash; We Serve You!!
          </p>
        </div>
      </div>
    </footer>
  );
}
