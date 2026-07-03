"use client";

import { business, nav, waLink } from "@/lib/data";
import {
  IconInstagram,
  IconWhatsApp,
  IconPin,
  IconClock,
  IconPhone,
} from "@/components/icons";
import Reveal from "@/components/ui/Reveal";

export default function Footer() {
  const year = 2025;
  return (
    <footer className="relative overflow-hidden bg-espresso text-cream/80">
      <div className="grain absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle,#b96f3d,transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-luxe relative pb-10 pt-20">
        <Reveal className="flex flex-col items-center text-center">
          <span className="font-sans text-xs uppercase tracking-luxe text-caramel-light">
            Est. 2015 · Viman Nagar, Pune
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium text-cream sm:text-5xl">
            Ambrozia
          </h2>
          <p className="mt-1 font-display text-lg italic text-caramel-light">
            Café &amp; Pâtisserie
          </p>
          <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-cream/60">
            Specialty desserts &amp; savouries — brewed and baked fresh, every
            single day.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 border-t border-cream/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Explore */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-wide2 text-cream/45">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link-underline font-sans text-sm text-cream/75 hover:text-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-wide2 text-cream/45">
              Visit
            </h3>
            <p className="mt-4 flex items-start gap-2.5 font-sans text-sm leading-relaxed text-cream/75">
              <IconPin size={17} className="mt-0.5 shrink-0 text-caramel-light" />
              <span>
                {business.address.line1},<br />
                {business.address.line2}, {business.address.city}
              </span>
            </p>
            <p className="mt-3 flex items-center gap-2.5 font-sans text-sm text-cream/75">
              <IconClock size={17} className="shrink-0 text-caramel-light" />
              {business.hoursLabel}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-wide2 text-cream/45">
              Reach us
            </h3>
            <ul className="mt-4 space-y-2.5">
              {business.phones.map((p) => (
                <li key={p.value}>
                  <a
                    href={`tel:${p.value}`}
                    className="flex items-center gap-2.5 font-sans text-sm text-cream/75 hover:text-cream"
                  >
                    <IconPhone size={16} className="shrink-0 text-caramel-light" />
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-wide2 text-cream/45">
              Follow along
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={business.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-sans text-sm text-cream/75 hover:text-cream"
              >
                <IconInstagram size={18} className="shrink-0 text-caramel-light" />
                {business.socials.instagramHandle}
              </a>
              <a
                href={waLink("Hi Ambrozia! I'd like to place an order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-sans text-sm text-cream/75 hover:text-cream"
              >
                <IconWhatsApp size={18} className="shrink-0 text-caramel-light" />
                Chat &amp; order
              </a>
              <div className="mt-1 flex gap-3">
                <a
                  href={business.socials.zomato}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-cream/20 px-3.5 py-1.5 font-sans text-xs text-cream/70 transition-colors hover:border-cream/50 hover:text-cream"
                >
                  Zomato
                </a>
                <a
                  href={business.socials.swiggy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-cream/20 px-3.5 py-1.5 font-sans text-xs text-cream/70 transition-colors hover:border-cream/50 hover:text-cream"
                >
                  Swiggy
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-7 sm:flex-row">
          <p className="font-sans text-xs text-cream/45">
            © {year} {business.name}. All rights reserved.
          </p>
          <p className="font-sans text-xs text-cream/40">
            Viman Nagar, Pune · Crafted with warmth.
          </p>
        </div>
      </div>
    </footer>
  );
}
