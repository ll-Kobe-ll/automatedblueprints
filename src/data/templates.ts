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
    checkoutUrl: 'PASTE_CONTRACTOR_CHECKOUT_URL',
  },
  {
    slug: 'restaurant',
    name: 'Restaurant',
    niche: 'Restaurants, Cafes, Bars, Bakeries',
    blurb: 'Menu, hours, and reservations up front. Editorial look, fast on a phone, easy to find on Google.',
    demoUrl: 'https://restaurant-35g.pages.dev/',
    screenshot: '/templates/restaurant.webp',
    checkoutUrl: 'PASTE_RESTAURANT_CHECKOUT_URL',
  },
  {
    slug: 'hair-salon',
    name: 'Hair Salon',
    niche: 'Salons, Spas, Barbers, Nail Studios',
    blurb: 'Boutique split hero with a clean price-list. High-fashion type that makes the work look premium.',
    demoUrl: 'https://hair-salon-emi.pages.dev/',
    screenshot: '/templates/hair-salon.webp',
    checkoutUrl: 'PASTE_SALON_CHECKOUT_URL',
  },
  {
    slug: 'dental-practice',
    name: 'Dental Practice',
    niche: 'Dentists, Chiropractors, Optometrists, Vets',
    blurb: 'Soft, reassuring design with pill-shaped cards and an easy path to book. Built to feel trustworthy.',
    demoUrl: 'https://dental-practice.pages.dev/',
    screenshot: '/templates/dental-practice.webp',
    checkoutUrl: 'PASTE_DENTAL_CHECKOUT_URL',
  },
  {
    slug: 'hardware-store',
    name: 'Hardware Store',
    niche: 'Hardware, Garden, Pet, Specialty Retail',
    blurb: 'Bold department grid and a clear process. Built for catalog-style shops that need to show range fast.',
    demoUrl: 'https://hardware-store.pages.dev/',
    screenshot: '/templates/hardware-store.webp',
    checkoutUrl: 'PASTE_HARDWARE_CHECKOUT_URL',
  },
  {
    slug: 'machine-shop',
    name: 'Machine Shop',
    niche: 'Fabricators, Distributors, Manufacturing',
    blurb: 'Industrial spec-sheet look with sharp edges and monospace type. Built to read as serious and capable.',
    demoUrl: 'https://machine-shop.pages.dev/',
    screenshot: '/templates/machine-shop.webp',
    checkoutUrl: 'PASTE_MACHINESHOP_CHECKOUT_URL',
  },
  {
    slug: 'fitness-studio',
    name: 'Fitness Studio',
    niche: 'Gyms, Yoga, CrossFit, Personal Trainers',
    blurb: 'Full-bleed hero with high-energy type and urgency CTAs. Built to turn a visitor into a trial booking.',
    demoUrl: 'https://fitness-studio-4ja.pages.dev/',
    screenshot: '/templates/fitness-studio.webp',
    checkoutUrl: 'PASTE_FITNESS_CHECKOUT_URL',
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    niche: 'Agents, Brokerages, Property Managers',
    blurb: 'Gallery-led layout with a property showcase and carousel. Navy-and-gold look that signals high-end.',
    demoUrl: 'https://real-estate-awb.pages.dev/',
    screenshot: '/templates/real-estate.webp',
    checkoutUrl: 'PASTE_REALESTATE_CHECKOUT_URL',
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    niche: 'Law, Accounting, Consulting, Finance',
    blurb: 'Trust-first split hero with a process timeline. Muted, credible design for firms that sell expertise.',
    demoUrl: 'https://professional-services-76l.pages.dev/',
    screenshot: '/templates/professional-services.webp',
    checkoutUrl: 'PASTE_PROSERVICES_CHECKOUT_URL',
  },
];
