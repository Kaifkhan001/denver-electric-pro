'use client'

import { useState, type FormEvent } from 'react'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'

const SERVICE_OPTIONS = [
  'Panel upgrade',
  'Outlet repair',
  'Ceiling fan',
  'EV charger',
  'Emergency',
  'Other',
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [mapFailed, setMapFailed] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setSubmitting(true)
    const form = event.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formspree.io/f/xqevqadw', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        setError('Something went wrong. Please call us at (720) 555-1234.')
      }
    } catch {
      setError('Something went wrong. Please call us at (720) 555-1234.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClasses =
    'mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-primary outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/40'

  return (
    <section id="contact" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-balance text-3xl font-bold text-primary sm:text-4xl">
          Get a Free Estimate
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Contact details */}
          <div>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-accent-foreground" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Phone</p>
                  <a
                    href="tel:+17205551234"
                    className="text-lg font-semibold text-primary hover:underline"
                  >
                    (720) 555-1234
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-accent-foreground" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <a
                    href="mailto:info@denverelectricpro.com"
                    className="font-semibold text-primary hover:underline"
                  >
                    info@denverelectricpro.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-accent-foreground" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Hours</p>
                  <p className="font-semibold text-primary">
                    Mon–Sat 7am–7pm
                  </p>
                  <p className="text-sm text-muted-foreground">Emergency: 24/7</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-accent-foreground" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Service Area
                  </p>
                  <p className="font-semibold text-primary">
                    Denver, Aurora, Lakewood, Arvada, Westminster
                  </p>
                </div>
              </li>
            </ul>

            {mapFailed ? (
              <div
                className="mt-6 flex w-full items-center justify-center rounded-lg text-sm text-muted-foreground"
                style={{ height: 220, background: 'var(--muted)' }}
              >
                Serving Denver, CO and surrounding areas
              </div>
            ) : (
              <iframe
                title="Denver service area map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-105.10%2C39.62%2C-104.78%2C39.83&layer=mapnik&marker=39.7392%2C-104.9903"
                className="mt-6 w-full rounded-lg border-0"
                style={{ height: 220 }}
                loading="lazy"
                onError={() => setMapFailed(true)}
              />
            )}
          </div>

          {/* Form */}
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
                <p
                  className="text-lg font-semibold"
                  style={{ color: '#16a34a' }}
                >
                  Thanks! We&apos;ll get back to you within a few hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate={false}>
                <input
                  type="hidden"
                  name="_subject"
                  value="New Estimate Request — Denver Electric Pro"
                />

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-primary"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="Full Name"
                      type="text"
                      required
                      autoComplete="name"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-primary"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="Phone Number"
                      type="tel"
                      required
                      autoComplete="tel"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-primary"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="Email Address"
                      type="email"
                      required
                      autoComplete="email"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="need"
                      className="text-sm font-medium text-primary"
                    >
                      What do you need help with?
                    </label>
                    <select
                      id="need"
                      name="Service Needed"
                      required
                      defaultValue=""
                      className={inputClasses}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-primary"
                    >
                      Message (optional)
                    </label>
                    <textarea
                      id="message"
                      name="Message"
                      rows={4}
                      className={inputClasses}
                    />
                  </div>

                  {error && (
                    <p className="text-sm font-medium text-destructive">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-70"
                  >
                    {submitting ? 'Sending…' : 'Send My Request'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
