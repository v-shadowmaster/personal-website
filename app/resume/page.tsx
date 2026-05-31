import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Download } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { SocialLinks } from '@/components/social-links';
import ResumeViewer from '@/components/resume-viewer';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Vinay Kumar L — the systems I’ve shipped, the roles I’ve held, and how to reach me.',
};

export default function ResumePage() {
  return (
    <div className="relative min-h-screen px-6 py-20 sm:px-10 md:px-16 font-[family-name:var(--font-geist-sans)]">
      <ThemeToggle />
      <main className="mx-auto flex w-full max-w-4xl flex-col items-start gap-12 lg:-translate-x-8">
        <Link
          href="/"
          className="group block w-fit transition-opacity duration-300 ease-in-out hover:opacity-80 focus:opacity-80 focus:outline-none"
        >
          <div className="flex items-center gap-3">
            <span className="text-main-heading font-bold leading-tight brand-name-spacing font-[family-name:var(--font-circularStd-Light)]">
              VINAY KUMAR L
            </span>
            <ArrowUpRight className="h-5 w-5 -translate-x-1 text-gray-600 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100 dark:text-gray-400 sm:h-6 sm:w-6" />
          </div>
        </Link>

        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-main-heading font-bold leading-tight">Resume</h1>
              <p className="mt-2 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                The work, the shipped systems, and the people who&rsquo;ll vouch
                for both.
              </p>
            </div>
            <a
              href="/sample-resume.pdf"
              download
              className="inline-flex h-11 items-center justify-center gap-2.5 rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Download className="h-[18px] w-[18px]" />
              Download PDF
            </a>
          </div>

          <div className="bg-card border rounded-lg overflow-hidden">
            <ResumeViewer />
          </div>
        </div>

        <SocialLinks />
      </main>
    </div>
  );
}
