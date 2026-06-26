import { Phone, ShieldCheck, Clock, BadgeCheck } from 'lucide-react'

const BADGES = [
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: Clock, label: 'Same Day Service' },
  { icon: BadgeCheck, label: 'Free Estimates' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center bg-primary bg-cover bg-center"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1400)',
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0,0,0,0.60)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h1 className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Denver&apos;s Trusted Electrician — Licensed &amp; Ready Today
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-white/85">
            From panel upgrades to outlet repairs — safe, fast, and done right
            the first time.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+17205551234"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              <Phone className="size-5" />
              Call Now — (720) 555-1234
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-white/70 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get a Free Estimate
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {BADGES.map((badge) => (
              <li
                key={badge.label}
                className="flex items-center gap-2 text-sm font-medium text-white/90"
              >
                <badge.icon className="size-5 text-accent" />
                {badge.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
