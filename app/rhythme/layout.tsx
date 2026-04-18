import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.amplecen.com'), // ← This is critical
  title: 'Rhythmé — Productivity that knows how you feel',
  description:
    'Rhythmé unifies your tasks, habits, and mood into one calm space — so you spend less time managing your system and more time actually doing the work.',
  keywords: [
    'Rhythmé',
    'productivity app',
    'habit tracker',
    'mood tracking',
    'task management',
    'journaling',
    'focus timer',
    'emotional awareness',
    'Amplecen',
    'deep work',
    'attention recovery',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.amplecen.com/rhythme',
    siteName: 'Amplecen',
    title: 'Rhythmé — Productivity that knows how you feel',
    description:
      'Rhythmé unifies your tasks, habits, and mood into one calm space — so you spend less time managing your system and more time actually doing the work.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Rhythmé by Amplecen' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rhythmé — Productivity that knows how you feel',
    description:
      'Rhythmé unifies your tasks, habits, and mood into one calm space. Early Access is free.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.amplecen.com/rhythme', // ← This fixes the duplicate error
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Rhythmé',
  applicationCategory: 'ProductivityApplication',
  operatingSystem: 'Web',
  url: 'https://www.amplecen.com/rhythme',
  description:
    'A premium productivity platform that unifies tasks, habits, mood tracking, journaling, and focus sessions into one calm dashboard.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/PreOrder',
  },
  creator: {
    '@type': 'Organization',
    name: 'Amplecen',
    url: 'https://www.amplecen.com',
  },
}

export default function RhythmeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}