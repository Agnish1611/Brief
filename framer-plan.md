# Framer Motion Migration Plan

## Files to Change

### 1. `package.json` — install `framer-motion`
### 2. `app/globals.css` — remove `@keyframes rainbowToCurrent` and `.animate-rainbow`
### 3. `components/shared/custom-cursor.tsx` — `useMotionValue` + `useSpring`
### 4. `components/sections/floating-nav.tsx` — `motion.div` + spring transitions + `AnimatePresence`
### 5. `components/sections/hero.tsx` — `motion.span` staggered children + keyframe color animation
