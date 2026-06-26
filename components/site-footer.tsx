import { Zap, Phone } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="flex size-8 items-center justify-center rounded-md bg-accent">
                <Zap className="size-5 text-accent-foreground" fill="currentColor" />
              </span>
              <span className="text-lg">Denver Electric Pro</span>
            </div>
            <p className="mt-3 text-primary-foreground/70">Safe. Fast. Local.</p>
          </div>

          <nav className="flex flex-col gap-2">
            {QUICK_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-foreground/80 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:+17205551234"
            className="inline-flex items-center gap-2 self-start rounded-md bg-accent px-5 py-3 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            <Phone className="size-5" />
            (720) 555-1234
          </a>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-sm text-primary-foreground/60">
          <p>Serving Denver, CO and surrounding areas</p>
          <p className="mt-1">
            © 2025 Denver Electric Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
