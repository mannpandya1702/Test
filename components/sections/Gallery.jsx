"use client";

import { motion } from "framer-motion";
import { gallery, business } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Placeholder from "@/components/ui/Placeholder";
import { IconInstagram } from "@/components/icons";

const aspectFor = (span) => (span === "tall" ? "aspect-[3/4]" : "aspect-square");

export default function Gallery() {
  return (
    <section id="gallery" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="The Gallery"
          title="A feast for"
          accent="the eyes"
          lede="Every piece is finished by hand. Here's a taste of what comes out of our kitchen — swap in your favourites from Instagram."
        />

        <div className="mt-14 columns-2 gap-4 md:columns-3 lg:mt-16 lg:columns-4 [&>*]:mb-4">
          {gallery.map((g, i) => (
            <motion.a
              key={i}
              href={business.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative block break-inside-avoid overflow-hidden rounded-2xl shadow-soft"
              aria-label="View more on Instagram"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <Placeholder
                  src={g.img}
                  alt={g.alt}
                  art={g.art}
                  tone={g.tone}
                  aspect={aspectFor(g.span)}
                  rounded="rounded-2xl"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  showTag={false}
                  label={g.photo}
                />
              </motion.div>
              {/* hover veil + IG cue */}
              <div className="pointer-events-none absolute inset-0 flex items-end justify-between bg-gradient-to-t from-espresso/55 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                <span className="font-sans text-xs text-cream/90">View on Instagram</span>
                <IconInstagram size={20} className="text-cream" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
