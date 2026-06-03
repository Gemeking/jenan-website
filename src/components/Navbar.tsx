"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
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

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled || !isHome
          ? "bg-white border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden border-2 border-brand-red/20 group-hover:border-brand-red/50 transition-colors shadow-sm">
              <Image
                src="/images/hero/banner-logo.png"
                alt="Jenan Medical Center"
                fill
                className="object-cover"
              />
            </div>
            <div className="leading-tight">
              <p className={`text-sm font-black tracking-wider ${scrolled || !isHome ? "text-brand-navy" : "text-white"}`}>
                JENAN
              </p>
              <p className="text-[10px] text-brand-red font-bold tracking-[0.18em] uppercase">
                Surgical Center
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  pathname === l.href
                    ? "text-brand-red bg-brand-red-light"
                    : scrolled || !isHome
                    ? "text-slate-700 hover:text-brand-red hover:bg-slate-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+251911728000"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled || !isHome ? "text-slate-600 hover:text-brand-red" : "text-white/80 hover:text-white"
              }`}
            >
              <Phone size={14} className="text-brand-red" />
              0911 72 80 00
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-brand-red hover:bg-brand-red-dark text-white text-sm font-bold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled || !isHome
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-slate-100 px-4 py-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                pathname === l.href
                  ? "text-brand-red bg-brand-red-light"
                  : "text-slate-700 hover:text-brand-red hover:bg-slate-50"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-4 py-3 bg-brand-red text-white text-sm font-bold rounded-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
