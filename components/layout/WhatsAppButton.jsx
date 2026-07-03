"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { business, waLink } from "@/lib/data";
import { IconWhatsApp } from "@/components/icons";

// Floating WhatsApp order button. Appears after the hero scrolls past, with a
// one-time gentle label reveal.
export default function WhatsAppButton() {
  const [show, setShow] = useState(false);
  const [hint, setHint] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!show) return;
    setHint(true);
    const t = setTimeout(() => setHint(false), 3600);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={waLink("Hi Ambrozia! I'd like to place an order.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="group fixed bottom-5 right-5 z-[130] flex items-center gap-3 sm:bottom-7 sm:right-7"
        >
          <AnimatePresence>
            {hint && (
              <motion.span
                initial={{ opacity: 0, x: 10, width: 0 }}
                animate={{ opacity: 1, x: 0, width: "auto" }}
                exit={{ opacity: 0, x: 10, width: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="hidden overflow-hidden whitespace-nowrap rounded-full bg-espresso px-4 py-2.5 font-sans text-sm text-cream shadow-lift sm:block"
              >
                Order on WhatsApp
              </motion.span>
            )}
          </AnimatePresence>
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#1FA855] text-white shadow-lift transition-transform duration-300 group-hover:scale-105">
            {/* live pulse ring */}
            <span className="absolute inset-0 animate-ping rounded-full bg-[#1FA855] opacity-30" aria-hidden="true" />
            <IconWhatsApp size={26} />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
