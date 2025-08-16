"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { PageTransition } from "@/components/page-transition"
import { ArrowUpRight } from "lucide-react"

export default function Home() {
  return (
    <PageTransition>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative">
        <ThemeToggle />
        <main className="flex flex-col gap-12 row-start-2 items-start">
          <a
            href="https://twitter.com/vinaykumar"
            target="_blank"
            rel="noopener noreferrer"
            className="group block hover:opacity-80 transition-all duration-300 ease-in-out focus:outline-none focus:opacity-80 relative"
          >

            <div className="flex items-center gap-3 group">
              <h1 className="text-main-heading font-bold leading-tight brand-name-spacing font-[family-name:var(--font-circularStd-Light)]">
                VINAY KUMAR L
              </h1>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-x-0 group-hover:translate-x-1">
                <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200" />
              </div>
            </div>
          </a>

          <div className="text-left max-w-[600px] space-y-8">
            <Link href="/skills" className="group block">
              <div className="flex items-center gap-3">
                <h2 className="text-main-heading font-bold leading-tight hover:opacity-80 transition-all duration-300 ease-in-out focus:outline-none focus:opacity-80 ">
                  Software Developer Engineer - 1
                </h2>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-x-0 group-hover:translate-x-1">
                  <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200" />
                </div>
              </div>
            </Link>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed ">
              Building clean, architected, scalable software systems with first‑principles problem‑solving, focusing
              only on what matters and harnessing modern tools and human‑AI collaboration —{" "}
              <Link href="/blog" className="font-semibold text-black dark:text-white hover:underline">
                documented insights & learnings
              </Link>
            </p>
          </div>

          <div className="flex gap-4 items-center flex-col sm:flex-row sm:items-start">
            <a
              className="rounded-full border border-solid border-gray-300 dark:border-white/[.145] transition-colors flex items-center justify-center bg-transparent hover:bg-gray-50 dark:hover:bg-[#1a1a1a] hover:border-gray-400 dark:hover:border-transparent text-base sm:text-lg h-10 sm:h-12 px-4 sm:px-5 min-w-44  "
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
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              className="rounded-full border border-solid border-gray-300 dark:border-white/[.145] transition-colors flex items-center justify-center bg-transparent hover:bg-gray-50 dark:hover:bg-[#1a1a1a] hover:border-gray-400 dark:hover:border-transparent text-base sm:text-lg h-10 sm:h-12 px-4 sm:px-5 min-w-44"
              href="https://linkedin.com/in/vinay-kumar-l"
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
