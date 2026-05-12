import { Reveal } from "./Reveal";

export const Contact = () => {
  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(var(--secondary) / 0.45) 0%, transparent 60%)",
        }}
      />

      <div className="container-narrow text-center max-w-2xl px-4">
        <Reveal>
          <p className="font-mono text-sm text-primary mb-4">
            04. What's Next?
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-sm md:text-base text-muted leading-relaxed mb-10">
            I’m always open to new opportunities in building scalable systems. Whether you're hiring, building something that needs well-designed and reliable systems, or just want to connect, feel free to reach out!
          </p>
        </Reveal>

        <Reveal delay={300}>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=emamanoor7@gmail.com&su=Let's%20Connect&body=Hi%20Emama,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 md:px-8 md:py-4 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-smooth shadow-soft hover:shadow-lift hover:-translate-y-0.5"
          >
            Say Hello
          </a>
        </Reveal>
      </div>
    </section>
  );
};