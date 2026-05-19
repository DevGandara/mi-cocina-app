"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    let readyFrameId = 0;
    let visibleFrameId = 0;

    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    element.classList.add("is-preparing", "is-ready");

    readyFrameId = window.requestAnimationFrame(() => {
      element.classList.remove("is-preparing");
    });

    const revealElement = () => {
      if (element.classList.contains("is-preparing")) {
        visibleFrameId = window.requestAnimationFrame(() => {
          element.classList.add("is-visible");
        });
        return;
      }

      element.classList.add("is-visible");
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealElement();
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    return () => {
      window.cancelAnimationFrame(readyFrameId);
      window.cancelAnimationFrame(visibleFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("landing-reveal", className)}
      data-reveal={direction}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
