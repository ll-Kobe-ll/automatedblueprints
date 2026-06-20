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
    // screenshot: '/proof/buc-door.webp',
    caption:
      'Built for a garage door company in Orange County. Loads instant, built to show up in local search, one tap to call.',
  },
];
