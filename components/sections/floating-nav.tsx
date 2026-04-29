"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "2rem",
        left: "50%",
        zIndex: 50,
        transform: "translateX(-50%)",
        pointerEvents: "none",
      }}
    >
      {/* Outer: slide up / fade */}
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 48, opacity: 0 }}
        transition={
          isVisible
            ? { type: "spring", stiffness: 320, damping: 28 }
            : { type: "spring", stiffness: 320, damping: 35, delay: 0.08 }
        }
        style={{ pointerEvents: isVisible ? "auto" : "none" }}
      >
        {/* Pill: scaleX from center — bouncy enter, smooth exit */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
          transition={
            isVisible
              ? { type: "spring", stiffness: 260, damping: 20, delay: 0.05 }
              : { type: "spring", stiffness: 320, damping: 38, delay: 0.05 }
          }
          style={{
            transformOrigin: "center",
            borderRadius: "1rem",
            background: "rgba(24, 24, 27, 0.92)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6)",
            border: "1px solid rgba(63,63,70,0.5)",
          }}
        >
          {/* Content: fades in AFTER pill expands, fades out immediately */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={
              isVisible ? { delay: 0.55, duration: 0.2 } : { duration: 0.07 }
            }
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              padding: "0.375rem 0.5rem",
              whiteSpace: "nowrap",
            }}
          >
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "white",
                borderRadius: "0.5rem",
                width: "2.25rem",
                height: "2.25rem",
                flexShrink: 0,
              }}
            >
              <img
                src="/brief_logo.png"
                alt="Brief"
                style={{
                  width: "1.75rem",
                  height: "1.75rem",
                  objectFit: "contain",
                }}
              />
            </Link>
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                padding: "0 0.5rem",
              }}
            >
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
              >
                How it Works
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
              >
                Pricing
              </Link>
            </nav>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                paddingLeft: "0.5rem",
              }}
            >
              <Link
                href="/login"
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Button
                variant="secondary"
                className="rounded-lg bg-white text-zinc-900 hover:bg-zinc-200 h-9 px-5"
              >
                Sign up
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
