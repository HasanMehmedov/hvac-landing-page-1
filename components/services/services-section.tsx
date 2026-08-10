'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { ServiceCard } from '@/components/services/service-card'
import { SERVICES } from '@/lib/services'

export function ServicesSection() {
  const previewServices = SERVICES.slice(0, 3)

  return (
    <section
      id="services"
      className="border-b border-border bg-secondary py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="text-center text-3xl font-bold tracking-tight text-brand md:text-4xl">
            Our HVAC Service
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-muted-foreground">
            Choose best technicians and latest HVAC technology
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewServices.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 80} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange underline-offset-4 transition-colors hover:text-orange-dark hover:underline"
          >
            See all services
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
