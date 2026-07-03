"use client";

import { motion, useReducedMotion } from "framer-motion";
import { artIcons, IconCamera } from "@/components/icons";

// Tone → gradient + ink colours. `dark` tiles flip caption/tag to light ink.
const tones = {
  blush: { bg: "linear-gradient(150deg,#F6E1DA 0%,#EBC6BB 55%,#E0B2A6 100%)", ink: "#9A5A4E", dark: false },
  rose: { bg: "linear-gradient(150deg,#EEC9C0 0%,#DDA396 60%,#CE8B7D 100%)", ink: "#8A4A3E", dark: false },
  caramel: { bg: "linear-gradient(150deg,#E7BC93 0%,#C98A55 55%,#B0743E 100%)", ink: "#6E4522", dark: false },
  sand: { bg: "linear-gradient(150deg,#EFE2CE 0%,#DEC7A6 60%,#CBB088 100%)", ink: "#7A5E3C", dark: false },
  gold: { bg: "linear-gradient(150deg,#ECDBB0 0%,#D3B067 60%,#C09B4E 100%)", ink: "#6E5322", dark: false },
  cocoa: { bg: "linear-gradient(150deg,#6C5341 0%,#4A3728 55%,#33251A 100%)", ink: "#EBD9C4", dark: true },
  espresso: { bg: "linear-gradient(150deg,#3B2C21 0%,#2A2019 60%,#1E1610 100%)", ink: "#E6CFB6", dark: true },
};

/**
 * Art-directed image placeholder.
 * Renders a designed tile (gradient + grain + pastry line-art) and, unless
 * hidden, the exact photograph that belongs here — so the café owner can drop
 * in real @ambroziacafeandpatisserie imagery without guessing.
 */
export default function Placeholder({
  art = "macaron",
  tone = "sand",
  label,
  aspect = "aspect-[4/5]",
  rounded = "rounded-3xl",
  className = "",
  iconClassName = "",
  float = false,
  showTag = true,
  children,
}) {
  const reduce = useReducedMotion();
  const t = tones[tone] || tones.sand;
  const Art = artIcons[art] || artIcons.macaron;
  const inkSoft = t.dark ? "rgba(235,217,196,0.16)" : "rgba(255,255,255,0.35)";

  return (
    <div
      className={`grain relative isolate overflow-hidden ${rounded} ${aspect} ${className}`}
      style={{ background: t.bg }}
      role="img"
      aria-label={label || `${art} photograph placeholder`}
    >
      {/* soft top-light sheen */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 50% 0%, rgba(255,255,255,0.28), transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* large decorative line-art */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ color: inkSoft }}
        aria-hidden="true"
        animate={float && !reduce ? { y: [0, -10, 0] } : undefined}
        transition={
          float && !reduce
            ? { duration: 7, repeat: Infinity, ease: "easeInOut" }
            : undefined
        }
      >
        <Art className={`h-2/5 w-2/5 ${iconClassName}`} strokeWidth={1} />
      </motion.div>

      {/* corner monogram for a finished, branded feel */}
      <span
        className="absolute right-4 top-4 font-display text-sm italic"
        style={{ color: t.dark ? "rgba(235,217,196,0.55)" : "rgba(42,32,25,0.4)" }}
        aria-hidden="true"
      >
        Ambrozia
      </span>

      {/* art-direction caption */}
      {showTag && label && (
        <div className="absolute inset-x-3 bottom-3">
          <div
            className="flex items-center gap-2 rounded-2xl px-3.5 py-2.5 backdrop-blur-sm"
            style={{
              background: t.dark ? "rgba(20,14,10,0.34)" : "rgba(251,246,239,0.55)",
              color: t.ink,
            }}
          >
            <IconCamera size={15} className="shrink-0 opacity-80" />
            <span className="font-sans text-[0.7rem] leading-snug tracking-wide">
              {label}
            </span>
          </div>
        </div>
      )}

      {children}
    </div>
  );
}
