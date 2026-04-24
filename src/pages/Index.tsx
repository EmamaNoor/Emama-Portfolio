import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Work } from "@/components/portfolio/Work";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Loader } from "@/components/portfolio/Loader";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Loader />
      <Navbar />

      {/* Left social rail */}
      <aside className="hidden lg:flex fixed left-12 bottom-0 z-40 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-foreground/40 after:mt-2">
        <a href="https://github.com/EmamaNoor" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-primary hover:-translate-y-1 transition-all">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2.1.1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/emamanoor/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-primary hover:-translate-y-1 transition-all">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.3a1.7 1.7 0 110-3.4 1.7 1.7 0 010 3.4zM19 19h-3v-4.5c0-1.1-.4-1.8-1.4-1.8a1.5 1.5 0 00-1.4 1 2 2 0 00-.1.7V19h-3v-9h3v1.3a3 3 0 012.7-1.5c2 0 3.2 1.3 3.2 4z"/></svg>
        </a>
      </aside>

      {/* Right email rail */}
      <aside className="hidden lg:flex fixed right-12 bottom-0 z-40 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-foreground/40 after:mt-2">
        <a
          href="mailto:emamanoor7@gmail.com?subject=Let's Connect&body=Hi Emama,%0D%0A%0D%0AI’d like to connect with you."
          onClick={() => {
            navigator.clipboard.writeText("emamanoor7@gmail.com");
            alert("Email copied to clipboard!");
          }}
          className="font-mono text-xs tracking-widest text-muted hover:text-primary hover:-translate-y-1 transition-all [writing-mode:vertical-rl]"
        >
          emamanoor7@gmail.com
        </a>
      </aside>

      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
