import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import DoctorsSection from "@/components/home/DoctorsSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "The story of Jenan Surgical Speciality Center in Ashewa Meda, Melka Nono — our history, mission, core values, and the surgeons and staff behind your care.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Jenan Surgical Speciality Center",
    description: "The story of Jenan Surgical Speciality Center in Ashewa Meda, Melka Nono — our history, mission, core values, and the surgeons and staff behind your care.",
    url: "/about",
    images: ["/images/imageDoc/nurses-team-lineup-1.jpg"],
  },
};

const milestones = [
  { year: "2014", oromo: "Wiirtuu Jennaan bu'uurfame", event: "Jenan Medical Center founded in Melka Nono, Addis Ababa" },
  { year: "2016", oromo: "Kutaa baqaqsanii lama baname", event: "Expanded to full surgical suite with Operating Theatre I and II" },
  { year: "2018", oromo: "Sakatta'a ammayyaan jalqabame", event: "Introduced advanced diagnostic imaging — X-ray and ultrasound" },
  { year: "2020", oromo: "Tajaajila hatattamaa sa'aa 24 baname", event: "Launched full 24/7 emergency services" },
  { year: "2022", oromo: "Mindray DC-40 fudhatame", event: "Upgraded to Mindray DC-40 colour Doppler ultrasound system" },
  { year: "2024", oromo: "Gara Shaka Mall, Ashewa Meda godaannamne", event: "Relocated to Shaka Mall, Ashewa Meda for expanded capacity" },
];

