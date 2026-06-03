import { CheckCircle2, ShieldCheck, HeartHandshake, FlaskConical, Clock4, MapPin } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Certified Surgical Excellence",
    desc: "Our surgeons follow international surgical safety checklists and protocols in every procedure.",
  },
  {
    icon: FlaskConical,
    title: "Advanced Diagnostics",
    desc: "In-house X-ray, ultrasound, and radiology workstation for fast, accurate results.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Patient Care",
    desc: "We treat every patient with dignity, warmth, and personalised attention from admission to discharge.",
  },
  {
    icon: Clock4,
    title: "24/7 Emergency Response",
    desc: "Our emergency team is always on standby — day or night — to respond when you need us most.",
  },
  {
    icon: CheckCircle2,
    title: "Sterile & Safe Environment",
    desc: "Rigorous autoclave sterilization and infection-control measures maintain the highest hygiene standards.",
  },
  {
    icon: MapPin,
    title: "Conveniently Located",
    desc: "Situated at Shaka Mall, Ashewa Meda — easily accessible from all parts of Addis Ababa and Burayu.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left image stack */}
          <div className="relative h-[520px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <Image
                src="/images/facilities/operating-room-1-wide.jpg"
                alt="Operating Room"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 to-transparent" />
            </div>
            {/* Overlay card */}
            <div className="absolute -bottom-6 -right-4 sm:right-0 w-64 glass border border-white/10 rounded-2xl p-5 shadow-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Safety First</p>
                  <p className="text-slate-400 text-xs">WHO surgical checklist</p>
                </div>
              </div>
              <div className="h-1 bg-navy-700 rounded-full overflow-hidden mt-3">
                <div className="h-full w-[95%] bg-gradient-to-r from-green-500 to-cyan-500 rounded-full" />
              </div>
              <p className="text-xs text-slate-400 mt-1.5 text-right">95% patient satisfaction</p>
            </div>
          </div>

          {/* Right content */}
          <div>
            <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Excellence You Can{" "}
              <span className="gradient-text">Trust</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              At Jenan Surgical Speciality Center, every decision is guided by one principle — delivering the best possible outcome for our patients, every single time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3 group">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600/25 transition-colors">
                    <Icon size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold mb-0.5">{title}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
