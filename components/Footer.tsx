import { ArrowUpRight } from 'lucide-react'
import LogoMark from './LogoMark'

export default function Footer() {
  return (
    <footer className="amp-footer" style={{
      borderTop: '1px solid rgba(45,75,110,0.08)',
      padding: '28px 64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'var(--warm-white-2)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <LogoMark size={24} />
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: 'var(--midnight)', opacity: 0.5 }}>Amplecen</span>
      </div>
      <div className="amp-footer-links" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--midnight)', opacity: 0.25 }}>© 2025 Amplecen · Human-centered software.</span>
        <a href="https://www.amplecen.com/rhythme/" className="opacity-50 hover:opacity-100" style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--ember)', textDecoration: 'none', transition: 'opacity 0.2s' }}>Rhythmé <ArrowUpRight size={12} strokeWidth={1.75} aria-hidden="true" /></a>
        <a href="https://lyceum.amplecen.com/" className="opacity-30 hover:opacity-70" style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--midnight)', textDecoration: 'none', transition: 'opacity 0.2s' }}>Lyceum <ArrowUpRight size={12} strokeWidth={1.75} aria-hidden="true" /></a>
      </div>
    </footer>
  )
}
