
import React from 'react';
import { Discipline } from '../types';

interface ProfileViewProps {
  discipline: Discipline;
  onChangeDiscipline: () => void;
  onClearHistory: () => void;
  onLogout: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ discipline, onChangeDiscipline, onClearHistory, onLogout }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Profile & Settings</h2>
      
      <div className="space-y-6">
        <div className="pb-6 border-b border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Current Discipline</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            You are currently studying for the <strong>{discipline}</strong> FE Exam.
          </p>
          <button 
            onClick={onChangeDiscipline}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Change Discipline
          </button>
        </div>

        <div className="pb-6 border-b border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Data Management</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Clear your stored performance history and incorrect answers. This action cannot be undone.
          </p>
          <button 
            onClick={onClearHistory}
            className="px-4 py-2 bg-red-100 text-red-700 border border-red-200 rounded-md hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800 dark:hover:bg-red-900/50 transition-colors"
          >
            Clear Performance History
          </button>
        </div>

        <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">Account</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Sign out of your current session.
            </p>
            <button 
              onClick={onLogout}
              className="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              Log Out
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;