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
  {
    name: 'Buc Door Systems',
    url: 'https://bucdoorsystems.com',
    descriptor: 'Garage Door Repair & Installation',
    location: 'Orange County',
    type: 'client',
    screenshot: '/proof/buc-door.webp',
    caption:
      'Built for a garage door company in Orange County. Loads instant, built to show up in local search, one tap to call.',
  },
  {
    name: 'Restaurant',
    url: 'https://custom-restaurant-templates.pages.dev/',
    descriptor: 'Menus, Hours & Online Reservations',
    type: 'template',
    screenshot: '/proof/restaurant.webp',
    caption:
      'A template for restaurants. Menu, hours, and reservations up front, fast on a phone, easy to find on Google.',
  },
 /* {
    name: 'Roofing Company',
    url: 'https://roofing-company-template.pages.dev/',
    descriptor: 'Quotes & Local Search',
    type: 'template',
    screenshot: '/proof/roofing.webp',
    caption:
      'A template for roofing companies. Built to show up in local search and turn visitors into quote requests.',
  },
  {
    name: 'General Contractor',
    url: 'https://general-contractor-1mb.pages.dev/',
    descriptor: 'Built to Win Trust Fast',
    type: 'template',
    screenshot: '/proof/general-contractor.webp',
    caption:
      'A template for general contractors. Clean and fast, built to make a customer trust you before they call.',
  },*/
];
