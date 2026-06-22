import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ink & Iron Studio | Tattoo & Piercing in Tucson, AZ",
  description:
    "Premium custom tattoo and professional piercing studio in Tucson, Arizona. Specializing in custom designs, fine line, black & grey, color realism, and professional body piercing. Walk-ins welcome.",
  keywords: [
    "tattoo",
    "piercing",
    "Tucson",
    "Arizona",
    "custom tattoo",
    "fine line tattoo",
    "tattoo studio",
    "body piercing",
    "tattoo shop Tucson",
  ],
  openGraph: {
    title: "Ink & Iron Studio | Tattoo & Piercing in Tucson, AZ",
    description:
      "Premium custom tattoo and professional piercing studio in Tucson, Arizona.",
    type: "website",
    locale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: "Ink & Iron Studio",
  description:
    "Premium custom tattoo and professional piercing studio in Tucson, Arizona.",
  url: "https://inkandironstudio.com",
  telephone: "(520) 555-0199",
  email: "hello@inkandironstudio.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "742 E 6th Street",
    addressLocality: "Tucson",
    addressRegion: "AZ",
    postalCode: "85719",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.2226,
    longitude: -110.9747,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "11:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  image: "https://inkandironstudio.com/og-image.jpg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-void text-cream font-body antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
