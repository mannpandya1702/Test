// Line-art icon set — a single, consistent 1.5px-stroke visual language used
// across placeholders, cards and nav. No emoji anywhere in the UI.

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

// ---- Pastry line-art (decorative, aria-hidden) -----------------------------

export function Macaron(props) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...base} {...props}>
      <path d="M9 19c0-4.4 6.7-7.5 15-7.5S39 14.6 39 19c0 2.8-2.7 4.8-6 5.6H15c-3.3-.8-6-2.8-6-5.6Z" />
      <path d="M9 29c0-4.4 6.7-7.5 15-7.5S39 24.6 39 29c0 2.8-2.7 4.8-6 5.6H15c-3.3-.8-6-2.8-6-5.6Z" />
      <path d="M15 24.6c2.4 1.2 5.6 1.9 9 1.9s6.6-.7 9-1.9" />
      <path d="M13 16.5c1.2.7 2.2 1.1 3 1.3M20 14.4c.9.2 1.9.3 2.8.3" opacity="0.5" />
    </svg>
  );
}

export function Croissant(props) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...base} {...props}>
      <path d="M7 31c6-2 9-6 11-11 1.4-3.6 3-6 6-6s4.6 2.4 6 6c2 5 5 9 11 11-4 3-9 3-13 1.5-4-1.6-6-1.6-10 0C14 34 11 34 7 31Z" />
      <path d="M18 20c-1 3-2.5 5.4-4.5 7M30 20c1 3 2.5 5.4 4.5 7M24 16v10" opacity="0.6" />
    </svg>
  );
}

export function CakeSlice(props) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...base} {...props}>
      <path d="M10 20 24 13l14 7-14 6-14-6Z" />
      <path d="M10 20v10l14 6 14-6V20" />
      <path d="M24 26v10M14 22.5v9M34 22.5v9" opacity="0.5" />
      <circle cx="24" cy="11.5" r="1.4" />
    </svg>
  );
}

export function CoffeeCup(props) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...base} {...props}>
      <path d="M11 19h22v9a10 10 0 0 1-10 10h-2A10 10 0 0 1 11 28v-9Z" />
      <path d="M33 21h3.5a4.5 4.5 0 0 1 0 9H33" />
      <path d="M17 9c-1 2 1 3 0 5M23 8c-1 2 1 3 0 5M29 9c-1 2 1 3 0 5" opacity="0.6" />
    </svg>
  );
}

export function Cupcake(props) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...base} {...props}>
      <path d="M14 23h20l-2.5 14a2 2 0 0 1-2 1.7H18.5a2 2 0 0 1-2-1.7L14 23Z" />
      <path d="M13 23c0-3 2.4-4.7 5-4.8.4-3 3-4.7 6-4.7s5.6 1.7 6 4.7c2.6.1 5 1.8 5 4.8H13Z" />
      <path d="M20 23l1.5 15M28 23l-1.5 15" opacity="0.45" />
    </svg>
  );
}

export function Cheesecake(props) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...base} {...props}>
      <path d="M10 22h28v6a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4v-6Z" />
      <path d="M10 22c0-3.3 6.3-6 14-6s14 2.7 14 6" />
      <circle cx="19" cy="19.5" r="1.3" />
      <circle cx="26" cy="18.6" r="1.3" />
      <circle cx="31" cy="20.4" r="1.3" />
    </svg>
  );
}

export function Whisk(props) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...base} {...props}>
      <path d="M24 7v6" />
      <path d="M17 15h14l-2.2 15a5 5 0 0 1-9.6 0L17 15Z" />
      <path d="M24 15v20M19.5 15.6l1.6 18M28.5 15.6l-1.6 18" opacity="0.6" />
    </svg>
  );
}

export function Sparkle(props) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...base} {...props}>
      <path d="M24 8c1.2 7.5 4.5 10.8 12 12-7.5 1.2-10.8 4.5-12 12-1.2-7.5-4.5-10.8-12-12 7.5-1.2 10.8-4.5 12-12Z" />
      <path d="M37 9c.4 2.3 1.4 3.3 3.7 3.7-2.3.4-3.3 1.4-3.7 3.7-.4-2.3-1.4-3.3-3.7-3.7 2.3-.4 3.3-1.4 3.7-3.7Z" opacity="0.6" />
    </svg>
  );
}

export const artIcons = {
  macaron: Macaron,
  croissant: Croissant,
  cakeSlice: CakeSlice,
  coffee: CoffeeCup,
  cupcake: Cupcake,
  cheesecake: Cheesecake,
  whisk: Whisk,
  sparkle: Sparkle,
};

// ---- UI icons --------------------------------------------------------------

export function IconWhatsApp({ size = 22, ...props }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.02 3.2c-7.06 0-12.8 5.73-12.8 12.79 0 2.25.59 4.45 1.71 6.39L3.1 28.8l6.6-1.73a12.76 12.76 0 0 0 6.31 1.61h.01c7.05 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05a12.7 12.7 0 0 0-9.05-3.63Zm0 23.35h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.58 10.58 0 0 1-1.62-5.63c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.52c0 5.87-4.77 10.63-10.64 10.63Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54l-.6-.01c-.21 0-.55.08-.83.4-.29.32-1.09 1.07-1.09 2.62 0 1.54 1.12 3.03 1.28 3.24.16.21 2.2 3.36 5.33 4.71.74.32 1.32.51 1.78.66.75.24 1.43.2 1.97.12.6-.09 1.89-.77 2.15-1.52.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export function IconInstagram({ size = 20, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconPhone({ size = 20, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" {...base} {...props}>
      <path d="M5 4h3.5l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5V18a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function IconPin({ size = 20, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" {...base} {...props}>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconClock({ size = 20, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function IconStar({ size = 18, filled = true, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5Z" />
    </svg>
  );
}

export function IconArrow({ size = 18, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconMenu({ size = 24, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose({ size = 24, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconCamera({ size = 18, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" {...base} {...props}>
      <path d="M4 8h3l1.5-2.2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.2" />
    </svg>
  );
}
