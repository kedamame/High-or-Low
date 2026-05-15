import { ImageResponse } from 'next/og';
import { type NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const streak = Math.max(0, parseInt(req.nextUrl.searchParams.get('streak') || '0', 10));
  const streakStr = String(streak);
  const fontSize = streakStr.length >= 4 ? 80 : streakStr.length === 3 ? 110 : streakStr.length === 2 ? 150 : 180;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#ede9df',
          paddingTop: 60,
          paddingBottom: 60,
          paddingLeft: 60,
          paddingRight: 60,
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
            paddingTop: 16,
            paddingBottom: 16,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontWeight: 900,
              fontSize: 96,
              color: '#141410',
              lineHeight: 0.88,
              letterSpacing: '-3px',
              fontFamily: 'sans-serif',
            }}
          >
            <div style={{ display: 'flex' }}>HIGH</div>
            <div style={{ display: 'flex', color: '#3558c8' }}>OR</div>
            <div style={{ display: 'flex' }}>LOW</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div
              style={{
                display: 'flex',
                fontSize: 16,
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
                fontSize: 14,
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
            width: 280,
            flexShrink: 0,
            gap: 10,
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
              letterSpacing: '-4px',
            }}
          >
            {streakStr}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 16,
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
    { width: 900, height: 600 },
  );
}
