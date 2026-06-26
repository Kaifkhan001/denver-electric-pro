import {
  Gauge,
  Plug,
  Fan,
  Car,
  Siren,
  Lightbulb,
  type LucideIcon,
} from 'lucide-react'

type Service = {
  icon: LucideIcon
  name: string
  description: string
}

const SERVICES: Service[] = [
  {
    icon: Gauge,
    name: 'Panel Upgrades',
    description:
      'Old or undersized panel? We upgrade it safely and up to code.',
  },
  {
    icon: Plug,
    name: 'Outlet & Switch Repair',
    description: 'Faulty outlets or switches fixed fast.',
  },
  {
    icon: Fan,
    name: 'Ceiling Fan Installation',
    description: 'New fan installed cleanly in a few hours.',
  },
  {
    icon: Car,
    name: 'EV Charger Installation',
    description: 'Home EV charging station installed by a licensed pro.',
  },
  {
    icon: Siren,
    name: 'Emergency Electrical',
    description: "24/7 for urgent electrical issues. Don't wait.",
  },
  {
    icon: Lightbulb,
    name: 'Lighting Installation',
    description: 'Recessed, pendant, or outdoor lighting — we handle it all.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-bold text-primary sm:text-4xl">
            What We Handle
          </h2>
          <p className="mt-3 text-pretty text-lg text-muted-foreground">
            Electrical services for homeowners across Greater Denver.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className="group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-accent">
                <service.icon className="size-6 text-primary" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-primary">
                {service.name}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
