"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight, MapPin } from "lucide-react";

const links = [
  { href: "/", label: "Home", sub: "Mana" },
  { href: "/about", label: "About Us", sub: "Waa'ee Keenya" },
  { href: "/services", label: "Services", sub: "Tajaajila Keenya" },
  { href: "/gallery", label: "Gallery", sub: "Suuraa Keenya" },
  { href: "/contact", label: "Contact", sub: "Nu Quunnamaa" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isHome = pathname === "/";
  const lightBar = scrolled || !isHome;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          lightBar ? "bg-white border-b border-slate-200 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border-2 border-brand-red/25 group-hover:border-brand-red/60 transition-colors shadow-sm shrink-0">
                <Image src="/images/hero/banner-logo.png" alt="Jenan" fill className="object-cover" />
              </div>
              <div className="leading-tight">
                <p className={`text-sm font-black tracking-wider ${lightBar ? "text-slate-900" : "text-white"}`}>JENAN</p>
                <p className="text-xs text-brand-red font-bold tracking-[0.18em] uppercase">Surgical Center</p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <Link key={l.href} href={l.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    pathname === l.href
                      ? "text-brand-red bg-brand-red-light"
                      : lightBar
                      ? "text-slate-700 hover:text-brand-red hover:bg-slate-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+251911728000"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${lightBar ? "text-slate-600 hover:text-brand-red" : "text-white/80 hover:text-white"}`}>
                <Phone size={14} className="text-brand-red" />
                +251 911 72 80 00
              </a>
              <Link href="/contact"
                className="px-5 py-2.5 bg-brand-red hover:bg-brand-red-dark text-white text-sm font-bold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
                Contact Us
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className={`md:hidden relative z-[60] w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
                open ? "bg-white text-slate-900 shadow-md" : lightBar ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/15"
              }`}
            >
              <span className={`absolute transition-all duration-300 ${open ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}>
                <X size={20} />
              </span>
              <span className={`absolute transition-all duration-300 ${open ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}>
                <Menu size={20} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ─── Full-screen mobile menu ─── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setOpen(false)} />

        {/* Slide-down panel */}
        <div
          className={`absolute top-0 left-0 right-0 bg-slate-950 transition-transform duration-400 ease-out ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ paddingTop: 72 }}
        >
          {/* Red top accent line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-red to-transparent" />

          {/* Nav links */}
          <nav className="px-5 pt-4 pb-2">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between px-4 py-4 rounded-2xl mb-2 transition-all duration-200 group ${
                  pathname === l.href
                    ? "bg-brand-red text-white"
                    : "text-white hover:bg-white/8 active:bg-white/12"
                }`}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              >
                <div>
                  <p className="text-base font-black tracking-wide">{l.label}</p>
                  <p className={`text-sm mt-0.5 ${pathname === l.href ? "text-red-200" : "text-slate-500"}`}>{l.sub}</p>
                </div>
                <ArrowRight
                  size={18}
                  className={`transition-transform group-hover:translate-x-1 ${pathname === l.href ? "text-white" : "text-slate-600"}`}
                />
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="mx-5 h-px bg-slate-800" />

          {/* Contact info + CTA */}
          <div className="px-5 py-5 space-y-3">
            <a href="tel:+251911728000"
              className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-white/5 border border-white/8 text-white active:bg-white/10 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-brand-red/20 flex items-center justify-center shrink-0">
                <Phone size={16} className="text-brand-red" />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium">Emergency / Bilbila Hatattamaa</p>
                <p className="text-base font-black text-white">+251 911 72 80 00</p>
              </div>
            </a>

            <a href="tel:+251928818100"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/4 border border-white/6 text-white active:bg-white/8 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                <Phone size={15} className="text-slate-400" />
              </div>
              <p className="text-sm font-semibold text-slate-300">+251 928 81 81 00</p>
            </a>

            <div className="flex items-start gap-3 px-4 py-3 rounded-2xl bg-white/4 border border-white/6">
              <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={15} className="text-slate-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Bakka — Location</p>
                <p className="text-sm text-slate-300 leading-snug">Shaka Mall, Ashewa Meda, Melka Nono</p>
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 bg-brand-red hover:bg-brand-red-dark text-white font-black text-sm rounded-2xl transition-colors shadow-lg"
            >
              Nu Quunnamaa — Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Footer strip */}
          <div className="px-5 pb-6 text-center">
            <p className="text-slate-600 text-sm italic">Banaa Sa&apos;aa 24 · Guyyaa 7 · Open 24/7</p>
          </div>
        </div>
      </div>
    </>
  );
}
