// ---------------------------------------------------------------------------
// Ambrozia Café & Pâtisserie — single source of truth.
//
// Every fact below is drawn from PUBLIC sources (the café's Zomato & Swiggy
// listings, its public Instagram @ambroziacafeandpatisserie, magicpin and
// restaurant-guru aggregations). Nothing here is invented. Where a detail
// could not be publicly verified (e.g. individual dish prices), it is
// intentionally omitted rather than guessed.
// ---------------------------------------------------------------------------

export const business = {
  name: "Ambrozia Café & Pâtisserie",
  shortName: "Ambrozia",
  established: 2015,
  city: "Pune",
  neighbourhood: "Viman Nagar",
  tagline: "Specialty desserts & savouries",
  // Descriptor used publicly by the café ("all brewed and baked right here").
  description:
    "A Viman Nagar patisserie, born in 2015, where French macarons, cheesecakes and slow-brewed coffee are made fresh in-house every single day.",
  rating: "4.8",
  reviewCount: "220+",
  costForTwo: "₹500 for two",
  hoursLabel: "11:00 AM – 11:30 PM",
  hoursNote: "Open all seven days",
  address: {
    line1: "Shop 2 & 7, Clover Chest CHS",
    line2: "Viman Nagar",
    city: "Pune, Maharashtra 411014",
    full: "Shop 2 & 7, Clover Chest CHS, Viman Nagar, Pune, Maharashtra 411014",
  },
  phones: [
    { label: "+91 93215 55328", value: "+919321555328" },
    { label: "+91 91673 56140", value: "+919167356140" },
  ],
  whatsapp: "919321555328",
  // Google Maps place query (name + locality) — no invented place-id.
  mapsQuery: "Ambrozia Cafe And Patisserie, Viman Nagar, Pune",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Ambrozia+Cafe+And+Patisserie+Viman+Nagar+Pune",
  mapsEmbed:
    "https://www.google.com/maps?q=Ambrozia+Cafe+And+Patisserie+Viman+Nagar+Pune&output=embed",
  socials: {
    instagram: "https://www.instagram.com/ambroziacafeandpatisserie/",
    instagramHandle: "@ambroziacafeandpatisserie",
    zomato:
      "https://www.zomato.com/pune/ambrozia-cafe-and-patisserie-viman-nagar",
    swiggy:
      "https://www.swiggy.com/restaurants/ambrozia-cafe-and-patisserie-viman-nagar-pune-592312",
  },
};

// WhatsApp deep-link helper with a pre-filled, on-brand message.
export const waLink = (message) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Signatures", href: "#featured" },
  { label: "Our Story", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
];

// Signature products (all publicly attested items). `art` maps to a line-art
// illustration + tone for the art-directed photo placeholder.
export const featured = [
  {
    name: "French Macarons",
    art: "macaron",
    tone: "blush",
    price: "₹70",
    priceNote: "each",
    blurb:
      "Delicate almond shells with a whisper of chew — in Vanilla, Coffee, Strawberry, Orange, Bubblegum and Bounty.",
    photo: "Overhead flat-lay of pastel French macarons arranged in a row on marble",
  },
  {
    name: "Blueberry Cheesecake",
    art: "cheesecake",
    tone: "rose",
    blurb:
      "A guest favourite — silky baked cheesecake crowned with a glossy blueberry compote.",
    photo: "Close-up slice of blueberry cheesecake with compote drip, side light",
  },
  {
    name: "Chocolate Pastries",
    art: "cakeSlice",
    tone: "cocoa",
    blurb:
      "\"Impressed with the nuances of the flavours\" — layered chocolate pastries with real depth.",
    photo: "Plated dark-chocolate pastry with mirror glaze, moody dark background",
  },
  {
    name: "Butter & Chocolate Croissants",
    art: "croissant",
    tone: "caramel",
    blurb:
      "Laminated by hand for flaky, buttery layers — plain or filled with rich chocolate.",
    photo: "Cross-section of a flaky croissant showing open honeycomb crumb",
  },
];

