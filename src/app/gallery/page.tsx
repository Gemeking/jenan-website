import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A photo tour of Jenan Surgical Speciality Center — operating theatres, diagnostic imaging, laboratory, facilities, and our medical team in Melka Nono, Ethiopia.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Photo Gallery | Jenan Surgical Speciality Center",
    description: "A photo tour of Jenan Surgical Speciality Center — operating theatres, diagnostic imaging, laboratory, facilities, and our medical team in Melka Nono, Ethiopia.",
    url: "/gallery",
    images: ["/images/imageDoc/operating-room-staff.jpg"],
  },
};

export default function GalleryPage() {
  return (
    <div className="bg-white min-h-screen">
      <BreadcrumbSchema items={[{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }]} />
      {/* ── Page Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image src="/images/imageDoc/operating-room-staff.jpg" alt="Jenan Surgical Center Gallery" fill className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/75 to-slate-900" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red-mid text-sm font-black tracking-[0.2em] uppercase mb-3">Suuraa Keenya</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            Our Photo <span className="text-brand-red-mid">Gallery</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
            A real look inside Jenan Surgical Speciality Center — our operating theatres, diagnostic equipment, facilities, and the team behind your care.
          </p>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <GalleryGrid />
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
