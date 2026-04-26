"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LANDING_CONTENT } from "@/content/landing";
import { LogoIcon } from "../shared/logo";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";

export const Hero = () => {
  const content = LANDING_CONTENT.hero;
  const [proofIndex, setProofIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setProofIndex((prev) => (prev + 1) % content.socialProof.length);
        setIsVisible(true);
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, [content.socialProof.length]);

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

      {/* Main Hero Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-32 pb-20">
        <div className="mb-8 inline-flex items-center rounded-full px-4 py-1.5 text-xs text-zinc-400 h-8">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 shrink-0 animate-pulse"></span>
          <div
            className={`grid transition-[grid-template-columns,opacity] duration-1000 ease-in-out ${isVisible ? "grid-cols-[1fr] opacity-100" : "grid-cols-[0fr] opacity-0"}`}
          >
            <div className="overflow-hidden whitespace-nowrap min-w-0">
              {content.socialProof[proofIndex]}
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-inter tracking-tight mb-8">
          <div className="flex items-center gap-5">
            <span>{content.headline.part1}</span>
            <LogoIcon />
            <span>{content.headline.part2}</span>
          </div>
          <span className="">{content.headline.part3}</span>
        </h1>

        <p className="text-md sm:text-sm font-inter text-zinc-600 mb-12 max-w-lg mx-auto leading-relaxed">
          {content.subheadline}
        </p>

        <div className="flex flex-col items-center gap-6 relative w-full sm:w-auto">
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
        </div>

        {content.portalLogos && (
          <div className="mt-24 flex flex-col items-center">
            <div className="flex items-center gap-5">
              <div className="h-px w-[50px] bg-zinc-300"></div>
              <p className="text-xs text-muted-foreground tracking-wider">
                {content.portals}
              </p>
              <div className="h-px w-[50px] bg-zinc-300"></div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-14 mt-10 w-full max-w-4xl">
              {content.portalLogos.map((logo) => (
                <div
                  key={logo.src}
                  className="relative opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={300}
                    height={100}
                    className={`object-contain ${logo.className}`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
