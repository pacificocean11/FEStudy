import React from 'react';
import { Discipline, PerformanceRecord } from '../types';

interface ReviewModeProps {
    history: PerformanceRecord[];
    onNavigate: (discipline: Discipline, subject: string, topic: string, subtopic: string) => void;
    onClearHistory: () => void;
}

const ReviewMode: React.FC<ReviewModeProps> = ({ history, onNavigate, onClearHistory }) => {
    // FIX: Explicitly type the aggregated performance records to fix type inference
    // issues with `Object.values`, which was causing properties to be of type `unknown`.
    type WeakTopicItem = PerformanceRecord & { count: number };

    const weakTopics = history.reduce((acc, record) => {
        const key = `${record.discipline}::${record.subject}::${record.topic}::${record.subtopicName}`;
        if (!acc[key]) {
            acc[key] = {
                count: 0,
                ...record
            };
        }
        acc[key].count++;
        return acc;
    }, {} as Record<string, WeakTopicItem>);

    const sortedWeakTopics = (Object.values(weakTopics) as WeakTopicItem[]).sort((a, b) => b.count - a.count);

    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                    Review Weak Areas
                </h2>
                {history.length > 0 && (
                    <button 
                        onClick={onClearHistory}
                        className="text-sm text-red-500 hover:underline dark:text-red-400 font-medium"
                    >
                        Clear History
                    </button>
                )}
            </div>
            {sortedWeakTopics.length === 0 ? (
                <p className="text-slate-600 dark:text-slate-400 text-center py-8">
                    No incorrect answers have been recorded yet. Go to 'Study Mode' and answer some questions incorrectly to populate this list.
                </p>
            ) : (
                <div className="space-y-3">
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Here are the subtopics where you've answered questions incorrectly, ranked by the number of mistakes.</p>
                    {sortedWeakTopics.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => onNavigate(item.discipline, item.subject, item.topic, item.subtopicName)}
                            className="w-full text-left p-4 bg-slate-50 dark:bg-slate-700/50 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="font-semibold text-blue-600 dark:text-blue-400">{item.subtopicName}</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                        {item.subject} &gt; {item.topic}
                                    </div>
                                </div>
                                <div className="text-sm font-bold text-red-500 bg-red-100 dark:bg-red-900/30 rounded-full h-8 w-8 flex items-center justify-center">
                                    {item.count}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ReviewMode;