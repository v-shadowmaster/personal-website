"use client"

import { Skeleton } from "./skeleton"

export function AboutLoading() {
  return (
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="sticky top-20">
            <Skeleton className="h-64 w-64 mx-auto rounded-full mb-6" />
            <Skeleton className="h-8 w-48 mx-auto mb-2" />
            <Skeleton className="h-5 w-40 mx-auto mb-6" />

            <div className="flex justify-center space-x-4 mb-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-6 w-6 rounded" />
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-8">
          <section>
            <Skeleton className="h-8 w-32 mb-4" />
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-5/6" />
                </div>
              ))}
            </div>
          </section>

          <section>
            <Skeleton className="h-8 w-24 mb-4" />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="border rounded-lg p-6 mb-6 last:mb-0">
                <Skeleton className="h-6 w-40 mb-3" />
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Skeleton key={j} className="h-6 w-16 rounded-full" />
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section>
            <Skeleton className="h-8 w-32 mb-4" />
            <div className="border rounded-lg p-6">
              <Skeleton className="h-6 w-64 mb-2" />
              <Skeleton className="h-5 w-48 mb-2" />
              <Skeleton className="h-4 w-full" />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
