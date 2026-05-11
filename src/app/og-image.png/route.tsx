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
          background: '#ede9df',
          padding: '80px',
        }}
      >
        {/* Left: title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontWeight: 900,
              fontSize: 120,
              color: '#141410',
              lineHeight: 0.9,
              letterSpacing: '-4px',
              fontFamily: 'sans-serif',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex' }}>HIGH</div>
            <div style={{ display: 'flex', color: '#3558c8' }}>OR</div>
            <div style={{ display: 'flex' }}>LOW</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: 22,
                color: '#141410',
                opacity: 0.5,
                fontFamily: 'sans-serif',
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              Card streak challenge on Base
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 18,
                color: '#141410',
                opacity: 0.35,
                fontFamily: 'sans-serif',
              }}
            >
              Two consecutive losses end the game
            </div>
          </div>
        </div>

        {/* Right: card mock */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 320,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              justifyContent: 'space-between',
              background: '#ffffff',
              border: '3px solid #d4cfc5',
              borderRadius: 24,
              width: 220,
              height: 320,
              padding: '28px',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontWeight: 900,
                fontSize: 42,
                color: '#141410',
                fontFamily: 'sans-serif',
              }}
            >
              A
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 110,
                color: '#141410',
                fontFamily: 'sans-serif',
                alignSelf: 'center',
              }}
            >
              S
            </div>
            <div
              style={{
                display: 'flex',
                fontWeight: 900,
                fontSize: 42,
                color: '#141410',
                fontFamily: 'sans-serif',
                alignSelf: 'flex-end',
                transform: 'rotate(180deg)',
              }}
            >
              A
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
