"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, business, waLink } from "@/lib/data";
import { IconMenu, IconClose, IconWhatsApp } from "@/components/icons";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const orderMsg = `Hi Ambrozia! I'd like to place an order.`;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-[120]"
    >
      <div
        className={`transition-all duration-500 ease-luxe ${
          scrolled
            ? "glass border-b border-espresso/[0.06] shadow-[0_6px_30px_-18px_rgba(42,32,25,0.4)]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-luxe flex h-[4.75rem] items-center justify-between">
          {/* Wordmark */}
          <a href="#home" className="group flex items-center gap-3" aria-label={`${business.name} — home`}>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-espresso font-display text-lg italic text-cream transition-transform duration-300 group-hover:-rotate-6">
              A
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl font-medium tracking-tight text-espresso">
                Ambrozia
              </span>
              <span className="font-sans text-[0.6rem] uppercase tracking-luxe text-mocha">
                Café &amp; Pâtisserie
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="link-underline font-sans text-sm text-cocoa/90 transition-colors hover:text-espresso"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button
              href={waLink(orderMsg)}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              icon={<IconWhatsApp size={18} />}
            >
              Order on WhatsApp
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/15 text-espresso transition-colors hover:bg-espresso/[0.05] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <IconClose size={22} /> : <IconMenu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="sheet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[4.75rem] z-[110] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-espresso/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ y: -18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -18, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-4 mt-3 overflow-hidden rounded-3xl border border-espresso/10 bg-cream p-5 shadow-lift"
            >
              <ul className="flex flex-col">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-espresso/[0.07] py-3.5 font-display text-2xl text-espresso"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <Button
                href={waLink(orderMsg)}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                className="mt-5 w-full"
                icon={<IconWhatsApp size={19} />}
                onClick={() => setOpen(false)}
              >
                Order on WhatsApp
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
