import Link from "next/link";
import { Phone, ArrowRight, Calendar } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-navy-900" />
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-600/15 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass border border-blue-500/20 rounded-3xl p-10 sm:p-16 relative overflow-hidden">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />

          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Ready to{" "}
            <span className="gradient-text">Experience</span>
            <br />
            Premium Medical Care?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Whether it&apos;s a routine check-up, a planned procedure, or an emergency — our team is available 24/7 to serve you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] w-full sm:w-auto justify-center"
            >
              <Calendar size={18} />
              Book Appointment
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+251911728000"
              className="flex items-center gap-2 px-8 py-4 glass border border-white/15 hover:border-blue-400/50 text-white font-semibold rounded-2xl transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Phone size={18} className="text-blue-400" />
              Call 0911 72 80 00
            </a>
          </div>

          <p className="text-slate-500 text-sm mt-6">
            Open 24 hours · 7 days a week · Emergency always available
          </p>
        </div>
      </div>
    </section>
  );
}
