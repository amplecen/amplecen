export default function LogoMark({ size = 36 }: { size?: number }) {
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
