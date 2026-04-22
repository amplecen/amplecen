import type { Metadata } from "next";
import { fraunces, dmSans, dmMono, dmSerifDisplay } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amplecen.com/"), // ← Primary domain
  title: {
    default: "Amplecen",
    template: "%s · Amplecen",
  },
  description: "Building tools at the intersection of human behavior, intelligence, and emotional awareness. Discover Rhythmé and products that help you reclaim focus in a distracted world.",
  keywords: ["focus tools", "productivity", "human behavior", "Rhythmé", "Amplecen", "deep work", "attention recovery", "distraction free"],
  authors: [{ name: "Amplecen" }],
  creator: "Amplecen",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.amplecen.com/",
    siteName: "Amplecen",
    title: "Amplecen — Human behavior. Broad reach.",
    description: "Building tools at the intersection of human behavior, intelligence, and emotional awareness.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Amplecen" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Amplecen — Human behavior. Broad reach.",
    description: "Building tools at the intersection of human behavior, intelligence, and emotional awareness.",
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
                "Building tools at the intersection of human behavior, intelligence, and emotional awareness.",
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