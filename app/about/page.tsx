"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { AboutLoading } from "@/components/loading/about-loading"
import { useLoading } from "@/hooks/use-loading"

export default function AboutPage() {
  const { isLoading } = useLoading({ delay: 180, minLoadingTime: 1050 })

  // Skills data
  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS"],
    backend: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code", "Docker", "AWS", "Vercel"],
  }

  if (isLoading) {
    return <AboutLoading />
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="sticky top-20">
            <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-6">
              <Image
                src="/placeholder.svg?height=256&width=256"
                alt="Vinay Kumar"
                fill
                className="object-cover"
                sizes="256px"
                priority
              />
            </div>
            <h1 className="font-brand-name text-2xl font-bold text-center mb-2 brand-name-spacing">Vinay Kumar L</h1>
            <p className="text-center text-muted-foreground mb-6">Full-Stack Software Engineer</p>

            <div className="flex justify-center space-x-4 mb-6">
              <a
                href="https://github.com/vinaykumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/vinaykumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://twitter.com/vinaykumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm Vinay Kumar, a passionate full-stack software engineer with a strong foundation in modern web
                technologies. I recently completed my degree in Computer Science and am excited to apply my skills in a
                professional setting.
              </p>
              <p>
                My journey in software development began during my university years, where I discovered my passion for
                creating web applications. Since then, I've been continuously learning and building projects to enhance
                my skills.
              </p>
              <p>
                I enjoy solving complex problems and creating intuitive, user-friendly applications. My goal is to work
                in a collaborative environment where I can contribute to meaningful projects while continuing to grow as
                a developer.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                <p className="text-muted-foreground">University of Technology, 2021-2025</p>
                <p className="mt-2">
                  Relevant coursework: Data Structures and Algorithms, Web Development, Database Systems, Software
                  Engineering
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
