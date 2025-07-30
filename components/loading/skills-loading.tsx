"use client"

import { Skeleton } from "./skeleton"

export function SkillsLoading() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative">
      {/* Theme toggle skeleton */}
      <div className="fixed bottom-8 right-8 z-50">
        <Skeleton className="w-12 h-12 rounded-full" />
      </div>

      <main className="flex flex-col gap-16 row-start-2 items-start w-full max-w-4xl">
        <div className="flex flex-col gap-8">
          <Skeleton className="h-12 w-80 sm:h-16 sm:w-96" />
          <div className="text-left space-y-8">
            <Skeleton className="h-12 w-72 sm:h-16 sm:w-80" />
            <div className="space-y-3">
              <Skeleton className="h-6 w-full max-w-[600px]" />
              <Skeleton className="h-6 w-5/6 max-w-[500px]" />
            </div>
          </div>
        </div>

        <div className="w-full space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-6">
                <Skeleton className="h-6 w-40" />
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 3 }).map((_, j) => (
                      <Skeleton key={j} className="h-7 w-16 rounded-full" />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 2 }).map((_, j) => (
                      <Skeleton key={j} className="h-7 w-20 rounded-full" />
                    ))}
                  </div>
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

        <div className="flex gap-4 items-center flex-col sm:flex-row sm:items-start">
          <Skeleton className="h-10 w-44 sm:h-12 rounded-full" />
          <Skeleton className="h-10 w-44 sm:h-12 rounded-full" />
        </div>
      </main>
    </div>
  )
}
