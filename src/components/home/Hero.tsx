"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroSlider } from "@/components/home/HeroSlider";
import { siteConfig } from "@/config/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-[#07111F]">
      <HeroSlider />

      <Container className="relative z-10 flex min-h-[88vh] flex-col justify-center pt-28 pb-24 md:pt-32 md:pb-28">
        <div className="max-w-3xl">
          <motion.p
            className="text-[11px] font-semibold tracking-[0.28em] text-blue-bright uppercase md:text-xs"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            Full-stack development × Digital growth
          </motion.p>

          <motion.p
            className="mt-5 text-sm font-medium tracking-wide text-white/75"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.h1
            className="hero-title mt-4 text-white [text-shadow:0_8px_40px_rgb(7_17_31_/_0.55)]"
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            We Don&apos;t Just Build Websites.
            <span className="mt-1 block text-blue-bright">We Build Business Advantage.</span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-2xl text-base leading-8 text-white [text-shadow:0_2px_18px_rgb(7_17_31_/_0.75)] md:text-lg md:leading-8"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            We engineer premium websites and custom digital solutions that help
            businesses establish credibility, attract the right customers, and unlock
            new opportunities for growth.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
          >
            <ButtonLink href="/start-project" size="lg" className="hero-cta-primary">
              Start Your Project
              <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/work" variant="secondary" size="lg" className="hero-cta-secondary">
              Explore Our Work
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </ButtonLink>
          </motion.div>

          <motion.p
            className="mt-10 text-[13px] font-medium tracking-[0.12em] text-white/70 uppercase"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.28 }}
          >
            Strategic Approach · Custom Development · Built for Growth
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
