import { useEffect, useState } from "react";

export const Loader = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0f1210] flex items-center justify-center transition-opacity duration-500 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={done}
    >
      <div className="relative w-32 h-32 sm:w-40 sm:h-40">
        {/* Soft glow */}
        <div className="absolute inset-0 rounded-full bg-[#7d9b76]/20 blur-3xl animate-[loader-glow_2s_ease-in-out_forwards]" />

        <svg
          viewBox="0 0 100 100"
          className="relative z-10 w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hexagon outline */}
          <path
            d="M50 6 L88 28 L88 72 L50 94 L12 72 L12 28 L50 6"
            stroke="#7d9b76"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-[draw-hex_1.25s_ease-in-out_forwards]"
          />

          {/* E */}
          <path
            d="
              M40 32 V68 
              M40 32 H62 
              M40 50 H58 
              M40 68 H62
            "
            stroke="#7d9b76"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="opacity-0 animate-[fade-e_0.7s_ease-out_1.2s_forwards]"
          />
        </svg>
      </div>

      <style>{`
        @keyframes draw-hex {
          0% {
            stroke-dasharray: 300;
            stroke-dashoffset: 300;
          }
          100% {
            stroke-dasharray: 300;
            stroke-dashoffset: 0;
          }
        }

        @keyframes fade-e {
          0% {
            opacity: 0;
            transform: scale(0.92);
            transform-origin: center;
          }
          100% {
            opacity: 1;
            transform: scale(1);
            transform-origin: center;
          }
        }

        @keyframes loader-glow {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          45% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};