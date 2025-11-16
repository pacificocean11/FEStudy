export type Discipline = 'Civil' | 'Mechanical' | 'Other';

export interface SolvedExampleOption {
  text: string;
  isCorrect: boolean;
}

export interface SolvedExample {
  question: string;
  options: SolvedExampleOption[];
  explanation: string;
}

export interface SubtopicContent {
  notes: string;
  video: string; // URL
  aiVideo: string; // URL
  solvedExamples: SolvedExample[];
}

export interface Subtopic {
  name: string;
  content: SubtopicContent | null;
}

export interface Topic {
  name: string;
  subtopics: Subtopic[];
}

export interface Subject {
  name: string;
  topics: Topic[];
}

export type PracticeMode = 'study' | 'timed' | 'review';

export interface PerformanceRecord {
  discipline: Discipline;
  subject: string;
  topic: string;
  subtopicName: string;
  question: string;
}
