const STATS = [
  { value: '15+', label: 'Years in Denver' },
  { value: '2,100+', label: 'Jobs Completed' },
  { value: '4.8★', label: 'Average Rating' },
]

export function About() {
  return (
    <section id="about" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-balance text-3xl font-bold text-primary sm:text-4xl">
              About Denver Electric Pro
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Denver Electric Pro has been keeping Denver homes safe and powered
              since 2009. We are a local, licensed electrical contractor — not a
              franchise, not a call center. When you call us, you get a real
              electrician, not a salesperson.
            </p>

            <dl className="mt-8 grid grid-cols-3 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card p-4 text-center"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-bold text-primary sm:text-3xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-sm leading-snug text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="order-first lg:order-last">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
              alt="Licensed electrician working on residential wiring"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
