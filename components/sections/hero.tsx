"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LANDING_CONTENT } from "@/content/landing";
import { LogoIcon } from "../shared/logo";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// Colors the letter cycles through before settling on black
const RAINBOW = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#3b82f6",
  "#8b5cf6",
  "#d946ef",
  "#09090b",
];

function AnimatedLetter({ char, delay }: { char: string; delay: number }) {
  return (
    <motion.span
      style={{ display: "inline-block" }}
      initial={{ opacity: 0, y: 5, color: "#ef4444" }}
      animate={{ opacity: 1, y: 0, color: RAINBOW }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

export const Hero = () => {
  const content = LANDING_CONTENT.hero;
  const [proofIndex, setProofIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProofIndex((prev) => (prev + 1) % content.socialProof.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [content.socialProof.length]);

  // Pre-compute cumulative delays for each part
  const p1Len = content.headline.part1.length;
  const p2Len = content.headline.part2.length;
  const logoDelay = p1Len * 0.02;
  const p2Start = (p1Len + 2) * 0.02;
  const p3Start = (p1Len + p2Len + 4) * 0.02;

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Blurred Gradient Background */}
      <div className="absolute inset-x-0 top-0 z-0 h-[600px] w-full overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-[1400px] h-full opacity-60 dark:opacity-40">
          <div className="absolute left-[-5%] top-[-400px] w-[400px] h-[400px] rounded-full bg-violet-700 blur-[50px] mix-blend-screen" />
          <div className="absolute left-[10%] top-[-400px] w-[400px] h-[400px] rounded-full bg-indigo-700 blur-[50px] mix-blend-screen" />
          <div className="absolute left-[25%] top-[-320px] w-[400px] h-[400px] rounded-full bg-blue-700 blur-[50px] mix-blend-screen" />
          <div className="absolute left-[40%] top-[-350px] w-[400px] h-[400px] rounded-full bg-green-700 blur-[50px] mix-blend-screen" />
          <div className="absolute left-[55%] top-[-320px] w-[400px] h-[400px] rounded-full bg-yellow-500 blur-[50px] mix-blend-screen" />
          <div className="absolute left-[70%] top-[-400px] w-[400px] h-[400px] rounded-full bg-orange-700 blur-[50px] mix-blend-screen" />
          <div className="absolute left-[85%] top-[-400px] w-[400px] h-[400px] rounded-full bg-red-700 blur-[50px] mix-blend-screen" />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-32 pb-20">
        {/* Social Proof Ticker */}
        <div className="mb-8 inline-flex items-center rounded-full px-4 py-1.5 text-xs text-zinc-400 h-8">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 shrink-0 animate-pulse" />
          <AnimatePresence mode="wait">
            <motion.span
              key={proofIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {content.socialProof[proofIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter tracking-tight mb-8">
          <div className="flex items-center gap-5">
            <span>
              {content.headline.part1.split("").map((char, i) => (
                <AnimatedLetter key={i} char={char} delay={i * 0.02} />
              ))}
            </span>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: logoDelay,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <LogoIcon />
            </motion.div>
            <span>
              {content.headline.part2.split("").map((char, i) => (
                <AnimatedLetter
                  key={i}
                  char={char}
                  delay={p2Start + i * 0.02}
                />
              ))}
            </span>
          </div>
          <span className="inline-block mt-2 sm:mt-0">
            {content.headline.part3.split("").map((char, i) => (
              <AnimatedLetter key={i} char={char} delay={p3Start + i * 0.02} />
            ))}
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          className="text-md sm:text-sm font-inter text-zinc-600 mb-12 max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
        >
          {content.subheadline}
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col items-center gap-6 relative w-full sm:w-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.5, ease: "easeOut" }}
        >
          {content.handwrittenCta && (
            <div className="hidden md:block opacity-80 hover:opacity-100 transition-opacity">
              <div className="relative w-[350px] h-[80px]">
                <Image
                  src={content.handwrittenCta}
                  alt={content.handwrittenAlt}
                  fill
                  sizes="350px"
                  className="object-contain"
                />
              </div>
            </div>
          )}
          <Button
            size="lg"
            className="w-full relative top-[-60px] sm:w-auto py-3 px-6 flex gap-3 text-lg bg-black text-white rounded-full"
          >
            {content.cta}
            <IoIosArrowForward className="text-white w-7 h-7" />
          </Button>
        </motion.div>

        {/* Portal Logos */}
        {content.portalLogos && (
          <motion.div
            className="mt-24 flex flex-col items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-5">
              <div className="h-px w-[50px] bg-zinc-300" />
              <p className="text-xs text-muted-foreground tracking-wider">
                {content.portals}
              </p>
              <div className="h-px w-[50px] bg-zinc-300" />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-14 mt-10 w-full max-w-4xl">
              {content.portalLogos.map((logo, i) => (
                <motion.div
                  key={logo.src}
                  className="relative opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  transition={{
                    delay: 1.1 + i * 0.08,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={300}
                    height={100}
                    className={`object-contain ${logo.className}`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
