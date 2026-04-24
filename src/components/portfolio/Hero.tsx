import { Linkedin } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center container-narrow pt-24 px-4"
    >
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 w-[260px] h-[260px] md:left-1/4 md:w-[420px] md:h-[420px] rounded-full -z-10 blur-3xl opacity-60 -translate-x-1/2 md:translate-x-0"
        style={{ background: "hsl(var(--secondary) / 0.55)" }}
      />

      <div className="max-w-3xl">
        {[
          <p key="1" className="font-mono text-sm md:text-lg text-primary mb-4 md:mb-5">
            Hi, my name is
          </p>,
          <h1 key="2" className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] mb-3">
            Emama Noor.
          </h1>,
          <h2 key="3" className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight mb-5 md:mb-6">
            I turn ideas into products.
          </h2>,
          <p key="4" className="text-muted text-sm md:text-lg max-w-2xl leading-relaxed mb-8 md:mb-10">
            I'm a full-stack developer specializing in crafting scalable, end-to-end digital products. I build clean, functional applications that are as solid under the hood as they look on the surface.
          </p>,
          <a
            key="5"
            href="https://www.linkedin.com/in/emamanoor/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 md:px-6 rounded-md bg-primary text-primary-foreground text-sm md:text-base font-medium hover:bg-primary/90 transition-smooth shadow-soft hover:shadow-lift hover:-translate-y-0.5"
          >
            <Linkedin size={18} />
            Connect on LinkedIn!
          </a>,
        ].map((node, i) => (
          <div
            key={i}
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${200 + i * 150}ms` }}
          >
            {node}
          </div>
        ))}
      </div>
    </section>
  );
};