import type { LessonData } from './types';

export const lesson: LessonData = {
  slug: 'review-engine',
  title: 'The Review Engine: Stacking Stars on Google Automatically',
  promise: 'You will learn how businesses go from a handful of reviews to a wall of them without ever asking in person.',
  cardBlurb: 'Why the business with 150 reviews beats the better business with 8, and the simple system that closes that gap.',
  meta: {
    title: 'How to Get More Google Reviews Automatically | Automated Blueprints',
    description:
      'A review request system that texts customers after every completed job, with a direct link and one reminder. How it works step by step. Free lesson, no email required.',
  },
  problem: [
    'Two businesses do equally good work. One has 8 Google reviews, the other has 150. To every new customer searching, the second business is the obvious choice. Reviews are not a vanity number. They are the modern version of word of mouth, and they compound.',
    'Most owners know they should ask for reviews. Almost none do it consistently. Asking in person feels awkward, staff forget, and the customer who says "of course, happy to" gets home and never thinks about it again.',
    'The customers most likely to leave a review are the ones you just finished a job for. Satisfaction peaks the day the work is done and drops every day after. A request that goes out a week later is mostly wasted.',
    'The gap between you and the competitor with 150 reviews is not quality. It is that they have a system that asks every single customer at the right moment, and you are relying on memory.',
  ],
  diagramAlt: 'Workflow diagram: job done, review text with direct link goes out, a reminder follows in 3 days if there was no click, stars land on Google.',
  steps: [
    {
      title: 'You finish the job',
      body: 'That is your only involvement. Mark the job done the way you already do, and the system takes it from there.',
    },
    {
      title: 'A review request goes out by text the same day',
      body: 'Short and personal: "Thanks for letting us handle the job today. If you have 30 seconds, a review helps us a lot." The message includes a direct link that opens your Google review box in one tap. No searching, no logging in, no friction.',
    },
    {
      title: 'No click? One reminder after 3 days',
      body: 'People are busy, not unwilling. If the link was never opened, one polite reminder goes out three days later. One. Nobody gets nagged, and the second ask catches a surprising share of people who meant to do it the first time.',
    },
    {
      title: 'Stars stack up on Google',
      body: 'Review by review, your profile starts to look like the obvious choice. More reviews means better local search placement, which means more calls, which means more reviews. The wheel feeds itself.',
    },
  ],
  realLife:
    'A med spa finishes a client\'s third laser session. She loves the results and tells the front desk so on her way out. The old way, that compliment evaporates in the parking lot. With the engine running, she gets a text that evening with a one-tap link while she is on the couch. Thirty seconds later there is a five-star review describing exactly the treatment a hundred other women in town are searching for.',
};
