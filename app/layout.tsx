import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://amplecen.com'),
  title: {
    default: 'Amplecen',
    template: '%s · Amplecen',
  },
  description: 'Building tools at the intersection of human behavior, intelligence, and emotional awareness.',
  keywords: ['behavior intelligence', 'productivity', 'human behavior', 'Rhythmé', 'Amplecen'],
  authors: [{ name: 'Amplecen' }],
  creator: 'Amplecen',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amplecen.com',
    siteName: 'Amplecen',
    title: 'Amplecen — Human behavior. Broad reach.',
    description: 'Building tools at the intersection of human behavior, intelligence, and emotional awareness.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Amplecen' }],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Amplecen — Human behavior. Broad reach.',
    description: 'Building tools at the intersection of human behavior, intelligence, and emotional awareness.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Amplecen",
              url: "https://amplecen.com",
              description:
                "Building tools at the intersection of human behavior, intelligence, and emotional awareness.",
              foundingDate: "2025",
              sameAs: [
                "https://twitter.com/amplecen",
                "https://linkedin.com/company/amplecen",
              ],
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
