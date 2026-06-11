export interface LessonData {
  slug: string;
  title: string;          // h1
  promise: string;        // one-sentence promise under the h1
  cardBlurb: string;      // short blurb for the /learn index card
  meta: {
    title: string;
    description: string;
  };
  problem: string[];      // 3-4 short paragraphs
  diagramAlt: string;
  steps: { title: string; body: string }[];
  realLife: string;       // one concrete scenario
}
