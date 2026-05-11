import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Playing screen screenshot
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
            justifyContent: 'space-between',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div
              style={{
                display: 'flex',
                fontWeight: 900,
                fontSize: 36,
                color: '#141410',
                letterSpacing: '4px',
                fontFamily: 'sans-serif',
              }}
            >
              STREAK 5
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{ display: 'flex', width: 24, height: 24, borderRadius: '50%', background: '#141410' }} />
              <div style={{ display: 'flex', width: 24, height: 24, borderRadius: '50%', background: '#141410' }} />
            </div>
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
            gap: 100,
            padding: '120px 160px',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 32,
              color: '#141410',
              opacity: 0.35,
              letterSpacing: '8px',
              fontFamily: 'sans-serif',
              textTransform: 'uppercase',
            }}
          >
            Current Card
          </div>

          {/* Card */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              justifyContent: 'space-between',
              background: '#ffffff',
              border: '4px solid #d4cfc5',
              borderRadius: 40,
              width: 480,
              height: 700,
              padding: '56px',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontWeight: 900,
                fontSize: 96,
                color: '#c82828',
                fontFamily: 'sans-serif',
              }}
            >
              K
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 260,
                color: '#c82828',
                fontFamily: 'sans-serif',
                alignSelf: 'center',
              }}
            >
              H
            </div>
            <div
              style={{
                display: 'flex',
                fontWeight: 900,
                fontSize: 96,
                color: '#c82828',
                fontFamily: 'sans-serif',
                alignSelf: 'flex-end',
              }}
            >
              K
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: 32, width: '100%' }}>
            <div
              style={{
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                border: '4px solid #141410',
                padding: '56px 0',
                fontWeight: 900,
                fontSize: 48,
                color: '#141410',
                letterSpacing: '8px',
                fontFamily: 'sans-serif',
                textTransform: 'uppercase',
              }}
            >
              Higher
            </div>
            <div
              style={{
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                background: '#141410',
                padding: '56px 0',
                fontWeight: 900,
                fontSize: 48,
                color: '#ede9df',
                letterSpacing: '8px',
                fontFamily: 'sans-serif',
                textTransform: 'uppercase',
              }}
            >
              Lower
            </div>
          </div>

          {/* Streak */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                display: 'flex',
                fontSize: 28,
                color: '#141410',
                opacity: 0.3,
                letterSpacing: '8px',
                textTransform: 'uppercase',
                fontFamily: 'sans-serif',
              }}
            >
              Streak
            </div>
            <div
              style={{
                display: 'flex',
                fontWeight: 900,
                fontSize: 240,
                color: '#141410',
                lineHeight: 1,
                fontFamily: 'sans-serif',
              }}
            >
              5
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1284, height: 2778 },
  );
}
