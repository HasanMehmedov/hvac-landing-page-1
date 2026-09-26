'use client'

import { useState } from 'react'
import { ShieldCheck, CheckCircle2, Star, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

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

const TRUST_BULLETS = [
  { icon: ShieldCheck, label: 'Fully licensed and insured' },
  { icon: CheckCircle2, label: 'No pushy sales visits' },
  { icon: Star, label: '4.9★ rating, 2,800+ homes serviced' },
]

export function QuoteSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    notes: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else {
      const phoneDigits = formData.phone.replace(/\D/g, '')
      if (phoneDigits.length < 7) {
        newErrors.phone = 'Please enter a valid phone number'
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address'
      }
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Property address or ZIP code is required'
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    // TODO: wire up to real form submission endpoint/CRM

    setSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <section id="quote" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange">
            GET STARTED
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get your free, no-obligation quote
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground text-center">
            Tell us a bit about your home and a certified technician will follow up
            with an accurate, all-inclusive price — no guesswork, no pushy sales visits.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-2xl" delay={120}>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center py-8 text-center animate-fade-in">
                <span className="flex size-16 items-center justify-center rounded-full bg-success-soft text-success">
                  <Check className="size-8" />
                </span>
                <h3 className="mt-5 text-2xl font-bold text-foreground">
                  Quote request received!
                </h3>
                <p className="mt-3 text-base text-muted-foreground max-w-md">
                  Thanks! A certified technician will reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Full Name */}
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="quote-name"
                      className="block text-sm font-semibold text-foreground"
                    >
                      Full name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="e.g. Jane Doe"
                      className={cn(
                        'mt-2 w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-orange focus:ring-2 focus:ring-orange/20',
                        errors.name ? 'border-destructive' : 'border-border',
                      )}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="quote-phone"
                      className="block text-sm font-semibold text-foreground"
                    >
                      Phone number <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="(555) 000-0000"
                      className={cn(
                        'mt-2 w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-orange focus:ring-2 focus:ring-orange/20',
                        errors.phone ? 'border-destructive' : 'border-border',
                      )}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="quote-email"
                      className="block text-sm font-semibold text-foreground"
                    >
                      Email address <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="jane@example.com"
                      className={cn(
                        'mt-2 w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-orange focus:ring-2 focus:ring-orange/20',
                        errors.email ? 'border-destructive' : 'border-border',
                      )}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
                    )}
                  </div>

                  {/* Property address or ZIP code */}
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="quote-address"
                      className="block text-sm font-semibold text-foreground"
                    >
                      Property address or ZIP code <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="quote-address"
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleChange('address', e.target.value)}
                      placeholder="123 Main St or 90210"
                      className={cn(
                        'mt-2 w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-orange focus:ring-2 focus:ring-orange/20',
                        errors.address ? 'border-destructive' : 'border-border',
                      )}
                    />
                    {errors.address && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.address}</p>
                    )}
                  </div>

                  {/* Service needed */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="quote-service"
                      className="block text-sm font-semibold text-foreground"
                    >
                      Service needed <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="quote-service"
                      value={formData.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className={cn(
                        'mt-2 w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-orange focus:ring-2 focus:ring-orange/20',
                        errors.service ? 'border-destructive' : 'border-border',
                        !formData.service && 'text-muted-foreground',
                      )}
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="text-foreground">
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.service}</p>
                    )}
                  </div>

                  {/* Notes (textarea) */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="quote-notes"
                      className="block text-sm font-semibold text-foreground"
                    >
                      Notes <span className="text-xs font-normal text-muted-foreground">(optional)</span>
                    </label>
                    <textarea
                      id="quote-notes"
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => handleChange('notes', e.target.value)}
                      placeholder="Tell us about your home size, current system, or any specific requests..."
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-orange focus:ring-2 focus:ring-orange/20 resize-y"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-orange font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-orange-light hover:shadow-md"
                >
                  Request my free quote
                </Button>
              </form>
            )}

            {/* Trust bullets */}
            <div className="mt-8 border-t border-border pt-6">
              <ul className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-left">
                {TRUST_BULLETS.map((bullet) => (
                  <li
                    key={bullet.label}
                    className="flex items-center gap-2 text-xs font-medium text-muted-foreground"
                  >
                    <bullet.icon className="size-4 shrink-0 text-orange" aria-hidden="true" />
                    <span>{bullet.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
