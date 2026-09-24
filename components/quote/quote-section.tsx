'use client'

import { FormEvent, useState } from 'react'
import { CheckCircle2, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'

const SERVICE_OPTIONS = ['Air Conditioning', 'Heating Systems', 'Heat Pumps', 'Ductless Mini-Splits', 'Ductwork', 'Commercial HVAC', 'Indoor Air Quality', 'Maintenance & Repairs', 'Not sure yet']
const TRUST_SIGNALS = ['Fully licensed and insured', 'No pushy sales visits', '4.9★ rating, 2,800+ homes serviced']

export function QuoteSection() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    const form = event.currentTarget
    const data = new FormData(form)
    const email = String(data.get('email') ?? '')
    const phoneDigits = String(data.get('phone') ?? '').replace(/\D/g, '')
    if (!form.checkValidity()) {
      setError('Please complete all required fields.')
      form.reportValidity()
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    if (phoneDigits.length < 10) {
      setError('Please enter a valid phone number.')
      return
    }
    setSubmitted(true)
  }

  return (
    <section id="quote" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange">Get started</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get your free, no-obligation quote</h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">Tell us a bit about your home and a certified technician will follow up with an accurate, all-inclusive price — no guesswork, no pushy sales visits.</p>
        </Reveal>
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="flex min-h-80 flex-col items-center justify-center text-center">
                <CheckCircle2 className="size-12 text-success" aria-hidden="true" />
                <h3 className="mt-5 text-2xl font-bold text-foreground">Thanks for reaching out.</h3>
                <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">A certified technician will reach out within 24 hours with the next steps for your free quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" type="text" required />
                  <Field label="Phone number" name="phone" type="tel" required inputMode="tel" />
                  <Field label="Email" name="email" type="email" required inputMode="email" />
                  <Field label="Property address or ZIP code" name="address" type="text" required />
                  <label className="grid gap-2 text-sm font-semibold text-foreground sm:col-span-2">Service needed<select name="service" required className="h-11 rounded-lg border border-border bg-background px-3 font-normal outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"><option value="">Select a service</option>{SERVICE_OPTIONS.map((service) => <option key={service}>{service}</option>)}</select></label>
                  <label className="grid gap-2 text-sm font-semibold text-foreground sm:col-span-2">Notes <span className="font-normal text-muted-foreground">(optional)</span><textarea name="notes" rows={4} className="resize-y rounded-lg border border-border bg-background px-3 py-2 font-normal outline-none focus:border-orange focus:ring-2 focus:ring-orange/20" /></label>
                </div>
                {error && <p role="alert" className="mt-5 text-sm font-medium text-destructive">{error}</p>}
                <Button type="submit" size="lg" className="mt-6 w-full bg-orange font-semibold text-primary-foreground hover:bg-orange-light sm:w-auto">Request my free quote</Button>
              </form>
            )}
          </div>
        </Reveal>
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">{TRUST_SIGNALS.map((signal) => <span key={signal} className="inline-flex items-center gap-2"><ShieldCheck className="size-4 text-success" aria-hidden="true" />{signal}</span>)}</div>
      </div>
    </section>
  )
}

function Field({ label, name, type, required, inputMode }: { label: string; name: string; type: string; required?: boolean; inputMode?: 'email' | 'tel' }) {
  return <label className="grid gap-2 text-sm font-semibold text-foreground">{label}<input name={name} type={type} required={required} inputMode={inputMode} className="h-11 rounded-lg border border-border bg-background px-3 font-normal outline-none focus:border-orange focus:ring-2 focus:ring-orange/20" /></label>
}
