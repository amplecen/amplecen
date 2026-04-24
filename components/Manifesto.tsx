export default function Manifesto() {
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
              className="border-[rgba(45,75,110,0.06)] hover:border-[rgba(232,133,90,0.2)] hover:-translate-y-[3px]"
              style={{
                padding: '32px 36px',
                background: 'var(--warm-white)',
                borderRadius: 18,
                borderStyle: 'solid',
                borderWidth: '1px',
                transition: 'border-color 0.2s, transform 0.25s',
                cursor: 'default',
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
