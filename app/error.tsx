'use client';

import { useEffect } from 'react';
import { RotateCcw } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex min-h-screen items-center px-6 py-20 sm:px-10 md:px-16 font-[family-name:var(--font-geist-sans)]">
      <ThemeToggle />
      <main className="mx-auto w-full max-w-2xl lg:-translate-x-8">
        <div className="flex flex-col items-start gap-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400">
            Error
          </p>
          <h1 className="text-main-heading font-bold leading-tight">
            Something went wrong
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Something broke on our end, not yours. Try again, or head back home.
          </p>
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-11 items-center justify-center gap-2.5 rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <RotateCcw className="h-[18px] w-[18px]" />
            Try again
          </button>
        </div>
      </main>
    </div>
  );
}
