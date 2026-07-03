"use client";

import { motion, useReducedMotion } from "framer-motion";

const words = [
  "French Macarons",
  "Blueberry Cheesecake",
  "Butter Croissants",
  "Celebration Cakes",
  "Filter Coffee",
  "Chocolate Pastries",
  "Hazelnut Cheesecake",
  "Freshly Baked Daily",
];

function Track() {
  return (
    <div className="flex shrink-0 items-center">
      {words.map((w, i) => (
        <span key={i} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-display text-2xl italic text-cream/85 sm:text-3xl">
            {w}
          </span>
          <span className="text-caramel-light" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

// Seamless infinite marquee (two identical tracks translated -50%).
export default function Marquee() {
  const reduce = useReducedMotion();
  return (
    <section aria-hidden="true" className="relative overflow-hidden bg-espresso py-6">
      <div className="grain absolute inset-0 opacity-30" />
      {reduce ? (
        <div className="flex justify-center">
          <Track />
        </div>
      ) : (
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        >
          <Track />
          <Track />
        </motion.div>
      )}
    </section>
  );
}
