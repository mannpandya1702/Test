"use client";

import Reveal from "@/components/ui/Reveal";

// Consistent editorial section header: small tracked eyebrow, large Playfair
// title (with optional italic accent), and an optional lede.
export default function SectionHeading({
  eyebrow,
  title,
  accent,
  lede,
  align = "center",
  className = "",
}) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";
  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow mb-5">
            <span className="h-px w-6 bg-caramel/60" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="max-w-3xl font-display text-4xl font-medium leading-[1.08] text-espresso sm:text-5xl lg:text-[3.4rem] text-balance">
          {title}
          {accent && (
            <>
              {" "}
              <span className="italic text-caramel">{accent}</span>
            </>
          )}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={0.12}>
          <p
            className={`mt-5 max-w-xl font-sans text-base leading-relaxed text-mocha ${
              align === "left" ? "" : "mx-auto"
            } text-pretty`}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
