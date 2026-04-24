import { useState } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const jobs = [
  {
    company: "DijitalBrains",
    role: "Frontend Developer Intern",
    period: "Jul 2024 – Aug 2024",
    bullets: [
      "Built and shipped responsive web interfaces using React and Tailwind CSS for client-facing products.",
      "Integrated REST APIs to connect frontend components with backend services and render dynamic data.",
      "Collaborated with design and backend teams to deliver clean, pixel-accurate UI across multiple projects.",
      "Deployed production-ready applications on Vercel with continuous deployment via Git.",
    ],
  },
];

export const Experience = () => {
  const [active, setActive] = useState(0);
  const job = jobs[active];

  return (
    <section id="experience" className="container-narrow py-16 md:py-32">
      <Reveal>
        <h2 className="section-heading">
          <span className="font-mono text-primary text-xl md:text-2xl">02.</span>
          Where I've Worked
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-3xl">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {jobs.map((j, i) => (
              <button
                key={j.company}
                onClick={() => setActive(i)}
                className={cn(
                  "px-4 md:px-5 py-3 text-sm font-mono whitespace-nowrap text-left transition-all border-b-2 md:border-b-0 md:border-l-2",
                  active === i
                    ? "text-primary border-primary bg-secondary-soft/40"
                    : "text-muted border-border hover:text-primary hover:bg-card"
                )}
              >
                {j.company}
              </button>
            ))}
          </div>

          <div className="flex-1 min-h-0 md:min-h-[260px]">
            <h3 className="font-display text-lg md:text-2xl text-foreground">
              {job.role}{" "}
              <span className="text-primary">@ {job.company}</span>
            </h3>

            <p className="font-mono text-xs md:text-sm text-muted mt-2 mb-5">
              {job.period}
            </p>

            <ul className="space-y-3">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm md:text-base text-muted leading-relaxed">
                  <span className="text-primary mt-1 shrink-0">▹</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
};