import { HeroSection } from '@/components/hero/hero-section'
import { BrandsBanner } from '@/components/features/brands-banner'
import { FeaturesBanner } from '@/components/features/features-banner'
import { ServicesSection } from '@/components/services/services-section'
import { QuoteSection } from '@/components/quote/quote-section'
import { TestimonialsSection } from '@/components/testimonials/testimonials-section'
import { FaqSection } from '@/components/faq/faq-section'

export default function Page() {
  return (
    <main className="flex-1">
      <HeroSection />
      <BrandsBanner />
      <FeaturesBanner />
      <ServicesSection />
      <QuoteSection />
      <TestimonialsSection />
      <FaqSection />
    </main>
  )
}

