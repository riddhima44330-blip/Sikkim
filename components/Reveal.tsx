"use client";

import {
  useEffect,
  useRef,
  type ReactNode,
} from "react";

type RevealVariant = "up" | "down" | "left" | "right" | "zoom" | "fade";

export function Reveal({
  variant = "up",
  delay = 0,
  className = "",
  children,
  id,
}: {
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  children?: ReactNode;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-revealed");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.disconnect();
          }
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -7% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      data-reveal={variant}
      className={className}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
