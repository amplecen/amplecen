'use client'

import { useEffect, useState } from 'react'
import LogoMark from './LogoMark'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className="amp-nav" style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: '18px 56px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'all 0.35s ease',
      background: scrolled ? 'rgba(245,240,232,0.94)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(45,75,110,0.08)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
    }}>
      <a className="amp-nav-brand" href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <LogoMark size={32} />
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: 18,
          fontWeight: 400,
          color: 'var(--midnight)',
          letterSpacing: '-0.2px',
        }}>Amplecen</span>
      </a>
      <div className="amp-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {['What we believe', 'Products', 'Team', 'Contact'].map(item => (
          <a key={item} href={`#${item === 'What we believe' ? 'principles' : item.toLowerCase()}`} style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 13,
            fontWeight: 400,
            color: 'var(--midnight)',
            textDecoration: 'none',
            padding: '6px 14px',
            borderRadius: 999,
            transition: 'all 0.2s ease',
            opacity: 0.6,
          }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.background = 'rgba(45,75,110,0.07)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = '0.6'
              e.currentTarget.style.background = 'transparent'
            }}
          >{item}</a>
        ))}
        <a href="https://www.amplecen.com/rhythme/" style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          fontWeight: 500,
          color: '#fff',
          textDecoration: 'none',
          padding: '8px 20px',
          borderRadius: 999,
          background: 'var(--midnight)',
          marginLeft: 8,
          transition: 'background 0.2s ease',
        }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--midnight-deep)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--midnight)')}
        >Explore products</a>
      </div>
    </nav>
  )
}
