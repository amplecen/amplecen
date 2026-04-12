import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    <div style={{
      background: '#1C1814',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'serif',
    }}>
      <div style={{ fontSize: 72, color: '#F5EFE4', letterSpacing: 4 }}>Amplecen</div>
      <div style={{ fontSize: 24, color: '#C4A96B', marginTop: 16, letterSpacing: 2 }}>Human behavior. Broad reach.</div>
    </div>
  )
}