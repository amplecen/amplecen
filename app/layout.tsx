import type { Metadata } from "next";
import { fraunces, dmSans, dmMono, dmSerifDisplay } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amplecen.com/"), // ← Primary domain
  title: {
    default: "Amplecen — Human-Centered Product Studio for Focus, Emotion & Productivity",
    template: "%s · Amplecen",
  },
  description: "Amplecen is a human-centered product studio building tools that improve focus, emotional balance, and meaningful digital experiences through behavioral insight.",
  keywords: ["human-centered design", "product studio", "behavioral insights", "Rhythmé", "Amplecen", "deep work", "attention recovery", "distraction free"],
  authors: [{ name: "Amplecen" }],
  creator: "Amplecen",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.amplecen.com/",
    siteName: "Amplecen",
    title: "Amplecen — Human-Centered Product Studio for Focus, Emotion & Productivity",
    description: "Amplecen is a human-centered product studio building tools that improve focus, emotional balance, and meaningful digital experiences through behavioral insight.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Amplecen" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Amplecen — Human-Centered Product Studio for Focus, Emotion & Productivity",
    description: "Amplecen is a human-centered product studio building tools that improve focus, emotional balance, and meaningful digital experiences through behavioral insight.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.amplecen.com/", // ← Homepage canonical
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${dmMono.variable} ${dmSerifDisplay.variable}`}
    >
      <head>
        {/* Organization schema (you already had this) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Amplecen",
              url: "https://www.amplecen.com/",
              description:
                "Amplecen is a human-centered product studio building tools that improve focus, emotional balance, and meaningful digital experiences through behavioral insight.",
              foundingDate: "2025",
              sameAs: [
                "https://twitter.com/amplecen/",
                "https://linkedin.com/company/amplecen/",
              ],
            }),
          }}
        />

        {/* NEW: WebSite schema – this fixes the "amplecen.com" label in Google search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Amplecen",
              url: "https://www.amplecen.com/",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}