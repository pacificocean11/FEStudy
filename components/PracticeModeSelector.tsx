import React from 'react';
import { Discipline, PracticeMode } from '../types';
import { BookOpenIcon, ClockIcon, ListChecksIcon } from './icons';

interface PracticeModeSelectorProps {
  onSelect: (mode: PracticeMode) => void;
  onBack: () => void;
  discipline: Discipline;
}

const MODES: { name: PracticeMode, title: string, description: string, icon: React.FC<{ className?: string }> }[] = [
  { name: 'study', title: 'Study Mode', description: 'Browse topics, read notes, and try examples at your own pace.', icon: BookOpenIcon },
  { name: 'timed', title: 'Timed Practice', description: 'Simulate exam conditions with a timed quiz on selected subjects.', icon: ClockIcon },
  { name: 'review', title: 'Review Mode', description: 'Focus on your weak areas with questions you previously answered incorrectly.', icon: ListChecksIcon },
];

const ModeCard: React.FC<{ mode: typeof MODES[0], onSelect: () => void }> = ({ mode, onSelect }) => {
  const Icon = mode.icon;
  return (
    <button
      onClick={onSelect}
      className="group w-full text-left p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex items-start gap-4">
        <Icon className="h-10 w-10 flex-shrink-0 text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition-colors duration-300 mt-1" />
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {mode.title}
          </h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{mode.description}</p>
        </div>
      </div>
    </button>
  );
};

const PracticeModeSelector: React.FC<PracticeModeSelectorProps> = ({ onSelect, onBack, discipline }) => {
  return (
    <div className="p-4 sm:p-0">
      <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Select a Practice Mode
          </h2>
          <button onClick={onBack} className="text-sm text-blue-500 hover:underline dark:text-blue-400 font-medium">
            Change Discipline
          </button>
      </div>
       <p className="mb-8 text-slate-600 dark:text-slate-400 max-w-2xl">You've selected the <strong>{discipline}</strong> discipline. Now, choose how you want to prepare.</p>
      <div className="grid grid-cols-1 gap-6 max-w-4xl">
        {MODES.map(mode => (
          <ModeCard
            key={mode.name}
            mode={mode}
            onSelect={() => onSelect(mode.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default PracticeModeSelector;
