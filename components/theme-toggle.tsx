"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === "dark"
  const toggleTheme = () => setTheme(isDark ? "light" : "dark")

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed bottom-8 right-8 z-50 flex items-center justify-center bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-white/95 dark:hover:bg-gray-900/95 ${
        isHovered ? "rounded-full px-6 py-3 min-w-[180px] h-12" : "rounded-full w-12 h-12"
      }`}
    >
      <div className="flex items-center gap-3">
        {isDark ? (
          <Moon className="h-4 w-4 flex-shrink-0 text-gray-700 dark:text-gray-300" />
        ) : (
          <Sun className="h-4 w-4 flex-shrink-0 text-gray-700 dark:text-gray-300" />
        )}
        <span
          className={`text-sm font-medium whitespace-nowrap text-gray-700 dark:text-gray-300 transition-all duration-300 ${
            isHovered ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"
          }`}
        >
          Change to {isDark ? "Light" : "Dark"} Mode
        </span>
      </div>
    </button>
  )
}
