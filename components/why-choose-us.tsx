import { ShieldCheck, FileCheck, Sparkles, type LucideIcon } from 'lucide-react'

type Reason = {
  icon: LucideIcon
  title: string
  description: string
}

const REASONS: Reason[] = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description: 'Every job done to code. Fully licensed in Colorado.',
  },
  {
    icon: FileCheck,
    title: 'Upfront Quotes',
    description:
      'No surprise charges. You approve the price before we start.',
  },
  {
    icon: Sparkles,
    title: 'Clean & Respectful',
    description:
      'We treat your home carefully and clean up completely.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-balance text-center text-3xl font-bold text-primary sm:text-4xl">
          Why Denver Homeowners Choose Us
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {REASONS.map((reason) => (
            <div key={reason.title} className="flex flex-col items-center text-center">
              <span className="inline-flex size-14 items-center justify-center rounded-full bg-accent">
                <reason.icon className="size-7 text-accent-foreground" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-primary">
                {reason.title}
              </h3>
              <p className="mt-2 max-w-xs leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
