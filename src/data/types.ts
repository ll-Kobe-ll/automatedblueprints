export interface PainPoint {
  title: string;
  body: string;
}

export interface IndustryData {
  slug: string;
  name: string;
  shortName: string;
  meta: {
    title: string;
    description: string;
    ogTitle?: string;
    ogDescription?: string;
  };
  hero: {
    eyebrow?: string;
    headline: string;
    subheadline: string;
  };
  painPoints: PainPoint[];
  solutionHeading: string;
  solutionIntro: string;
  systemNote: string;
  ctaHeading: string;
  ctaBody: string;
  schema: {
    serviceType: string;
    serviceDescription: string;
  };
}
