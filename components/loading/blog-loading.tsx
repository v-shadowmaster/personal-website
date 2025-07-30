"use client"

import { Skeleton } from "./skeleton"

export function BlogLoading() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative">
      {/* Theme toggle skeleton */}
      <div className="fixed bottom-8 right-8 z-50">
        <Skeleton className="w-12 h-12 rounded-full" />
      </div>

      <main className="flex flex-col gap-12 row-start-2 items-start w-full max-w-4xl">
        <div className="flex flex-col gap-8">
          <Skeleton className="h-12 w-80 sm:h-16 sm:w-96" />
          <div className="text-left space-y-8">
            <Skeleton className="h-12 w-full sm:h-16" />
            <div className="space-y-3">
              <Skeleton className="h-6 w-full max-w-[600px]" />
              <Skeleton className="h-6 w-5/6 max-w-[500px]" />
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

        <div className="flex gap-4 items-center flex-col sm:flex-row sm:items-start">
          <Skeleton className="h-10 w-44 sm:h-12 rounded-full" />
          <Skeleton className="h-10 w-44 sm:h-12 rounded-full" />
        </div>
      </main>
    </div>
  )
}
