"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Navigation() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Navigation links
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : ""}`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-main-heading font-bold text-xl brand-name-spacing">Vinay Kumar</span>
          </Link>

          {!isMobile && (
            <nav className="hidden md:flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-foreground/80 ${pathname === link.href ? "text-foreground" : "text-foreground/60"}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-lg font-medium transition-colors hover:text-foreground/80 ${pathname === link.href ? "text-foreground" : "text-foreground/60"}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  )
}
