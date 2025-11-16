
import React from 'react';
import { Discipline } from '../types';
import { CivilIcon, MechanicalIcon, OtherIcon } from './icons';
import { DISCIPLINES } from '../constants';

interface DisciplineSelectorProps {
  onSelect: (discipline: Discipline) => void;
}

const ICONS: Record<Discipline, React.FC<{ className?: string }>> = {
  Civil: CivilIcon,
  Mechanical: MechanicalIcon,
  Other: OtherIcon,
};

const DisciplineCard: React.FC<{ discipline: Discipline, onSelect: () => void }> = ({ discipline, onSelect }) => {
  const Icon = ICONS[discipline];
  return (
    <button
      onClick={onSelect}
      className="group w-full text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 transform hover:-translate-y-1"
    >
      <Icon className="h-16 w-16 mx-auto text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition-colors duration-300" />
      <h3 className="mt-4 text-xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
        {discipline}
      </h3>
    </button>
  );
};

const DisciplineSelector: React.FC<DisciplineSelectorProps> = ({ onSelect }) => {
  return (
    <div className="text-center p-4 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-slate-900 dark:text-white">Choose Your Discipline</h2>
      <p className="mb-8 text-slate-600 dark:text-slate-400 max-w-md mx-auto">Select your field of study to get tailored practice questions for the FE exam.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {DISCIPLINES.map(discipline => (
          <DisciplineCard
            key={discipline}
            discipline={discipline}
            onSelect={() => onSelect(discipline)}
          />
        ))}
      </div>
    </div>
  );
};

export default DisciplineSelector;
