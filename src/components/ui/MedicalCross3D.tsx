"use client";

const D = 22;   // depth
const BW = 146; // beam length
const BH = 50;  // beam thickness

export default function MedicalCross3D({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ isolation: "isolate" }}
    >
      {/* Ambient glow rings */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 300, height: 300,
          background: "radial-gradient(circle, rgba(220,38,38,0.13) 0%, transparent 65%)",
          animation: "glowPulse 3.5s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 190, height: 190,
          background: "radial-gradient(circle, rgba(220,38,38,0.22) 0%, transparent 65%)",
          animation: "glowPulse 3.5s ease-in-out infinite 1.75s",
        }}
      />

      {/* Perspective root */}
      <div style={{ perspective: "900px" }}>
        {/* Float up/down */}
        <div style={{ animation: "crossFloat 5s ease-in-out infinite" }}>
          {/* 3-D spinning cross */}
          <div
            style={{
              position: "relative",
              width: BW,
              height: BW,
              transformStyle: "preserve-3d",
              animation: "crossSpin 11s linear infinite",
            }}
          >
            {/* ─── HORIZONTAL BEAM ─── */}
            {/* front */}
            <div style={face(0, (BW-BH)/2, BW, BH, `translateZ(${D}px)`,
              "linear-gradient(135deg,#FCA5A5 0%,#EF4444 25%,#DC2626 70%,#991B1B 100%)",
              8, `0 0 30px rgba(220,38,38,0.55)`)} />
            {/* back */}
            <div style={face(0, (BW-BH)/2, BW, BH, `translateZ(${-D}px)`,
              "#7F1D1D", 8)} />
            {/* top edge */}
            <div style={face(0, (BW-BH)/2, BW, D*2,
              `translateY(-${D}px) rotateX(-90deg)`,
              "linear-gradient(to right,#EF4444,#FECACA,#EF4444)", 0)} />
            {/* bottom edge */}
            <div style={face(0, (BW-BH)/2+BH, BW, D*2,
              `rotateX(90deg)`,
              "linear-gradient(to right,#9B1C1C,#DC2626,#9B1C1C)", 0)} />

            {/* ─── VERTICAL BEAM ─── */}
            {/* front */}
            <div style={face((BW-BH)/2, 0, BH, BW, `translateZ(${D}px)`,
              "linear-gradient(180deg,#FCA5A5 0%,#EF4444 25%,#DC2626 70%,#991B1B 100%)",
              8, `0 0 30px rgba(220,38,38,0.55)`)} />
            {/* back */}
            <div style={face((BW-BH)/2, 0, BH, BW, `translateZ(${-D}px)`,
              "#7F1D1D", 8)} />
            {/* right edge */}
            <div style={face((BW-BH)/2+BH, 0, D*2, BW,
              `rotateY(90deg)`,
              "linear-gradient(to bottom,#EF4444,#FECACA,#EF4444)", 0)} />
            {/* left edge */}
            <div style={face((BW-BH)/2, 0, D*2, BW,
              `translateX(-${D}px) rotateY(-90deg)`,
              "linear-gradient(to bottom,#9B1C1C,#DC2626,#9B1C1C)", 0)} />

            {/* ─── CENTER GEM ─── */}
            <div style={{
              position: "absolute",
              width: 32, height: 32,
              top: (BW-32)/2, left: (BW-32)/2,
              transform: `translateZ(${D+2}px)`,
              background: "radial-gradient(circle at 35% 35%, #FECACA 0%, #EF4444 60%, #991B1B 100%)",
              borderRadius: 6,
              boxShadow: "0 0 22px rgba(252,165,165,0.9)",
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Helper: builds inline style for an absolutely-positioned face */
function face(
  left: number, top: number,
  w: number, h: number,
  transform: string,
  background: string,
  borderRadius: number,
  boxShadow = ""
): React.CSSProperties {
  return {
    position: "absolute",
    left, top, width: w, height: h,
    transform,
    background,
    borderRadius,
    ...(boxShadow ? { boxShadow } : {}),
  };
}
