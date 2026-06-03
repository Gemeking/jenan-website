import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { Phone, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-brand-red via-red-700 to-red-800">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "36px 36px" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <p className="text-red-200 text-sm font-bold tracking-[0.22em] uppercase mb-4">
            Tajaajila Argadhaa — Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Ready for Premium
            <br />
            Medical Care?
          </h2>
          <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Dhukkuba qabdan yoo ta&apos;e, otoo hin turiin nu quunnamaa. Whether it&apos;s routine or emergency — our team is always here for you, 24 hours a day.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 bg-white text-brand-red font-black text-sm rounded-xl hover:bg-slate-50 transition-all duration-200 shadow-lg w-full sm:w-auto justify-center"
            >
              Contact Us Now
              <ArrowRight size={17} />
            </Link>
            <a
              href="tel:+251911728000"
              className="flex items-center gap-2 px-8 py-4 border-2 border-white/50 hover:border-white text-white font-black text-sm rounded-xl transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <Phone size={17} />
              Call 0911 72 80 00
            </a>
          </div>

          <p className="text-white/40 text-sm mt-6 tracking-wide">
            Banaa Sa&apos;aa 24 · Guyyaa 7 · Hatattamaa Yeroo Hunda
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