const coreValues = [
  { label: "Compassion", oromo: "Gaddoo", desc: "Treating every patient with empathy, dignity, and warmth.", image: "/images/imageDoc/inpatient-ward-room.jpg" },
  { label: "Safety", oromo: "Nageenya", desc: "Zero compromise on sterilization and surgical protocols.", image: "/images/imageDoc/sterilization-autoclave-room.jpg" },
  { label: "Skill", oromo: "Qulqullina", desc: "Careful, consistent standards in every procedure we perform.", image: "/images/imageDoc/operating-room-staff.jpg" },
  { label: "Teamwork", oromo: "Hojii Gamtaa", desc: "Multidisciplinary collaboration for better outcomes.", image: "/images/imageDoc/nurses-team-lineup-1.jpg" },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }]} />
      {/* ── Page Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image src="/images/imageDoc/building-signage-wide.jpg" alt="Jenan Surgical Center Building" fill className="object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            Serving Ashewa Meda<br />
            <span className="text-brand-red-mid">Since 2014</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl">
            Jenan Surgical Speciality Center was founded to bring skilled, dependable surgical care to Ashewa Meda and the wider Melka Nono community.
          </p>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-20 section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <RevealOnScroll direction="left">
              <div className="relative rounded-3xl overflow-hidden shadow-card-hover" style={{ height: 480 }}>
                <Image src="/images/imageDoc/operating-room-staff.jpg" alt="Operating Room" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="bg-white rounded-2xl px-5 py-4 shadow-lg inline-block">
                    <p className="text-2xl font-black gradient-text-red">10+ Waggaa</p>
                    <p className="text-slate-500 text-sm">Serving Ashewa Meda</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div className="red-rule mb-5" />
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
                Our Story{" "}<span className="gradient-text-red">So Far</span>
              </h2>
              <div className="space-y-4 text-slate-500 text-base leading-relaxed">
                <p>Founded in Melka Nono, Addis Ababa, Jenan Medical Center began as a vision: to create a place where every Ethiopian could access the same level of surgical care found in the world&apos;s best hospitals.</p>
                <p className="text-slate-700 italic border-l-2 border-brand-red pl-4 py-1">
                  &ldquo;Waggaa kurnan darbaniif, wiirtuun keenya xiqqaa irraa guddatee wiirtuu baqaqsanii yaaluu guutuu ta&apos;e — kutaa yaalaa lama, kutaa fayyaa argachuu, meeshaalee diagnostics ammayyaa, fi tajaajila hatattamaa sa&apos;aa 24 qabu.&rdquo;
                </p>
                <p className="text-sm text-slate-400 italic">For over a decade, we grew from a small clinic into a full surgical speciality center with two theatres, a recovery ward, modern diagnostic equipment, and 24-hour emergency services.</p>
                <p>Today, Jenan is proudly located at Shaka Mall, Ashewa Meda — more accessible and more capable than ever before.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[{ n: "1M+", l: "Patients Served" }, { n: "10,000+", l: "Surgeries" }, { n: "2", l: "Operating Theatres" }, { n: "24/7", l: "Emergency" }].map(({ n, l }) => (
                  <div key={l} className="card p-4 text-center">
                    <p className="text-2xl font-black gradient-text-red">{n}</p>
                    <p className="text-slate-500 text-sm mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision ── */}
      <section className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-3">Mission &amp; <span className="gradient-text-red">Vision</span></h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RevealOnScroll direction="left">
              <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 280 }}>
                <Image src="/images/imageDoc/operating-room-staff.jpg" alt="Our Mission" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-slate-900/20" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="h-1 w-10 bg-brand-red rounded mb-4" />
                  <p className="text-brand-red-mid text-sm font-black tracking-widest uppercase mb-1">Kaayyoo Keenya</p>
                  <h3 className="text-2xl font-black text-white mb-3">Our Mission</h3>
                  <p className="text-white/70 text-sm leading-relaxed">To deliver safe, skilled surgical and medical care to every patient who comes to us, regardless of background, by combining modern equipment with compassionate, personalised attention.</p>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="right">
              <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: 280 }}>
                <Image src="/images/imageDoc/entrance-market-view.jpg" alt="Our Vision" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-slate-900/20" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="h-1 w-10 bg-blue-500 rounded mb-4" />
                  <p className="text-blue-300 text-sm font-black tracking-widest uppercase mb-1">Hawwii Keenya</p>
                  <h3 className="text-2xl font-black text-white mb-3">Our Vision</h3>
                  <p className="text-white/70 text-sm leading-relaxed">To be the surgical speciality center our community trusts first — known for skilled surgeons, modern equipment, and care that puts the patient first.</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── Core values ── */}
      <section className="py-20 section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-3">Core <span className="gradient-text-red">Values</span></h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">Gatii keenya — These principles guide everything we do.</p>
          </RevealOnScroll>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {coreValues.map(({ label, oromo, desc, image }, i) => (
              <RevealOnScroll key={label} direction="up" delay={i * 80}>
                <div className="relative rounded-2xl overflow-hidden group" style={{ height: 220 }}>
                  <Image src={image} alt={label} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:640px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent" />
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <p className="text-sm font-bold opacity-60 text-white italic mb-0.5">{oromo}</p>
                    <p className="text-white font-black text-base mb-1">{label}</p>
                    <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-3">Our <span className="gradient-text-red">Journey</span></h2>
          </RevealOnScroll>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-red via-red-300 to-transparent" />
            <div className="space-y-7">
              {milestones.map(({ year, oromo, event }, i) => (
                <RevealOnScroll key={i} direction="left" delay={i * 60}>
                  <div className="flex gap-6 items-start">
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-brand-red text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                      {year}
                    </div>
                    <div className="flex-1 card p-5 mt-2">
                      <p className="text-brand-red text-sm font-bold italic mb-1">{oromo}</p>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-brand-red mt-0.5 shrink-0" />
                        <p className="text-slate-700 text-sm leading-relaxed">{event}</p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Doctors ── */}
      <DoctorsSection />

      {/* ── Team photo ── */}
      <section className="py-20 section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-3">Our <span className="gradient-text-red">Team</span></h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">Experienced professionals united by a passion for patient care.</p>
          </RevealOnScroll>
          <RevealOnScroll direction="scale">
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover bg-slate-900" style={{ height: 440 }}>
              <Image src="/images/imageDoc/nurses-team-lineup-1.jpg" alt="Jenan Medical Team" fill className="object-contain" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <p className="text-white font-black text-xl">Our Team in Action</p>
                <p className="text-slate-300 text-sm mt-1">Committed to surgical excellence every single day — Guyyaa guyyaadhaan qulqullina baqaqsaaniif carraaqna.</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 section-alt">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h3 className="text-3xl font-black text-slate-900 mb-4">Ready to Trust Us With Your Health?</h3>
            <p className="text-slate-500 mb-8">Nu quunnamaa — contact our team today for a consultation.</p>
            <Link href="/contact" className="btn-primary inline-flex">
              Get In Touch
              <ArrowRight size={17} />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
