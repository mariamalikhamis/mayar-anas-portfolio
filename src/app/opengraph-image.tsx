import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Mayar Anas · Architect';

// Link preview shown on LinkedIn, WhatsApp, X and Slack.
export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 80, background: '#F3F1EC', color: '#1A1A18', fontFamily: 'sans-serif' }}>
        <div style={{ display: 'flex', fontSize: 28, color: '#8C4A2F', fontWeight: 600 }}>Architect · Urban planning</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 104, fontWeight: 700, letterSpacing: -3 }}>Mayar Anas</div>
          <div style={{ fontSize: 44, color: '#5F5E58' }}>From the city scale to the last detail.</div>
        </div>
        <div style={{ display: 'flex', gap: 14, fontSize: 26 }}>
          {['Urban', 'Residential', 'Industrial', 'Marine', 'Healthcare'].map((x) => (
            <div key={x} style={{ padding: '10px 22px', borderRadius: 999, background: '#EFE3DC', color: '#7A3F27' }}>
              {x}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
