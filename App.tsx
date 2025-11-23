
import React, { useState, useCallback, useEffect } from 'react';
import { SUBJECTS_BY_DISCIPLINE } from './constants';
import { Discipline, Subtopic, SubtopicContent, PracticeMode, PerformanceRecord } from './types';
import SubjectSelector from './components/TopicSelector';
import LoadingSpinner from './components/LoadingSpinner';
import { ArrowLeftIcon, LogoIcon } from './components/icons';
import DisciplineSelector from './components/DisciplineSelector';
import ContentDisplay from './components/ContentDisplay';
import TimedPracticeController from './components/TimedPracticeController';
import ReviewMode from './components/ReviewMode';
import BottomNavBar from './components/BottomNavBar';
import HomeView from './components/HomeView';
import ProfileView from './components/ProfileView';
import LoginView from './components/LoginView';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
  // App State
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | null>(null);
  const [practiceMode, setPracticeMode] = useState<PracticeMode>('study');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState<Subtopic | null>(null);
  const [contentCache, setContentCache] = useState<Record<string, SubtopicContent>>({});
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [performanceHistory, setPerformanceHistory] = useState<PerformanceRecord[]>([]);
  
  // Session Statistics State
  const [sessionStats, setSessionStats] = useState({
    notesRead: 0,
    questionsAttempted: 0,
    questionsCorrect: 0
  });

  const HISTORY_KEY = 'fe-exam-prep-history';
  const AUTH_KEY = 'fe-exam-prep-auth';

  // Load History and Auth on Mount
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem(HISTORY_KEY);
      if (savedHistory) {
        setPerformanceHistory(JSON.parse(savedHistory));
      }
      
      const savedAuth = localStorage.getItem(AUTH_KEY);
      if (savedAuth === 'true') {
        setIsAuthenticated(true);
      }
    } catch (e) {
      console.error("Failed to load local storage data:", e);
      localStorage.removeItem(HISTORY_KEY);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem(AUTH_KEY, 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setSelectedDiscipline(null);
    setPracticeMode('study');
    localStorage.removeItem(AUTH_KEY);
  };

  const updatePerformanceHistory = (newRecords: PerformanceRecord[]) => {
    try {
      setPerformanceHistory(newRecords);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(newRecords));
    } catch (e) {
      console.error("Failed to save performance history:", e);
    }
  };

  const handleIncorrectAnswer = useCallback((question: string, subtopicName: string, topicName: string, subjectName: string) => {
    if (!selectedDiscipline) return;
    const newRecord: PerformanceRecord = { discipline: selectedDiscipline, subject: subjectName, topic: topicName, subtopicName, question };
    if (!performanceHistory.some(r => r.question === newRecord.question)) {
      const updatedHistory = [...performanceHistory, newRecord];
      updatePerformanceHistory(updatedHistory);
    }
  }, [performanceHistory, selectedDiscipline]);

  const handleAnswer = useCallback((question: string, isCorrect: boolean, subtopicName: string, topicName: string, subjectName: string) => {
    setSessionStats(prev => ({
      ...prev,
      questionsAttempted: prev.questionsAttempted + 1,
      questionsCorrect: isCorrect ? prev.questionsCorrect + 1 : prev.questionsCorrect
    }));

    if (!isCorrect) {
       handleIncorrectAnswer(question, subtopicName, topicName, subjectName);
    }
  }, [handleIncorrectAnswer]);

  const clearHistory = () => {
    updatePerformanceHistory([]);
    setSessionStats({
      notesRead: 0,
      questionsAttempted: 0,
      questionsCorrect: 0
    });
  };

  const fetchAndCacheContent = useCallback(async (discipline: Discipline, subject: string, topic: string, subtopic: Subtopic) => {
    const cacheKey = `${discipline}-${subject}-${topic}-${subtopic.name}`;
    if (contentCache[cacheKey]) {
      setSelectedSubtopic({ ...subtopic, content: contentCache[cacheKey] });
      setSessionStats(prev => ({ ...prev, notesRead: prev.notesRead + 1 }));
      return;
    }

    setIsLoading(true);
    setError(null);
    setSelectedSubtopic(subtopic); 

    const slugify = (text: string) => text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');

    const slugifySubject = (text: string) => slugify(text.replace(/^\d+\.\s*/, ''));
    
    // Handle inconsistent topic slugification between disciplines
    let slugifiedTopic: string;
    if (discipline === 'Mechanical') {
        slugifiedTopic = slugify(topic);
    } else {
        slugifiedTopic = slugify(topic.replace(/^[A-Z]\.\s*/, ''));
    }

    const path = `/data/${slugify(discipline)}/${slugifySubject(subject)}/${slugifiedTopic}/${slugify(subtopic.name)}.json`;

    try {
      const response = await fetch(path);
      if (!response.ok) {
        if (response.status === 404) throw new Error('Content for this subtopic is not yet available.');
        throw new Error('Failed to load content.');
      }
      const data: SubtopicContent = await response.json();
      setContentCache(prev => ({ ...prev, [cacheKey]: data }));
      setSelectedSubtopic({ ...subtopic, content: data });
      setSessionStats(prev => ({ ...prev, notesRead: prev.notesRead + 1 }));
    } catch (e: any) {
      setError(e.message);
      setSelectedSubtopic({ ...subtopic, content: null });
    } finally {
      setIsLoading(false);
    }
  }, [contentCache]);

  const handleDisciplineSelect = (discipline: Discipline) => {
    setSelectedDiscipline(discipline);
    setPracticeMode('study'); // Default to study mode (mapped from 'Home' on bottom nav) effectively resets flow
    setSelectedSubject(null);
    setSelectedTopic(null);
    setSelectedSubtopic(null);
  };

  const handleChangeDiscipline = () => {
    setSelectedDiscipline(null);
    setPracticeMode('study');
    setSelectedSubject(null);
    setSelectedTopic(null);
    setSelectedSubtopic(null);
  }
  
  const handleSubtopicSelect = useCallback((subject: string, topic: string, subtopic: Subtopic) => {
    setError(null);
    setSelectedSubject(subject);
    setSelectedTopic(topic);
    if (selectedDiscipline) {
      fetchAndCacheContent(selectedDiscipline, subject, topic, subtopic);
    }
  }, [selectedDiscipline, fetchAndCacheContent]);
  
  const handleBackToSubjects = () => {
    setSelectedSubtopic(null);
    setError(null);
  }

  const navigateToSubtopic = useCallback((discipline: Discipline, subjectName: string, topicName: string, subtopicName: string) => {
    const subjects = SUBJECTS_BY_DISCIPLINE[discipline];
    const subject = subjects.find(s => s.name === subjectName);
    const topic = subject?.topics.find(t => t.name === topicName);
    const subtopic = topic?.subtopics.find(st => st.name === subtopicName);

    if (discipline && subject && topic && subtopic) {
      setSelectedDiscipline(discipline);
      setPracticeMode('study');
      handleSubtopicSelect(subject.name, topic.name, subtopic);
    }
  }, [handleSubtopicSelect]);

  const handleBottomNavSelect = (mode: PracticeMode) => {
    // If clicking the active tab (e.g. 'study'), reset its state (e.g. back to list)
    if (mode === practiceMode && mode === 'study') {
        setSelectedSubtopic(null);
        setSelectedSubject(null);
        setSelectedTopic(null);
    }
    setPracticeMode(mode);
  };

  const renderContent = () => {
    if (!selectedDiscipline) {
      return <DisciplineSelector onSelect={handleDisciplineSelect} />;
    }

    switch (practiceMode) {
      case 'dashboard':
        return <HomeView discipline={selectedDiscipline} stats={sessionStats} />;
      case 'study':
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
              {selectedSubtopic.content && !isLoading && 
                <ContentDisplay 
                  content={selectedSubtopic.content} 
                  onAnswer={(question, isCorrect) => handleAnswer(question, isCorrect, selectedSubtopic!.name, selectedTopic!, selectedSubject!)}
                />
              }
            </div>
          );
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
      case 'timed':
        return (
          <TimedPracticeController 
            discipline={selectedDiscipline} 
            allSubjects={SUBJECTS_BY_DISCIPLINE[selectedDiscipline]} 
          />
        );
      case 'review':
        return (
          <ReviewMode 
            history={performanceHistory} 
            onNavigate={navigateToSubtopic}
            onClearHistory={clearHistory}
          />
        );
      case 'profile':
        return (
          <ProfileView 
            discipline={selectedDiscipline} 
            onChangeDiscipline={handleChangeDiscipline} 
            onClearHistory={clearHistory}
            onLogout={handleLogout}
          />
        );
      default:
        return null;
    }
  };

  // Authentication Check
  if (!isAuthenticated) {
    return <LoginView onLogin={handleLogin} />;
  }

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans p-4 sm:p-6 lg:p-8 ${selectedDiscipline ? 'pb-64' : ''}`}>
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
      
      {selectedDiscipline && (
        <BottomNavBar currentMode={practiceMode} onSelectMode={handleBottomNavSelect} />
      )}
    </div>
  );
};

export default App;
