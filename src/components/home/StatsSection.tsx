"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Stethoscope, Building2, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: 5000, suffix: "+", label: "Patients Treated", color: "text-blue-400", glow: "rgba(59,130,246,0.3)" },
  { icon: Stethoscope, value: 1200, suffix: "+", label: "Surgeries Performed", color: "text-cyan-400", glow: "rgba(6,182,212,0.3)" },
  { icon: Building2, value: 10, suffix: "+", label: "Years of Excellence", color: "text-gold-400", glow: "rgba(245,158,11,0.3)" },
  { icon: Clock, value: 24, suffix: "/7", label: "Emergency Available", color: "text-green-400", glow: "rgba(74,222,128,0.3)" },
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
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            setCount(Math.floor(current));
            if (current >= target) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map(({ icon: Icon, value, suffix, label, color, glow }) => (
            <div
              key={label}
              className="group glass border border-white/8 rounded-2xl p-6 sm:p-8 text-center hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: `0 4px 32px rgba(0,0,0,0.3)` }}
            >
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{ background: `${glow}`, boxShadow: `0 0 20px ${glow}` }}
              >
                <Icon size={22} className={color} />
              </div>
              <p className={`text-4xl sm:text-5xl font-bold ${color} mb-1`}>
                <Counter target={value} suffix={suffix} />
              </p>
              <p className="text-slate-400 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
