import { ImageResponse } from 'next/og';
import { blogPosts, getPostBySlug } from '@/lib/posts';

export const alt = 'Article — Vinay Kumar L';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// Per-article social card with the post title.
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? 'Vinay Kumar L';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '96px',
          background: '#0a0a0a',
          color: '#ededed',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#8a8a8a',
          }}
        >
          Blog
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            fontWeight: 600,
            color: '#d4d4d4',
          }}
        >
          Vinay Kumar L · Software Engineer
        </div>
      </div>
    ),
    { ...size }
  );
}
