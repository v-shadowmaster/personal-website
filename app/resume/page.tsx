import type { Metadata } from 'next';
import { Download } from 'lucide-react';
import ResumeViewer from '@/components/resume-viewer';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Professional experience and qualifications of Vinay Kumar L.',
};

export default function ResumePage() {
  return (
    <div className="relative min-h-screen px-6 py-20 sm:px-10 md:px-16 font-[family-name:var(--font-geist-sans)]">
      <div className="mx-auto w-full max-w-4xl lg:-translate-x-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-main-heading font-bold leading-tight">Resume</h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              My professional experience and qualifications
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
    </div>
  );
}
