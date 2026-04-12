'use client'

import { useEffect, useState } from 'react'

/* ─── Logomark ─── */
function LogoMark({ size = 36, dark = false }: { size?: number; dark?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="10" fill={dark ? '#2D4B6E' : '#2D4B6E'} />
      <circle cx="22" cy="14" r="6" fill="#E8855A" />
      <circle cx="11" cy="32" r="4.5" fill={dark ? 'rgba(245,240,232,0.6)' : 'rgba(245,240,232,0.75)'} />
      <circle cx="33" cy="32" r="4.5" fill={dark ? 'rgba(245,240,232,0.6)' : 'rgba(245,240,232,0.75)'} />
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
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: '18px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'all 0.35s ease',
      background: scrolled ? 'rgba(245,240,232,0.92)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(45,75,110,0.08)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
    }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <LogoMark size={32} />
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: 18,
          fontWeight: 400,
          color: 'var(--midnight)',
          letterSpacing: '-0.2px',
        }}>Amplecen</span>
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {['Manifesto', 'Products', 'Team', 'Contact'].map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 400,
              color: 'var(--midnight)',
              textDecoration: 'none',
              padding: '6px 14px',
              borderRadius: 999,
              transition: 'all 0.2s ease',
              opacity: 0.65,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.background = 'rgba(45,75,110,0.07)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = '0.65'
              e.currentTarget.style.background = 'transparent'
            }}
          >{item}</a>
        ))}
        <a
          href="https://rhythme.amplecen.com"
          style={{
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
        >Try Rhythmé</a>
      </div>
    </nav>
  )
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      padding: '120px 64px 80px',
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
      gap: 64,
    }}>
      {/* Left — text */}
      <div>
        <div className="animate-fade-up" style={{ animationDelay: '0.1s', marginBottom: 20 }}>
          <span className="eyebrow">Behavior Intelligence Organization</span>
        </div>

        <h1 className="animate-fade-up" style={{
          animationDelay: '0.2s',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(44px, 5.5vw, 72px)',
          fontWeight: 400,
          color: 'var(--midnight)',
          lineHeight: 1.08,
          letterSpacing: '-1px',
          marginBottom: 24,
        }}>
          Tools that<br />
          <em style={{ fontStyle: 'italic', color: 'var(--ember)' }}>understand</em><br />
          people.
        </h1>

        <p className="animate-fade-up" style={{
          animationDelay: '0.32s',
          fontSize: 17,
          color: 'var(--midnight)',
          opacity: 0.65,
          lineHeight: 1.75,
          maxWidth: 420,
          marginBottom: 40,
          fontWeight: 300,
        }}>
          Amplecen builds software at the intersection of human behavior, intelligence, and emotional awareness — starting with Rhythmé.
        </p>

        <div className="animate-fade-up" style={{
          animationDelay: '0.44s',
          display: 'flex',
          gap: 12,
          alignItems: 'center',
        }}>
          <a
            href="#products"
            style={{
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
            Learn more
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 5h12M8 1l5 4-5 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#manifesto"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '14px 24px',
              color: 'var(--midnight)',
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              fontWeight: 400,
              textDecoration: 'none',
              opacity: 0.55,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.55')}
          >
            Read our manifesto →
          </a>
        </div>
      </div>

      {/* Right — visual card stack */}
      <div className="animate-fade-in" style={{ animationDelay: '0.5s', position: 'relative', height: 440 }}>
        {/* Background card */}
        <div style={{
          position: 'absolute',
          top: 24, right: 0,
          width: '88%', height: '85%',
          background: 'var(--midnight)',
          borderRadius: 20,
          opacity: 0.08,
        }} />
        {/* Mid card */}
        <div style={{
          position: 'absolute',
          top: 12, right: 12,
          width: '90%', height: '88%',
          background: 'var(--haze)',
          borderRadius: 20,
          opacity: 0.18,
        }} />
        {/* Main card */}
        <div style={{
          position: 'absolute',
          top: 0, right: 24,
          width: '92%', height: '92%',
          background: 'var(--midnight)',
          borderRadius: 20,
          padding: '36px 36px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          {/* Card header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, color: '#F5F0E8', marginBottom: 4 }}>Rhythmé</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--ember)', opacity: 0.8 }}>Behavior Intelligence</p>
            </div>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(232,133,90,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--ember)' }} />
            </div>
          </div>

          {/* Fake chart bars */}
          <div>
            <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', height: 80, marginBottom: 16 }}>
              {[40, 65, 48, 72, 58, 84, 62, 90, 70, 78].map((h, i) => (
                <div key={i} style={{
                  flex: 1,
                  height: `${h}%`,
                  background: i === 9 ? 'var(--ember)' : 'rgba(143,175,201,0.25)',
                  borderRadius: '3px 3px 0 0',
                  transition: 'all 0.3s ease',
                }} />
              ))}
            </div>
            <div style={{ height: 0.5, background: 'rgba(143,175,201,0.2)', marginBottom: 16 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W'].map((d, i) => (
                <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'rgba(143,175,201,0.45)' }}>{d}</span>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
            {[
              { label: 'Momentum', value: '↑ 12%' },
              { label: 'Streak', value: '14 days' },
              { label: 'Focus', value: '3.2 hrs' },
            ].map(({ label, value }) => (
              <div key={label} style={{
                background: 'rgba(143,175,201,0.08)',
                borderRadius: 10,
                padding: '10px 12px',
              }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 9, color: 'rgba(143,175,201,0.55)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 4 }}>{label}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 400, color: '#F5F0E8' }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Divider ─── */
function Divider({ accent = false }: { accent?: boolean }) {
  return (
    <div style={{
      height: 1,
      background: accent
        ? 'linear-gradient(to right, transparent, rgba(232,133,90,0.3), transparent)'
        : 'rgba(45,75,110,0.1)',
      margin: '0 48px',
    }} />
  )
}

/* ─── Manifesto ─── */
function Manifesto() {
  const beliefs = [
    { num: '01', text: 'The tools shaping human behavior should be held to the same standard of craft as the ideas they serve.' },
    { num: '02', text: 'Intelligence is not the speed of thought. It is the quality of attention paid.' },
    { num: '03', text: 'Behavior is not a problem to be optimized. It is a pattern to be understood.' },
    { num: '04', text: 'We build from that premise — slowly, deliberately, one product at a time.' },
  ]

  return (
    <section id="manifesto" style={{ padding: '96px 64px', background: 'var(--warm-white-2)' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 56 }}>
          <span className="eyebrow">Manifesto</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(232,133,90,0.2)' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {beliefs.map(({ num, text }) => (
            <div
              key={num}
              style={{
                padding: '28px 32px',
                background: 'var(--warm-white)',
                borderRadius: 16,
                border: '1px solid rgba(45,75,110,0.07)',
                transition: 'border-color 0.2s, transform 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(232,133,90,0.25)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(45,75,110,0.07)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--ember)',
                opacity: 0.6,
                display: 'block',
                marginBottom: 14,
              }}>{num}</span>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                fontWeight: 300,
                color: 'var(--midnight)',
                lineHeight: 1.65,
                fontStyle: 'italic',
              }}>{text}</p>
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
    <section id="products" style={{ padding: '96px 64px', maxWidth: 'var(--max-width)', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 56 }}>
        <span className="eyebrow">Products</span>
        <div style={{ flex: 1, height: 1, background: 'rgba(232,133,90,0.2)' }} />
      </div>

      {/* Rhythmé card */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 380px',
        gap: 24,
        marginBottom: 20,
      }}>
        <div style={{
          background: 'var(--midnight)',
          borderRadius: 20,
          padding: '48px 52px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: 360,
        }}>
          <div>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: 'var(--ember)',
              opacity: 0.8,
              display: 'block',
              marginBottom: 16,
            }}>Flagship · Live soon</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 4vw, 56px)',
              fontWeight: 400,
              color: '#F5F0E8',
              letterSpacing: '-0.5px',
              lineHeight: 1.1,
              marginBottom: 20,
            }}>Rhythmé</h2>
            <p style={{
              fontSize: 16,
              color: 'var(--haze)',
              lineHeight: 1.75,
              opacity: 0.8,
              maxWidth: 400,
              fontWeight: 300,
            }}>
              The behavior intelligence platform. Rhythmé unifies your tasks, habits, focus sessions, mood, and notes under lightweight ML insight — revealing the momentum behind your behavior, not just the behavior itself.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
            <a
              href="https://rhythme.amplecen.com"
              style={{
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
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--ember-dim)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--ember)')}
            >Visit Rhythmé ↗</a>
          </div>
        </div>

        {/* Feature list */}
        <div style={{
          background: 'var(--warm-white-2)',
          borderRadius: 20,
          padding: '36px 36px',
          border: '1px solid rgba(45,75,110,0.07)',
        }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 10,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: 'var(--midnight)',
            opacity: 0.4,
            marginBottom: 24,
          }}>Five signal types</p>
          {[
            { icon: '◆', label: 'Habits', desc: 'Long-term behavioral patterns' },
            { icon: '◇', label: 'Tasks', desc: 'Daily intent and completion' },
            { icon: '○', label: 'Focus', desc: 'Deep work & flow detection' },
            { icon: '●', label: 'Mood', desc: 'Emotional context layer' },
            { icon: '◉', label: 'Momentum', desc: 'The ML engine unifying all five' },
          ].map(({ icon, label, desc }) => (
            <div key={label} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 14,
              padding: '14px 0',
              borderBottom: '1px solid rgba(45,75,110,0.06)',
            }}>
              <span style={{ fontSize: 10, color: 'var(--ember)', marginTop: 4, opacity: 0.7 }}>{icon}</span>
              <div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: 'var(--midnight)', marginBottom: 2 }}>{label}</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--midnight)', opacity: 0.45, fontWeight: 300 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* More coming */}
      <div style={{
        padding: '24px 32px',
        borderRadius: 14,
        border: '1px dashed rgba(45,75,110,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(45,75,110,0.02)',
      }}>
        <p style={{ fontSize: 14, color: 'var(--midnight)', opacity: 0.5, fontWeight: 300, fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>
          More products are in conception. We build one thing well before building the next.
        </p>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 10,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'var(--ember)',
          opacity: 0.4,
          whiteSpace: 'nowrap',
          marginLeft: 24,
        }}>In time</span>
      </div>
    </section>
  )
}

