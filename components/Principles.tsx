export default function Principles() {
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
            <div key={label} className="border-[rgba(45,75,110,0.06)] hover:border-[rgba(232,133,90,0.2)] hover:-translate-y-[2px]" style={{
              padding: '28px 28px',
              background: 'var(--warm-white)',
              borderRadius: 16,
              borderStyle: 'solid',
              borderWidth: '1px',
              transition: 'border-color 0.2s, transform 0.25s',
              gridColumn: i === 4 ? '2' : undefined,
            }}>
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
