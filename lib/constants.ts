import type { LucideIcon } from 'lucide-react'
import { ShieldCheck, FileCheck2, BadgeCheck, Wrench } from 'lucide-react'

/* ---------------------------------- Brand --------------------------------- */

export const BRAND = {
  name: 'NextDay HVAC',
  phone: '(800) 555-0142',
  license: 'Lic. #HVAC-884213 · Fully Insured & Bonded',
} as const

/* --------------------------------- Nav links ------------------------------- */

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Systems', href: '#systems' },
  { label: 'Get a Quote', href: '#quote' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

/* ------------------------------ Feature banner ----------------------------- */

export interface Feature {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const FEATURES: Feature[] = [
  {
    id: 'certified',
    title: 'Certified Installation',
    description: 'Trained, certified local crews on every single job.',
    icon: BadgeCheck,
  },
  {
    id: 'permits',
    title: 'Permits & Disposal',
    description: 'We pull permits and haul away your old unit.',
    icon: FileCheck2,
  },
  {
    id: 'warranty',
    title: '10-Year Warranty',
    description: 'Parts and labor covered for a full decade.',
    icon: ShieldCheck,
  },
  {
    id: 'maintenance',
    title: 'Free 1st-Year Service',
    description: 'Complimentary maintenance visit in year one.',
    icon: Wrench,
  },
]

/* -------------------------------- Stats bar -------------------------------- */

export interface Stat {
  id: string
  value: string
  label: string
}

export const STATS: Stat[] = [
  { id: 'rating', value: '4.9★', label: 'Average rating across 2,800+ installs' },
  { id: 'ontime', value: '94%', label: 'Installs completed by next day' },
  { id: 'savings', value: '$1,420', label: 'Average saved vs. traditional quotes' },
]

/* ------------------------------ Testimonials ------------------------------- */

export interface Testimonial {
  id: number
  rating: number
  headline: string
  body: string
  author: string
  location: string
  badge: string
  image?: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    headline: 'Literally lifesaving in the July heat.',
    body: 'Our central AC quit on a Tuesday night. Every local company wanted a consultation days out. I booked a next-day install here, and by Wednesday at 2 PM the crew had the new system running. Incredible turnaround.',
    author: 'Marcus K.',
    location: 'Phoenix, AZ',
    badge: 'Verified Customer',
    image: '/images/avatars/marcus.png',
  },
  {
    id: 2,
    rating: 5,
    headline: 'Finally, a price I could actually trust.',
    body: 'No surprise add-ons, no four-hour sales pitch in my living room. The quoted install price was the price I paid. The crew was clean, fast, and walked me through the new thermostat before they left.',
    author: 'Danielle R.',
    location: 'Austin, TX',
    badge: 'Verified Customer',
    image: '/images/avatars/danielle.png',
  },
  {
    id: 3,
    rating: 5,
    headline: 'The free quote process was fast and accurate.',
    body: 'I was nervous about sizing, but the quote process matched what the install supervisor confirmed on the call. The whole request took two minutes and saved us over $1,500 compared to two other quotes.',
    author: 'James & Priya T.',
    location: 'Denver, CO',
    badge: 'Verified Customer',
    image: '/images/avatars/james.png',
  },
  {
    id: 4,
    rating: 5,
    headline: 'The crew treated my home with respect.',
    body: 'They laid down floor protection, cleaned up every scrap, and hauled away my ancient furnace. You can tell these are seasoned, certified installers and not a random subcontractor.',
    author: 'Sofia M.',
    location: 'San Diego, CA',
    badge: 'Verified Customer',
    image: '/images/avatars/sofia.png',
  },
  {
    id: 5,
    rating: 5,
    headline: 'Permits and paperwork handled for me.',
    body: 'I dreaded dealing with city permits. They pulled everything, scheduled the inspection, and it passed first try. The 10-year labor warranty gave me real peace of mind on the investment.',
    author: 'David L.',
    location: 'Columbus, OH',
    badge: 'Verified Customer',
    image: '/images/avatars/david.png',
  },
  {
    id: 6,
    rating: 5,
    headline: 'Booked online at midnight, installed by noon.',
    body: 'My newborn and I could not survive another day without AC. I scheduled the service from my phone late at night and a friendly, professional team arrived the next morning. Service like this is rare.',
    author: 'Aisha N.',
    location: 'Atlanta, GA',
    badge: 'Verified Customer',
    image: '/images/avatars/aisha.png',
  },
]

/* ----------------------------------- FAQ ----------------------------------- */

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'sizing',
    question: 'How do I know I am choosing the right size system for my home?',
    answer:
      'When you request a free quote, our team evaluates your home details, square footage, and local climate to recommend the optimal system size. A certified local installation supervisor double-verifies everything on a quick 10-minute confirmation call before installation to ensure a perfect fit.',
  },
  {
    id: 'pricing',
    question: 'Is my quote really all-inclusive?',
    answer:
      'Yes. Your quote covers the equipment, certified installation labor, standard permits, and removal of your old unit. There are no surprise fees or pushy in-home sales visits. The only time pricing changes is for non-standard work (like major ductwork), which is always confirmed with you before any charge.',
  },
  {
    id: 'warranty',
    question: 'What does the 10-year warranty actually cover?',
    answer:
      'Every system includes a 10-year warranty covering both parts and labor. If a covered component fails, we send a certified technician to repair or replace it at no cost to you. Your free first-year maintenance visit also helps keep the warranty in good standing.',
  },
  {
    id: 'financing',
    question: 'How does financing and pre-qualification work?',
    answer:
      'You can split your system into low monthly payments starting at $65/mo. Pre-qualification takes under a minute during your follow-up consultation and does not affect your credit score. You will see your estimated monthly payment instantly and can choose to pay in full or finance at any time.',
  },
]

/* ------------------------------- Footer nav -------------------------------- */

export const FOOTER_LINKS = {
  Systems: [
    { label: 'Air Conditioning', href: '/services/air-conditioning' },
    { label: 'Heat Pumps', href: '/services/heat-pumps' },
    { label: 'Mini-Splits', href: '/services/ductless-mini-splits' },
    { label: 'All Services', href: '/services' },
  ],
  Company: [
    { label: 'Get a Quote', href: '#quote' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'FAQ', href: '#faq' },
  ],
  Support: [
    { label: 'Warranty', href: '#faq' },
    { label: 'Get a Quote', href: '#quote' },
    { label: 'Financing', href: '#faq' },
    { label: 'Contact', href: '#' },
  ],
} as const
