"use client";

import { useCallback, useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { heroSlides } from "@/data/hero-slides";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 5000;

export function HeroSlider() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  const goTo = useCallback((next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (reduce) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [reduce, index]);

  return (
    <div
      className="absolute inset-0 z-0 h-full w-full"
      role="region"
      aria-roledescription="carousel"
      aria-label="ManuelTech GH visual highlights"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          goTo(index + 1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goTo(index - 1);
        }
      }}
    >
      {heroSlides.map((slide, slideIndex) => {
        const active = slideIndex === index;
        return (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fetchPriority={slideIndex === 0 ? "high" : "low"}
            decoding="async"
            className={cn(
              "hero-slide-image absolute inset-0 h-full min-h-full w-full object-cover object-center transition-opacity ease-in-out",
              reduce ? "duration-0" : "duration-[850ms]",
              active ? "opacity-100" : "opacity-0",
            )}
            aria-hidden={!active}
          />
        );
      })}

      <div className="hero-slide-overlay pointer-events-none absolute inset-0" />

      <div className="absolute right-0 bottom-6 left-0 z-20 flex flex-col items-center gap-3 px-4 sm:bottom-8">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-white/80 uppercase">
          {heroSlides[index].label}
        </p>
        <div className="flex items-center justify-center gap-2" role="tablist" aria-label="Hero slides">
          {heroSlides.map((slide, slideIndex) => {
            const active = slideIndex === index;
            return (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Show slide ${slideIndex + 1}: ${slide.label}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  active ? "w-8 bg-blue" : "w-2.5 bg-white/40 hover:bg-white/70",
                )}
                onClick={() => goTo(slideIndex)}
              />
            );
          })}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {heroSlides[index].label}
      </p>
    </div>
  );
}
