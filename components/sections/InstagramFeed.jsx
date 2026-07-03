"use client";

import { motion } from "framer-motion";
import { business } from "@/lib/data";
import Placeholder from "@/components/ui/Placeholder";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { IconInstagram } from "@/components/icons";

const tiles = [
  { art: "macaron", tone: "blush", img: "/images/macarons-stack.jpg", alt: "Stack of pastel macarons" },
  { art: "cakeSlice", tone: "caramel", img: "/images/drip-cake.jpg", alt: "Chocolate drip celebration cake" },
  { art: "coffee", tone: "cocoa", img: "/images/coffee-green.jpg", alt: "Coffee with latte art" },
  { art: "cupcake", tone: "rose", img: "/images/cupcakes-pastel.jpg", alt: "Pastel swirled cupcakes" },
  { art: "cheesecake", tone: "sand", img: "/images/choc-cream.jpg", alt: "Chocolate cream pastry" },
  { art: "croissant", tone: "gold", img: "/images/chef-flour.jpg", alt: "Baker dusting flour while baking" },
];

export default function InstagramFeed() {
  return (
    <section className="relative scroll-mt-24 py-24 lg:py-28">
      <div className="container-luxe">
        <Reveal className="flex flex-col items-center text-center">
          <span className="eyebrow mb-5">
            <span className="h-px w-6 bg-caramel/60" aria-hidden="true" />
            On Instagram
          </span>
          <h2 className="font-display text-4xl font-medium text-espresso sm:text-5xl">
            Follow the daily bake
          </h2>
          <a
            href={business.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-3 font-sans text-base text-caramel-deep"
          >
            {business.socials.instagramHandle}
          </a>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {tiles.map((t, i) => (
            <motion.a
              key={i}
              href={business.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative block overflow-hidden rounded-2xl shadow-soft"
              aria-label={`View ${business.socials.instagramHandle} on Instagram`}
            >
              <Placeholder
                src={t.img}
                alt={t.alt}
                art={t.art}
                tone={t.tone}
                aspect="aspect-square"
                rounded="rounded-2xl"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                showTag={false}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-espresso/45 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100">
                <IconInstagram size={26} className="text-cream" />
              </div>
            </motion.a>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <Button
            href={business.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            icon={<IconInstagram size={18} />}
          >
            Follow on Instagram
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
