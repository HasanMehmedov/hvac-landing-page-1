import type { Metadata } from 'next'
import { Reveal } from '@/components/reveal'
import { ServiceCard } from '@/components/services/service-card'
import { SERVICES } from '@/lib/services'

export const metadata: Metadata = {
  title: 'HVAC Services | NextDay HVAC',
  description:
    'Explore the full range of NextDay HVAC services — air conditioning, heating, heat pumps, ductless mini-splits, ductwork, commercial HVAC, indoor air quality, and maintenance.',
}

export default function ServicesPage() {
  return (
    <main className="flex-1 pt-16">
      {/* Header */}
      <section className="border-b border-border bg-secondary py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-balance text-center text-3xl font-bold tracking-tight text-brand sm:text-4xl lg:text-5xl">
              Our HVAC Service
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-center text-pretty text-lg leading-relaxed text-muted-foreground">
              Choose best technicians and latest HVAC technology
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-background py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, i) => (
              <Reveal key={service.id} delay={(i % 4) * 80} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
