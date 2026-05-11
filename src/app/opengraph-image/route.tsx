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
          gap: 48,
        }}
      >
        {/* Three cards stacked/fanned (flex row, slight overlap effect via margins) */}
        <div style={{ display: 'flex', alignItems: 'flex-start', position: 'relative', width: 320, height: 280 }}>
          {/* Left card */}
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              left: 0,
              top: 24,
              transform: 'rotate(-12deg)',
              flexDirection: 'column',
              alignItems: 'stretch',
              justifyContent: 'space-between',
              background: '#ffffff',
              border: '3px solid #d4cfc5',
              borderRadius: 18,
              width: 140,
              height: 196,
              padding: '16px 18px',
              zIndex: 1,
            }}
          >
            <div style={{ display: 'flex', fontWeight: 900, fontSize: 32, color: '#c82828', lineHeight: 1, fontFamily: 'sans-serif' }}>Q</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', width: 48, height: 48, background: '#c82828', transform: 'rotate(45deg)' }} />
            </div>
            <div style={{ display: 'flex', fontWeight: 900, fontSize: 32, color: '#c82828', lineHeight: 1, fontFamily: 'sans-serif', alignSelf: 'flex-end', transform: 'rotate(180deg)' }}>Q</div>
          </div>

          {/* Right card */}
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              right: 0,
              top: 24,
              transform: 'rotate(12deg)',
              flexDirection: 'column',
              alignItems: 'stretch',
              justifyContent: 'space-between',
              background: '#ffffff',
              border: '3px solid #d4cfc5',
              borderRadius: 18,
              width: 140,
              height: 196,
              padding: '16px 18px',
              zIndex: 1,
            }}
          >
            <div style={{ display: 'flex', fontWeight: 900, fontSize: 32, color: '#141410', lineHeight: 1, fontFamily: 'sans-serif' }}>7</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', width: 48, height: 48, background: '#141410', transform: 'rotate(45deg)' }} />
            </div>
            <div style={{ display: 'flex', fontWeight: 900, fontSize: 32, color: '#141410', lineHeight: 1, fontFamily: 'sans-serif', alignSelf: 'flex-end', transform: 'rotate(180deg)' }}>7</div>
          </div>

          {/* Center card (on top) */}
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
              border: '3px solid #d4cfc5',
              borderRadius: 18,
              width: 140,
              height: 196,
              padding: '16px 18px',
              zIndex: 2,
            }}
          >
            <div style={{ display: 'flex', fontWeight: 900, fontSize: 32, color: '#141410', lineHeight: 1, fontFamily: 'sans-serif' }}>A</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', width: 48, height: 48, background: '#141410', transform: 'rotate(45deg)' }} />
            </div>
            <div style={{ display: 'flex', fontWeight: 900, fontSize: 32, color: '#141410', lineHeight: 1, fontFamily: 'sans-serif', alignSelf: 'flex-end', transform: 'rotate(180deg)' }}>A</div>
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontWeight: 900,
            fontSize: 120,
            color: '#ede9df',
            lineHeight: 0.88,
            letterSpacing: '-4px',
            fontFamily: 'sans-serif',
          }}
        >
          <div style={{ display: 'flex' }}>HIGH</div>
          <div style={{ display: 'flex', color: '#3558c8' }}>OR</div>
          <div style={{ display: 'flex' }}>LOW</div>
        </div>
      </div>
    ),
    { width: 900, height: 600 },
  );
}
