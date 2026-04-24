export default function Divider({ accent = false }: { accent?: boolean }) {
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
