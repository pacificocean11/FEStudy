import React from 'react';
import { Discipline, Subject } from '../types';

interface TimedPracticeControllerProps {
    discipline: Discipline;
    allSubjects: Subject[];
}

const TimedPracticeController: React.FC<TimedPracticeControllerProps> = ({ discipline, allSubjects }) => {
    return (
        <div className="p-8 text-center bg-white dark:bg-slate-800 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Timed Practice Mode</h3>
            <p className="text-slate-600 dark:text-slate-400">This feature is under development and will be available soon.</p>
        </div>
    );
};

export default TimedPracticeController;
