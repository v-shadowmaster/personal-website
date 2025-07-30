"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Mail, Phone, MapPin } from "lucide-react"

export default function ResumeFallback() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Vinay Kumar L</CardTitle>
          <CardDescription className="text-xl">Full Stack Software Engineer</CardDescription>
          <div className="flex justify-center gap-6 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              vinay.kumar@example.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +1 (555) 123-4567
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              San Francisco, CA
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Experience */}
      <Card>
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold">Full Stack Developer</h3>
            <p className="text-sm text-muted-foreground">Tech Company • 2023 - Present</p>
            <ul className="mt-2 text-sm space-y-1 list-disc list-inside">
              <li>Developed and maintained web applications using React, Next.js, and Node.js</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
              <li>Implemented responsive designs and optimized application performance</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Education */}
      <Card>
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-sm text-muted-foreground">University of Technology • 2021 - 2025</p>
            <p className="mt-2 text-sm">
              Relevant coursework: Data Structures and Algorithms, Web Development, Database Systems, Software
              Engineering
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-medium mb-2">Frontend</h4>
              <p className="text-sm text-muted-foreground">React, Next.js, TypeScript, Tailwind CSS</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Backend</h4>
              <p className="text-sm text-muted-foreground">Node.js, Python, PostgreSQL, MongoDB</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Tools</h4>
              <p className="text-sm text-muted-foreground">Git, Docker, AWS, Vercel</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Download Actions */}
      <div className="flex justify-center gap-4">
        <Button asChild>
          <a href="/sample-resume.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/sample-resume.pdf" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            View PDF
          </a>
        </Button>
      </div>
    </div>
  )
}
