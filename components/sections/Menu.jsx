"use client";

import { menu, business, macaronFlavours } from "@/lib/data";
import { artIcons, IconArrow } from "@/components/icons";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import Reveal from "@/components/ui/Reveal";

function MenuGroup({ group }) {
  const Icon = artIcons[group.art] || artIcons.cupcake;
  return (
    <div className="flex h-full flex-col rounded-[2rem] border border-espresso/[0.07] bg-cream/70 p-7 sm:p-8">
      <div className="flex items-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-espresso text-cream">
          <Icon className="h-7 w-7" strokeWidth={1.3} />
        </span>
        <div>
          <h3 className="font-display text-2xl font-medium text-espresso">
            {group.title}
          </h3>
          <p className="font-sans text-xs uppercase tracking-wide2 text-caramel-deep">
            {group.caption}
          </p>
        </div>
      </div>

      <ul className="mt-7 flex flex-1 flex-col gap-4">
        {group.items.map((item) => (
          <li key={item.name} className="flex flex-col">
            <div className="flex items-baseline gap-3">
              <span className="font-sans text-[0.95rem] font-medium text-espresso">
                {item.name}
              </span>
              <span className="mt-1 h-px flex-1 border-b border-dashed border-espresso/15" aria-hidden="true" />
              {item.price && (
                <span className="font-sans text-sm font-medium tabular-nums text-caramel-deep">
                  {item.price}
                </span>
              )}
            </div>
            {item.note && (
              <span className="mt-0.5 font-sans text-xs leading-relaxed text-mocha">
                {item.note}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="relative scroll-mt-24 overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-linen/60" aria-hidden="true" />

      <div className="container-luxe">
        <SectionHeading
          eyebrow="Menu Highlights"
          title="Sweet, savoury &"
          accent="everything nice"
          lede="A taste of the menu — from the patisserie counter to the kitchen. The full list lives on Zomato & Swiggy."
        />

        {/* Macaron flavour ribbon */}
        <Reveal delay={0.05} className="mt-12">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2.5 rounded-full border border-espresso/[0.08] bg-cream/70 px-5 py-4">
            <span className="font-sans text-xs uppercase tracking-wide2 text-caramel-deep">
              Macarons ₹70 —
            </span>
            {macaronFlavours.map((f) => (
              <span
                key={f}
                className="rounded-full bg-linen px-3 py-1 font-sans text-xs text-cocoa"
              >
                {f}
              </span>
            ))}
          </div>
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {menu.map((group) => (
            <RevealItem key={group.id} className="h-full">
              <MenuGroup group={group} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href={business.socials.zomato}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              arrow
            >
              Full menu on Zomato
            </Button>
            <Button
              href={business.socials.swiggy}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              arrow
            >
              Order on Swiggy
            </Button>
          </div>
          <p className="mt-5 text-center font-sans text-xs text-mocha">
            Approx. {business.costForTwo}. Prices may vary — please confirm on our delivery partners.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
