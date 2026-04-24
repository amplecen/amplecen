import { ArrowRight } from 'lucide-react'

export default function Hero() {
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
          <a href="#products" className="bg-[var(--midnight)] hover:bg-[var(--midnight-deep)]" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '14px 28px',
            color: '#fff',
            fontFamily: 'var(--font-sans)',
            fontSize: 14,
            fontWeight: 500,
            textDecoration: 'none',
            borderRadius: 999,
            transition: 'background 0.2s ease',
          }}>
            Explore our products
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 5h12M8 1l5 4-5 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#principles" className="opacity-[0.45] hover:opacity-90" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 14,
            color: 'var(--midnight)',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
            fontFamily: 'var(--font-sans)',
          }}>Our principles <ArrowRight size={14} strokeWidth={1.75} aria-hidden="true" /></a>
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
