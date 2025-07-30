import type React from "react"
import { cn } from "@/lib/utils"

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>

export function Skeleton({ className, ...props }: SkeletonProps) {
  return <div className={cn("animate-pulse rounded-md bg-gray-200 dark:bg-gray-800", className)} {...props} />
}
