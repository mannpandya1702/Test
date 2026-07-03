"use client";

import { IconArrow } from "@/components/icons";

// One button system, three intents. High-contrast "primary" is the dark
// espresso "chocolate" button; secondary is an outlined ghost; whatsapp is
// the brand-green order CTA.
const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium tracking-wide transition-all duration-300 ease-luxe focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer select-none";

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-[0.95rem]",
};

const variants = {
  primary:
    "bg-espresso text-cream shadow-soft hover:shadow-lift hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-espresso/25 bg-transparent text-espresso hover:border-espresso/60 hover:bg-espresso/[0.04]",
  whatsapp:
    "bg-[#1FA855] text-white shadow-soft hover:bg-[#188c47] hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0",
  gold:
    "bg-caramel text-cream shadow-soft hover:bg-caramel-deep hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0",
};

export default function Button({
  as = "a",
  variant = "primary",
  size = "lg",
  className = "",
  children,
  icon,
  arrow = false,
  ...props
}) {
  const Tag = as;
  return (
    <Tag
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon}
      <span>{children}</span>
      {arrow && (
        <IconArrow
          size={17}
          className="transition-transform duration-300 ease-luxe group-hover:translate-x-1"
        />
      )}
    </Tag>
  );
}
