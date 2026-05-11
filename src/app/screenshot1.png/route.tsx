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
          <div style={{ display: 'flex', fontWeight: 900, fontSize: 36, color: '#141410', letterSpacing: '8px', fontFamily: 'sans-serif', textTransform: 'uppercase' }}>
            High or Low
          </div>
        </div>

        {/* Card fan */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 160, position: 'relative', height: 520 }}>
          {/* Left card */}
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              left: 180,
              top: 80,
              transform: 'rotate(-14deg)',
              flexDirection: 'column',
              alignItems: 'stretch',
              justifyContent: 'space-between',
              background: '#ffffff',
              border: '4px solid #d4cfc5',
              borderRadius: 32,
              width: 300,
              height: 420,
              padding: '40px 44px',
              zIndex: 1,
            }}
          >
            <div style={{ display: 'flex', fontWeight: 900, fontSize: 80, color: '#c82828', lineHeight: 1, fontFamily: 'sans-serif' }}>Q</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', width: 120, height: 120, background: '#c82828', transform: 'rotate(45deg)' }} />
            </div>
            <div style={{ display: 'flex', fontWeight: 900, fontSize: 80, color: '#c82828', lineHeight: 1, fontFamily: 'sans-serif', alignSelf: 'flex-end', transform: 'rotate(180deg)' }}>Q</div>
          </div>

          {/* Right card */}
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              right: 180,
              top: 80,
              transform: 'rotate(14deg)',
              flexDirection: 'column',
              alignItems: 'stretch',
              justifyContent: 'space-between',
              background: '#ffffff',
              border: '4px solid #d4cfc5',
              borderRadius: 32,
              width: 300,
              height: 420,
              padding: '40px 44px',
              zIndex: 1,
            }}
          >
            <div style={{ display: 'flex', fontWeight: 900, fontSize: 80, color: '#141410', lineHeight: 1, fontFamily: 'sans-serif' }}>7</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', width: 120, height: 120, background: '#141410', transform: 'rotate(45deg)' }} />
            </div>
            <div style={{ display: 'flex', fontWeight: 900, fontSize: 80, color: '#141410', lineHeight: 1, fontFamily: 'sans-serif', alignSelf: 'flex-end', transform: 'rotate(180deg)' }}>7</div>
          </div>

          {/* Center card */}
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              left: '50%',
              top: 0,
              transform: 'translateX(-50%)',
              flexDirection: 'column',
              alignItems: 'stretch',
              justifyContent: 'space-between',
              background: '#ffffff',
              border: '4px solid #d4cfc5',
              borderRadius: 32,
              width: 300,
              height: 420,
              padding: '40px 44px',
              zIndex: 2,
            }}
          >
            <div style={{ display: 'flex', fontWeight: 900, fontSize: 80, color: '#141410', lineHeight: 1, fontFamily: 'sans-serif' }}>A</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', width: 120, height: 120, background: '#141410', transform: 'rotate(45deg)' }} />
            </div>
            <div style={{ display: 'flex', fontWeight: 900, fontSize: 80, color: '#141410', lineHeight: 1, fontFamily: 'sans-serif', alignSelf: 'flex-end', transform: 'rotate(180deg)' }}>A</div>
          </div>
        </div>

        {/* Title */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40, marginTop: 100, padding: '0 120px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', fontWeight: 900, fontSize: 200, color: '#141410', lineHeight: 0.88, letterSpacing: '-8px', fontFamily: 'sans-serif', textAlign: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex' }}>HIGH</div>
            <div style={{ display: 'flex', color: '#3558c8', fontSize: 160 }}>OR</div>
            <div style={{ display: 'flex' }}>LOW</div>
          </div>
          <div style={{ display: 'flex', fontSize: 44, color: '#141410', opacity: 0.4, fontFamily: 'sans-serif', textAlign: 'center' }}>
            One miss ends the game
          </div>
        </div>

        {/* Start button */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#141410', width: '100%', padding: '64px 0', marginTop: 'auto' }}>
          <div style={{ display: 'flex', fontWeight: 900, fontSize: 40, color: '#ede9df', letterSpacing: '12px', fontFamily: 'sans-serif', textTransform: 'uppercase' }}>
            Start Game
          </div>
        </div>
      </div>
    ),
    { width: 1284, height: 2778 },
  );
}
