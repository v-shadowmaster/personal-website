import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CalendarIcon, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { blogPosts, getPostBySlug } from '@/lib/posts';

interface Props {
  params: Promise<{ slug: string }>;
}

// Pre-render every post at build time (SSG); revalidate hourly (ISR).
export const revalidate = 3600;
// The post set is fixed, so any slug outside generateStaticParams is a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post not found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen px-6 py-20 sm:px-10 md:px-16 font-[family-name:var(--font-geist-sans)]">
      <div className="mx-auto w-full max-w-4xl lg:-translate-x-8">
        <article className="max-w-2xl">
          <Link
            href="/blog"
            className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to all articles
          </Link>

          <header className="space-y-5">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarIcon className="h-4 w-4" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-main-heading font-bold leading-tight">{post.title}</h1>
            <div className="flex flex-wrap gap-2">
              {post.categories.map((category) => (
                <Badge key={category} variant="secondary">
                  {category}
                </Badge>
              ))}
            </div>
          </header>

          <div
            className="prose prose-lg dark:prose-invert mt-10 max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:font-medium prose-a:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}
