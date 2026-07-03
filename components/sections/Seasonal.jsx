"use client";

import { seasonal, business, waLink } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Placeholder from "@/components/ui/Placeholder";
import { IconWhatsApp, IconInstagram } from "@/components/icons";

export default function Seasonal() {
  return (
    <section className="relative py-24 lg:py-28">
      <div className="container-luxe">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-espresso shadow-lift">
          <div className="grain absolute inset-0 opacity-30" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle,#C6A15B,transparent 70%)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle,#B96F3D,transparent 70%)" }}
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:p-16">
            {/* Copy */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-luxe text-caramel-light">
                  <span className="h-px w-6 bg-caramel-light/60" aria-hidden="true" />
                  {seasonal.eyebrow}
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-4xl font-medium leading-[1.08] text-cream sm:text-5xl text-balance">
                  {seasonal.title}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-cream/70 text-pretty">
                  {seasonal.text}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={waLink(
                      "Hi Ambrozia! I'd like to enquire about a custom celebration cake."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="gold"
                    icon={<IconWhatsApp size={19} />}
                  >
                    Enquire about a custom cake
                  </Button>
                  <Button
                    href={business.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    icon={<IconInstagram size={18} />}
                    className="border-cream/25 text-cream hover:border-cream/60 hover:bg-cream/[0.06]"
                  >
                    See seasonal specials
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Visual */}
            <Reveal delay={0.1} className="relative">
              <Placeholder
                art="cakeSlice"
                tone="gold"
                float
                aspect="aspect-[5/4]"
                rounded="rounded-[2rem]"
                className="ring-1 ring-cream/10"
                label={seasonal.photo}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
