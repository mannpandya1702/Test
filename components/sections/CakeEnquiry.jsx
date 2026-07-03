"use client";

import { useState } from "react";
import { business, waLink } from "@/lib/data";
import { IconWhatsApp } from "@/components/icons";

const enquiryTypes = [
  "Custom celebration cake",
  "Bulk / party order",
  "Table reservation",
  "General enquiry",
];

const fieldBase =
  "w-full rounded-xl border border-espresso/15 bg-cream px-4 py-3 font-sans text-sm text-espresso placeholder:text-mocha/60 transition-colors focus:border-caramel focus:outline-none focus:ring-2 focus:ring-caramel/25";

export default function CakeEnquiry() {
  const [form, setForm] = useState({
    type: enquiryTypes[0],
    name: "",
    phone: "",
    date: "",
    details: "",
  });
  const [errors, setErrors] = useState({});

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please tell us your name.";
    if (!form.phone.trim()) next.phone = "A contact number helps us confirm.";
    else if (form.phone.replace(/\D/g, "").length < 10)
      next.phone = "That number looks a little short.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const lines = [
      `Hi Ambrozia! I'd like to make an enquiry.`,
      ``,
      `• Type: ${form.type}`,
      `• Name: ${form.name}`,
      `• Phone: ${form.phone}`,
      form.date ? `• Preferred date: ${form.date}` : null,
      form.details ? `• Details: ${form.details}` : null,
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="rounded-[2rem] border border-espresso/[0.08] bg-cream/80 p-7 shadow-soft sm:p-8">
      <h3 className="font-display text-2xl font-medium text-espresso">
        Enquire or reserve
      </h3>
      <p className="mt-2 font-sans text-sm leading-relaxed text-mocha">
        Planning a celebration or a big order? Share a few details and
        we&apos;ll pick it up on WhatsApp.
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
        <div>
          <label htmlFor="type" className="mb-1.5 block font-sans text-xs font-medium uppercase tracking-wide2 text-cocoa">
            I&apos;m interested in
          </label>
          <select id="type" value={form.type} onChange={set("type")} className={fieldBase}>
            {enquiryTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block font-sans text-xs font-medium uppercase tracking-wide2 text-cocoa">
              Name <span className="text-caramel">*</span>
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={set("name")}
              placeholder="Your name"
              className={fieldBase}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" role="alert" className="mt-1.5 font-sans text-xs text-rose">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="mb-1.5 block font-sans text-xs font-medium uppercase tracking-wide2 text-cocoa">
              Phone <span className="text-caramel">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={set("phone")}
              placeholder="10-digit mobile"
              className={fieldBase}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p id="phone-error" role="alert" className="mt-1.5 font-sans text-xs text-rose">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="date" className="mb-1.5 block font-sans text-xs font-medium uppercase tracking-wide2 text-cocoa">
            Preferred date <span className="font-normal text-mocha/70 normal-case tracking-normal">(optional)</span>
          </label>
          <input id="date" type="date" value={form.date} onChange={set("date")} className={fieldBase} />
        </div>

        <div>
          <label htmlFor="details" className="mb-1.5 block font-sans text-xs font-medium uppercase tracking-wide2 text-cocoa">
            Details <span className="font-normal text-mocha/70 normal-case tracking-normal">(optional)</span>
          </label>
          <textarea
            id="details"
            rows={3}
            value={form.details}
            onChange={set("details")}
            placeholder="Flavour, servings, occasion, timing…"
            className={`${fieldBase} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#1FA855] px-8 py-4 font-sans text-[0.95rem] font-medium text-white shadow-soft transition-all duration-300 ease-luxe hover:-translate-y-0.5 hover:bg-[#188c47] hover:shadow-lift"
        >
          <IconWhatsApp size={20} />
          Send on WhatsApp
        </button>
        <p className="text-center font-sans text-xs text-mocha">
          Opens WhatsApp with your details ready to send — or call us on{" "}
          <a href={`tel:${business.phones[0].value}`} className="text-caramel-deep underline underline-offset-2">
            {business.phones[0].label}
          </a>
          .
        </p>
      </form>
    </div>
  );
}