/* ─── Team ─── */
function Team() {
  return (
    <section id="team" style={{ background: 'var(--warm-white-2)', padding: '96px 64px' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 56 }}>
          <span className="eyebrow">Founder</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(232,133,90,0.2)' }} />
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: 48,
          alignItems: 'start',
        }}>
          {/* Avatar */}
          <div style={{
            width: 280,
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
              fontSize: 96,
              fontWeight: 300,
              color: 'rgba(245,240,232,0.12)',
              userSelect: 'none',
            }}>V</span>
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              padding: '20px 24px',
              background: 'linear-gradient(to top, rgba(30,51,80,0.95), transparent)',
            }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 400, color: '#F5F0E8' }}>Vincent</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--ember)', opacity: 0.75, marginTop: 4 }}>Founder</p>
            </div>
          </div>

          {/* Bio */}
          <div style={{ paddingTop: 16 }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(20px, 2.5vw, 28px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--midnight)',
              lineHeight: 1.6,
              marginBottom: 28,
            }}>
              "Building Amplecen from a conviction that software for human behavior deserves the same depth of thinking as the humans it serves."
            </p>
            <div style={{ display: 'flex', gap: 32 }}>
              {[
                { label: 'Role', value: 'Operations & Engineering' },
                { label: 'Focus', value: 'Full-stack & ML' },
                { label: 'Stage', value: 'Founder-led' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--ember)', opacity: 0.65, marginBottom: 6 }}>{label}</p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 400, color: 'var(--midnight)' }}>{value}</p>
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
    <section id="contact" style={{ padding: '96px 64px' }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 56 }}>
          <span className="eyebrow">Contact</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(232,133,90,0.2)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 3.5vw, 44px)',
              fontWeight: 400,
              color: 'var(--midnight)',
              lineHeight: 1.2,
              letterSpacing: '-0.5px',
              marginBottom: 20,
            }}>
              Let's talk about<br />
              <em style={{ color: 'var(--ember)' }}>something real.</em>
            </h2>
            <p style={{
              fontSize: 16,
              color: 'var(--midnight)',
              opacity: 0.55,
              lineHeight: 1.75,
              fontWeight: 300,
              maxWidth: 360,
            }}>
              For partnerships, press, early access to Rhythmé, or thoughtful conversation — we read everything and respond with care.
            </p>
          </div>

          {sent ? (
            <div style={{ paddingTop: 16 }}>
              <div style={{
                width: 48, height: 48,
                borderRadius: '50%',
                background: 'rgba(61,107,82,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 16,
              }}>
                <span style={{ fontSize: 20 }}>✓</span>
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontStyle: 'italic', color: 'var(--midnight)', marginBottom: 8 }}>Message received.</p>
              <p style={{ fontSize: 14, color: 'var(--midnight)', opacity: 0.5, fontWeight: 300 }}>We'll be in touch soon.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  background: 'var(--warm-white-2)',
                  border: '1px solid rgba(45,75,110,0.12)',
                  borderRadius: 12,
                  padding: '14px 18px',
                  fontSize: 15,
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  color: 'var(--midnight)',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  width: '100%',
                }}
                onFocus={e => (e.target.style.borderColor = 'rgba(232,133,90,0.5)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(45,75,110,0.12)')}
              />
              <textarea
                placeholder="Your message (optional)"
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows={4}
                style={{
                  background: 'var(--warm-white-2)',
                  border: '1px solid rgba(45,75,110,0.12)',
                  borderRadius: 12,
                  padding: '14px 18px',
                  fontSize: 15,
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  color: 'var(--midnight)',
                  outline: 'none',
                  resize: 'none',
                  transition: 'border-color 0.2s',
                  width: '100%',
                }}
                onFocus={e => (e.target.style.borderColor = 'rgba(232,133,90,0.5)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(45,75,110,0.12)')}
              />
              <button
                onClick={() => { if (email) setSent(true) }}
                style={{
                  background: 'var(--midnight)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 999,
                  padding: '14px 32px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: 14,
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
    <footer style={{
      borderTop: '1px solid rgba(45,75,110,0.08)',
      padding: '28px 64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'var(--warm-white-2)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <LogoMark size={24} />
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 15, color: 'var(--midnight)', opacity: 0.6 }}>Amplecen</span>
      </div>
      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--midnight)', opacity: 0.3 }}>© 2025 Amplecen</span>
        <a href="https://rhythme.amplecen.com" style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 12,
          color: 'var(--ember)',
          opacity: 0.6,
          textDecoration: 'none',
          transition: 'opacity 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
        >Rhythmé ↗</a>
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