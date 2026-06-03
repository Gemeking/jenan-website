import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { Phone, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-brand-red via-red-700 to-red-800">
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "36px 36px" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          {/* Oromo headline */}
          <p className="text-red-200 text-base font-black italic mb-2">
            &ldquo;Fayyaan Qabeenya — Dhukkuba kee otoo hin tursiifatin yaalami.&rdquo;
          </p>
          <p className="text-white/50 text-xs tracking-[0.18em] uppercase mb-8">
            Health is Wealth — Do not delay your treatment
          </p>

          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Tajaajila Premium<br />
            <span className="text-red-200 font-light text-3xl sm:text-4xl">Premium Medical Care</span>
          </h2>

          {/* Bilingual body text */}
          <p className="text-white/80 text-lg mb-4 max-w-xl mx-auto leading-relaxed">
            Dhukkuba qabdan yoo ta&apos;e, otoo hin turiin nu quunnamaa.
          </p>
          <p className="text-white/55 text-base mb-10 max-w-xl mx-auto leading-relaxed">
            Whether routine or emergency — our team is always here for you, every hour of every day.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 bg-white text-brand-red font-black text-sm rounded-xl hover:bg-slate-50 transition-all duration-200 shadow-lg w-full sm:w-auto justify-center"
            >
              Nu Quunnamaa — Contact Us
              <ArrowRight size={17} />
            </Link>
            <a
              href="tel:+251911728000"
              className="flex items-center gap-2 px-8 py-4 border-2 border-white/50 hover:border-white text-white font-black text-sm rounded-xl transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <Phone size={17} />
              Bilbili — 0911 72 80 00
            </a>
          </div>

          {/* Oromo availability strip */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-1 text-white/40 text-xs">
            <span>Banaa Sa&apos;aa 24 · Open 24 Hours</span>
            <span>·</span>
            <span>Guyyaa 7 Torbanitti · 7 Days a Week</span>
            <span>·</span>
            <span>Hatattamaa Yeroo Hunda · Emergency Always</span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