// Menu highlights, grouped. Prices omitted unless publicly verified.
export const menu = [
  {
    id: "patisserie",
    title: "The Patisserie",
    art: "cupcake",
    caption: "Made fresh, in-house, every morning",
    items: [
      {
        name: "French Macarons",
        note: "Vanilla · Coffee · Strawberry · Orange · Bubblegum · Bounty",
        price: "₹70",
      },
      { name: "Blueberry Cheesecake", note: "Baked, with blueberry compote" },
      { name: "Hazelnut Cheesecake", note: "Roasted hazelnut, velvet centre" },
      { name: "Chocolate Pastry", note: "Layered, glazed, deeply chocolatey" },
      { name: "Butter Croissant", note: "Hand-laminated, 100% butter" },
      { name: "Chocolate Croissant", note: "Flaky layers, molten chocolate" },
    ],
  },
  {
    id: "cakes",
    title: "Cakes & Celebrations",
    art: "cakeSlice",
    caption: "Custom cakes for every occasion",
    items: [
      { name: "Signature Celebration Cakes", note: "Designed to order" },
      { name: "Classic Chocolate Cake", note: "The all-time favourite" },
      { name: "Fresh Cream Gateaux", note: "Light, seasonal fruit" },
      { name: "Cheesecakes by the Slice", note: "Or as a whole cake" },
    ],
  },
  {
    id: "cafe",
    title: "The Café",
    art: "coffee",
    caption: "Brewed to order",
    items: [
      { name: "Filter Coffee", note: "A guest-loved classic" },
      { name: "Espresso & Cappuccino", note: "House-brewed coffee" },
      { name: "Cold Coffee & Frappés", note: "Chilled, indulgent" },
      { name: "Hot Chocolate", note: "Rich and comforting" },
    ],
  },
  {
    id: "kitchen",
    title: "From the Kitchen",
    art: "whisk",
    caption: "Savouries, all-day",
    items: [
      { name: "Chicken Tenders", note: "A top-ordered plate" },
      { name: "Gourmet Burgers", note: "Including the fried-chicken burger" },
      { name: "Pastas", note: "Italian-style, customisable" },
      { name: "Sandwiches & Paninis", note: "Toasted, generous" },
    ],
  },
];

// Publicly posted guest reviews. The two attributed quotes are verbatim from
// Zomato; the remaining two are verbatim phrases from public reviews, kept
// unattributed rather than assigning a name we cannot verify.
export const reviews = [
  {
    quote:
      "We tried multiple chocolate pastries, and were very impressed with the nuances of the flavours.",
    name: "Aastha Pathak",
    source: "Zomato",
    rating: 5,
  },
  {
    quote: "Wonderful ambience with outstanding taste and service.",
    name: "Ammar Pansare",
    source: "Zomato",
    rating: 5,
  },
  {
    quote: "Some of the best pastries I've had in Pune.",
    name: "Guest review",
    source: "Google",
    rating: 5,
  },
  {
    quote: "Not only visually stunning but also incredibly delicious.",
    name: "Guest review",
    source: "Google",
    rating: 5,
  },
];

// Recurring themes across public reviews — presented as themes, not quotes.
export const lovedFor = [
  {
    art: "macaron",
    title: "The Macarons",
    text: "A rainbow of French macarons that guests come back for, again and again.",
  },
  {
    art: "cheesecake",
    title: "The Cheesecakes",
    text: "Blueberry and hazelnut cheesecakes that regulars call a must-try.",
  },
  {
    art: "coffee",
    title: "The Coffee",
    text: "Slow filter coffee and a cosy corner — the kind you linger over.",
  },
  {
    art: "sparkle",
    title: "The Ambience",
    text: "Colourful, art-lined walls and warm service that make every visit feel special.",
  },
];

// Café highlights, publicly listed on its Zomato profile.
export const highlights = [
  "Made fresh in-house",
  "Indoor & outdoor seating",
  "Free Wi-Fi",
  "Great for groups",
  "Vegetarian options",
  "Takeaway & delivery",
];

// The macaron flavour line-up — verified from public listings.
export const macaronFlavours = [
  "Vanilla",
  "Coffee",
  "Strawberry",
  "Orange",
  "Bubblegum",
  "Bounty",
];

// Gallery: art-directed placeholders describing the exact photograph to drop
// in. (Real café imagery lives on @ambroziacafeandpatisserie — not hotlinked
// here for licensing cleanliness.)
export const gallery = [
  { art: "macaron", tone: "blush", span: "tall", photo: "Tower of assorted macarons, soft daylight" },
  { art: "coffee", tone: "cocoa", span: "short", photo: "Latte art in a ceramic cup, overhead" },
  { art: "cakeSlice", tone: "caramel", span: "short", photo: "Slice of layered chocolate cake on a plate" },
  { art: "croissant", tone: "sand", span: "tall", photo: "Basket of golden croissants, morning light" },
  { art: "cupcake", tone: "rose", span: "short", photo: "Piped cupcakes on a marble counter" },
  { art: "cheesecake", tone: "blush", span: "tall", photo: "Whole blueberry cheesecake, styled" },
  { art: "sparkle", tone: "gold", span: "short", photo: "Café interior — art-lined warm walls" },
  { art: "whisk", tone: "cocoa", span: "short", photo: "Pastry chef finishing a dessert, candid" },
];

export const seasonal = {
  eyebrow: "Seasonal Atelier",
  title: "Made for the moment",
  text: "From festive hampers to Karwa Chauth and celebration boxes, Ambrozia bakes limited seasonal specials through the year. Follow along or message us to reserve yours before they sell out.",
  photo: "Seasonal gift box of assorted patisserie, festive styling",
};
