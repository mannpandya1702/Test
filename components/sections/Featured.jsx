"use client";

import { motion } from "framer-motion";
import { featured, waLink } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Placeholder from "@/components/ui/Placeholder";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { IconArrow } from "@/components/icons";

export default function Featured() {
  return (
    <section id="featured" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Our Signatures"
          title="The things we're"
          accent="known for"
          lede="A handful of everyday favourites — the ones guests message us about and come back for."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {featured.map((item) => (
            <RevealItem key={item.name}>
              <motion.a
                href={waLink(`Hi Ambrozia! I'd love to order the ${item.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover="hover"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-espresso/[0.07] bg-cream/60 shadow-soft transition-all duration-500 ease-luxe hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="relative overflow-hidden">
                  <motion.div
                    variants={{ hover: { scale: 1.06 } }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Placeholder
                      art={item.art}
                      tone={item.tone}
                      aspect="aspect-[4/5]"
                      rounded="rounded-none"
                      showTag={false}
                    />
                  </motion.div>
                  {item.price && (
                    <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1.5 font-sans text-xs font-medium text-espresso shadow-sm backdrop-blur-sm">
                      {item.price}
                      {item.priceNote ? (
                        <span className="text-mocha"> {item.priceNote}</span>
                      ) : null}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-medium text-espresso">
                    {item.name}
                  </h3>
                  <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-mocha">
                    {item.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-xs font-medium uppercase tracking-wide2 text-caramel-deep">
                    Order this
                    <IconArrow
                      size={15}
                      className="transition-transform duration-300 ease-luxe group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </motion.a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
