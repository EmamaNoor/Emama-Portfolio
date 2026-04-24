import { useState } from "react";
import { Folder, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const featured = [
  {
    name: "Splash",
    description:
      "An influencer marketing platform with role-based portals for brands, influencers and admins. Includes an AI recommendation engine using MiniLM embeddings + cosine similarity, AES-256-GCM encrypted in-app messaging, affiliate click analytics, and Stripe billing.",
    stack: ["Next.js", "Drizzle ORM", "Xenova", "Stripe", "SQLite"],
    image: "/splash-frontpage.png",
    github: "https://github.com/Haroon-12/Splash",
  },
  {
    name: "E2E Secure Messenger",
    description:
      "Built an end-to-end encrypted messaging system using AES-256-GCM for client-side encryption and RSA-2048 for secure key exchange. Implemented a custom ECDH key exchange with RSA-PSS signatures and HKDF to prevent man-in-the-middle attacks, along with replay protection using nonces and sequence numbers.",
    stack: ["React.js", "Node.js", "Web Crypto API", "Socket.io", "MongoDB"],
    image: "/e2e-frontpage.png",
    github: "https://github.com/Haroon-12/E2EMessaging",
  },
];

const others = [
  { name: "Realtime Chat", desc: "Encrypted messaging app with presence and typing indicators.", stack: ["Next.js", "Supabase", "Tailwind"] },
  { name: "AI Resume Parser", desc: "Pipeline that extracts and scores resumes against job descriptions.", stack: ["Python", "FastAPI", "spaCy"] },
  { name: "Markdown Notes", desc: "Minimal local-first notes app with full-text search.", stack: ["React", "IndexedDB"] },
  { name: "Crypto Tracker", desc: "Live dashboard tracking portfolio performance and alerts.", stack: ["Next.js", "Recharts"] },
  { name: "Habit Loop", desc: "Tiny habit tracker with streaks and weekly retros.", stack: ["React Native", "Expo"] },
  { name: "DevBoard", desc: "A developer-focused kanban with GitHub issue sync.", stack: ["Next.js", "tRPC", "Prisma"] },
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
                    className="w-full h-56 sm:h-72 md:h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
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

                  <div className="w-full md:max-w-[25rem] bg-black/85 backdrop-blur-sm border border-white/10 text-white p-5 md:p-7 shadow-2xl leading-relaxed text-sm md:text-base">
                    {p.description}
                  </div>

                  <div
                    className={cn(
                      "flex flex-wrap gap-x-4 gap-y-2 mt-4 font-mono text-xs text-muted",
                      reverse
                        ? "md:ml-6"
                        : "md:justify-end md:-mr-[12px]"
                    )}
                  >
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>

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
        <p className="font-mono text-sm text-primary text-center mb-10 md:mb-12">
          view the archive
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {visible.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <div className="group h-full bg-card rounded-2xl p-5 md:p-6 shadow-soft hover:shadow-lift md:hover:-translate-y-2 transition-smooth flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <Folder className="text-primary" size={34} />
                <div className="flex gap-3 text-foreground">
                  <a href="#" aria-label="GitHub" className="hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                </div>
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