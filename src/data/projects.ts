export interface Project {
  name: string;          // "Restaurant"
  url: string;           // live demo URL
  descriptor: string;    // "Menus, Hours & Online Reservations"
  location?: string;     // "Orange County"
  type: 'client' | 'template';
  screenshot?: string;   // "/templates/restaurant.webp" — optional; falls back to styled frame
  caption: string;       // honest, claims-safe one-liner shown under the card
}

// Add a build by appending an object here. No other file needs to change.
// For a template/demo (not a paid client), set type: 'template' so it gets
// labeled honestly and does not imply a client track record.
export const projects: Project[] = [
  // Buc Door Systems (real client build) removed 2026-07: the client site went
  // offline, so it can no longer serve as clickable proof. Re-add if it returns.
  {
    name: 'Restaurant',
    url: 'https://restaurant-35g.pages.dev/',
    descriptor: 'Menus, Hours & Online Reservations',
    type: 'template',
    screenshot: '/templates/restaurant.webp',
    caption:
      'A template for restaurants. Menu, hours, and reservations up front, fast on a phone, easy to find on Google.',
  },
  {
    name: 'General Contractor',
    url: 'https://general-contractor-1mb.pages.dev/',
    descriptor: 'Built to Win Trust Fast',
    type: 'template',
    screenshot: '/templates/general-contractor.webp',
    caption:
      'A template for general contractors. Clean and fast, built to make a customer trust you before they call.',
  },
  {
    name: 'Dental Practice',
    url: 'https://dental-practice.pages.dev/',
    descriptor: 'Bookings That Feel Easy',
    type: 'template',
    screenshot: '/templates/dental-practice.webp',
    caption:
      'A template for dental and health practices. Soft, reassuring design with an easy path to book a visit.',
  },
  {
    name: 'Hair Salon',
    url: 'https://hair-salon-emi.pages.dev/',
    descriptor: 'Booking-First Design',
    type: 'template',
    screenshot: '/templates/hair-salon.webp',
    caption:
      'A template for salons and spas. Clean visuals up front, built to turn browsers into booked appointments.',
  },
  {
    name: 'Hardware Store',
    url: 'https://hardware-store.pages.dev/',
    descriptor: 'Built for Local Retail',
    type: 'template',
    screenshot: '/templates/hardware-store.webp',
    caption:
      'A template for hardware and retail shops. Product-forward layout that gets people in the door.',
  },
  {
    name: 'Machine Shop',
    url: 'https://machine-shop.pages.dev/',
    descriptor: 'Industrial, No Fluff',
    type: 'template',
    screenshot: '/templates/machine-shop.webp',
    caption:
      'A template for machine shops and fabricators. Straightforward and technical, built to win RFQs.',
  },
  {
    name: 'Fitness Studio',
    url: 'https://fitness-studio-4ja.pages.dev/',
    descriptor: 'High-Energy, Fast Signups',
    type: 'template',
    screenshot: '/templates/fitness-studio.webp',
    caption:
      'A template for gyms and studios. Bold and energetic, built to turn visitors into trial signups.',
  },
  {
    name: 'Real Estate',
    url: 'https://real-estate-awb.pages.dev/',
    descriptor: 'Listings That Sell Themselves',
    type: 'template',
    screenshot: '/templates/real-estate.webp',
    caption:
      'A template for agents and brokerages. Photo-forward layout built to showcase listings and capture leads.',
  },
  {
    name: 'Professional Services',
    url: 'https://professional-services-76l.pages.dev/',
    descriptor: 'Trust-First, Credible',
    type: 'template',
    screenshot: '/templates/professional-services.webp',
    caption:
      'A template for law, accounting, and consulting firms. Clean and credible, built to convert inquiries into calls.',
  },
];
