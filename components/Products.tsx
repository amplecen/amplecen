import { ArrowRight, ArrowUpRight } from 'lucide-react'

export default function Products() {
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
            <a href="https://www.amplecen.com/rhythme/" className="bg-[var(--ember)] hover:bg-[#C4693A]" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 24px',
              color: '#fff',
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 500,
              textDecoration: 'none',
              borderRadius: 999,
              transition: 'background 0.2s',
            }}>Visit Rhythmé <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" /></a>
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
        <a href="https://lyceum.amplecen.com/" className="opacity-[0.35] hover:opacity-[0.75]" style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 10,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: 'var(--midnight)',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          marginLeft: 24,
          transition: 'opacity 0.2s',
        }}>Amplecen Lyceum <ArrowUpRight size={12} strokeWidth={1.75} aria-hidden="true" /></a>
      </div>
    </section>
  )
}
