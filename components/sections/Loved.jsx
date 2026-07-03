"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { reviews, lovedFor, business } from "@/lib/data";
import { artIcons, IconStar, IconArrow } from "@/components/icons";
import SectionHeading from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import Reveal from "@/components/ui/Reveal";

function ThemeCard({ item }) {
  const Icon = artIcons[item.art] || artIcons.sparkle;
  return (
    <div className="group flex h-full flex-col items-start rounded-3xl border border-espresso/[0.07] bg-cream/70 p-6 transition-all duration-500 ease-luxe hover:-translate-y-1 hover:border-caramel/30 hover:shadow-soft">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linen text-caramel-deep transition-colors duration-500 group-hover:bg-caramel group-hover:text-cream">
        <Icon className="h-6 w-6" strokeWidth={1.4} />
      </span>
      <h3 className="mt-5 font-display text-xl font-medium text-espresso">
        {item.title}
      </h3>
      <p className="mt-2 font-sans text-sm leading-relaxed text-mocha">
        {item.text}
      </p>
    </div>
  );
}

function Carousel() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const n = reviews.length;

  const go = useCallback((dir) => setI((p) => (p + dir + n) % n), [n]);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((p) => (p + 1) % n), 5200);
    return () => clearInterval(t);
  }, [reduce, n]);

  const r = reviews[i];

  return (
    <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2.25rem] border border-espresso/[0.07] bg-cream/80 px-6 py-12 text-center shadow-soft sm:px-14">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 opacity-60"
        style={{ background: "radial-gradient(60% 100% at 50% 0%, #F4ECE0, transparent)" }}
        aria-hidden="true"
      />
      <span className="pointer-events-none absolute left-6 top-4 font-display text-7xl leading-none text-caramel/20 sm:text-8xl" aria-hidden="true">
        &ldquo;
      </span>

      <div className="relative min-h-[9.5rem] sm:min-h-[8rem]">
        <AnimatePresence mode="wait">
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-4 flex justify-center gap-0.5 text-gold" aria-label={`${r.rating} out of 5`}>
              {Array.from({ length: r.rating }).map((_, k) => (
                <IconStar key={k} size={18} />
              ))}
            </div>
            <blockquote className="font-display text-2xl font-medium leading-snug text-espresso sm:text-[1.7rem] text-balance">
              {r.quote}
            </blockquote>
            <figcaption className="mt-5 font-sans text-sm text-mocha">
              <span className="font-medium text-cocoa">{r.name}</span>
              <span className="mx-2 text-espresso/25">·</span>
              via {r.source}
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous review"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 text-espresso transition-colors hover:bg-espresso hover:text-cream"
        >
          <IconArrow size={16} className="rotate-180" />
        </button>
        <div className="flex items-center gap-2">
          {reviews.map((_, k) => (
            <button
              key={k}
              type="button"
              onClick={() => setI(k)}
              aria-label={`Go to review ${k + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                k === i ? "w-6 bg-caramel" : "w-2 bg-espresso/20 hover:bg-espresso/40"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next review"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 text-espresso transition-colors hover:bg-espresso hover:text-cream"
        >
          <IconArrow size={16} />
        </button>
      </div>
    </div>
  );
}

export default function Loved() {
  return (
    <section id="loved" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Why guests love us"
          title="Loved by the"
          accent="neighbourhood"
          lede={`Rated ${business.rating}★ across ${business.reviewCount} guest reviews on Google, Zomato and Swiggy — here's what keeps them coming back.`}
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {lovedFor.map((item) => (
            <RevealItem key={item.title} className="h-full">
              <ThemeCard item={item} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-14">
          <Carousel />
        </Reveal>
      </div>
    </section>
  );
}
