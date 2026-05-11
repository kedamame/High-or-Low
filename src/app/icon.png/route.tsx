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
          background: '#ede9df',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#141410',
            width: 720,
            height: 720,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontWeight: 900,
                fontSize: 280,
                color: '#ede9df',
                lineHeight: 1,
                letterSpacing: '-8px',
                fontFamily: 'sans-serif',
              }}
            >
              H/L
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 72,
                color: '#ede9df',
                opacity: 0.35,
                letterSpacing: '20px',
                fontFamily: 'sans-serif',
                fontWeight: 700,
              }}
            >
              CARDS
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1024, height: 1024 },
  );
}
