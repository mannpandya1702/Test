"use client";

import { business, highlights } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import Placeholder from "@/components/ui/Placeholder";

const stats = [
  { value: "2015", label: "Baking since" },
  { value: "6", label: "Macaron flavours" },
  { value: "4.8★", label: "Guest rating" },
  { value: "Daily", label: "Made fresh" },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-linen/60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle,#E7C3B8,transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-luxe grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Visual collage */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative mx-auto max-w-md lg:mx-0 lg:max-w-none">
            <Placeholder
              art="cheesecake"
              tone="caramel"
              aspect="aspect-[4/5]"
              rounded="rounded-[2.25rem]"
              className="shadow-lift ring-1 ring-espresso/[0.04]"
              label="Our counter: a case of cheesecakes, pastries and cakes"
            />
            <div className="absolute -bottom-8 -right-4 w-40 sm:w-52 lg:-right-10">
              <Placeholder
                art="coffee"
                tone="cocoa"
                aspect="aspect-square"
                rounded="rounded-3xl"
                className="border-4 border-cream shadow-lift"
                label="A cup of our filter coffee"
              />
            </div>
            <div className="absolute -left-4 -top-6 hidden w-36 sm:block lg:-left-10">
              <Placeholder
                art="macaron"
                tone="blush"
                aspect="aspect-square"
                rounded="rounded-2xl"
                className="border-4 border-cream shadow-lift rotate-[-4deg]"
                label="Close-up of macarons"
              />
            </div>
          </div>
        </Reveal>

        {/* Story */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow mb-5">
              <span className="h-px w-6 bg-caramel/60" aria-hidden="true" />
              Our Story
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-medium leading-[1.1] text-espresso sm:text-5xl text-balance">
              A little patisserie in{" "}
              <span className="italic text-caramel">Viman Nagar</span>, since 2015.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-mocha text-pretty">
              <p>
                Ambrozia began in 2015 with a simple idea — that a
                neighbourhood deserves desserts made with real care. Everything
                is brewed and baked right here: delicate French macarons, baked
                cheesecakes, buttery croissants and cakes for every celebration.
              </p>
              <p>
                Over the years it has become one of Viman Nagar&apos;s
                best-loved corners — part patisserie, part café — where the
                coffee is slow, the pastries are honest, and there&apos;s always
                a warm welcome and a comfortable seat waiting.
              </p>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.15}>
            <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-espresso/[0.08] bg-espresso/[0.06] sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-cream/80 px-4 py-5 text-center">
                  <p className="font-display text-2xl font-medium text-espresso sm:text-[1.7rem]">
                    {s.value}
                  </p>
                  <p className="mt-1 font-sans text-[0.68rem] uppercase tracking-wide2 text-mocha">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Highlights */}
          <Reveal delay={0.2}>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-full border border-espresso/12 bg-cream/70 px-4 py-2 font-sans text-xs text-cocoa"
                >
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
