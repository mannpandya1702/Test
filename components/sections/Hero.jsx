"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { business, waLink, macaronFlavours } from "@/lib/data";
import { IconWhatsApp, IconStar, IconArrow } from "@/components/icons";
import Button from "@/components/ui/Button";
import Placeholder from "@/components/ui/Placeholder";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const yCopy = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden bg-warm-radial pt-28 sm:pt-32 lg:pt-36"
    >
      {/* soft decorative glows */}
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle,#E7C3B8,transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 top-1/2 h-80 w-80 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle,#C6A15B,transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-luxe relative grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24">
        {/* Copy */}
        <motion.div style={{ y: yCopy }} className="relative z-10 max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.55, ease }}
            className="eyebrow"
          >
            <span className="h-px w-6 bg-caramel/60" aria-hidden="true" />
            French Patisserie · Café · Est. 2015
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.62, ease }}
            className="mt-6 font-display text-[2.9rem] font-medium leading-[1.02] tracking-tight text-espresso sm:text-6xl lg:text-[4.4rem] text-balance"
          >
            Little works of art,{" "}
            <span className="italic text-caramel">made to be eaten.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.72, ease }}
            className="mt-6 max-w-lg font-sans text-base leading-relaxed text-mocha sm:text-lg text-pretty"
          >
            Ambrozia is Viman Nagar&apos;s neighbourhood patisserie — French
            macarons, cheesecakes and slow-brewed coffee, handcrafted fresh in
            our kitchen every single day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.82, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              href={waLink("Hi Ambrozia! I'd like to place an order.")}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              icon={<IconWhatsApp size={20} />}
            >
              Order on WhatsApp
            </Button>
            <Button href="#menu" variant="secondary" arrow>
              View the Menu
            </Button>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.95, ease }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <span className="flex items-center gap-1.5">
              <span className="flex text-gold">
                {[0, 1, 2, 3, 4].map((i) => (
                  <IconStar key={i} size={16} />
                ))}
              </span>
              <span className="font-sans text-sm font-medium text-espresso">
                {business.rating}
              </span>
              <span className="font-sans text-sm text-mocha">
                · {business.reviewCount} reviews
              </span>
            </span>
            <span className="hidden h-4 w-px bg-espresso/15 sm:block" aria-hidden="true" />
            <span className="font-sans text-sm text-mocha">
              Open daily · {business.hoursLabel}
            </span>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          style={{ y: yImg }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.6, ease }}
          className="relative z-0"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <Placeholder
              art="macaron"
              tone="blush"
              float
              aspect="aspect-[4/5]"
              rounded="rounded-[2.5rem]"
              className="shadow-lift ring-1 ring-espresso/[0.04]"
              label="Hero shot: a tower of pastel French macarons, soft natural light on marble"
            />

            {/* floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.05, ease }}
              className="glass absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-white/50 p-3.5 shadow-glass sm:-left-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-espresso text-cream">
                <IconStar size={20} className="text-gold" />
              </div>
              <div className="pr-2">
                <p className="font-display text-lg leading-none text-espresso">
                  Baked in-house
                </p>
                <p className="mt-1 font-sans text-xs text-mocha">
                  Fresh, every morning
                </p>
              </div>
            </motion.div>

            {/* floating flavour chip */}
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.15, ease }}
              className="glass absolute -right-2 top-8 rounded-full border border-white/50 px-4 py-2 shadow-glass sm:-right-6"
            >
              <p className="font-sans text-xs tracking-wide text-cocoa">
                {macaronFlavours.length} macaron flavours
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#featured"
        aria-label="Scroll to signatures"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.8 }}
        className="relative z-10 mx-auto mb-8 hidden w-fit flex-col items-center gap-2 text-mocha lg:flex"
      >
        <span className="font-sans text-[0.65rem] uppercase tracking-luxe">Scroll</span>
        <IconArrow size={16} className="rotate-90" />
      </motion.a>
    </section>
  );
}
