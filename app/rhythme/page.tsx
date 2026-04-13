'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

/* ─── Scroll Reveal Hook ─── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollReveal()
  return <div ref={ref} className={`rl-reveal ${className}`}>{children}</div>
}

function StaggerReveal({ children, className = '', style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.rl-reveal').forEach(r => r.classList.add('visible'))
          observer.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className={`rl-stagger ${className}`} style={style}>{children}</div>
}

/* ─── Shared inline style helpers ─── */
const V = (name: string) => `var(--rl-${name})`

const heading = (size: string): React.CSSProperties => ({
  fontFamily: V('font-display'),
  fontSize: size,
  color: V('text'),
  lineHeight: 1.15,
  letterSpacing: '-0.5px',
  fontWeight: 400,
})

const label: React.CSSProperties = {
  fontFamily: V('font-body'),
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: 3,
  textTransform: 'uppercase',
  color: V('accent'),
  opacity: 0.7,
  marginBottom: 20,
}

const body: React.CSSProperties = {
  color: V('text-muted'),
  fontSize: 17,
  lineHeight: 1.8,
  fontWeight: 300,
}

/* ─── SVG Icons ─── */
const ico = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
function IconDashboard() { return <svg {...ico}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M3 9h18" /><path d="M9 21V9" /></svg> }
function IconTask() { return <svg {...ico}><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg> }
function IconHabit() { return <svg {...ico}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg> }
function IconJournal() { return <svg {...ico}><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /><path d="M8 7h8M8 11h6" /></svg> }
function IconFocus() { return <svg {...ico}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> }
function IconWeek() { return <svg {...ico}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg> }

/* ─── Section styles ─── */
const section: React.CSSProperties = {
  padding: '120px 64px',
  maxWidth: 1200,
  margin: '0 auto',
}

/* ─── Section 1: Navbar ─── */
function RhythmeNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Early Access', href: '#early-access' },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '18px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.4s ease',
        background: scrolled ? V('glass') : 'transparent',
        borderBottom: scrolled ? `1px solid ${V('glass-border')}` : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}>
        <a href="/rhythme" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <span style={{ fontFamily: V('font-display'), fontSize: 20, color: V('text'), letterSpacing: '-0.3px' }}>Rhythmé</span>
        </a>

        <div className="mobile-hide" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {links.map(l => (
            <a key={l.label} href={l.href} className="rl-nav-link" style={{
              fontFamily: V('font-body'), fontSize: 13, fontWeight: 400,
              color: V('text'), textDecoration: 'none',
              padding: '6px 14px', borderRadius: 999,
              transition: 'all 0.2s ease', opacity: 0.55,
            }}>{l.label}</a>
          ))}
          <a href="#early-access" className="rl-nav-cta" style={{
            fontFamily: V('font-body'), fontSize: 13, fontWeight: 500,
            color: V('bg'), textDecoration: 'none',
            padding: '8px 22px', borderRadius: 999,
            background: V('accent'), marginLeft: 8,
            transition: 'background 0.2s ease',
          }}>Get Early Access</a>
        </div>

        <button
          className="mobile-show"
          onClick={() => setMobileOpen(true)}
          style={{ display: 'none', background: 'none', border: 'none', color: V('text'), cursor: 'pointer', padding: 4 }}
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" />
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: V('bg'), zIndex: 200,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32,
          animation: 'fadeIn 0.3s ease',
        }}>
          <button
            onClick={() => setMobileOpen(false)}
            style={{ position: 'absolute', top: 20, right: 24, background: 'none', border: 'none', color: V('text'), fontSize: 28, cursor: 'pointer' }}
            aria-label="Close menu"
          >&times;</button>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)} style={{
              fontFamily: V('font-display'), fontSize: 28, color: V('text'),
              textDecoration: 'none', opacity: 0.8,
            }}>{l.label}</a>
          ))}
          <a href="https://rhythme.amplecen.com" onClick={() => setMobileOpen(false)} style={{
            fontFamily: V('font-display'), fontSize: 28, color: V('accent'),
            textDecoration: 'none',
          }}>Launch Rhythmé ↗</a>
        </div>
      )}
    </>
  )
}

