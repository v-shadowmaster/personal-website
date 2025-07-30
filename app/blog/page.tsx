"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { PageTransition } from "@/components/page-transition"
import { BlogLoading } from "@/components/loading/blog-loading"
import { useLoading } from "@/hooks/use-loading"
import { ArrowUpRight } from "lucide-react"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    excerpt:
      "A deep dive into architecting React applications that can grow with your team and requirements, leveraging TypeScript for better developer experience.",
    date: "2024-01-15",
    readTime: "8 min read",
    slug: "scalable-react-typescript",
  },
  {
    id: 2,
    title: "First-Principles Problem Solving in Software Engineering",
    excerpt:
      "How breaking down complex problems to their fundamental components leads to more elegant and maintainable solutions.",
    date: "2024-01-08",
    readTime: "12 min read",
    slug: "first-principles-problem-solving",
  },
  {
    id: 3,
    title: "Human-AI Collaboration in Modern Development",
    excerpt:
      "Exploring how AI tools can augment human creativity and problem-solving capabilities without replacing the critical thinking process.",
    date: "2024-01-01",
    readTime: "10 min read",
    slug: "human-ai-collaboration",
  },
]

export default function BlogPage() {
  const { isLoading } = useLoading({ delay: 200, minLoadingTime: 1100 })

  if (isLoading) {
    return <BlogLoading />
  }

  return (
    <PageTransition>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative">
        <ThemeToggle />
        <main className="flex flex-col gap-12 row-start-2 items-start w-full max-w-4xl">
          <div className="flex flex-col gap-8">
            <Link
              href="/"
              className="group font-bold leading-tight tracking-tight hover:opacity-80 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center gap-3">
                <span className="text-main-heading brand-name-spacing">VINAY KUMAR</span>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-x-0 group-hover:translate-x-1">
                  <ArrowUpRight className="h-6 w-6 sm:h-7 sm:w-7 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200" />
                </div>
              </div>
            </Link>
            <div className="text-left space-y-8">
              <h1 className="text-main-heading font-bold leading-tight">Documented Insights & Learnings</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-[600px]">
                Thoughts on software engineering, system architecture, and the intersection of human creativity with
                AI-powered development.
              </p>
            </div>
          </div>

          <div className="w-full space-y-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="border-b border-gray-200 dark:border-gray-800 pb-12 last:border-b-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group hover:opacity-80 transition-all duration-300 ease-in-out"
                    >
                      <div className="flex items-center gap-3">
                        {post.title}
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-x-0 group-hover:translate-x-1">
                          <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 flex-shrink-0" />
                        </div>
                      </div>
                    </Link>
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group inline-flex items-center font-semibold text-black dark:text-white hover:underline transition-all duration-300 ease-in-out"
                  >
                    <span>Read more</span>
                    <div className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-x-0 group-hover:translate-x-1">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="flex gap-4 items-center flex-col sm:flex-row sm:items-start">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 min-w-44"
              href="https://github.com/v-shadowmaster"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 min-w-44"
              href="https://linkedin.com/in/vinaykumar-l"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </main>
      </div>
    </PageTransition>
  )
}
