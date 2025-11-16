import React, { useState, useCallback } from 'react';
import { SUBJECTS_BY_DISCIPLINE } from './constants';
import { Discipline, Subtopic, SubtopicContent } from './types';
import SubjectSelector from './components/TopicSelector';
import LoadingSpinner from './components/LoadingSpinner';
import { ArrowLeftIcon, LogoIcon } from './components/icons';
import DisciplineSelector from './components/DisciplineSelector';
import ContentDisplay from './components/ContentDisplay';

const App: React.FC = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState<Subtopic | null>(null);
  const [contentCache, setContentCache] = useState<Record<string, SubtopicContent>>({});
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAndCacheContent = useCallback((discipline: Discipline, subject: string, topic: string, subtopic: Subtopic) => {
    const cacheKey = `${discipline}-${subject}-${topic}-${subtopic.name}`;
    if (contentCache[cacheKey]) {
      setSelectedSubtopic({ ...subtopic, content: contentCache[cacheKey] });
      return;
    }
    
    // Use pre-filled content if it exists
    if (subtopic.content) {
       setSelectedSubtopic(subtopic);
       setContentCache(prev => ({ ...prev, [cacheKey]: subtopic.content! }));
       return;
    }

    // If no content in cache and no pre-filled content, show an error.
    setError('Content for this subtopic is not yet available.');
    setSelectedSubtopic(subtopic);
  }, [contentCache]);


  const handleDisciplineSelect = (discipline: Discipline) => {
    setSelectedDiscipline(discipline);
    setSelectedSubject(null);
    setSelectedTopic(null);
    setSelectedSubtopic(null);
  };

  const handleChangeDiscipline = () => {
    setSelectedDiscipline(null);
    setSelectedSubject(null);
    setSelectedTopic(null);
    setSelectedSubtopic(null);
  }

  const handleSubtopicSelect = (subject: string, topic: string, subtopic: Subtopic) => {
    setError(null);
    setSelectedSubject(subject);
    setSelectedTopic(topic);
    if (selectedDiscipline) {
      fetchAndCacheContent(selectedDiscipline, subject, topic, subtopic);
    }
  };
  
  const handleBackToSubjects = () => {
    setSelectedSubtopic(null);
    setError(null);
  }

  const renderContent = () => {
    if (!selectedDiscipline) {
      return <DisciplineSelector onSelect={handleDisciplineSelect} />;
    }
    
    if (selectedSubtopic) {
        return (
            <div>
                <button 
                    onClick={handleBackToSubjects}
                    className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                    <ArrowLeftIcon className="h-4 w-4" />
                    Back to Subjects
                </button>

                <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                    {selectedDiscipline} &gt; {selectedSubject} &gt; {selectedTopic}
                </div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                    {selectedSubtopic.name}
                </h2>

                {isLoading && <LoadingSpinner />}
                {error && (
                  <div className="mt-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-center">
                    {error}
                  </div>
                )}
                {selectedSubtopic.content && !isLoading && <ContentDisplay content={selectedSubtopic.content} />}
            </div>
        )
    }

    return (
      <SubjectSelector
        subjects={SUBJECTS_BY_DISCIPLINE[selectedDiscipline]}
        selectedSubject={selectedSubject}
        selectedTopic={selectedTopic}
        selectedSubtopicName={selectedSubtopic?.name || null}
        onSubtopicSelect={handleSubtopicSelect}
        onChangeDiscipline={handleChangeDiscipline}
        selectedDiscipline={selectedDiscipline}
      />
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <LogoIcon className="h-8 w-8 text-blue-500" />
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              FE Exam Prep AI
            </h1>
          </div>
        </header>

        <main>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;