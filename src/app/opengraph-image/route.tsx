import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#141410',
          gap: 20,
        }}
      >
        <div
          style={{
            display: 'flex',
            fontWeight: 900,
            fontSize: 160,
            color: '#ede9df',
            lineHeight: 0.85,
            letterSpacing: '-6px',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex' }}>HIGH</div>
          <div style={{ display: 'flex', color: '#3558c8' }}>OR</div>
          <div style={{ display: 'flex' }}>LOW</div>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 18,
            color: '#ede9df',
            opacity: 0.4,
            letterSpacing: '4px',
            fontFamily: 'sans-serif',
            textTransform: 'uppercase',
          }}
        >
          Tap to play
        </div>
      </div>
    ),
    { width: 900, height: 600 },
  );
}
