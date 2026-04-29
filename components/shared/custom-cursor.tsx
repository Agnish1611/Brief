"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // stiffness controls how fast it chases; low damping = more overshoot/bounce
  const springX = useSpring(mouseX, { stiffness: 150, damping: 5, mass: 0.3 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 5, mass: 0.3 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-9999 rounded-full bg-black"
      style={{
        width: 15,
        height: 15,
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}
