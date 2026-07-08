import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { CheckCircle2, ShieldCheck, FlaskConical, HeartHandshake, Clock4, CheckCircle } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "WHO Surgical Safety Checklist", oromo: "Qulqullina Baqaqsaanii Mirkanaa'e", desc: "WHO surgical safety checklists and international protocols observed in every procedure." },
  { icon: FlaskConical, title: "Advanced Diagnostics", oromo: "Sakatta'a Ammayyaa", desc: "In-house X-ray, ultrasound, and radiology workstation for fast, accurate results on-site." },
  { icon: HeartHandshake, title: "Compassionate Patient Care", oromo: "Dhukkubsataa Jaalalaan Yaaluu", desc: "Kabajaa fi xiyyeeffannoo dhuunfaa — dignity and personalised attention from admission to discharge." },
  { icon: Clock4, title: "24 / 7 Emergency Response", oromo: "Sa'aa 24 Hatattamaa Deebisuu", desc: "Yeroo hatattamaa nu bira jirtu — our emergency team is always on standby, day and night." },
  { icon: CheckCircle2, title: "Sterile & Safe Environment", oromo: "Naannoo Qulqulluu fi Nagaa", desc: "Autoclave fi qulqullina dhibee ittisuu cimaadhan — rigorous sterilization maintaining the highest standards." },
  { icon: CheckCircle, title: "Multidisciplinary Team", oromo: "Garee Ogeeyyii Waliin Hojjetuu", desc: "Qottuu, ogeeyyii qaama ujummoo, narsootaa fi ogeeyyii radiooloojii — collaborating for optimal outcomes." },
];

export default function WhyUsSection() {
  return (
    <section className="section-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — image */}
          <RevealOnScroll direction="left">
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover" style={{ height: 520 }}>
              <Image
                src="/images/imageDoc/operating-room-3-wide.jpg"
                alt="Operating Room"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              {/* Overlay bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />

              {/* Stats overlay card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 flex items-center gap-4 shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-brand-red-light flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} className="text-brand-red" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-sm">Surgical Safety First</p>
                    <p className="text-slate-500 text-xs">WHO Surgical Safety Checklist · Every Procedure</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-brand-red font-black text-lg">95%</p>
                    <p className="text-slate-400 text-xs">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right — reasons */}
          <div>
            <RevealOnScroll direction="right">
              <div className="red-rule mb-5" />
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 leading-tight">
                Care You Can{" "}
                <span className="gradient-text-red">Trust</span>
              </h2>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                At Jenan, every decision is guided by a single principle — delivering the best possible outcome for every patient, every time.
              </p>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger">
              {reasons.map(({ icon: Icon, title, oromo, desc }, i) => (
                <RevealOnScroll key={title} direction="up" delay={i * 60}>
                  <div className="flex gap-3 group p-3 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-brand-red-light border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={16} className="text-brand-red" />
                    </div>
                    <div>
                      <p className="text-brand-red text-[10px] font-bold italic mb-0.5">{oromo}</p>
                      <p className="text-slate-900 text-sm font-black mb-0.5">{title}</p>
                      <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
