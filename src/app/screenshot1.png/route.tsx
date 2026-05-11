import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Start screen screenshot
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#ede9df',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '60px 80px',
            borderBottom: '2px solid #c8bfaf',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontWeight: 900,
              fontSize: 36,
              color: '#141410',
              letterSpacing: '8px',
              fontFamily: 'sans-serif',
              textTransform: 'uppercase',
            }}
          >
            High or Low
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            gap: 80,
            padding: '120px 160px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontWeight: 900,
              fontSize: 240,
              color: '#141410',
              lineHeight: 0.85,
              letterSpacing: '-10px',
              fontFamily: 'sans-serif',
              textAlign: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex' }}>HIGH</div>
            <div style={{ display: 'flex', color: '#3558c8', fontSize: 200 }}>OR</div>
            <div style={{ display: 'flex' }}>LOW</div>
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 44,
              color: '#141410',
              opacity: 0.4,
              fontFamily: 'sans-serif',
              textAlign: 'center',
              lineHeight: 1.6,
            }}
          >
            Guess higher or lower. Two consecutive losses end the game.
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#141410',
              width: '100%',
              padding: '64px 0',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontWeight: 900,
                fontSize: 40,
                color: '#ede9df',
                letterSpacing: '12px',
                fontFamily: 'sans-serif',
                textTransform: 'uppercase',
              }}
            >
              Start Game
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1284, height: 2778 },
  );
}
