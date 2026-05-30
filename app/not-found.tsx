import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center px-6 py-20 sm:px-10 md:px-16 font-[family-name:var(--font-geist-sans)]">
      <ThemeToggle />
      <main className="mx-auto w-full max-w-2xl lg:-translate-x-8">
        <div className="flex flex-col items-start gap-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            404
          </p>
          <h1 className="text-main-heading font-bold leading-tight">Page not found</h1>
          <p className="max-w-md text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
          </p>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-base font-medium text-foreground transition-opacity hover:opacity-80"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back home
          </Link>
        </div>
      </main>
    </div>
  );
}
