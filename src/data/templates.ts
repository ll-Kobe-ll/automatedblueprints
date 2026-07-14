export interface TemplateProduct {
  slug: string;
  name: string;
  niche: string;        // short target-industries line
  blurb: string;        // what this specific template is
  demoUrl?: string;     // live demo; omit -> "Demo coming soon"
  screenshot?: string;  // preview image; omit -> branded placeholder (still links to demo)
  checkoutUrl: string;  // Stripe Payment Link; PASTE_ -> "Coming soon"
}

// Price is global (site.templatePrice). Paste a Stripe Payment Link into each
// checkoutUrl when ready — any PASTE_ value renders a safe "Coming soon" button.
// A template with a demoUrl but no screenshot shows a branded card that still
// links to the live demo. Screenshots live in /public/templates/.
export const templates: TemplateProduct[] = [
  {
    slug: 'general-contractor',
    name: 'General Contractor',
    niche: 'Contractors, Roofers, HVAC, Trades',
    blurb: 'Split hero, service rows, and trust-first layout built to make a homeowner call you instead of the next guy.',
    demoUrl: 'https://general-contractor-1mb.pages.dev/',
    screenshot: '/templates/general-contractor.webp',
    checkoutUrl: 'https://buy.stripe.com/5kQdR9cn7a2e5OR9IW7IY00',
  },
  {
    slug: 'restaurant',
    name: 'Restaurant',
    niche: 'Restaurants, Cafes, Bars, Bakeries',
    blurb: 'Menu, hours, and reservations up front. Editorial look, fast on a phone, easy to find on Google.',
    demoUrl: 'https://restaurant-35g.pages.dev/',
    screenshot: '/templates/restaurant.webp',
    checkoutUrl: 'https://buy.stripe.com/28E7sL2Mx4HUb9b7AO7IY01',
  },
  {
    slug: 'hair-salon',
    name: 'Hair Salon',
    niche: 'Salons, Spas, Barbers, Nail Studios',
    blurb: 'Boutique split hero with a clean price-list. High-fashion type that makes the work look premium.',
    demoUrl: 'https://hair-salon-emi.pages.dev/',
    screenshot: '/templates/hair-salon.webp',
    checkoutUrl: 'https://buy.stripe.com/fZu5kDgDn0rEgtv5sG7IY02',
  },
  {
    slug: 'dental-practice',
    name: 'Dental Practice',
    niche: 'Dentists, Chiropractors, Optometrists, Vets',
    blurb: 'Soft, reassuring design with pill-shaped cards and an easy path to book. Built to feel trustworthy.',
    demoUrl: 'https://dental-practice.pages.dev/',
    screenshot: '/templates/dental-practice.webp',
    checkoutUrl: 'https://buy.stripe.com/4gM5kD1Iteiu9138ES7IY03',
  },
  {
    slug: 'hardware-store',
    name: 'Hardware Store',
    niche: 'Hardware, Garden, Pet, Specialty Retail',
    blurb: 'Bold department grid and a clear process. Built for catalog-style shops that need to show range fast.',
    demoUrl: 'https://hardware-store.pages.dev/',
    screenshot: '/templates/hardware-store.webp',
    checkoutUrl: 'https://buy.stripe.com/3cI5kD5YJ8Ya913aN07IY04',
  },
  {
    slug: 'machine-shop',
    name: 'Machine Shop',
    niche: 'Fabricators, Distributors, Manufacturing',
    blurb: 'Industrial spec-sheet look with sharp edges and monospace type. Built to read as serious and capable.',
    demoUrl: 'https://machine-shop.pages.dev/',
    screenshot: '/templates/machine-shop.webp',
    checkoutUrl: 'https://buy.stripe.com/3cIcN54UFfmy3GJ6wK7IY05',
  },
  {
    slug: 'fitness-studio',
    name: 'Fitness Studio',
    niche: 'Gyms, Yoga, CrossFit, Personal Trainers',
    blurb: 'Full-bleed hero with high-energy type and urgency CTAs. Built to turn a visitor into a trial booking.',
    demoUrl: 'https://fitness-studio-4ja.pages.dev/',
    screenshot: '/templates/fitness-studio.webp',
    checkoutUrl: 'https://buy.stripe.com/eVq6oH3QBgqC4KN5sG7IY07',
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    niche: 'Agents, Brokerages, Property Managers',
    blurb: 'Gallery-led layout with a property showcase and carousel. Navy-and-gold look that signals high-end.',
    demoUrl: 'https://real-estate-awb.pages.dev/',
    screenshot: '/templates/real-estate.webp',
    checkoutUrl: 'https://buy.stripe.com/bJe6oH5YJcam1yBcV87IY06',
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    niche: 'Law, Accounting, Consulting, Finance',
    blurb: 'Trust-first split hero with a process timeline. Muted, credible design for firms that sell expertise.',
    demoUrl: 'https://professional-services-76l.pages.dev/',
    screenshot: '/templates/professional-services.webp',
    checkoutUrl: 'https://buy.stripe.com/5kQcN50Epeiugtv08m7IY08',
  },
];