import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';

export const alt = 'Vinay Kumar L — Software Engineer - 1';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Branded social card, generated on demand — left-aligned and dark to echo
// the site's design language.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '96px',
          background: '#0a0a0a',
          color: '#ededed',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 88,
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
          }}
        >
          VINAY KUMAR L
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 24,
            fontSize: 46,
            fontWeight: 700,
            color: '#d4d4d4',
          }}
        >
          Software Engineer - 1
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 36,
            maxWidth: 900,
            fontSize: 28,
            lineHeight: 1.45,
            color: '#8a8a8a',
          }}
        >
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
