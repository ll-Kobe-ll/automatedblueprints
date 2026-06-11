import type { LessonData } from './types';

export const lesson: LessonData = {
  slug: 'no-show-recovery',
  title: 'No-Show Recovery: Protecting the Appointments You Already Booked',
  promise: 'You will learn the reminder-and-recovery sequence that keeps booked appointments from turning into empty chairs.',
  cardBlurb: 'A no-show is not a lost customer, it is a missed message. The 24-hour, 2-hour, and recovery text sequence explained.',
  meta: {
    title: 'How to Reduce No-Shows With Text Reminders, Explained | Automated Blueprints',
    description:
      'Most no-shows are forgetfulness, not flakiness. The 24-hour reminder, 2-hour reminder, and 1-hour recovery text sequence that fills the gap. Free lesson, no email required.',
  },
  problem: [
    'A no-show is the most expensive kind of lost business because you already did everything right. You won the lead, had the conversation, and booked the slot. Then the chair sits empty and the hour is gone forever.',
    'Here is the thing most owners get wrong: the majority of no-shows are not flaky people blowing you off. They are normal people who booked nine days ago and genuinely forgot, or had something come up and felt too awkward to call.',
    'The second mistake is treating a no-show as the end. The person still wants the service. They booked it. A short, friendly message within the hour recovers a real share of them, but almost nobody sends it because the moment is uncomfortable.',
    'Both problems have the same fix: a sequence that reminds people before the appointment and reaches out immediately after a miss, automatically, with no awkwardness because no human had to work up the nerve.',
  ],
  diagramAlt: 'Workflow diagram: appointment booked, 24-hour reminder, 2-hour reminder, then if there is a no-show a recovery text goes out within 1 hour and the appointment gets rebooked.',
  steps: [
    {
      title: 'The appointment gets booked',
      body: 'Your booking process stays exactly as it is. The system just knows an appointment exists and schedules the messages around it.',
    },
    {
      title: '24 hours out: a reminder with a choice',
      body: 'A short text confirms the time and gives an easy out: "Reply C to confirm or R to reschedule." Giving people a no-shame way to reschedule converts silent no-shows into moved appointments you can fill.',
    },
    {
      title: '2 hours out: the final nudge',
      body: 'A quick "See you at 2:00 today" message. By this point, forgetting is nearly impossible, and anyone who has a conflict still has time to tell you instead of just not showing.',
    },
    {
      title: 'No-show anyway? A recovery text within the hour',
      body: 'No guilt trip. Something like: "Sorry we missed you today. Things come up. Want me to find you another spot this week?" Sent while the appointment is still fresh, this message rebooks people a phone call never would.',
    },
    {
      title: 'The slot gets refilled',
      body: 'Confirmed reschedules go back on your calendar. The hour you would have eaten becomes a booked appointment a few days later, and the customer stays a customer instead of quietly disappearing.',
    },
  ],
  realLife:
    'A med spa books a new client for a consult two weeks out. Day of, the client\'s kid gets sent home sick from school. The old way, she just does not show, feels embarrassed, and never calls again. With the sequence running, she replied R to the 24-hour text the night before, picked a new slot from the reschedule link, and the spa filled her original time with someone from the waitlist. Two appointments kept from one reminder text.',
};
