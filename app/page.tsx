import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { PageTransition } from '@/components/page-transition';
import { SocialLinks } from '@/components/social-links';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <PageTransition>
      <div className="relative flex min-h-screen items-center px-6 py-20 sm:px-10 md:px-16 font-[family-name:var(--font-geist-sans)]">
        <ThemeToggle />
        {/* Centered column, nudged a hair left of center on larger screens.
            Tune the lean with the lg:-translate-x value (larger = more left). */}
        <main className="mx-auto w-full max-w-2xl lg:-translate-x-8">
          <div className="flex w-full flex-col items-start gap-12">
            <div className="w-full space-y-6">
            <a
              href="https://twitter.com/vinaykumar"
              target="_blank"
              rel="noopener noreferrer"
              className="group block transition-opacity duration-300 ease-in-out hover:opacity-80 focus:opacity-80 focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <h1 className="text-main-heading font-bold leading-tight brand-name-spacing font-[family-name:var(--font-circularStd-Light)]">
                  VINAY KUMAR L
                </h1>
                <ArrowUpRight className="h-5 w-5 -translate-x-1 text-gray-600 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 dark:text-gray-400 sm:h-6 sm:w-6" />
              </div>
            </a>

            <div className="space-y-6">
              <Link href="/skills" className="group block w-fit">
                <div className="flex items-center gap-3">
                  <h2 className="text-main-heading font-bold leading-tight transition-opacity duration-300 ease-in-out group-hover:opacity-80">
                    Software Engineer - 1
                  </h2>
                  <ArrowUpRight className="h-5 w-5 -translate-x-1 text-gray-600 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 dark:text-gray-400 sm:h-6 sm:w-6" />
                </div>
              </Link>

              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                Building clean, architected, scalable software systems with
                first‑principles problem‑solving, focusing only on what matters
                and harnessing modern tools and human‑AI collaboration —{' '}
                <Link
                  href="/blog"
                  className="font-semibold text-black underline-offset-4 hover:underline dark:text-white"
                >
                  documented insights &amp; learnings
                </Link>
              </p>
            </div>
            </div>

            <SocialLinks />
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
