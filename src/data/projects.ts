export interface Project {
  name: string;          // "Buc Door Systems"
  url: string;           // "https://bucdoorsystems.com"
  descriptor: string;    // "Garage Door Repair & Installation"
  location?: string;     // "Orange County"
  type: 'client' | 'template';
  screenshot?: string;   // "/proof/buc-door.webp" — optional; falls back to styled frame
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
];
