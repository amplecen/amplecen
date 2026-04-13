import { Fraunces, DM_Sans, DM_Mono, DM_Serif_Display } from 'next/font/google'

/**
 * Amplecen Font System
 *
 * Fraunces      — Editorial display headings (variable font, optical-size aware)
 * DM Sans       — Body text, UI labels, buttons
 * DM Mono       — Monospace accents (numbering, code)
 * DM Serif Display — Rhythmé product display headings
 *
 * Each font exposes a CSS variable so inline styles & globals.css
 * can reference them via var(--font-*).
 */

export const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
  // Variable font — includes full weight range
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  // Variable font
  weight: ['300', '400', '500', '600', '700'],
})

export const dmMono = DM_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-mono',
  weight: '400',
})

export const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-serif-display',
  weight: '400',
  style: ['normal', 'italic'],
})
