import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 md:py-10 border-t border-border/60">
      <div className="container-narrow flex flex-col items-center gap-4 px-4">
        
        <div className="flex gap-6 text-muted text-base md:text-sm">
          <a
            href="https://github.com/EmamaNoor"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/emamanoor/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>

        <p className="font-mono text-[11px] md:text-xs text-muted text-center">
          Designed &amp; Built by Emama Noor
        </p>
      </div>
    </footer>
  );
};