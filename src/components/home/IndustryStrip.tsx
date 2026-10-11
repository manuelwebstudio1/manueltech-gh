"use client";

import { useEffect, useRef } from "react";

const industries = [
  "Real Estate",
  "Construction",
  "Retail & E-commerce",
  "Education",
  "Hospitality",
  "Healthcare",
  "Logistics",
  "Professional Services",
];

const loop = [...industries, ...industries];

export function IndustryStrip() {
  const trackRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      return;
    }

    let offset = 0;
    let frame = 0;
    const speed = 0.6;

    const tick = () => {
      const halfWidth = track.scrollWidth / 2;
      offset -= speed;
      if (halfWidth > 0 && Math.abs(offset) >= halfWidth) {
        offset = 0;
      }
      track.style.transform = `translate3d(${offset}px, 0, 0)`;
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="sticky top-16 z-40 overflow-hidden border-b border-line bg-white md:top-[72px]">
      <p className="pt-3 text-center text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
        Built for businesses across industries
      </p>

      <div className="industry-ticker mt-2 pb-3" role="region" aria-label="Industries we serve">
        <ul ref={trackRef} className="industry-ticker-track">
          {loop.map((item, index) => {
            const duplicate = index >= industries.length;
            return (
              <li key={`${item}-${index}`} className="industry-ticker-item" aria-hidden={duplicate || undefined}>
                <span>{item}</span>
                <span className="h-1 w-1 rounded-full bg-ink/20" aria-hidden />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
