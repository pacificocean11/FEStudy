
import React, { useState, useEffect } from 'react';
import { Discipline } from '../types';

interface HomeViewProps {
  discipline: Discipline;
  stats: {
    notesRead: number;
    questionsAttempted: number;
    questionsCorrect: number;
  };
}

const QUOTES = [
  "Engineering is the closest thing to magic that exists in the world. - Elon Musk",
  "Strive for perfection in everything you do. Take the best that exists and make it better. - Sir Henry Royce",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Scientists investigate that which already is; Engineers create that which has never been. - Albert Einstein",
  "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. - Charles Darwin",
  "Failure is the opportunity to begin again more intelligently. - Henry Ford"
];

const HomeView: React.FC<HomeViewProps> = ({ discipline, stats }) => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    setQuote(randomQuote);
  }, []);

  const accuracy = stats.questionsAttempted > 0
    ? Math.round((stats.questionsCorrect / stats.questionsAttempted) * 100)
    : 0;

  return (
    <div className="p-4 space-y-6">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Welcome back, {discipline} Engineer!
        </h2>
        <p className="text-slate-600 dark:text-slate-300 italic">
          "{quote}"
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800 text-center">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stats.notesRead}</div>
          <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wide">Notes Read</div>
        </div>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800 text-center">
          <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">{stats.questionsAttempted}</div>
          <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wide">Questions</div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-800 text-center">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">{stats.questionsCorrect}</div>
          <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wide">Correct</div>
        </div>
        <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-100 dark:border-teal-800 text-center">
          <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-1">{accuracy}%</div>
          <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wide">Accuracy</div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6 border border-slate-200 dark:border-slate-700">
         <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Session Progress</h3>
         <p className="text-slate-600 dark:text-slate-400 text-sm">
            Keep going! Every problem solved brings you one step closer to passing the FE exam. Use the navigation bar below to continue studying or practicing.
         </p>
      </div>
    </div>
  );
};

export default HomeView;
