'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { supabase } from '../lib/supabase'

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
        <a href="/rhythme" style={{
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

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="amp-hero" style={{
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
            Human-centered product studio
          </span>
        </div>

        <h1 className="animate-fade-up" style={{
          animationDelay: '0.2s',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(42px, 5vw, 68px)',
          fontWeight: 400,
          color: 'var(--midnight)',
          lineHeight: 1.1,
          letterSpacing: '-1px',
          marginBottom: 24,
        }}>
          Building calmer, more<br />
          <em style={{ color: 'var(--ember)', fontStyle: 'italic' }}>connected</em> digital<br />
          experiences.
        </h1>

        <p className="animate-fade-up" style={{
          animationDelay: '0.32s',
          fontSize: 17,
          color: 'var(--midnight)',
          opacity: 0.6,
          lineHeight: 1.8,
          maxWidth: 440,
          marginBottom: 40,
          fontWeight: 300,
        }}>
          We design tools that support attention, emotional steadiness, and meaningful connection — grounded in behavioral insight and privacy-conscious personalization.
        </p>

        <div className="animate-fade-up" style={{
          animationDelay: '0.42s',
          display: 'flex',
          gap: 12,
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          <a href="#products" style={{
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
            Explore our products
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 5h12M8 1l5 4-5 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#principles" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 14,
            color: 'var(--midnight)',
            textDecoration: 'none',
            opacity: 0.45,
            transition: 'opacity 0.2s',
            fontFamily: 'var(--font-sans)',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.45')}
          >Our principles <ArrowRight size={14} strokeWidth={1.75} aria-hidden="true" /></a>
        </div>
      </div>

      {/* Right — stat cards */}
      <div className="animate-fade-in amp-hero-cards" style={{ animationDelay: '0.5s', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {[
          {
            stat: '3',
            unit: 'things',
            label: 'Clarity, emotional intelligence, and connection — the three things we build around',
            color: 'var(--ember)',
            bg: 'rgba(232,133,90,0.07)',
          },
          {
            stat: '0',
            unit: 'dark patterns',
            label: 'No guilt loops, no engagement traps, no design that works against you',
            color: 'var(--midnight)',
            bg: 'rgba(45,75,110,0.06)',
          },
          {
            stat: '2',
            unit: 'products',
            label: 'Live and in development — each one starting from a real, observed pain point',
            color: '#7EB898',
            bg: 'rgba(126,184,152,0.08)',
          },
          {
            stat: '1',
            unit: 'rule',
            label: 'Helpful by default, controllable always — privacy is never an afterthought',
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
                fontSize: 40,
                fontWeight: 400,
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
              fontSize: 12,
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
      headline: 'Fewer distractions, clearer feedback.',
      body: 'Modern software is powerful but often noisy. We build in the opposite direction — reducing decision fatigue and helping people know what matters next, without adding another surface to check.',
    },
    {
      num: '02',
      headline: 'Behavior-aware, not behavior-blind.',
      body: 'We design around real behavior: overload, inconsistency, motivation cycles, and shifting context. Not ideal routines. The gap between knowing what to do and actually doing it is where we work.',
    },
    {
      num: '03',
      headline: 'Personalization that respects you.',
      body: 'Personalization should feel helpful, not invasive. We prioritize user control, transparency, and sensible data boundaries — especially for anything personal or sensitive.',
    },
    {
      num: '04',
      headline: 'Systems, not guilt.',
      body: 'We avoid gamification that makes you feel bad for being human. Our products are designed to be sustainable: gentle guardrails, simple defaults, and progress you can actually maintain.',
    },
  ]

  return (
    <section id="principles" className="amp-section" style={{ padding: '96px 64px', background: 'var(--warm-white-2)' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 64 }}>
          <span className="eyebrow">What we believe</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(232,133,90,0.18)' }} />
        </div>

        <div className="amp-beliefs-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
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
                fontSize: 19,
                fontWeight: 400,
                color: 'var(--midnight)',
                lineHeight: 1.35,
                marginBottom: 14,
                letterSpacing: '-0.2px',
              }}>{headline}</h3>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                fontWeight: 300,
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
              }}>Productivity · Calm by design</span>
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
              fontSize: 'clamp(40px, 4.5vw, 58px)',
              fontWeight: 400,
              color: '#F5F0E8',
              letterSpacing: '-0.5px',
              lineHeight: 1.08,
              marginBottom: 20,
            }}>Rhythmé</h2>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 16,
              color: 'var(--haze)',
              lineHeight: 1.75,
              opacity: 0.8,
              maxWidth: 420,
              fontWeight: 300,
              marginBottom: 12,
            }}>
              A personal alignment system that brings planning, focus, habits, and reflection into one steady rhythm.
            </p>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              color: 'var(--haze)',
              lineHeight: 1.75,
              opacity: 0.55,
              maxWidth: 400,
              fontWeight: 300,
            }}>
              Built for ambitious students and early-career builders who want to make progress without the stress — so consistency feels sustainable, not exhausting.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
            <a href="/rhythme" style={{
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
            >Visit Rhythmé <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" /></a>
          </div>
        </div>

        {/* What it solves */}
        <div className="amp-product-side" style={{
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
            { pain: 'You plan, then life happens and the plan falls apart', fix: 'Flexible rhythm system' },
            { pain: 'You know your habits but can\'t seem to keep them', fix: 'Behavioral pattern tracking' },
            { pain: 'Your mood shapes your day but nothing accounts for it', fix: 'Emotional context layer' },
            { pain: 'You forget what sustained focus even feels like', fix: 'Flow session detection' },
            { pain: 'Every app tells you what to do. None know who you are.', fix: 'Personalized, not prescriptive' },
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
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                fontWeight: 500,
                color: 'var(--ember)',
                letterSpacing: '0.5px',
              }}><ArrowRight size={12} strokeWidth={2} aria-hidden="true" /> {fix}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GrooveEstrella */}
      <div className="amp-product-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 360px',
        gap: 20,
        marginBottom: 20,
      }}>
        <div className="amp-product-card" style={{
          background: '#1A2B20',
          borderRadius: 22,
          padding: '52px 56px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: 320,
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: -60, right: -60,
            width: 260, height: 260,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(126,184,152,0.14) 0%, transparent 70%)',
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
                color: '#7EB898',
                opacity: 0.85,
              }}>Music · Discovery & sharing</span>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 10,
                background: 'rgba(126,184,152,0.15)',
                color: '#7EB898',
                padding: '3px 10px',
                borderRadius: 999,
              }}>In development</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 400,
              color: '#F5F0E8',
              letterSpacing: '-0.5px',
              lineHeight: 1.1,
              marginBottom: 20,
            }}>GrooveEstrella</h2>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 16,
              color: '#8FAFC9',
              lineHeight: 1.75,
              opacity: 0.8,
              maxWidth: 420,
              fontWeight: 300,
              marginBottom: 12,
            }}>
              One clean link for any track across platforms — rich metadata, and a discovery engine that actually learns your taste.
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              color: '#8FAFC9',
              lineHeight: 1.75,
              opacity: 0.55,
              maxWidth: 400,
              fontWeight: 300,
            }}>
              So music becomes easier to share and more meaningful to explore — without the friction of incompatible platforms.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
            <a href="#" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 24px',
              background: '#7EB898',
              color: '#fff',
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 500,
              textDecoration: 'none',
              borderRadius: 999,
              opacity: 0.7,
              cursor: 'default',
            }}>Coming soon</a>
          </div>
        </div>

        {/* What it solves */}
        <div className="amp-product-side" style={{
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
            { pain: 'You find a song on Spotify but your friend uses Apple Music', fix: 'Universal share link' },
            { pain: 'Recommendations feel random, not personal', fix: 'Taste-aware discovery' },
            { pain: 'Music context gets lost when you share a plain link', fix: 'Rich metadata per track' },
            { pain: 'You lose track of music that actually meant something', fix: 'Meaningful music memory' },
          ].map(({ pain, fix }) => (
            <div key={fix} style={{ padding: '14px 0', borderBottom: '1px solid rgba(45,75,110,0.06)' }}>
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
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                fontFamily: 'var(--font-sans)',
                fontSize: 11,
                fontWeight: 500,
                color: '#7EB898',
                letterSpacing: '0.5px',
              }}><ArrowRight size={12} strokeWidth={2} aria-hidden="true" /> {fix}</p>
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
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: 15,
          fontStyle: 'italic',
          color: 'var(--midnight)',
          opacity: 0.5,
        }}>
          More products in conception — each one starting from a real, observed pain.
        </p>
        <a href="https://lyceum.amplecen.com" style={{
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
        >Amplecen Lyceum <ArrowUpRight size={12} strokeWidth={1.75} aria-hidden="true" /></a>
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
            }}>A.</span>
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
              fontSize: 'clamp(20px, 2.5vw, 27px)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'var(--midnight)',
              lineHeight: 1.55,
              marginBottom: 28,
            }}>
              "I kept seeing the same thing — capable people held back not by a lack of effort, but by tools that weren't built for how they actually live. So I started building differently."
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 15,
              color: 'var(--midnight)',
              opacity: 0.5,
              lineHeight: 1.75,
              fontWeight: 300,
              maxWidth: 480,
              marginBottom: 32,
            }}>
              Amplecen is a human-centered product studio built around one conviction: that software should support the person using it — their attention, their emotions, their real life — not just their task list.
            </p>
            <div className="amp-team-meta" style={{ display: 'flex', gap: 32 }}>
              {[
                { label: 'Role', value: 'Founder · Engineering & Product' },
                { label: 'Approach', value: 'Human-centered, pain-first' },
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

/* ─── Principles ─── */
function Principles() {
  const list = [
    { label: 'Warm, not loud', desc: 'We don\'t shout for attention. Our products earn it.' },
    { label: 'Helpful by default, controllable always', desc: 'Smart out of the box. Yours to adjust, always.' },
    { label: 'Trust is a feature', desc: 'Privacy, transparency, and data boundaries are built in — not bolted on.' },
    { label: 'Designed for real life', desc: 'Not ideal routines. Actual people, with actual inconsistency.' },
    { label: 'Progress without pressure', desc: 'Sustainable beats intense. We design for the long run.' },
  ]

  return (
    <section id="principles" className="amp-section" style={{ padding: '96px 64px', background: 'var(--warm-white-2)' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 64 }}>
          <span className="eyebrow">Principles</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(232,133,90,0.18)' }} />
        </div>
        <div className="amp-principles-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          {list.map(({ label, desc }, i) => (
            <div key={label} style={{
              padding: '28px 28px',
              background: 'var(--warm-white)',
              borderRadius: 16,
              border: '1px solid rgba(45,75,110,0.06)',
              transition: 'border-color 0.2s, transform 0.25s',
              gridColumn: i === 4 ? '2' : undefined,
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(232,133,90,0.2)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(45,75,110,0.06)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 17,
                fontWeight: 400,
                color: 'var(--midnight)',
                lineHeight: 1.35,
                marginBottom: 10,
              }}>{label}</p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                fontWeight: 300,
                color: 'var(--midnight)',
                opacity: 0.5,
                lineHeight: 1.65,
              }}>{desc}</p>
            </div>
          ))}
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
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSend = async () => {
    if (!email) return
    setIsSubmitting(true)
    try {
      await supabase.from('user_invites').insert([
        {
          user_name: "",
          user_email: email,
          message: message,
          added_from: {
            source: {
              url: window.location.href,
              app: "landing_v1",
              cta: "footer_form"
            },
            meta: {
              referrer: document.referrer || "direct"
            }
          }
        }
      ])
      setSent(true)
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

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
              fontSize: 'clamp(30px, 3.5vw, 44px)',
              fontWeight: 400,
              color: 'var(--midnight)',
              lineHeight: 1.2,
              letterSpacing: '-0.5px',
              marginBottom: 20,
            }}>
              Got something<br />
              <em style={{ color: 'var(--ember)' }}>worth sharing?</em>
            </h2>
            <p style={{
              fontSize: 15,
              color: 'var(--midnight)',
              opacity: 0.5,
              lineHeight: 1.8,
              fontWeight: 300,
              maxWidth: 360,
              marginBottom: 32,
            }}>
              For early access, press, partnerships, or if you've spotted a pain point you think we should know about — we read everything.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'General', value: 'hello@amplecen.com' },
                { label: 'Rhythmé early access', value: 'rhythme@amplecen.com' },
                { label: 'Lyceum', value: 'lyceum.amplecen.com' },
              ].map(({ label, value }) => (
                <div key={label} className="amp-contact-item" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
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
              <button onClick={handleSend} disabled={isSubmitting}
                style={{
                  background: 'var(--midnight)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 999,
                  padding: '13px 28px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: isSubmitting ? 'wait' : 'pointer',
                  alignSelf: 'flex-start',
                  transition: 'background 0.2s',
                  opacity: isSubmitting ? 0.7 : 1,
                }}
                onMouseEnter={e => (!isSubmitting && (e.currentTarget.style.background = 'var(--midnight-deep)'))}
                onMouseLeave={e => (!isSubmitting && (e.currentTarget.style.background = 'var(--midnight)'))}
              >{isSubmitting ? 'Sending...' : 'Send message'}</button>
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
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--midnight)', opacity: 0.25 }}>© 2025 Amplecen · Human-centered software.</span>
        <a href="/rhythme" style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--ember)', opacity: 0.5, textDecoration: 'none', transition: 'opacity 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
        >Rhythmé <ArrowUpRight size={12} strokeWidth={1.75} aria-hidden="true" /></a>
        <a href="https://lyceum.amplecen.com" style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--midnight)', opacity: 0.3, textDecoration: 'none', transition: 'opacity 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.3')}
        >Lyceum <ArrowUpRight size={12} strokeWidth={1.75} aria-hidden="true" /></a>
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
        <Principles />
        <Divider />
        <Team />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}