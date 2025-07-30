"use client"

import { Skeleton } from "./skeleton"

export function ContactLoading() {
  return (
    <div className="container py-12 md:py-16">
      <div className="space-y-4 mb-12">
        <Skeleton className="h-12 w-64 md:h-16 md:w-80" />
        <Skeleton className="h-6 w-full max-w-[700px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="border rounded-lg">
            <div className="p-6 border-b">
              <Skeleton className="h-6 w-40 mb-2" />
              <Skeleton className="h-5 w-80" />
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-32 w-full rounded-md" />
              </div>
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          </div>
        </div>

        <div>
          <div className="border rounded-lg">
            <div className="p-6 border-b">
              <Skeleton className="h-6 w-48 mb-2" />
              <Skeleton className="h-5 w-40" />
            </div>
            <div className="p-6 space-y-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <Skeleton className="h-5 w-5 rounded mt-0.5" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-16 mb-1" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t">
                <Skeleton className="h-5 w-32 mb-4" />
                <div className="flex space-x-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Skeleton key={i} className="h-5 w-5 rounded" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
