import { useEffect, useState } from "react";

export const Loader = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2600);
    return () => clearTimeout(t);
  }, []);

  // Geometry for the E (in px). Vertical spine on the left, three equal horizontals.
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  const W = isMobile ? 80 : 120; // horizontal stroke length
  const H = isMobile ? 150 : 220; // total height
  const T = isMobile ? 10 : 15; // stroke thickness 

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-700 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={done}
    >
      <div
        className="relative animate-[loader-fade_3s_ease-in-out_forwards]"
        style={{ width: W, height: H }}
      >
        {/* Soft sage radial glow behind the E */}
        <div
          className="absolute rounded-full opacity-0 animate-[glow-in_3s_ease-in-out_forwards] pointer-events-none"
          style={{
            width: W * 3,
            height: W * 3,
            left: W / 2 - (W * 3) / 2,
            top: H / 2 - (W * 3) / 2,
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.45) 0%, hsl(var(--primary) / 0.15) 30%, transparent 65%)",
            filter: "blur(20px)",
          }}
        />

        {/* Vertical spine — fades in after horizontals */}
        <span
          className="absolute opacity-0 animate-[spine-fade_0.8s_ease-out_forwards]"
          style={{
            left: 0,
            top: 0,
            width: T,
            height: H,
            backgroundColor: "hsl(var(--primary))",
            borderRadius: 2,
            animationDelay: "0.65s",
          }}
        />

        {/* Three equal horizontal strokes sliding in from the left */}
        {[0, (H - T) / 2, H - T].map((top, i) => (
          <span
            key={i}
            className="absolute animate-[stroke-slide_0.45s_cubic-bezier(0.22,1,0.36,1)_forwards]"
            style={{
              left: 0,
              top,
              width: W,
              height: T,
              backgroundColor: "hsl(var(--primary))",
              borderRadius: 2,
              transform: "translateX(-110%)",
              animationDelay: `${i * 0.12}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
