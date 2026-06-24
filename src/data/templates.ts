export interface TemplateProduct {
  name: string;
  niche: string;
  screenshot: string;   // reuse the proof screenshots in /public/proof
  demoUrl: string;      // live demo to "Preview"
  price: string;        // shown price (mixed pricing: templates show a price)
  checkoutUrl: string;  // external checkout; until pasted the Buy button shows "Coming soon"
  blurb: string;
}

// Paste your real checkout links (Gumroad / Stripe / Whop) and prices.
// Any checkoutUrl left as a PASTE_ placeholder renders a "Coming soon" button
// instead of a broken link, so it is safe to deploy before they are set.
export const templates: TemplateProduct[] = [
  {
    name: 'Restaurant',
    niche: 'Restaurants & Hospitality',
    screenshot: '/proof/restaurant.webp',
    demoUrl: 'https://custom-restaurant-templates.pages.dev/',
    price: '$199',
    checkoutUrl: 'PASTE_RESTAURANT_CHECKOUT_URL',
    blurb: 'Menu, hours, and reservations up front. Fast on a phone, easy to find on Google.',
  },
  {
    name: 'Roofing',
    niche: 'Roofing & Exteriors',
    screenshot: '/proof/roofing.webp',
    demoUrl: 'https://roofing-company-template.pages.dev/',
    price: '$199',
    checkoutUrl: 'PASTE_ROOFING_CHECKOUT_URL',
    blurb: 'Built to show up in local search and turn visitors into inspection requests.',
  },
  {
    name: 'General Contractor',
    niche: 'Contractors & Remodelers',
    screenshot: '/proof/general-contractor.webp',
    demoUrl: 'https://general-contractor-1mb.pages.dev/',
    price: '$199',
    checkoutUrl: 'PASTE_CONTRACTOR_CHECKOUT_URL',
    blurb: 'Clean and fast, built to make a customer trust you before they call.',
  },
];
