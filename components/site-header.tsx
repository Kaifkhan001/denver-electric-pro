'use client'

import { useEffect, useState } from 'react'
import { Zap, Phone, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-shadow ${
        scrolled
          ? 'border-border bg-background/95 shadow-sm backdrop-blur'
          : 'border-transparent bg-background'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 font-semibold tracking-tight text-primary"
        >
          <span className="flex size-8 items-center justify-center rounded-md bg-accent">
            <Zap className="size-5 text-accent-foreground" fill="currentColor" />
          </span>
          <span className="text-lg">Denver Electric Pro</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+17205551234"
            className="hidden items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 sm:inline-flex"
          >
            <Phone className="size-4" />
            Call Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex size-10 items-center justify-center rounded-md text-primary md:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-primary transition-colors hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+17205551234"
              className="mt-2 mb-2 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-base font-semibold text-accent-foreground"
            >
              <Phone className="size-4" />
              Call Now — (720) 555-1234
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
