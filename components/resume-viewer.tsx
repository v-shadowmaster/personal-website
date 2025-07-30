"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, AlertCircle } from "lucide-react"
import ResumeFallback from "./resume-fallback"

export default function ResumeViewer() {
  const [isLoading, setIsLoading] = useState(true)
  const [showFallback, setShowFallback] = useState(false)
  const [pdfSupported, setPdfSupported] = useState(true)

  useEffect(() => {
    // Check if PDF viewing is supported
    const checkPdfSupport = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)

      if (isMobile) {
        setPdfSupported(false)
        setShowFallback(true)
        setIsLoading(false)
      }
    }

    checkPdfSupport()
  }, [])

  const handleIframeError = () => {
    setShowFallback(true)
    setIsLoading(false)
  }

  if (showFallback) {
    return (
      <div className="p-6">
        <div className="mb-6 p-4 bg-muted rounded-lg flex items-center gap-3">
          <AlertCircle className="h-5 w-5 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            PDF preview is not available on this device. You can download or view the resume using the buttons below.
          </p>
        </div>
        <ResumeFallback />
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <div className="bg-muted p-4 w-full flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">Resume Preview</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" asChild>
            <a href="/sample-resume.pdf" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Full Size
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="/sample-resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download
            </a>
          </Button>
        </div>
      </div>

      <div className="overflow-auto max-h-[calc(100vh-16rem)] w-full flex justify-center p-4 bg-muted/50">
        <div className="w-full max-w-4xl">
          {isLoading && pdfSupported && (
            <div className="flex justify-center items-center h-[800px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          )}
          {pdfSupported && (
            <iframe
              src="/sample-resume.pdf"
              className="w-full h-[800px] border-0 rounded-lg shadow-lg"
              title="Resume PDF"
              onLoad={() => setIsLoading(false)}
              onError={handleIframeError}
              style={{ display: isLoading ? "none" : "block" }}
            />
          )}
          {!isLoading && pdfSupported && (
            <div className="mt-4 text-center text-sm text-muted-foreground">
              <p>
                If the PDF doesn&apos;t display properly, you can{" "}
                <button onClick={() => setShowFallback(true)} className="text-primary hover:underline">
                  view the resume content
                </button>{" "}
                or{" "}
                <a href="/sample-resume.pdf" download className="text-primary hover:underline">
                  download it directly
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
