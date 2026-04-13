'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

/* ─── Logomark ─── */
function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="10" fill="#2D4B6E" />
      <circle cx="22" cy="14" r="6" fill="#E8855A" />
      <circle cx="11" cy="32" r="4.5" fill="rgba(245,240,232,0.75)" />
      <circle cx="33" cy="32" r="4.5" fill="rgba(245,240,232,0.75)" />
      <line x1="22" y1="20" x2="11" y2="27.5" stroke="rgba(245,240,232,0.5)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="20" x2="33" y2="27.5" stroke="rgba(245,240,232,0.5)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/* ─── Nav ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navItems = ['Manifesto', 'Products', 'Team', 'Contact']

  return (
    <>
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
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <LogoMark size={32} />
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 18,
            fontWeight: 400,
            color: 'var(--midnight)',
            letterSpacing: '-0.2px',
          }}>Amplecen</span>
        </Link>

        {/* Desktop links */}
        <div className="mobile-hide" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {navItems.map(item => (
            <Link key={item} href={`#${item.toLowerCase()}`} style={{
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
            >{item}</Link>
          ))}
          <Link href="/rhythme" style={{
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
          >Try Rhythmé</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-show"
          onClick={() => setMobileOpen(true)}
          style={{ display: 'none', background: 'none', border: 'none', color: 'var(--midnight)', cursor: 'pointer', padding: 4 }}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="mobile-nav-overlay">
          <button
            onClick={() => setMobileOpen(false)}
            style={{ position: 'absolute', top: 20, right: 24, background: 'none', border: 'none', color: 'var(--midnight)', cursor: 'pointer', padding: 4 }}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {navItems.map(item => (
            <Link key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileOpen(false)} className="mobile-nav-link">{item}</Link>
          ))}
          <Link
            href="/rhythme"
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 28,
              color: 'var(--ember)',
              textDecoration: 'none',
            }}
          >Try Rhythmé ↗</Link>
        </div>
      )}
    </>
  )
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="amp-hero mobile-stack" style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      padding: '120px 64px 80px',
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      gap: 72,
    }}>
      <div>
        <div className="animate-fade-up" style={{ animationDelay: '0.1s', marginBottom: 24 }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: 'var(--font-sans)',
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--ember)',
            background: 'rgba(232,133,90,0.1)',
            padding: '5px 12px',
            borderRadius: 999,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ember)', display: 'inline-block' }} />
            Building for the distracted generation
          </span>
        </div>

        <h1 className="animate-fade-up" style={{
          animationDelay: '0.2s',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(46px, 5.5vw, 74px)',
          fontWeight: 600,
          color: 'var(--midnight)',
          lineHeight: 1.08,
          letterSpacing: '-1.5px',
          marginBottom: 28,
        }}>
          Your attention<br />
          is worth<br />
          <em style={{ color: 'var(--ember)', fontStyle: 'italic' }}>fighting for.</em>
        </h1>

        <p className="animate-fade-up" style={{
          animationDelay: '0.32s',
          fontSize: 18,
          color: 'var(--midnight)',
          opacity: 0.6,
          lineHeight: 1.8,
          maxWidth: 460,
          marginBottom: 40,
          fontWeight: 400,
        }}>
          We find where people are losing — their focus, their time, their sense of momentum — and build products that give it back. Quietly. Without adding to the noise.
        </p>

        <div className="animate-fade-up" style={{
          animationDelay: '0.42s',
          display: 'flex',
          gap: 12,
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          <Link href="#products" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '14px 28px',
            background: 'var(--midnight)',
            color: '#fff',
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            fontWeight: 500,
            textDecoration: 'none',
            borderRadius: 999,
            transition: 'background 0.2s ease',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--midnight-deep)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--midnight)')}
          >
            See what we're building
            <ArrowRight size={16} />
          </Link>
          <Link href="#manifesto" style={{
            fontSize: 14,
            color: 'var(--midnight)',
            textDecoration: 'none',
            opacity: 0.45,
            transition: 'opacity 0.2s',
            fontFamily: 'var(--font-sans)',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.45')}
          >Read our thinking →</Link>
        </div>
      </div>

      {/* Right — stat cards */}
      <div className="animate-fade-in" style={{ animationDelay: '0.5s', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {[
          {
            stat: '47',
            unit: 'times',
            label: 'The average person checks their phone per day',
            color: 'var(--ember)',
            bg: 'rgba(232,133,90,0.07)',
          },
          {
            stat: '23',
            unit: 'minutes',
            label: 'To refocus after a single interruption',
            color: 'var(--midnight)',
            bg: 'rgba(45,75,110,0.06)',
          },
          {
            stat: '2.5',
            unit: 'hours',
            label: 'Lost to distraction every working day',
            color: '#7EB898',
            bg: 'rgba(126,184,152,0.08)',
          },
          {
            stat: '0',
            unit: 'tools',
            label: 'Built specifically to fix this — until now',
            color: 'var(--ember)',
            bg: 'rgba(232,133,90,0.05)',
          },
        ].map(({ stat, unit, label, color, bg }) => (
          <div key={label} style={{
            background: bg,
            borderRadius: 16,
            padding: '24px 22px',
            border: '1px solid rgba(45,75,110,0.06)',
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, marginBottom: 8 }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 44,
                fontWeight: 600,
                color,
                lineHeight: 1,
              }}>{stat}</span>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                color,
                opacity: 0.7,
                fontWeight: 500,
              }}>{unit}</span>
            </div>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              color: 'var(--midnight)',
              opacity: 0.55,
              lineHeight: 1.55,
              fontWeight: 300,
            }}>{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Divider ─── */
function Divider({ accent = false }: { accent?: boolean }) {
  return (
    <div className="amp-divider" style={{
      height: 1,
      background: accent
        ? 'linear-gradient(to right, transparent, rgba(232,133,90,0.25), transparent)'
        : 'rgba(45,75,110,0.08)',
      margin: '0 56px',
    }} />
  )
}

/* ─── Manifesto ─── */
function Manifesto() {
  const beliefs = [
    {
      num: '01',
      headline: 'The age of distraction is engineered.',
      body: 'Every app, platform, and notification is designed to capture attention — and hold it. We didn\'t drift into distraction. We were pulled there, deliberately, by systems optimized for engagement over human wellbeing.',
    },
    {
      num: '02',
      headline: 'Most productivity tools make it worse.',
      body: 'They add more surfaces, more dashboards, more places to check. They mistake busyness for progress. They optimize your output without ever asking whether you\'re okay. We think that\'s a design failure.',
    },
    {
      num: '03',
      headline: 'Real tools understand people first.',
      body: 'Not just their tasks. Their patterns. Their energy. The emotional context that shapes whether a good intention becomes a real action. Software that knows this builds differently.',
    },
    {
      num: '04',
      headline: 'We find the pain. We build the answer.',
      body: 'Every product Amplecen builds starts with a genuine human problem — something people are losing in the noise of modern life. Then we make one thing that gives it back, as quietly and completely as we can.',
    },
  ]

  return (
    <section id="manifesto" className="amp-section" style={{ padding: '96px 64px', background: 'var(--warm-white-2)' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 64 }}>
          <span className="eyebrow">Our thinking</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(232,133,90,0.18)' }} />
        </div>

        <div className="mobile-stack-tight" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {beliefs.map(({ num, headline, body }) => (
            <div
              key={num}
              style={{
                padding: '32px 36px',
                background: 'var(--warm-white)',
                borderRadius: 18,
                border: '1px solid rgba(45,75,110,0.06)',
                transition: 'border-color 0.2s, transform 0.25s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(232,133,90,0.2)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(45,75,110,0.06)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10,
                color: 'var(--ember)',
                opacity: 0.55,
                display: 'block',
                marginBottom: 14,
                letterSpacing: '1px',
              }}>{num}</span>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 21,
                fontWeight: 500,
                color: 'var(--midnight)',
                lineHeight: 1.35,
                marginBottom: 14,
                letterSpacing: '-0.3px',
              }}>{headline}</h3>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 15,
                fontWeight: 400,
                color: 'var(--midnight)',
                opacity: 0.6,
                lineHeight: 1.75,
              }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Products ─── */
function Products() {
  return (
    <section id="products" className="amp-section" style={{ padding: '96px 64px', maxWidth: 'var(--max-width)', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 64 }}>
        <span className="eyebrow">Products</span>
        <div style={{ flex: 1, height: 1, background: 'rgba(232,133,90,0.18)' }} />
      </div>

      {/* Rhythmé */}
      <div className="amp-product-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 360px',
        gap: 20,
        marginBottom: 20,
      }}>
        <div className="amp-product-card" style={{
          background: 'var(--midnight)',
          borderRadius: 22,
          padding: '52px 56px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: 380,
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Background texture */}
          <div style={{
            position: 'absolute',
            top: -60, right: -60,
            width: 260, height: 260,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(232,133,90,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--ember)',
                opacity: 0.85,
              }}>Flagship · Behavior Intelligence</span>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 10,
                background: 'rgba(232,133,90,0.15)',
                color: 'var(--ember)',
                padding: '3px 10px',
                borderRadius: 999,
              }}>In development</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(44px, 5vw, 62px)',
              fontWeight: 600,
              color: '#F5F0E8',
              letterSpacing: '-0.8px',
              lineHeight: 1.08,
              marginBottom: 20,
            }}>Rhythmé</h2>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 17,
              color: 'var(--haze)',
              lineHeight: 1.75,
              opacity: 0.8,
              maxWidth: 440,
              fontWeight: 400,
              marginBottom: 12,
            }}>
              Most productivity apps track what you did. Rhythmé tracks how you were — and reveals the patterns beneath the surface.
            </p>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              color: 'var(--haze)',
              lineHeight: 1.75,
              opacity: 0.55,
              maxWidth: 420,
              fontWeight: 400,
            }}>
              Habits, tasks, focus sessions, mood, and momentum — unified under lightweight ML that learns your rhythm without demanding your attention.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
            <Link href="/rhythme" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 24px',
              background: 'var(--ember)',
              color: '#fff',
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 500,
              textDecoration: 'none',
              borderRadius: 999,
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = '#C4693A')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--ember)')}
            >Learn more about Rhythmé ↗</Link>
          </div>
        </div>

        {/* What it solves */}
        <div style={{
          background: 'var(--warm-white-2)',
          borderRadius: 22,
          padding: '36px 32px',
          border: '1px solid rgba(45,75,110,0.07)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 10,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--midnight)',
            opacity: 0.35,
            marginBottom: 24,
          }}>The pain it solves</p>

          {[
            { pain: 'You work all day but feel like nothing got done', fix: 'Momentum tracking' },
            { pain: 'You know your habits but can\'t seem to keep them', fix: 'Behavioral patterns' },
            { pain: 'Your mood tanks your productivity and you don\'t notice', fix: 'Emotional context' },
            { pain: 'You forget what focus even feels like', fix: 'Flow detection' },
            { pain: 'Every app tells you what to do. None know who you are.', fix: 'ML that learns you' },
          ].map(({ pain, fix }) => (
            <div key={fix} style={{
              padding: '14px 0',
              borderBottom: '1px solid rgba(45,75,110,0.06)',
            }}>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                color: 'var(--midnight)',
                opacity: 0.5,
                lineHeight: 1.5,
                fontWeight: 300,
                marginBottom: 5,
              }}>{pain}</p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                fontWeight: 500,
                color: 'var(--ember)',
                letterSpacing: '0.5px',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}>
                <ArrowRight size={12} strokeWidth={2} /> {fix}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* More coming */}
      <div className="amp-product-more" style={{
        padding: '24px 36px',
        borderRadius: 14,
        border: '1px dashed rgba(45,75,110,0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(45,75,110,0.02)',
      }}>
        <div>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 16,
            fontStyle: 'italic',
            color: 'var(--midnight)',
            opacity: 0.6,
            marginBottom: 4,
          }}>
            More products in conception.
          </p>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            color: 'var(--midnight)',
            opacity: 0.35,
            fontWeight: 300,
          }}>Every one starts with a real pain. Every one ships when it's ready.</p>
        </div>
        <Link href="https://lyceum.amplecen.com" style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 10,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: 'var(--midnight)',
          opacity: 0.35,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          marginLeft: 24,
          transition: 'opacity 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.35')}
        >Amplecen Lyceum ↗</Link>
      </div>
    </section>
  )
}

