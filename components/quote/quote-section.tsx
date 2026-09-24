'use client'

import { FormEvent, useState } from 'react'
import { Check, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'

const SERVICE_OPTIONS = [
  'Air Conditioning',
  'Heating Systems',
  'Heat Pumps',
  'Ductless Mini-Splits',
  'Ductwork',
  'Commercial HVAC',
  'Indoor Air Quality',
  'Maintenance & Repairs',
  'Not sure yet',
]

const TRUST_SIGNALS = [
  'Fully licensed and insured',
  'No pushy sales visits',
  '4.9★ rating, 2,800+ homes serviced',
]

const inputClassName =
  'mt-2 h-12 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-orange focus:ring-2 focus:ring-orange/20'

export function QuoteSection() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const email = String(data.get('email') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()

    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (!/^[+\d][\d\s().-]{7,}$/.test(phone)) {
      setError('Please enter a valid phone number.')
      return
    }

    setError('')
    // TODO: wire this up to actual form submission endpoint/CRM.
    setSubmitted(true)
  }

  return (
    <section id="quote" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange">
            Get started
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get your free, no-obligation quote
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Tell us a bit about your home and a certified technician will follow up with an accurate, all-inclusive price — no guesswork, no pushy sales visits.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-3xl" direction="up">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="flex min-h-80 flex-col items-center justify-center text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-success/15 text-success">
                  <Check className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-2xl font-bold text-foreground">Thanks!</h3>
                <p className="mt-2 max-w-md text-muted-foreground">
                  A certified technician will reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-semibold text-foreground">
                    Full name
                    <input className={inputClassName} name="name" required autoComplete="name" />
                  </label>
                  <label className="text-sm font-semibold text-foreground">
                    Phone number
                    <input className={inputClassName} name="phone" type="tel" required autoComplete="tel" inputMode="tel" />
                  </label>
                  <label className="text-sm font-semibold text-foreground">
                    Email
                    <input className={inputClassName} name="email" type="email" required autoComplete="email" />
                  </label>
                  <label className="text-sm font-semibold text-foreground">
                    Property address or ZIP code
                    <input className={inputClassName} name="address" required autoComplete="street-address" />
                  </label>
                </div>

                <label className="block text-sm font-semibold text-foreground">
                  Service needed
                  <select className={inputClassName} name="service" required defaultValue="">
                    <option value="" disabled>Select a service</option>
                    {SERVICE_OPTIONS.map((service) => <option key={service}>{service}</option>)}
                  </select>
                </label>

                <label className="block text-sm font-semibold text-foreground">
                  Notes <span className="font-normal text-muted-foreground">(optional)</span>
                  <textarea className="mt-2 min-h-28 w-full resize-y rounded-lg border border-border bg-background px-3 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-orange focus:ring-2 focus:ring-orange/20" name="notes" />
                </label>

                {error && <p className="text-sm font-medium text-destructive" role="alert">{error}</p>}

                <Button type="submit" size="lg" className="w-full bg-orange font-semibold text-primary-foreground hover:bg-orange-light sm:w-auto">
                  Request my free quote
                </Button>

                <ul className="flex flex-col gap-2 border-t border-border pt-5 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {TRUST_SIGNALS.map((signal) => (
                    <li key={signal} className="flex items-center gap-2">
                      <ShieldCheck className="size-4 shrink-0 text-success" aria-hidden="true" />
                      {signal}
                    </li>
                  ))}
                </ul>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

type QuoteSectionProps = never
void (undefined as unknown as QuoteSectionProps)
