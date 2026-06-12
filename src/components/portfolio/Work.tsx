import { useState } from "react";
import { Folder, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

interface FeaturedProject {
  name: string;
  description: string;
  stack: string[];
  image: string;
  github: string;
  extraLink?: {
    label: string;
    url: string;
  };
}

const featured: FeaturedProject[] = [
  {
    name: "Codely",
    description:
      "A browser-based interview simulator built with Next.js and Groq. It generates coding problems, watches you code in Monaco, drops hints when you're stuck, and scores your solution with specific feedback on what to fix.",
    stack: ["Next.js", "Route Handlers", "Groq", "TypeScript", "Monaco Editor", "Vercel"],
    image: "/ai-interviewer.png",
    github: "https://github.com/EmamaNoor/AI-Code-Interviewer",
  },
  {
    name: "LaunchMind",
    description:
      "A multi-agent system autonomously launching a micro-startup from a plain-text idea. Spans content generation, landing page development, social media copy and automated GitHub commits with self-correcting QA loops.",
    stack: ["Python", "GitHub API", "Slack API", "Prompt Engineering", "Render", "Vercel"],
    image: "/launchmind.png",
    github: "https://github.com/EmamaNoor/LaunchMind",
    extraLink: {
      label: "Generated Pages ↗",
      url: "https://github.com/EmamaNoor/LaunchMind-LandingPages",
    },
  },
];

const others = [
  {
    name: "MondAI",
    desc: "An AI-driven workflow automation for Monday.com using natural language commands. Enables conversational task execution with automated item creation, updates and status queries through memory-buffered context.",
    stack: ["n8n", "MCP", "Prompt Engineering"],
  },

  {
    name: "StaffSync",
    desc: "An HR automation suite integrating Slack for attendance and payroll management. Features timezone-aware natural language check-ins, automated checkout workflows and personalized salary slip delivery via private DMs.",
    stack: ["n8n", "Slack", "Workflow Automation"],
  },

  {
    name: "Splash",
    desc: "An influencer marketing platform with role-based portals for brands, influencers and admins. Includes an AI recommendation engine using MiniLM embeddings + cosine similarity, AES-256-GCM encrypted in-app messaging, affiliate click analytics, and Stripe billing.",
    stack: ["Next.js", "Drizzle ORM", "Stripe", "SQLite"],
    github: "https://github.com/Haroon-12/Splash",
  },
];

export const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? others : others.slice(0, 3);

  return (
    <section id="work" className="container-narrow py-16 md:py-32">
      <Reveal>
        <h2 className="section-heading">
          <span className="font-mono text-primary text-xl md:text-2xl">03.</span>
          Some Things I've Built
        </h2>
      </Reveal>

      <div className="space-y-16 md:space-y-32 mb-20 md:mb-24">
        {featured.map((p, i) => {
          const reverse = i % 2 === 1;

          return (
            <Reveal key={p.name}>
              <div
                className={cn(
                  "relative grid md:grid-cols-12 gap-5 md:gap-6 items-center",
                  reverse && "md:[direction:rtl]"
                )}
              >
                <a className="md:col-span-8 group relative block rounded overflow-hidden shadow-soft hover:shadow-lift transition-smooth [direction:ltr]">
                  <div className="absolute inset-0 z-10 bg-[#7d9b76]/90 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500" />

                  <img
                    src={p.image}
                    alt={p.name}
                    className={cn(
                      "grayscale group-hover:grayscale-0 transition-all duration-500 bg-black",
                      (p.name === "Codely" || p.name === "LaunchMind")
                        ? "w-full h-auto object-contain"
                        : "w-full h-56 sm:h-72 md:h-96 object-cover"
                    )}
                  />
                </a>

                <div
                  className={cn(
                    "z-10 [direction:ltr] mt-3 md:mt-0",
                    "md:col-span-5 md:absolute md:top-1/2 md:-translate-y-1/2",
                    reverse ? "md:left-0 md:text-left" : "md:right-0 md:text-right"
                  )}
                >
                  <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">
                    Featured Project
                  </p>

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {p.name}
                  </h3>

                  <div className={cn(
                    "w-full md:max-w-[25rem] bg-black/85 backdrop-blur-sm border border-white/10 text-white p-5 md:p-7 shadow-2xl leading-relaxed text-sm md:text-base",
                    !reverse && "md:ml-auto"
                  )}>
                    {p.description}
                  </div>

                  <div
                    className={cn(
                      "flex flex-wrap gap-x-4 gap-y-2 mt-4 font-mono text-xs text-muted leading-relaxed",
                      (p.name === "Codely" || p.name === "LaunchMind") && "max-w-[320px]",
                      reverse
                        ? "md:ml-0"
                        : "md:justify-end md:ml-auto"
                    )}
                  >
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>

                  {p.extraLink && (
                    <div
                      className={cn(
                        "mt-3",
                        reverse ? "text-left" : "text-right"
                      )}
                    >
                      <a
                        href={p.extraLink.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-primary hover:underline"
                      >
                        {p.extraLink.label}
                      </a>
                    </div>
                  )}

                  <div
                    className={cn(
                      "flex gap-4 mt-4 text-foreground",
                      !reverse && "md:justify-end"
                    )}
                  >
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <h3 className="font-display text-2xl md:text-3xl text-center text-foreground mb-3">
          Other Noteworthy Projects
        </h3>
        {/* <p className="font-mono text-sm text-primary text-center mb-10 md:mb-12">
          view the archive
        </p> */}
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-10 md:mt-14">
        {visible.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <div className="group h-full bg-card rounded-2xl p-5 md:p-6 shadow-soft hover:shadow-lift md:hover:-translate-y-2 transition-smooth flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <Folder className="text-primary" size={34} />
                {p.github && (
                  <div className="flex gap-3 text-foreground">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.name} GitHub`}
                      className="hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                )}
              </div>

              <h4 className="font-display text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {p.name}
              </h4>

              <p className="text-sm text-muted leading-relaxed flex-1">{p.desc}</p>

              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-6 font-mono text-xs text-muted">
                {p.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {others.length > 3 && (
        <div className="flex justify-center mt-10 md:mt-12">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="px-5 py-3 md:px-6 rounded-md border border-primary text-primary font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};