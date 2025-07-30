"use client"

import { Skeleton } from "./skeleton"

export function ResumeLoading() {
  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <Skeleton className="h-12 w-48 md:h-16 md:w-64 mb-2" />
          <Skeleton className="h-5 w-64" />
        </div>
        <Skeleton className="h-10 w-32 rounded-md" />
      </div>

      <div className="bg-card border rounded-lg overflow-hidden">
        <div className="bg-muted p-4 w-full flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-5 w-32" />
          </div>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-8 w-24 rounded-md" />
            <Skeleton className="h-8 w-24 rounded-md" />
          </div>
        </div>

        <div className="overflow-auto max-h-[calc(100vh-16rem)] w-full flex justify-center p-4 bg-muted/50">
          <div className="flex justify-center items-center h-[800px] w-full max-w-4xl">
            <Skeleton className="h-full w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}
