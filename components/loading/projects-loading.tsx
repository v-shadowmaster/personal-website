"use client"

import { Skeleton } from "./skeleton"

export function ProjectsLoading() {
  return (
    <div className="container py-12 md:py-16">
      <div className="space-y-4 mb-12">
        <Skeleton className="h-12 w-64 md:h-16 md:w-80" />
        <Skeleton className="h-6 w-full max-w-[700px]" />
        <Skeleton className="h-6 w-2/3 max-w-[500px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col overflow-hidden border rounded-lg">
            <Skeleton className="h-48 w-full" />
            <div className="p-6 space-y-4">
              <Skeleton className="h-6 w-3/4" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 3 }).map((_, j) => (
                  <Skeleton key={j} className="h-6 w-16 rounded-full" />
                ))}
              </div>
              <div className="flex justify-between pt-4">
                <Skeleton className="h-8 w-20 rounded-full" />
                <Skeleton className="h-8 w-24 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
