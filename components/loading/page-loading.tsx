"use client"

import { Skeleton } from "./skeleton"

export function PageLoading() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative">
      {/* Theme toggle skeleton */}
      <div className="fixed bottom-8 right-8 z-50">
        <Skeleton className="w-12 h-12 rounded-full" />
      </div>

      <main className="flex flex-col gap-12 row-start-2 items-start">
        {/* Name skeleton with link icon space */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-80 sm:h-12 sm:w-96" />
          <Skeleton className="h-5 w-5 sm:h-6 sm:w-6 rounded opacity-0" />
        </div>

        <div className="text-left max-w-[600px] space-y-8">
          {/* Role skeleton with link icon space */}
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-72 sm:h-12 sm:w-80" />
            <Skeleton className="h-5 w-5 sm:h-6 sm:w-6 rounded opacity-0" />
          </div>

          {/* Paragraph skeleton */}
          <div className="space-y-3">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
          </div>
        </div>

        {/* Buttons skeleton */}
        <div className="flex gap-4 items-center flex-col sm:flex-row sm:items-start">
          <Skeleton className="h-10 w-44 sm:h-12 rounded-full" />
          <Skeleton className="h-10 w-44 sm:h-12 rounded-full" />
        </div>
      </main>
    </div>
  )
}
