"use client"

import { Skeleton } from "./skeleton"

export function SkillsLoading() {
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
            <Skeleton className="h-12 w-72 sm:h-14 sm:w-80" />
            <div className="space-y-3">
              <Skeleton className="h-6 w-full max-w-2xl" />
              <Skeleton className="h-6 w-5/6 max-w-2xl" />
            </div>
          </div>
        </div>

        <div className="w-full space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-6">
                <Skeleton className="h-6 w-40" />
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Skeleton key={j} className="h-7 w-16 rounded-full" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <Skeleton className="h-8 w-48" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-6 w-48" />
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-4/5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 sm:flex-row sm:gap-4">
          <Skeleton className="h-11 w-44 rounded-full" />
          <Skeleton className="h-11 w-44 rounded-full" />
        </div>
      </main>
    </div>
  )
}
