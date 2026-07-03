import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/data";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-sans",
});

const siteUrl = "https://ambrozia.in";
const description =
  "Ambrozia Café & Pâtisserie in Viman Nagar, Pune — French macarons, cheesecakes, celebration cakes and slow-brewed coffee, made fresh in-house since 2015. Rated 4.8★. Order on WhatsApp or visit us.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Ambrozia Café & Pâtisserie | French Macarons, Cakes & Coffee — Viman Nagar, Pune",
    template: "%s | Ambrozia Café & Pâtisserie",
  },
  description,
  keywords: [
    "Ambrozia Cafe",
    "patisserie Viman Nagar",
    "French macarons Pune",
    "cheesecake Pune",
    "celebration cakes Viman Nagar",
    "best cafe Viman Nagar",
    "bakery Pune",
    "custom cakes Pune",
  ],
  authors: [{ name: business.name }],
  creator: business.name,
  applicationName: business.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: business.name,
    title:
      "Ambrozia Café & Pâtisserie | Viman Nagar, Pune",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ambrozia Café & Pâtisserie | Viman Nagar, Pune",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "restaurant",
};

export const viewport = {
  themeColor: "#fbf6ef",
  width: "device-width",
  initialScale: 1,
};

// Rich structured data so the café earns a proper local/knowledge card.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: business.name,
  description,
  image: `${siteUrl}/opengraph-image`,
  url: siteUrl,
  telephone: business.phones[0].value,
  priceRange: "₹₹",
  servesCuisine: ["Patisserie", "Bakery", "Cafe", "Desserts", "Coffee"],
  foundingDate: String(business.established),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${business.address.line1}, ${business.address.line2}`,
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411014",
    addressCountry: "IN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: "224",
    bestRating: "5",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "11:00",
    closes: "23:30",
  },
  sameAs: [
    business.socials.instagram,
    business.socials.zomato,
    business.socials.swiggy,
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#featured"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-espresso focus:px-5 focus:py-2 focus:font-sans focus:text-sm focus:text-cream"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
