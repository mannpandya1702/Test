"use client";

import { business, waLink } from "@/lib/data";
import { IconPin, IconClock, IconPhone, IconWhatsApp, IconArrow } from "@/components/icons";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import CakeEnquiry from "@/components/sections/CakeEnquiry";

function InfoCard({ icon, label, children }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-espresso/[0.07] bg-cream/70 p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linen text-caramel-deep">
        {icon}
      </span>
      <div>
        <p className="font-sans text-xs font-medium uppercase tracking-wide2 text-mocha">
          {label}
        </p>
        <div className="mt-1 font-sans text-sm leading-relaxed text-espresso">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Visit() {
  return (
    <section id="visit" className="relative scroll-mt-24 py-24 lg:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Visit Us"
          title="Find us in"
          accent="Viman Nagar"
          lede="Come in for a coffee and a corner to linger, or order ahead — we're open all week."
        />

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {/* Info + CTAs */}
          <Reveal className="flex flex-col gap-4">
            <InfoCard icon={<IconPin size={20} />} label="Address">
              {business.address.line1},<br />
              {business.address.line2}, {business.address.city}
              <br />
              <a
                href={business.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-flex items-center gap-1 font-medium text-caramel-deep link-underline"
              >
                Get directions <IconArrow size={14} />
              </a>
            </InfoCard>

            <InfoCard icon={<IconClock size={20} />} label="Opening hours">
              {business.hoursLabel}
              <br />
              <span className="text-mocha">{business.hoursNote}</span>
            </InfoCard>

            <InfoCard icon={<IconPhone size={20} />} label="Call us">
              <div className="flex flex-col gap-0.5">
                {business.phones.map((p) => (
                  <a
                    key={p.value}
                    href={`tel:${p.value}`}
                    className="hover:text-caramel-deep"
                  >
                    {p.label}
                  </a>
                ))}
              </div>
            </InfoCard>

            <div className="mt-1 flex flex-col gap-3 sm:flex-row">
              <Button
                href={waLink("Hi Ambrozia! I'd like to place an order.")}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                icon={<IconWhatsApp size={19} />}
                className="flex-1"
              >
                Order on WhatsApp
              </Button>
              <Button
                href={business.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="flex-1"
                arrow
              >
                Get directions
              </Button>
            </div>

            {/* Map embed */}
            <div className="relative mt-2 overflow-hidden rounded-[2rem] border border-espresso/[0.08] shadow-soft">
              <iframe
                title={`Map to ${business.name}, Viman Nagar, Pune`}
                src={business.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full grayscale-[0.15] sm:h-80"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </Reveal>

          {/* Enquiry form */}
          <Reveal delay={0.1}>
            <CakeEnquiry />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
