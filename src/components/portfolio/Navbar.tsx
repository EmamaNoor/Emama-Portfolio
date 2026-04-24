import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      if (y > lastY && y > 80) setHidden(true);
      else setHidden(false);

      lastY = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-4 inset-x-0 z-50 transition-all duration-300",
        hidden ? "-translate-y-full" : "translate-y-0",
        scrolled
          ? "bg-background/70 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      )}
    >
      {/* Navbar */}
      <nav className="w-full max-w-[90rem] mx-auto flex items-center justify-between h-14 md:h-20 px-4 sm:px-6 md:px-4">
        
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display text-2xl md:text-4xl font-bold text-primary tracking-tight hover:opacity-80 transition-opacity"
          aria-label="Home"
        >
          E
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-sm font-medium"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="font-mono text-primary mr-1 text-xs">
                0{i + 1}.
              </span>
              {l.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-md mx-4 rounded-md shadow-soft",
          open ? "max-h-96 border border-border mt-2" : "max-h-0"
        )}
      >
        <div className="py-5 flex flex-col gap-4 px-5">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-foreground hover:text-primary transition-colors text-base"
            >
              <span className="font-mono text-primary mr-2 text-xs">
                0{i + 1}.
              </span>
              {l.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-block w-fit px-4 py-2 rounded-md border border-primary text-primary text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};