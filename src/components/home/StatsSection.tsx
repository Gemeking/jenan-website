"use client";

import { useEffect, useRef, useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const stats = [
  { value: 500000, suffix: "+", label: "Patients Served", oromo: "Dhukkubsataa Tajaajilame", bg: "bg-brand-red", text: "text-white" },
  { value: 10000, suffix: "+", label: "Successful Surgeries", oromo: "Opiraasiyoonii Milkaa'e", bg: "bg-slate-900", text: "text-white" },
  { value: 10, suffix: "+", label: "Years of Service", oromo: "Waggaa Tajaajilaaf", bg: "bg-brand-red", text: "text-white" },
  { value: 24, suffix: "/7", label: "Emergency Available", oromo: "Banaa Sa'aa 24", bg: "bg-slate-900", text: "text-white" },
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
    <section className="py-0 border-b border-slate-100">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map(({ value, suffix, label, oromo, bg, text }, i) => (
          <RevealOnScroll key={label} direction="up" delay={i * 60}>
            <div className={`${bg} ${text} px-4 sm:px-8 py-10 sm:py-12 text-center`}>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2 leading-none">
                <Counter target={value} suffix={suffix} />
              </p>
              <p className="text-sm font-bold opacity-90 tracking-wide">{label}</p>
              <p className="text-sm opacity-50 italic mt-0.5">{oromo}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
