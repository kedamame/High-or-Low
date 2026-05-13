import { ImageResponse } from 'next/og';
import { type NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const streak = Math.max(0, parseInt(req.nextUrl.searchParams.get('streak') || '0', 10));
  const streakStr = String(streak);
  const fontSize = streakStr.length >= 4 ? 100 : streakStr.length === 3 ? 140 : streakStr.length === 2 ? 180 : 220;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#ede9df',
          paddingTop: 80,
          paddingBottom: 80,
          paddingLeft: 80,
          paddingRight: 80,
          alignItems: 'center',
        }}
      >
        {/* Left: branding */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
            height: '100%',
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontWeight: 900,
              fontSize: 128,
              color: '#141410',
              lineHeight: 0.88,
              letterSpacing: '-4px',
              fontFamily: 'sans-serif',
            }}
          >
            <div style={{ display: 'flex' }}>HIGH</div>
            <div style={{ display: 'flex', color: '#3558c8' }}>OR</div>
            <div style={{ display: 'flex' }}>LOW</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div
              style={{
                display: 'flex',
                fontSize: 22,
                color: '#141410',
                opacity: 0.45,
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
                opacity: 0.3,
                fontFamily: 'sans-serif',
              }}
            >
              One miss ends the game
            </div>
          </div>
        </div>

        {/* Right: streak number */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: 380,
            flexShrink: 0,
            gap: 12,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontWeight: 900,
              fontSize,
              color: '#141410',
              lineHeight: 1,
              fontFamily: 'sans-serif',
              letterSpacing: '-6px',
            }}
          >
            {streakStr}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 20,
              color: '#141410',
              opacity: 0.35,
              fontFamily: 'sans-serif',
              letterSpacing: '6px',
              textTransform: 'uppercase',
            }}
          >
            STREAK
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
