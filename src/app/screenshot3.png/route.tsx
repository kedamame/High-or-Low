import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Game Over screen screenshot
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
            gap: 64,
            padding: '100px 120px',
          }}
        >
          {/* Score panel */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#141410',
              width: '100%',
              padding: '120px 80px',
              gap: 40,
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: 32,
                color: '#ede9df',
                opacity: 0.35,
                letterSpacing: '12px',
                fontFamily: 'sans-serif',
                textTransform: 'uppercase',
              }}
            >
              Game Over
            </div>
            <div
              style={{
                display: 'flex',
                fontWeight: 900,
                fontSize: 360,
                color: '#ede9df',
                lineHeight: 1,
                fontFamily: 'sans-serif',
              }}
            >
              7
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 32,
                color: '#ede9df',
                opacity: 0.35,
                letterSpacing: '8px',
                fontFamily: 'sans-serif',
                textTransform: 'uppercase',
              }}
            >
              Best streak
            </div>
          </div>

          {/* Record button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#3558c8',
              width: '100%',
              padding: '64px 0',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontWeight: 900,
                fontSize: 40,
                color: '#ffffff',
                letterSpacing: '10px',
                fontFamily: 'sans-serif',
                textTransform: 'uppercase',
              }}
            >
              Record on Base
            </div>
          </div>

          {/* Share button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '4px solid #141410',
              width: '100%',
              padding: '64px 0',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontWeight: 900,
                fontSize: 40,
                color: '#141410',
                letterSpacing: '8px',
                fontFamily: 'sans-serif',
                textTransform: 'uppercase',
              }}
            >
              Share on Farcaster
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1284, height: 2778 },
  );
}
