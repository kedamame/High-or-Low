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
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ede9df',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontWeight: 900,
            fontSize: 72,
            color: '#141410',
            letterSpacing: '-2px',
            fontFamily: 'sans-serif',
          }}
        >
          H/L
        </div>
      </div>
    ),
    { width: 200, height: 200 },
  );
}
