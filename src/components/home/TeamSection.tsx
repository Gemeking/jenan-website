import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const values = [
  {
    label: "Kaayyoo Keenya — Mission",
    oromo: "Dhukkubsataa hundaaf, aadaa fi qabeenya irraa adda osoo hin baasiin, tajaajila fayyaa addunyaa ol'aanaa kennuuf carraaqna.",
    en: "Delivering safe, skilled surgical and medical care to every patient who walks through our doors, regardless of background.",
  },
  {
    label: "Hawwii Keenya — Vision",
    oromo: "Wiirtuu baqaqsanii yaaluu kan amanamaa fi teknooloojii ammayyaa qabu ta'uun Afrikaa Bahaa keessatti fakkii taasisuu.",
    en: "To be the most trusted, technologically advanced, and patient-centred surgical speciality center in East Africa.",
  },
  {
    label: "Gatii Keenya — Values",
    oromo: "Qulqullina · Nageenya · Kabaja · Dhugummaa · Hojii Gamtaa — Kunniin gatii hunda tarkaanfii keenyaa kan hogganuu dha.",
    en: "Skill · Safety · Compassion · Integrity · Teamwork — These values guide every step we take.",
  },
];

export default function TeamSection() {
  return (
    <section className="section-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <RevealOnScroll className="text-center mb-14">
          <div className="red-rule mx-auto mb-5" />
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            The Team Behind{" "}
            <span className="gradient-text-red">Your Care</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            A dedicated group of experienced surgeons, nurses, anaesthesiologists, and support staff committed to your health and recovery.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Team photo */}
          <RevealOnScroll direction="left">
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover aspect-[1195/896] bg-slate-100">
              <Image
                src="/images/imageDoc/nurses-team-lineup-1.jpg"
                alt="Jenan Medical Team"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
                  <p className="text-slate-900 font-black text-sm">Multidisciplinary Team</p>
                  <p className="text-slate-500 text-sm mt-0.5">
                    Surgeons · Anaesthetists · Scrub Nurses · Radiologists · Recovery Nurses
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Mission / Vision / Values */}
          <div className="space-y-4">
            {values.map(({ label, oromo, en }, i) => (
              <RevealOnScroll key={label} direction="right" delay={i * 100}>
                <div className="card p-6">
                  <p className="text-brand-red text-sm font-black tracking-widest uppercase mb-2">{label}</p>
                  <p className="text-slate-900 text-sm font-semibold mb-1 italic">{oromo}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{en}</p>
                </div>
              </RevealOnScroll>
            ))}

            {/* Oromo tagline */}
            <RevealOnScroll direction="right" delay={300}>
              <div className="relative rounded-2xl overflow-hidden p-6 bg-gradient-to-br from-brand-red to-red-700 text-white">
                <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full blur-2xl" />
                <p className="text-xl font-black italic relative z-10">
                  &ldquo;Wiirtuu Baqaqsanii Yaaluu Jennaan&rdquo;
                </p>
                <p className="text-white/80 text-sm mt-2 relative z-10 font-semibold">
                  — Isiniif Tajaajilna. We Serve You!!
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
