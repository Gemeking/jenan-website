import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { Award, Stethoscope, Baby, Star, Quote } from "lucide-react";

const doctors = [
  {
    name: "Dr. Dejene Desalegn",
    oromo: "Hundeessaa fi Ogeessa Olaanaa",
    role: "Founder & Medical Director — General Surgeon",
    image: "/images/imageDoc/dr-dejene-portrait.jpg",
    experience: "20+",
    experienceLabel: "Years of Experience",
    icon: Stethoscope,
    accent: "brand-red",
    quote: "Dhukkubsataa hunda maatii keenya godhannee yaalla.",
    quoteEn: "We treat every patient as our own family.",
    bio: "Dr. Dejene Desalegn is the founder and Medical Director of Jenan Surgical Speciality Center — a name well known and deeply trusted throughout Ashewa Meda and the greater Melka Nono community. With over 20 years of surgical experience, he built Jenan from a small clinic into a full surgical speciality center, personally overseeing thousands of successful procedures and mentoring the medical team that carries his standard of care forward every day.",
    tags: ["General & Laparoscopic Surgery", "Founder & Medical Director", "20+ Years in Ashewa Meda"],
  },
  {
    name: "Dr. Tadesse Soresso",
    oromo: "Ogeessa Fayyaa Daa'immanii",
    role: "Pediatrician",
    image: "/images/imageDoc/dr-tadese-portrait.jpg",
    experience: "35+",
    experienceLabel: "Years of Experience",
    icon: Baby,
    accent: "blue",
    quote: "Fayyaa daa'immanii kunuunsuun kaayyoo koo ti.",
    quoteEn: "Caring for children's health is my life's purpose.",
    bio: "Dr. Tadesse Soresso brings an extraordinary 35 years of pediatric expertise to Jenan Surgical Speciality Center. Generations of families across the community have trusted him with the health of their children — from routine care to complex pediatric cases — making him one of the most respected and experienced pediatricians in the region.",
    tags: ["Pediatric Medicine", "Neonatal Care", "35+ Years of Practice"],
  },
];

export default function DoctorsSection() {
  return (
    <section id="doctors" className="section-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <RevealOnScroll className="text-center mb-14">
          <div className="red-rule mx-auto mb-5" />
          <p className="text-brand-red text-sm font-black tracking-[0.2em] uppercase mb-2">Ogeeyyii Fayyaa Keenya</p>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
            Meet Our{" "}
            <span className="gradient-text-red">Doctors</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Decades of combined experience, trusted by families across Ashewa Meda and Melka Nono for surgical and pediatric excellence.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {doctors.map(({ name, oromo, role, image, experience, experienceLabel, icon: Icon, quote, quoteEn, bio, tags }, i) => (
            <RevealOnScroll key={name} direction={i % 2 === 0 ? "left" : "right"} delay={i * 100}>
              <div className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 bg-white border border-slate-100 h-full flex flex-col">

                {/* Portrait — aspect ratio matches source photo exactly so the doctor is always shown in full, never cropped */}
                <div className="relative overflow-hidden aspect-[3/4] bg-slate-100">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width:1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/0 to-transparent" />

                  {/* Top row: role badge (+ well-known ribbon) on the left, experience badge on the right — stacked, never overlapping */}
                  <div className="absolute top-5 left-5 right-5 flex items-start justify-between gap-2">
                    <div className="flex flex-col items-start gap-2 min-w-0">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm shadow-lg max-w-full">
                        <Icon size={15} className="text-brand-red shrink-0" />
                        <span className="text-slate-900 text-sm font-black truncate">{role}</span>
                      </div>
                      {i === 0 && (
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-400 text-slate-900 shadow-lg max-w-full">
                          <Star size={12} className="fill-slate-900 shrink-0" />
                          <span className="text-xs font-black uppercase tracking-wide whitespace-nowrap">Well-Known Locally</span>
                        </div>
                      )}
                    </div>

                    <div className="shrink-0 flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-brand-red text-white shadow-lg">
                      <span className="text-lg font-black leading-none">{experience}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wide mt-0.5 opacity-90 text-center leading-tight">Years</span>
                    </div>
                  </div>

                  {/* Name over image bottom */}
                  <div className="absolute bottom-5 left-6 right-6">
                    <p className="text-brand-red-mid text-sm font-bold italic mb-1">{oromo}</p>
                    <h3 className="text-white text-2xl font-black leading-tight">{name}</h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-7 flex flex-col flex-1">
                  {/* Quote */}
                  <div className="flex gap-3 mb-5 pb-5 border-b border-slate-100">
                    <Quote size={18} className="text-brand-red shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-800 text-sm font-bold italic leading-relaxed">&ldquo;{quote}&rdquo;</p>
                      <p className="text-slate-400 text-sm mt-1">{quoteEn}</p>
                    </div>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{bio}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-red-light border border-red-100 text-brand-red text-sm font-bold">
                        <Star size={11} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-brand-red via-red-400 to-brand-red-dark" />
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Trust strip */}
        <RevealOnScroll className="mt-10" delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-center bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5">
            <div className="flex items-center gap-2">
              <Award size={16} className="text-brand-red" />
              <span className="text-slate-700 text-sm font-bold">55+ Combined Years Treating Patients in Melka Nono</span>
            </div>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
            <span className="text-slate-500 text-sm">Trusted throughout Ashewa Meda &amp; Melka Nono — Amanamummaa fi Beekamummaa</span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
