'use client';

import type React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Runs on every navigation (unlike layout), so each route gets a subtle
// enter transition. Honors prefers-reduced-motion.
export default function Template({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
