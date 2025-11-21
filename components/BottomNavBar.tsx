
import React from 'react';
import { PracticeMode } from '../types';
import { HomeIcon, ClockIcon, ListChecksIcon, UserIcon, ChartBarIcon } from './icons';

interface BottomNavBarProps {
  currentMode: PracticeMode;
  onSelectMode: (mode: PracticeMode) => void;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ currentMode, onSelectMode }) => {
  const navItems: { mode: PracticeMode; label: string; icon: React.FC<{ className?: string }> }[] = [
    { mode: 'study', label: 'Home', icon: HomeIcon },
    { mode: 'dashboard', label: 'Dashboard', icon: ChartBarIcon },
    { mode: 'timed', label: 'Practice', icon: ClockIcon },
    { mode: 'review', label: 'Review', icon: ListChecksIcon },
    { mode: 'profile', label: 'Profile', icon: UserIcon },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 z-50 pb-safe">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentMode === item.mode;
          return (
            <button
              key={item.mode}
              onClick={() => onSelectMode(item.mode)}
              className={`flex-1 flex flex-col items-center justify-center py-3 px-1 transition-colors duration-200 ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Icon className="h-6 w-6 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavBar;
