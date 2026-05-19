import { Reveal } from "./Reveal";

const technologies = [
  "Python",
  "n8n",
  "LangChain",
  "LangGraph",
  "RAG",
  "TypeScript",
  "FastAPI",
  "AWS",
];

export const About = () => {
  return (
    <section id="about" className="container-narrow py-16 md:py-32">
      <Reveal>
        <h2 className="section-heading">
          <span className="font-mono text-primary text-xl md:text-2xl">01.</span>
          About Me
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-5 gap-10 md:gap-12 items-start">
        <div className="md:col-span-3 space-y-5 text-muted leading-relaxed text-sm md:text-base">
          <Reveal delay={100}>
            <p>
              It started at a school hackathon where my team had 24 hours and a beat-up Arduino kit. We were trying to build a system that tracked campus energy usage across classrooms and flagged waste automatically. It barely worked by the final demo, but seeing code make a real-world decision, even a clunky one, was enough to pull me in completely. 
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p>
              Today I build workflow automation and agentic AI systems, connecting LLMs, APIs, and data pipelines to replace repetitive decision-making at scale, from early-stage MVPs to integrations that bring disconnected platforms into a single automated workflow.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="pt-4">
              Here are a few technologies I've been working with recently:
            </p>
          </Reveal>

          <Reveal delay={400}>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-sm pt-2">
              {technologies.map((t) => (
                <li key={t} className="flex items-center gap-2 text-muted">
                  <span className="text-primary">▹</span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal
          delay={200}
          className="md:col-span-2 flex justify-center md:justify-end"
        >
          <div className="relative group w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded border-2 border-primary transition-transform duration-500 md:group-hover:translate-x-4 md:group-hover:translate-y-4" />

            <div className="relative z-10 w-full h-full rounded overflow-hidden shadow-lift transition-transform duration-500 md:group-hover:-translate-x-2 md:group-hover:-translate-y-2">
              <div className="absolute inset-0 z-10 bg-[#7d9b76]/90 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500" />

              <img
                src="/me - xanders.jpeg"
                alt="Emama Noor"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};