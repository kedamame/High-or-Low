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
        {/* Card fan */}
        <div style={{ display: 'flex', position: 'relative', width: 780, height: 540 }}>
          {/* Left card - Q, red */}
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              left: 0,
              top: 80,
              transform: 'rotate(-14deg)',
              flexDirection: 'column',
              alignItems: 'stretch',
              justifyContent: 'space-between',
              background: '#ffffff',
              border: '5px solid #d4cfc5',
              borderRadius: 48,
              width: 300,
              height: 420,
              paddingTop: 44,
              paddingBottom: 44,
              paddingLeft: 48,
              paddingRight: 48,
              zIndex: 1,
            }}
          >
            <div style={{ display: 'flex', fontWeight: 900, fontSize: 100, color: '#c82828', lineHeight: 1, fontFamily: 'sans-serif' }}>Q</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', width: 120, height: 120, background: '#c82828', transform: 'rotate(45deg)' }} />
            </div>
            <div style={{ display: 'flex', fontWeight: 900, fontSize: 100, color: '#c82828', lineHeight: 1, fontFamily: 'sans-serif', alignSelf: 'flex-end', transform: 'rotate(180deg)' }}>Q</div>
          </div>

          {/* Right card - 7, dark */}
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              right: 0,
              top: 80,
              transform: 'rotate(14deg)',
              flexDirection: 'column',
              alignItems: 'stretch',
              justifyContent: 'space-between',
              background: '#ffffff',
              border: '5px solid #d4cfc5',
              borderRadius: 48,
              width: 300,
              height: 420,
              paddingTop: 44,
              paddingBottom: 44,
              paddingLeft: 48,
              paddingRight: 48,
              zIndex: 1,
            }}
          >
            <div style={{ display: 'flex', fontWeight: 900, fontSize: 100, color: '#141410', lineHeight: 1, fontFamily: 'sans-serif' }}>7</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', width: 120, height: 120, background: '#141410', transform: 'rotate(45deg)' }} />
            </div>
            <div style={{ display: 'flex', fontWeight: 900, fontSize: 100, color: '#141410', lineHeight: 1, fontFamily: 'sans-serif', alignSelf: 'flex-end', transform: 'rotate(180deg)' }}>7</div>
          </div>

          {/* Center card - A, dark */}
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
              border: '5px solid #d4cfc5',
              borderRadius: 48,
              width: 300,
              height: 420,
              paddingTop: 44,
              paddingBottom: 44,
              paddingLeft: 48,
              paddingRight: 48,
              zIndex: 2,
            }}
          >
            <div style={{ display: 'flex', fontWeight: 900, fontSize: 100, color: '#141410', lineHeight: 1, fontFamily: 'sans-serif' }}>A</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', width: 120, height: 120, background: '#141410', transform: 'rotate(45deg)' }} />
            </div>
            <div style={{ display: 'flex', fontWeight: 900, fontSize: 100, color: '#141410', lineHeight: 1, fontFamily: 'sans-serif', alignSelf: 'flex-end', transform: 'rotate(180deg)' }}>A</div>
          </div>
        </div>
      </div>
    ),
    { width: 1024, height: 1024 },
  );
}
