export default function Team() {
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