/* ─── Team ─── */
function Team() {
  return (
    <section id="team" className="amp-section" style={{ background: 'var(--warm-white-2)', padding: '96px 64px' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 64 }}>
          <span className="eyebrow">Founder</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(232,133,90,0.18)' }} />
        </div>

        <div className="amp-team-grid" style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 56, alignItems: 'start' }}>
          <div className="amp-team-photo" style={{
            width: 260,
            height: 280,
            background: 'var(--midnight)',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: 108,
              fontWeight: 300,
              color: 'rgba(245,240,232,0.08)',
              userSelect: 'none',
              position: 'absolute',
            }}>A</span>
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              padding: '20px 24px',
              background: 'linear-gradient(to top, rgba(30,51,80,0.96), transparent)',
            }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: '#F5F0E8' }}>Anonymous</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--ember)', opacity: 0.75, marginTop: 4 }}>Founder · Amplecen</p>
            </div>
          </div>

          <div style={{ paddingTop: 12 }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px, 2.8vw, 30px)',
              fontWeight: 500,
              fontStyle: 'italic',
              color: 'var(--midnight)',
              lineHeight: 1.55,
              marginBottom: 28,
            }}>
              "I kept noticing the same pattern — smart, motivated people losing hours every day to noise they never chose. So I started building the thing I wished existed."
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 16,
              color: 'var(--midnight)',
              opacity: 0.5,
              lineHeight: 1.75,
              fontWeight: 400,
              maxWidth: 480,
              marginBottom: 32,
            }}>
              Amplecen is a multi-product organization built around a single conviction: that the most valuable thing you can give someone in the age of distraction is their own clarity back.
            </p>
            <div className="amp-team-meta" style={{ display: 'flex', gap: 32 }}>
              {[
                { label: 'Role', value: 'Engineering & Product' },
                { label: 'Approach', value: 'Pain-first, product-second' },
                { label: 'Stage', value: 'Pre-seed, founder-led' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--ember)', opacity: 0.6, marginBottom: 5 }}>{label}</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 400, color: 'var(--midnight)' }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Contact ─── */
function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="amp-section" style={{ padding: '96px 64px' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 64 }}>
          <span className="eyebrow">Contact</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(232,133,90,0.18)' }} />
        </div>

        <div className="amp-contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(34px, 4vw, 50px)',
              fontWeight: 600,
              color: 'var(--midnight)',
              lineHeight: 1.15,
              letterSpacing: '-0.8px',
              marginBottom: 20,
            }}>
              Building something?<br />
              <em style={{ color: 'var(--ember)' }}>Let's talk.</em>
            </h2>
            <p style={{
              fontSize: 16,
              color: 'var(--midnight)',
              opacity: 0.5,
              lineHeight: 1.8,
              fontWeight: 400,
              maxWidth: 360,
              marginBottom: 32,
            }}>
              For early access to Rhythmé, partnerships, press, or if you've found a pain point you think we should know about.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'General', value: 'hello@amplecen.com' },
                { label: 'Rhythmé early access', value: 'rhythme@amplecen.com' },
                { label: 'Lyceum', value: 'lyceum.amplecen.com' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--ember)', opacity: 0.55, minWidth: 140 }}>{label}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--midnight)', opacity: 0.55 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {sent ? (
            <div style={{ paddingTop: 8 }}>
              <div style={{
                width: 44, height: 44,
                borderRadius: '50%',
                background: 'rgba(126,184,152,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 16, fontSize: 18,
              }}>✓</div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontStyle: 'italic', color: 'var(--midnight)', marginBottom: 8 }}>Sent.</p>
              <p style={{ fontSize: 14, color: 'var(--midnight)', opacity: 0.45, fontWeight: 300 }}>We'll get back to you soon.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <input type="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)}
                style={{
                  background: 'var(--warm-white-2)',
                  border: '1px solid rgba(45,75,110,0.1)',
                  borderRadius: 12,
                  padding: '13px 18px',
                  fontSize: 14,
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  color: 'var(--midnight)',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  width: '100%',
                }}
                onFocus={e => (e.target.style.borderColor = 'rgba(232,133,90,0.45)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(45,75,110,0.1)')}
              />
              <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)} rows={4}
                style={{
                  background: 'var(--warm-white-2)',
                  border: '1px solid rgba(45,75,110,0.1)',
                  borderRadius: 12,
                  padding: '13px 18px',
                  fontSize: 14,
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  color: 'var(--midnight)',
                  outline: 'none',
                  resize: 'none',
                  transition: 'border-color 0.2s',
                  width: '100%',
                }}
                onFocus={e => (e.target.style.borderColor = 'rgba(232,133,90,0.45)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(45,75,110,0.1)')}
              />
              <button onClick={() => { if (email) setSent(true) }}
                style={{
                  background: 'var(--midnight)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 999,
                  padding: '13px 28px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--midnight-deep)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--midnight)')}
              >Send message</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
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
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--midnight)', opacity: 0.25 }}>© 2025 Amplecen</span>
        <Link href="/rhythme" style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--ember)', opacity: 0.5, textDecoration: 'none', transition: 'opacity 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
        >Rhythmé ↗</Link>
        <Link href="https://lyceum.amplecen.com" style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--midnight)', opacity: 0.3, textDecoration: 'none', transition: 'opacity 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.3')}
        >Lyceum ↗</Link>
      </div>
    </footer>
  )
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Divider accent />
        <Manifesto />
        <Divider />
        <Products />
        <Divider accent />
        <Team />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}