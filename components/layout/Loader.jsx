"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// Premium first-paint curtain. Content is already server-rendered underneath
// (good for SEO); this simply veils it for ~1.5s on load, then lifts. Skipped
// entirely for reduced-motion users.
export default function Loader() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce) {
      setDone(true);
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 1500);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-warm-radial"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="grain absolute inset-0" aria-hidden="true" />
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow mb-4 text-caramel-deep">Est. 2015 · Viman Nagar</span>
            <span className="font-display text-5xl font-medium tracking-tight text-espresso sm:text-6xl">
              Ambrozia
            </span>
            <span className="mt-1 font-display text-lg italic text-caramel">
              Café &amp; Pâtisserie
            </span>
            <div className="mt-7 h-[2px] w-40 overflow-hidden rounded-full bg-espresso/10">
              <motion.div
                className="h-full w-full origin-left rounded-full bg-caramel"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
