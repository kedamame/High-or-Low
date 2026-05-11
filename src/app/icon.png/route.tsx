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
          background: '#141410',
        }}
      >
        {/* Single large card */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'space-between',
            background: '#ffffff',
            borderRadius: 72,
            width: 620,
            height: 860,
            padding: '72px 80px',
          }}
        >
          {/* Top rank */}
          <div
            style={{
              display: 'flex',
              fontWeight: 900,
              fontSize: 200,
              color: '#141410',
              lineHeight: 1,
              fontFamily: 'sans-serif',
            }}
          >
            A
          </div>

          {/* Center: diamond suit shape */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: 220,
                height: 220,
                background: '#141410',
                transform: 'rotate(45deg)',
              }}
            />
          </div>

          {/* Bottom rank (upside down) */}
          <div
            style={{
              display: 'flex',
              fontWeight: 900,
              fontSize: 200,
              color: '#141410',
              lineHeight: 1,
              fontFamily: 'sans-serif',
              alignSelf: 'flex-end',
              transform: 'rotate(180deg)',
            }}
          >
            A
          </div>
        </div>
      </div>
    ),
    { width: 1024, height: 1024 },
  );
}
