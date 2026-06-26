import { Star } from 'lucide-react'

type Review = {
  name: string
  stars: number
  text: string
}

const REVIEWS: Review[] = [
  {
    name: 'Mark R.',
    stars: 5,
    text: 'Had a flickering panel issue that felt dangerous. They came out same day, explained everything clearly, and fixed it properly. Worth every penny.',
  },
  {
    name: 'Christine L.',
    stars: 5,
    text: 'Needed an EV charger installed before the weekend. They made it happen. Clean work, fair price, no hassle.',
  },
  {
    name: 'Tom B.',
    stars: 5,
    text: 'Called about a tripping breaker at 9pm. They answered, walked me through it, and came out next morning. Genuinely great service.',
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-balance text-center text-3xl font-bold text-primary sm:text-4xl">
          What Our Customers Say
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <div className="flex gap-1" aria-label={`${review.stars} out of 5 stars`}>
                {Array.from({ length: review.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 text-accent"
                    fill="currentColor"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-primary/90">
                {`"${review.text}"`}
              </blockquote>
              <figcaption className="mt-5 font-semibold text-primary">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
