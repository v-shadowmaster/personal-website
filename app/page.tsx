import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { SocialLinks } from '@/components/social-links';
import { ArrowUpRight } from 'lucide-react';
import { siteUrl } from '@/lib/site';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vinay Kumar L',
  jobTitle: 'Software Engineer',
  url: siteUrl,
  sameAs: [
    'https://github.com/v-shadowmaster',
    'https://linkedin.com/in/vinay-kumar-l',
  ],
};

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center px-6 py-20 sm:px-10 md:px-16 font-[family-name:var(--font-geist-sans)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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
                Building scalable systems from first principles — focused on
                what matters, sharpened by modern tools and human‑AI
                collaboration. Read the work:{' '}
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
  );
}
