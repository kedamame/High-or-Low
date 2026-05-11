import { ImageResponse } from 'next/og';

export const runtime = 'edge';

function OgCard({
  rank,
  red,
  rotate,
  offsetX,
  zIndex,
}: {
  rank: string;
  red: boolean;
  rotate: number;
  offsetX: number;
  zIndex: number;
}) {
  const color = red ? '#c82828' : '#141410';
  return (
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        left: offsetX,
        top: rotate === 0 ? 0 : 20,
        transform: `rotate(${rotate}deg)`,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        background: '#ffffff',
        border: '3px solid #d4cfc5',
        borderRadius: 20,
        width: 160,
        height: 224,
        padding: '18px 20px',
        zIndex,
      }}
    >
      <div style={{ display: 'flex', fontWeight: 900, fontSize: 36, color, lineHeight: 1, fontFamily: 'sans-serif' }}>
        {rank}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            width: red ? 0 : 64,
            height: red ? 0 : 64,
            background: red ? 'transparent' : color,
            transform: red ? 'none' : 'rotate(45deg)',
            borderTop: red ? `48px solid transparent` : 'none',
            borderLeft: red ? `38px solid transparent` : 'none',
            borderRight: red ? `38px solid transparent` : 'none',
            borderBottom: red ? `48px solid ${color}` : 'none',
          }}
        />
      </div>
      <div style={{ display: 'flex', fontWeight: 900, fontSize: 36, color, lineHeight: 1, fontFamily: 'sans-serif', alignSelf: 'flex-end', transform: 'rotate(180deg)' }}>
        {rank}
      </div>
    </div>
  );
}

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
          alignItems: 'center',
        }}
      >
        {/* Left: title */}
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
            <div style={{ display: 'flex', fontSize: 22, color: '#141410', opacity: 0.45, fontFamily: 'sans-serif', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Card streak challenge on Base
            </div>
            <div style={{ display: 'flex', fontSize: 18, color: '#141410', opacity: 0.3, fontFamily: 'sans-serif' }}>
              One miss ends the game
            </div>
          </div>
        </div>

        {/* Right: card fan */}
        <div style={{ display: 'flex', position: 'relative', width: 380, height: 280, flexShrink: 0 }}>
          <OgCard rank="Q" red={true}  rotate={-14} offsetX={20}  zIndex={1} />
          <OgCard rank="A" red={false} rotate={0}   offsetX={110} zIndex={3} />
          <OgCard rank="7" red={true}  rotate={14}  offsetX={200} zIndex={1} />
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
