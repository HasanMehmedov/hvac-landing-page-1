'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const SERVICES = [
  {
    id: 'air-conditioning',
    title: 'Air Conditioning',
    image: '/images/services/air-conditioning.png',
  },
  {
    id: 'heating',
    title: 'Heating Systems',
    image: '/images/services/heating.png',
  },
  {
    id: 'heat-pumps',
    title: 'Heat Pumps',
    image: '/images/services/heat-pumps.png',
  },
  {
    id: 'ductless',
    title: 'Wall-Mounted Units',
    image: '/images/services/ductless.png',
  },
  {
    id: 'air-quality',
    title: 'Air Quality',
    image: '/images/services/air-quality.png',
  },
  {
    id: 'repairs',
    title: 'Repairs & Maintenance',
    image: '/images/services/repairs.png',
  },
]

export function ServicesSection() {
  return (
    <section className="bg-secondary py-16 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand md:text-4xl text-center">
            Everything we install and service
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground text-center">
            Trusted local experts and dependable, modern equipment for your home.
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mt-12">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={i * 100}>
              <div className="flex flex-col items-center overflow-hidden bg-card border border-border rounded-2xl w-[240px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-border/60 group">
                <div className="relative w-full aspect-square overflow-hidden bg-secondary">
                  <Image
                    src={service.image || '/placeholder.svg'}
                    alt={service.title}
                    fill
                    sizes="240px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="py-5 text-base font-bold text-brand leading-none">
                  {service.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
