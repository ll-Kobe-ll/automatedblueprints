import { lesson as missedCallTextBack } from './missed-call-text-back';
import { lesson as speedToLead } from './speed-to-lead';
import { lesson as followUpSequences } from './follow-up-sequences';
import { lesson as reviewEngine } from './review-engine';
import { lesson as databaseReactivation } from './database-reactivation';
import { lesson as noShowRecovery } from './no-show-recovery';
import type { LessonData } from './types';

export const lessons: LessonData[] = [
  missedCallTextBack,
  speedToLead,
  followUpSequences,
  reviewEngine,
  databaseReactivation,
  noShowRecovery,
];