/* ─── Section 2: Hero ─── */
function HeroSection() {
  return (
    <section style={{ ...section, minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 120 }}>
      <div className="rl-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', width: '100%' }}>
        <div>
          <Reveal>
            <h1 style={heading('clamp(40px, 5vw, 64px)')}>
              Productivity that knows how you feel.
            </h1>
          </Reveal>
          <Reveal>
            <p style={{ ...body, maxWidth: 460, marginTop: 24, marginBottom: 36 }}>
              Rhythmé unifies your tasks, habits, and mood into one calm space — so you spend less time managing your system and more time actually doing the work.
            </p>
          </Reveal>
          <Reveal>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="#early-access" className="rl-btn-primary" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '16px 32px', background: V('accent'), color: V('bg'),
                fontFamily: V('font-body'), fontSize: 14, fontWeight: 500,
                textDecoration: 'none', borderRadius: 999, transition: 'all 0.25s ease',
              }}>
                Get Early Access — It's Free
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12M8 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a href="#how-it-works" className="rl-btn-secondary" style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '16px 24px', color: V('text-muted'),
                fontFamily: V('font-body'), fontSize: 14, fontWeight: 400,
                textDecoration: 'none', transition: 'color 0.2s',
              }}>See how it works ↓</a>
            </div>
          </Reveal>
          <Reveal>
            <p style={{ marginTop: 28, fontSize: 13, color: V('text-dim'), fontWeight: 300, letterSpacing: '0.2px' }}>
              No credit card. Set up in under 3 minutes. Your journal stays encrypted — always.
            </p>
          </Reveal>
        </div>

        {/* Abstract dashboard visual */}
        <div className="rl-hero-visual" style={{ position: 'relative', height: 440 }}>
          <Reveal>
            <div style={{
              position: 'absolute', top: 0, right: 0, width: '100%', height: 400,
              background: V('bg-surface'), borderRadius: 24,
              border: `1px solid ${V('border')}`,
              padding: '32px', display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between', overflow: 'hidden',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ fontFamily: V('font-display'), fontSize: 20, color: V('text'), marginBottom: 4 }}>Today</p>
                  <p style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: V('accent'), opacity: 0.7 }}>3 tasks · 2 habits · calm</p>
                </div>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(126, 184, 164, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: V('accent') }} />
                </div>
              </div>

              <div style={{ margin: '20px 0' }}>
                <div style={{ height: 4, borderRadius: 2, background: `linear-gradient(90deg, ${V('accent')}, ${V('warm')}, ${V('accent')})`, opacity: 0.4 }} />
              </div>

              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end', height: 60, marginBottom: 12 }}>
                {[35, 55, 42, 68, 52, 78, 60, 85, 72, 48, 65, 80].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, background: i >= 10 ? V('accent') : 'rgba(126, 184, 164, 0.15)', borderRadius: '2px 2px 0 0' }} />
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
                {[
                  { l: 'Streak', v: '14 days' },
                  { l: 'Mood', v: 'Calm' },
                  { l: 'Focus', v: '2.4 hrs' },
                ].map(({ l, v }) => (
                  <div key={l} style={{ background: 'rgba(126, 184, 164, 0.06)', borderRadius: 12, padding: '10px 14px', border: `1px solid ${V('border')}` }}>
                    <p style={{ fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: V('text-dim'), marginBottom: 4 }}>{l}</p>
                    <p style={{ fontFamily: V('font-display'), fontSize: 15, color: V('text') }}>{v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating task snippet */}
            <div style={{
              position: 'absolute', bottom: -10, left: -24,
              background: V('bg-elevated'), border: `1px solid ${V('border')}`,
              borderRadius: 16, padding: '16px 20px', width: 200,
              boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
            }}>
              <p style={{ fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: V('warm'), marginBottom: 8, opacity: 0.7 }}>Next up</p>
              <p style={{ fontSize: 14, color: V('text'), fontWeight: 400 }}>Review weekly plan</p>
              <p style={{ fontSize: 11, color: V('text-dim'), marginTop: 4 }}>In 25 minutes</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 3: Problem Statement ─── */
function ProblemSection() {
  return (
    <section style={{ ...section, background: V('bg-surface'), maxWidth: 'none' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <Reveal><p style={label}>The Problem</p></Reveal>
        <Reveal>
          <h2 style={{ ...heading('clamp(32px, 4vw, 48px)'), marginBottom: 32 }}>
            You're not lazy. You're overwhelmed.
          </h2>
        </Reveal>
        <Reveal>
          <p style={{ ...body, marginBottom: 20, maxWidth: 640 }}>
            Most productivity tools treat you like a machine. They give you lists, timers, and streaks — but no awareness of the fact that some days you're exhausted, anxious, or just off. So you fall behind, feel guilty, and eventually abandon the whole system.
          </p>
        </Reveal>
        <Reveal>
          <p style={{
            fontFamily: V('font-display'), fontSize: 'clamp(20px, 2.5vw, 28px)',
            color: V('accent'), fontStyle: 'italic', lineHeight: 1.5, marginTop: 40,
          }}>
            Rhythmé is different. It's built for humans.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Section 4: Features ─── */
function FeaturesSection() {
  const features = [
    { icon: <IconDashboard />, title: 'Your Day at a Glance', body: 'Open Rhythmé and know exactly what today looks like — tasks prioritized, habits tracked, mood noted. No scrolling through five apps. One calm view, under ten seconds.' },
    { icon: <IconTask />, title: "Tasks That Don't Bury You", body: "Add tasks with priorities, due dates, and tags. Filter down to what matters today. No 200-item backlogs. No guilt from what's left undone." },
    { icon: <IconHabit />, title: 'Habits That Actually Stick', body: "One tap to log. Streaks to keep you honest. A heatmap to show your real consistency over time. And a quiet nudge when a habit's at risk — never a lecture." },
    { icon: <IconJournal />, title: "A Journal That's Truly Yours", body: "Write freely. Your entries are encrypted end-to-end — we can't read them, and neither can anyone else. Tag your mood, see patterns over time." },
    { icon: <IconFocus />, title: 'Focus Without Friction', body: 'Pomodoro-style focus sessions, tied to a specific task if you want. No social features. No background noise AI. Just you and the work.' },
    { icon: <IconWeek />, title: 'Your Week in Perspective', body: "Plan your week. Review it honestly. See simple connections between your mood, habits, and output. Not magic — just clarity." },
  ]

  const cardIcon: React.CSSProperties = {
    width: 48, height: 48, borderRadius: 14,
    background: 'rgba(126, 184, 164, 0.08)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: 20, color: V('accent'),
  }

  return (
    <section id="features" style={section}>
      <Reveal><p style={label}>What Rhythmé gives you</p></Reveal>
      <Reveal><h2 style={{ ...heading('clamp(32px, 4vw, 48px)'), marginBottom: 56 }}>Everything you need. Nothing you don't.</h2></Reveal>

      <StaggerReveal className="rl-feature-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {features.map(f => (
          <div key={f.title} className="rl-reveal">
            <div className="rl-card" style={{
              background: V('bg-surface'), border: `1px solid ${V('border')}`,
              borderRadius: 20, padding: 36, transition: 'all 0.3s ease',
            }}>
              <div style={cardIcon}>{f.icon}</div>
              <h3 style={{ fontFamily: V('font-display'), fontSize: 20, color: V('text'), marginBottom: 10, fontWeight: 400 }}>{f.title}</h3>
              <p style={{ fontSize: 15, color: V('text-muted'), lineHeight: 1.7, fontWeight: 300 }}>{f.body}</p>
            </div>
          </div>
        ))}
      </StaggerReveal>
    </section>
  )
}

/* ─── Section 5: Differentiator ─── */
function DifferentiatorSection() {
  const circle = (extras: React.CSSProperties): React.CSSProperties => ({
    position: 'absolute', width: 160, height: 160, borderRadius: '50%',
    border: '1.5px solid', display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: V('font-body'), fontSize: 12, fontWeight: 500, letterSpacing: 1, textTransform: 'uppercase',
    ...extras,
  })

  return (
    <section style={{ ...section, textAlign: 'center' }}>
      <Reveal><p style={label}>Why Rhythmé is different</p></Reveal>
      <Reveal>
        <h2 style={{ ...heading('clamp(28px, 3.5vw, 44px)'), maxWidth: 700, margin: '0 auto 32px' }}>
          The first productivity tool that treats you like a human.
        </h2>
      </Reveal>
      <Reveal>
        <p style={{ ...body, maxWidth: 620, margin: '0 auto 16px' }}>
          Notion tracks your notes. Todoist tracks your tasks. Your habit app tracks your streaks. But none of them know that on Tuesday you were burned out, that the bad week hit your habits, or that your mood has been trending down for ten days.
        </p>
      </Reveal>
      <Reveal>
        <p style={{
          fontFamily: V('font-display'), fontSize: 'clamp(18px, 2vw, 22px)',
          color: V('warm'), fontStyle: 'italic', lineHeight: 1.6,
          maxWidth: 500, margin: '32px auto 0',
        }}>
          Rhythmé sees the whole picture — quietly, privately, without judgment.
        </p>
      </Reveal>
      <Reveal>
        <div style={{ position: 'relative', width: 320, height: 240, margin: '48px auto 0' }}>
          <div style={circle({ top: 0, left: '50%', transform: 'translateX(-50%)', borderColor: V('accent'), color: V('accent'), background: 'rgba(126, 184, 164, 0.04)' })}>Tasks</div>
          <div style={circle({ bottom: 0, left: 20, borderColor: V('warm'), color: V('warm'), background: 'rgba(201, 169, 110, 0.04)' })}>Habits</div>
          <div style={circle({ bottom: 0, right: 20, borderColor: V('text-muted'), color: V('text-muted'), background: 'rgba(138, 143, 158, 0.04)' })}>Mood</div>
        </div>
      </Reveal>
    </section>
  )
}

/* ─── Section 6: Privacy ─── */
function PrivacySection() {
  const pillars = [
    { icon: <svg {...ico} width="28" height="28"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>, title: 'Encrypted Journals', body: "Your journal entries are encrypted on your device before they ever touch our servers. We cannot read them. Full stop." },
    { icon: <svg {...ico} width="28" height="28"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" /><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" /><line x1="1" y1="1" x2="23" y2="23" /></svg>, title: 'No Data Mining', body: "Mood data is stored as metadata only. We never sell, analyze, or monetize your emotional patterns." },
    { icon: <svg {...ico} width="28" height="28"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>, title: 'Delete Anytime', body: "One button. Your entire account and all associated data, permanently removed. GDPR-compliant by design." },
  ]

  return (
    <section style={section}>
      <Reveal><p style={label}>Your data is yours</p></Reveal>
      <Reveal><h2 style={{ ...heading('clamp(28px, 3.5vw, 44px)'), marginBottom: 56 }}>We built privacy in. Not bolted on.</h2></Reveal>

      <StaggerReveal className="rl-privacy-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
        {pillars.map(p => (
          <div key={p.title} className="rl-reveal">
            <div className="rl-privacy-card" style={{
              textAlign: 'center', padding: '40px 28px',
              background: V('bg-surface'), border: `1px solid ${V('border')}`,
              borderRadius: 20, transition: 'border-color 0.3s ease',
            }}>
              <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'center', color: V('accent') }}>{p.icon}</div>
              <h3 style={{ fontFamily: V('font-display'), fontSize: 20, color: V('text'), marginBottom: 12, fontWeight: 400 }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: V('text-muted'), lineHeight: 1.7, fontWeight: 300 }}>{p.body}</p>
            </div>
          </div>
        ))}
      </StaggerReveal>
    </section>
  )
}

/* ─── Section 7: How It Works ─── */
function HowItWorksSection() {
  const steps = [
    { num: '1', title: 'Tell us your goals', desc: 'Pick what you want to focus on — work, habits, wellbeing, or all three.' },
    { num: '2', title: 'Choose your habits', desc: 'Select from a curated list or create your own. Set frequency. Done.' },
    { num: '3', title: 'Set your mood baseline', desc: "A quick check-in so Rhythmé knows where you're starting from." },
    { num: '4', title: 'Pick your theme', desc: 'Light, dark, or something in between. Make it yours.' },
    { num: '5', title: 'Your dashboard is ready', desc: 'Open it tomorrow morning. See your day. Start moving.' },
  ]

  return (
    <section id="how-it-works" style={{ ...section, background: V('bg-surface'), maxWidth: 'none' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal><p style={label}>Getting Started</p></Reveal>
        <Reveal><h2 style={{ ...heading('clamp(28px, 3.5vw, 44px)'), marginBottom: 64 }}>From zero to clarity in three minutes.</h2></Reveal>

        <StaggerReveal className="rl-steps" style={{ display: 'flex', gap: 32 }}>
          {steps.map(s => (
            <div key={s.num} className="rl-step rl-reveal" style={{ flex: 1, textAlign: 'center', position: 'relative' }}>
              <div className="rl-step-number" style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'rgba(126, 184, 164, 0.12)', border: '1px solid rgba(126, 184, 164, 0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px', fontFamily: V('font-display'), fontSize: 16, color: V('accent'),
              }}>{s.num}</div>
              <h3 style={{ fontFamily: V('font-display'), fontSize: 17, color: V('text'), marginBottom: 8, fontWeight: 400 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: V('text-muted'), lineHeight: 1.65, fontWeight: 300 }}>{s.desc}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}

/* ─── Section 8: Early Access CTA ─── */
function EarlyAccessSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    if (email.includes('@')) setSubmitted(true)
  }, [email])

  return (
    <section id="early-access" style={{
      background: `linear-gradient(180deg, ${V('bg')} 0%, ${V('bg-elevated')} 40%, rgba(126,184,164,0.04) 100%)`,
    }}>
      <div style={{ ...section, textAlign: 'center' }}>
        <Reveal>
          <h2 style={heading('clamp(32px, 4vw, 52px)')}>Be one of the first.</h2>
        </Reveal>
        <Reveal>
          <p style={{ ...body, maxWidth: 560, margin: '20px auto 40px' }}>
            Rhythmé is launching to a small group of early users. You'll get in free, help shape what comes next, and never pay for the features you unlock during Early Access.
          </p>
        </Reveal>
        <Reveal>
          {submitted ? (
            <div style={{ padding: '24px 0' }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'rgba(126, 184, 164, 0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px', border: '1px solid rgba(126, 184, 164, 0.2)',
              }}>
                <span style={{ fontSize: 24, color: V('accent') }}>✓</span>
              </div>
              <p style={{ fontFamily: V('font-display'), fontSize: 22, color: V('text'), marginBottom: 8 }}>You're on the list.</p>
              <p style={{ fontSize: 14, color: V('text-muted'), fontWeight: 300 }}>We'll reach out when your spot is ready.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
              <div className="rl-email-form" style={{ display: 'flex', gap: 8, maxWidth: 480 }}>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="rl-email-input"
                  required
                  aria-label="Email address"
                  style={{
                    flex: 1, padding: '16px 20px',
                    background: V('bg-surface'), border: `1px solid ${V('border')}`,
                    borderRadius: 999, color: V('text'),
                    fontFamily: V('font-body'), fontSize: 15, fontWeight: 300,
                    outline: 'none', transition: 'border-color 0.2s',
                  }}
                />
                <button type="submit" className="rl-btn-primary" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '16px 32px', background: V('accent'), color: V('bg'),
                  fontFamily: V('font-body'), fontSize: 14, fontWeight: 500,
                  borderRadius: 999, border: 'none', cursor: 'pointer',
                  transition: 'all 0.25s ease', whiteSpace: 'nowrap',
                }}>Get Early Access — Free</button>
              </div>
              <p style={{ fontSize: 12, color: V('text-dim'), fontWeight: 300, marginTop: 4 }}>
                No spam. No credit card. Just early access to something built carefully.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Section 9: Footer ─── */
function RhythmeFooter() {
  const linkStyle: React.CSSProperties = {
    fontSize: 13, color: V('text-dim'), textDecoration: 'none', transition: 'color 0.2s',
  }

  return (
    <footer className="rl-footer" style={{
      borderTop: `1px solid ${V('border')}`,
      padding: '48px 64px', maxWidth: 1200, margin: '0 auto',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 24,
    }}>
      <div>
        <p style={{ fontFamily: V('font-display'), fontSize: 18, color: V('text'), marginBottom: 4 }}>Rhythmé</p>
        <p style={{ fontSize: 13, color: V('text-dim'), fontWeight: 300, fontStyle: 'italic' }}>Productivity that knows how you feel.</p>
      </div>
      <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
        <a href="/privacy" className="rl-footer-link" style={linkStyle}>Privacy Policy</a>
        <a href="/terms" className="rl-footer-link" style={linkStyle}>Terms</a>
        <a href="/#contact" className="rl-footer-link" style={linkStyle}>Contact</a>
        <span style={{ fontSize: 12, color: V('text-dim'), opacity: 0.5 }}>·</span>
        <a href="/" className="rl-footer-link" style={{ ...linkStyle, color: V('text-muted') }}>A product by Amplecen</a>
        <span style={{ fontSize: 11, color: V('text-dim'), opacity: 0.4 }}>© {new Date().getFullYear()} Amplecen</span>
      </div>
    </footer>
  )
}

/* ─── Floating Launch Button ─── */
function LaunchButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <a
      href="https://rhythme.amplecen.com"
      className="rl-launch-btn"
      style={{
        position: 'fixed', bottom: 32, right: 32, zIndex: 90,
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '14px 28px', background: V('accent'), color: V('bg'),
        fontFamily: V('font-body'), fontSize: 14, fontWeight: 500,
        textDecoration: 'none', borderRadius: 999,
        boxShadow: '0 8px 32px rgba(126, 184, 164, 0.3)',
        transition: 'all 0.3s ease',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
      aria-label="Launch Rhythmé application"
    >
      Launch Rhythmé
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17L17 7" /><path d="M7 7h10v10" />
      </svg>
    </a>
  )
}

/* ─── Divider ─── */
function RlDivider() {
  return <div style={{ height: 1, background: `linear-gradient(to right, transparent, ${V('border')}, transparent)`, margin: '0 64px' }} />
}

/* ─── Page ─── */
export default function RhythmeLandingPage() {
  return (
    <div className="rl-page" style={{
      background: V('bg'), color: V('text'),
      fontFamily: V('font-body'), fontWeight: 300,
      fontSize: 16, lineHeight: 1.7,
      WebkitFontSmoothing: 'antialiased', overflowX: 'hidden',
    }}>
      <RhythmeNav />
      <main>
        <HeroSection />
        <RlDivider />
        <ProblemSection />
        <RlDivider />
        <FeaturesSection />
        <RlDivider />
        <DifferentiatorSection />
        <RlDivider />
        <PrivacySection />
        <RlDivider />
        <HowItWorksSection />
        <RlDivider />
        <EarlyAccessSection />
      </main>
      <RhythmeFooter />
      <LaunchButton />
    </div>
  )
}
