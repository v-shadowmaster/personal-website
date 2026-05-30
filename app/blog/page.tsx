import type { Metadata } from 'next';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { PageTransition } from '@/components/page-transition';
import { SocialLinks } from '@/components/social-links';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Thoughts on software engineering, system architecture, and human-AI collaboration.',
};

// Statically rendered, revalidated at most hourly (ISR) so new writing can
// appear without a redeploy.
export const revalidate = 3600;

export default function BlogPage() {
  return (
    <PageTransition>
      <div className="relative min-h-screen px-6 py-20 sm:px-10 md:px-16 font-[family-name:var(--font-geist-sans)]">
        <ThemeToggle />
        <main className="mx-auto flex w-full max-w-4xl flex-col items-start gap-12 lg:-translate-x-8">
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="group block w-fit transition-opacity duration-300 ease-in-out hover:opacity-80 focus:opacity-80 focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <span className="text-main-heading font-bold leading-tight brand-name-spacing font-[family-name:var(--font-circularStd-Light)]">
                  VINAY KUMAR
                </span>
                <ArrowUpRight className="h-5 w-5 -translate-x-1 text-gray-600 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 dark:text-gray-400 sm:h-6 sm:w-6" />
              </div>
            </Link>
            <div className="space-y-6">
              <h1 className="text-main-heading font-bold leading-tight">
                Documented Insights & Learnings
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                Thoughts on software engineering, system architecture, and the
                intersection of human creativity with AI-powered development.
              </p>
            </div>
          </div>

          <div className="w-full space-y-12">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="border-b border-gray-200 pb-12 last:border-b-0 dark:border-gray-800"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group transition-opacity duration-300 ease-in-out hover:opacity-80"
                    >
                      <div className="flex items-center gap-3">
                        {post.title}
                        <ArrowUpRight className="h-5 w-5 flex-shrink-0 -translate-x-1 text-gray-600 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 dark:text-gray-400 sm:h-6 sm:w-6" />
                      </div>
                    </Link>
                  </h2>
                  <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group inline-flex items-center font-semibold text-black underline-offset-4 transition-all duration-300 ease-in-out hover:underline dark:text-white"
                  >
                    <span>Read more</span>
                    <ArrowUpRight className="ml-2 h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <SocialLinks />
        </main>
      </div>
    </PageTransition>
  );
}
