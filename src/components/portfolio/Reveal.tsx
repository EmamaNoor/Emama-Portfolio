import { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "h2" | "p" | "li";
}

export const Reveal = ({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) => {
  const { ref, visible } = useReveal();

  return (
    <Tag
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 md:translate-y-6",
        className
      )}
    >
      {children}
    </Tag>
  );
};