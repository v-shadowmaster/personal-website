"use client"

import { Skeleton } from "./skeleton"

export function BlogLoading() {
  return (
    <div className="relative min-h-screen px-6 py-20 sm:px-10 md:px-16 font-[family-name:var(--font-geist-sans)]">
      {/* Theme toggle skeleton */}
      <div className="fixed bottom-8 right-8 z-50">
        <Skeleton className="w-12 h-12 rounded-full" />
      </div>

      <main className="mx-auto flex w-full max-w-4xl flex-col items-start gap-12 lg:-translate-x-8">
        <div className="flex flex-col gap-6">
          <Skeleton className="h-12 w-80 sm:h-14 sm:w-96" />
          <div className="space-y-6">
            <Skeleton className="h-12 w-full sm:h-14 max-w-2xl" />
            <div className="space-y-3">
              <Skeleton className="h-6 w-full max-w-2xl" />
              <Skeleton className="h-6 w-5/6 max-w-2xl" />
            </div>
          </div>
        </div>

        <div className="w-full space-y-12">
          {Array.from({ length: 3 }).map((_, i) => (
            <article key={i} className="border-b border-gray-200 dark:border-gray-800 pb-12 last:border-b-0">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-2" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <Skeleton className="h-8 w-full sm:h-10" />
                <div className="space-y-2">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-4/5" />
                </div>
                <Skeleton className="h-5 w-24" />
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-start gap-3 sm:flex-row sm:gap-4">
          <Skeleton className="h-11 w-44 rounded-full" />
          <Skeleton className="h-11 w-44 rounded-full" />
        </div>
      </main>
    </div>
  )
}
