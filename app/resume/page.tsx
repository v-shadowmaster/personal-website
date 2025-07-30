"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import ResumeViewer from "@/components/resume-viewer"
import { ResumeLoading } from "@/components/loading/resume-loading"
import { useLoading } from "@/hooks/use-loading"

export default function ResumePage() {
  const { isLoading } = useLoading({ delay: 140, minLoadingTime: 900 })

  if (isLoading) {
    return <ResumeLoading />
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resume</h1>
          <p className="text-muted-foreground mt-2">My professional experience and qualifications</p>
        </div>
        <Button asChild>
          <a href="/sample-resume.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </Button>
      </div>

      <div className="bg-card border rounded-lg overflow-hidden">
        <ResumeViewer />
      </div>
    </div>
  )
}
