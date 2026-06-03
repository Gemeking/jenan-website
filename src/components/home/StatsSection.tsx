"use client";

import { useEffect, useRef, useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { Users, Stethoscope, Building2, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: 5000, suffix: "+", label: "Patients Treated", oromo: "Dhukkubsataa Yaalame", color: "text-brand-red", bg: "bg-brand-red-light border-red-200" },
  { icon: Stethoscope, value: 1200, suffix: "+", label: "Surgeries Performed", oromo: "Baqaqsanii Yaaluu", color: "text-blue-600", bg: "bg-blue-50 border-blue-200" },
  { icon: Building2, value: 10, suffix: "+", label: "Years of Excellence", oromo: "Waggaa Tajaajilaaf", color: "text-brand-red", bg: "bg-brand-red-light border-red-200" },
  { icon: Clock, value: 24, suffix: "/7", label: "Emergency Available", oromo: "Banaa Sa'aa 24", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const step = target / (1800 / 16);
          let c = 0;
          const t = setInterval(() => {
            c = Math.min(c + step, target);
            setCount(Math.floor(c));
            if (c >= target) clearInterval(t);
          }, 16);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="section-white py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 stagger">
          {stats.map(({ icon: Icon, value, suffix, label, oromo, color, bg }, i) => (
            <RevealOnScroll key={label} direction="up" delay={i * 80}>
              <div className={`card border ${bg} p-6 sm:p-8 text-center`}>
                <div className={`w-11 h-11 rounded-xl ${bg} border flex items-center justify-center mx-auto mb-4`}>
                  <Icon size={20} className={color} />
                </div>
                <p className={`text-4xl sm:text-5xl font-black ${color} mb-1`}>
                  <Counter target={value} suffix={suffix} />
                </p>
                <p className="text-slate-700 text-sm font-semibold">{label}</p>
                <p className="text-slate-400 text-xs mt-0.5 italic">{oromo}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
